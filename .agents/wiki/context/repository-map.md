---
name: agent-wiki-context-repository-map
description: Orientation for an agent about to work in jwz-website — what publishes, what does not, how to preview, and the gotchas.
---

# Repository Map

Read this before touching anything in `jwz-website`. It states where things are and
what is true of the project today. How a page is put together is explained in
[`../../../wiki/information/architecture.md`](../../../wiki/information/architecture.md);
this page does not restate it.

## What this repository is

The documentation website for the [jwz](https://github.com/JetsadaWijit/jwz) npm
package, published by GitHub Pages from `docs/`. Hand-written HTML, styled with the
Bootstrap CDN. There is no generator, no framework, no build step, no dependency to
install, and no test runner. Currently at version `1.0.0`, MIT licensed.

## Where things live

| Path | Holds | Published? |
|---|---|---|
| `docs/index.html` | The landing page and navigation hub linking every documented function. | Yes |
| `docs/footer.html` | The shared footer fragment, fetched at runtime by each page. | Yes |
| `docs/ai/{provider}/index.html` | One page per AI provider: `deepseek`, `openai`, `openrouter`. | Yes |
| `docs/github/{operation}/index.html` | One page per GitHub operation: `build`, `delete`, `invite`, `release`, `remove`. | Yes |
| `docs/gitlab/{operation}/index.html` | One page per GitLab operation, the same five. | Yes |
| `docs/util/mail/outlook/send/index.html` | The Outlook mailer page. | Yes |
| `wiki/` | Documentation about this repository, for whoever maintains it. | No |
| `.agents/` | This repository's own instructions, indexes, agent knowledge, and memory. | No |
| `.devcontainer/` | Editor configuration only. Installs nothing. | No |

Everything under `docs/` is served publicly. Everything outside it is not. Never put
a draft, a note, or a credential under `docs/` on the assumption nobody will look.

## Commands

There are none. Editing a page means editing HTML and opening it in a browser.

To preview, serve `docs/` over HTTP rather than opening a file directly:

```sh
python3 -m http.server 8000 --directory docs
```

The Live Server extension recommended by `.devcontainer/devcontainer.json` is the
intended alternative.

## Known gotchas

* **The footer is fetched, not inlined.** Each page runs
  `fetch("footer.html")` and injects the result. Opening a page over `file://`
  leaves the footer blank, and a page at a different directory depth needs a
  relative path that actually reaches `docs/footer.html`. Always preview over HTTP.
* **The site is served from a project subpath**, `/jwz-website/`, not from a domain
  root. Absolute links beginning with `/` break in production while appearing to
  work locally — see [`../../deploy/github-pages.md`](../../deploy/github-pages.md).
* **This repository owns no facts about the package.** Function names, parameters,
  return values, and examples are copied from the `jwz` source, never written from
  memory and never inferred from a page that already exists here. If a page and the
  source disagree, the page is the bug. See
  [`../../docs/content-standards.md`](../../docs/content-standards.md) and
  [`../../knowledge/jwz-package-surface.md`](../../knowledge/jwz-package-surface.md).
* **Bootstrap is loaded from a pinned CDN link** for styling only. There is no
  JavaScript framework, and adding one is prohibited.
* **Changing a published page's URL is a breaking change**, because an existing link
  to it stops working.
* Examples use obvious placeholders such as `"YOUR_TOKEN"`. No real credential or
  account address appears anywhere, including in example code.

## How the shared set resolves

This repository is a **consumer** (Mode B). Branching, commits, pull requests,
planning, and the creators are not stored here — they are served by the
`lxagents-agents-base` MCP connector and read over `agents://`. See the bootstrap
block in [`../../../AGENTS.md`](../../../AGENTS.md).
