# nicopxm.me Redesign — Sprint Plan

**Goal:** Convert a portfolio that reads "Data Analyst / Web Developer" into one that reads "GTM Engineer" without discarding the technical work.

**Constraint:** Content and structure are on different timelines. Two GTM projects exist or are in flight; two case studies are early. The plan ships structure before content is complete rather than waiting.

**Sprint sizing:** S0 is hours. S1–S4 are 2–4 days each depending on content availability.

---

## Current scope — read first

**Visual redesign is deferred.** Sprint 3 is parked. The existing Astro build, layout, DaisyUI `cmyk` theme, card styling, glow borders, and WebGL background all stay as-is for now.

Active scope is **swapping what's there for what needs to be there**: dead content out, correct content in, structure renamed, copy rewritten. Everything ships inside the current look.

**Active:** S0 · S1 · S2 · S4
**Parked:** S3 (and ADR-002 with it)

Two consequences for the active sprints:

- New components (`CaseStudyCard.astro`) inherit current styling — same `bg-slate-800`, same cyan accent, same radius. Match, don't improve.
- The stage strip is a design element, not a content one. It waits for S3. Cards ship with problem/system/outcome text only.

Rationale: positioning and content are what make the site read wrong. Both are fixable without touching a single color, and a correct site in the old skin beats a beautiful site that still says "Data Analyst."

---

---

## Sprint 0 — Triage

Stop the bleeding. Nothing here depends on any design or positioning decision, so it can ship immediately and independently.

### S0-1 · Delete inherited portfolio pages
**Files:** `src/pages/work/{parcel,pba,pokemoon,vertebrae}.md`

These came from the friend's portfolio this repo was forked from. They describe Web3/NFT/frontend work at Parcel, Vertebrae, Snap, and the Polkadot Blockchain Academy. They are not Nico's work, they are not linked from the homepage, and `@astrojs/sitemap` is submitting them for indexing.

This is both the source of the "screams web developer" read *and* a misrepresentation risk if anyone finds them.

**Acceptance:** Files deleted. `pnpm build` produces no `/work/parcel`, `/work/pba`, `/work/pokemoon`, `/work/vertebrae` routes. `dist/sitemap-0.xml` contains only intended URLs. Optionally request removal in Google Search Console.

### S0-2 · Empty the inherited shelves (do not delete)
**Files:** `src/data/art.ts`, `src/data/productions.ts`, `public/assets/Resume.pdf`

`art.ts` (24 entries) and `productions.ts` (12 entries) are fully populated with the original owner's content — a visual art gallery and live event productions. That content goes. **The section and data files stay**, because the three-shelf scaffold is being reused rather than rebuilt (see S2-0).

`Resume.pdf` is a byte-identical duplicate of `Nico-Avila-Resume.pdf` and can be deleted outright.

**Acceptance:** Both data arrays empty. Build passes with empty shelves. No inherited content remains anywhere in `src/`.

### S0-3 · Fix CardList key derivation
**File:** `src/components/CardList.astro`

Replace the hardcoded `["productions", "art", "projects"]` loop with DOM-derived keys:

```js
document.querySelectorAll<HTMLElement>('[id$="-list"]').forEach((list) => {
  const key = list.id.replace(/-list$/, "");
  const next = document.getElementById(`${key}-next`);
  const back = document.getElementById(`${key}-back`);
  // ...existing scroll logic
});
```

This is a hard blocker for S2. Without it, new shelves get no arrow behavior and the current loop throws on two missing elements.

**Acceptance:** No console errors on load. Arrows work on every rendered shelf. Verified with a temporary second shelf.

### S0-4 · Scrub placeholder data
**File:** `src/data/projects.ts`

- `link: "https://linkedin.com/in/your-profile"` on the marketing ETL entry — literal template placeholder in a public repo
- `link: "https://github.com/nicopxm"` + `// Replace with your repo link later` on the Kendrick entry
- `// You can add a placeholder image named ... later` comments throughout

