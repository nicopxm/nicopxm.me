import type { Project } from "../types";

const projects: Project[] = [
  {
    name: "Lead Intelligence Pipeline",
    track: "gtm",
    order: 1,
    status: "in-progress",
    problem:
      "Inbound leads sit unqualified while reps research by hand. By the time someone follows up, the intent signal is gone.",
    system:
      "Self-hosted n8n on Hetzner with Supabase as source of truth. Inbound leads are enriched, scored against a configurable ICP, and given a drafted first-touch before being pushed to HubSpot. Next.js front end on Vercel, Resend for delivery.",
    tags: ["n8n", "Supabase", "HubSpot", "Claude API", "Next.js"],
    postID: "lead-intelligence-pipeline",
  },
  {
    name: "Clay GTM Prospecting Table",
    track: "gtm",
    order: 2,
    status: "in-progress",
    problem:
      "Hiring signals show which companies have budget for revenue roles, but the list goes stale within days and manual enrichment does not keep up.",
    system:
      "A Clay table joining job-board signals to firmographic data, with waterfall enrichment and a scored ICP-fit column targeting Series A/B SaaS.",
    tags: ["Clay", "Apollo", "HubSpot"],
    postID: "clay-gtm-table",
  },
  {
    name: "Multi-Platform Marketing Performance Pipeline",
    filename: "snapchatAds.png",
    dates: "2023",
    track: "gtm",
    order: 3,
    status: "shipped",
    problem:
      "Campaign performance lived in four ad platforms with different schemas and reporting cadences. Answering which channel was actually working meant a day of manual exports and reconciliation, so budget decisions ran on stale numbers.",
    system:
      "A Python ETL pulling the Snapchat, Reddit, and X APIs into a standardized schema on a scheduled refresh, with automated reporting and stakeholder dashboards covering spend, CPC, CTR, and impressions.",
    outcome:
      "Cross-channel performance became standing information instead of a request. Budget decisions came from one source rather than four exports.",
    tags: ["Python", "REST APIs", "PostgreSQL", "Tableau"],
    postID: "marketing-etl-pipeline",
  },
  {
    name: "BansheeRap",
    client: "Boat charter & brokerage — Puerto Rico",
    track: "case-study",
    order: 1,
    status: "in-progress",
    problem:
      "No CRM, no card payment rails, and no online conversion asset. Inquiries are tracked by memory, brokering margins are thin, and high-value management contracts have been lost to contract and boundary friction.",
    system:
      "Rebuild boat management as a structured product with defined scope. Add ATH Movil and Stripe for payments. Deploy a HubSpot plus n8n CRM layer over inquiry intake, and build a conversion asset for inbound.",
    metrics: [
      { label: "Close rate today", value: "30-40%" },
      { label: "Avg deal", value: "$850+" },
    ],
    tags: ["HubSpot", "n8n", "Stripe"],
    postID: "bansheerap",
  },
  {
    name: "ComMotion",
    client: "Adaptive dance nonprofit — CDMX / North Carolina",
    track: "case-study",
    order: 2,
    status: "in-progress",
    problem:
      "A broken donation funnel, brand fragmented across multiple domains and social handles, and no CRM connecting Mailchimp, Eventbrite, Kajabi, and WordPress.",
    system:
      "Repair the donation flow, consolidate the brand, then unify contacts on HubSpot Free with n8n as the integration layer. Follow-on work adds automated grant prospecting against Grants.gov and North Carolina funders.",
    tags: ["HubSpot", "n8n", "Mailchimp"],
    postID: "commotion",
  },
  {
    name: "Credit Risk Scorecard Framework",
    filename: "dashboard-credit.png",
    dates: "March 2026",
    link: "https://github.com/nicopxm/Credit-Risk-Scorecard",
    track: "data",
    order: 1,
    status: "shipped",
    problem:
      "Approval decisions rested on judgment that could not be audited or tuned. There was no consistent threshold and no way to know what a given cutoff would cost.",
    system:
      "A probability-of-default model using logistic regression with weight-of-evidence encoding, wrapped in a scorecard that maps a score to an approve or decline threshold the business can set deliberately.",
    outcome:
      "Cut the portfolio default rate by 58%. Structurally the same problem as lead scoring — find the signals that predict the outcome, then choose a threshold you can defend.",
    tags: ["Python", "scikit-learn", "Logistic Regression", "WoE"],
    postID: "credit-risk",
  },
  {
    name: "Momentum — Crypto Signal Tracker",
    filename: "pump-preview.png",
    dates: "May 2026 — Present",
    link: "https://momentum-tracker-mirjjfgreydqj26dgyswz7.streamlit.app/",
    track: "data",
    order: 2,
    status: "live",
    problem:
      "Momentum signals are time-sensitive and watching for them by hand does not scale past a couple of assets.",
    system:
      "A production Streamlit app pulling Coinbase data into Postgres on a schedule, scoring price movement against configurable thresholds, and pushing alerts to Telegram.",
    outcome:
      "Runs unattended. Same architecture as any monitoring pipeline: scheduled ingestion, a scoring rule, a notification channel.",
    tags: ["Python", "Streamlit", "PostgreSQL", "Coinbase API", "Railway"],
    postID: "crypto-tracker",
  },
  {
    name: "Kendrick Lamar Discography Analysis",
    filename: "kendrick-dashboard-preview.png",
    dates: "June 2026",
    track: "lab",
    order: 1,
    status: "shipped",
    problem:
      "A question with no business value that I wanted answered anyway: does an artist's catalog cluster into distinct eras, and can you find them in the audio features?",
    system:
      "Spotify API extraction, feature engineering, K-Means clustering, and a Tableau dashboard.",
    outcome: "",
    tags: ["Python", "Spotify API", "K-Means", "Tableau"],
    postID: "kendrick-lamar",
  },
  {
    name: "AI DJ Assistant",
    track: "lab",
    order: 2,
    status: "in-progress",
    system:
      "Python analysis pipeline over a rekordbox library using Essentia and librosa via pyrekordbox, with extracted features stored in SQLite/DuckDB. Streamlit prototype UI, with a local Electron or Tauri app as the target. Optional LLM layer for natural-language explanations.",
    tags: [
      "Python",
      "Essentia",
      "librosa",
      "pyrekordbox",
      "DuckDB",
      "Streamlit",
    ],
    postID: "ai-dj-assistant",
  },
];

export default projects;
