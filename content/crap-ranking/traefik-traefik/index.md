---
title: "traefik/traefik"
date: 2026-08-19
slug: traefik-traefik
tags: ["crap", "report"]
draft: false
repo: traefik/traefik
weight: 8
stars: 64499
combined: 150456.00
average: 42.59
funcs: 3533
toc: false
ShowToc: false
---

The Cloud Native Application Proxy

<div class="project-badges">
<img src="https://img.shields.io/github/stars/traefik/traefik?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/traefik/traefik?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/traefik/traefik?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/traefik/traefik?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/traefik/traefik?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/traefik/traefik
- **Commit**: `6fc09bbb36e0fec6f6a7dec2fbdb2721b0c0cb22` · HEAD up to date
- **Analyzed**: 2026-08-19T23:27:29-03:00 (663.2s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">150456</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `b51bd71` | 149626.00 | 42.46 | 3524 | 593 | local |
| 2026-08-19 | `6fc09bb` | 150456.00 | 42.59 | 3533 | 593 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 6480.00 | 80 | 0.0% | `*Provider.build` | [pkg/provider/kubernetes/ingress-nginx/build.go:55](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/ingress-nginx/build.go#L55) |
| 6006.00 | 77 | 0.0% | `*Builder.buildConstructor` | [pkg/server/middleware/middlewares.go:101](https://github.com/traefik/traefik/blob/master/pkg/server/middleware/middlewares.go#L101) |
| 4970.00 | 70 | 0.0% | `*Provider.loadConfigurationFromCRD` | [pkg/provider/kubernetes/crd/kubernetes.go:248](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/crd/kubernetes.go#L248) |
| 4032.00 | 63 | 0.0% | `ForKind` | [pkg/provider/kubernetes/crd/generated/applyconfiguration/utils.go:40](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/crd/generated/applyconfiguration/utils.go#L40) |
| 2970.00 | 54 | 0.0% | `*Configuration.SetEffectiveConfiguration` | [pkg/config/static/static_config.go:294](https://github.com/traefik/traefik/blob/master/pkg/config/static/static_config.go#L294) |
| 2450.00 | 49 | 0.0% | `*Provider.loadConfigurationFromIngresses` | [pkg/provider/kubernetes/ingress/kubernetes.go:220](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/ingress/kubernetes.go#L220) |
| 2450.00 | 49 | 0.0% | `*Configuration.ValidateConfiguration` | [pkg/config/static/static_config.go:451](https://github.com/traefik/traefik/blob/master/pkg/config/static/static_config.go#L451) |
| 1892.00 | 43 | 0.0% | `*Provider.loadService` | [pkg/provider/kubernetes/ingress/kubernetes.go:583](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/ingress/kubernetes.go#L583) |
| 1560.00 | 39 | 0.0% | `setupServer` | [cmd/traefik/traefik.go:174](https://github.com/traefik/traefik/blob/master/cmd/traefik/traefik.go#L174) |
| 1406.00 | 37 | 0.0% | `configBuilder.loadServers` | [pkg/provider/kubernetes/crd/kubernetes_http.go:558](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/crd/kubernetes_http.go#L558) |
