---
name: memory-tasks-https-enforcement
description: This site's slice of the https enforcement work — re-syncing the ten platform pages with the guarded jwz source.
---

# Task: Re-sync The Platform Pages With The Guarded jwz Source

## Why this repository is involved

The `jwz` package added a checked https invariant to its ten GitHub and GitLab
modules. Every page under `docs/github/` and `docs/gitlab/` quotes that module's
source in its `Code` section, so the change landed here as stale published code.
`.agents/docs/content-standards.md` treats a page that disagrees with the source as
a defect rather than a style issue, which is why this is a `fix` and not a `docs`
change.

The plan for the whole request lives in the `jwz` repository, at
`.agents/memory/tasks/https-enforcement.md`. This file records only the part that
happened here — memory is local to its repository and is never copied between them.

## 2026-08-27

### Task 3 — fix/https-enforcement

What landed: the ten platform pages under `docs/github/` and `docs/gitlab/`, each
re-synced with its module — the `../essential` import, the new
`requireHttpsUrl(config.<key>, '<key>')` line beside the existing key-exists guard,
and the request URL resolved through `resolveSecureUrl`. Each page's `Logic` list
gained a matching bullet, so the prose and the code agree.

Verified: every page's `Code` block was extracted, HTML-unescaped, stripped of
comments and compared line by line against the real module in the `jwz` working
tree. Ten of ten match. Tag balance was checked across every page under `docs/`
afterwards, and nothing is unbalanced.

Fixed in passing: `docs/github/invite/index.html` carried
``Authorization: \`Bearer ${token}\``` — escaped backticks that published
JavaScript a reader could not copy. It predates this task, every sibling page
writes the line correctly, and it sat inside a `Code` block already being
rewritten, so it was corrected here rather than left as a known-wrong page.

Deliberately unchanged, both false positives for a scheme rewrite:

* `docs/js/site.js` — `xmlns="http://www.w3.org/2000/svg"` is an XML namespace
  name, a constant identifier that is never dereferenced. Rewriting it to `https`
  breaks SVG rendering.
* `wiki/environments/setup.md` — `http://localhost:8000/` is the loopback address
  of `python3 -m http.server`, which does not speak TLS.

Left stale on purpose, pending the user's selection: `.agents/knowledge/jwz-package-surface.md`
says the platform operations "resolve rather than throw", which does not account for
the configuration-time throws. That file is an instruction and it states outright
that correcting it is a discovery finding, so it was reported rather than edited.
