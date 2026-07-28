---
layout: ../../layouts/BlogPost.astro
title: "Multi-Platform Marketing Performance Pipeline"
description: "Consolidated four ad platforms with incompatible schemas into one standardized source, so budget decisions came from standing information instead of a day of manual reconciliation."
---

# Multi-Platform Marketing Performance Pipeline

**2023**

> *Note on Confidentiality: Because this pipeline was engineered for a live commercial environment, the underlying business datasets, proprietary API configurations, and final dashboards are strictly confidential and cannot be shared publicly. The following outlines the architecture and business impact of the project.*

## The Problem

Campaign performance lived in four ad platforms that did not agree with each other. Snapchat, X, and Reddit Ads each had their own schema, their own metric definitions, and their own reporting cadence — so there was no such thing as a cross-channel number that anyone could just look up.

Answering *which channel is actually working* meant a day of manual exports and reconciliation. By the time the reconciliation was finished, the numbers described a week that had already been paid for. Budget decisions ran on stale data, which meant underperforming spend kept running for days after it was identifiable as underperforming.

The failure mode was not a lack of data. It was that the data arrived too late and in shapes that could not be compared.

![Ads Visual](../../assets/xAds.png)

## The System

A Python ETL that pulls each platform's API on a scheduled refresh and normalizes everything into a single standardized schema.

* **Extraction:** Automated Python scripts against each platform's API, pulling daily pacing data, impressions, and raw engagement metrics.
* **Transformation:** Cleaning and standardization in Pandas, unifying cross-platform data and calculating blended metrics — CTR, CPC, CPA — so comparisons are genuinely apples-to-apples rather than four vendors' different definitions of the same word.
* **Loading:** Cleaned data into a centralized relational database, one source of truth for the marketing organization.
* **Reporting:** Dashboards connected directly to the database, showing live burn rate against allocated budget and tracking ROAS across channels.

The unglamorous part — agreeing on what CTR means across four vendors before writing the transform — was most of the work, and the reason the output could be trusted.

## What Changed

Cross-channel performance became standing information instead of a request. Budget decisions came from one source rather than four exports.

The practical effect was on reaction time. Instead of responding to last week's numbers, the team could pause underperforming ads while they were still spending, stabilize fluctuating budgets against live burn rate, and scale the campaigns that were converting — with the evidence visible to everyone rather than reconstructed by whoever ran the export.
