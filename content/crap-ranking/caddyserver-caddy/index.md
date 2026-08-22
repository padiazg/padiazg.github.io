---
title: "caddyserver/caddy"
date: 2026-08-19
slug: caddyserver-caddy
tags: ["crap", "report"]
draft: false
repo: caddyserver/caddy
weight: 8
stars: 75031
combined: 169791.14
average: 84.90
funcs: 2000
toc: false
ShowToc: false
---

Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

<div class="project-badges">
<img src="https://img.shields.io/github/stars/caddyserver/caddy?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/caddyserver/caddy?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/caddyserver/caddy?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/caddyserver/caddy?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/caddyserver/caddy?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/caddyserver/caddy
- **Commit**: `45ba3278b5822f6fa6107a44ca41669b6e722482` · HEAD now `0cf03d3` — re-scan to update
- **Analyzed**: 2026-08-19T22:55:55-03:00 (354.5s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.0 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">169791</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `0bbda5c` | 170059.67 | 85.03 | 2000 | 327 | local |
| 2026-08-19 | `45ba327` | 169791.14 | 84.90 | 2000 | 325 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 46784.62 | 238 | 6.3% | `*Handler.UnmarshalCaddyfile` | [modules/caddyhttp/reverseproxy/caddyfile.go:143](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/caddyfile.go#L143) |
| 9171.30 | 121 | 14.8% | `parseTLS` | [caddyconfig/httpcaddyfile/builtins.go:118](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/builtins.go#L118) |
| 8991.94 | 104 | 6.3% | `*HTTPTransport.UnmarshalCaddyfile` | [modules/caddyhttp/reverseproxy/caddyfile.go:1018](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/caddyfile.go#L1018) |
| 6806.00 | 82 | 0.0% | `unmarshalCaddyfileServerOptions` | [caddyconfig/httpcaddyfile/serveroptions.go:67](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/serveroptions.go#L67) |
| 6162.00 | 78 | 0.0% | `*App.automaticHTTPSPhase1` | [modules/caddyhttp/autohttps.go:77](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/autohttps.go#L77) |
| 6006.00 | 77 | 0.0% | `*ACMEIssuer.UnmarshalCaddyfile` | [modules/caddytls/acmeissuer.go:448](https://github.com/caddyserver/caddy/blob/master/modules/caddytls/acmeissuer.go#L448) |
| 3817.99 | 131 | 40.1% | `*ServerType.serversFromPairings` | [caddyconfig/httpcaddyfile/httptype.go:553](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/httptype.go#L553) |
| 3457.35 | 68 | 9.8% | `consolidateConnPolicies` | [caddyconfig/httpcaddyfile/httptype.go:1198](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/httptype.go#L1198) |
| 2352.00 | 48 | 0.0% | `cmdReverseProxy` | [modules/caddyhttp/reverseproxy/command.go:87](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/command.go#L87) |
| 2162.00 | 46 | 0.0% | `*App.Provision` | [modules/caddyhttp/app.go:188](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/app.go#L188) |
