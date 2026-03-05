+++
date = '2026-03-05T12:09:33-03:00'
draft = false
title = 'From prompt to ready API: Building a Go app with Claude Code and Hexago MCP'
+++
> **TL;DR**: In this session we gave Claude Code a descriptive natural-language prompt and,
> using the **Hexago** MCP server, it generated the complete scaffolding for a Go project
> with hexagonal architecture. We then implemented all the business logic layer by layer
> until we had a working REST API with PostgreSQL, migrations, and a CLI command to manage them.

---

## The project: Family Pantry API

A backend API to manage a family pantry. Products are identified by their **EAN-13** barcode.
The system must:

- Maintain a product catalog with categories.
- Record stock entries and exits (movements).
- Validate that stock never goes negative.
- Generate stock reports and low-stock alerts.

---

## Pre-requisites
Before start generating the project we needed to do some tasks

1. Create the project folder

```shell
mkdir pantry
cd pantry
```

2. Register the MCP. For these tests I was registering it as per project, but you can register it globally if you like, just check the documentation about it. This command created a `.mcp.json` file in the root of the folder.

```shell
claude mcp add --scope project hexago -- hexago mcp
```

3. Copied the initial prompt into a file, `pantry-init-prompt-natural-en.md` in this case.

~~~yaml
# Family Pantry API — Go Project with Hexagonal Architecture

You have access to the **Hexago** MCP server, a scaffolding CLI for Go projects with
hexagonal architecture (Ports & Adapters). Use it to generate the complete structure
for the project described below. Work in order and validate the architecture at the end.

---

## Project Context

A backend API to manage a **family pantry**. Products come from purchases at wholesale
stores and are identified by their **EAN-13** barcode. The system must maintain a product
catalog and track their movement (stock entries and exits).

**Target directory:** `/home/pato/go/src/github.com/padiazg/tmp/pantry`

---

## 1. Initialization

Create a new project named `pantry` with Go module `github.com/padiazg/pantry`.
Use **Chi** as the HTTP framework. The project is a standard HTTP server.
Include support for Docker, database migrations, and observability (health checks / metrics).

---

## 2. Domain

### Entities

**Product** — an item stored in the pantry.
Fields: `ean13` (string, natural key), `name`, `description`, `unit` (string — e.g. "kg", "liters", "units"),
`minStock` (float64), `currentStock` (float64), `categoryID` (string), `active` (bool),
`createdAt` and `updatedAt` (time.Time).

**Category** — a grouping of products.
Fields: `id` (string), `name`, `description` (string), `createdAt` (time.Time).

**Movement** — a record of a stock entry or exit.
Fields: `id` (string), `productEan13` (string), `type` (string — see value object),
`quantity` (float64), `reason`, `notes`, `createdBy` (string), `createdAt` (time.Time).

### Value Objects

- **MovementType** — represents the movement type: `"in"` (entry) or `"out"` (exit).
  Must be implemented as typed constants in the domain.
- **StockLevel** — a quantity with positive-value validation (> 0).
- **EAN13** — a 13-digit barcode. Must validate that the check digit is correct
  according to the standard GS1 algorithm.

---

## 3. Business Services

Generate the following services in the business logic layer:

- **ManageProduct** — create, update, and activate/deactivate products.
- **GetProduct** — fetch a product by EAN-13 and list products with filters.
- **ManageCategory** — create and update categories.
- **RecordMovement** — record a stock entry or exit, enforcing business rules.
- **GetMovements** — query movement history with optional filters.
- **GetStockReport** — generate a current stock summary with low-stock alerts.

---

## 4. Adapters

### Output — Database Repositories

Generate a repository for each entity: `ProductRepository`, `CategoryRepository`,
and `MovementRepository`. All are secondary adapters of type database.

### Input — HTTP Handlers

Generate an HTTP handler for each resource: `ProductHandler`, `CategoryHandler`,
and `MovementHandler`. These are primary adapters.

---

## 5. Migrations

Create migrations with the following names, in this order:

1. `create_categories_table`
2. `create_products_table`
3. `create_movements_table`
4. `add_stock_indexes`

The reference schema to implement them is:

```sql
CREATE TABLE categories (
    id          VARCHAR(36) PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
    ean13         CHAR(13) PRIMARY KEY,
    name          VARCHAR(200) NOT NULL,
    description   TEXT,
    unit          VARCHAR(30) NOT NULL,
    min_stock     DECIMAL(10,3) NOT NULL DEFAULT 0,
    current_stock DECIMAL(10,3) NOT NULL DEFAULT 0,
    category_id   VARCHAR(36) REFERENCES categories(id),
    active        BOOLEAN NOT NULL DEFAULT TRUE,
    created_at    TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE movements (
    id            VARCHAR(36) PRIMARY KEY,
    product_ean13 CHAR(13) NOT NULL REFERENCES products(ean13),
    type          VARCHAR(3) NOT NULL CHECK (type IN ('in', 'out')),
    quantity      DECIMAL(10,3) NOT NULL CHECK (quantity > 0),
    reason        VARCHAR(200),
    notes         TEXT,
    created_by    VARCHAR(100),
    created_at    TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_movements_product ON movements(product_ean13);
CREATE INDEX idx_movements_created ON movements(created_at);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_active   ON products(active);
```
````
---

