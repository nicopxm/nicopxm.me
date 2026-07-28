---
layout: ../../layouts/BlogPost.astro
title: "AI DJ Assistant"
description: "A local analysis pipeline over a rekordbox library — audio feature extraction with Essentia and librosa, stored for querying — currently in early development."
---

# AI DJ Assistant

**In progress · 2026**

> **Build status:** Early development. The stack below is the current plan; there is nothing to demo yet and no results are claimed.

## The Stack

**Backend / analysis**
Python, with [Essentia](https://essentia.upf.edu/) and [librosa](https://librosa.org/) for audio feature extraction, and `pyrekordbox` to read the rekordbox library directly rather than re-analyzing files from scratch.

**Storage**
SQLite or DuckDB, holding the extracted feature set.

**UI**
Streamlit or Gradio for the prototype. Electron, Tauri, or a local web app for the final build — the point is that it runs locally against a real library, not as a hosted service.

**Optional**
An LLM layer (Claude or GPT) for natural-language explanations of why a given selection works.

## Why Local

The library is the asset. Reading rekordbox directly means the tool works against a collection that already has years of manual tagging and cue points in it, instead of asking someone to re-import everything into a new system.

## What This Page Will Show Later

The feature set actually being extracted, how selections are scored, and whether the explanations are useful enough to keep.
