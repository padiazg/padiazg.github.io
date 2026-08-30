---
title: "alibaba/open/code/review"
date: 2026-08-30
slug: alibaba-open-code-review
tags: ["crap", "report"]
draft: false
repo: alibaba/open-code-review
weight: 17
stars: 21665
combined: 6839.79
average: 6.39
funcs: 1070
toc: false
ShowToc: false
---

Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/alibaba/open-code-review?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/alibaba/open-code-review?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/alibaba/open-code-review?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/alibaba/open-code-review?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/alibaba/open-code-review?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/alibaba/open-code-review
- **Commit**: `124bfc3b9e978a83eef9692a7f9bdf64617064d1` · HEAD up to date
- **Analyzed**: 2026-08-30T17:40:42-03:00 (50.7s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 22.0,28.7 41.0,16.1 60.0,13.2 79.0,8.4 98.0,7.2 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">6840</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `c4d3f52` | 5563.40 | 5.79 | 961 | 13 | local |
| 2026-08-19 | `756203c` | 5575.73 | 5.77 | 967 | 13 | local |
| 2026-08-23 | `6612029` | 6197.79 | 6.18 | 1003 | 16 | local |
| 2026-08-24 | `0c44f10` | 6340.24 | 6.26 | 1013 | 16 | local |
| 2026-08-26 | `89ec55b` | 6575.04 | 6.27 | 1049 | 18 | local |
| 2026-08-27 | `eda2548` | 6632.60 | 6.26 | 1059 | 18 | local |
| 2026-08-30 | `124bfc3` | 6839.79 | 6.39 | 1070 | 20 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 342.00 | 18 | 0.0% | `executeScan` | [cmd/opencodereview/scan_cmd.go:111](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/scan_cmd.go#L111) |
| 272.00 | 16 | 0.0% | `runConfigModel` | [cmd/opencodereview/provider_cmd.go:317](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L317) |
| 240.00 | 15 | 0.0% | `isNonEnglish` | [scripts/verify-english-only.go:116](https://github.com/alibaba/open-code-review/blob/main/scripts/verify-english-only.go#L116) |
| 156.00 | 12 | 0.0% | `run` | [scripts/verify-english-only.go:204](https://github.com/alibaba/open-code-review/blob/main/scripts/verify-english-only.go#L204) |
| 132.00 | 11 | 0.0% | `NativeTurn.EstimatedTokens` | [internal/llm/client.go:106](https://github.com/alibaba/open-code-review/blob/main/internal/llm/client.go#L106) |
| 119.43 | 13 | 14.3% | `runLLMTest` | [cmd/opencodereview/llm_cmd.go:53](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/llm_cmd.go#L53) |
| 103.21 | 14 | 23.1% | `*Agent.Run` | [internal/agent/agent.go:278](https://github.com/alibaba/open-code-review/blob/main/internal/agent/agent.go#L278) |
| 69.12 | 69 | 97.1% | `LoadSession` | [internal/viewer/store.go:322](https://github.com/alibaba/open-code-review/blob/main/internal/viewer/store.go#L322) |
| 59.98 | 51 | 84.9% | `providerTUIModel.Update` | [cmd/opencodereview/provider_tui.go:636](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_tui.go#L636) |
| 56.55 | 25 | 63.0% | `executeReviewContext` | [cmd/opencodereview/review_cmd.go:112](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/review_cmd.go#L112) |
