---
title: "podman/container/tools/podman"
date: 2026-10-12
slug: podman-container-tools-podman
tags: ["crap", "report"]
draft: false
repo: podman-container-tools/podman
weight: 2
stars: 33029
combined: 595216.90
average: 96.14
funcs: 6191
toc: false
ShowToc: false
---

Podman: A tool for managing OCI containers and pods.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/podman-container-tools/podman?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/podman-container-tools/podman?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/podman-container-tools/podman?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/podman-container-tools/podman?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/podman-container-tools/podman?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/podman-container-tools/podman
- **Commit**: `b17e7db1d3ad0c6ca56e292aa95273facb80f8ad` · HEAD up to date
- **Analyzed**: 2026-10-12T19:12:40-03:00 (601.9s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 17.2,28.2 31.5,11.7 45.8,11.7 60.0,11.4 74.2,11.4 88.5,11.4 102.8,7.9 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">595217</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `db8802b` | 557419.04 | 100.91 | 5524 | 1240 | local |
| 2026-08-19 | `9774d53` | 558523.04 | 101.05 | 5527 | 1241 | local |
| 2026-08-23 | `8efac90` | 582585.11 | 95.63 | 6092 | 1344 | local |
| 2026-08-24 | `de350af` | 582638.11 | 95.64 | 6092 | 1344 | local |
| 2026-08-26 | `a1c4f9c` | 583020.11 | 95.77 | 6088 | 1343 | local |
| 2026-08-27 | `21326bf` | 583034.11 | 95.77 | 6088 | 1343 | local |
| 2026-08-30 | `7a6c0a0` | 583069.79 | 95.60 | 6099 | 1343 | local |
| 2026-09-02 | `f9d0a4d` | 588095.03 | 96.27 | 6109 | 1347 | local |
| 2026-10-12 | `b17e7db` | 595216.90 | 96.14 | 6191 | 1357 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 39800.00 | 199 | 0.0% | `FillOutSpecGen` | [pkg/specgenutil/specgen.go:334](https://github.com/podman-container-tools/podman/blob/main/pkg/specgenutil/specgen.go#L334) |
| 24806.00 | 157 | 0.0% | `*Container.generateSpec` | [libpod/container_internal_common.go:235](https://github.com/podman-container-tools/podman/blob/main/libpod/container_internal_common.go#L235) |
| 16770.00 | 129 | 0.0% | `*ContainerEngine.playKubePod` | [pkg/domain/infra/abi/play.go:730](https://github.com/podman-container-tools/podman/blob/main/pkg/domain/infra/abi/play.go#L730) |
| 13806.00 | 117 | 0.0% | `prepareParams` | [pkg/bindings/images/build.go:135](https://github.com/podman-container-tools/podman/blob/main/pkg/bindings/images/build.go#L135) |
| 10920.00 | 104 | 0.0% | `ToSpecGen` | [pkg/specgen/generate/kube/kube.go:209](https://github.com/podman-container-tools/podman/blob/main/pkg/specgen/generate/kube/kube.go#L209) |
| 10302.00 | 101 | 0.0% | `*Container.restore` | [libpod/container_internal_common.go:1617](https://github.com/podman-container-tools/podman/blob/main/libpod/container_internal_common.go#L1617) |
| 10100.00 | 100 | 0.0% | `createContainerOptions` | [pkg/specgen/generate/container_create.go:383](https://github.com/podman-container-tools/podman/blob/main/pkg/specgen/generate/container_create.go#L383) |
| 9702.00 | 98 | 0.0% | `*Runtime.setupContainer` | [libpod/runtime_ctr.go:245](https://github.com/podman-container-tools/podman/blob/main/libpod/runtime_ctr.go#L245) |
| 9506.00 | 97 | 0.0% | `buildFlagsWrapperToOptions` | [cmd/podman/common/build.go:316](https://github.com/podman-container-tools/podman/blob/main/cmd/podman/common/build.go#L316) |
| 9506.00 | 97 | 0.0% | `namespaceOptions` | [pkg/specgen/generate/namespaces.go:124](https://github.com/podman-container-tools/podman/blob/main/pkg/specgen/generate/namespaces.go#L124) |