## 6. Infrastructure

Generate the following support tools:

- A **validator** named `PantryValidator`.
- A **mapper** named `ProductMapper`.
- A **mapper** named `MovementMapper`.

---

## 7. Validation

Once all components are generated, verify that the architecture is correct
and that there are no dependency violations between layers.

---

## 8. REST API (reference for handler implementation)

### Categories
```
GET    /api/v1/categories        # list all
POST   /api/v1/categories        # create
GET    /api/v1/categories/{id}   # get by ID
PUT    /api/v1/categories/{id}   # update
```

### Products
```
GET    /api/v1/products                    # list (?category=&active=&low_stock=)
POST   /api/v1/products                    # create
GET    /api/v1/products/{ean13}            # get by EAN-13
PUT    /api/v1/products/{ean13}            # update
DELETE /api/v1/products/{ean13}            # deactivate (soft delete)
GET    /api/v1/products/{ean13}/stock      # current stock + minimum level
GET    /api/v1/products/{ean13}/movements  # product movement history
```

### Movements
```
GET    /api/v1/movements         # history (?ean13=&type=&from=&to=)
POST   /api/v1/movements         # record a movement (in/out)
GET    /api/v1/movements/{id}    # movement detail
```

### Reports
```
GET    /api/v1/reports/stock      # current stock summary
GET    /api/v1/reports/low-stock  # products below minimum
```

---

## 9. Business Rules

1. **Non-negative stock**: when recording an exit (`out`), reject if `currentStock - quantity < 0`.
2. **Atomic stock update**: record the `Movement` and update `Product.currentStock`
   in the same database transaction.
3. **Soft delete**: deactivating a product sets `active = false`; the record is never deleted.
4. **Low-stock alert**: a product is low on stock when `currentStock <= minStock`.
5. **EAN-13 validation**: verify that the code has 13 digits and that the check digit
   is correct (GS1 algorithm) before persisting any product or movement.
6. **Movement IDs as UUID v4**: generated in the service layer, not delegated to the database.

---

## 10. Technology Stack

| Component   | Library                                  |
|-------------|------------------------------------------|
| HTTP        | `github.com/go-chi/chi/v5`               |
| Database    | PostgreSQL + `github.com/jmoiron/sqlx`   |
| Migrations  | `github.com/golang-migrate/migrate`      |
| UUID        | `github.com/google/uuid`                 |
| Config      | `github.com/spf13/viper` (already included) |
| Validation  | `github.com/go-playground/validator/v10` |

## 11. Environment Variables

```env
PANTRY_SERVER_PORT=8080
PANTRY_DATABASE_URL=postgres://user:pass@localhost:5432/pantry?sslmode=disable
PANTRY_LOG_LEVEL=info
PANTRY_LOG_FORMAT=json
```

---

When the scaffolding is complete, let me know and we'll start implementing the business
logic layer by layer.
~~~
---

## Session 1 — Scaffolding with Hexago MCP

I prompted Claude Code to follow the instruction from the file we just created
```
──────────────────────────────────────────────────────────────────────────────────
❯ follow the instructions in pantry-init-prompt-natural-en.md
──────────────────────────────────────────────────────────────────────────────────

```

Claude Code read the file and used the **Hexago** MCP server to generate the entire
structure in order:

### 1. Project initialization

```
hexago_init
  name: pantry
  module: github.com/padiazg/pantry
  framework: chi
  project_type: http-server
  with_docker: true
  with_migrations: true
  with_observability: true
```

This generated: `main.go`, `cmd/root.go`, `Dockerfile`, `compose.yaml`, `Makefile`,
`pkg/logger/`, `pkg/server/`, `internal/config/`, `internal/observability/` and the
base folder structure.

### 2. Domain entities

```
hexago_add_domain_entity  name: Product   fields: ean13:string,name:string,...
hexago_add_domain_entity  name: Category  fields: id:string,name:string,...
hexago_add_domain_entity  name: Movement  fields: id:string,productEan13:string,...
```

### 3. Value objects

```
hexago_add_domain_valueobject  name: EAN13        fields: value:string
hexago_add_domain_valueobject  name: MovementType fields: value:string
hexago_add_domain_valueobject  name: StockLevel   fields: value:float64
```

### 4. Business services

