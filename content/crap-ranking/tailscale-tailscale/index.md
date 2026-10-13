---
title: "tailscale/tailscale"
date: 2026-10-12
slug: tailscale-tailscale
tags: ["crap", "report"]
draft: false
repo: tailscale/tailscale
weight: 3
stars: 37411
combined: 322677.49
average: 23.47
funcs: 13751
toc: false
ShowToc: false
---

The easiest, most secure way to use WireGuard and 2FA.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/tailscale/tailscale?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/tailscale/tailscale?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/tailscale/tailscale?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/tailscale/tailscale?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/tailscale/tailscale?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/tailscale/tailscale
- **Commit**: `3bb8a906c27738c7904ef301c9539da763181f85` · HEAD up to date
- **Analyzed**: 2026-10-12T19:09:55-03:00 (381.2s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.1 14.4,3.0 25.8,29.0 37.2,28.9 48.6,28.9 60.0,29.0 71.4,28.8 82.8,29.0 94.2,28.9 105.6,28.9 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">322677</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `d3d14a8` | 596474.51 | 49.59 | 12027 | 2333 | local |
| 2026-08-19 | `c87680a` | 597932.51 | 49.57 | 12063 | 2340 | local |
| 2026-08-22 | `de9ec7e` | 322718.41 | 24.33 | 13265 | 1323 | local |
| 2026-08-23 | `ed7d521` | 322838.41 | 24.34 | 13265 | 1322 | local |
| 2026-08-24 | `65d2226` | 322814.48 | 24.33 | 13268 | 1320 | local |
| 2026-08-26 | `a7769cb` | 322628.91 | 24.30 | 13278 | 1320 | local |
| 2026-08-27 | `3731707` | 324782.91 | 24.46 | 13280 | 1321 | local |
| 2026-08-30 | `7278070` | 322222.83 | 24.26 | 13282 | 1296 | local |
| 2026-09-02 | `91d10d3` | 322989.10 | 24.28 | 13300 | 1300 | local |
| 2026-09-02 | `642099c` | 322989.10 | 24.28 | 13300 | 1300 | local |
| 2026-10-12 | `3bb8a90` | 322677.49 | 23.47 | 13751 | 1306 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 23562.00 | 153 | 0.0% | `run` | [cmd/containerboot/main.go:419](https://github.com/tailscale/tailscale/blob/main/cmd/containerboot/main.go#L419) |
| 7140.00 | 84 | 0.0% | `runTests` | [cmd/k8s-operator/e2e/setup.go:120](https://github.com/tailscale/tailscale/blob/main/cmd/k8s-operator/e2e/setup.go#L120) |
| 5852.00 | 76 | 0.0% | `run` | [cmd/k8s-proxy/k8s-proxy.go:78](https://github.com/tailscale/tailscale/blob/main/cmd/k8s-proxy/k8s-proxy.go#L78) |
| 5402.00 | 73 | 0.0% | `runUp` | [cmd/tailscale/cli/up.go:503](https://github.com/tailscale/tailscale/blob/main/cmd/tailscale/cli/up.go#L503) |
| 3782.00 | 61 | 0.0% | `configureInterface` | [wgengine/router/osrouter/ifconfig_windows.go:249](https://github.com/tailscale/tailscale/blob/main/wgengine/router/osrouter/ifconfig_windows.go#L249) |
| 3445.96 | 64 | 6.2% | `Clone` | [tailcfg/tailcfg_clone.go:698](https://github.com/tailscale/tailscale/blob/main/tailcfg/tailcfg_clone.go#L698) |
| 2970.00 | 54 | 0.0% | `main` | [cmd/tta/tta.go:94](https://github.com/tailscale/tailscale/blob/main/cmd/tta/tta.go#L94) |
| 2756.00 | 52 | 0.0% | `runStatus` | [cmd/tailscale/cli/status.go:76](https://github.com/tailscale/tailscale/blob/main/cmd/tailscale/cli/status.go#L76) |
| 2162.00 | 46 | 0.0% | `*openbsdRouter.Set` | [wgengine/router/osrouter/router_openbsd.go:85](https://github.com/tailscale/tailscale/blob/main/wgengine/router/osrouter/router_openbsd.go#L85) |
| 2070.00 | 45 | 0.0% | `main` | [cmd/derper/derper.go:170](https://github.com/tailscale/tailscale/blob/main/cmd/derper/derper.go#L170) |
