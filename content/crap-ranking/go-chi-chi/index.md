---
title: "go/chi/chi"
date: 2026-08-23
slug: go-chi-chi
tags: ["crap", "report"]
draft: false
repo: go-chi/chi
weight: 18
stars: 22716
combined: 771.02
average: 4.19
funcs: 184
toc: false
ShowToc: false
---

lightweight, idiomatic and composable router for building Go HTTP services

<div class="project-badges">
<img src="https://img.shields.io/github/stars/go-chi/chi?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/go-chi/chi?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/go-chi/chi?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/go-chi/chi?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/go-chi/chi?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/go-chi/chi
- **Commit**: `735ae2b87f8c733d616e809ae86e0985c1bc3350` · HEAD up to date
- **Analyzed**: 2026-08-23T23:59:11-03:00 (51ms)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">771</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-19 | `8b258c7` | 757.65 | 4.16 | 182 | 1 | local |
| 2026-08-23 | `735ae2b` | 771.02 | 4.19 | 184 | 1 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 39.23 | 39 | 94.6% | `*node.findRoute` | [tree.go:410](https://github.com/go-chi/chi/blob/master/tree.go#L410) |
| 20.00 | 4 | 0.0% | `NoCache` | [middleware/nocache.go:40](https://github.com/go-chi/chi/blob/master/middleware/nocache.go#L40) |
| 20.00 | 4 | 0.0% | `BasicAuth` | [middleware/basic_auth.go:10](https://github.com/go-chi/chi/blob/master/middleware/basic_auth.go#L10) |
| 20.00 | 4 | 0.0% | `*compressResponseWriter.Flush` | [middleware/compress.go:357](https://github.com/go-chi/chi/blob/master/middleware/compress.go#L357) |
| 20.00 | 4 | 0.0% | `Heartbeat` | [middleware/heartbeat.go:12](https://github.com/go-chi/chi/blob/master/middleware/heartbeat.go#L12) |
| 18.02 | 18 | 96.2% | `patNextSegment` | [tree.go:735](https://github.com/go-chi/chi/blob/master/tree.go#L735) |
| 17.05 | 17 | 94.4% | `*Mux.Mount` | [mux.go:295](https://github.com/go-chi/chi/blob/master/mux.go#L295) |
| 16.00 | 16 | 100.0% | `*node.routes` | [tree.go:633](https://github.com/go-chi/chi/blob/master/tree.go#L633) |
| 12.34 | 12 | 86.7% | `ThrottleWithOpts` | [middleware/throttle.go:44](https://github.com/go-chi/chi/blob/master/middleware/throttle.go#L44) |
| 12.09 | 11 | 79.2% | `walk` | [tree.go:886](https://github.com/go-chi/chi/blob/master/tree.go#L886) |
