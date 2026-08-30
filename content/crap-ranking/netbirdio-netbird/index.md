---
title: "netbirdio/netbird"
date: 2026-08-30
slug: netbirdio-netbird
tags: ["crap", "report"]
draft: false
repo: netbirdio/netbird
weight: 4
stars: 28749
combined: 307890.81
average: 20.23
funcs: 15221
toc: false
ShowToc: false
---

Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/netbirdio/netbird?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/netbirdio/netbird?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/netbirdio/netbird?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/netbirdio/netbird?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/netbirdio/netbird?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/netbirdio/netbird
- **Commit**: `11733fd718fb7889cfbf8b4e6498c0b4e74a1eb0` · HEAD up to date
- **Analyzed**: 2026-08-30T17:51:00-03:00 (224.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,14.7 17.2,3.0 31.5,29.0 45.8,29.0 60.0,28.9 74.2,29.0 88.5,28.7 102.8,25.5 117.0,25.5"/><circle cx="117.0" cy="25.5" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">307891</text></svg>

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
| 2026-08-27 | `6620219` | 308208.49 | 20.26 | 15213 | 1334 | local |
| 2026-08-30 | `11733fd` | 307890.81 | 20.23 | 15221 | 1329 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 54990.00 | 234 | 0.0% | `file_management_proto_init` | [shared/management/proto/management.pb.go:8214](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/management.pb.go#L8214) |
| 13110.00 | 114 | 0.0% | `file_proxy_service_proto_init` | [shared/management/proto/proxy_service.pb.go:3848](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/proxy_service.pb.go#L3848) |
| 12882.00 | 113 | 0.0% | `EventActivityCode.Valid` | [shared/management/http/api/types.gen.go:260](https://github.com/netbirdio/netbird/blob/main/shared/management/http/api/types.gen.go#L260) |
| 3192.00 | 56 | 0.0% | `getPeersGroupsPoliciesRoutes` | [management/server/types/legacynmap/account_components.go:286](https://github.com/netbirdio/netbird/blob/main/management/server/types/legacynmap/account_components.go#L286) |
| 2395.63 | 119 | 45.6% | `*Config.apply` | [client/internal/profilemanager/config.go:286](https://github.com/netbirdio/netbird/blob/main/client/internal/profilemanager/config.go#L286) |
| 2256.00 | 47 | 0.0% | `GetPeerNetworkMapComponents` | [management/server/types/legacynmap/account_components.go:70](https://github.com/netbirdio/netbird/blob/main/management/server/types/legacynmap/account_components.go#L70) |
| 2256.00 | 47 | 0.0% | `*ConnectClient.run` | [client/internal/connect.go:174](https://github.com/netbirdio/netbird/blob/main/client/internal/connect.go#L174) |
| 1482.00 | 38 | 0.0% | `runForDuration` | [client/cmd/debug.go:232](https://github.com/netbirdio/netbird/blob/main/client/cmd/debug.go#L232) |
| 1260.00 | 35 | 0.0% | `parseStatus` | [client/iface/configurer/usp.go:529](https://github.com/netbirdio/netbird/blob/main/client/iface/configurer/usp.go#L529) |
| 1122.00 | 33 | 0.0% | `restore` | [management/server/store/file_store.go:56](https://github.com/netbirdio/netbird/blob/main/management/server/store/file_store.go#L56) |
