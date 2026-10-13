---
title: "docker/compose"
date: 2026-10-12
slug: docker-compose
tags: ["crap", "report"]
draft: false
repo: docker/compose
weight: 12
stars: 38373
combined: 25228.19
average: 12.94
funcs: 1949
toc: false
ShowToc: false
---

Define and run multi-container applications with Docker

<div class="project-badges">
<img src="https://img.shields.io/github/stars/docker/compose?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/docker/compose?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/docker/compose?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/docker/compose?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/docker/compose?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/docker/compose
- **Commit**: `635221baf80e9b56dacb3a55dc7e378e8ea96a4c` · HEAD up to date
- **Analyzed**: 2026-10-12T18:52:01-03:00 (67.0s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 31.5,29.0 60.0,27.1 88.5,22.3 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">25228</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-27 | `720da68` | 25150.86 | 14.80 | 1699 | 153 | local |
| 2026-08-30 | `727fa0e` | 25150.95 | 14.80 | 1699 | 153 | local |
| 2026-09-02 | `d0c384a` | 25156.55 | 14.80 | 1700 | 153 | local |
| 2026-09-02 | `5284c98` | 25170.64 | 14.81 | 1699 | 153 | local |
| 2026-10-12 | `635221b` | 25228.19 | 12.94 | 1949 | 153 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 756.00 | 27 | 0.0% | `validateFlags` | [cmd/compose/up.go:190](https://github.com/docker/compose/blob/main/cmd/compose/up.go#L190) |
| 600.00 | 24 | 0.0% | `*composeService.runInteractiveUp` | [pkg/compose/up.go:96](https://github.com/docker/compose/blob/main/pkg/compose/up.go#L96) |
| 390.64 | 21 | 5.7% | `runUp` | [cmd/compose/up.go:231](https://github.com/docker/compose/blob/main/cmd/compose/up.go#L231) |
| 342.00 | 18 | 0.0% | `*composeService.runPlugin` | [pkg/compose/plugins.go:134](https://github.com/docker/compose/blob/main/pkg/compose/plugins.go#L134) |
| 306.00 | 17 | 0.0% | `*composeService.doBuildBake` | [pkg/compose/build_bake.go:136](https://github.com/docker/compose/blob/main/pkg/compose/build_bake.go#L136) |
| 306.00 | 17 | 0.0% | `*composeService.Remove` | [pkg/compose/remove.go:29](https://github.com/docker/compose/blob/main/pkg/compose/remove.go#L29) |
| 306.00 | 17 | 0.0% | `runPs` | [cmd/compose/ps.go:95](https://github.com/docker/compose/blob/main/cmd/compose/ps.go#L95) |
| 272.00 | 16 | 0.0% | `runImages` | [cmd/compose/images.go:62](https://github.com/docker/compose/blob/main/cmd/compose/images.go#L62) |
| 272.00 | 16 | 0.0% | `*composeService.doBuildImage` | [pkg/compose/build_classic.go:136](https://github.com/docker/compose/blob/main/pkg/compose/build_classic.go#L136) |
| 272.00 | 16 | 0.0% | `*composeService.prepareRun` | [pkg/compose/run.go:122](https://github.com/docker/compose/blob/main/pkg/compose/run.go#L122) |
