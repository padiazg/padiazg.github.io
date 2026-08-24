---
title: "tailscale/tailscale"
date: 2026-08-23
slug: tailscale-tailscale
tags: ["crap", "report"]
draft: false
repo: tailscale/tailscale
weight: 3
stars: 35478
combined: 322838.41
average: 24.34
funcs: 13265
toc: false
ShowToc: false
---

The easiest, most secure way to use WireGuard and 2FA.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/tailscale/tailscale?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/tailscale/tailscale?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/tailscale/tailscale?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/tailscale/tailscale?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/tailscale/tailscale?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/tailscale/tailscale
- **Commit**: `ed7d521caedb5c445db9641461169d6023333a27` · HEAD up to date
- **Analyzed**: 2026-08-23T23:59:31-03:00 (6.4s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.1 41.0,3.0 79.0,29.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">322838</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `d3d14a8` | 596474.51 | 49.59 | 12027 | 2333 | local |
| 2026-08-19 | `c87680a` | 597932.51 | 49.57 | 12063 | 2340 | local |
| 2026-08-22 | `de9ec7e` | 322718.41 | 24.33 | 13265 | 1323 | local |
| 2026-08-23 | `ed7d521` | 322838.41 | 24.34 | 13265 | 1322 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 23562.00 | 153 | 0.0% | `run` | [cmd/containerboot/main.go:330](https://github.com/tailscale/tailscale/blob/main/cmd/containerboot/main.go#L330) |
| 5852.00 | 76 | 0.0% | `run` | [cmd/k8s-proxy/k8s-proxy.go:78](https://github.com/tailscale/tailscale/blob/main/cmd/k8s-proxy/k8s-proxy.go#L78) |
| 5550.00 | 74 | 0.0% | `runTests` | [cmd/k8s-operator/e2e/setup.go:118](https://github.com/tailscale/tailscale/blob/main/cmd/k8s-operator/e2e/setup.go#L118) |
| 4970.00 | 70 | 0.0% | `runUp` | [cmd/tailscale/cli/up.go:500](https://github.com/tailscale/tailscale/blob/main/cmd/tailscale/cli/up.go#L500) |
| 3782.00 | 61 | 0.0% | `*Direct.sendMapRequest` | [control/controlclient/direct.go:1063](https://github.com/tailscale/tailscale/blob/main/control/controlclient/direct.go#L1063) |
| 3660.00 | 60 | 0.0% | `configureInterface` | [wgengine/router/osrouter/ifconfig_windows.go:249](https://github.com/tailscale/tailscale/blob/main/wgengine/router/osrouter/ifconfig_windows.go#L249) |
| 3445.96 | 64 | 6.2% | `Clone` | [tailcfg/tailcfg_clone.go:697](https://github.com/tailscale/tailscale/blob/main/tailcfg/tailcfg_clone.go#L697) |
| 2970.00 | 54 | 0.0% | `main` | [cmd/tta/tta.go:94](https://github.com/tailscale/tailscale/blob/main/cmd/tta/tta.go#L94) |
| 2756.00 | 52 | 0.0% | `runStatus` | [cmd/tailscale/cli/status.go:76](https://github.com/tailscale/tailscale/blob/main/cmd/tailscale/cli/status.go#L76) |
| 2162.00 | 46 | 0.0% | `*openbsdRouter.Set` | [wgengine/router/osrouter/router_openbsd.go:85](https://github.com/tailscale/tailscale/blob/main/wgengine/router/osrouter/router_openbsd.go#L85) |
