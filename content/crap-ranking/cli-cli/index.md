---
title: "cli/cli"
date: 2026-08-23
slug: cli-cli
tags: ["crap", "report"]
draft: false
repo: cli/cli
weight: 9
stars: 45958
combined: 48726.39
average: 13.87
funcs: 3512
toc: false
ShowToc: false
---

GitHub’s official command line tool

<div class="project-badges">
<img src="https://img.shields.io/github/stars/cli/cli?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/cli/cli?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/cli/cli?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/cli/cli?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/cli/cli?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/cli/cli
- **Commit**: `5d3c4817f1619213951dbf15031bad04acb88392` · HEAD up to date
- **Analyzed**: 2026-08-23T23:59:10-03:00 (1.3s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.1 60.0,3.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">48726</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `0eeec0b` | 48855.66 | 13.95 | 3501 | 204 | local |
| 2026-08-19 | `95d3a1d` | 48855.97 | 13.95 | 3501 | 204 | local |
| 2026-08-23 | `5d3c481` | 48726.39 | 13.87 | 3512 | 204 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 2162.00 | 46 | 0.0% | `Main` | [internal/ghcmd/cmd.go:52](https://github.com/cli/cli/blob/trunk/internal/ghcmd/cmd.go#L52) |
| 1482.00 | 38 | 0.0% | `ExtBrowse` | [pkg/cmd/extension/browse/browse.go:380](https://github.com/cli/cli/blob/trunk/pkg/cmd/extension/browse/browse.go#L380) |
| 1406.00 | 37 | 0.0% | `gardenRun` | [pkg/cmd/repo/garden/garden.go:125](https://github.com/cli/cli/blob/trunk/pkg/cmd/repo/garden/garden.go#L125) |
| 992.00 | 31 | 0.0% | `Discussion.ExportData` | [pkg/cmd/discussion/client/types.go:34](https://github.com/cli/cli/blob/trunk/pkg/cmd/discussion/client/types.go#L34) |
| 812.00 | 28 | 0.0% | `EditFieldsSurvey` | [pkg/cmd/pr/shared/editable.go:371](https://github.com/cli/cli/blob/trunk/pkg/cmd/pr/shared/editable.go#L371) |
| 812.00 | 28 | 0.0% | `creditsRun` | [pkg/cmd/repo/credits/credits.go:115](https://github.com/cli/cli/blob/trunk/pkg/cmd/repo/credits/credits.go#L115) |
| 756.00 | 27 | 0.0% | `rootHelpFunc` | [pkg/cmd/root/help.go:90](https://github.com/cli/cli/blob/trunk/pkg/cmd/root/help.go#L90) |
| 673.70 | 36 | 21.1% | `IssueGraphQL` | [api/query_builder.go:385](https://github.com/cli/cli/blob/trunk/api/query_builder.go#L385) |
| 650.00 | 25 | 0.0% | `CreatePullRequest` | [api/queries_pr.go:465](https://github.com/cli/cli/blob/trunk/api/queries_pr.go#L465) |
| 650.00 | 25 | 0.0% | `RepositoryGraphQL` | [api/query_builder.go:552](https://github.com/cli/cli/blob/trunk/api/query_builder.go#L552) |
