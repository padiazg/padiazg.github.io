---
title: "traefik/traefik"
date: 2026-08-26
slug: traefik-traefik
tags: ["crap", "report"]
draft: false
repo: traefik/traefik
weight: 10
stars: 64565
combined: 45533.03
average: 12.80
funcs: 3557
toc: false
ShowToc: false
---

The Cloud Native Application Proxy

<div class="project-badges">
<img src="https://img.shields.io/github/stars/traefik/traefik?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/traefik/traefik?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/traefik/traefik?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/traefik/traefik?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/traefik/traefik?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/traefik/traefik
- **Commit**: `83c3499fc31c96e9f80ea0bba4d975f608c7061d` · HEAD up to date
- **Analyzed**: 2026-08-26T21:36:44-03:00 (601.2s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.2 31.5,3.0 60.0,29.0 88.5,29.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">45533</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `b51bd71` | 149626.00 | 42.46 | 3524 | 593 | local |
| 2026-08-19 | `6fc09bb` | 150456.00 | 42.59 | 3533 | 593 | local |
| 2026-08-23 | `9bb0e55` | 45611.73 | 12.84 | 3552 | 183 | local |
| 2026-08-24 | `f2d0794` | 45614.81 | 12.84 | 3552 | 183 | local |
| 2026-08-26 | `83c3499` | 45533.03 | 12.80 | 3557 | 182 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 4032.00 | 63 | 0.0% | `ForKind` | [pkg/provider/kubernetes/crd/generated/applyconfiguration/utils.go:40](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/crd/generated/applyconfiguration/utils.go#L40) |
| 2168.02 | 77 | 29.3% | `*Builder.buildConstructor` | [pkg/server/middleware/middlewares.go:101](https://github.com/traefik/traefik/blob/master/pkg/server/middleware/middlewares.go#L101) |
| 1560.00 | 39 | 0.0% | `setupServer` | [cmd/traefik/traefik.go:174](https://github.com/traefik/traefik/blob/master/cmd/traefik/traefik.go#L174) |
| 1332.00 | 36 | 0.0% | `*Provider.watchNewDomains` | [pkg/provider/acme/provider.go:515](https://github.com/traefik/traefik/blob/master/pkg/provider/acme/provider.go#L515) |
| 1122.00 | 33 | 0.0% | `*Provider.listInstances` | [pkg/provider/ecs/ecs.go:207](https://github.com/traefik/traefik/blob/master/pkg/provider/ecs/ecs.go#L207) |
| 812.00 | 28 | 0.0% | `*MiddlewareSpec.DeepCopyInto` | [pkg/provider/kubernetes/crd/traefikio/v1alpha1/zz_generated.deepcopy.go:905](https://github.com/traefik/traefik/blob/master/pkg/provider/kubernetes/crd/traefikio/v1alpha1/zz_generated.deepcopy.go#L905) |
| 672.47 | 53 | 39.6% | `*Configuration.ValidateConfiguration` | [pkg/config/static/static_config.go:453](https://github.com/traefik/traefik/blob/master/pkg/config/static/static_config.go#L453) |
| 650.00 | 25 | 0.0% | `fill` | [pkg/collector/hydratation/hydration.go:26](https://github.com/traefik/traefik/blob/master/pkg/collector/hydratation/hydration.go#L26) |
| 600.00 | 24 | 0.0% | `*Provider.getClient` | [pkg/provider/acme/provider.go:276](https://github.com/traefik/traefik/blob/master/pkg/provider/acme/provider.go#L276) |
| 462.00 | 21 | 0.0% | `NewProviderAggregator` | [pkg/provider/aggregator/aggregator.go:71](https://github.com/traefik/traefik/blob/master/pkg/provider/aggregator/aggregator.go#L71) |
