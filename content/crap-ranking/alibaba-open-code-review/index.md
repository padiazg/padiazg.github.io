---
title: "alibaba/open/code/review"
date: 2026-08-23
slug: alibaba-open-code-review
tags: ["crap", "report"]
draft: false
repo: alibaba/open-code-review
weight: 14
stars: 21260
combined: 6197.79
average: 6.18
funcs: 1003
toc: false
ShowToc: false
---

Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/alibaba/open-code-review?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/alibaba/open-code-review?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/alibaba/open-code-review?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/alibaba/open-code-review?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/alibaba/open-code-review?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/alibaba/open-code-review
- **Commit**: `66120291271b2e605e420e9f11fbd6448f06163f` · HEAD up to date
- **Analyzed**: 2026-08-23T23:59:06-03:00 (589ms)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 60.0,28.5 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">6198</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `c4d3f52` | 5563.40 | 5.79 | 961 | 13 | local |
| 2026-08-19 | `756203c` | 5575.73 | 5.77 | 967 | 13 | local |
| 2026-08-23 | `6612029` | 6197.79 | 6.18 | 1003 | 16 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 272.00 | 16 | 0.0% | `executeScan` | [cmd/opencodereview/scan_cmd.go:108](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/scan_cmd.go#L108) |
| 272.00 | 16 | 0.0% | `runConfigModel` | [cmd/opencodereview/provider_cmd.go:317](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L317) |
| 240.00 | 15 | 0.0% | `isNonEnglish` | [scripts/verify-english-only.go:116](https://github.com/alibaba/open-code-review/blob/main/scripts/verify-english-only.go#L116) |
| 156.00 | 12 | 0.0% | `run` | [scripts/verify-english-only.go:204](https://github.com/alibaba/open-code-review/blob/main/scripts/verify-english-only.go#L204) |
| 119.43 | 13 | 14.3% | `runLLMTest` | [cmd/opencodereview/llm_cmd.go:53](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/llm_cmd.go#L53) |
| 103.21 | 14 | 23.1% | `*Agent.Run` | [internal/agent/agent.go:276](https://github.com/alibaba/open-code-review/blob/main/internal/agent/agent.go#L276) |
| 67.04 | 67 | 98.0% | `LoadSession` | [internal/viewer/store.go:311](https://github.com/alibaba/open-code-review/blob/main/internal/viewer/store.go#L311) |
| 59.98 | 51 | 84.9% | `providerTUIModel.Update` | [cmd/opencodereview/provider_tui.go:636](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_tui.go#L636) |
| 56.00 | 7 | 0.0% | `runConfigProvider` | [cmd/opencodereview/provider_cmd.go:19](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L19) |
| 49.17 | 49 | 95.8% | `setConfigValue` | [cmd/opencodereview/config_cmd.go:424](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/config_cmd.go#L424) |
