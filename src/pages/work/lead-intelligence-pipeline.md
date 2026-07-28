---
layout: ../../layouts/BlogPost.astro
title: "Lead Intelligence Pipeline"
description: "Enriches inbound leads, scores them against a configurable ICP, and drafts a first-touch before pushing to HubSpot — currently in active development."
---

# Lead Intelligence Pipeline

**In progress · 2026**

> **Build status:** This system is under active development. The architecture and problem framing below are current; there are no results to report yet, and this page will be updated with outcomes once it runs against real volume.

## The Problem

Inbound leads sit unqualified while reps research by hand. Someone has to open the form fill, look up the company, guess at fit, and decide whether it's worth a reply. By the time that happens, the intent signal that made the lead valuable is gone.

The cost isn't only speed. Manual qualification is inconsistent — two reps score the same account differently, and neither decision is recorded anywhere the next person can use.

## The Approach

A pipeline that does the research step automatically and hands the rep a decision rather than a task.

- **Orchestration:** self-hosted n8n on Hetzner
- **Source of truth:** Supabase
- **Enrichment:** inbound leads are resolved to a company and enriched before scoring
- **Scoring:** a configurable ICP definition, so the fit criteria are data rather than code
- **Drafting:** a first-touch message drafted from the enriched context
- **Delivery:** pushed to HubSpot, with Resend handling email
- **Front end:** Next.js on Vercel

The design goal is that the ICP rubric stays editable by the person who owns the pitch, not only by whoever owns the repo.

## What This Page Will Show Later

Throughput, scoring accuracy against reps' own judgment, and the engineering artifacts — sprint history, ADRs, and build log.
