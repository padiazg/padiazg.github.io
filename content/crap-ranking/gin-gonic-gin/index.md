---
title: "gin/gonic/gin"
date: 2026-08-19
slug: gin-gonic-gin
tags: ["crap", "report"]
draft: false
repo: gin-gonic/gin
weight: 17
stars: 89083
combined: 1277.76
average: 2.66
funcs: 480
toc: false
ShowToc: false
---

Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API but with significantly better performance—up to 40 times faster—thanks to httprouter. Gin is designed for building REST APIs, web applications, and microservices.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/gin-gonic/gin?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/gin-gonic/gin?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/gin-gonic/gin?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/gin-gonic/gin?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/gin-gonic/gin?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/gin-gonic/gin
- **Commit**: `dcaa4296d111981ffb31ac3eba90bb63e1eb5ab9` · HEAD up to date
- **Analyzed**: 2026-08-19T22:47:17-03:00 (7.1s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">1278</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-19 | `dcaa429` | 1277.76 | 2.66 | 480 | 2 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 65.52 | 61 | 89.3% | `*node.findCaseInsensitivePathRec` | [tree.go:703](https://github.com/gin-gonic/gin/blob/master/tree.go#L703) |
| 60.00 | 60 | 100.0% | `*node.getValue` | [tree.go:418](https://github.com/gin-gonic/gin/blob/master/tree.go#L418) |
| 27.00 | 27 | 100.0% | `cleanPath` | [path.go:23](https://github.com/gin-gonic/gin/blob/master/path.go#L23) |
| 27.00 | 27 | 100.0% | `setByForm` | [binding/form_mapping.go:245](https://github.com/gin-gonic/gin/blob/master/binding/form_mapping.go#L245) |
| 25.00 | 25 | 100.0% | `setWithProperType` | [binding/form_mapping.go:323](https://github.com/gin-gonic/gin/blob/master/binding/form_mapping.go#L323) |
| 22.00 | 22 | 100.0% | `*node.addRoute` | [tree.go:135](https://github.com/gin-gonic/gin/blob/master/tree.go#L135) |
| 21.00 | 21 | 100.0% | `*Engine.handleHTTPRequest` | [gin.go:690](https://github.com/gin-gonic/gin/blob/master/gin.go#L690) |
| 17.00 | 17 | 100.0% | `mapping` | [binding/form_mapping.go:84](https://github.com/gin-gonic/gin/blob/master/binding/form_mapping.go#L84) |
| 14.00 | 14 | 100.0% | `*node.insertChild` | [tree.go:288](https://github.com/gin-gonic/gin/blob/master/tree.go#L288) |
| 14.00 | 14 | 100.0% | `*Context.ClientIP` | [context.go:998](https://github.com/gin-gonic/gin/blob/master/context.go#L998) |
