---
title: "netbirdio/netbird"
date: 2026-08-19
slug: netbirdio-netbird
tags: ["crap", "report"]
draft: false
repo: netbirdio/netbird
weight: 4
stars: 28521
combined: 430518.16
average: 32.41
funcs: 13283
toc: false
ShowToc: false
---

Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/netbirdio/netbird?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/netbirdio/netbird?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/netbirdio/netbird?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/netbirdio/netbird?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/netbirdio/netbird?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/netbirdio/netbird
- **Commit**: `9efa3c6579fe5b193fa72b8e717a0bfac014d0f0` · HEAD up to date
- **Analyzed**: 2026-08-19T23:07:13-03:00 (671.0s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">430518</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `6210399` | 366921.05 | 27.73 | 13234 | 1764 | local |
| 2026-08-19 | `9efa3c6` | 430518.16 | 32.41 | 13283 | 2026 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 54990.00 | 234 | 0.0% | `file_management_proto_init` | [shared/management/proto/management.pb.go:8106](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/management.pb.go#L8106) |
| 13340.00 | 115 | 0.0% | `*Config.apply` | [client/internal/profilemanager/config.go:278](https://github.com/netbirdio/netbird/blob/main/client/internal/profilemanager/config.go#L278) |
| 13110.00 | 114 | 0.0% | `file_proxy_service_proto_init` | [shared/management/proto/proxy_service.pb.go:3848](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/proxy_service.pb.go#L3848) |
| 12882.00 | 113 | 0.0% | `EventActivityCode.Valid` | [shared/management/http/api/types.gen.go:260](https://github.com/netbirdio/netbird/blob/main/shared/management/http/api/types.gen.go#L260) |
| 8742.00 | 93 | 0.0% | `RegisterDaemonServiceHandlerClient` | [client/proto/daemon.pb.gw.go:2039](https://github.com/netbirdio/netbird/blob/main/client/proto/daemon.pb.gw.go#L2039) |
| 7310.00 | 85 | 0.0% | `RegisterDaemonServiceHandlerServer` | [client/proto/daemon.pb.gw.go:1131](https://github.com/netbirdio/netbird/blob/main/client/proto/daemon.pb.gw.go#L1131) |
| 3306.00 | 57 | 0.0% | `*DefaultAccountManager.AddPeer` | [management/server/peer.go:743](https://github.com/netbirdio/netbird/blob/main/management/server/peer.go#L743) |
| 3192.00 | 56 | 0.0% | `*handler.savePolicy` | [management/server/http/handlers/policies/policies_handler.go:115](https://github.com/netbirdio/netbird/blob/main/management/server/http/handlers/policies/policies_handler.go#L115) |
| 3192.00 | 56 | 0.0% | `*Account.getPeersGroupsPoliciesRoutes` | [management/server/types/account_components.go:313](https://github.com/netbirdio/netbird/blob/main/management/server/types/account_components.go#L313) |
| 2652.00 | 51 | 0.0% | `*Worker.generateProperties` | [management/server/metrics/selfhosted.go:180](https://github.com/netbirdio/netbird/blob/main/management/server/metrics/selfhosted.go#L180) |
