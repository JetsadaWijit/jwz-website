---
name: agents-entry-point
description: Entry point for agents working in the jwz-website repository. Overview and routing only, never detailed rules.
---

# AGENTS

`jwz-website` is the documentation website for the
[jwz](https://github.com/JetsadaWijit/jwz) npm package. It is a static site served
by GitHub Pages from the `docs/` directory: hand written HTML, styled with the
Bootstrap CDN, with one page per documented jwz function and a shared footer.
There is no build step and no framework.

This file is an overview. It contains no rules of its own.

## Reading Order

1. Read this file, `AGENTS.md`.
2. Read the root [`INDEX.md`](INDEX.md), and nothing else at this stage.
3. From its routing table, pick the ONE index whose scope matches the task, and
   read that index.
4. If that index delegates to a child index, follow the one branch that matches.
5. Only then open the specific file or files you need.

## Routing Protocol

Route by reading index tables, not by reading files. Do NOT load every `INDEX.md`.
Do NOT bulk scan `.agents/**` to build a registry. Do NOT read an instruction body
until that instruction has been selected. Each index row's purpose text is what you
route on; the file body is what you load after choosing. This is the whole point of
the index tree, so never defeat it by reading ahead.

## Iron Rule: Separation of Concerns

* `AGENTS.md` and `README.md` are overviews. They must never carry detailed rules
  or detailed documentation.
* The root [`INDEX.md`](INDEX.md) is a router only. It lists other indexes. It
  must never contain rules, documentation, prose, or direct links to leaf content,
  and it must never be used to dictate or write files inside any subtree.
* [`.agents/INDEX.md`](.agents/INDEX.md) is the sole authority that indexes and
  manages `.agents/`. Nothing outside `.agents/` may dictate or write files inside
  it.
* [`wiki/INDEX.md`](wiki/INDEX.md) indexes `wiki/` and must never write into
  `.agents/`.
* `wiki/` is documentation about this repository, for the people who maintain it.
  `docs/` is the published website about the jwz package, for its users. Do not
  mix them.

## Placement

* New instructions go to `.agents/{folder}/{file}.md`.
* New documentation about this repository goes to `wiki/{folder}/{file}.md`.
* New published website pages go to `docs/`, under the shape defined in
  [`.agents/frontend/page-structure.md`](.agents/frontend/page-structure.md).
* The placement authority is
  [`.agents/rules/directories.md`](.agents/rules/directories.md).
* New or updated indexes follow
  [`.agents/creators/index-creator.md`](.agents/creators/index-creator.md).

## Discovery Protocol

While working, if you find an instruction worth adding, a new rule, or content
that belongs in an existing instruction file, you must NOT create or edit it on
your own. Present each finding to the user separately, each in its own code
block, including the proposed file path, `name`, `description`, and full body.
Let the user select which ones to apply. Create only what the user selects.

## Standing Conventions

Every branch and every commit follows
[`.agents/git/branching-strategy.md`](.agents/git/branching-strategy.md) and
[`.agents/git/commit-conventions.md`](.agents/git/commit-conventions.md). The
standing prompt is
[`.agents/prompts/branch-and-commit.md`](.agents/prompts/branch-and-commit.md).
The user never has to restate these.

## Version Rule

Never change the project version without explicit user approval. See
[`.agents/rules/versioning.md`](.agents/rules/versioning.md).
