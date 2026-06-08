---
layout: ../../layouts/BlogPost.astro
---

# COinbase Momentum Tracker
A 24/7 automated trading engine tracking 231 Coinbase USD pairs, featuring multi-signal momentum detection, cloud infrastructure optimization, and automated TP/SL management.

**2026**

> *Status: Live in Production (V2 Deployed). I am actively building and scaling this system, treating the architecture and cloud deployment as a live engineering case study.*

## The Challenge
Non-professional crypto traders lack the real-time infrastructure to detect momentum before it becomes mainstream. By the time a volume spike is visible on a standard chart, the best entry is already gone. Monitoring all 231 active Coinbase USD pairs manually is impossible, and simple volume alerts generate massive alert fatigue due to false positives. 

Furthermore, even when a good entry is found, the absence of automated exit signals means paper gains evaporate during inevitable market pullbacks. I needed to build an engine that solves the **Timing**, **Coverage**, **Noise**, and **Exit** problems simultaneously.

## The Solution
I built Momentum: a multi-signal momentum engine that fuses six independent technical signals into a single detection pipeline, applies dynamic thresholds based on current market context, and manages positions automatically from entry through exit. 

### The Tech Stack
* **Core Engine:** Python 3.12 utilizing APScheduler for strict 7-minute cycle execution.
* **Infrastructure:** Hosted on Railway for 24/7 worker deployment.
* **Database:** Supabase (PostgreSQL) optimized for minimal read/write latency.
* **Data Ingestion:** Coinbase Advanced API pulling OHLCV candles for 231 pairs.
* **Alerting & UI:** Telegram Bot API for real-time mobile execution, paired with a Streamlit Cloud public dashboard.

## Key Engineering Decisions

### 1. Database Optimization: 84% Egress Reduction
Initially, the Supabase architecture was highly inefficient, reading states for all 231 individual coins per cycle. This was on track to generate 16GB/month in egress, shattering the 5GB free-tier limit. I completely overhauled the database interaction to utilize batch querying and an expanded state cache, dropping egress to just 2.5GB/month.

```python
# BEFORE: 231 individual SELECT * per cycle (~65MB/day)
res = supabase.table("coin_state").select("*").eq("product_id", product_id).execute()

# AFTER: 1 batch query per cycle via expanded state_cache (~2MB/day)
res = supabase.table("coin_state").select("product_id, accel_count, coiling, l2_fired").execute()
state_cache = {r["product_id"]: r for r in res.data}
```

### 2. The Rogue Wick Problem: Trailing Stop Engineering
Low-cap momentum coins frequently generate "rogue wicks"—a single market buy order into a thin order book creates a 1-minute spike that instantly reverts. Using standard `high` prices for a trailing stop triggered massive false exits. 

**The Fix:** I engineered the trailing stop to filter out wicks entirely, trailing strictly on the highest confirmed 1-minute `close`. This ensures the system acts on agreed-upon market value, not temporary liquidity voids.

### 3. Signal Fusion & Noise Reduction
Rather than firing on every volume spike, AlphaPulse grades momentum through layers:
* **L1 & L2 Triggers:** Scans 4 timeframes simultaneously. Alerts only fire when price momentum is confirmed by a 1.5x–3.0x volume ratio threshold.
* **Dynamic Early L2:** If a coin already has 15%+ 24-hour momentum, the system dynamically lowers the volume bar to catch the "next leg up," provided 5 separate safeguarding tests are passed.
* **Technical Validation:** Filters entries through Wilder's RSI-14 smoothing, MACD bullish crosses, and 20/50 EMA structures calculated directly from the raw candle data without additional API calls.

## Live Production Results
AlphaPulse operates on real market data. The automated position management system handles 5 specific exit types (Partial Take Profit, Trailing Stop, Dynamic Hard Stop, Breakeven, and Weak Signal exits), completely removing emotion from the trade lifecycle.

* **Peak System Gain:** +97% (First Dynamic L2 alert on BOBBOB-USD)
* **Scan Velocity:** 7 minutes to scan, evaluate, and fire signals across 231 pairs.
* **Live Alerts:** Bypasses traditional dashboards to push actionable, highly detailed Telegram alerts directly to mobile.

**Sample Alert Output:**
```text
💰 TAKE PARTIAL PROFIT — DRIFT-USD
Profile    : Standard → sell 50%
Entry (L2) : $0.029000
Now        : $0.035000 (+20.7%)
Action     : Sell 50% now — lock in gains
Remainder  : Trailing stop activated (-12% from high)
Stop moved : Breakeven $0.029000 — no more losing trades
```

## Next Steps: The Roadmap
Phases 1 through 4 (Scanner, Dynamic Routing, Technical Indicators, and TP/SL Management) are fully deployed. **Phase 5** is currently in development: implementing a Unified Momentum Score (0-100) to weigh all six signals into a singular confidence metric, allowing for even stricter alert thresholds and automated performance tracking.