---
name: agents-index
description: Sole authority and registry for the .agents tree in jwz-website. Lists every instruction file and the folder it belongs to.
---

# .agents Index

This file is the sole authority for the `.agents/` tree. It indexes every
instruction file in the repository. Nothing outside `.agents/` may manage,
dictate, or write files inside this tree.

Any file added to or removed from `.agents/` must be reflected in this index in
the same commit. Any new folder must also be registered in
[`rules/directories.md`](rules/directories.md) in that same commit.

Route by reading the `name` and `description` frontmatter of the files below.
Open a body only once that instruction has been selected.

## rules/

| File | Purpose |
|---|---|
| [`rules/directories.md`](rules/directories.md) | Placement authority for `.agents/`, `wiki/`, and `docs/`, including how to create a new folder when none fits. |
| [`rules/versioning.md`](rules/versioning.md) | Forbids self service version bumps and defines how to propose one. |
| [`rules/repository.md`](rules/repository.md) | Rules specific to this repository: what the site is, what may be introduced, and what may not. |

## git/

| File | Purpose |
|---|---|
| [`git/branching-strategy.md`](git/branching-strategy.md) | Branch naming, branch isolation, and pull request etiquette. |
| [`git/commit-conventions.md`](git/commit-conventions.md) | Conventional Commits format, types, scopes, and commit frequency. |

## prompts/

| File | Purpose |
|---|---|
| [`prompts/branch-and-commit.md`](prompts/branch-and-commit.md) | Standing prompt that keeps the branch and commit convention active for every task. |

## creators/

| File | Purpose |
|---|---|
| [`creators/instruction-creator.md`](creators/instruction-creator.md) | Creates and maintains instruction files under `.agents/`. |
| [`creators/information-creator.md`](creators/information-creator.md) | Creates and maintains documentation pages under `wiki/`. |
| [`creators/changelog-creator.md`](creators/changelog-creator.md) | Creates and maintains versioned logs under `wiki/logs/`. |

## docs/

| File | Purpose |
|---|---|
| [`docs/content-standards.md`](docs/content-standards.md) | Published pages must match the real jwz source. Never document an API that does not exist. |

## frontend/

| File | Purpose |
|---|---|
| [`frontend/page-structure.md`](frontend/page-structure.md) | Required HTML skeleton, Bootstrap CDN pin, footer, and directory shape for every published page. |

## deploy/

| File | Purpose |
|---|---|
| [`deploy/github-pages.md`](deploy/github-pages.md) | How the site is published, why links must be relative, and what to verify before pushing. |

## skills/

| File | Purpose |
|---|---|
| [`skills/add-documentation-page.md`](skills/add-documentation-page.md) | Step by step procedure for documenting a jwz function on the site. |
