---
title: "netbirdio/netbird"
date: 2026-08-21
slug: netbirdio-netbird
tags: ["crap", "report"]
draft: false
repo: netbirdio/netbird
weight: 6
stars: 28577
combined: 288952.75
average: 19.75
funcs: 14629
toc: false
ShowToc: false
---

Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/netbirdio/netbird?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/netbirdio/netbird?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/netbirdio/netbird?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/netbirdio/netbird?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/netbirdio/netbird?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/netbirdio/netbird
- **Commit**: `335adfe9c371cdd3b7433d62ec9ac888a57aa2c1` · HEAD up to date
- **Analyzed**: 2026-08-21T22:51:20-03:00 (207.6s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,14.7 60.0,3.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">288953</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `6210399` | 366921.05 | 27.73 | 13234 | 1764 | local |
| 2026-08-19 | `9efa3c6` | 430518.16 | 32.41 | 13283 | 2026 | local |
| 2026-08-21 | `335adfe` | 288952.75 | 19.75 | 14629 | 1241 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 54990.00 | 234 | 0.0% | `file_management_proto_init` | [shared/management/proto/management.pb.go:8106](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/management.pb.go#L8106) |
| 13110.00 | 114 | 0.0% | `file_proxy_service_proto_init` | [shared/management/proto/proxy_service.pb.go:3848](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/proxy_service.pb.go#L3848) |
| 12882.00 | 113 | 0.0% | `EventActivityCode.Valid` | [shared/management/http/api/types.gen.go:260](https://github.com/netbirdio/netbird/blob/main/shared/management/http/api/types.gen.go#L260) |
| 2256.00 | 47 | 0.0% | `*ConnectClient.run` | [client/internal/connect.go:186](https://github.com/netbirdio/netbird/blob/main/client/internal/connect.go#L186) |
| 2254.33 | 115 | 45.5% | `*Config.apply` | [client/internal/profilemanager/config.go:278](https://github.com/netbirdio/netbird/blob/main/client/internal/profilemanager/config.go#L278) |
| 1482.00 | 38 | 0.0% | `runForDuration` | [client/cmd/debug.go:232](https://github.com/netbirdio/netbird/blob/main/client/cmd/debug.go#L232) |
| 1260.00 | 35 | 0.0% | `parseStatus` | [client/iface/configurer/usp.go:529](https://github.com/netbirdio/netbird/blob/main/client/iface/configurer/usp.go#L529) |
| 1122.00 | 33 | 0.0% | `restore` | [management/server/store/file_store.go:56](https://github.com/netbirdio/netbird/blob/main/management/server/store/file_store.go#L56) |
| 870.00 | 29 | 0.0% | `*Tray.iconForState` | [client/ui/tray_icon.go:54](https://github.com/netbirdio/netbird/blob/main/client/ui/tray_icon.go#L54) |
| 870.00 | 29 | 0.0% | `*NetworkMapComponents.getPeerConnectionResources` | [shared/management/types/networkmap_components.go:207](https://github.com/netbirdio/netbird/blob/main/shared/management/types/networkmap_components.go#L207) |
