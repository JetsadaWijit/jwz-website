---
name: memory-task-silver-glass-design-system
description: Adopting the Silver Glass design system — the task list, its branches and pull requests, and what each one landed.
---

# Task — Silver Glass Design System

## Goal

Give `jwz-website` one visual language instead of ad-hoc Bootstrap utility classes
copied between pages, and make that language something an agent is routed to rather
than something it has to infer from an existing page.

## Objective

`.agents/design/design-system.md` exists and `AGENTS.md` routes to it; the CSS, JS,
and partials it describes exist under `docs/`; every published page renders through
them with no external CDN.

## Detail

* No root `DESIGN.md` — the document lives only in `.agents/design/`, per the user's
  explicit instruction and the Iron Rule against duplicated instruction content.
* Each task merges before the next begins, at the user's instruction. This replaces
  the stacked-branch model in `{shared}/planning/task-workflow.md` §C, so every task
  branches from an already-updated `master`.
* The site keeps its no-build-step, hand-written-HTML character. The design system
  removes the Bootstrap CDN rather than adding a dependency.

## Tasks

| # | Title | Branch | Pull request | Status |
|---|---|---|---|---|
| 1 | Silver Glass design system instruction | `docs/design-system` | #8 | merged |
| 2 | Silver Glass assets | `feat/silver-glass-assets` | #9 | merged |
| 3 | Migrate the published pages | `refactor/site-silver-glass` | #10 | merged |

## Log

* **Task 1** — added `.agents/design/design-system.md`, registered it in
  `agents-index.md`, and wired its trigger row and placement rule into `AGENTS.md`.
* **Task 2** — added `docs/css/main.css`, `docs/css/shared/layout.css`,
  `docs/css/shared/components.css`, `docs/js/site.js`, and the two partials.
  Verified over HTTP in headless Chromium at 1280px and at a true 360px viewport.
* **Task 3** — migrated all fourteen function pages with a script so the code
  samples and prose carried over byte-for-byte, rewrote `docs/index.html` as a hero
  and card grids, and deleted `docs/footer.html`. All fifteen pages verified to
  inject the chrome, mark the active nav entry, and load no Bootstrap; all 120
  internal links resolve.

## Decisions worth not re-litigating

* **No root `DESIGN.md`.** The document lives only at
  `.agents/design/design-system.md`; `AGENTS.md` points at it. Asked and answered —
  do not "restore" a root copy.
* **`<title>` and H1 no longer match verbatim.** A page titled
  `buildRepos - GitHub Documentation` now renders an `.eyebrow` of "GitHub" above an
  H1 of `buildRepos`. Together they say the same thing; separately they do not, which
  is why `page-structure.md` needs the pending edit.

## Open

* `.agents/frontend/page-structure.md` and `.agents/rules/repository.md` still
  mandate the pinned Bootstrap CDN and an inline `<style>` block. Task 3 made both
  false. They are instruction files, so `{shared}/rules/change-propagation.md` forbids
  rewriting them here — both were reported as discovery findings and are waiting on
  the user's selection. **Until they land, `page-structure.md` will mislead any agent
  routed to it.**
* The shared `{shared}/rules/directories.md` folder table has no `design/` row. Also a
  discovery finding, raised against the shared set rather than written from here.
* Nothing verifies the site automatically. The checks run in task 3 — link
  resolution, chrome injection, no-CDN — were run by hand and left no artifact.
