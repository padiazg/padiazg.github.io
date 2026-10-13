---
title: "ollama/ollama"
date: 2026-10-12
slug: ollama-ollama
tags: ["crap", "report"]
draft: false
repo: ollama/ollama
weight: 7
stars: 182890
combined: 205530.62
average: 35.38
funcs: 5809
toc: false
ShowToc: false
---

Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/ollama/ollama?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/ollama/ollama?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/ollama/ollama?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/ollama/ollama?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/ollama/ollama?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/ollama/ollama
- **Commit**: `04730395aff8ec47287977d50a631671d0e636d5` · HEAD now `a527652` — re-scan to update
- **Analyzed**: 2026-10-12T19:00:53-03:00 (143.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,18.7 14.4,18.4 25.8,29.0 37.2,29.0 48.6,29.0 60.0,27.9 71.4,27.7 82.8,27.9 94.2,27.8 105.6,3.0 117.0,24.6"/><circle cx="117.0" cy="24.6" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">205531</text></svg>

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
| 2026-09-02 | `e5e4377` | 193272.12 | 32.40 | 5966 | 661 | local |
| 2026-09-02 | `882387a` | 288091.01 | 48.23 | 5973 | 867 | local |
| 2026-10-12 | `0473039` | 205530.62 | 35.38 | 5809 | 692 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 16512.00 | 128 | 0.0% | `*Server.chat` | [app/ui/ui.go:702](https://github.com/ollama/ollama/blob/main/app/ui/ui.go#L702) |
| 10920.00 | 104 | 0.0% | `generateInteractive` | [cmd/interactive.go:34](https://github.com/ollama/ollama/blob/main/cmd/interactive.go#L34) |
| 5256.00 | 72 | 0.0% | `*Model.LoadWeights` | [mlxrunner/model/gemma4/gemma4.go:800](https://github.com/ollama/ollama/blob/main/mlxrunner/model/gemma4/gemma4.go#L800) |
| 5256.00 | 72 | 0.0% | `*Instance.Readline` | [readline/readline.go:66](https://github.com/ollama/ollama/blob/main/readline/readline.go#L66) |
| 4032.00 | 63 | 0.0% | `GPUDevices` | [discover/runner.go:36](https://github.com/ollama/ollama/blob/main/discover/runner.go#L36) |
| 3067.18 | 69 | 14.3% | `*Server.EmbedHandler` | [server/routes.go:1058](https://github.com/ollama/ollama/blob/main/server/routes.go#L1058) |
| 2450.00 | 49 | 0.0% | `resolveMamba2ScanDims` | [mlx/mamba2_scan.go:100](https://github.com/ollama/ollama/blob/main/mlx/mamba2_scan.go#L100) |
| 2256.00 | 47 | 0.0% | `*Model.LoadWeights` | [mlxrunner/model/laguna/laguna.go:949](https://github.com/ollama/ollama/blob/main/mlxrunner/model/laguna/laguna.go#L949) |
| 2162.00 | 46 | 0.0% | `qwen35Migrator.Migrate` | [compatmigrate/qwen35.go:31](https://github.com/ollama/ollama/blob/main/compatmigrate/qwen35.go#L31) |
| 2162.00 | 46 | 0.0% | `applyClaudeDesktopMappingsWithOpen` | [app/cmd/app/app_darwin.go:1553](https://github.com/ollama/ollama/blob/main/app/cmd/app/app_darwin.go#L1553) |
