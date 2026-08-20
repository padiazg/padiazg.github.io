---
title: "microsoft/typescript/go"
date: 2026-08-19
slug: microsoft-typescript-go
tags: ["crap", "report"]
draft: false
repo: microsoft/typescript-go
weight: 1
stars: 26229
combined: 5953270.78
average: 413.80
funcs: 14387
toc: false
ShowToc: false
---

Staging repo for development of native port of TypeScript

<div class="project-badges">
<img src="https://img.shields.io/github/stars/microsoft/typescript-go?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/microsoft/typescript-go?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/microsoft/typescript-go?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/microsoft/typescript-go?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/microsoft/typescript-go?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/microsoft/typescript-go
- **Commit**: `16c25522e1230b69b11210cfad066d779e6319ba` · HEAD up to date
- **Analyzed**: 2026-08-19T22:43:33-03:00 (2228.2s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,16.9 41.0,25.5 79.0,29.0 117.0,3.0"/><circle cx="117.0" cy="3.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">5953271</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `ad56f89` | 5878885.42 | 419.83 | 14003 | 2657 | local |
| 2026-08-18 | `12548e2` | 5832965.79 | 416.52 | 14004 | 2532 | local |
| 2026-08-19 | `c6b013f` | 5814143.81 | 415.12 | 14006 | 2495 | local |
| 2026-08-19 | `16c2552` | 5953270.78 | 413.80 | 14387 | 2324 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 4853228.96 | 2207 | 0.1% | `keyToMessage` | [internal/diagnostics/diagnostics_generated.go:4417](https://github.com/microsoft/typescript-go/blob/main/internal/diagnostics/diagnostics_generated.go#L4417) |
| 97656.00 | 312 | 0.0% | `*LanguageService.getCompletionData` | [internal/ls/completions.go:529](https://github.com/microsoft/typescript-go/blob/main/internal/ls/completions.go#L529) |
| 52670.00 | 229 | 0.0% | `*Relater.structuredTypeRelatedToWorker` | [internal/checker/relater.go:3293](https://github.com/microsoft/typescript-go/blob/main/internal/checker/relater.go#L3293) |
| 37442.00 | 193 | 0.0% | `*Checker.checkGrammarModifiers` | [internal/checker/grammarchecks.go:214](https://github.com/microsoft/typescript-go/blob/main/internal/checker/grammarchecks.go#L214) |
| 23303.96 | 202 | 17.3% | `*astDecoder.createChildrenNode` | [internal/api/encoder/decoder_generated.go:61](https://github.com/microsoft/typescript-go/blob/main/internal/api/encoder/decoder_generated.go#L61) |
| 22052.00 | 148 | 0.0% | `getExistingNodeTreeVisitor` | [internal/checker/nodecopy.go:288](https://github.com/microsoft/typescript-go/blob/main/internal/checker/nodecopy.go#L288) |
| 20306.00 | 142 | 0.0% | `*Session.HandleRequest` | [internal/api/session.go:583](https://github.com/microsoft/typescript-go/blob/main/internal/api/session.go#L583) |
| 20022.00 | 141 | 0.0% | `*NameResolver.Resolve` | [internal/binder/nameresolver.go:25](https://github.com/microsoft/typescript-go/blob/main/internal/binder/nameresolver.go#L25) |
| 19429.31 | 143 | 1.9% | `*Scanner.Scan` | [internal/scanner/scanner.go:469](https://github.com/microsoft/typescript-go/blob/main/internal/scanner/scanner.go#L469) |
| 17556.00 | 132 | 0.0% | `getQuickInfoAndDeclarationAtLocation` | [internal/ls/hover.go:380](https://github.com/microsoft/typescript-go/blob/main/internal/ls/hover.go#L380) |
