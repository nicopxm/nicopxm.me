---
layout: ../../layouts/BlogPost.astro
title: "Clay GTM Prospecting Table"
description: "Joins job-board hiring signals to firmographic data with waterfall enrichment and a scored ICP-fit column — currently in active development."
---

# Clay GTM Prospecting Table

**In progress · 2026**

> **Build status:** This table is under active development. The approach below is current; no performance figures exist yet and none are claimed.

## The Problem

Hiring signals are one of the more honest buying signals available. A company posting revenue roles has budget allocated and a gap it has already admitted to.

The trouble is shelf life. The list goes stale within days — roles get filled, postings get pulled, and the window closes. Manual enrichment cannot keep pace with that decay, so by the time a list is clean enough to work, it is describing a moment that has passed.

## The Approach

A Clay table that treats the signal as perishable and does the enrichment continuously.

- **Signal source:** job-board postings for revenue roles
- **Join:** postings matched to firmographic data at the company level
- **Enrichment:** waterfall enrichment, so a miss at one provider falls through to the next instead of dropping the row
- **Scoring:** an ICP-fit column targeting Series A/B SaaS
- **Destination:** HubSpot

Waterfall enrichment matters more than it sounds. Single-provider enrichment silently loses coverage, and the rows it drops are not random — they skew toward smaller and newer companies, which is exactly the segment being targeted here.

## What This Page Will Show Later

Coverage rate by enrichment step, ICP score distribution, and how the scored list performs against a control.
