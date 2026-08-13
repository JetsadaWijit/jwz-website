---
name: content-standards
description: Every published page must match the real jwz source. Never document a function, parameter, or return value that does not exist.
---

# Content Standards

This site has no source of truth of its own. Everything it states is a claim about
the [jwz](https://github.com/JetsadaWijit/jwz) package, and every claim must be
checked against that package's source before it is published.

## Read The Source First

Before writing or editing a page, open the actual file in the jwz repository:

| Page area | Source |
|---|---|
| `docs/github/{operation}/` | `src/github/{operation}.js` |
| `docs/gitlab/{operation}/` | `src/gitlab/{operation}.js` |
| `docs/ai/{provider}/` | `src/ai/{provider}.js` |
| `docs/util/mail/outlook/send/` | `src/mailer/outlook/send.js` |

Confirm the function is exported from that folder's `index.js` and reachable
through the `exports` map in `package.json`. A function that is not exported is
not public and must not be documented.

## Never Invent

* Never document a function, parameter, option, or return field that does not
  exist in the source.
* Never infer a signature from another provider's page. The three AI clients look
  alike, and the GitHub and GitLab clients do not: GitLab exposes separate group
  and personal variants where GitHub does not.
* Never carry over wording from an older page without re-reading the source. A
  stale page is a wrong page.
* If the source is unclear, ask the user. Do not guess and do not describe what
  the function looks like it should do.

## Required Content Per Page

Each function page states, in this order:

1. The function name and the area it belongs to, in the title and the H1.
2. The code, in a `Code` section, matching the current source.
3. Every parameter, in order, with its type and what it means.
4. What the call resolves with, including the `{ success, message, ... }` shape
   for the Git platform operations and what a failure resolves with.
5. A usage example that a reader can copy, importing through the real subpath
   export, for example `require('jwz/github')`.

## Examples Carry No Credentials

Every example uses an obvious placeholder for a token, key, password, or account
address, for example `"YOUR_TOKEN"`. Never publish a real credential, a real
private organization name, or a real email address other than the maintainer
contact already shown in the repository. Everything under `docs/` is public the
moment it is pushed.

## Accuracy Is A Bug Class

A page that disagrees with the source is a defect, not a style issue. Fix it with
a `fix` commit, not a `docs` commit, when the published information was wrong
rather than merely incomplete. See
`{shared}/git/commit-conventions.md`.

## When The Package Changes

A new or changed function in jwz means a page here is missing or stale. Follow
[`../skills/add-documentation-page.md`](../skills/add-documentation-page.md).