**Acceptance:** No placeholder URLs or TODO comments remain. Every `link` resolves or is removed.

### S0-5 · Write a real README
**File:** `README.md`

Currently the unmodified Astro blog starter, including "🧑‍🚀 Seasoned astronaut? Delete this file." This is a public repo linked from a portfolio targeting technical roles.

**Acceptance:** README describes the actual project, stack, local setup, and content model.

---

## Sprint 1 — Identity layer

Everything that determines what a stranger sees first.

### S1-1 · Rewrite global SEO
**Files:** `src/config.ts`, `src/pages/index.astro`, `src/components/BaseHead.astro`

`SITE_DESCRIPTION` currently leads with "Data Analyst and Scrum Master ... ETL pipelines, predictive modeling ... Python, SQL, Tableau, and Agile methodologies." `index.astro` hardcodes the same title.

New description should carry keywords recruiters actually search: GTM Engineer, Solutions Consultant, Sales Engineer, lead scoring, CRM automation, outbound systems, HubSpot, Clay, n8n — alongside the technical proof. **No RevOps.**

**Acceptance:** `<title>`, meta description, OG title/description, and Twitter card all reflect GTM positioning. Verified in built HTML and in a link-preview debugger.

### S1-2 · Per-page SEO on work pages
**Files:** `src/layouts/BlogPost.astro`, all `src/pages/work/*.md`

`BlogPost.astro` destructures `frontmatter` but passes hardcoded values to `BaseHead`. Wire frontmatter through with fallbacks:

```astro
const { title, description, image } = Astro.props.frontmatter;
<BaseHead
  title={title ? `${title} — Nico Avila` : SITE_TITLE}
  description={description ?? SITE_DESCRIPTION}
  image={image ?? "assets/og-default.png"}
/>
```

Then add `title` and `description` frontmatter to each surviving work page.

**Acceptance:** Each work page has a unique title and description. Sharing any project link previews correctly.

### S1-3 · New OG image
**File:** `public/assets/og-default.png`

Replace `assets/coffee.jpeg`. Needs to carry the positioning line, not a coffee photo.

**Acceptance:** 1200×630, renders correctly in LinkedIn/Slack/X previews.

### S1-4 · Hero rewrite
**File:** `src/sections/Hero.astro`

Current hero is `Hola!👋` / "My name is Juan Avila" / "But you can call me Nico" / three emoji H3s stacked with staggered slide-in animations up to a 3750ms delay.

Changes:
- One positioning line replacing the three role H3s
- Remove emoji
- Reduce the animation stagger — a 4.9s reveal sequence delays the resume button past most first-impression windows
- Two resume buttons (GTM track default, data track secondary) or a role-aware toggle

**Blocked on:** ADR-001 hero line decision.

**Acceptance:** Positioning line visible without scroll on a 1366×768 viewport. Full hero content painted within 1.5s.

### S1-5 · About inversion
**File:** `src/sections/About.astro`

Current text frames sales as prehistory: *"That instinct was forged **before tech** in direct sales and property management."* Sales appears in paragraph two, after three paragraphs of data-analyst framing.

Rewrite so the dual background is presented as one deliberate competency. Keep the personal paragraph (calisthenics, cooking, the house in Querétaro, fostering dogs) — it's genuinely differentiating and reads human. Trim the Google PM Certificate / PSM I narrative down to a clause.

**Acceptance:** Sales experience appears in the first two sentences, framed as an asset.

---

## Sprint 2 — Architecture

### S2-0 · Rename and repurpose the shelves
**Files:** `src/sections/{Projects,Productions,Art}.astro`, `src/data/{projects,productions,art}.ts`, `src/data/nav.ts`

The inherited scaffold already supports three shelves. Keep the mechanism, swap the meaning.

| Current | Becomes | Section `id` | Data file |
|---|---|---|---|
| `Projects.astro` — "Data Engineering" | GTM & Automation | `gtm` | `data/gtm.ts` |
| `Productions.astro` — live events (dead) | Data & Engineering | `data` | `data/data-projects.ts` |
| `Art.astro` — art gallery (dead) | shelf 3 — name TBD | `lab` | `data/lab.ts` |
| — *(new)* | Client Case Studies | `case-studies` | derived, see S2-4 |

