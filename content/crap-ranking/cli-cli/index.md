---
title: "cli/cli"
date: 2026-10-12
slug: cli-cli
tags: ["crap", "report"]
draft: false
repo: cli/cli
weight: 11
stars: 46669
combined: 42890.91
average: 11.72
funcs: 3660
toc: false
ShowToc: false
---

GitHub’s official command line tool

<div class="project-badges">
<img src="https://img.shields.io/github/stars/cli/cli?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/cli/cli?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/cli/cli?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/cli/cli?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/cli/cli?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/cli/cli
- **Commit**: `54a671d9a8f8c7a785c132d6f6a25375dc96acc1` · HEAD up to date
- **Analyzed**: 2026-10-12T18:50:49-03:00 (159.5s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.0 15.7,3.0 28.3,3.6 41.0,6.1 53.7,6.0 66.3,7.1 79.0,10.2 91.7,10.4 104.3,11.1 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">42891</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `0eeec0b` | 48855.66 | 13.95 | 3501 | 204 | local |
| 2026-08-19 | `95d3a1d` | 48855.97 | 13.95 | 3501 | 204 | local |
| 2026-08-23 | `5d3c481` | 48726.39 | 13.87 | 3512 | 204 | local |
| 2026-08-26 | `606cda4` | 48153.35 | 13.40 | 3593 | 201 | local |
| 2026-08-27 | `d76da60` | 48156.35 | 13.40 | 3593 | 201 | local |
| 2026-08-30 | `40b742f` | 47904.58 | 13.36 | 3587 | 199 | local |
| 2026-09-02 | `0da5ee8` | 47199.08 | 13.15 | 3589 | 200 | local |
| 2026-09-02 | `adda317` | 47158.67 | 13.05 | 3614 | 199 | local |
| 2026-09-04 | `cba9646` | 47007.07 | 12.99 | 3620 | 198 | local |
| 2026-10-12 | `54a671d` | 42890.91 | 11.72 | 3660 | 189 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 1980.00 | 44 | 0.0% | `Main` | [internal/ghcmd/cmd.go:51](https://github.com/cli/cli/blob/trunk/internal/ghcmd/cmd.go#L51) |
| 992.00 | 31 | 0.0% | `Discussion.ExportData` | [pkg/cmd/discussion/client/types.go:34](https://github.com/cli/cli/blob/trunk/pkg/cmd/discussion/client/types.go#L34) |
| 812.00 | 28 | 0.0% | `creditsRun` | [pkg/cmd/repo/credits/credits.go:115](https://github.com/cli/cli/blob/trunk/pkg/cmd/repo/credits/credits.go#L115) |
| 702.00 | 26 | 0.0% | `EditFieldsSurvey` | [pkg/cmd/pr/shared/editable.go:372](https://github.com/cli/cli/blob/trunk/pkg/cmd/pr/shared/editable.go#L372) |
| 650.00 | 25 | 0.0% | `RepositoryGraphQL` | [api/query_builder.go:555](https://github.com/cli/cli/blob/trunk/api/query_builder.go#L555) |
| 650.00 | 25 | 0.0% | `CreatePullRequest` | [api/queries_pr.go:490](https://github.com/cli/cli/blob/trunk/api/queries_pr.go#L490) |
| 650.00 | 25 | 0.0% | `FetchOptions` | [pkg/cmd/pr/shared/editable.go:517](https://github.com/cli/cli/blob/trunk/pkg/cmd/pr/shared/editable.go#L517) |
| 600.00 | 24 | 0.0% | `*Session.ExportData` | [pkg/cmd/agent-task/capi/sessions.go:122](https://github.com/cli/cli/blob/trunk/pkg/cmd/agent-task/capi/sessions.go#L122) |
| 599.86 | 37 | 25.6% | `IssueGraphQL` | [api/query_builder.go:385](https://github.com/cli/cli/blob/trunk/api/query_builder.go#L385) |
| 552.00 | 23 | 0.0% | `GetRuns` | [pkg/cmd/run/shared/shared.go:368](https://github.com/cli/cli/blob/trunk/pkg/cmd/run/shared/shared.go#L368) |
