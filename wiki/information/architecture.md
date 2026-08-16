# Architecture

The site is plain HTML files served directly. There is no generator, no
templating, and no client side routing. What consistency there is comes from two
places: a shared stylesheet layer every page links, and a header and footer that
are injected at runtime from a single partial each.

## Published Tree

```
docs/
  index.html                            landing page and navigation hub
  css/
    main.css                            design tokens and base element styles
    shared/
      layout.css                        header, nav, breadcrumbs, footer
      components.css                    cards, accordions, tables, buttons, callouts
  js/
    site.js                             injects the header and footer partials
  partials/
    header.html                         the shared navigation, edited in one place
    footer.html                         the shared footer, edited in one place
  ai/
    deepseek/index.html
    openai/index.html
    openrouter/index.html
  github/
    build/index.html
    delete/index.html
    invite/index.html
    release/index.html
    remove/index.html
  gitlab/
    build/index.html
    delete/index.html
    invite/index.html
    release/index.html
    remove/index.html
  util/
    mail/outlook/send/index.html
```

The directory layout mirrors the jwz module layout, so a reader can guess a page
URL from an import path. `jwz/github` build operations are under `docs/github/`,
the AI clients are grouped under `docs/ai/`, and the mailer sits at
`docs/util/mail/outlook/send/`.

Every page is an `index.html` inside its own directory, so its URL ends with a
directory rather than a file name.

## Page Anatomy

Each function page is one file with the same parts:

1. A `<head>` with the UTF-8 charset, the responsive viewport meta, two globals —
   `window.SITE_ROOT` (the relative path back to `docs/`) and
   `window.PAGE_SECTION` (which nav entry to highlight) — the three stylesheets in
   order, and `js/site.js` loaded with `defer`.
2. `<div id="site-header"></div>`, the mount point the header is injected into.
3. A `<main class="site-main">` holding a `.container`, which opens with a
   `.breadcrumbs` trail and a `.hero` panel carrying an `.eyebrow` for the area and
   an H1 for the function name.
4. A run of `<section class="section">` blocks, each introduced by an H2. The first
   is `Code`, containing the function source in `<pre><code>`.
5. `<div id="site-footer"></div>`, the mount point the footer is injected into.

There is no per-page inline `<style>` block. Anything visual comes from the shared
stylesheets, so a change to how code blocks or cards look is one edit rather than
fifteen.

## Navigation

Navigation lives in `docs/partials/header.html` and nothing else. It is a sticky
bar with a brand link, a `Home` link, dropdown menus for AI, GitHub and GitLab, a
link to the Outlook mailer, and a call-to-action pointing at the jwz repository.
Below 900px it collapses into a toggled panel, and the dropdowns flatten into
indented sublists.

`docs/index.html` is still the landing page — a hero followed by one card grid per
area — but it is no longer the only way to reach a page. Every page also carries
the full navigation and a breadcrumb trail back to the landing page.

## The Header And Footer

Both are fetched at runtime by `docs/js/site.js` and injected into their mount
points. Internal links inside a partial are written with a `{{ROOT}}` token, which
the loader replaces with the page's `window.SITE_ROOT` — that is what lets one
partial serve pages at four different directory depths. The loader also marks the
active nav entry from `window.PAGE_SECTION`, wires the mobile menu and the
dropdowns, injects an inline SVG favicon, and stamps the current year into the
footer.

Editing the navigation or the footer means editing one file. No page carries a
copy.

## Styling

The visual language is **Silver Glass**, defined in
[`../../.agents/design/design-system.md`](../../.agents/design/design-system.md)
and implemented in three layers a page links in order: `css/main.css` for the
`:root` design tokens and base elements, `css/shared/layout.css` for the chrome,
and `css/shared/components.css` for the reusable pieces. Colors, spacing, radii and
shadows are all CSS custom properties, so rebranding is a token edit.

Nothing is loaded from a CDN. There is no external stylesheet, font, icon set, or
framework, and the only JavaScript is `js/site.js`.

## What Is Not Published

`.agents/`, `wiki/`, `README.md`, `LICENSE`, and `.devcontainer/` live in the
repository but are outside `docs/`, so GitHub Pages does not serve them.
