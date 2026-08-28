---
name: memory-tasks-claude-md-pointer
description: Record of adding .claude/CLAUDE.md as an import of the root AGENTS.md, so Claude Code reads the same instructions as every other agent.
status: done
---

# Task: Point Claude Code At The Root AGENTS.md

## 2026-08-27

### Task 1 — chore/claude-md-pointer

**Why.** Claude Code reads `CLAUDE.md` and does not read `AGENTS.md`. This site's
instructions live in the root `AGENTS.md`, so Claude Code was reading none of them.
The documented bridge is a `CLAUDE.md` that imports the other file.

What landed: `.claude/CLAUDE.md`, containing the single import `@../AGENTS.md` and a
maintainer comment. Both `./CLAUDE.md` and `./.claude/CLAUDE.md` are valid project
instruction locations; the user asked for the second.

**The import path is `../AGENTS.md`, not `AGENTS.md`.** Claude Code resolves a
relative import against the file that contains it, not against the working directory,
so `@AGENTS.md` here would resolve to `.claude/AGENTS.md` and import nothing. Checked
against the documentation rather than assumed, because a wrong path fails silently.

**Nothing was copied**, so there is no second set of instructions to go stale.

Nothing was excluded from packaging, unlike the `jwz` side of this change: this
repository publishes `docs/` through GitHub Pages and has no package manifest, so a
new top level directory does not reach anything published. `.claude/` sits beside
`.agents/` and `wiki/`, which are equally not part of the site.

No version carrier was touched.
