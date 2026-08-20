---
title: "helm/helm"
date: 2026-08-19
slug: helm-helm
tags: ["crap", "report"]
draft: false
repo: helm/helm
weight: 11
stars: 30157
combined: 37753.34
average: 23.42
funcs: 1612
toc: false
ShowToc: false
---

The Kubernetes Package Manager

<div class="project-badges">
<img src="https://img.shields.io/github/stars/helm/helm?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/helm/helm?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/helm/helm?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/helm/helm?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/helm/helm?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/helm/helm
- **Commit**: `9b447b40484b9557fdb14de4a235084a1e4e202f` · HEAD up to date
- **Analyzed**: 2026-08-19T22:58:27-03:00 (641.3s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">37753</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `c000a40` | 13911.96 | 8.63 | 1612 | 74 | local |
| 2026-08-19 | `9b447b4` | 37753.34 | 23.42 | 1612 | 191 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 1892.00 | 43 | 0.0% | `*ReadyChecker.IsReady` | [pkg/kube/ready.go:85](https://github.com/helm/helm/blob/main/pkg/kube/ready.go#L85) |
| 870.00 | 29 | 0.0% | `newUpgradeCmd` | [pkg/cmd/upgrade.go:85](https://github.com/helm/helm/blob/main/pkg/cmd/upgrade.go#L85) |
| 870.00 | 29 | 0.0% | `*ChartDownloader.ResolveChartVersion` | [pkg/downloader/chart_downloader.go:365](https://github.com/helm/helm/blob/main/pkg/downloader/chart_downloader.go#L365) |
| 812.00 | 28 | 0.0% | `*ChartDownloader.DownloadToCache` | [pkg/downloader/chart_downloader.go:217](https://github.com/helm/helm/blob/main/pkg/downloader/chart_downloader.go#L217) |
| 812.00 | 28 | 0.0% | `newTemplateCmd` | [pkg/cmd/template.go:61](https://github.com/helm/helm/blob/main/pkg/cmd/template.go#L61) |
| 756.00 | 27 | 0.0% | `*repoAddOptions.run` | [pkg/cmd/repo_add.go:105](https://github.com/helm/helm/blob/main/pkg/cmd/repo_add.go#L105) |
| 702.00 | 26 | 0.0% | `*parser.listItem` | [pkg/strvals/parser.go:333](https://github.com/helm/helm/blob/main/pkg/strvals/parser.go#L333) |
| 702.00 | 26 | 0.0% | `*parser.key` | [pkg/strvals/parser.go:179](https://github.com/helm/helm/blob/main/pkg/strvals/parser.go#L179) |
| 650.00 | 25 | 0.0% | `*Client.processChartPull` | [pkg/registry/client.go:437](https://github.com/helm/helm/blob/main/pkg/registry/client.go#L437) |
| 600.00 | 24 | 0.0% | `*ChartDownloader.DownloadTo` | [pkg/downloader/chart_downloader.go:101](https://github.com/helm/helm/blob/main/pkg/downloader/chart_downloader.go#L101) |
