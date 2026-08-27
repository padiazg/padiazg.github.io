---
title: "microsoft/typescript/tsc"
date: 2026-08-26
slug: microsoft-typescript-tsc
tags: ["crap", "report"]
draft: false
repo: microsoft/typescript
weight: 1
stars: 110715
combined: 1016002.66
average: 82.90
funcs: 12256
toc: false
ShowToc: false
---

TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/microsoft/typescript?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/microsoft/typescript?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/microsoft/typescript?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/microsoft/typescript?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/microsoft/typescript?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/microsoft/typescript
- **Project**: `tsc`
- **Commit**: `e95d8e57a89f4c174604d76e683d1f14d148373d` · HEAD now `065f7ac` — re-scan to update
- **Analyzed**: 2026-08-26T21:29:38-03:00 (790.5s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
GOFLAGS="-p=1 -parallel=2" go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out --exclude ".*_generated\.go" ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,25.8 25.8,3.0 48.6,3.0 71.4,28.9 94.2,29.0 117.0,27.8"/><circle cx="117.0" cy="27.8" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">1016003</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-21 | `d6c4afd` | 1016537.19 | 83.04 | 12242 | 2251 | local |
| 2026-08-24 | `e9e4774` | 1022617.83 | 83.53 | 12242 | 2254 | local |
| 2026-08-24 | `1824be0` | 1022608.00 | 83.53 | 12242 | 2254 | local |
| 2026-08-26 | `5739027` | 1015688.59 | 82.91 | 12250 | 2250 | local |
| 2026-08-26 | `889659e` | 1015672.49 | 82.91 | 12251 | 2250 | local |
| 2026-08-26 | `e95d8e5` | 1016002.66 | 82.90 | 12256 | 2250 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 97656.00 | 312 | 0.0% | `*LanguageService.getCompletionData` | [internal/ls/completions.go:529](https://github.com/microsoft/typescript/blob/main/tsc/internal/ls/completions.go#L529) |
| 52670.00 | 229 | 0.0% | `*Relater.structuredTypeRelatedToWorker` | [internal/checker/relater.go:3293](https://github.com/microsoft/typescript/blob/main/tsc/internal/checker/relater.go#L3293) |
| 37442.00 | 193 | 0.0% | `*Checker.checkGrammarModifiers` | [internal/checker/grammarchecks.go:214](https://github.com/microsoft/typescript/blob/main/tsc/internal/checker/grammarchecks.go#L214) |
| 22052.00 | 148 | 0.0% | `getExistingNodeTreeVisitor` | [internal/checker/nodecopy.go:288](https://github.com/microsoft/typescript/blob/main/tsc/internal/checker/nodecopy.go#L288) |
| 20022.00 | 141 | 0.0% | `*NameResolver.Resolve` | [internal/binder/nameresolver.go:25](https://github.com/microsoft/typescript/blob/main/tsc/internal/binder/nameresolver.go#L25) |
| 19429.31 | 143 | 1.9% | `*Scanner.Scan` | [internal/scanner/scanner.go:469](https://github.com/microsoft/typescript/blob/main/tsc/internal/scanner/scanner.go#L469) |
| 18730.97 | 145 | 4.0% | `*Session.HandleRequest` | [internal/api/session.go:584](https://github.com/microsoft/typescript/blob/main/tsc/internal/api/session.go#L584) |
| 17556.00 | 132 | 0.0% | `getQuickInfoAndDeclarationAtLocation` | [internal/ls/hover.go:427](https://github.com/microsoft/typescript/blob/main/tsc/internal/ls/hover.go#L427) |
| 11342.00 | 106 | 0.0% | `*Checker.resolveExternalModule` | [internal/checker/checker.go:15246](https://github.com/microsoft/typescript/blob/main/tsc/internal/checker/checker.go#L15246) |
| 8372.00 | 91 | 0.0% | `*NodeBuilderImpl.typeToTypeNode` | [internal/checker/nodebuilderimpl.go:3224](https://github.com/microsoft/typescript/blob/main/tsc/internal/checker/nodebuilderimpl.go#L3224) |