```
hexago_add_service  name: ManageProduct
hexago_add_service  name: GetProduct
hexago_add_service  name: ManageCategory
hexago_add_service  name: RecordMovement
hexago_add_service  name: GetMovements
hexago_add_service  name: GetStockReport
```

### 5. Secondary adapters (Repositories)

```
hexago_add_adapter  direction: secondary  adapter_type: database  name: ProductRepository
hexago_add_adapter  direction: secondary  adapter_type: database  name: CategoryRepository
hexago_add_adapter  direction: secondary  adapter_type: database  name: MovementRepository
```

### 6. Primary adapters (HTTP Handlers)

```
hexago_add_adapter  direction: primary  adapter_type: http  name: ProductHandler
hexago_add_adapter  direction: primary  adapter_type: http  name: CategoryHandler
hexago_add_adapter  direction: primary  adapter_type: http  name: MovementHandler
```

### 7. SQL migrations

```
hexago_add_migration  name: create_categories_table  migration_type: sql
hexago_add_migration  name: create_products_table    migration_type: sql
hexago_add_migration  name: create_movements_table   migration_type: sql
hexago_add_migration  name: add_stock_indexes        migration_type: sql
```

The `.up.sql` files were filled in with the schema from the spec:

```sql
-- 000001_create_categories_table.up.sql
CREATE TABLE categories (
    id          VARCHAR(36) PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

-- 000002_create_products_table.up.sql
CREATE TABLE products (
    ean13         CHAR(13) PRIMARY KEY,
    name          VARCHAR(200) NOT NULL,
    description   TEXT,
    unit          VARCHAR(30) NOT NULL,
    min_stock     DECIMAL(10,3) NOT NULL DEFAULT 0,
    current_stock DECIMAL(10,3) NOT NULL DEFAULT 0,
    category_id   VARCHAR(36) REFERENCES categories(id),
    active        BOOLEAN NOT NULL DEFAULT TRUE,
    created_at    TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMP NOT NULL DEFAULT NOW()
);

-- 000003_create_movements_table.up.sql
CREATE TABLE movements (
    id            VARCHAR(36) PRIMARY KEY,
    product_ean13 CHAR(13) NOT NULL REFERENCES products(ean13),
    type          VARCHAR(3) NOT NULL CHECK (type IN ('in', 'out')),
    quantity      DECIMAL(10,3) NOT NULL CHECK (quantity > 0),
    reason        VARCHAR(200),
    notes         TEXT,
    created_by    VARCHAR(100),
    created_at    TIMESTAMP NOT NULL DEFAULT NOW()
);

-- 000004_add_stock_indexes.up.sql
CREATE INDEX idx_movements_product ON movements(product_ean13);
CREATE INDEX idx_movements_created ON movements(created_at);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_active   ON products(active);
```

### 8. Infrastructure

```
hexago_add_tool  tool_type: validator  name: PantryValidator
hexago_add_tool  tool_type: mapper     name: ProductMapper
hexago_add_tool  tool_type: mapper     name: MovementMapper
```

### 9. Architecture validation

```
hexago_validate
```

Result: **11/11 checks passed** ✓

```
✓ Domain layer has no external dependencies
✓ Services only depend on domain interfaces
✓ Adapters depend on domain, not on each other
✓ No circular dependencies
... (8 more checks)
```

---

## Session 2 — Layer-by-layer implementation
Now that the scaffolding was completed we asked to implement the bussiness logic. Here is where Claude needs to fill the gaps and construct around the scaffolding. This is where the created structure and project validation feature from our tool becomes valuable by forcing the generator to stay within the established limits. 

```shell
 Infrastructure
  - Validator: PantryValidator
  - Mappers: ProductMapper, MovementMapper

  Architecture validation: 11/11 checks passed — no dependency violations between layers.

  Ready to start implementing the business logic layer by layer. Where would you like to begin?

✻ Sautéed for 1m 52s

──────────────────────────────────────────────────────────────────────────────────
❯  implement the business logic layer by layer
──────────────────────────────────────────────────────────────────────────────────
```

With the structure generated, Claude Code implemented the real logic, starting from
the inside (domain) outward (HTTP).

### Value objects

**EAN13** with GS1 validation (check digit algorithm):

```go
// internal/core/domain/e_a_n13.go
type EAN13 struct{ Value string }

func NewEAN13(code string) (EAN13, error) {
    v := EAN13{Value: code}
    return v, v.Validate()
}

func (v EAN13) Validate() error {
    if len(v.Value) != 13 {
        return fmt.Errorf("EAN-13 must be 13 digits, got %d", len(v.Value))
    }
    for _, c := range v.Value {
        if c < '0' || c > '9' {
            return fmt.Errorf("EAN-13 must contain only digits")
        }
    }
    // GS1 check digit: alternating weights 1/3 on first 12 digits
    sum := 0
    for i := 0; i < 12; i++ {
        d := int(v.Value[i] - '0')
        if i%2 == 0 {
            sum += d
        } else {
            sum += d * 3
        }
    }
    expected := (10 - (sum % 10)) % 10
    actual := int(v.Value[12] - '0')
    if expected != actual {
        return fmt.Errorf("invalid EAN-13 check digit: expected %d, got %d", expected, actual)
    }
    return nil
}
```

