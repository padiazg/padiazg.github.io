---
title: "gofiber/fiber"
date: 2026-08-23
slug: gofiber-fiber
tags: ["crap", "report"]
draft: false
repo: gofiber/fiber
weight: 13
stars: 40075
combined: 8371.90
average: 4.62
funcs: 1813
toc: false
ShowToc: false
---

⚡️ Express inspired web framework written in Go

<div class="project-badges">
<img src="https://img.shields.io/github/stars/gofiber/fiber?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/gofiber/fiber?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/gofiber/fiber?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/gofiber/fiber?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/gofiber/fiber?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/gofiber/fiber
- **Commit**: `cfd2a99d5d59e723af4a911ffd06eec52eb53132` · HEAD up to date
- **Analyzed**: 2026-08-23T23:59:14-03:00 (612ms)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 41.0,29.0 79.0,3.0 117.0,19.5"/><circle cx="117.0" cy="19.5" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">8372</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `859d6c5` | 8247.03 | 4.53 | 1822 | 21 | local |
| 2026-08-19 | `fec5891` | 8247.03 | 4.53 | 1822 | 21 | local |
| 2026-08-22 | `c344047` | 8588.31 | 4.68 | 1835 | 22 | local |
| 2026-08-23 | `cfd2a99` | 8371.90 | 4.62 | 1813 | 22 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 467.37 | 203 | 81.4% | `New` | [middleware/cache/cache.go:138](https://github.com/gofiber/fiber/blob/main/middleware/cache/cache.go#L138) |
| 306.00 | 17 | 0.0% | `extractChainWithSource` | [extractors/extractors.go:232](https://github.com/gofiber/fiber/blob/main/extractors/extractors.go#L232) |
| 132.00 | 11 | 0.0% | `GetTLSConfigs` | [internal/tlstest/tls.go:22](https://github.com/gofiber/fiber/blob/main/internal/tlstest/tls.go#L22) |
| 90.00 | 9 | 0.0% | `Combined` | [internal/headerlookup/headerlookup.go:80](https://github.com/gofiber/fiber/blob/main/internal/headerlookup/headerlookup.go#L80) |
| 86.89 | 79 | 89.2% | `*item.UnmarshalMsg` | [middleware/cache/manager_msgp.go:644](https://github.com/gofiber/fiber/blob/main/middleware/cache/manager_msgp.go#L644) |
| 66.74 | 65 | 92.6% | `*item.DecodeMsg` | [middleware/cache/manager_msgp.go:176](https://github.com/gofiber/fiber/blob/main/middleware/cache/manager_msgp.go#L176) |
| 62.05 | 11 | 25.0% | `*Storage.gc` | [internal/storage/memory/memory.go:164](https://github.com/gofiber/fiber/blob/main/internal/storage/memory/memory.go#L164) |
| 56.00 | 7 | 0.0% | `isCanonicalName` | [internal/fieldname/fieldname.go:142](https://github.com/gofiber/fiber/blob/main/internal/fieldname/fieldname.go#L142) |
| 42.00 | 6 | 0.0% | `Del` | [internal/fieldname/fieldname.go:160](https://github.com/gofiber/fiber/blob/main/internal/fieldname/fieldname.go#L160) |
| 42.00 | 6 | 0.0% | `isHexDigit` | [middleware/proxy/security.go:912](https://github.com/gofiber/fiber/blob/main/middleware/proxy/security.go#L912) |
