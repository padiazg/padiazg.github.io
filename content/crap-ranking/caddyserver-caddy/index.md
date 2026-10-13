---
title: "caddyserver/caddy"
date: 2026-10-12
slug: caddyserver-caddy
tags: ["crap", "report"]
draft: false
repo: caddyserver/caddy
weight: 8
stars: 77855
combined: 164298.01
average: 76.10
funcs: 2159
toc: false
ShowToc: false
---

Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

<div class="project-badges">
<img src="https://img.shields.io/github/stars/caddyserver/caddy?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/caddyserver/caddy?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/caddyserver/caddy?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/caddyserver/caddy?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/caddyserver/caddy?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/caddyserver/caddy
- **Commit**: `d293dcfe86c1282e548b6cab94132be409d7300f` · HEAD up to date
- **Analyzed**: 2026-10-12T18:47:57-03:00 (85.7s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,13.5 19.3,14.2 35.6,3.0 51.9,8.6 68.1,8.6 84.4,8.6 100.7,8.4 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">164298</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `0bbda5c` | 170059.67 | 85.03 | 2000 | 327 | local |
| 2026-08-19 | `45ba327` | 169791.14 | 84.90 | 2000 | 325 | local |
| 2026-08-23 | `0cf03d3` | 173947.22 | 84.89 | 2049 | 332 | local |
| 2026-08-26 | `d663793` | 171874.20 | 83.88 | 2049 | 331 | local |
| 2026-08-30 | `8257349` | 171873.41 | 83.80 | 2051 | 331 | local |
| 2026-09-02 | `62a7297` | 171873.16 | 83.80 | 2051 | 331 | local |
| 2026-09-04 | `97a08d8` | 171925.06 | 83.82 | 2051 | 331 | local |
| 2026-10-12 | `d293dcf` | 164298.01 | 76.10 | 2159 | 302 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 51380.34 | 255 | 7.7% | `*Handler.UnmarshalCaddyfile` | [modules/caddyhttp/reverseproxy/caddyfile.go:152](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/caddyfile.go#L152) |
| 9506.00 | 97 | 0.0% | `unmarshalCaddyfileServerOptions` | [caddyconfig/httpcaddyfile/serveroptions.go:72](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/serveroptions.go#L72) |
| 8607.99 | 104 | 7.7% | `*HTTPTransport.UnmarshalCaddyfile` | [modules/caddyhttp/reverseproxy/caddyfile.go:1079](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/caddyfile.go#L1079) |
| 7587.48 | 121 | 20.1% | `parseTLS` | [caddyconfig/httpcaddyfile/builtins.go:119](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/builtins.go#L119) |
| 6162.00 | 78 | 0.0% | `*App.automaticHTTPSPhase1` | [modules/caddyhttp/autohttps.go:77](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/autohttps.go#L77) |
| 6006.00 | 77 | 0.0% | `*ACMEIssuer.UnmarshalCaddyfile` | [modules/caddytls/acmeissuer.go:448](https://github.com/caddyserver/caddy/blob/master/modules/caddytls/acmeissuer.go#L448) |
| 2450.00 | 49 | 0.0% | `*App.Provision` | [modules/caddyhttp/app.go:188](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/app.go#L188) |
| 2450.00 | 49 | 0.0% | `*Handler.Provision` | [modules/caddyhttp/reverseproxy/reverseproxy.go:301](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/reverseproxy.go#L301) |
| 2352.00 | 48 | 0.0% | `cmdReverseProxy` | [modules/caddyhttp/reverseproxy/command.go:87](https://github.com/caddyserver/caddy/blob/master/modules/caddyhttp/reverseproxy/command.go#L87) |
| 2138.98 | 124 | 49.2% | `ServerType.buildTLSApp` | [caddyconfig/httpcaddyfile/tlsapp.go:36](https://github.com/caddyserver/caddy/blob/master/caddyconfig/httpcaddyfile/tlsapp.go#L36) |