**MovementType** as typed constants (not a struct):

```go
// internal/core/domain/movement_type.go
type MovementType string

const (
    MovementTypeIn  MovementType = "in"
    MovementTypeOut MovementType = "out"
)

func NewMovementType(value string) (MovementType, error) {
    mt := MovementType(value)
    return mt, mt.Validate()
}

func (v MovementType) Validate() error {
    switch v {
    case MovementTypeIn, MovementTypeOut:
        return nil
    }
    return fmt.Errorf("invalid movement type %q: must be %q or %q",
        v, MovementTypeIn, MovementTypeOut)
}
```

### Product entity with business methods

```go
// internal/core/domain/product.go
func (e *Product) IsLowStock() bool {
    return e.CurrentStock <= e.MinStock
}

func (e *Product) Deactivate() {
    e.Active = false
    e.UpdatedAt = time.Now()
}

func (e *Product) ApplyMovement(movType MovementType, quantity float64) error {
    switch movType {
    case MovementTypeIn:
        e.CurrentStock += quantity
    case MovementTypeOut:
        if e.CurrentStock-quantity < 0 {
            return fmt.Errorf("insufficient stock: available %.3f, requested %.3f",
                e.CurrentStock, quantity)
        }
        e.CurrentStock -= quantity
    }
    e.UpdatedAt = time.Now()
    return nil
}
```

### Ports (repository interfaces)

```go
// internal/core/domain/ports.go
var ErrNotFound = errors.New("not found")

type ProductRepository interface {
    Create(ctx context.Context, product *Product) error
    FindByEAN13(ctx context.Context, ean13 string) (*Product, error)
    Update(ctx context.Context, product *Product) error
    List(ctx context.Context, filter ProductFilter) ([]*Product, error)
}

type MovementRepository interface {
    Create(ctx context.Context, movement *Movement) error
    FindByID(ctx context.Context, id string) (*Movement, error)
    List(ctx context.Context, filter MovementFilter) ([]*Movement, error)
    // Atomic update: movement + stock in a single transaction
    CreateWithStockUpdate(ctx context.Context, movement *Movement, newStock float64) error
}
```

### RecordMovement — The core service

Implements the business rules: validate type, validate positive quantity,
check sufficient stock, record the movement, and update stock **atomically**.

```go
// internal/core/services/record_movement.go
func (s *RecordMovementService) Execute(
    ctx context.Context,
    input RecordMovementInput,
) (*RecordMovementOutput, error) {
    // Rule 1: valid movement type
    movType, err := domain.NewMovementType(input.Type)
    if err != nil {
        return nil, fmt.Errorf("invalid movement type: %w", err)
    }

    // Rule 2: quantity must be positive
    if _, err := domain.NewStockLevel(input.Quantity); err != nil {
        return nil, fmt.Errorf("invalid quantity: %w", err)
    }

    // Fetch product
    product, err := s.products.FindByEAN13(ctx, input.ProductEan13)
    if err != nil {
        return nil, fmt.Errorf("product not found: %w", err)
    }

    // Rule 3: check sufficient stock (for outbound movements)
    if err := product.ApplyMovement(movType, input.Quantity); err != nil {
        return nil, err
    }

    // Rule 4: UUID v4 generated in the service layer
    movement, err := domain.NewMovement(uuid.NewString(), input.ProductEan13,
        string(movType), input.Quantity, input.Reason, input.Notes, input.CreatedBy)
    if err != nil {
        return nil, err
    }

    // Rule 5: atomic database update
    if err := s.movements.CreateWithStockUpdate(ctx, movement, product.CurrentStock); err != nil {
        return nil, fmt.Errorf("recording movement: %w", err)
    }

    return &RecordMovementOutput{Movement: movement, Product: product}, nil
}
```

### MovementRepository — Atomic transaction

