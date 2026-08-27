---
title: "docker/compose"
date: 2026-08-27
slug: docker-compose
tags: ["crap", "report"]
draft: false
repo: docker/compose
weight: 12
stars: 38065
combined: 25150.86
average: 14.80
funcs: 1699
toc: false
ShowToc: false
---

Define and run multi-container applications with Docker

<div class="project-badges">
<img src="https://img.shields.io/github/stars/docker/compose?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/docker/compose?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/docker/compose?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/docker/compose?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/docker/compose?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/docker/compose
- **Commit**: `720da6847526c35fcf605f5a5900568960aba531` · HEAD up to date
- **Analyzed**: 2026-08-27T12:05:29-03:00 (51.7s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">25151</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-27 | `720da68` | 25150.86 | 14.80 | 1699 | 153 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 756.00 | 27 | 0.0% | `validateFlags` | [cmd/compose/up.go:189](https://github.com/docker/compose/blob/main/cmd/compose/up.go#L189) |
| 420.00 | 20 | 0.0% | `*composeService.runInteractiveUp` | [pkg/compose/up.go:90](https://github.com/docker/compose/blob/main/pkg/compose/up.go#L90) |
| 420.00 | 20 | 0.0% | `*composeService.executePlugin` | [pkg/compose/plugins.go:108](https://github.com/docker/compose/blob/main/pkg/compose/plugins.go#L108) |
| 351.59 | 20 | 6.1% | `runUp` | [cmd/compose/up.go:230](https://github.com/docker/compose/blob/main/cmd/compose/up.go#L230) |
| 306.00 | 17 | 0.0% | `runPs` | [cmd/compose/ps.go:95](https://github.com/docker/compose/blob/main/cmd/compose/ps.go#L95) |
| 306.00 | 17 | 0.0% | `*composeService.Remove` | [pkg/compose/remove.go:30](https://github.com/docker/compose/blob/main/pkg/compose/remove.go#L30) |
| 306.00 | 17 | 0.0% | `*composeService.doBuildBake` | [pkg/compose/build_bake.go:132](https://github.com/docker/compose/blob/main/pkg/compose/build_bake.go#L132) |
| 272.00 | 16 | 0.0% | `*composeService.prepareRun` | [pkg/compose/run.go:123](https://github.com/docker/compose/blob/main/pkg/compose/run.go#L123) |
| 272.00 | 16 | 0.0% | `runImages` | [cmd/compose/images.go:62](https://github.com/docker/compose/blob/main/cmd/compose/images.go#L62) |
| 272.00 | 16 | 0.0% | `*composeService.doBuildImage` | [pkg/compose/build_classic.go:136](https://github.com/docker/compose/blob/main/pkg/compose/build_classic.go#L136) |
