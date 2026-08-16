---
name: memory-state-repository-state
description: Current known state of jwz-website — what is published, what is not, how the shared set resolves, and the next obvious step.
---

# Repository State

## What exists

* A static site under `docs/`, published by GitHub Pages at the project subpath
  `/jwz-website/`, at version `1.0.0`, MIT licensed.
* Fifteen pages: a landing page, three AI provider pages, five GitHub operation
  pages, five GitLab operation pages, and the Outlook mailer page. That matches the
  six subpath exports the `jwz` package publishes.
* The **Silver Glass** design system: defined in `.agents/design/design-system.md`,
  implemented as `docs/css/main.css`, `docs/css/shared/{layout,components}.css`,
  `docs/js/site.js`, and `docs/partials/{header,footer}.html`. Every page renders
  through it. The Bootstrap CDN link, the per-page inline `<style>` blocks, and
  `docs/footer.html` are gone, and the site now makes no external network request.
* A human wiki under `wiki/` with overview, architecture, setup, and one version log
  directory at `wiki/logs/1/0/0/`.
* A local instruction set under `.agents/` covering only what is specific to this
  site: repository rules, page structure, content standards, the jwz package surface
  checklist, GitHub Pages deployment, and the add-a-page skill.

## What does not exist

* **No package manifest, no dependencies, no build step, no test runner.** By
  policy, not by omission — the site is hand-written HTML on purpose.
* No CI workflow. Publishing is whatever GitHub Pages does with `docs/` on push.
* No generator or templating. A new page is still made by copying an existing one —
  but the chrome and the styling now come from shared files, so what has to be
  copied correctly is the `<head>` (both globals, three stylesheets, `site.js`) and
  the two mount points.

## How the shared set resolves

Mode B, consumer. The shared conventions — branching, commits, pull requests, task
workflow, the creators, the directory architecture — are served by the
`lxagents-agents-base` MCP connector and read over `agents://`. Nothing from that set
is stored in this repository, and no local file overrides one.

## Next obvious step

Two instruction files were left describing the pre-Silver-Glass site and are now
false: `.agents/frontend/page-structure.md` still prescribes the pinned Bootstrap
skeleton and a per-page inline `<style>` block, and
`.agents/rules/repository.md` still names the Bootstrap CDN as the one permitted
external dependency. `{shared}/rules/change-propagation.md` forbids rewriting an
instruction from inside the task that made it stale, so both were reported as
discovery findings and await approval. Until they land, an agent routed to
`page-structure.md` will build a page that does not match the site.

Beyond that, the standing risk is drift between
the site and the package: this repository owns no facts about `jwz`, so any page can
fall behind a change made in that repository without anything here signalling it.
`.agents/knowledge/jwz-package-surface.md` is the checklist to re-verify against the
`jwz` source whenever the package changes.
