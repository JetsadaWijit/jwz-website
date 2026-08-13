# jwz-website

This repository holds the documentation website for the
[jwz](https://github.com/JetsadaWijit/jwz) package. It is a static site, published
with GitHub Pages, that documents every module jwz provides: the Git platform
utilities for GitHub and GitLab, the AI provider clients for DeepSeek, OpenAI, and
OpenRouter, and the Outlook mailer.

The pages under `docs/` contain the rendered documentation and runnable code
examples.

## Quick Start

```sh
git clone https://github.com/JetsadaWijit/jwz-website.git
cd jwz-website
python3 -m http.server 8000 --directory docs
```

There is nothing to install. The site is hand written HTML with no build step.

## Live Site

This page is only a short overview. To understand the project fully, browse the
live website:

**https://jetsadawijit.github.io/jwz-website/**

## Documentation

Every documentation page is listed in
[`.agents/index/project-wiki-index.md`](.agents/index/project-wiki-index.md). Start
with these:

| Page | What it covers |
|---|---|
| [`wiki/information/overview.md`](wiki/information/overview.md) | What this repository is and how it relates to the jwz package. |
| [`wiki/information/architecture.md`](wiki/information/architecture.md) | How a page is put together: structure, navigation, styling, footer. |
| [`wiki/environments/setup.md`](wiki/environments/setup.md) | Cloning, previewing locally, and publishing. |

## Working With Agents

Agents start at [`AGENTS.md`](AGENTS.md) and route through
[`.agents/index/root-index.md`](.agents/index/root-index.md).

The conventions shared across the organization are not stored in this repository.
They are served by the `lxagents-agents-base` MCP connector and resolved at read
time; this repository carries only what is its own.

## Member

|Role|User|Email|Website|
|-|-|-|-|
|owner|[JetsadaWijit](https://github.com/JetsadaWijit)|jetsadawijit@outlook.com|[Profile](https://jetsadawijit.github.io)|

## License

MIT. See [`LICENSE`](LICENSE).
