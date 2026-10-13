---
title: "gofiber/fiber"
date: 2026-10-12
slug: gofiber-fiber
tags: ["crap", "report"]
draft: false
repo: gofiber/fiber
weight: 17
stars: 40200
combined: 8792.63
average: 4.25
funcs: 2071
toc: false
ShowToc: false
---

⚡️ Express inspired web framework written in Go

<div class="project-badges">
<img src="https://img.shields.io/github/stars/gofiber/fiber?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/gofiber/fiber?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/gofiber/fiber?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/gofiber/fiber?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/gofiber/fiber?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/gofiber/fiber
- **Commit**: `9438d7e90ad36755d88f94c94461a7e86549461a` · HEAD up to date
- **Analyzed**: 2026-10-12T18:53:46-03:00 (66.0s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 14.4,29.0 25.8,12.7 37.2,23.0 48.6,22.7 60.0,19.2 71.4,18.9 82.8,18.9 94.2,17.1 105.6,17.1 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">8793</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `859d6c5` | 8247.03 | 4.53 | 1822 | 21 | local |
| 2026-08-19 | `fec5891` | 8247.03 | 4.53 | 1822 | 21 | local |
| 2026-08-22 | `c344047` | 8588.31 | 4.68 | 1835 | 22 | local |
| 2026-08-23 | `cfd2a99` | 8371.90 | 4.62 | 1813 | 22 | local |
| 2026-08-24 | `85d390c` | 8379.94 | 4.62 | 1814 | 22 | local |
| 2026-08-26 | `3ca9a9d` | 8453.01 | 4.63 | 1827 | 22 | local |
| 2026-08-27 | `a9981a7` | 8459.80 | 4.63 | 1829 | 22 | local |
| 2026-08-30 | `e7229b1` | 8459.80 | 4.63 | 1829 | 22 | local |
| 2026-09-02 | `d1d3888` | 8495.76 | 4.53 | 1876 | 21 | local |
| 2026-09-02 | `0c5108d` | 8495.76 | 4.53 | 1876 | 21 | local |
| 2026-10-12 | `9438d7e` | 8792.63 | 4.25 | 2071 | 19 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 274.10 | 230 | 90.6% | `New` | [middleware/cache/cache.go:154](https://github.com/gofiber/fiber/blob/main/middleware/cache/cache.go#L154) |
| 132.00 | 11 | 0.0% | `GetTLSConfigs` | [internal/tlstest/tls.go:22](https://github.com/gofiber/fiber/blob/main/internal/tlstest/tls.go#L22) |
| 97.78 | 87 | 88.8% | `*item.UnmarshalMsg` | [middleware/cache/manager_msgp.go:685](https://github.com/gofiber/fiber/blob/main/middleware/cache/manager_msgp.go#L685) |
| 72.73 | 71 | 93.0% | `*item.DecodeMsg` | [middleware/cache/manager_msgp.go:176](https://github.com/gofiber/fiber/blob/main/middleware/cache/manager_msgp.go#L176) |
| 56.00 | 7 | 0.0% | `isCanonicalName` | [internal/fieldname/fieldname.go:149](https://github.com/gofiber/fiber/blob/main/internal/fieldname/fieldname.go#L149) |
| 44.06 | 44 | 96.8% | `*item.EncodeMsg` | [middleware/cache/manager_msgp.go:393](https://github.com/gofiber/fiber/blob/main/middleware/cache/manager_msgp.go#L393) |
| 42.00 | 6 | 0.0% | `Value` | [internal/contextvalue/contextvalue.go:23](https://github.com/gofiber/fiber/blob/main/internal/contextvalue/contextvalue.go#L23) |
| 41.00 | 41 | 100.0% | `New` | [middleware/cors/cors.go:89](https://github.com/gofiber/fiber/blob/main/middleware/cors/cors.go#L89) |
| 39.74 | 38 | 89.4% | `*DefaultRes.SendFile` | [res.go:1238](https://github.com/gofiber/fiber/blob/main/res.go#L1238) |
| 37.56 | 37 | 92.6% | `New` | [middleware/static/static.go:255](https://github.com/gofiber/fiber/blob/main/middleware/static/static.go#L255) |
