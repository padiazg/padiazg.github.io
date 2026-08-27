---
title: "caddyserver/caddy"
date: 2026-08-26
slug: caddyserver-caddy
tags: ["crap", "report"]
draft: false
repo: caddyserver/caddy
weight: 8
stars: 75231
combined: 171874.20
average: 83.88
funcs: 2049
toc: false
ShowToc: false
---

Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

<div class="project-badges">
<img src="https://img.shields.io/github/stars/caddyserver/caddy?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/caddyserver/caddy?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/caddyserver/caddy?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/caddyserver/caddy?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/caddyserver/caddy?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/caddyserver/caddy
- **Commit**: `d6637934e866e34f5676210f8a409b139098f954` · HEAD up to date
- **Analyzed**: 2026-08-26T21:14:49-03:00 (27.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,27.3 41.0,29.0 79.0,3.0 117.0,16.0"/><circle cx="117.0" cy="16.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">171874</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `0bbda5c` | 170059.67 | 85.03 | 2000 | 327 | local |
| 2026-08-19 | `45ba327` | 169791.14 | 84.90 | 2000 | 325 | local |
| 2026-08-23 | `0cf03d3` | 173947.22 | 84.89 | 2049 | 332 | local |
| 2026-08-26 | `d663793` | 171874.20 | 83.88 | 2049 | 331 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 46784.62 | 238 | 6.3% | `*Handler.UnmarshalCaddyfile` | [modules/caddyhttp/reverseproxy/caddyfile.go:143](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/caddyfile.go#L143) |
| 9506.00 | 97 | 0.0% | `unmarshalCaddyfileServerOptions` | [caddyconfig/httpcaddyfile/serveroptions.go:72](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/serveroptions.go#L72) |
| 8991.94 | 104 | 6.3% | `*HTTPTransport.UnmarshalCaddyfile` | [modules/caddyhttp/reverseproxy/caddyfile.go:1018](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/caddyfile.go#L1018) |
| 7736.81 | 121 | 19.6% | `parseTLS` | [caddyconfig/httpcaddyfile/builtins.go:118](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/builtins.go#L118) |
| 6162.00 | 78 | 0.0% | `*App.automaticHTTPSPhase1` | [modules/caddyhttp/autohttps.go:77](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/autohttps.go#L77) |
| 6006.00 | 77 | 0.0% | `*ACMEIssuer.UnmarshalCaddyfile` | [modules/caddytls/acmeissuer.go:448](https://github.com/caddyserver/caddy/blob/master/modules/caddytls/acmeissuer.go#L448) |
| 3457.35 | 68 | 9.8% | `consolidateConnPolicies` | [caddyconfig/httpcaddyfile/httptype.go:1198](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/httptype.go#L1198) |
| 3345.91 | 131 | 42.8% | `*ServerType.serversFromPairings` | [caddyconfig/httpcaddyfile/httptype.go:553](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/httptype.go#L553) |
| 2450.00 | 49 | 0.0% | `*App.Provision` | [modules/caddyhttp/app.go:188](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/app.go#L188) |
| 2352.00 | 48 | 0.0% | `cmdReverseProxy` | [modules/caddyhttp/reverseproxy/command.go:87](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/command.go#L87) |
