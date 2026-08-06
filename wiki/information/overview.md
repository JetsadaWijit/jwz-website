# Overview

`jwz-website` is the documentation website for the
[jwz](https://github.com/JetsadaWijit/jwz) npm package. It is a static site
published by GitHub Pages at:

https://jetsadawijit.github.io/jwz-website/

## What It Publishes

One page per public jwz function, showing the function's source, its parameters,
what it resolves with, and a copyable usage example. The site covers the same
three areas the package does:

| Area | Pages |
|---|---|
| AI providers | DeepSeek, OpenAI, OpenRouter |
| GitHub | build, delete, invite, release, remove |
| GitLab | build, delete, invite, release, remove |
| Mailer | Outlook send |

`docs/index.html` is the landing page and the only navigation. Every page is
reached from there.

## Two Different Trees

This repository holds documentation at two levels, and mixing them is the easiest
mistake to make here.

| Tree | Subject | Audience | Published |
|---|---|---|---|
| `docs/` | The jwz package. | People who use the package. | Yes, this is the website. |
| `wiki/` | This repository. | People who maintain the site. | No. |

The page you are reading is in `wiki/`. It describes the repository. A page under
`docs/` describes a function in a different repository.

## No Source Of Truth Of Its Own

Every fact published here belongs to the jwz package and is copied from that
repository's source. When the two disagree, the source is right and the page is a
defect. Nothing on this site may describe a function that the package does not
export.

## No Build Step

The site is hand written HTML. There is no package manifest, no dependency to
install, no generator, and no test runner. Bootstrap 5.3.0 is loaded from a CDN
for styling and is the only external dependency.

## Related Pages

* [`architecture.md`](architecture.md) for how a page is put together.
* [`../environments/setup.md`](../environments/setup.md) for previewing and
  publishing.
