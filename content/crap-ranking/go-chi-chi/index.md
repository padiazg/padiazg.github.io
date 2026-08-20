---
title: "go/chi/chi"
date: 2026-08-19
slug: go-chi-chi
tags: ["crap", "report"]
draft: false
repo: go-chi/chi
weight: 17
stars: 22697
combined: 757.65
average: 4.16
funcs: 182
toc: false
ShowToc: false
---

lightweight, idiomatic and composable router for building Go HTTP services

<div class="project-badges">
<img src="https://img.shields.io/github/stars/go-chi/chi?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/go-chi/chi?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/go-chi/chi?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/go-chi/chi?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/go-chi/chi?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/go-chi/chi
- **Commit**: `8b258c7bb28f97a5f2a856ff7ef962578fec9215` · HEAD up to date
- **Analyzed**: 2026-08-19T22:47:08-03:00 (682ms)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">758</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-19 | `8b258c7` | 757.65 | 4.16 | 182 | 1 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 37.23 | 37 | 94.4% | `*node.findRoute` | [tree.go:409](https://github.com/go-chi/chi/blob/master/tree.go#L409) |
| 20.00 | 4 | 0.0% | `NoCache` | [middleware/nocache.go:40](https://github.com/go-chi/chi/blob/master/middleware/nocache.go#L40) |
| 20.00 | 4 | 0.0% | `BasicAuth` | [middleware/basic_auth.go:10](https://github.com/go-chi/chi/blob/master/middleware/basic_auth.go#L10) |
| 20.00 | 4 | 0.0% | `*compressResponseWriter.Flush` | [middleware/compress.go:339](https://github.com/go-chi/chi/blob/master/middleware/compress.go#L339) |
| 20.00 | 4 | 0.0% | `Heartbeat` | [middleware/heartbeat.go:12](https://github.com/go-chi/chi/blob/master/middleware/heartbeat.go#L12) |
| 18.02 | 18 | 96.2% | `patNextSegment` | [tree.go:695](https://github.com/go-chi/chi/blob/master/tree.go#L695) |
| 17.05 | 17 | 94.4% | `*Mux.Mount` | [mux.go:295](https://github.com/go-chi/chi/blob/master/mux.go#L295) |
| 13.02 | 13 | 95.0% | `*node.routes` | [tree.go:628](https://github.com/go-chi/chi/blob/master/tree.go#L628) |
| 12.34 | 12 | 86.7% | `ThrottleWithOpts` | [middleware/throttle.go:44](https://github.com/go-chi/chi/blob/master/middleware/throttle.go#L44) |
| 12.09 | 11 | 79.2% | `walk` | [tree.go:846](https://github.com/go-chi/chi/blob/master/tree.go#L846) |
