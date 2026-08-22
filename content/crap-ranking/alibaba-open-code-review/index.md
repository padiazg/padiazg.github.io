---
title: "alibaba/open/code/review"
date: 2026-08-19
slug: alibaba-open-code-review
tags: ["crap", "report"]
draft: false
repo: alibaba/open-code-review
weight: 15
stars: 20891
combined: 5575.73
average: 5.77
funcs: 967
toc: false
ShowToc: false
---

Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/alibaba/open-code-review?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/alibaba/open-code-review?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/alibaba/open-code-review?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/alibaba/open-code-review?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/alibaba/open-code-review?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/alibaba/open-code-review
- **Commit**: `756203c31a5aa408d89b0eda7711c34fba4ecedc` · HEAD now `6612029` — re-scan to update
- **Analyzed**: 2026-08-19T23:10:17-03:00 (177.6s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">5576</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `c4d3f52` | 5563.40 | 5.79 | 961 | 13 | local |
| 2026-08-19 | `756203c` | 5575.73 | 5.77 | 967 | 13 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 272.00 | 16 | 0.0% | `executeScan` | [cmd/opencodereview/scan_cmd.go:108](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/scan_cmd.go#L108) |
| 272.00 | 16 | 0.0% | `runConfigModel` | [cmd/opencodereview/provider_cmd.go:301](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L301) |
| 103.21 | 14 | 23.1% | `*Agent.Run` | [internal/agent/agent.go:276](https://github.com/alibaba/open-code-review/blob/main/internal/agent/agent.go#L276) |
| 79.21 | 11 | 17.4% | `runLLMTest` | [cmd/opencodereview/llm_cmd.go:53](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/llm_cmd.go#L53) |
| 76.91 | 27 | 59.1% | `executeReviewContext` | [cmd/opencodereview/review_cmd.go:110](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/review_cmd.go#L110) |
| 67.04 | 67 | 98.0% | `LoadSession` | [internal/viewer/store.go:311](https://github.com/alibaba/open-code-review/blob/main/internal/viewer/store.go#L311) |
| 59.98 | 51 | 84.9% | `providerTUIModel.Update` | [cmd/opencodereview/provider_tui.go:605](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_tui.go#L605) |
| 56.00 | 7 | 0.0% | `runConfigProvider` | [cmd/opencodereview/provider_cmd.go:19](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/provider_cmd.go#L19) |
| 48.18 | 48 | 95.7% | `setConfigValue` | [cmd/opencodereview/config_cmd.go:414](https://github.com/alibaba/open-code-review/blob/main/cmd/opencodereview/config_cmd.go#L414) |
| 41.91 | 40 | 89.4% | `tryProviderConfig` | [internal/llm/resolver.go:336](https://github.com/alibaba/open-code-review/blob/main/internal/llm/resolver.go#L336) |
