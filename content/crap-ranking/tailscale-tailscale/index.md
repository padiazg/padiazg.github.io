---
title: "tailscale/tailscale"
date: 2026-08-19
slug: tailscale-tailscale
tags: ["crap", "report"]
draft: false
repo: tailscale/tailscale
weight: 2
stars: 35371
combined: 597932.51
average: 49.57
funcs: 12063
toc: false
ShowToc: false
---

The easiest, most secure way to use WireGuard and 2FA.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/tailscale/tailscale?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/tailscale/tailscale?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/tailscale/tailscale?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/tailscale/tailscale?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/tailscale/tailscale?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/tailscale/tailscale
- **Commit**: `c87680a0bf4c66f455a5b6f2c1cb56bf4a15ae76` · HEAD up to date
- **Analyzed**: 2026-08-19T23:25:56-03:00 (652.7s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">597933</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `d3d14a8` | 596474.51 | 49.59 | 12027 | 2333 | local |
| 2026-08-19 | `c87680a` | 597932.51 | 49.57 | 12063 | 2340 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 23562.00 | 153 | 0.0% | `run` | [cmd/containerboot/main.go:330](https://github.com/tailscale/tailscale/blob/main/cmd/containerboot/main.go#L330) |
| 8742.00 | 93 | 0.0% | `peerChangeDiff` | [control/controlclient/map.go:991](https://github.com/tailscale/tailscale/blob/main/control/controlclient/map.go#L991) |
| 7140.00 | 84 | 0.0% | `*connection.serverAuthenticate` | [tempfork/sshtest/ssh/server.go:517](https://github.com/tailscale/tailscale/blob/main/tempfork/sshtest/ssh/server.go#L517) |
| 5852.00 | 76 | 0.0% | `run` | [cmd/k8s-proxy/k8s-proxy.go:78](https://github.com/tailscale/tailscale/blob/main/cmd/k8s-proxy/k8s-proxy.go#L78) |
| 5550.00 | 74 | 0.0% | `runTests` | [cmd/k8s-operator/e2e/setup.go:118](https://github.com/tailscale/tailscale/blob/main/cmd/k8s-operator/e2e/setup.go#L118) |
| 4970.00 | 70 | 0.0% | `runUp` | [cmd/tailscale/cli/up.go:500](https://github.com/tailscale/tailscale/blob/main/cmd/tailscale/cli/up.go#L500) |
| 4692.00 | 68 | 0.0% | `*settings.validate` | [cmd/containerboot/settings.go:246](https://github.com/tailscale/tailscale/blob/main/cmd/containerboot/settings.go#L246) |
| 4160.00 | 64 | 0.0% | `Clone` | [tailcfg/tailcfg_clone.go:697](https://github.com/tailscale/tailscale/blob/main/tailcfg/tailcfg_clone.go#L697) |
| 4032.00 | 63 | 0.0% | `genView` | [cmd/viewer/viewer.go:219](https://github.com/tailscale/tailscale/blob/main/cmd/viewer/viewer.go#L219) |
| 3540.00 | 59 | 0.0% | `*Direct.sendMapRequest` | [control/controlclient/direct.go:1063](https://github.com/tailscale/tailscale/blob/main/control/controlclient/direct.go#L1063) |
