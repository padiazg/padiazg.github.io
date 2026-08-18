---
build:
  list: never
  publishResources: false
  render: always
title: "Projects"
date: 2025-04-27
draft: false
---

# Projects


## Go Struct Analyzer

**Role:** Owner  [github](https://github.com/padiazg/go-struct-analyzer)  
A VS Code extension to show memory size and padding information for Go structs, helping you optimize memory usage and understand struct layout.
Published at [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=PatricioDiaz.go-struct-analyzer) and [Open VSX Registry](https://open-vsx.org/extension/PatricioDiaz/go-struct-analyzer), featured at [The Applied Go Weekly Newsletter](https://newsletter.appliedgo.net/archive/2025-06-22-go-before-you-wait/)

## go-crap

**Role:** Owner  [docs](https://padiazg.github.io/go-crap/) [github](https://github.com/padiazg/go-crap)  
CRAP score (Change Risk Anti-Pattern) calculator with mutation testing integration. Calculates cyclomatic complexity × coverage ratio per function, integrates with go-gremlins for mutation testing (flags CoverageUntrusted when mutations survive, computing EffectiveCRAP), and outputs SARIF 2.1.0 (IDE/GitHub Code Scanning), PR-comment, and text formats for CI pipelines — the final guardrail ensuring AI-generated tests aren't just coverage theater.

## go-crap-action

**Role:** Owner  [github](https://github.com/padiazg/go-crap-action)
Run go-crap in GitHub Actions without installing the tool or a Go toolchain. The action executes the published ghcr.io/padiazg/go-crap Docker image against your checked-out code.

## go-crap-tracker

**Role:** Owner  [docs](https://padiazg.github.io/go-crap-tracker/) [github](https://github.com/padiazg/go-crap-tracker)
Distributed, async scan tracker for go-crap. Schedule repository scans over NATS JetStream, workers run go-crap scan, results stored in Postgres, and live updates stream via SSE with an embedded web UI.

## HexaGo

![Hexago Gopher](https://raw.githubusercontent.com/padiazg/hexago/refs/heads/master/logo.png)
**Role:** Owner  [docs](https://padiazg.github.io/hexago/) [github](https://github.com/padiazg/hexago)  
An opinionated CLI scaffolding tool for Go developers building applications following the Hexagonal Architecture (Ports & Adapters) pattern. Generates fully-wired project structure (domain, ports, adapters, services, workers, migrations) from a single command, with support for multiple HTTP frameworks (stdlib, Echo, Gin, Chi, Fiber), a multi-source customizable template system, and architecture validation that keeps generated code within hexagonal boundaries over time. Designed for AI coding agent compatibility — structured output makes it easy for LLMs to navigate and extend code.

## go-testgen

**Role:** Owner  [docs](https://padiazg.github.io/go-testgen/) [github](https://github.com/padiazg/go-testgen)  
A domain-aware unit test scaffolding generator. Parses Go source code to produce table-driven tests grounded in actual domain structs and interfaces, with closure-based check patterns, before hooks for mock setup, and clean test composition. Bridges the gap between LLM-generated code and meaningful tests — ensuring AI tests reflect real domain behavior.

## unit-test-book

**Role:** Owner  [docs](https://padiazg.github.io/unit-test-book/) [github](https://github.com/padiazg/unit-test-book)  
A hands-on guide to Go unit testing through real-world patterns extracted from 7 production Go projects. Covers table-driven tests, closure-check pattern, mocking, HTTP/I/O, concurrency, and integration testing.

## test-finder

**Role:** Owner  [github](https://github.com/padiazg/test-finder)  
A CLI tool to discover Go modules and analyze their test coverage across directories.

## Codapi Sandboxes

**Role:** Contributor  [github](https://github.com/nalgeon/sandboxes)  
Contributed the LaTeX sandbox

## Barcode Generator 
**Role:** Owner  [github](https://github.com/padiazg/barcode-generator)  
Allows you to generate a wide variety of 1D & 2D codes. Written in Node.js, this project can generate a wide variety of 1D and 2D codes.

## go-zh07
**Role:** Owner [github](https://github.com/padiazg/go-zh07)  
Golang library to read the Winsen ZH07 & ZH06 particulate matter sensors. ZH06 and ZH07 are laser dust sensor modules to check air quality. Developed to collaborate with the [airelib.re](https://airelib.re/) initiative.

## go-sps30
**Role:** Owner (https://github.com/padiazg/go-sps30)  
Golang library to read the Sensirion SPS30 particulate matter sensor. SPS30 is an MCERTS-certified particulate matter (PM) sensor that works over i2c and serial. Developed to collaborate with the [airelib.re](https://airelib.re/) initiative.

## harbour-alpine
**Role:** Contributor [github](https://github.com/padiazg/harbour-alpine)  
Harbour compiler on Docker/Alpine. Patch for the Harbour compiler to run on Alpine. Part of an OpenFaaS PoC to reuse old dbase/clipper/fox code in serverless functions.

## go-oas/docs
**Role:** Contributor  [github](https://github.com/go-oas/docs)  
Automatically generate RESTful API documentation for GO projects - aligned with Open API Specification standard. Added features needed to auto-generate OAS documentation out of auto-generated API by QOR v3 framework, used by Tyk's Enterprise Developer Portal. Release 1.1.0 ([https://github.com/go-oas/docs/releases/tag/v1.1.0](https://github.com/go-oas/docs/releases/tag/v1.1.0)) was sponsored by me.

## OpenFaaS
**Role:** Contributor  [github](https://github.com/openfaas/faas/blob/master/community.md)  
OpenFaaS® makes it easy for developers to deploy event-driven functions and microservices to Kubernetes without repetitive, boilerplate coding. Actively collaborated with the project in its early days, researching, testing and advocating.

## ClusterHAT Images
**Role:** Owner  
Created Raspbian/Ubuntu/Debian images for Orange Pi CM4 and Banana Pi M2 Zero.
