---
name: github-pages
description: How the site is published from docs/ on the default branch, why links must be relative, and what to verify before pushing.
---

# GitHub Pages

## The Publishing Model

The site is served by GitHub Pages from the `docs/` directory of the default
branch at:

https://jetsadawijit.github.io/jwz-website/

There is no build step, no generator, and no deployment workflow. Merging to the
default branch is the deployment. What is in `docs/` is what is live, usually
within a minute or two.

Consequences to keep in mind:

* A mistake in `docs/` is public immediately. Preview locally before pushing.
* Nothing outside `docs/` is served. `.agents/`, `wiki/`, `README.md`, and
  `LICENSE` are visible in the repository but are not part of the website.
* A broken page cannot be rolled back by a build system. It is rolled back by a
  commit.

## Relative Links Only

Links between pages of this site must be relative, for example
`href="ai/openai/index.html"` from the landing page. The site is served from a
project subpath, `/jwz-website/`, so a link that starts with `/` resolves to the
wrong place and a link that hardcodes the full domain breaks local preview.

Absolute URLs are correct only for external destinations: the jwz repository, npm,
the provider documentation, and the pinned Bootstrap CDN.

## The Base Path

Because the site lives under `/jwz-website/`, every page directory must resolve
from its own location. When adding a page one level deeper than an existing one,
recount the `../` segments rather than copying them.

## Before Pushing

1. Open every changed page from the file system or through a local static server,
   for example the Live Server extension recommended in
   `.devcontainer/devcontainer.json`.
2. Click every link you added or moved.
3. Confirm the page is reachable from `docs/index.html`. An unlinked page is
   effectively unpublished.
4. Confirm no credential or private detail appears anywhere in the diff.

## After Pushing

Merging to the default branch publishes. If a page renders wrong in production but
right locally, check the link paths first: a subpath issue is the most common
cause.
