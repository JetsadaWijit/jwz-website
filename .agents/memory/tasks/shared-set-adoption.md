---
name: memory-tasks-shared-set-adoption
description: Record of adopting the shared instruction set in jwz-website — the duplicate audit findings, what was deleted, and what was kept.
---

# Task: Adopt The Shared Instruction Set

## Goal

Remove everything `.agents/` duplicated from the shared set, keep only what belongs
to this repository, and rewire the entry points to resolve the shared set through
the `lxagents-agents-base` connector.

## Mode

Mode B — consumer. Confirmed by reading `agents://manifest.json` over the connector.

## Duplicate audit

Ran the audit in `{shared}/rules/duplicate-instruction-audit.md` against the shared
manifest. Ten local files shadowed a shared `name`. Every one was a **stale copy**:
the `name` matched, the normalized body hash did not, and no override row existed.

Four of them were byte-for-byte identical to the copies in the `jwz` repository —
`git/branching-strategy.md`, `git/pull-request-template.md`,
`prompts/branch-and-commit.md`, and `creators/index-creator.md` — which is the
cross-repository drift this architecture exists to stop.

Deleted:

| File | Shadowed |
|---|---|
| `.agents/git/branching-strategy.md` | `agents://git/branching-strategy.md` |
| `.agents/git/commit-conventions.md` | `agents://git/commit-conventions.md` |
| `.agents/git/pull-request-template.md` | `agents://git/pull-request-template.md` |
| `.agents/rules/directories.md` | `agents://rules/directories.md` |
| `.agents/rules/versioning.md` | `agents://rules/versioning.md` |
| `.agents/prompts/branch-and-commit.md` | `agents://prompts/branch-and-commit.md` |
| `.agents/creators/changelog-creator.md` | `agents://creators/changelog-creator.md` |
| `.agents/creators/index-creator.md` | `agents://creators/index-creator.md` |
| `.agents/creators/information-creator.md` | `agents://creators/information-creator.md` |
| `.agents/creators/instruction-creator.md` | `agents://creators/instruction-creator.md` |

Kept as local-only, matching nothing shared: `rules/repository.md`,
`docs/content-standards.md`, `frontend/page-structure.md`,
`knowledge/jwz-package-surface.md`, `deploy/github-pages.md`,
`skills/add-documentation-page.md`.

## Content rescued before deletion

Two deleted copies held facts true of this site rather than of the organization.
Those were moved into `rules/repository.md`, where they are local by definition:

* That this repository has **no package manifest**, so a version is claimed only by
  creating a `wiki/logs/` directory — and that it does not own the jwz package
  version quoted on the site.
* The commit scopes this repository actually uses (`site`, `github`, `gitlab`, `ai`,
  `mailer`, `agents`, `wiki`, `logs`, `readme`), and that a change to a published
  page's URL is what counts as breaking here.

Nothing else in the deleted files was worth promoting upstream; the shared versions
were the same rules, more current.

## Structural change

Every `INDEX.md` was removed and replaced by the centralized index set under
`.agents/index/`, per the setup procedure — `INDEX.md` is not a permitted filename.
Added `.agents/wiki/context/repository-map.md` and this memory seed, both of which
the adoption checklist requires and neither of which existed.

## Decisions

* No overrides declared. The override table in `.agents/index/root-index.md` is
  deliberately empty.
* No version bump. This is an instruction change; `1.0.0` and the existing
  `wiki/logs/1/0/0/` are untouched.
* Nothing under `docs/` was modified. The published site is unchanged.
* The matching change in `jwz` was done on a branch of the same name.
* `LXAgents/mcp-server` was not modified.
