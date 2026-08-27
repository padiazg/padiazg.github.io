---
title: "podman/container/tools/podman"
date: 2026-08-27
slug: podman-container-tools-podman
tags: ["crap", "report"]
draft: false
repo: podman-container-tools/podman
weight: 2
stars: 32706
combined: 583034.11
average: 95.77
funcs: 6088
toc: false
ShowToc: false
---

Podman: A tool for managing OCI containers and pods.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/podman-container-tools/podman?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/podman-container-tools/podman?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/podman-container-tools/podman?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/podman-container-tools/podman?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/podman-container-tools/podman?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/podman-container-tools/podman
- **Commit**: `21326bf274b606186ae5d6ca15be74cc916d94c3` · HEAD up to date
- **Analyzed**: 2026-08-27T12:04:30-03:00 (601.7s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 25.8,27.9 48.6,3.5 71.4,3.4 94.2,3.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">583034</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `db8802b` | 557419.04 | 100.91 | 5524 | 1240 | local |
| 2026-08-19 | `9774d53` | 558523.04 | 101.05 | 5527 | 1241 | local |
| 2026-08-23 | `8efac90` | 582585.11 | 95.63 | 6092 | 1344 | local |
| 2026-08-24 | `de350af` | 582638.11 | 95.64 | 6092 | 1344 | local |
| 2026-08-26 | `a1c4f9c` | 583020.11 | 95.77 | 6088 | 1343 | local |
| 2026-08-27 | `21326bf` | 583034.11 | 95.77 | 6088 | 1343 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 37830.00 | 194 | 0.0% | `FillOutSpecGen` | [pkg/specgenutil/specgen.go:324](https://github.com/podman-container-tools/podman/blob/main/pkg/specgenutil/specgen.go#L324) |
| 20306.00 | 142 | 0.0% | `*Container.generateSpec` | [libpod/container_internal_common.go:235](https://github.com/podman-container-tools/podman/blob/main/libpod/container_internal_common.go#L235) |
| 16770.00 | 129 | 0.0% | `*ContainerEngine.playKubePod` | [pkg/domain/infra/abi/play.go:684](https://github.com/podman-container-tools/podman/blob/main/pkg/domain/infra/abi/play.go#L684) |
| 13806.00 | 117 | 0.0% | `prepareParams` | [pkg/bindings/images/build.go:135](https://github.com/podman-container-tools/podman/blob/main/pkg/bindings/images/build.go#L135) |
| 10920.00 | 104 | 0.0% | `ToSpecGen` | [pkg/specgen/generate/kube/kube.go:208](https://github.com/podman-container-tools/podman/blob/main/pkg/specgen/generate/kube/kube.go#L208) |
| 10302.00 | 101 | 0.0% | `*Container.restore` | [libpod/container_internal_common.go:1557](https://github.com/podman-container-tools/podman/blob/main/libpod/container_internal_common.go#L1557) |
| 10100.00 | 100 | 0.0% | `createContainerOptions` | [pkg/specgen/generate/container_create.go:373](https://github.com/podman-container-tools/podman/blob/main/pkg/specgen/generate/container_create.go#L373) |
| 9702.00 | 98 | 0.0% | `*Runtime.setupContainer` | [libpod/runtime_ctr.go:245](https://github.com/podman-container-tools/podman/blob/main/libpod/runtime_ctr.go#L245) |
| 9506.00 | 97 | 0.0% | `namespaceOptions` | [pkg/specgen/generate/namespaces.go:124](https://github.com/podman-container-tools/podman/blob/main/pkg/specgen/generate/namespaces.go#L124) |
| 9506.00 | 97 | 0.0% | `buildFlagsWrapperToOptions` | [cmd/podman/common/build.go:311](https://github.com/podman-container-tools/podman/blob/main/cmd/podman/common/build.go#L311) |
