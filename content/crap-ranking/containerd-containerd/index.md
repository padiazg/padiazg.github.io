---
title: "containerd/containerd"
date: 2026-08-27
slug: containerd-containerd
tags: ["crap", "report"]
draft: false
repo: containerd/containerd
weight: 6
stars: 21201
combined: 213967.74
average: 27.10
funcs: 7895
toc: false
ShowToc: false
---

An open and reliable container runtime

<div class="project-badges">
<img src="https://img.shields.io/github/stars/containerd/containerd?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/containerd/containerd?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/containerd/containerd?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/containerd/containerd?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/containerd/containerd?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/containerd/containerd
- **Commit**: `a9eb76fb198ed3efe7b2419c7fd7874582f1831c` · HEAD up to date
- **Analyzed**: 2026-08-27T12:04:48-03:00 (50.4s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,29.0"/><circle cx="3.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="3.0" y="10" font-size="9" fill="#555" text-anchor="end">213968</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-27 | `a9eb76f` | 213967.74 | 27.10 | 7895 | 759 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 7656.00 | 87 | 0.0% | `file_services_sandbox_v1_sandbox_proto_init` | [api/services/sandbox/v1/sandbox.pb.go:2047](https://github.com/containerd/containerd/blob/main/api/services/sandbox/v1/sandbox.pb.go#L2047) |
| 7140.00 | 84 | 0.0% | `file_services_tasks_v1_tasks_proto_init` | [api/services/tasks/v1/tasks.pb.go:2028](https://github.com/containerd/containerd/blob/main/api/services/tasks/v1/tasks.pb.go#L2028) |
| 6642.00 | 81 | 0.0% | `file_runtime_task_v2_shim_proto_init` | [api/runtime/task/v2/shim.pb.go:1995](https://github.com/containerd/containerd/blob/main/api/runtime/task/v2/shim.pb.go#L1995) |
| 6642.00 | 81 | 0.0% | `file_runtime_task_v3_shim_proto_init` | [api/runtime/task/v3/shim.pb.go:1995](https://github.com/containerd/containerd/blob/main/api/runtime/task/v3/shim.pb.go#L1995) |
| 6320.00 | 79 | 0.0% | `NewContainer` | [cmd/ctr/commands/run/run_unix.go:93](https://github.com/containerd/containerd/blob/main/cmd/ctr/commands/run/run_unix.go#L93) |
| 4032.00 | 63 | 0.0% | `file_runtime_sandbox_v1_sandbox_proto_init` | [api/runtime/sandbox/v1/sandbox.pb.go:1383](https://github.com/containerd/containerd/blob/main/api/runtime/sandbox/v1/sandbox.pb.go#L1383) |
| 3306.00 | 57 | 0.0% | `file_services_content_v1_content_proto_init` | [api/services/content/v1/content.pb.go:1544](https://github.com/containerd/containerd/blob/main/api/services/content/v1/content.pb.go#L1544) |
| 3306.00 | 57 | 0.0% | `file_services_snapshots_v1_snapshots_proto_init` | [api/services/snapshots/v1/snapshots.pb.go:1479](https://github.com/containerd/containerd/blob/main/api/services/snapshots/v1/snapshots.pb.go#L1479) |
| 3192.00 | 56 | 0.0% | `*criService.RunPodSandbox` | [internal/cri/server/sandbox_run.go:54](https://github.com/containerd/containerd/blob/main/internal/cri/server/sandbox_run.go#L54) |
| 2756.00 | 52 | 0.0% | `*Controller.Start` | [internal/cri/server/podsandbox/sandbox_run.go:62](https://github.com/containerd/containerd/blob/main/internal/cri/server/podsandbox/sandbox_run.go#L62) |
