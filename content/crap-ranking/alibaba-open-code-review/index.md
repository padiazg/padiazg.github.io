---
title: "alibaba/open/code/review"
date: 2026-10-12
slug: alibaba-open-code-review
tags: ["crap", "report"]
draft: false
repo: alibaba/open-code-review
weight: 14
stars: 46521
combined: 20556.95
average: 14.20
funcs: 1448
toc: false
ShowToc: false
---

Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/alibaba/open-code-review?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/alibaba/open-code-review?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/alibaba/open-code-review?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/alibaba/open-code-review?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/alibaba/open-code-review?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/alibaba/open-code-review
- **Commit**: `4a3844c42fe07eabe5ca47cdd4c07b7a5d232544` · HEAD up to date
- **Analyzed**: 2026-10-12T18:48:41-03:00 (128.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 15.7,29.0 28.3,27.9 41.0,27.7 53.7,27.2 66.3,27.1 79.0,26.8 91.7,26.6 104.3,26.4 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">20557</text></svg>

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
| 2026-09-02 | `4cecf1e` | 6941.36 | 6.40 | 1084 | 21 | local |
| 2026-09-04 | `af7f922` | 7062.84 | 6.33 | 1115 | 21 | local |
| 2026-10-12 | `4a3844c` | 20556.95 | 14.20 | 1448 | 81 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 1260.00 | 35 | 0.0% | `*Parser.parseSlash` | [acp/internal/intent/slash.go:13](https://github.com/alibaba/open-code-review/blob/main/acp/internal/intent/slash.go#L13) |
| 1260.00 | 35 | 0.0% | `Progress.Collect` | [acp/internal/adapter/presentation/progress.go:27](https://github.com/alibaba/open-code-review/blob/main/acp/internal/adapter/presentation/progress.go#L27) |
| 812.00 | 28 | 0.0% | `*ProcessRunner.run` | [acp/internal/orchestrator/runner.go:17](https://github.com/alibaba/open-code-review/blob/main/acp/internal/orchestrator/runner.go#L17) |
| 756.00 | 27 | 0.0% | `*Agent.Prompt` | [acp/internal/adapter/prompt.go:20](https://github.com/alibaba/open-code-review/blob/main/acp/internal/adapter/prompt.go#L20) |
| 650.00 | 25 | 0.0% | `writeReport` | [acp/internal/adapter/presentation/report.go:66](https://github.com/alibaba/open-code-review/blob/main/acp/internal/adapter/presentation/report.go#L66) |
| 420.00 | 20 | 0.0% | `promptContent` | [acp/internal/adapter/resources.go:18](https://github.com/alibaba/open-code-review/blob/main/acp/internal/adapter/resources.go#L18) |
| 380.00 | 19 | 0.0% | `OpenLocalFile` | [acp/internal/adapter/workspace/files.go:23](https://github.com/alibaba/open-code-review/blob/main/acp/internal/adapter/workspace/files.go#L23) |
| 380.00 | 19 | 0.0% | `*Client.requestFailure` | [acp/internal/intent/llm/diagnostics.go:64](https://github.com/alibaba/open-code-review/blob/main/acp/internal/intent/llm/diagnostics.go#L64) |
| 306.00 | 17 | 0.0% | `ResolveBinary` | [acp/internal/orchestrator/resolve.go:46](https://github.com/alibaba/open-code-review/blob/main/acp/internal/orchestrator/resolve.go#L46) |
| 306.00 | 17 | 0.0% | `BuildReviewArgs` | [acp/internal/contract/intent.go:87](https://github.com/alibaba/open-code-review/blob/main/acp/internal/contract/intent.go#L87) |
