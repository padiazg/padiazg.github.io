---
title: "cli/cli"
date: 2026-08-26
slug: cli-cli
tags: ["crap", "report"]
draft: false
repo: cli/cli
weight: 9
stars: 46011
combined: 48153.35
average: 13.40
funcs: 3593
toc: false
ShowToc: false
---

GitHub’s official command line tool

<div class="project-badges">
<img src="https://img.shields.io/github/stars/cli/cli?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/cli/cli?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/cli/cli?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/cli/cli?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/cli/cli?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/cli/cli
- **Commit**: `606cda4a9b1a703ad7c2e353a77bce0d93d21b0e` · HEAD up to date
- **Analyzed**: 2026-08-26T21:16:20-03:00 (88.3s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.0 41.0,3.0 79.0,7.8 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">48153</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `0eeec0b` | 48855.66 | 13.95 | 3501 | 204 | local |
| 2026-08-19 | `95d3a1d` | 48855.97 | 13.95 | 3501 | 204 | local |
| 2026-08-23 | `5d3c481` | 48726.39 | 13.87 | 3512 | 204 | local |
| 2026-08-26 | `606cda4` | 48153.35 | 13.40 | 3593 | 201 | local |

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
| 650.00 | 25 | 0.0% | `FetchOptions` | [pkg/cmd/pr/shared/editable.go:532](https://github.com/cli/cli/blob/trunk/pkg/cmd/pr/shared/editable.go#L532) |
| 650.00 | 25 | 0.0% | `RepositoryGraphQL` | [api/query_builder.go:555](https://github.com/cli/cli/blob/trunk/api/query_builder.go#L555) |
| 650.00 | 25 | 0.0% | `CreatePullRequest` | [api/queries_pr.go:490](https://github.com/cli/cli/blob/trunk/api/queries_pr.go#L490) |
