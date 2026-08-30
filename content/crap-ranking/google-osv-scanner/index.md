---
title: "google/osv/scanner"
date: 2026-08-30
slug: google-osv-scanner
tags: ["crap", "report"]
draft: false
repo: google/osv-scanner
weight: 15
stars: 10947
combined: 10129.57
average: 16.88
funcs: 600
toc: false
ShowToc: false
---

Vulnerability scanner written in Go which uses the data provided by https://osv.dev

<div class="project-badges">
<img src="https://img.shields.io/github/stars/google/osv-scanner?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/google/osv-scanner?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/google/osv-scanner?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/google/osv-scanner?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/google/osv-scanner?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/google/osv-scanner
- **Commit**: `78bc2469a1ea51a9f6819e08b1ff84780fe233af` · HEAD up to date
- **Analyzed**: 2026-08-30T17:47:12-03:00 (282.0s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">10130</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-27 | `a67bcfe` | 10129.57 | 16.88 | 600 | 50 | local |
| 2026-08-30 | `78bc246` | 10129.57 | 16.88 | 600 | 50 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 1260.00 | 35 | 0.0% | `printSummaryResult` | [internal/output/table.go:114](https://github.com/google/osv-scanner/blob/main/internal/output/table.go#L114) |
| 930.00 | 30 | 0.0% | `run` | [cmd/osv-reporter/main.go:40](https://github.com/google/osv-scanner/blob/main/cmd/osv-reporter/main.go#L40) |
| 552.00 | 23 | 0.0% | `rustAnalysis` | [internal/sourceanalysis/rust.go:36](https://github.com/google/osv-scanner/blob/main/internal/sourceanalysis/rust.go#L36) |
| 342.00 | 18 | 0.0% | `action` | [cmd/osv-scanner/scan/image/command.go:40](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/scan/image/command.go#L40) |
| 310.43 | 34 | 37.9% | `scan` | [pkg/osvscanner/scan.go:183](https://github.com/google/osv-scanner/blob/main/pkg/osvscanner/scan.go#L183) |
| 210.00 | 14 | 0.0% | `isUnimportant` | [pkg/osvscanner/vulnerability_result.go:257](https://github.com/google/osv-scanner/blob/main/pkg/osvscanner/vulnerability_result.go#L257) |
| 205.13 | 17 | 13.3% | `determineReturnErr` | [pkg/osvscanner/osvscanner.go:361](https://github.com/google/osv-scanner/blob/main/pkg/osvscanner/osvscanner.go#L361) |
| 182.00 | 13 | 0.0% | `DoContainerScan` | [pkg/osvscanner/osvscanner.go:169](https://github.com/google/osv-scanner/blob/main/pkg/osvscanner/osvscanner.go#L169) |
| 132.00 | 11 | 0.0% | `Run` | [cmd/osv-scanner/internal/cmd/run.go:26](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/internal/cmd/run.go#L26) |
| 118.43 | 94 | 86.0% | `*Decoder.unmarshal` | [internal/thirdparty/xml/read.go:321](https://github.com/google/osv-scanner/blob/main/internal/thirdparty/xml/read.go#L321) |