```go
// internal/adapters/secondary/database/movement_repository.go
func (r *MovementRepository) CreateWithStockUpdate(
    ctx context.Context,
    m *domain.Movement,
    newStock float64,
) error {
    tx, err := r.db.BeginTx(ctx, nil)
    if err != nil {
        return err
    }
    defer tx.Rollback()

    _, err = tx.ExecContext(ctx,
        `INSERT INTO movements (id, product_ean13, type, quantity, reason, notes, created_by, created_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
        m.Id, m.ProductEan13, m.Type, m.Quantity, m.Reason, m.Notes, m.CreatedBy, m.CreatedAt,
    )
    if err != nil {
        return fmt.Errorf("inserting movement: %w", err)
    }

    _, err = tx.ExecContext(ctx,
        `UPDATE products SET current_stock=$1, updated_at=$2 WHERE ean13=$3`,
        newStock, time.Now(), m.ProductEan13,
    )
    if err != nil {
        return fmt.Errorf("updating product stock: %w", err)
    }

    return tx.Commit()
}
```

### ProductRepository — Dynamic filters

```go
// internal/adapters/secondary/database/product_repository.go
func (r *ProductRepository) List(
    ctx context.Context,
    filter domain.ProductFilter,
) ([]*domain.Product, error) {
    q := `SELECT ean13, name, description, unit, min_stock, current_stock,
                 category_id, active, created_at, updated_at
          FROM products WHERE 1=1`
    args := []any{}
    idx := 1

    if filter.CategoryID != "" {
        q += fmt.Sprintf(" AND category_id = $%d", idx)
        args = append(args, filter.CategoryID)
        idx++
    }
    if filter.Active != nil {
        q += fmt.Sprintf(" AND active = $%d", idx)
        args = append(args, *filter.Active)
        idx++
    }
    if filter.LowStock {
        q += " AND current_stock <= min_stock"
    }
    q += " ORDER BY name"

    rows, err := r.db.QueryContext(ctx, q, args...)
    // ... scan rows
}
```

### Shared HTTP Helpers

```go
// internal/adapters/primary/http/helpers.go
package httpserver

func respondJSON(w http.ResponseWriter, status int, data any) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(status)
    json.NewEncoder(w).Encode(data)
}

func respondHTTPError(w http.ResponseWriter, err error) {
    if errors.Is(err, domain.ErrNotFound) {
        respondError(w, http.StatusNotFound, err.Error())
        return
    }
    respondError(w, http.StatusInternalServerError, "internal server error")
}
```

### Dependency injection in cmd/run.go

```go
// cmd/run.go — manual wiring, no DI framework
db, err := sql.Open("postgres", cfg.Database.URL)

// Secondary adapters
productRepo  := database.NewProductRepository(db)
categoryRepo := database.NewCategoryRepository(db)
movementRepo := database.NewMovementRepository(db)

// Domain services
manageProduct  := services.NewManageProductService(productRepo)
getProduct     := services.NewGetProductService(productRepo)
manageCategory := services.NewManageCategoryService(categoryRepo)
recordMovement := services.NewRecordMovementService(productRepo, movementRepo)
getMovements   := services.NewGetMovementsService(movementRepo)
getStockReport := services.NewGetStockReportService(productRepo)

// Primary adapters
productHandler  := httpserver.NewProductHandler(manageProduct, getProduct, getMovements, getStockReport)
categoryHandler := httpserver.NewCategoryHandler(manageCategory)
movementHandler := httpserver.NewMovementHandler(recordMovement, getMovements)

// HTTP Server
srv := httpserver.New(&httpserver.ServerConfig{
    Config:     cfg,
    Logger:     log,
    Metrics:    metrics,
    Products:   productHandler,
    Categories: categoryHandler,
    Movements:  movementHandler,
})
```

---

## Bootstrapping

Before trying to start the new app we must bootstrap it, meaning we need to create a database, a configuration file, and run the migrations to create the tables it will use.

### Database

I already have Postgres and MariaDB instances running in my kubernetes cluster, so I just needed to create the database and an user to access it.

```sql
CREATE DATABASE pantry;
CREATE USER pantry WITH PASSWORD 'secr3t';
GRANT ALL ON DATABASE pantry TO pantry_user;
GRANT ALL ON SCHEMA public TO pantry_user;
```

### Configurarion file

Created a `.pantry.yaml` file, as stated in the generated readme.md

```yaml
server:
  port: 8080
  host: 0.0.0.0
  readtimeout: 15s
  writetimeout: 15s
  idletimeout: 60s
  shutdowntimeout: 30s

database:
  url: postgres://pantry_user:secr3t@postgres.kube.patodiaz.dev:5432/pantry?sslmode=disable

loglevel: info
logformat: json
```

### Migration

Now we should've run the migration from the app, but it was not possible as the coded was there but not connected to any way to trigger it, which led us to the session 3 with Claude.

---

## Session 3 — CLI command for migrations

Claude knew how to implement the migration procedure but had no clue that it needed to be linked to a cli command from our app, or perhaps an API endpoint. So let's ask Claude to expose it as a need command from or app.

```shell
──────────────────────────────────────────────────────────────────────────────────
❯  create a command to run migrations? e.g.: pantry migrate
──────────────────────────────────────────────────────────────────────────────────
```

Claude Code created `cmd/migrate.go` adding three subcommands to the CLI:

```go
// cmd/migrate.go
var migrateCmd = &cobra.Command{
    Use:   "migrate",
    Short: "Database migration management",
    Long:  `Run, rollback or inspect database migrations.`,
}

