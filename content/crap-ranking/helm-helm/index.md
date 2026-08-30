---
title: "helm/helm"
date: 2026-08-30
slug: helm-helm
tags: ["crap", "report"]
draft: false
repo: helm/helm
weight: 14
stars: 30195
combined: 13578.65
average: 8.36
funcs: 1624
toc: false
ShowToc: false
---

The Kubernetes Package Manager

<div class="project-badges">
<img src="https://img.shields.io/github/stars/helm/helm?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/helm/helm?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/helm/helm?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/helm/helm?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/helm/helm?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/helm/helm
- **Commit**: `d2de64e64bc64cbef584a0ccb13eb8cb0c96bded` · HEAD up to date
- **Analyzed**: 2026-08-30T17:44:00-03:00 (53.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,28.6 25.8,3.0 48.6,29.0 71.4,29.0 94.2,29.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">13579</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `c000a40` | 13911.96 | 8.63 | 1612 | 74 | local |
| 2026-08-19 | `9b447b4` | 37753.34 | 23.42 | 1612 | 191 | local |
| 2026-08-22 | `e9b85e4` | 13544.90 | 8.36 | 1620 | 70 | local |
| 2026-08-23 | `67d54fd` | 13569.15 | 8.36 | 1624 | 70 | local |
| 2026-08-26 | `d62bee2` | 13570.65 | 8.36 | 1624 | 70 | local |
| 2026-08-30 | `d2de64e` | 13578.65 | 8.36 | 1624 | 70 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 462.00 | 21 | 0.0% | `*ChartPathOptions.LocateChart` | [pkg/action/install.go:889](https://github.com/helm/helm/blob/main/pkg/action/install.go#L889) |
| 462.00 | 21 | 0.0% | `*Client.processPluginPull` | [pkg/registry/plugin.go:79](https://github.com/helm/helm/blob/main/pkg/registry/plugin.go#L79) |
| 420.00 | 20 | 0.0% | `volumeName` | [internal/third_party/dep/fs/fs.go:341](https://github.com/helm/helm/blob/main/internal/third_party/dep/fs/fs.go#L341) |
| 342.00 | 18 | 0.0% | `fixLongPath` | [internal/third_party/dep/fs/fs.go:257](https://github.com/helm/helm/blob/main/internal/third_party/dep/fs/fs.go#L257) |
| 210.00 | 14 | 0.0% | `structToMap` | [pkg/chart/common.go:184](https://github.com/helm/helm/blob/main/pkg/chart/common.go#L184) |
| 182.00 | 13 | 0.0% | `*pluginInstallOptions.run` | [pkg/cmd/plugin_install.go:122](https://github.com/helm/helm/blob/main/pkg/cmd/plugin_install.go#L122) |
| 182.00 | 13 | 0.0% | `*Client.ValidateReference` | [pkg/registry/client.go:848](https://github.com/helm/helm/blob/main/pkg/registry/client.go#L848) |
| 168.04 | 48 | 62.7% | `*Uninstall.Run` | [pkg/action/uninstall.go:62](https://github.com/helm/helm/blob/main/pkg/action/uninstall.go#L62) |
| 156.00 | 12 | 0.0% | `LoadFile` | [pkg/chart/loader/load.go:113](https://github.com/helm/helm/blob/main/pkg/chart/loader/load.go#L113) |
| 139.36 | 50 | 67.1% | `*Configuration.renderResources` | [pkg/action/action.go:279](https://github.com/helm/helm/blob/main/pkg/action/action.go#L279) |