`Section.astro`, `CardList.astro`, and `Card.astro` need no structural change — they were already generic.

**Consider collapsing the wrappers.** The only thing the three section files hold beyond a `<Section />` call is a scoped `<style>` block for the glow border, and the glows are removed in S3. Calling `Section` four times directly from `index.astro` is fewer files and puts ordering in one place. Keep the wrappers only if per-shelf styling is wanted later.

**Section ids drive the scroll keys.** After S0-3, passing `id="gtm"` yields `gtm-list` / `gtm-next` / `gtm-back` automatically. `nav.ts` strings must match these ids exactly or anchor links break.

**Acceptance:** Four shelves render with correct titles and ids. Arrows work on all four. Nav anchors resolve. No references to `productions` or `art` remain outside git history.

### S2-1 · Extend the Project type
**File:** `src/types/index.ts`

```ts
export type Track = "gtm" | "case-study" | "data" | "lab";
export type Status = "live" | "in-progress" | "shipped";

export interface Project {
  name?: string;
  filename: string;
  link?: string;
  role?: string;
  dates?: string;
  tags?: string[];
  imageStyle?: CSSProperties;
  postID?: string;

  track: Track;
  order: number;
  problem?: string;
  system?: string;
  outcome?: string;
  status?: Status;
  metrics?: { label: string; value: string }[];
}
```

Additive. Existing entries compile once `track` and `order` are added.

**Acceptance:** `pnpm astro check` passes. All four existing entries have `track` and `order`.

### S2-2 · Shelf derivation
**File:** `src/data/shelves.ts` (new)

```ts
import projects from "./projects";
const byTrack = (t: Track) =>
  projects.filter(p => p.track === t).sort((a, b) => a.order - b.order);

export const gtm = byTrack("gtm");
export const caseStudies = byTrack("case-study");
export const dataWork = byTrack("data");
export const lab = byTrack("lab");
```

**Acceptance:** Sections import from `shelves.ts`. Order is explicit, never date-derived.

### S2-3 · Card copy structure
**File:** `src/components/Card.astro`

Currently renders `name` → `role` (cyan) → `dates` (gray) → tags. Role titles like "Machine Learning & Risk Analyst" are analyst convention and don't communicate business impact.

New order: `name` → `problem` → `system` → `outcome` → status badge → tags (small, last). `role`/`dates` become optional metadata.

Ships in the **current** card styling — `bg-slate-800`, cyan accent, existing radius and hover. No visual changes.

**Acceptance:** Cards render the three-line structure. Missing fields degrade gracefully. No layout break at 320px. Visually consistent with the untouched cards beside it.

### S2-4 · Case study card + section
**Files:** `src/components/CaseStudyCard.astro`, `src/sections/CaseStudies.astro` (both new)

Case studies need different treatment from projects — wider card, client name, a metrics row, and an in-progress state that shows diagnosis and plan without fabricating results.

Styling inherits from `Card.astro`. Structural difference only: width, the client line, and the metrics row.

**Acceptance:** Renders correctly with one in-progress entry and zero completed entries. Section hides entirely if the shelf is empty.

### S2-5 · Recompose homepage
**Files:** `src/pages/index.astro`, `src/data/nav.ts`, `src/sections/Projects.astro`

New order: Hero → GTM & Automation → Client Case Studies → Data & Engineering → [shelf 3] → About → Skills → Contact.

Shelf renames land in S2-0; this issue is ordering and nav only.

`nav.ts` strings must match section ids.

**Acceptance:** Anchor links work. Nav reflects new sections. Shelf 2 cards are visibly smaller/secondary but fully clickable.

### S2-6 · Skills taxonomy
**File:** `src/data/skills.ts`

Four current buckets, zero GTM stack. Add a new first bucket:

