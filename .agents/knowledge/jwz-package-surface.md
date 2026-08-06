---
name: jwz-package-surface
description: The public surface of the jwz package as a checklist of what this site must document, and how to detect drift from it.
---

# jwz Package Surface

This site documents the [jwz](https://github.com/JetsadaWijit/jwz) package. The
package owns these facts; this file is a working checklist for spotting a missing
page or a page that documents something no longer published.

It is a checklist, not a source of truth. Confirm against the package source
before writing a page, per
[`../docs/content-standards.md`](../docs/content-standards.md). When this file and
the package disagree, the package is right and this file is stale.

## Published Surface

Every entry point below is a subpath export in the package's `package.json`.
Nothing outside this table is public, and nothing outside it may be documented.

| Import path | Exports | Site area |
|---|---|---|
| `jwz/github` | `buildRepos`, `deleteRepos`, `inviteCollaboratorsToRepos`, `getReleaseVersion`, `removeCollaboratorsFromRepos` | `docs/github/` |
| `jwz/gitlab` | `buildRepos`, `deleteGroupRepos`, `deletePersonalRepos`, `inviteToGroupRepos`, `inviteToPersonalRepos`, `getReleaseVersion`, `removeFromGroupRepos`, `removeFromPersonalRepos` | `docs/gitlab/` |
| `jwz/deepseek` | `askAi`, `getCompletion`, `getTokenUsage` | `docs/ai/deepseek/` |
| `jwz/openai` | `askAi`, `getCompletion`, `getTokenUsage` | `docs/ai/openai/` |
| `jwz/openrouter` | `askAi`, `getCompletion`, `getTokenUsage` | `docs/ai/openrouter/` |
| `jwz/mailer/outlook/send` | `sendEmail` | `docs/util/mail/outlook/send/` |

## Shapes To Get Right

* GitHub is organization scoped and exposes one form per operation. GitLab splits
  the collaborator and delete operations into group and personal variants, so
  eight exports against GitHub's five. Never copy a GitHub page into a GitLab page
  without reading the GitLab source.
* The Git platform operations resolve rather than throw. Success is
  `{ success: true, message, ...context }` and failure is
  `{ success: false, message, status }`. An operation that takes an array of
  entities resolves with an array of those objects, one per entity.
* The three AI clients are identical in shape: `askAi` resolves with the raw
  provider response, `getCompletion` extracts the answer text and returns an empty
  string when the field is missing, `getTokenUsage` returns the token count or
  `0`. Neither extractor throws.
* `sendEmail` is the exception that rethrows instead of returning a result object.
* Every function takes its credential as a parameter. No function reads an
  environment variable.

## Drift Check

Run this when the package releases, or when a page looks wrong.

1. Read the `exports` map in the package's `package.json` and each folder
   `index.js` it points at.
2. List every exported function.
3. Compare against the table above and against the page directories under `docs/`.
4. Report two lists: exported functions with no page, and pages whose function is
   no longer exported.
5. A missing page is filled with
   [`../skills/add-documentation-page.md`](../skills/add-documentation-page.md). A
   page for a removed function is a change to the published site, so present it to
   the user rather than deleting it yourself.
6. If the surface changed, this file is stale. Correcting it is a finding under
   the discovery protocol, not a self applied edit.