var migrateUpCmd = &cobra.Command{
    Use:   "up",
    Short: "Apply all pending migrations",
    RunE: func(cmd *cobra.Command, args []string) error {
        return withMigrator(func(m *infra.Migrator) error {
            return m.Up()
        })
    },
}

var migrateDownCmd = &cobra.Command{
    Use:   "down",
    Short: "Roll back the last applied migration",
    RunE: func(cmd *cobra.Command, args []string) error {
        return withMigrator(func(m *infra.Migrator) error {
            return m.Down()
        })
    },
}

var migrateVersionCmd = &cobra.Command{
    Use:   "version",
    Short: "Show the current migration version",
    RunE: func(cmd *cobra.Command, args []string) error {
        return withMigrator(func(m *infra.Migrator) error {
            version, dirty, err := m.Version()
            if err != nil {
                return err
            }
            dirtyFlag := ""
            if dirty {
                dirtyFlag = " (dirty)"
            }
            fmt.Printf("Current migration version: %d%s\n", version, dirtyFlag)
            return nil
        })
    },
}

// withMigrator opens the DB, creates the Migrator, calls fn, then closes the DB.
func withMigrator(fn func(*infra.Migrator) error) error {
    cfg := GetConfig()
    log := logger.New(&logger.Config{Level: cfg.LogLevel, Format: cfg.LogFormat})

    db, err := sql.Open("postgres", cfg.Database.URL)
    if err != nil {
        return fmt.Errorf("opening database: %w", err)
    }
    defer db.Close()

    if err := db.Ping(); err != nil {
        return fmt.Errorf("connecting to database: %w", err)
    }

    return fn(infra.NewMigrator(db, log))
}

func init() {
    migrateCmd.AddCommand(migrateUpCmd)
    migrateCmd.AddCommand(migrateDownCmd)
    migrateCmd.AddCommand(migrateVersionCmd)
    rootCmd.AddCommand(migrateCmd)
}
```

Usage:

```bash
# Apply all pending migrations
pantry migrate up

# Roll back the last migration
pantry migrate down

# Show the current version
pantry migrate version
# Current migration version: 4
```

## Back to finish the bootstrapping

After resolving the missing migration command issue I just run the migration and created the tables. No issues.

```shell
./pantry migrate up
2026/03/05 14:12:29 [INFO] Running migrations...
2026/03/05 14:12:30 [INFO] Migrations completed successfully
```

```shell
$ psql pantry pantry_user
psql (17.6)
Type "help" for help.

pantry=> \dt
                List of relations
 Schema |       Name        | Type  |    Owner    
--------+-------------------+-------+-------------
 public | categories        | table | pantry_user
 public | movements         | table | pantry_user
 public | products          | table | pantry_user
 public | schema_migrations | table | pantry_user
(4 rows)

pantry=> 
```

## Tests

I built and ran the app, then in another terminal:

```shell
# add Grains & Pastas category
$ curl -X POST --data '{"name": "Grains & Pastas"}' http://localhost:8080/api/v1/categories
{"id":"30e3c996-48ca-452c-8c3a-22cd32db3e45","name":"Grains \u0026 Pastas","description":"","created_at":"2026-03-05T14:19:01.677334141-03:00"}
 
 # add Canned & Jarred Goods category
 $ curl -X POST --data '{"name": "Canned & Jarred Goods"}' http://localhost:8080/api/v1/categories
{"id":"b4415623-ab49-4558-88e5-ae7604eef512","name":"Canned \u0026 Jarred Goods","description":"","created_at":"2026-03-05T14:19:32.83746188-03:00"}

# list categories
$ curl -s http://localhost:8080/api/v1/categories | jq
[
  {
    "id": "b4415623-ab49-4558-88e5-ae7604eef512",
    "name": "Canned & Jarred Goods",
    "description": "",
    "created_at": "2026-03-05T14:19:32.837462Z"
  },
  {
    "id": "30e3c996-48ca-452c-8c3a-22cd32db3e45",
    "name": "Grains & Pastas",
    "description": "",
    "created_at": "2026-03-05T14:19:01.677334Z"
  }
]

# register a product
$ curl -X POST --data '{"name": "Pasta Express", "unit": "gr", "min_stock": 2, "category_id": "30e3c996-48ca-452c-8c3a-22cd32db3e45"}' http://localhost:8080/api/v1/products/0752356783662 | jq
{
  "ean13": "0752356783662",
  "name": "Pasta Express",
  "description": "",
  "unit": "gr",
  "min_stock": 2,
  "current_stock": 0,
  "category_id": "30e3c996-48ca-452c-8c3a-22cd32db3e45",
  "active": true,
  "created_at": "2026-03-05T14:40:26.823634649-03:00",
  "updated_at": "2026-03-05T14:40:26.823634649-03:00"
}

