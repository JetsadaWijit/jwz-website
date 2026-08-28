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

### Task 6 — docs/https-guard-instructions

What landed: the one approved finding for this repository.
`.agents/knowledge/jwz-package-surface.md` claimed the Git platform operations
"resolve rather than throw" without qualification. The `jwz` package now throws at
configuration time when an endpoint key is missing or the endpoint is not `https://`,
so the claim was scoping a runtime contract over a startup one.

The "Shapes To Get Right" bullet now scopes the resolve-rather-than-throw contract to
what happens during the call, and a second bullet names the configuration throws as
the deliberate exception, with the instruction that a function page documents both.

That file is the checklist this site writes pages against, so leaving it as it was
would have taught the next page-writer to omit the throw from every platform page.

No file was added, moved or removed, so no index row changed. This repository's
version is untouched; whether the published-page changes warrant `wiki/logs/1/0/1/`
is still an open decision for the user.

## Follow-up: the collaborator duplication refactor

Separate work, recorded here only because it touches the same two pages. The plan
lives in the `jwz` repository at
`.agents/memory/tasks/github-collaborator-duplication.md`.

### Task 3 — fix/github-collaborators

What landed: `docs/github/invite/index.html` and `docs/github/remove/index.html`.
`jwz` moved the shared collaborator machinery into `src/github/collaborators.js`, so
each page's `Code` section now shows two blocks: the operation itself, which is a
wrapper supplying one HTTP verb, and the helper it delegates to, with a line of prose
between them naming the sibling operation and saying the helper is internal and not
importable on its own.

Verified: both blocks on both pages extracted, HTML unescaped, comment stripped and
compared line by line against `invite.js`, `remove.js` and `collaborators.js` in the
`jwz` working tree. Four of four match.

Fixed in passing: the invite page's `Logic` list claimed the operation "handles errors
and retries for each collaborator". It never retried — `build.js` is the only GitHub
module with a retry loop — so the page promised a resilience the code does not have.
It predates this task and sat in a page already being corrected for accuracy, so it
was fixed here rather than left. It now says the failure is recorded against its
collaborator and the rest continue, which is what the code does.

Noted, not changed: these pages store `<` unescaped inside `<pre><code>`, while
`.agents/skills/add-documentation-page.md` says to HTML escape everything inside
`<code>`. It renders correctly because every occurrence is followed by a space, and it
is true of every page on the site, so correcting it is its own task rather than a
detail of this one.
