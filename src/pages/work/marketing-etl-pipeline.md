---
layout: ../../layouts/BlogPost.astro
---

# Marketing Analytics ETL Pipeline

**2023**

An automated data pipeline integrating multi-platform ad spend and performance metrics into a centralized source of truth for real-time campaign optimization.

> *Note on Confidentiality: Because this pipeline was engineered for a live commercial environment, the underlying business datasets, proprietary API configurations, and final Looker Studio dashboards are strictly confidential and cannot be shared publicly. The following outlines the architecture and business impact of the project.*

## The Challenge
Marketing teams were operating in the dark, pulling manual reports across fragmented platforms like Snapchat, X, and Reddit Ads. Tracking daily budgets and matching ad spend to actual performance was a massive headache. Because of the reporting lag, we couldn't accurately measure impressions, engagement, or CTR until days after the money was already spent. The data was chaotic, trapped in separate CSV exports, and highly prone to human error, making it nearly impossible to pivot campaigns efficiently under high-uncertainty market conditions.

![Ads Visual](../../assets/xAds.png)

## The Solution
I architected and deployed a fully automated ETL (Extract, Transform, Load) pipeline to eliminate manual data wrangling and provide real-time marketing intelligence. 

### Key Technical Implementations:
* **Data Extraction:** Engineered automated Python scripts utilizing API integrations to extract daily pacing data, impressions, and raw engagement metrics from multiple marketing channels.
* **Data Transformation:** Built robust data cleaning and standardization workflows using Pandas. This step unified cross-platform data, automatically calculating blended performance metrics—like CTR, CPC (Cost Per Click), and CPA (Cost Per Acquisition)—to ensure true apples-to-apples comparisons.
* **Data Loading & Storage:** Pushed the cleaned data into a centralized, highly-performant relational database, creating a single source of truth for the entire marketing organization.
* **Visualization & Budget Tracking:** Connected the database directly to Looker Studio, producing real-time dashboards that visualized live burn rates against allocated budgets and tracked overall ROAS (Return on Ad Spend).

## The Impact
By replacing hours of manual spreadsheet work with rigorous data discipline, stakeholders gained instant visibility into exactly which creatives were driving actual engagement. Instead of reacting to last week's data, the team was empowered to stabilize fluctuating budgets, pause underperforming ads instantly, and confidently scale the campaigns that were actually converting.