# registrer a re-stocking
$ curl -s -X POST --data '{"product_ean13":"0752356783662", "type":"in", "quantity": 10, "reason":"re-stocking", "created_by": "pato"}' http://localhost:8080/api/v1/movements | jq
{
  "id": "bc69126b-d306-4bff-ade6-87e54dc68a37",
  "product_ean13": "0752356783662",
  "type": "in",
  "quantity": 10,
  "reason": "re-stocking",
  "created_by": "pato",
  "created_at": "2026-03-05T14:49:46.350019631-03:00"
}

# get product's details
$ curl -s http://localhost:8080/api/v1/products/0752356783662 | jq      
{
  "ean13": "0752356783662",
  "name": "Pasta Express",
  "description": "",
  "unit": "gr",
  "min_stock": 2,
  "current_stock": 10,
  "category_id": "30e3c996-48ca-452c-8c3a-22cd32db3e45",
  "active": true,
  "created_at": "2026-03-05T14:40:26.823635Z",
  "updated_at": "2026-03-05T14:49:46.367465Z"
}

# register a usage
$ curl -s -X POST --data '{"product_ean13":"0752356783662", "type":"out", "quantity": 1, "reason":"Dinner", "created_by": "sonia"}' http://localhost:8080/api/v1/movements | jq
{
  "id": "490e73cc-5566-4ef6-a38c-f91994673a67",
  "product_ean13": "0752356783662",
  "type": "out",
  "quantity": 1,
  "reason": "Dinner",
  "created_by": "sonia",
  "created_at": "2026-03-05T14:53:54.084178902-03:00"
}

# check current stock
$ curl -s http://localhost:8080/api/v1/products/0752356783662/stock | jq
{
  "current_stock": 9,
  "ean13": "0752356783662",
  "is_low_stock": false,
  "min_stock": 2
}
```

---

## Errors encountered and how they were resolved

### 1. Package name conflict

The scaffold generated handlers with `package http`, but `server.go` already used
`package httpserver`. Solution: rewrite all files in the directory with `package httpserver`.

```go
// Before (conflicts with stdlib net/http)
package http

// After
package httpserver
```

### 2. Scaffold tests with outdated API

The scaffold generated tests referencing methods like `service.Execute` and
types like `services.ManageProductInput` that had been replaced by specific methods
(`Create`, `Update`, `SetActive`). Solution: replace the test files with stubs
using `t.Skip()` until mocks are implemented.

```go
func TestManageProductService(t *testing.T) {
    t.Skip("implement with mock repositories")
}
```

### 3. Dependencies not registered in go.mod

When using `github.com/google/uuid` without having added it previously:

```bash
go get github.com/google/uuid github.com/stretchr/testify github.com/lib/pq
go mod tidy
```

### 4. Compile-time interface check

To ensure repositories correctly implement their interfaces:

```go
// At the top of each repository file
var _ domain.ProductRepository = (*ProductRepository)(nil)
```

If any method is missing, the compiler fails immediately with a clear error.

---

## Resulting REST API

```
GET    /ping                              # health check

# Categories
GET    /api/v1/categories                # list all
POST   /api/v1/categories                # create
GET    /api/v1/categories/{id}           # get by ID
PUT    /api/v1/categories/{id}           # update

# Products
GET    /api/v1/products                  # list (?category=&active=&low_stock=)
POST   /api/v1/products/{ean13}          # create
GET    /api/v1/products/{ean13}          # get by EAN-13
PUT    /api/v1/products/{ean13}          # update
DELETE /api/v1/products/{ean13}          # deactivate (soft delete)
GET    /api/v1/products/{ean13}/stock    # current stock
GET    /api/v1/products/{ean13}/movements # product movement history

# Movements
GET    /api/v1/movements                 # history (?ean13=&type=&from=&to=)
POST   /api/v1/movements                 # record a movement
GET    /api/v1/movements/{id}            # detail

