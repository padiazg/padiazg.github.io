---
build:
  list: never
  publishResources: false
  render: always
title: "Professional Experience"
date: 2025-04-27
draft: false
---

# Professional Experience

---

## Senior Software Engineer

**SEGEL SI** | *Jun 2025 - Feb 2026*

*IoT data pipeline, payment gateway, and enterprise technology modernization*

- Designed a zero-dependency Go library for BLE sensor payload decoding (11+ device types) using a registration-based registry pattern.
- Built a real-time IoT data pipeline with hexagonal architecture: MQTT ingestion → concurrent worker pool → InfluxDB with exponential-backoff retry; 12 Prometheus metrics, liveness/readiness probes.
- Led development of POSsible Payments, a cloud-native payment system covering the full transaction lifecycle — authorization → batching → clearing → settlement — using CQRS, Event Sourcing, and NATS JetStream.
- Implemented OAuth2/OIDC authentication with RBAC-based multi-tenant merchant isolation using Authentik.
- Built observability stack: Prometheus + Grafana + Fluentd across all services.

**Key Achievements:**

- Delivered a zero-dependency BLE decoder library covering 11+ sensor types with a clean, extensible registry API.
- Architected an end-to-end IoT pipeline with graceful shutdown, structured JSON logging, and full observability (12 Prometheus metrics, liveness/readiness health endpoints).
- Designed a payment microservices system with 4 independent services, event-driven inter-service communication via NATS JetStream, and RBAC-based multi-tenant merchant isolation.

**Skills:** Golang, IoT, BLE, MQTT, InfluxDB, Hexagonal Architecture, Microservices, CQRS, Event Sourcing, NATS JetStream, PostgreSQL, Redis, JWT, OAuth2/OIDC, Authentik, Prometheus, Grafana, Fluentd, Docker, Kubernetes, Cobra, Viper

---

## Technical Lead — Golang Backend

