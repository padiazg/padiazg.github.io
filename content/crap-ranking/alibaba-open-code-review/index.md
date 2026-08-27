---
title: "alibaba/open/code/review"
date: 2026-08-27
slug: alibaba-open-code-review
tags: ["crap", "report"]
draft: false
repo: alibaba/open-code-review
weight: 17
stars: 21508
combined: 6632.60
average: 6.26
funcs: 1059
toc: false
ShowToc: false
---

Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/alibaba/open-code-review?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/alibaba/open-code-review?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/alibaba/open-code-review?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/alibaba/open-code-review?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/alibaba/open-code-review?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/alibaba/open-code-review
- **Commit**: `eda25482c74dff2f03bed2648497f23c512effe9` · HEAD up to date
- **Analyzed**: 2026-08-27T11:53:25-03:00 (17.0s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 25.8,28.7 48.6,13.6 71.4,10.1 94.2,4.4 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">6633</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `c4d3f52` | 5563.40 | 5.79 | 961 | 13 | local |
| 2026-08-19 | `756203c` | 5575.73 | 5.77 | 967 | 13 | local |
| 2026-08-23 | `6612029` | 6197.79 | 6.18 | 1003 | 16 | local |
| 2026-08-24 | `0c44f10` | 6340.24 | 6.26 | 1013 | 16 | local |
| 2026-08-26 | `89ec55b` | 6575.04 | 6.27 | 1049 | 18 | local |
| 2026-08-27 | `eda2548` | 6632.60 | 6.26 | 1059 | 18 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 342.00 | 18 | 0.0% | `executeScan` | [cmd/opencodereview/scan_cmd.go:111](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/scan_cmd.go#L111) |
| 272.00 | 16 | 0.0% | `runConfigModel` | [cmd/opencodereview/provider_cmd.go:317](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L317) |
| 240.00 | 15 | 0.0% | `isNonEnglish` | [scripts/verify-english-only.go:116](https://github.com/alibaba/open-code-review/blob/main/scripts/verify-english-only.go#L116) |
| 156.00 | 12 | 0.0% | `run` | [scripts/verify-english-only.go:204](https://github.com/alibaba/open-code-review/blob/main/scripts/verify-english-only.go#L204) |
| 119.43 | 13 | 14.3% | `runLLMTest` | [cmd/opencodereview/llm_cmd.go:53](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/llm_cmd.go#L53) |
| 103.21 | 14 | 23.1% | `*Agent.Run` | [internal/agent/agent.go:278](https://github.com/alibaba/open-code-review/blob/main/internal/agent/agent.go#L278) |
| 69.12 | 69 | 97.1% | `LoadSession` | [internal/viewer/store.go:321](https://github.com/alibaba/open-code-review/blob/main/internal/viewer/store.go#L321) |
| 59.98 | 51 | 84.9% | `providerTUIModel.Update` | [cmd/opencodereview/provider_tui.go:636](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_tui.go#L636) |
| 56.55 | 25 | 63.0% | `executeReviewContext` | [cmd/opencodereview/review_cmd.go:112](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/review_cmd.go#L112) |
| 56.00 | 7 | 0.0% | `runConfigProvider` | [cmd/opencodereview/provider_cmd.go:19](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L19) |
