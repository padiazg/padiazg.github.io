---
title: "labstack/echo"
date: 2026-10-12
slug: labstack-echo
tags: ["crap", "report"]
draft: false
repo: labstack/echo
weight: 18
stars: 32764
combined: 2073.77
average: 3.74
funcs: 554
toc: false
ShowToc: false
---

High performance, minimalist Go web framework

<div class="project-badges">
<img src="https://img.shields.io/github/stars/labstack/echo?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/labstack/echo?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/labstack/echo?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/labstack/echo?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/labstack/echo?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/labstack/echo
- **Commit**: `8fd0e184dd390ffdf082f5eda247c3ab41d5d290` · HEAD up to date
- **Analyzed**: 2026-10-12T18:56:16-03:00 (5.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 31.5,28.6 60.0,28.6 88.5,28.8 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">2074</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-19 | `05489dc` | 1925.29 | 3.64 | 529 | 6 | local |
| 2026-08-23 | `4ec116d` | 1927.55 | 3.64 | 529 | 6 | local |
| 2026-08-24 | `e552b4d` | 1927.55 | 3.64 | 529 | 6 | local |
| 2026-09-02 | `90702e7` | 1926.48 | 3.64 | 529 | 6 | local |
| 2026-10-12 | `8fd0e18` | 2073.77 | 3.74 | 554 | 5 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 53.01 | 53 | 98.8% | `bindValue` | [binder_generic.go:405](https://github.com/labstack/echo/blob/master/binder_generic.go#L405) |
| 50.00 | 50 | 98.8% | `*DefaultRouter.Route` | [router.go:919](https://github.com/labstack/echo/blob/master/router.go#L919) |
| 46.01 | 46 | 98.4% | `bindData` | [bind.go:218](https://github.com/labstack/echo/blob/master/bind.go#L218) |
| 39.96 | 36 | 85.5% | `StaticConfig.ToMiddleware` | [middleware/static.go:182](https://github.com/labstack/echo/blob/master/middleware/static.go#L182) |
| 39.01 | 39 | 98.5% | `RequestLoggerConfig.ToMiddleware` | [middleware/request_logger.go:246](https://github.com/labstack/echo/blob/master/middleware/request_logger.go#L246) |
| 29.98 | 29 | 89.5% | `*DefaultRouter.Remove` | [router.go:390](https://github.com/labstack/echo/blob/master/router.go#L390) |
| 29.11 | 29 | 94.9% | `CSRFConfig.ToMiddleware` | [middleware/csrf.go:127](https://github.com/labstack/echo/blob/master/middleware/csrf.go#L127) |
| 26.17 | 26 | 93.8% | `CORSConfig.ToMiddleware` | [middleware/cors.go:151](https://github.com/labstack/echo/blob/master/middleware/cors.go#L151) |
| 26.00 | 26 | 100.0% | `*ValueBinder.ints` | [binder.go:577](https://github.com/labstack/echo/blob/master/binder.go#L577) |
| 26.00 | 26 | 100.0% | `*ValueBinder.uints` | [binder.go:805](https://github.com/labstack/echo/blob/master/binder.go#L805) |
