---
title: "netbirdio/netbird"
date: 2026-10-12
slug: netbirdio-netbird
tags: ["crap", "report"]
draft: false
repo: netbirdio/netbird
weight: 4
stars: 29906
combined: 305630.99
average: 18.79
funcs: 16264
toc: false
ShowToc: false
---

NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®

<div class="project-badges">
<img src="https://img.shields.io/github/stars/netbirdio/netbird?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/netbirdio/netbird?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/netbirdio/netbird?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/netbirdio/netbird?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/netbirdio/netbird?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/netbirdio/netbird
- **Commit**: `a3949581600790a7ac1640be43f824150b11dc83` · HEAD up to date
- **Analyzed**: 2026-10-12T19:03:30-03:00 (412.5s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,14.7 13.4,3.0 23.7,29.0 34.1,29.0 44.5,28.9 54.8,29.0 65.2,28.7 75.5,25.5 85.9,25.5 96.3,25.8 106.6,13.3 117.0,25.9"/><circle cx="117.0" cy="25.9" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">305631</text></svg>

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
| 2026-09-02 | `7b22d55` | 306498.78 | 20.05 | 15286 | 1309 | local |
| 2026-09-02 | `6aaeed7` | 374472.58 | 24.47 | 15305 | 1629 | local |
| 2026-10-12 | `a394958` | 305630.99 | 18.79 | 16264 | 1283 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 57840.00 | 240 | 0.0% | `file_management_proto_init` | [shared/management/proto/management.pb.go:8434](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/management.pb.go#L8434) |
| 13110.00 | 114 | 0.0% | `file_proxy_service_proto_init` | [shared/management/proto/proxy_service.pb.go:3960](https://github.com/netbirdio/netbird/blob/main/shared/management/proto/proxy_service.pb.go#L3960) |
| 12882.00 | 113 | 0.0% | `EventActivityCode.Valid` | [shared/management/http/api/types.gen.go:284](https://github.com/netbirdio/netbird/blob/main/shared/management/http/api/types.gen.go#L284) |
| 3192.00 | 56 | 0.0% | `getPeersGroupsPoliciesRoutes` | [management/server/types/legacynmap/account_components.go:286](https://github.com/netbirdio/netbird/blob/main/management/server/types/legacynmap/account_components.go#L286) |
| 2450.00 | 49 | 0.0% | `*ConnectClient.run` | [client/internal/connect.go:199](https://github.com/netbirdio/netbird/blob/main/client/internal/connect.go#L199) |
| 2256.00 | 47 | 0.0% | `GetPeerNetworkMapComponents` | [management/server/types/legacynmap/account_components.go:70](https://github.com/netbirdio/netbird/blob/main/management/server/types/legacynmap/account_components.go#L70) |
| 1122.00 | 33 | 0.0% | `restore` | [management/server/store/file_store.go:56](https://github.com/netbirdio/netbird/blob/main/management/server/store/file_store.go#L56) |
| 992.00 | 31 | 0.0% | `ConvertToNmdataPolicy` | [management/internals/network_map_db/shared_types.go:374](https://github.com/netbirdio/netbird/blob/main/management/internals/network_map_db/shared_types.go#L374) |
| 992.00 | 31 | 0.0% | `*NetworkMapComponents.getPeerConnectionResources` | [shared/management/types/networkmap_components.go:220](https://github.com/netbirdio/netbird/blob/main/shared/management/types/networkmap_components.go#L220) |
| 930.00 | 30 | 0.0% | `setupConfig` | [client/cmd/up.go:588](https://github.com/netbirdio/netbird/blob/main/client/cmd/up.go#L588) |
