---
name: agents-entry-point
description: Entry point for agents working in the jwz-website repository. Activation contract and routing only, never rule bodies.
---

# AGENTS

`jwz-website` is the documentation website for the
[jwz](https://github.com/JetsadaWijit/jwz) npm package. It is a static site served
by GitHub Pages from the `docs/` directory: hand written HTML, styled with the
Bootstrap CDN, with one page per documented jwz function and a shared footer. There
is no build step and no framework.

## Shared Instruction Set

The conventions this repository follows — branching, commits, pull requests, task
workflow, the creators — live in the shared instruction set served by the
**`lxagents-agents-base`** MCP server. This repository carries only what is its
own. **Resolve the shared set before doing any work:**

1. If the `lxagents-agents-base` connector is available in this session, that is
   the shared set. Refer to it as `{shared}`; its files are addressed as
   `agents://{folder}/{file}.md`.
2. Read `agents://manifest.json` once. It lists every shared file with its `name`,
   path and description — one read instead of twenty, and it is what the routing
   tables below are checked against.
3. Read `agents://index/root-index.md` and route from there. Do not bulk-read the
   set.
4. If the connector is not available, say so plainly and continue with this
   repository's local instruction set only. **Do not reconstruct the missing rules
   from memory, and do not clone or copy them into this repository.**

Never commit shared content into this repository. A file that can be read from
`agents://` must not exist here as a copy — see
`{shared}/rules/duplicate-instruction-audit.md`.

**Local overrides shared.** A file in `.agents/` whose `name` matches a shared
file's `name` replaces that shared file entirely for this repository. The current
overrides are listed in
[`.agents/index/root-index.md`](.agents/index/root-index.md).

## Auto-Activation

The instruction set is **always active** — the local `.agents/` set and the shared
set together. It applies to every task in this repository whether or not the user
mentions it, links to it, or asks for it. Treat these files as standing orders, not
as optional reference material.

At the start of every session, before doing any work:

1. Read `AGENTS.md` (this file).
2. Resolve the shared set per the bootstrap above.
3. Read [`.agents/index/root-index.md`](.agents/index/root-index.md).
4. Read [`.agents/index/memory-index.md`](.agents/index/memory-index.md) and load
   only the memory rows whose scope matches the current request, so you continue
   prior work instead of restarting it.
5. Match the request against the trigger table below and load the instruction files
   it names, local first, shared second.

If a rule conflicts with a habit, a default, or a template you would otherwise
follow, the rule wins. If it conflicts with an explicit instruction from the user in
this session, the user wins — and you say out loud which rule you are setting aside.

## Trigger Table

The authority behind this table is `{shared}/rules/auto-activation.md`. Every shared
row is reproduced unchanged and in order; this repository's own instructions are
appended below them. Any row whose file is overridden locally resolves to the local
copy; the override table in
[`.agents/index/root-index.md`](.agents/index/root-index.md) is the list.

| When you are about to… | Load and obey |
|---|---|
| Take in any new request of more than one step | `{shared}/planning/task-workflow.md` |
| Create a branch | `{shared}/git/branching-strategy.md` |
| Write a commit message | `{shared}/git/commit-conventions.md` |
| Open or update a pull request | `{shared}/git/pull-request-template.md` |
| Write **any** commit, tag, PR, comment, or file that will be committed or posted | `{shared}/rules/no-session-links.md` |
| Notice a rule worth adding, or content worth adding to an existing instruction | `{shared}/rules/discovery-protocol.md` |
| Wonder whether something is local or shared, or need to override a shared rule | `{shared}/rules/shared-instructions.md` |
| Decide where a new file goes | `{shared}/rules/directories.md` |
| Resolve, connect, or fail to reach the shared set | `{shared}/rules/mcp-connector.md` |
| Add, move, rename, or delete any file in a set or in `wiki/` | `{shared}/creators/index-creator.md` |
| Write a rule or instruction | `{shared}/creators/instruction-creator.md` |
| Write documentation, an SOP, or a domain guideline | `{shared}/creators/information-creator.md` |
| Change code or structure that a document describes | `{shared}/rules/change-propagation.md` |
| Record progress, a decision, or session state | `{shared}/creators/memory-creator.md` |
| Touch anything that carries a version number | `{shared}/rules/versioning.md` |
| Record a release | `{shared}/creators/changelog-creator.md` |
| Report finished work back to the user | `{shared}/rules/work-summary.md` |
| Need project facts, commands, or orientation | [`.agents/wiki/context/repository-map.md`](.agents/wiki/context/repository-map.md) |
| Do anything at all in this project | [`.agents/rules/repository.md`](.agents/rules/repository.md) |
| Write or change a published page under `docs/` | [`.agents/frontend/page-structure.md`](.agents/frontend/page-structure.md) |
| Style a page, pick a color, or build any visual element of the site | [`.agents/design/design-system.md`](.agents/design/design-system.md) |
| Decide what a page may claim about the jwz package | [`.agents/docs/content-standards.md`](.agents/docs/content-standards.md) |
| Check which jwz functions exist or still need a page | [`.agents/knowledge/jwz-package-surface.md`](.agents/knowledge/jwz-package-surface.md) |
| Publish, or write a link between pages of this site | [`.agents/deploy/github-pages.md`](.agents/deploy/github-pages.md) |
| Document a jwz function on the site, end to end | [`.agents/skills/add-documentation-page.md`](.agents/skills/add-documentation-page.md) |

## Reading Order

1. Read this file, `AGENTS.md`.
2. Resolve the shared set per the bootstrap above.
3. Read [`.agents/index/root-index.md`](.agents/index/root-index.md), and nothing
   else at this stage.
4. From its routing table, pick the ONE index whose scope matches the task, and read
   that index.
5. If that index delegates to a child index, follow the one branch that matches.
6. Only then open the specific file or files you need.

## Routing Protocol

Route by reading index tables, not by reading files. Do NOT load every index. Do NOT
bulk-scan either set to build a registry — `agents://manifest.json` already is one.
Do NOT read an instruction body until that instruction has been selected. Each index
row's purpose text is what you route on; the file body is what you load after
choosing. The standing exception is
[`.agents/index/memory-index.md`](.agents/index/memory-index.md), read every session
because continuity depends on it.

## Iron Rule

* `AGENTS.md` and `README.md` are overviews and must never carry detailed rules or
  documentation.
* [`.agents/index/root-index.md`](.agents/index/root-index.md) is a **router only**.
  It lists other indexes. It must never contain rules, documentation, prose, or
  direct links to leaf content.
* Each index owns exactly one scope and writes outside it never.
* **Local carries only what is local.** A convention true for more than this
  repository belongs in the shared set — propose it there, do not copy it here.
* `wiki/` is documentation about this repository, for the people who maintain it.
  `.agents/wiki/` is the same subject written for agents. `docs/` is the published
  website about the jwz package, for its users. None of the three duplicates
  another.
* **One subject per file.** A cross-cutting rule gets its own file and is linked, not
  pasted into a file about something else.
* An index never teaches. The moment it explains something, that content belongs in a
  real file.

## Placement

* Local instructions go to `.agents/{folder}/{file}.md`.
* Human documentation about this repository goes to `wiki/{folder}/{file-name}.md`.
* Agent knowledge goes to `.agents/wiki/{type}/{file-name}.md`.
* Memory goes to `.agents/memory/{type}/{file-name}.md`.
* Indexes go to `.agents/index/{scope}-index.md`. No `INDEX.md`, anywhere, ever.
* Published website pages go to `docs/`, in the shape defined by
  [`.agents/frontend/page-structure.md`](.agents/frontend/page-structure.md), and
  wearing the visual language defined by
  [`.agents/design/design-system.md`](.agents/design/design-system.md).
* The visual language — tokens, glass surfaces, components, chrome — goes to
  `.agents/design/{file}.md`. It is never restated in a page, in `README.md`, or in
  either wiki.
* Anything universal goes to the shared set, never here.

The placement authority is `{shared}/rules/directories.md`.

## Discovery Protocol

While working, if you notice an instruction worth adding — a new rule, or new
content for an existing instruction file — do NOT create or edit it yourself.
Collect the findings, and when the task is done present them to the user:

* one finding per message block, each in its own code block;
* state the target set — `local` (this repository) or `shared` (the organization's
  instruction set served by the `lxagents-agents-base` connector);
* include the proposed file path, `name`, `description`, and the full proposed
  body;
* explain in one line why it is worth adding.

Then let the user select which findings to apply. Create only the selected ones.
Never batch-apply, never apply silently. A `shared` finding is never written from a
consuming repository — it is reported so it can be raised against the shared set.

**Scope of this gate:** it covers instruction files in either set. Documentation
pages under `wiki/` and `.agents/wiki/` may be written when the facts are real and
verified. Memory under `.agents/memory/` is written freely and automatically — see
`memory-policy.md`.

The source of truth for this block is `{shared}/rules/discovery-protocol.md`.

## Version Rule

Never change the project version without explicit user approval. This repository has
no package manifest, so its version is claimed entirely by creating a new
`wiki/logs/{Major}/{Minor}/{Patch}/` directory — which makes the rule stricter here,
not looser. It also does not own the jwz package version quoted on the site. See
`{shared}/rules/versioning.md`.

## No Session Links

Never write a link or identifier pointing at an assistant or tool session into a
file, commit message, commit trailer, branch name, tag, pull request, or comment. If
your tooling appends one by default, strip it before committing or posting — see
`{shared}/rules/no-session-links.md`.
