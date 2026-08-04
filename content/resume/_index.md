---
title: "Patricio Díaz"
subtitle: "Go developer | Open-source maintainer"
date: 2025-04-27
draft: false
---

**Location:** Paraguay  
**Contact:** [+595961178540](wa.me/595961178540) | [padiazg@gmail.com](mailto:padiazg@gmail.com)  
**Links:** [LinkedIn](https://www.linkedin.com/in/patricio-diaz-g/) | [GitHub](https://github.com/padiazg) | [Blog](https://padiazg.github.dev)

---

## Profile Summary

Go developer and open-source maintainer with a track record of building tools the Go community actually uses.
Specialized in taking ambiguous or AI-generated (“vibe-coded”) codebases and turning them into tested,
maintainable systems — raising coverage, cutting cyclomatic complexity, and enforcing clean-architecture
practices. Comfortable owning a project end-to-end, from first commit through production, with a habit of solid code review and mentoring that sticks after the handoff.

> Available for immediate remote opportunities globally.

---

## Expertise Highlights

**Languages:** Go (Golang), JavaScript, TypeScript, Node.js, Python, PHP, Java  
**Architecture:** Domain-Driven Design, Event-Driven Architecture, CQRS, Event Sourcing,
Hexagonal / Ports & Adapters, Microservices, Serverless (FaaS)  
**Cloud & DevOps:** Google Cloud Platform (GCP), AWS (Lambda, EC2, API Gateway, Aurora,
EventBridge, Secrets Manager), Docker, Kubernetes, Terraform, CI/CD, LocalStack  
**Messaging & APIs:** NATS JetStream, AMQP, MQTT, gRPC, REST, GraphQL, WebSockets  
**Databases:** PostgreSQL, MySQL/MariaDB, MongoDB, Redis, InfluxDB, Oracle, IBM DB2  
**Identity & Auth:** OAuth2/OIDC, JWT, RBAC, multi-tenant access control, Authentik  
**Observability:** Prometheus, Grafana, Fluentd, OpenTelemetry  
**Frameworks:** React, Vue.js, GORM, QOR, Echo, Gin, Chi, Fiber  
**Testing & Quality:** Unit / E2E / mutation testing, static analysis (go/packages), CRAP score analysis  

---

## Key Professional Experience

{{< experience
    company="SEGEL SI"
    position="Senior Software Engineer"
    period="June 2025 - Feb 2026"
    highlight="IoT data pipeline, payment gateway, and enterprise technology modernization. Designed a zero-dependency Go library for BLE IoT sensor payload decoding, built a real-time hexagonal IoT pipeline (MQTT ingestion → concurrent worker pool → InfluxDB with exponential-backoff retry, 12 Prometheus metrics), and led development of POSsible Payments, a cloud-native payment system covering the full transaction lifecycle (authorization → batching → clearing → settlement) with CQRS, Event Sourcing, and NATS JetStream, plus OAuth2/OIDC with RBAC-based multi-tenant merchant isolation via Authentik and a Prometheus/Grafana/Fluentd observability stack"
>}}

{{< experience
    company="AR Santex LLC (Client Project)"
    position="Technical Lead — Golang Backend"
    period="Jun 2025 - Oct 2025 (4 month project)"
    highlight="Cross-border financial integration between Argentinian digital wallet and Chilean banking institution. Led a 3-engineer team delivering a scalable integration platform end-to-end on a serverless AWS architecture (Lambda, API Gateway, Aurora, EventBridge, Secrets Manager) with a LocalStack + Docker + Kubernetes local dev environment; mentored 2 backend developers"
>}}

{{< experience
    company="Tyk Technologies Ltd"
    position="Senior Software Engineer / Technical Lead"
    period="Nov 2020 - May 2024"
    highlight="Incubated the Enterprise Developer Portal from PoC to production-ready product, built the team from 1 dev to a full squad, and delivered 100% of the roadmap"
>}}

{{< experience
    company="On Campus Marketing"
    position="DevOps Engineer / Full Stack Developer"
    period="Oct 2019 - Sep 2020"
    highlight="Integrated third-party platforms with the company's stack, developed critical features, and improved cloud resource usage on GCP"
>}}

{{< experience
    company="Vision Banco SAECA"
    position="Senior IT Consultant"
    period="May 2012 - Oct 2019"
    highlight="Developed 3 mission-critical systems introducing cutting-edge technologies and implemented private cloud solutions for serverless functions"
>}}

[View Full Experience →](experience)

---

## Featured Projects

{{< project
    name="Go Struct Analyzer"
    role="Owner"
    url="https://github.com/padiazg/go-struct-analyzer"
    description="A VS Code extension to show memory size and padding information for Go structs, helping you optimize memory usage and understand struct layout. Published at [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=PatricioDiaz.go-struct-analyzer) and [Open VSX Registry](https://open-vsx.org/extension/PatricioDiaz/go-struct-analyzer), featured at [The Applied Go Weekly Newsletter](https://newsletter.appliedgo.net/archive/2025-06-22-go-before-you-wait/)"
>}}

{{< project
    name="HexaGo"
    role="Owner"
    url="https://github.com/padiazg/hexago"
    docs_url="https://padiazg.github.io/hexago/"
    description="An opinionated CLI scaffolding tool for Go developers building applications following the Hexagonal Architecture (Ports & Adapters) pattern. Automates project structure and component generation with support for multiple HTTP frameworks (stdlib, Echo, Gin, Chi, Fiber), component generators (services, domain entities, adapters, workers, database migrations), architecture compliance validation, and a multi-source customizable template system."
>}}

{{< project
    name="go-crap"
    role="Owner"
    url="https://github.com/padiazg/go-crap"
    docs_url="https://padiazg.github.io/go-crap/"
    description="CRAP score (Change Risk Anti-Pattern) calculator with mutation testing integration. Calculates cyclomatic complexity × coverage per function, flags CoverageUntrusted when go-gremlins mutations survive, and outputs SARIF 2.1.0 (IDE/GitHub Code Scanning), PR-comment, and text formats — the final guardrail ensuring AI-generated tests aren't just coverage theater."
>}}

{{< project
    name="go-testgen"
    role="Owner"
    url="https://github.com/padiazg/go-testgen"
    docs_url="https://padiazg.github.io/go-testgen/"
    description="A CLI tool to generate unit test scaffolding for Go projects. It produces closure-based check functions, a before hook for mock setup, and table-driven tests that compose cleanly as test suites grow."
>}}

{{< project
    name="test-finder"
    role="Owner"
    url="https://github.com/padiazg/test-finder"
    description="A CLI tool to discover Go modules and analyze their test coverage across directories."
>}}

{{< project
    name="unit-test-book"
    role="Owner"
    url="https://github.com/padiazg/unit-test-book"
    docs_url="https://padiazg.github.io/unit-test-book/"
    description="A hands-on guide to Go unit testing through real-world patterns extracted from 7 production Go projects. Covers table-driven tests, closure-check pattern, mocking, HTTP/I/O, concurrency, and integration testing."
>}}

{{< project
    name="codapi/sandboxes"
    role="Contributor"
    url="https://github.com/nalgeon/sandboxes"
    description="Contributed the LaTeX sandbox"
>}}

{{< project
    name="go-oas/docs"
    role="Contributor"
    url="https://github.com/go-oas/docs"
    description="Auto-generate RESTful API documentation for GO projects aligned with Open API Specification"
>}}

{{< project
    name="OpenFaaS"
    role="Contributor"
    url="https://github.com/openfaas/faas/blob/master/community.md"
    description="Collaborated in early stages of this serverless framework for Kubernetes"
>}}

[View All Projects →](projects)

---

## Speaking Engagements

- **Cup o' Go Podcast (E164, July 2026):** Featured guest discussing go-crap, mutation testing, and CRAP score analysis — also covering HexaGo, go-testgen, and Go Struct Analyzer. [Listen here](https://cupogo.dev/episodes/oh-crap-new-versions-of-go-gopherjs-and-typescript-are-less-crappy-than-before-or-are-they)
- **Kubecon + Cloudnativecon North America 2018:** [Digital Transformation of Vision Banco Paraguay with serverless functions](https://www.youtube.com/watch?v=mPjI34qj5vU)

[View All Publications and Talks](publicatons-n-talks)

---

[View All Education & certifications](education-certifications)

---

[View Full CV →](full-cv)
