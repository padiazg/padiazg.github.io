---
title: "ollama/ollama"
date: 2026-08-30
slug: ollama-ollama
tags: ["crap", "report"]
draft: false
repo: ollama/ollama
weight: 7
stars: 179794
combined: 193030.56
average: 32.55
funcs: 5931
toc: false
ShowToc: false
---

Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/ollama/ollama?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/ollama/ollama?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/ollama/ollama?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/ollama/ollama?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/ollama/ollama?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/ollama/ollama
- **Commit**: `f96e7aa0513b9973a0ccc71be414c2ecb9d65b1a` · HEAD up to date
- **Analyzed**: 2026-08-30T17:48:59-03:00 (55.1s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.6 19.3,3.0 35.6,28.9 51.9,28.9 68.1,29.0 84.4,26.3 100.7,25.9 117.0,26.2"/><circle cx="117.0" cy="26.2" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">193031</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `d67ad83` | 228126.59 | 46.60 | 4895 | 682 | local |
| 2026-08-19 | `b7871fc` | 229127.85 | 46.77 | 4899 | 684 | local |
| 2026-08-21 | `add1f92` | 188734.36 | 32.57 | 5795 | 633 | local |
| 2026-08-23 | `fb30760` | 188734.36 | 32.57 | 5795 | 633 | local |
| 2026-08-24 | `02dc3ea` | 188655.49 | 32.55 | 5795 | 633 | local |
| 2026-08-26 | `13f2fb8` | 192807.76 | 32.46 | 5939 | 660 | local |
| 2026-08-27 | `39f7f91` | 193519.56 | 32.53 | 5949 | 663 | local |
| 2026-08-30 | `f96e7aa` | 193030.56 | 32.55 | 5931 | 660 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 16512.00 | 128 | 0.0% | `*Server.chat` | [app/ui/ui.go:692](https://github.com/ollama/ollama/blob/main/app/ui/ui.go#L692) |
| 10920.00 | 104 | 0.0% | `generateInteractive` | [cmd/interactive.go:34](https://github.com/ollama/ollama/blob/main/cmd/interactive.go#L34) |
| 5256.00 | 72 | 0.0% | `*Instance.Readline` | [readline/readline.go:66](https://github.com/ollama/ollama/blob/main/readline/readline.go#L66) |
| 4692.00 | 68 | 0.0% | `*Model.LoadWeights` | [x/models/gemma4/gemma4.go:669](https://github.com/ollama/ollama/blob/main/x/models/gemma4/gemma4.go#L669) |
| 4032.00 | 63 | 0.0% | `GPUDevices` | [discover/runner.go:36](https://github.com/ollama/ollama/blob/main/discover/runner.go#L36) |
| 2450.00 | 49 | 0.0% | `resolveMamba2ScanDims` | [x/mlxrunner/mlx/mamba2_scan.go:100](https://github.com/ollama/ollama/blob/main/x/mlxrunner/mlx/mamba2_scan.go#L100) |
| 2256.00 | 47 | 0.0% | `*Model.LoadWeights` | [x/models/laguna/laguna.go:979](https://github.com/ollama/ollama/blob/main/x/models/laguna/laguna.go#L979) |
| 2224.35 | 50 | 4.5% | `*Server.EmbedHandler` | [server/routes.go:795](https://github.com/ollama/ollama/blob/main/server/routes.go#L795) |
| 2162.00 | 46 | 0.0% | `main` | [app/cmd/app/app.go:60](https://github.com/ollama/ollama/blob/main/app/cmd/app/app.go#L60) |
| 2162.00 | 46 | 0.0% | `applyClaudeDesktopMappingsWithOpen` | [app/cmd/app/app_darwin.go:1512](https://github.com/ollama/ollama/blob/main/app/cmd/app/app_darwin.go#L1512) |
