---
name: repository-rules
description: Rules specific to jwz-website: a hand written static site under docs/, with no build step, no framework, and no source of truth of its own.
---

# Repository Rules

`jwz-website` is a static documentation site published by GitHub Pages from the
`docs/` directory. It documents the
[jwz](https://github.com/JetsadaWijit/jwz) npm package. This file is a hub. Where
a subject has its own instruction file, this file links to it instead of restating
it.

## Layout

| Path | Holds |
|---|---|
| `docs/index.html` | The site landing page. The navigation hub linking to every documented function. |
| `docs/footer.html` | The shared footer markup, copied into each page. |
| `docs/ai/{provider}/index.html` | One page per AI provider. |
| `docs/github/{operation}/index.html` | One page per GitHub operation. |
| `docs/gitlab/{operation}/index.html` | One page per GitLab operation. |
| `docs/util/mail/outlook/send/index.html` | The Outlook mailer page. |
| `.agents/` | Agent instructions. Not published. |
| `wiki/` | Documentation about this repository. Not published. |

Everything under `docs/` is served publicly. Everything outside `docs/` is not.
Never put a draft, a note, or a credential under `docs/` on the assumption that
nobody will look.

## This Repository Has No Source Of Truth

Every fact on this site belongs to the `jwz` package. Function names, parameters,
return values, and example code are copied from that repository's source, not
written from memory or inferred from a page that already exists here. See
[`../docs/content-standards.md`](../docs/content-standards.md).

If the source and a page disagree, the source is right and the page is a bug.

## Commands

There are none. There is no package manifest, no dependency to install, no build
step, and no test runner. Editing a page means editing HTML and opening it in a
browser. See [`../../wiki/environments/setup.md`](../../wiki/environments/setup.md).

`.devcontainer/devcontainer.json` configures an editor only and installs nothing.
The Live Server extension it recommends is the intended way to preview pages.

## What Must Not Be Introduced

* No static site generator, bundler, transpiler, or npm project. The site is hand
  written HTML on purpose.
* No JavaScript framework. Bootstrap is loaded from a CDN for styling only.
* No new external dependency beyond the pinned Bootstrap CDN link without
  approval. See [`../frontend/page-structure.md`](../frontend/page-structure.md).
* No absolute links between pages of this site. See
  [`../deploy/github-pages.md`](../deploy/github-pages.md).
* No credential, token, or real account address anywhere, including in example
  code. Examples use obvious placeholders such as `"YOUR_TOKEN"`.
* No documentation of a jwz function that does not exist in the package.

## Finishing Work

Before finishing a task, open every page you changed in a browser, confirm the
links you touched resolve, and review the diff for anything that looks like a real
credential.