> HubSpot · Clay · n8n · Apollo · CRM Architecture · Lead Scoring · ICP Definition · Outbound Sequencing · Lifecycle Routing · Attribution · Data Enrichment

Reorder existing buckets: GTM → Data Engineering → Analytics → Specializations. Demote the Agile bucket, retitle it away from "Project Management & Agile" toward working-style framing.

**Acceptance:** GTM bucket renders first. Skills reflect keyword matches against the target job postings.

### S2-7 · Contact conversion path
**File:** `src/sections/Contact.astro`

Currently a `mailto:` styled as "Let's Get In Touch 🤝". A candidate positioning as someone who builds revenue conversion systems should not have zero conversion instrumentation on his own site.

Add a booking link (Cal.com / Calendly), keep email as secondary, and add lightweight analytics so the funnel is measurable.

This becomes an interview talking point: *"I instrumented my own portfolio and here's what the traffic told me."*

**Acceptance:** Booking link live. Page-level analytics firing. Resume downloads and booking clicks tracked as events.

---

## Sprint 3 — Visual redesign · PARKED

**Status:** deferred by decision. Revisit after S4 ships.
**Blocked on:** ADR-002 design direction.

Three directions were mocked (`directions.html` — ledger / console / signal) and none locked. The mockups and the notes below stay here for whenever this gets picked back up. Nothing in S0–S2 or S4 depends on this sprint.

### Current read

Dark slate cards on a WebGL animated background (Silk / PrismaticBurst via Three.js + OGL), neon glow borders on every section title, DaisyUI `cmyk` theme, emoji throughout, a selfie avatar. The register is *crypto-dev / gamer / personal blog*.

For a candidate selling revenue systems to sales leaders and SC hiring panels, that register works against the pitch. It also carries a heavy Three.js bundle for decoration.

### Proposed direction (to lock in ADR-002)

**Concept — instrument panel, not showreel.** The subject's world is pipelines, stages, scoring rubrics, routing rules, and CRM tables. Borrow that vernacular literally rather than decorating around it.

**Palette (4 values, no gradients):**
- Ink `#131820` — text and structure
- Paper `#F5F7F5` — cool off-white ground, not warm cream
- Slate `#61707E` — secondary text, rules, dividers
- Signal `#B4762A` — brass/ochre, used only for live data and active states

**Type:** condensed grotesque for display, a neutral body face, and a mono for metrics, stack tags, and stage labels. The mono earns its place because the content genuinely is systems and numbers — it encodes something true rather than being a stylistic tic.

**Signature element — the stage strip.** Every GTM card renders the actual pipeline it describes as a horizontal stage bar across the top: `source → enrich → score → route → outcome`, with completed stages in signal color. The card looks like the system it's describing. Case study cards use the same device for the engagement arc.

**Take one risk, keep everything else quiet.** The stage strip is the memorable thing. No glows, no gradients, no ambient animation elsewhere.

### S3-1 · Remove WebGL background
**Files:** `src/components/{BG,BGLoader,BGSkeleton,Background,Silk,PrismaticBurst}.*`, `astro.config.mjs`, `package.json`

Drop `three`, `@react-three/fiber`, `ogl`. The `manualChunks` config for `three` in `astro.config.mjs` also goes.

**Acceptance:** Build passes. Lighthouse performance recorded before/after. If the React integration has no remaining consumers, remove it too.

### S3-2 · Token system
**File:** `tailwind.config.cjs`, `src/styles/global.css`

Replace DaisyUI `cmyk` theme with explicit tokens from ADR-002.

**Acceptance:** No hardcoded hex values in component files. Section glow `<style>` blocks removed.

### S3-3 · Stage strip component
### S3-4 · Card + CaseStudyCard restyle
### S3-5 · Hero, About, Skills, Contact restyle
### S3-6 · Work page (BlogPost) restyle

**Quality floor for all of S3:** responsive to 320px, visible keyboard focus, `prefers-reduced-motion` respected, Lighthouse accessibility ≥ 95.

