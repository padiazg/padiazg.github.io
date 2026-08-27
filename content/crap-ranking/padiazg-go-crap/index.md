---
title: "padiazg/go/crap"
date: 2026-08-24
slug: padiazg-go-crap
tags: ["crap", "report"]
draft: false
repo: padiazg/go-crap
weight: 17
stars: 19
combined: 884.60
average: 4.66
funcs: 190
toc: false
ShowToc: false
---

A CLI tool that calculates the CRAP score (cyclomatic complexity x coverage) for Go projects.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/padiazg/go-crap?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/padiazg/go-crap?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/padiazg/go-crap?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/padiazg/go-crap?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/padiazg/go-crap?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/padiazg/go-crap
- **Commit**: `e38ff206b7f1920299e779d62a58ed094a261531` · HEAD up to date
- **Analyzed**: 2026-08-24T01:49:29-03:00 (6.7s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">885</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-24 | `e38ff20` | 884.60 | 4.66 | 190 | 0 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 19.12 | 6 | 28.6% | `exprString` | [internal/complexity/analyze.go:196](https://github.com/padiazg/go-crap/blob/master/internal/complexity/analyze.go#L196) |
| 19.00 | 19 | 100.0% | `runScan` | [cmd/scan.go:116](https://github.com/padiazg/go-crap/blob/master/cmd/scan.go#L116) |
| 17.12 | 17 | 92.6% | `*TableFormatter.Format` | [internal/report/table.go:34](https://github.com/padiazg/go-crap/blob/master/internal/report/table.go#L34) |
| 17.00 | 17 | 100.0% | `*Scanner.Scan` | [internal/coverage/scanner.go:64](https://github.com/padiazg/go-crap/blob/master/internal/coverage/scanner.go#L64) |
| 12.49 | 12 | 85.0% | `*GithubFormatter.Format` | [internal/report/github.go:13](https://github.com/padiazg/go-crap/blob/master/internal/report/github.go#L13) |
| 12.00 | 3 | 0.0% | `*GoPrettyReporter.SetDetail` | [internal/progress/gopretty.go:69](https://github.com/padiazg/go-crap/blob/master/internal/progress/gopretty.go#L69) |
| 12.00 | 3 | 0.0% | `*PRCommentFormatter.writeNewFunctionsSection` | [internal/report/pr_comment.go:127](https://github.com/padiazg/go-crap/blob/master/internal/report/pr_comment.go#L127) |
| 12.00 | 3 | 0.0% | `filterNewFunctions` | [internal/report/pr_comment.go:255](https://github.com/padiazg/go-crap/blob/master/internal/report/pr_comment.go#L255) |
| 12.00 | 3 | 0.0% | `*Entries.ForTable` | [internal/scan/entries.go:137](https://github.com/padiazg/go-crap/blob/master/internal/scan/entries.go#L137) |
| 11.00 | 11 | 100.0% | `AnalyzeFiles` | [internal/complexity/analyze.go:66](https://github.com/padiazg/go-crap/blob/master/internal/complexity/analyze.go#L66) |
