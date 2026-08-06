# Architecture

The site is plain HTML files served directly. There is no generator, no
templating, and no client side routing. Structure is maintained by copying an
existing page, which makes consistency a review concern rather than a build
concern.

## Published Tree

```
docs/
  index.html                            landing page and navigation hub
  footer.html                           shared footer markup
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

1. A `<head>` with the UTF-8 charset, the responsive viewport meta, the pinned
   Bootstrap stylesheet from `cdn.jsdelivr.net`, and a small inline `<style>`
   block for the code presentation.
2. A `<title>` and an H1 that both name the function and its area, for example
   "buildRepos - GitHub Documentation".
3. A `<div class="container mt-5">` wrapper holding `<section>` blocks, each
   introduced by an H2. The first is `Code`, containing the function source in
   `<pre class="code-block"><code>`.

There is no shared stylesheet. Each page carries its own inline style block, so
the declarations are duplicated across pages by design and must be kept identical
by copying rather than by editing one file.

## Navigation

`docs/index.html` is the only navigation surface. It groups pages by area under an
H2, each group inside a `.scrollable-block` containing a Bootstrap button group
with one relative link per page. There is no cross linking between function pages
and no breadcrumb, so a page that is not listed on the landing page is
unreachable in practice.

## The Footer

`docs/footer.html` holds the shared footer markup: the repository logo and a link
back to the jwz repository. Because there is no include mechanism, a page that
shows a footer carries a copy of that markup. Changing the footer means changing
`docs/footer.html` and every page that copies it, in the same commit.

## Styling

Bootstrap 5.3.0 from `cdn.jsdelivr.net` provides the grid, buttons, and
typography. Everything else is a handful of inline rules. There is no custom CSS
file, no JavaScript, and no font or icon dependency.

## What Is Not Published

`.agents/`, `wiki/`, `README.md`, `LICENSE`, and `.devcontainer/` live in the
repository but are outside `docs/`, so GitHub Pages does not serve them.
