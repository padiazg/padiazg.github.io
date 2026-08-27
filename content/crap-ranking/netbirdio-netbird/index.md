---
title: "netbirdio/netbird"
date: 2026-08-26
slug: netbirdio-netbird
tags: ["crap", "report"]
draft: false
repo: netbirdio/netbird
weight: 4
stars: 28676
combined: 290555.44
average: 19.56
funcs: 14853
toc: false
ShowToc: false
---

Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/netbirdio/netbird?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/netbirdio/netbird?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/netbirdio/netbird?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/netbirdio/netbird?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/netbirdio/netbird?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/netbirdio/netbird
- **Commit**: `473392a935f4ad21107fe7d85c1c22c092a1cdda` · HEAD up to date
- **Analyzed**: 2026-08-26T21:20:24-03:00 (163.9s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,14.7 22.0,3.0 41.0,29.0 60.0,29.0 79.0,28.9 98.0,29.0 117.0,28.7"/><circle cx="117.0" cy="28.7" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">290555</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `6210399` | 366921.05 | 27.73 | 13234 | 1764 | local |
| 2026-08-19 | `9efa3c6` | 430518.16 | 32.41 | 13283 | 2026 | local |
| 2026-08-21 | `335adfe` | 288952.75 | 19.75 | 14629 | 1241 | local |
| 2026-08-22 | `ee253fe` | 288952.75 | 19.75 | 14629 | 1241 | local |
| 2026-08-23 | `f038538` | 289265.15 | 19.69 | 14688 | 1241 | local |
| 2026-08-24 | `3f90181` | 289047.02 | 19.68 | 14688 | 1241 | local |
| 2026-08-26 | `473392a` | 290555.44 | 19.56 | 14853 | 1254 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 54990.00 | 234 | 0.0% | `file_management_proto_init` | [shared/management/proto/management.pb.go:8194](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/management.pb.go#L8194) |
| 13110.00 | 114 | 0.0% | `file_proxy_service_proto_init` | [shared/management/proto/proxy_service.pb.go:3848](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/proxy_service.pb.go#L3848) |
| 12882.00 | 113 | 0.0% | `EventActivityCode.Valid` | [shared/management/http/api/types.gen.go:260](https://github.com/netbirdio/netbird/blob/main/shared/management/http/api/types.gen.go#L260) |
| 2256.00 | 47 | 0.0% | `*ConnectClient.run` | [client/internal/connect.go:174](https://github.com/netbirdio/netbird/blob/main/client/internal/connect.go#L174) |
| 2254.33 | 115 | 45.5% | `*Config.apply` | [client/internal/profilemanager/config.go:278](https://github.com/netbirdio/netbird/blob/main/client/internal/profilemanager/config.go#L278) |
| 1482.00 | 38 | 0.0% | `runForDuration` | [client/cmd/debug.go:232](https://github.com/netbirdio/netbird/blob/main/client/cmd/debug.go#L232) |
| 1260.00 | 35 | 0.0% | `parseStatus` | [client/iface/configurer/usp.go:529](https://github.com/netbirdio/netbird/blob/main/client/iface/configurer/usp.go#L529) |
| 1122.00 | 33 | 0.0% | `restore` | [management/server/store/file_store.go:56](https://github.com/netbirdio/netbird/blob/main/management/server/store/file_store.go#L56) |
| 870.00 | 29 | 0.0% | `*NetworkMapComponents.getPeerConnectionResources` | [shared/management/types/networkmap_components.go:207](https://github.com/netbirdio/netbird/blob/main/shared/management/types/networkmap_components.go#L207) |
| 870.00 | 29 | 0.0% | `*Tray.iconForState` | [client/ui/tray_icon.go:54](https://github.com/netbirdio/netbird/blob/main/client/ui/tray_icon.go#L54) |
