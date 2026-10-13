---
title: "containerd/containerd"
date: 2026-10-12
slug: containerd-containerd
tags: ["crap", "report"]
draft: false
repo: containerd/containerd
weight: 6
stars: 21400
combined: 211281.79
average: 26.53
funcs: 7963
toc: false
ShowToc: false
---

An open and reliable container runtime

<div class="project-badges">
<img src="https://img.shields.io/github/stars/containerd/containerd?style=flat-square&label=stars" alt="stars" loading="lazy"><img src="https://img.shields.io/github/forks/containerd/containerd?style=flat-square&label=forks" alt="forks" loading="lazy"><img src="https://img.shields.io/github/license/containerd/containerd?style=flat-square&label=license" alt="license" loading="lazy"><img src="https://img.shields.io/github/last-commit/containerd/containerd?style=flat-square&label=updated" alt="updated" loading="lazy"><img src="https://img.shields.io/github/v/release/containerd/containerd?style=flat-square&label=release" alt="release" loading="lazy">
</div>

- **Repository**: github.com/containerd/containerd
- **Commit**: `0a74f56c126ace4e424c4c7f915fdc33c91ce556` · HEAD up to date
- **Analyzed**: 2026-10-12T18:52:00-03:00 (194.8s)
- **Engine**: local · go-crap 0.5.1

## go-crap command

```shell
go-crap scan --format json --no-progress --verbose -o tmp.json --coverage-profile .go-crap-cover.out ./...
```

## Trend

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 120 32" role="img" aria-label="CRAP score trend"><polyline fill="none" stroke="#e53e3e" stroke-width="1.5" points="3.0,7.0 25.8,3.0 48.6,3.0 71.4,3.6 94.2,4.4 117.0,29.0"/><circle cx="117.0" cy="29.0" r="2.5" fill="#e53e3e"/><text x="117.0" y="10" font-size="9" fill="#555" text-anchor="end">211282</text></svg>

## History

| Date | Commit | Combined | Average | Funcs | Exceeded | Engine |
|------|--------|----------|---------|-------|----------|--------|
| 2026-08-27 | `a9eb76f` | 213967.74 | 27.10 | 7895 | 759 | local |
| 2026-08-30 | `716cbaf` | 214452.41 | 27.16 | 7897 | 759 | local |
| 2026-09-02 | `282a4b9` | 214457.84 | 27.15 | 7899 | 759 | local |
| 2026-09-02 | `fb6dc53` | 214379.99 | 27.14 | 7899 | 758 | local |
| 2026-09-04 | `a2d2eab` | 214283.72 | 27.13 | 7899 | 757 | local |
| 2026-10-12 | `0a74f56` | 211281.79 | 26.53 | 7963 | 743 | local |

## Top offenders

| Crap | Complexity | Coverage | Function | File |
|----------|------|------|------------|----------|
| 7656.00 | 87 | 0.0% | `file_services_sandbox_v1_sandbox_proto_init` | [api/services/sandbox/v1/sandbox.pb.go:2047](https://github.com/containerd/containerd/blob/main/api/services/sandbox/v1/sandbox.pb.go#L2047) |
| 7140.00 | 84 | 0.0% | `file_services_tasks_v1_tasks_proto_init` | [api/services/tasks/v1/tasks.pb.go:2028](https://github.com/containerd/containerd/blob/main/api/services/tasks/v1/tasks.pb.go#L2028) |
| 6642.00 | 81 | 0.0% | `file_runtime_task_v2_shim_proto_init` | [api/runtime/task/v2/shim.pb.go:1995](https://github.com/containerd/containerd/blob/main/api/runtime/task/v2/shim.pb.go#L1995) |
| 6642.00 | 81 | 0.0% | `file_runtime_task_v3_shim_proto_init` | [api/runtime/task/v3/shim.pb.go:1995](https://github.com/containerd/containerd/blob/main/api/runtime/task/v3/shim.pb.go#L1995) |
| 6320.00 | 79 | 0.0% | `NewContainer` | [cmd/ctr/commands/run/run_unix.go:93](https://github.com/containerd/containerd/blob/main/cmd/ctr/commands/run/run_unix.go#L93) |
| 4032.00 | 63 | 0.0% | `file_runtime_sandbox_v1_sandbox_proto_init` | [api/runtime/sandbox/v1/sandbox.pb.go:1430](https://github.com/containerd/containerd/blob/main/api/runtime/sandbox/v1/sandbox.pb.go#L1430) |
| 3306.00 | 57 | 0.0% | `file_services_content_v1_content_proto_init` | [api/services/content/v1/content.pb.go:1544](https://github.com/containerd/containerd/blob/main/api/services/content/v1/content.pb.go#L1544) |
| 3306.00 | 57 | 0.0% | `file_services_snapshots_v1_snapshots_proto_init` | [api/services/snapshots/v1/snapshots.pb.go:1479](https://github.com/containerd/containerd/blob/main/api/services/snapshots/v1/snapshots.pb.go#L1479) |
| 3192.00 | 56 | 0.0% | `*criService.RunPodSandbox` | [internal/cri/server/sandbox_run.go:54](https://github.com/containerd/containerd/blob/main/internal/cri/server/sandbox_run.go#L54) |
| 2862.00 | 53 | 0.0% | `*Controller.Start` | [internal/cri/server/podsandbox/sandbox_run.go:61](https://github.com/containerd/containerd/blob/main/internal/cri/server/podsandbox/sandbox_run.go#L61) |