---

## Sprint 4 — Content backfill

### S4-1 · Lead Intelligence Pipeline
The anchor project — enrich → score against ICP → draft outreach → push to HubSpot in under 90s. Not currently on the site at all. Should be GTM shelf position 1.

Include the engineering artifacts: GitHub Projects sprints, ADRs, LOG.md, RETROS.md. For SC/SE panels, visible engineering discipline is part of the proof.

### S4-2 · Clay GTM table
Clay is the recurring skill gap identified across GTM Engineer postings. Its presence is both a keyword match and a credibility signal.

**ICP note:** the table currently targets companies hiring RevOps/GTM roles. With RevOps dropped as a personal target, decide whether the table's ICP still tracks — it can stay as-is (hiring signal is hiring signal) but the write-up shouldn't imply RevOps is what Nico is looking for.

**Scoping note:** REALITY.md scoping correction applies. Cost-per-lead logging, full HubSpot property mapping, dedupe enforcement, and score/summary/email push are Sprint 3–4 work on that project and do not yet exist. The write-up must not claim them.

### S4-3 · ComMotion case study
Adaptive dance nonprofit. Broken donation funnel, brand fragmentation across domains and social handles, no CRM connecting Mailchimp / Eventbrite / Kajabi / WordPress. Ships as `status: in-progress` with diagnosis and plan.

### S4-4 · BansheeRap case study
PR boat charter/brokerage. No CRM, no card payment rails, no conversion asset, ~30–40% close rate on low inquiry volume, $850+ average deal. Ships as `status: in-progress`.

Outcome numbers won't exist for a while. Show the diagnosis and the intervention plan — that's most of what an SC/SE interview tests anyway.

### S4-5 · Reframe existing projects
- **Marketing Analytics ETL** — promote to top of shelf 2 or move to GTM shelf. Ad-spend optimization is revenue work; the current copy buries that under pipeline mechanics.
- **Credit Risk Scorecard** — reframe as scoring-model work. The 58% default reduction is the strongest hard number on the site. The analogy to lead scoring should be stated explicitly rather than left for the reader to infer.
- **Momentum** — keep as-is, genuine engineering depth.
- **Kendrick Lamar** — moves to shelf 3 (`track: "lab"`). It was the strongest "portfolio bootcamp" signal while sitting among professional data work; on a shelf that is explicitly personal projects, a discography analysis reads as range instead of filler. Resolved by the four-shelf structure — no longer a demote-or-cut question.

### S4-6 · Resume routing
`resumes/Resume.md` is the single source. Two tracks exist per the job-search system (data/automation and sales). The site currently ships one PDF, duplicated.

**Acceptance:** Two distinct PDFs in `public/assets/`, correctly wired to the hero buttons.

---

## Dependency graph

```
S0-3 (CardList fix) ──── blocks ────► S2-4, S2-5
ADR-001 (positioning) ── blocks ────► S1-1, S1-4, S1-5
ADR-002 (design) ─────── blocks ────► all of S3
S2-1 (type) ──────────── blocks ────► S2-2, S2-3, S2-4
S4 content ──────────── independent ► can land any time after S2
```

S0 has no blockers. Ship it tonight.

---

## Open decisions

1. **Hero line** — job-title-forward or work-forward? Work-forward lets GTM, SC, and SE readers see themselves in it; title-forward is a cleaner keyword match. **Blocks S1-1, S1-4, S1-5 — decide first.** *(ADR-001)*
2. **Shelf 3 name.** "Hobby projects" undersells it. For GTM and SC roles, being a legible human is part of the hire. Candidates: *The Lab*, *Off the Clock*, *Side Quests*. Section `id` is `lab` regardless — the display title is what's open.
3. ~~**WebGL background**~~ — deferred with S3. Stays for now.
4. **Booking tool** — Cal.com or Calendly?
5. **Analytics** — Plausible, Umami, or PostHog? PostHog gives you funnel data worth talking about in interviews; the others are lighter.
