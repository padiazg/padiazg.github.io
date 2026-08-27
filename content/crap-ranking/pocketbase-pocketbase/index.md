---
title: "pocketbase/pocketbase"
date: 2026-08-24
slug: pocketbase-pocketbase
tags: ["crap", "report"]
draft: false
repo: pocketbase/pocketbase
weight: 13
stars: 60796
combined: 25081.07
average: 12.74
funcs: 1969
toc: false
ShowToc: false
---

Open Source realtime backend in 1 file

<div class="project-badges">
<img src="https://img.shields.io/github/stars/pocketbase/pocketbase?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/pocketbase/pocketbase?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/pocketbase/pocketbase?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/pocketbase/pocketbase?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/pocketbase/pocketbase?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/pocketbase/pocketbase
- **Commit**: `bc8ffed4e7265a70a6e8de76c0b0b48b945e19ef` · HEAD up to date
- **Analyzed**: 2026-08-24T19:12:01-03:00 (37.2s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.0 60.0,29.0 117.0,27.6"/><circle cx="117.0" cy="27.6" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">25081</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-22 | `5d217dd` | 25214.12 | 12.89 | 1956 | 101 | local |
| 2026-08-23 | `50f5f83` | 25073.65 | 12.73 | 1970 | 96 | local |
| 2026-08-24 | `bc8ffed` | 25081.07 | 12.74 | 1969 | 96 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 1640.00 | 40 | 0.0% | `migrateOldCollections` | [migrations/1717233556_v0.23_migrate.go:282](https://github.com/pocketbase/pocketbase/blob/master/migrations/1717233556_v0.23_migrate.go#L282) |
| 1246.79 | 49 | 20.7% | `areValuesEqual` | [core/record_model.go:1155](https://github.com/pocketbase/pocketbase/blob/master/core/record_model.go#L1155) |
| 1190.00 | 34 | 0.0% | `Serve` | [apis/serve.go:61](https://github.com/pocketbase/pocketbase/blob/master/apis/serve.go#L61) |
| 1122.00 | 33 | 0.0% | `CORS` | [apis/middlewares_cors.go:129](https://github.com/pocketbase/pocketbase/blob/master/apis/middlewares_cors.go#L129) |
| 870.00 | 29 | 0.0% | `*ApiScenario.test` | [tests/api.go:169](https://github.com/pocketbase/pocketbase/blob/master/tests/api.go#L169) |
| 812.00 | 28 | 0.0% | `*driver.ListPaged` | [tools/filesystem/internal/fileblob/fileblob.go:184](https://github.com/pocketbase/pocketbase/blob/master/tools/filesystem/internal/fileblob/fileblob.go#L184) |
| 804.05 | 38 | 19.0% | `extractNestedVal` | [core/record_field_resolver.go:453](https://github.com/pocketbase/pocketbase/blob/master/core/record_field_resolver.go#L453) |
| 702.00 | 26 | 0.0% | `init` | [migrations/1717233558_v0.23_migrate3.go:22](https://github.com/pocketbase/pocketbase/blob/master/migrations/1717233558_v0.23_migrate3.go#L22) |
| 552.00 | 23 | 0.0% | `init` | [migrations/1778828400_normalize_indexes.go:13](https://github.com/pocketbase/pocketbase/blob/master/migrations/1778828400_normalize_indexes.go#L13) |
| 506.00 | 22 | 0.0% | `*SMTPClient.send` | [tools/mailer/smtp.go:64](https://github.com/pocketbase/pocketbase/blob/master/tools/mailer/smtp.go#L64) |
