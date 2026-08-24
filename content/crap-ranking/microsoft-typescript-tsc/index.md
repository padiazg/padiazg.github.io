---
title: "microsoft/typescript/tsc"
date: 2026-08-24
slug: microsoft-typescript-tsc
tags: ["crap", "report"]
draft: false
repo: microsoft/typescript
weight: 1
stars: 110634
combined: 1022597.66
average: 83.53
funcs: 12242
toc: false
ShowToc: false
---

TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/microsoft/typescript?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/microsoft/typescript?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/microsoft/typescript?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/microsoft/typescript?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/microsoft/typescript?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/microsoft/typescript
- **Project**: `tsc`
- **Commit**: `e9e477458d7b975ed5e43117fb85f6bc87363a6a` · HEAD up to date
- **Analyzed**: 2026-08-24T00:00:27-03:00 (53.2s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
GOFLAGS="-p=1 -parallel=2" go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out --exclude ".*_generated\.go" ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">1022598</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-24 | `e9e4774` | 1022597.66 | 83.53 | 12242 | 2254 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 97656.00 | 312 | 0.0% | `*LanguageService.getCompletionData` | [internal/ls/completions.go:529](https://github.com/microsoft/typescript/blob/main/internal/ls/completions.go#L529) |
| 52670.00 | 229 | 0.0% | `*Relater.structuredTypeRelatedToWorker` | [internal/checker/relater.go:3293](https://github.com/microsoft/typescript/blob/main/internal/checker/relater.go#L3293) |
| 37442.00 | 193 | 0.0% | `*Checker.checkGrammarModifiers` | [internal/checker/grammarchecks.go:214](https://github.com/microsoft/typescript/blob/main/internal/checker/grammarchecks.go#L214) |
| 22052.00 | 148 | 0.0% | `getExistingNodeTreeVisitor` | [internal/checker/nodecopy.go:288](https://github.com/microsoft/typescript/blob/main/internal/checker/nodecopy.go#L288) |
| 20592.00 | 143 | 0.0% | `*Session.HandleRequest` | [internal/api/session.go:583](https://github.com/microsoft/typescript/blob/main/internal/api/session.go#L583) |
| 20022.00 | 141 | 0.0% | `*NameResolver.Resolve` | [internal/binder/nameresolver.go:25](https://github.com/microsoft/typescript/blob/main/internal/binder/nameresolver.go#L25) |
| 19429.31 | 143 | 1.9% | `*Scanner.Scan` | [internal/scanner/scanner.go:469](https://github.com/microsoft/typescript/blob/main/internal/scanner/scanner.go#L469) |
| 17556.00 | 132 | 0.0% | `getQuickInfoAndDeclarationAtLocation` | [internal/ls/hover.go:427](https://github.com/microsoft/typescript/blob/main/internal/ls/hover.go#L427) |
| 11342.00 | 106 | 0.0% | `*Checker.resolveExternalModule` | [internal/checker/checker.go:15243](https://github.com/microsoft/typescript/blob/main/internal/checker/checker.go#L15243) |
| 8372.00 | 91 | 0.0% | `*NodeBuilderImpl.typeToTypeNode` | [internal/checker/nodebuilderimpl.go:3224](https://github.com/microsoft/typescript/blob/main/internal/checker/nodebuilderimpl.go#L3224) |
