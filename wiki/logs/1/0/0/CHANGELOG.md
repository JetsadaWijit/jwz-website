# 1.0.0

Released 2026-08-06. First versioned log for the documentation site, recording the
agent instruction and documentation scaffold. The published site under `docs/` is
unchanged.

## Added

* `AGENTS.md` rewritten as a routing overview with a reading order, a lazy loading
  registry protocol, the separation of concerns rule, and the discovery protocol.
* `.agents/` instruction tree with `INDEX.md` as its sole authority, covering
  directory architecture, versioning, repository rules, branching strategy, commit
  conventions, the standing branch and commit prompt, and the instruction,
  information, and changelog creators.
* `.agents/frontend/page-structure.md` defining the required HTML skeleton, the
  pinned Bootstrap CDN link, the shared footer, and the
  `docs/{area}/{function}/index.html` shape.
* `.agents/docs/content-standards.md` requiring every published claim to match the
  jwz source, with no invented functions, parameters, or return values.
* `.agents/deploy/github-pages.md` describing the publishing model and the
  relative link requirement that follows from the project subpath.
* `.agents/skills/add-documentation-page.md`, the procedure for documenting a jwz
  function on the site.
* `wiki/` documentation tree with an index, a repository overview, a site
  architecture page, and a local preview and publishing page.
* `LICENSE` with the MIT license, copyright JetsadaWijit, 2026.

## Removed

* `CLAUDE.md` and `SKILLS.md`. Their content is now covered by `AGENTS.md` and the
  `.agents/` tree, with skills under `.agents/skills/`.

## Changed

* `README.md` kept as an overview and given a documentation table pointing into
  `wiki/`, plus a license line.
