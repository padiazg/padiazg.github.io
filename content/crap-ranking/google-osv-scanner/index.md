---
title: "google/osv/scanner"
date: 2026-10-12
slug: google-osv-scanner
tags: ["crap", "report"]
draft: false
repo: google/osv-scanner
weight: 16
stars: 11171
combined: 12009.01
average: 19.03
funcs: 631
toc: false
ShowToc: false
---

Vulnerability scanner written in Go which uses the data provided by https://osv.dev

<div class="project-badges">
<img src="https://img.shields.io/github/stars/google/osv-scanner?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/google/osv-scanner?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/google/osv-scanner?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/google/osv-scanner?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/google/osv-scanner?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/google/osv-scanner
- **Commit**: `a4d0a04916e101efc0db563d6269713a03cbf00b` · HEAD now `f455353` — re-scan to update
- **Analyzed**: 2026-10-12T18:56:07-03:00 (153.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 41.0,29.0 79.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">12009</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-27 | `a67bcfe` | 10129.57 | 16.88 | 600 | 50 | local |
| 2026-08-30 | `78bc246` | 10129.57 | 16.88 | 600 | 50 | local |
| 2026-09-02 | `de9c035` | 10130.57 | 16.88 | 600 | 50 | local |
| 2026-10-12 | `a4d0a04` | 12009.01 | 19.03 | 631 | 59 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 1260.00 | 35 | 0.0% | `printSummaryResult` | [internal/output/table.go:114](https://github.com/google/osv-scanner/blob/main/internal/output/table.go#L114) |
| 930.00 | 30 | 0.0% | `run` | [cmd/osv-reporter/main.go:40](https://github.com/google/osv-scanner/blob/main/cmd/osv-reporter/main.go#L40) |
| 552.00 | 23 | 0.0% | `rustAnalysis` | [internal/sourceanalysis/rust.go:35](https://github.com/google/osv-scanner/blob/main/internal/sourceanalysis/rust.go#L35) |
| 552.00 | 23 | 0.0% | `*vcrResponseNormalizingTransport.updateOfflineDB` | [cmd/osv-scanner/internal/testcmd/vcr.go:922](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/internal/testcmd/vcr.go#L922) |
| 342.00 | 18 | 0.0% | `action` | [cmd/osv-scanner/scan/image/command.go:40](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/scan/image/command.go#L40) |
| 272.00 | 16 | 0.0% | `buildZipInMemory` | [cmd/osv-scanner/internal/testcmd/vcr.go:1014](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/internal/testcmd/vcr.go#L1014) |
| 266.65 | 17 | 4.8% | `DoContainerScan` | [pkg/osvscanner/osvscanner.go:169](https://github.com/google/osv-scanner/blob/main/pkg/osvscanner/osvscanner.go#L169) |
| 240.00 | 15 | 0.0% | `*vcrResponseNormalizingTransport.normalizeVulnResponse` | [cmd/osv-scanner/internal/testcmd/vcr.go:729](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/internal/testcmd/vcr.go#L729) |
| 215.53 | 17 | 11.8% | `determineReturnErr` | [pkg/osvscanner/osvscanner.go:374](https://github.com/google/osv-scanner/blob/main/pkg/osvscanner/osvscanner.go#L374) |
| 210.00 | 14 | 0.0% | `run` | [cmd/osv-scanner/internal/testcmd/run.go:47](https://github.com/google/osv-scanner/blob/main/cmd/osv-scanner/internal/testcmd/run.go#L47) |