# Reports
GET    /api/v1/reports/stock             # current stock summary
GET    /api/v1/reports/low-stock         # products below minimum
```

---

## Final project structure

```shell
pantry/
├── cmd/
│   ├── root.go          # Cobra root + Viper config
│   ├── run.go           # "run" command: DI wiring + start server
│   └── migrate.go       # "migrate" command: up/down/version
├── internal/
│   ├── config/
│   │   └── config.go    # Config struct + load from env
│   ├── core/
│   │   ├── domain/
│   │   │   ├── product.go
│   │   │   ├── category.go
│   │   │   ├── movement.go
│   │   │   ├── e_a_n13.go        # EAN-13 value object with GS1 validation
│   │   │   ├── movement_type.go  # Typed string constants
│   │   │   ├── stock_level.go    # Value object > 0
│   │   │   └── ports.go          # Repository interfaces
│   │   └── services/
│   │       ├── manage_product.go
│   │       ├── get_product.go
│   │       ├── manage_category.go
│   │       ├── record_movement.go   # <- Core service with business rules
│   │       ├── get_movements.go
│   │       └── get_stock_report.go
│   ├── adapters/
│   │   ├── primary/http/
│   │   │   ├── server.go           # Chi router + route setup
│   │   │   ├── helpers.go          # respondJSON, respondHTTPError, ...
│   │   │   ├── product_handler.go
│   │   │   ├── category_handler.go
│   │   │   └── movement_handler.go
│   │   └── secondary/database/
│   │       ├── product_repository.go
│   │       ├── category_repository.go
│   │       └── movement_repository.go  # <- CreateWithStockUpdate (transaction)
│   ├── infrastructure/
│   │   ├── database/
│   │   │   └── migrator.go         # golang-migrate wrapper
│   │   └── mapper/
│   │       ├── product_mapper.go
│   │       └── movement_mapper.go
│   └── observability/
│       ├── health.go
│       ├── metrics.go
│       └── server.go
├── migrations/
│   ├── 000001_create_categories_table.up.sql
│   ├── 000001_create_categories_table.down.sql
│   ├── 000002_create_products_table.up.sql
│   ├── 000002_create_products_table.down.sql
│   ├── 000003_create_movements_table.up.sql
│   ├── 000003_create_movements_table.down.sql
│   ├── 000004_add_stock_indexes.up.sql
│   └── 000004_add_stock_indexes.down.sql
├── pkg/
│   ├── logger/
│   └── server/
├── Dockerfile
├── compose.yaml
├── Makefile
├── go.mod
└── main.go
```

---

## Conclusions

### What worked really well

1. **The natural-language prompt was enough**: a single markdown file with the project spec was sufficient for Claude Code + Hexago to generate the entire structure without ambiguity.

2. **Hexago MCP keeps the architecture honest**: all 11 validations passed after scaffolding; the hexagonal dependency model was respected throughout the implementation.

3. **Layer-by-layer implementation**: starting from the domain outward (value objects → entities → ports → services → repos → handlers → DI) avoided circular dependencies and made it easy to reason about each piece in isolation.

4. **Business rules explicit in code**: `ApplyMovement`, `IsLowStock`, `Deactivate` live in the domain — not scattered between the handler and the repository.

### What required manual adjustment

- The scaffold generated some files with APIs that didn't exactly match the chosen
 mplementation (generic `Execute` methods vs. semantically named methods). Resolved by replacing the stubs with correct implementations.
- The handler package needed renaming from `http` to `httpserver` to avoid the conflict with the standard library.
- Not an issue but something to improve in next versions. I changed the `New` procedure at `internal\adapters\primary\http\server.go` from:
```go
// server is the Chi-backed HTTP server.
type server struct {
	router     chi.Router
	httpSrv    *http.Server
	cfg        *config.Config
	log        logger.Logger
	metrics    *observability.PrometheusMetrics
	products   *ProductHandler
	categories *CategoryHandler
	movements  *MovementHandler
}

// New creates and configures a new Chi HTTP server with all handlers wired in.
func New(cfg *config.Config, log logger.Logger, metrics *observability.PrometheusMetrics, productHandler *ProductHandler, categoryHandler *CategoryHandler, movementHandler *MovementHandler) srv.Server {...
```
to
```go
// server is the Chi-backed HTTP server.
type server struct {
	router     chi.Router
	httpSrv    *http.Server
	cfg        *config.Config
	log        logger.Logger
	metrics    *observability.PrometheusMetrics
	products   *ProductHandler
	categories *CategoryHandler
	movements  *MovementHandler
}

type ServerConfig struct {
	Config     *config.Config
	Logger     logger.Logger
	Metrics    *observability.PrometheusMetrics
	Products   *ProductHandler
	Categories *CategoryHandler
	Movements  *MovementHandler
}

// New creates and configures a new Chi HTTP server with all handlers wired in.
func New(cfg *ServerConfig) srv.Server {...
```
When implementing the Factory pattern it is a good practice to define a configuration struct type which will be the incomming parameter for the `New` function. This way the code is easier to read and also easier to implement unit-tests.

### Natural Next Steps

These could be good subjects for next iterations with Claude Code

- Unit tests with mocks for the services.
- Integration tests for the repositories (using `testcontainers-go`).
- Implementation of `ProductMapper` and `MovementMapper` once persistence DTOs are defined.

### Final thoughts
I'm quite happy with the outcome of this experiment, with just 3 iterations with Claude Code we ended up with a fully functional API. I'm aware that the result doesn't implement any kind of security, but the structure is solid and adding it shouldn't be a problem at all.

By the way, the project is [here](https://github.com/padiazg/pantry) if anybody wants to check it.