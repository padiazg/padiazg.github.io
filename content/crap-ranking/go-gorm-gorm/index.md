---
title: "go/gorm/gorm"
date: 2026-08-19
slug: go-gorm-gorm
tags: ["crap", "report"]
draft: false
repo: go-gorm/gorm
weight: 10
stars: 39910
combined: 68211.65
average: 120.73
funcs: 565
toc: false
ShowToc: false
---

The fantastic ORM library for Golang, aims to be developer friendly

<div class="project-badges">
<img src="https://img.shields.io/github/stars/go-gorm/gorm?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/go-gorm/gorm?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/go-gorm/gorm?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/go-gorm/gorm?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/go-gorm/gorm?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/go-gorm/gorm
- **Commit**: `1d6ce99528060be18a42be09aca8d39efcb47f28` · HEAD up to date
- **Analyzed**: 2026-08-19T22:47:33-03:00 (13.9s)
- **Engine**: local · go-crap 0.5.1

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">68212</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-19 | `1d6ce99` | 68211.65 | 120.73 | 565 | 91 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 8184.94 | 192 | 39.9% | `*Field.setupValuerAndSetter` | [schema/field.go:451](https://github.com/go-gorm/gorm/blob/master/schema/field.go#L451) |
| 5700.00 | 75 | 0.0% | `ConvertToAssignments` | [callbacks/update.go:145](https://github.com/go-gorm/gorm/blob/master/callbacks/update.go#L145) |
| 5550.00 | 74 | 0.0% | `SaveAfterAssociations` | [callbacks/associations.go:110](https://github.com/go-gorm/gorm/blob/master/callbacks/associations.go#L110) |
| 5112.00 | 71 | 0.0% | `Scan` | [scan.go:126](https://github.com/go-gorm/gorm/blob/master/scan.go#L126) |
| 4160.00 | 64 | 0.0% | `BuildQuerySQL` | [callbacks/query.go:36](https://github.com/go-gorm/gorm/blob/master/callbacks/query.go#L36) |
| 4160.00 | 64 | 0.0% | `*Association.saveAssociation` | [association.go:384](https://github.com/go-gorm/gorm/blob/master/association.go#L384) |
| 3846.32 | 73 | 10.9% | `*Statement.BuildCondition` | [statement.go:292](https://github.com/go-gorm/gorm/blob/master/statement.go#L292) |
| 2652.00 | 51 | 0.0% | `Create` | [callbacks/create.go:37](https://github.com/go-gorm/gorm/blob/master/callbacks/create.go#L37) |
| 2652.00 | 51 | 0.0% | `Migrator.MigrateColumn` | [migrator/migrator.go:470](https://github.com/go-gorm/gorm/blob/master/migrator/migrator.go#L470) |
| 1454.84 | 73 | 36.2% | `ConvertToCreateValues` | [callbacks/create.go:245](https://github.com/go-gorm/gorm/blob/master/callbacks/create.go#L245) |
