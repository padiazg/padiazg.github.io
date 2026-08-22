---
title: "gorilla/mux"
date: 2026-08-21
slug: gorilla-mux
tags: ["crap", "report"]
draft: false
repo: gorilla/mux
weight: 19
stars: 21839
combined: 357.79
average: 3.31
funcs: 108
toc: false
ShowToc: false
---

Package gorilla/mux is a powerful HTTP router and URL matcher for building Go web servers with 🦍

<div class="project-badges">
<img src="https://img.shields.io/github/stars/gorilla/mux?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/gorilla/mux?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/gorilla/mux?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/gorilla/mux?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/gorilla/mux?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/gorilla/mux
- **Commit**: `db9d1d0073d27a0a2d9a8c1bc52aa0af4374d265` · HEAD up to date
- **Analyzed**: 2026-08-21T22:47:19-03:00 (32ms)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">358</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-21 | `db9d1d0` | 357.79 | 3.31 | 108 | 0 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 21.08 | 21 | 94.3% | `newRouteRegexp` | [regexp.go:41](https://github.com/gorilla/mux/blob/main/regexp.go#L41) |
| 20.00 | 16 | 75.0% | `*Route.addRegexpMatcher` | [route.go:247](https://github.com/gorilla/mux/blob/main/route.go#L247) |
| 16.00 | 16 | 100.0% | `routeRegexpGroup.setMatch` | [regexp.go:339](https://github.com/gorilla/mux/blob/main/regexp.go#L339) |
| 14.01 | 14 | 96.7% | `*Route.Match` | [route.go:47](https://github.com/gorilla/mux/blob/main/route.go#L47) |
| 12.54 | 10 | 70.6% | `*Route.URL` | [route.go:606](https://github.com/gorilla/mux/blob/main/route.go#L606) |
| 11.02 | 11 | 94.1% | `*Router.ServeHTTP` | [mux.go:188](https://github.com/gorilla/mux/blob/main/mux.go#L188) |
| 9.37 | 9 | 83.3% | `findFirstQueryKey` | [regexp.go:257](https://github.com/gorilla/mux/blob/main/regexp.go#L257) |
| 9.36 | 7 | 63.6% | `*routeRegexp.url` | [regexp.go:212](https://github.com/gorilla/mux/blob/main/regexp.go#L212) |
| 9.19 | 9 | 86.7% | `*Router.walk` | [mux.go:410](https://github.com/gorilla/mux/blob/main/mux.go#L410) |
| 8.38 | 8 | 81.8% | `braceIndices` | [regexp.go:299](https://github.com/gorilla/mux/blob/main/regexp.go#L299) |
