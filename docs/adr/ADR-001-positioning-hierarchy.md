# ADR-001 — Positioning hierarchy, not a track split

**Status:** Accepted
**Date:** 2026-07-27
**Supersedes:** none

---

## Context

The site positioned as "Data Analyst & Scrum Master." Job search has pivoted to GTM Engineer and RevOps as primary targets, with Solutions Consultant and Sales Engineer secondary. The existing data and ML work should not be discarded.

The initial framing under consideration was a **clear split**: technical data on one side, GTM/sales on the other.

## Decision

**Reject the even split. Adopt a hierarchy with a visible second shelf.**

GTM Engineer, RevOps, Solutions Consultant, and Sales Engineer are not four distinct archetypes. They are one: *a technical person who owns revenue systems.* Presenting two equally-weighted tracks communicates "I am two half-people, pick the half you need," which is a weaker read than one identity backed by unusual technical depth.

The data work is not a competing track. It is **evidence** — the thing that makes the GTM claim credible rather than aspirational. Many RevOps candidates can claim CRM familiarity. Very few have shipped a production ETL pipeline and a credit scoring model that cut default rates 58%.

### Locked

- Primary identity: **GTM Engineer**
- Homepage order: Hero → GTM & Automation → Client Case Studies → Technical Foundations → About → Skills → Contact
- Technical Foundations stays **fully browsable** with complete detail pages. What changes is card size, page position, and copy weight.
- Client case studies get a **separate section** from self-directed projects. Different kind of proof — client engagement versus personal build — and separating them makes the GTM section read deeper than four project cards while giving before/after metrics a proper home.
- Scrum/Agile is demoted from identity to working-style signal. It stays in Skills; it leaves the hero.
- Card copy follows **problem → system → outcome**. Stack tags render last and small.

## Consequences

**Positive**
- A GTM reader never scrolls past data work to find revenue work.
- A data-role reader still finds everything, with complete write-ups intact.
- Case studies give SC/SE panels the "diagnose a business problem, fix it" evidence the site currently has none of.
- One coherent story instead of two competing ones.

**Negative**
- Pure data/analytics roles will see a site that leads with revenue systems. Accepted: those are not the target.
- Requires rewriting copy for four existing projects, not just reordering them.
- The site's content is ahead of its structure — the GTM shelf ships with two cards while the case studies are still early.

**Mitigation for the last point:** ship structure before content is complete. A GTM section with two strong cards beats a data-analyst site with four. In-progress case studies show diagnosis and plan under an explicit `in-progress` status rather than fabricating outcomes.

## Alternatives considered

**Even 50/50 split.** Rejected — dilutes identity, forces the reader to do the synthesis work that the site should be doing for them.

**Two-door homepage** ("I'm hiring for data" / "I'm hiring for GTM"). Rejected — adds a friction step before any proof is visible, and signals that the candidate hasn't decided what he is.

**Drop the data work entirely.** Rejected — it's the differentiator. Without it, the GTM claim rests on two in-flight projects and a sales background, which is a weaker position than most candidates in the pool.

---

## Amendment — 2026-07-27: four shelves, scaffold reused

The homepage order above listed three content sections. Revised to four, and the implementation approach changed from teardown to rename.

**Structure:**

1. GTM & Automation — `gtm`
2. Client Case Studies — `case-studies`
3. Data & Engineering — `data`
4. Shelf 3, display name TBD — `lab`

The inherited fork already carried a three-shelf scaffold (engineering projects / live productions / art gallery). Rather than delete the two unused shelves and build new ones, they get renamed and refilled. `Section.astro`, `CardList.astro`, and `Card.astro` are already generic and need no structural change.

**Why the fourth section survives the reshuffle.** Client case studies were nearly folded into the GTM shelf to keep the count at three. Rejected: self-directed builds prove the candidate can code; client work proves he can walk into a business, find the revenue leak, and close it. Those read very differently to an SC/SE or RevOps panel, and the before/after metrics row has no home on a standard project card.

**Side effect — the Kendrick question resolves itself.** Previously an open demote-or-cut decision, since a discography analysis sitting among professional data work is the strongest "portfolio bootcamp" signal on the site. On a shelf that is explicitly personal projects, the same artifact reads as range. It moves to `track: "lab"` and stays on the homepage.

**Naming note.** "Hobby projects" undersells shelf 3. For sales-adjacent roles, being a legible human is part of the hire, and the material here is unusually good. The section `id` stays `lab`; the display title is still open.

---

## Open sub-decision: the hero line

Not yet locked. Two directions:

**A. Work-forward** — *"I build the systems that find, score, and route revenue."* Titles handled in the subline. Lets RevOps, SC, and SE readers see themselves in it. Weaker as a literal ATS/keyword match.

**B. Title-forward** — *"GTM Engineer"* as the headline, with the dual background as subline. Cleaner keyword match, narrower read.

Resolve before S1-4.
