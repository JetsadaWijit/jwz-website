---
name: agents-index
description: Index of the agent instruction set for jwz-website. Sole authority for the .agents tree.
---

# Agents Index

**Scope:** `.agents/`
**Parent:** [Root Index](../INDEX.md)

This index is the sole authority for the `.agents/` tree. Nothing outside
`.agents/` may manage, dictate, or write files inside it. Any file added to or
removed from `.agents/` is reflected here in the same commit; see
[`creators/index-creator.md`](creators/index-creator.md).

Route on the Purpose column. Open a body only once that instruction is selected.

## rules/

| File | Purpose |
|---|---|
| [`rules/directories.md`](rules/directories.md) | Decide where a new file goes, in any of the three trees. |
| [`rules/repository.md`](rules/repository.md) | Work inside this repository: layout, commands, prohibitions. |
| [`rules/versioning.md`](rules/versioning.md) | Handle anything that would change the version. |

## git/

| File | Purpose |
|---|---|
| [`git/branching-strategy.md`](git/branching-strategy.md) | Name a branch or decide whether to open a new one. |
| [`git/commit-conventions.md`](git/commit-conventions.md) | Write a commit message. |
| [`git/pull-request-template.md`](git/pull-request-template.md) | Open a pull request: title, body, and what must never appear in it. |

## creators/

| File | Purpose |
|---|---|
| [`creators/instruction-creator.md`](creators/instruction-creator.md) | Add or change a file under `.agents/`. |
| [`creators/information-creator.md`](creators/information-creator.md) | Add or change a page under `wiki/`. |
| [`creators/changelog-creator.md`](creators/changelog-creator.md) | Add or change a log under `wiki/logs/`. |
| [`creators/index-creator.md`](creators/index-creator.md) | Add, change, split, or audit any `INDEX.md`. |

## prompts/

| File | Purpose |
|---|---|
| [`prompts/branch-and-commit.md`](prompts/branch-and-commit.md) | The standing branch and commit checklist, always active. |

## skills/

| File | Purpose |
|---|---|
| [`skills/add-documentation-page.md`](skills/add-documentation-page.md) | Document a jwz function on the site, end to end. |

## docs/

| File | Purpose |
|---|---|
| [`docs/content-standards.md`](docs/content-standards.md) | Decide what a published page may claim, and check it against the source. |

## frontend/

| File | Purpose |
|---|---|
| [`frontend/page-structure.md`](frontend/page-structure.md) | Build a page with the right skeleton, styles, and directory shape. |

## knowledge/

| File | Purpose |
|---|---|
| [`knowledge/jwz-package-surface.md`](knowledge/jwz-package-surface.md) | Check which jwz functions exist and which of them still need a page. |

## deploy/

| File | Purpose |
|---|---|
| [`deploy/github-pages.md`](deploy/github-pages.md) | Publish, and get link paths right for the project subpath. |
