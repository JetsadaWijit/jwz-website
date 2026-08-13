---
name: memory-state-repository-state
description: Current known state of jwz-website — what is published, what is not, how the shared set resolves, and the next obvious step.
---

# Repository State

## What exists

* A static site under `docs/`, published by GitHub Pages at the project subpath
  `/jwz-website/`, at version `1.0.0`, MIT licensed.
* Fifteen pages plus a shared footer fragment: a landing page, three AI provider
  pages, five GitHub operation pages, five GitLab operation pages, and the Outlook
  mailer page. That matches the six subpath exports the `jwz` package publishes.
* A human wiki under `wiki/` with overview, architecture, setup, and one version log
  directory at `wiki/logs/1/0/0/`.
* A local instruction set under `.agents/` covering only what is specific to this
  site: repository rules, page structure, content standards, the jwz package surface
  checklist, GitHub Pages deployment, and the add-a-page skill.

## What does not exist

* **No package manifest, no dependencies, no build step, no test runner.** By
  policy, not by omission — the site is hand-written HTML on purpose.
* No CI workflow. Publishing is whatever GitHub Pages does with `docs/` on push.
* No generator or templating. Consistency between pages is a review concern, since
  a new page is made by copying an existing one.

## How the shared set resolves

Mode B, consumer. The shared conventions — branching, commits, pull requests, task
workflow, the creators, the directory architecture — are served by the
`lxagents-agents-base` MCP connector and read over `agents://`. Nothing from that set
is stored in this repository, and no local file overrides one.

## Next obvious step

Nothing is outstanding on the instruction system. The standing risk is drift between
the site and the package: this repository owns no facts about `jwz`, so any page can
fall behind a change made in that repository without anything here signalling it.
`.agents/knowledge/jwz-package-surface.md` is the checklist to re-verify against the
`jwz` source whenever the package changes.
