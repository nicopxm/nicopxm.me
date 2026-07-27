# nicopxm.me

Personal portfolio site for Nico Avila. Static Astro build, deployed at [nicopxm.me](https://nicopxm.me).

## Stack

| Layer | Choice |
| :--- | :--- |
| Framework | Astro 4 (static output) |
| UI islands | React 18, Svelte 4 |
| Styling | Tailwind CSS + DaisyUI (`cmyk` theme) |
| Background | WebGL via Three.js / `@react-three/fiber` / OGL |
| Content | Markdown + MDX |
| Images | `astro:assets` with Sharp |
| SEO | `@astrojs/sitemap`, `@astrojs/rss` |

## Local setup

Node version is pinned in `.nvmrc`. With nvm: `nvm use`.

```bash
pnpm install  # see note below — pnpm only
pnpm dev      # dev server on http://localhost:4321, bound to --host
pnpm build    # static build to ./dist
pnpm preview  # serve the built output
```

### Install with pnpm, run with either

`pnpm-lock.yaml` is the authoritative lockfile. **Install only with pnpm** — `npm install` and `npm ci` fail on a peer conflict, because `@astrojs/tailwind@3.x` declares a peer of `astro@^2.5.0` while this project runs `astro@^4`. pnpm resolves it; npm treats it as fatal.

If pnpm isn't on your PATH, run it through npx — no global install needed:

```bash
npx pnpm install
```

Once `node_modules/` exists, the scripts run under either tool — `npm run dev` and `pnpm dev` are equivalent, since running a script only shells out to `node_modules/.bin/astro`. The package manager matters for *resolving* dependencies, not for *running* them.

## Content model

Page content is data-driven. Adding or changing work means editing TypeScript in `src/data/`, not markup.

### Shelves

A *shelf* is a horizontally scrolling row of cards. Each one is a `Project[]` in `src/data/`, rendered through a thin section wrapper:

| Data file | Section | Status |
| :--- | :--- | :--- |
| `projects.ts` | `sections/Projects.astro` | live |
| `productions.ts` | `sections/Productions.astro` | empty, not rendered |
| `art.ts` | `sections/Art.astro` | empty, not rendered |

`Productions` and `Art` are imported by `src/pages/index.astro` but not placed in the layout body. The scaffold is retained deliberately — it gets renamed and repurposed rather than rebuilt (see `SPRINT-PLAN.md`, S2-0).

The rendering chain is generic:

```
sections/*.astro → Section.astro → CardList.astro → Card.astro
```

`Section.astro` takes an `id` and `title`. That `id` drives the DOM ids for scroll behavior (`<id>-list`, `<id>-next`, `<id>-back`), which `CardList.astro` derives at runtime, so new shelves get arrow navigation with no extra wiring. Anchor strings in `src/data/nav.ts` must match section ids exactly.

### The `Project` shape

Defined in `src/types/index.ts`:

```ts
interface Project {
  name?: string;
  filename: string;      // resolved against src/assets/ — see below
  link?: string;         // ignored when postID is set
  role?: string;
  dates?: string;
  tags?: string[];
  imageStyle?: CSSProperties;
  postID?: string;       // links the card to src/pages/work/<postID>.md
}
```

A card links to `/work/<postID>` when `postID` is present, and falls back to `link` otherwise. Setting both means `link` is inert.

### Images — two directories, two rules

This trips people up:

- **Card images** (`filename` in a data file) resolve through an `import.meta.glob` over **`src/assets/`** in `Card.astro`. A missing file is a **build-time throw**, not a broken image.
- **Images inside markdown work pages** are plain URL references and must live in **`public/assets/`**.

### Work pages

Detail pages are markdown in `src/pages/work/`, one per `postID`:

```markdown
---
layout: ../../layouts/BlogPost.astro
---
```

### Other data

- `src/data/skills.ts` — skills, grouped by category
- `src/data/nav.ts` — header anchor list

## Project layout

```
public/assets/     # PDFs and images referenced by URL from markdown
src/
  components/      # Card, CardList, BaseHead, background components
  sections/        # Hero, Projects, About, Skills, Contact, Section
  layouts/         # MainLayout, BlogPost
  pages/           # index.astro, work/*.md
  data/            # projects, productions, art, skills, nav
  assets/          # card images (build-time resolved)
  types/           # Project interface
  styles/          # global.css
astro.config.mjs
tailwind.config.cjs
```

## Notes

- `src/config.ts` holds `SITE_TITLE` and `SITE_DESCRIPTION` used by `BaseHead.astro`.
- `three` and `@react-three/fiber` are split into their own Rollup chunk in `astro.config.mjs`.
- Ongoing repositioning work is tracked in `SPRINT-PLAN.md` and the `ADR-*.md` files.
