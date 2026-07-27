# ADR-003 — Target role set revised: RevOps out, SDR in

**Status:** Accepted
**Date:** 2026-07-27
**Amends:** ADR-001 (context and archetype reasoning)
**Note:** ADR-002 is reserved for visual design direction, currently parked.

---

## Context

ADR-001 was written against a target set of GTM Engineer and RevOps (primary), with Solutions Consultant and Sales Engineer (secondary). Its central argument was that all four collapse into one archetype — a technical person who owns revenue systems — and that the site should therefore present one identity rather than a split.

The target set has changed.

## Decision

**Revised targets, in priority order:**

1. **GTM Engineer** — primary
2. **Solutions Consultant / Sales Engineer / SDR** — primary
3. **Data Analyst / Data Engineer** — secondary

**RevOps is dropped entirely.** The term is removed from the site, metadata, skills taxonomy, and all planning docs. Not de-emphasized — removed.

## What this changes about ADR-001

ADR-001's "one archetype" claim held cleanly for GTM Engineer + RevOps + SC/SE. It does **not** hold for the revised set. SDR is a genuinely different role: outbound prospecting against activity and quota targets, evaluated on hunger, coachability, and volume tolerance rather than on systems-building.

The hierarchy decision from ADR-001 survives, but for a narrower reason. The site optimizes for **GTM Engineer and the technical half of tier 2 (SC/SE)**, because those are the roles where a portfolio actually influences the outcome.

**SDR is served differently.** SDR hiring runs on resume screen and call screen; there is no meaningful SDR portfolio genre. It is covered by the sales-track resume and by the About narrative carrying the US direct-sales background. The site is not restructured for it.

**Tier 3 is served by shelf 3 staying real** — full write-ups, browsable, just not first.

## Consequences

**Positive**
- Narrower keyword surface, but sharper. "GTM Engineer" and "Solutions Consultant" are cleaner claims than a four-title spread.
- Removes the tension where CRM-administration framing (RevOps-adjacent) competed with systems-building framing.

**Negative**
- **Loses inbound matching surface.** RevOps is a high-volume title, and much of the portfolio work — CRM architecture, lead scoring, HubSpot automation — is literally RevOps work. Dropping the keyword means those postings stop surfacing and stop matching. This is an accepted cost, not an oversight.
- **SDR creates an unresolved tension.** A portfolio heavy on technical systems can read to an SDR hiring manager as overqualified or mis-targeted — "this person wants a different job and will leave in six months." Mitigation is channel separation: lead with the sales resume for SDR applications and don't lead with the site.

**The bridge that does exist:** Nico builds outbound infrastructure and has carried a quota. "I build the prospecting systems and I can also run them" is a real and unusual SDR pitch. It belongs in the About narrative and the sales resume — not in the site's primary positioning, which stays GTM Engineer.

## Alternatives considered

**Keep RevOps as a secondary keyword while not targeting the role.** Rejected per explicit instruction. Worth recording that this was the lower-cost option — it would have preserved matching surface at no positioning cost, since the underlying work is identical.

**Restructure the site to serve SDR.** Rejected. No such genre exists, and building toward it would dilute the GTM Engineer positioning that tier 1 and the SC/SE half of tier 2 both depend on.
