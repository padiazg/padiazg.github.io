---
title: "chainloop/dev/chainloop"
date: 2026-10-12
slug: chainloop-dev-chainloop
tags: ["crap", "report"]
draft: false
repo: chainloop-dev/chainloop
weight: 5
stars: 584
combined: 269650.72
average: 15.70
funcs: 17172
toc: false
ShowToc: false
---

Agentic SDLC infrastructure. Define guardrails. Collect signals. Enforce continuously. Signed records of what your AI coding agents and CI/CD pipelines did, checked against policies as code, with the loop closed in CI/CD. AI sessions, SBOMs, VEX, SARIF and SLSA provenance, built on Sigstore and in-toto. Apache 2.0.

<div class="project-badges">
<img src="https://img.shields.io/github/stars/chainloop-dev/chainloop?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/chainloop-dev/chainloop?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/chainloop-dev/chainloop?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/chainloop-dev/chainloop?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/chainloop-dev/chainloop?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/chainloop-dev/chainloop
- **Commit**: `557449cec859f82448e946bff471d6338efeedfa` · HEAD up to date
- **Analyzed**: 2026-10-12T18:58:23-03:00 (646.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,3.0 15.7,3.0 28.3,22.0 41.0,29.0 53.7,28.7 66.3,28.7 79.0,28.7 91.7,26.9 104.3,27.4 117.0,20.2"/><circle cx="117.0" cy="20.2" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">269651</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-18 | `34f0f6f` | 297321.66 | 18.50 | 16068 | 1177 | local |
| 2026-08-19 | `9e58df4` | 297321.66 | 18.50 | 16068 | 1177 | local |
| 2026-08-23 | `40014e9` | 266862.02 | 16.49 | 16182 | 954 | local |
| 2026-08-24 | `eb5e738` | 255608.58 | 15.80 | 16182 | 872 | local |
| 2026-08-26 | `ed71396` | 256039.74 | 15.78 | 16230 | 872 | local |
| 2026-08-27 | `6037210` | 256039.74 | 15.78 | 16230 | 872 | local |
| 2026-08-30 | `294cad6` | 256060.23 | 15.77 | 16233 | 872 | local |
| 2026-09-02 | `809a484` | 259055.42 | 15.65 | 16551 | 876 | local |
| 2026-09-04 | `e2dde78` | 258108.06 | 15.59 | 16553 | 872 | local |
| 2026-10-12 | `557449c` | 269650.72 | 15.70 | 17172 | 938 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 6806.00 | 82 | 0.0% | `*OrganizationUpdateOne.sqlSave` | [app/controlplane/pkg/data/ent/organization_update.go:1651](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/organization_update.go#L1651) |
| 6006.00 | 77 | 0.0% | `*OrganizationUpdate.sqlSave` | [app/controlplane/pkg/data/ent/organization_update.go:596](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/organization_update.go#L596) |
| 6006.00 | 77 | 0.0% | `*WorkflowRun.assignValues` | [app/controlplane/pkg/data/ent/workflowrun.go:191](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/workflowrun.go#L191) |
| 4556.00 | 67 | 0.0% | `*WorkflowRunUpdateOne.sqlSave` | [app/controlplane/pkg/data/ent/workflowrun_update.go:1434](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/workflowrun_update.go#L1434) |
| 4160.00 | 64 | 0.0% | `*WorkflowUpdateOne.sqlSave` | [app/controlplane/pkg/data/ent/workflow_update.go:1369](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/workflow_update.go#L1369) |
| 3906.00 | 62 | 0.0% | `*WorkflowRunUpdate.sqlSave` | [app/controlplane/pkg/data/ent/workflowrun_update.go:587](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/workflowrun_update.go#L587) |
| 3540.00 | 59 | 0.0% | `*WorkflowUpdate.sqlSave` | [app/controlplane/pkg/data/ent/workflow_update.go:509](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/workflow_update.go#L509) |
| 2970.00 | 54 | 0.0% | `*CASBackend.assignValues` | [app/controlplane/pkg/data/ent/casbackend.go:116](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/casbackend.go#L116) |
| 2862.00 | 53 | 0.0% | `*Workflow.assignValues` | [app/controlplane/pkg/data/ent/workflow.go:194](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/workflow.go#L194) |
| 2756.00 | 52 | 0.0% | `*APIToken.assignValues` | [app/controlplane/pkg/data/ent/apitoken.go:132](https://github.com/chainloop-dev/chainloop/blob/main/app/controlplane/pkg/data/ent/apitoken.go#L132) |