**[AR Santex LLC](https://santexgroup.com)** (Client Project) | *Remote* | *Jun 2025 - Oct 2025*

*Cross-border financial integration between Argentinian digital wallet and Chilean banking institution*

- Led a 3-engineer team delivering a scalable financial integration platform end-to-end.
- Designed serverless architecture on AWS: Lambda, API Gateway, Aurora, EventBridge, Secrets Manager.
- Established local dev environment with LocalStack + Docker + Kubernetes; enabled full parity with production.
- Mentored 2 backend developers; conducted code reviews and established team best practices.

**Key Achievements:**

- Delivered a scalable integration platform end-to-end, from architecture design to stakeholder reporting.
- Ensured high availability and security compliance for financial transactions via AWS serverless architecture.

**Skills:** Golang, AWS Lambda, API Gateway, Aurora, EventBridge, Secrets Manager, LocalStack, Docker, Kubernetes

---

## Senior Software Engineer / Technical Lead

**[Tyk Technologies Ltd](https://www.tyk.io)** | *Nov 2020 - May 2024*

- Collaborated on 75% of the product roadmap with the product manager, and led 100% of the development of the Enterprise Developer Portal.
- Selected, onboarded and mentored 6 developers, leading them to deliver according to company expectations.
- Researched open-source projects for integration, extending the go-oas/doc project to suit specific needs.
- Helped all 6 reporting developers advance their careers according to the professional growth plan.
- Took the Enterprise Developer Portal PoC from 50% to 90% production-ready.
- Refactored 75% of the code to implement good practices like clean code, consistent development patterns, and modularity.
- Increased unit test code coverage from 0% to 60% and implemented mutation testing.
- Reduced maximum cyclomatic complexity from 23 to 13.
- Helped QA implement E2E tests, going from 0% to 90% of features tested.

**Key Achievements:**

- Incubated the Enterprise Developer Portal from an internal PoC (30% features) to a production-ready (95% features) product.
- Built the team from 1 dev (myself) to 4 devs, 1 QA, 1 PM, 1 UX, 1 SM and 1 TL.
- Planned 75% of the roadmap and ensured 100% delivery according to long-term plans.

**Skills:** Golang, Project Management, Team Leadership, Software Development, Open-Source, Go-oas/docs, Microservices, REST, gRPC, CI/CD, QOR, GORM, Unit Testing, Mutation Testing, Clean Code, Development Patterns, Modularity, E2E Testing

---

## DevOps Engineer / Full Stack Developer

**On Campus Marketing** | *Oct 2019 - Sep 2020*

- Developed front-end and back-end code for third-party software integrations.
- Researched and implemented third-party platforms (Akeneo and Strapi), extending core applications and reducing development time.
- Wrote integration/customization scripts for the company's NetSuite instance.
- Maintained and extended CI/CD pipelines and Services on Google Cloud.
- Developed serverless functions as requested.
- Managed databases used for development, staging and production.

**Key Achievements:**

- Collaborated to integrate third-party platforms like NetSuite and Akeneo with the company's in-house developed stack.
- Developed critical back-end and front-end features needed by the product.
- Improved cloud resource usage (Google Cloud) reducing costs.

**Skills:** Golang, Javascript, PHP, React, GCP, CI/CD, Microservices, REST, gRPC, FaaS, Unit-testing, Software Development, Open-Source, Unit Testing, Clean Code, Development Patterns, Modularity, E2E Testing

---

## Senior IT Consultant

**Vision Banco SAECA** | *May 2012 - Oct 2019*

*Banking technology modernization and digital transformation leadership*

- Built 3 mission-critical systems including a complete rewrite of the customer data management application.
- Redesigned loan quota calculator in Node.js — 5× throughput increase, processing time from seconds to milliseconds.
- Designed a distributed customer service queue manager with 4 async components: AMQP, WebSockets, priority sorting.
- Deployed 2 private clouds (dev/staging + production) with Docker Swarm, Kubernetes, and monitoring stack.
- Mentored 10+ developers across 4 teams; provided technical guidance to CTO for 30% of working hours.
- Eliminated critical server stability issues that caused hours-long recovery windows.

**Key Achievements:**

- Enabled more efficient data processing and computing resource consumption.
- Trained developers in up-to-date technologies and languages.
- Modernized the bank's technology stack.

**Skills:** Genexus 9~Evo2, Java, Javascript, Node.js, Vue.js, RPG, IBM iSeries, IBM i OS, IBM z/OS, IBM DB/2, Websphere MQ, Websphere Application Server, JBoss Application Server, Apache Tomcat, Active MQ, FaaS, Microservices, REST, SOAP, WebSockets, OAuth, CI/CD, Software Development, Open-Source, Clean Code, Development Patterns, Modularity

---

## Software Engineer

**Neuland Cooperative Ltd** | *Mar 2009 - Mar 2011*

- Developed modules for existing systems and created libraries for system extensions.
- Maintained and repaired distributed Oracle database across 3 branch locations.
- Implemented database replication and synchronization solutions.

**Key Achievements:**

- Successfully managed distributed database system across multiple locations.
- Improved system reliability and performance through optimized database maintenance.

**Skills:** Oracle, PL/SQL, Genexus 9, Visual Basic, Database Administration, System Development, Distributed Systems

---

## Owner

**I+I Infraestructura Informática** | *2009 - 2012*

- Worked with various institutions solving issues from networking infrastructure to custom software development.
- Implemented VoIP solutions, CI/CD pipelines, containerization and orchestration.

**Key Achievements:**

- Designed and supervised implementation of new physical and logical network structure for ESSAP S.A.
- Implemented a new VoIP call center for ESSAP S.A., increasing response capacity by 400%.
- Planned and implemented VoIP solution for 3 in-house call centers at Electroban S.A.
- Developed/updated software solutions for financial and other organizations.
- Maintained and enhanced PHP+MS-SQL-based systems for Voicenter SA.

**Skills:** CISCO systems, structured networks, VoIP, Software Development, Open-Source, Genexus, PHP, MS-SQL, Linux, microservices, security

---

## Software Engineer / Technical Leader

**The Derby S.R.L.** | *Jul 2007 - Feb 2009*

- Led a team of 7 developers managing 20+ concurrent projects.
- Coordinated infrastructure provisioning and implemented business policies and security requirements.
- Developed integrations with multiple database systems.
- Created and modified Delphi components for process automation and database connectivity.

**Key Achievements:**

- Developed a client/server system for mobile phone location services integrating LBS, GIS, and OpenGIS.
- Built a web-based interface for location services accessible from any browser.
- Implemented automated database synchronization across distributed systems.

**Skills:** Delphi, Oracle, MS-SQL, MySQL, PostgreSQL, GIS, OpenGIS, Client/Server Architecture, Team Leadership, Project Management

---

## IT Operations Manager

**DSP Express Courrier** | *Aug 2006 - Jul 2007*

- Managed operational and administrative tasks while developing custom software solutions.
- Implemented GIS and georeferencing techniques for logistics optimization.
- Developed automated address geocoding tools for large address databases.

**Key Achievements:**

- Created prototype tools for automatic geocoding of extensive address lists.
- Improved operational efficiency through custom software solutions.

**Skills:** GIS, Geocoding, Full-text Search, Operations Management, Custom Software Development

## Early Career Highlights (1992-2006)

---

### Programming Consultant

**Duckman Consulting** | *2000 - 2004*

- Provided IT consulting, software development, and system maintenance for EU-funded projects, NGOs, and government institutions.
- Developed custom software solutions for project management, accounting, and logistics.
- Administered Linux servers providing gateway, firewall, proxy, email, FTP, and database services.

**Skills:** Linux, C++, Delphi, Visual FoxPro, Pascal, Database Administration, Network Administration

---

### Software Developer

**ALA Project 90/24** | *1994 - 1998*

- Developed multiple custom applications for project management, procurement, and monitoring.
- Implemented network infrastructure and managed distributed systems.
- Created data integration solutions between different database platforms.

**Skills:** Clipper, dBase, Pascal, Assembly, Network Administration
