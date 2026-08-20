---
title: "ollama/ollama"
date: 2026-08-19
slug: ollama-ollama
tags: ["crap", "report"]
draft: false
repo: ollama/ollama
weight: 6
stars: 178992
combined: 229127.85
average: 46.77
funcs: 4899
toc: false
ShowToc: false
---

Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/ollama/ollama?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/ollama/ollama?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/ollama/ollama?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/ollama/ollama?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/ollama/ollama?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/ollama/ollama
- **Commit**: `b7871fc0d1d82fe109536efa3e0e8e411c766c75` · HEAD up to date
- **Analyzed**: 2026-08-19T23:03:36-03:00 (299.9s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">229128</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `d67ad83` | 228126.59 | 46.60 | 4895 | 682 | local |
| 2026-08-19 | `b7871fc` | 229127.85 | 46.77 | 4899 | 684 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 16770.00 | 129 | 0.0% | `*Server.GenerateHandler` | [server/routes.go:245](https://github.com/ollama/ollama/blob/main/server/routes.go#L245) |
| 15006.00 | 122 | 0.0% | `*Server.ChatHandler` | [server/routes.go:2440](https://github.com/ollama/ollama/blob/main/server/routes.go#L2440) |
| 10920.00 | 104 | 0.0% | `generateInteractive` | [cmd/interactive.go:34](https://github.com/ollama/ollama/blob/main/cmd/interactive.go#L34) |
| 6162.00 | 78 | 0.0% | `*Server.CreateHandler` | [server/create.go:51](https://github.com/ollama/ollama/blob/main/server/create.go#L51) |
| 5256.00 | 72 | 0.0% | `*Instance.Readline` | [readline/readline.go:66](https://github.com/ollama/ollama/blob/main/readline/readline.go#L66) |
| 4692.00 | 68 | 0.0% | `*Model.LoadWeights` | [x/models/gemma4/gemma4.go:674](https://github.com/ollama/ollama/blob/main/x/models/gemma4/gemma4.go#L674) |
| 4692.00 | 68 | 0.0% | `createModel` | [server/create.go:724](https://github.com/ollama/ollama/blob/main/server/create.go#L724) |
| 4032.00 | 63 | 0.0% | `GPUDevices` | [discover/runner.go:36](https://github.com/ollama/ollama/blob/main/discover/runner.go#L36) |
| 2756.00 | 52 | 0.0% | `parseConfig` | [x/models/glimmer/glimmer.go:239](https://github.com/ollama/ollama/blob/main/x/models/glimmer/glimmer.go#L239) |
| 2550.00 | 50 | 0.0% | `*Server.EmbedHandler` | [server/routes.go:795](https://github.com/ollama/ollama/blob/main/server/routes.go#L795) |
