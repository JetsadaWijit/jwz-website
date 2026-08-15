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

| # | Title | Branch | Status |
|---|---|---|---|
| 1 | Silver Glass design system instruction | `docs/design-system` | in progress |
| 2 | Silver Glass assets | `feat/silver-glass-assets` | not started |
| 3 | Migrate the published pages | `refactor/site-silver-glass` | not started |

## Log

* **Task 1** — added `.agents/design/design-system.md`, registered it in
  `agents-index.md`, and wired its trigger row and placement rule into `AGENTS.md`.

## Open

* `.agents/frontend/page-structure.md` and `.agents/rules/repository.md` still
  mandate the pinned Bootstrap CDN and an inline `<style>` block. Task 3 makes both
  false. They are instruction files, so `{shared}/rules/change-propagation.md` forbids
  rewriting them here — they are reported as discovery findings instead.
* The shared `{shared}/rules/directories.md` folder table has no `design/` row. Also a
  discovery finding, raised against the shared set rather than written from here.
