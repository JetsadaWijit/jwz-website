---
name: agents-index
description: Index of the instruction files local to jwz-website. Shared conventions are not listed here; they resolve through the connector.
---

# Agents Index

**Scope:** `.agents/` instruction folders
**Parent:** [Root Index](root-index.md)

This index owns the instruction files that belong to `jwz-website` alone. Branching,
commits, pull requests, planning, and the creators are **not** here — they are
served by the `lxagents-agents-base` connector, and the route to them is the
`{shared}/index/root-index.md` row in [`root-index.md`](root-index.md).

Any file added to or removed from these folders is reflected here in the same
commit. Route on the Purpose column; open a body only once that instruction is
selected.

## rules/

| File | Purpose |
|---|---|
| [`../rules/repository.md`](../rules/repository.md) | Work inside this repository: layout, commands, prohibitions, and what it does not own. |

## docs/

| File | Purpose |
|---|---|
| [`../docs/content-standards.md`](../docs/content-standards.md) | Decide what a published page may claim, and check it against the source. |

## frontend/

| File | Purpose |
|---|---|
| [`../frontend/page-structure.md`](../frontend/page-structure.md) | Build a page with the right skeleton, styles, and directory shape. |

## design/

| File | Purpose |
|---|---|
| [`../design/design-system.md`](../design/design-system.md) | Style anything on the site: the tokens, glass surfaces, components, and chrome every page wears. |

## knowledge/

| File | Purpose |
|---|---|
| [`../knowledge/jwz-package-surface.md`](../knowledge/jwz-package-surface.md) | Check which jwz functions exist and which of them still need a page. |

## deploy/

| File | Purpose |
|---|---|
| [`../deploy/github-pages.md`](../deploy/github-pages.md) | Publish, and get link paths right for the project subpath. |

## skills/

| File | Purpose |
|---|---|
| [`../skills/add-documentation-page.md`](../skills/add-documentation-page.md) | Document a jwz function on the site, end to end. |
