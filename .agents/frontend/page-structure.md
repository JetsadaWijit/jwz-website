---
name: page-structure
description: Required HTML skeleton, Bootstrap CDN pin, footer, and directory shape for every page published under docs/.
---

# Page Structure

Every published page is hand written HTML. There is no template engine and no
build step, so the structure is maintained by copying it correctly. Open the
nearest existing page in the same area and follow it.

## Directory And URL Shape

```
docs/{area}/{function}/index.html
```

The path mirrors the jwz module layout, so a reader can guess a URL from an import
path:

| jwz import | Page |
|---|---|
| `jwz/github` | `docs/github/{operation}/index.html` |
| `jwz/gitlab` | `docs/gitlab/{operation}/index.html` |
| `jwz/deepseek`, `jwz/openai`, `jwz/openrouter` | `docs/ai/{provider}/index.html` |
| `jwz/mailer/outlook/send` | `docs/util/mail/outlook/send/index.html` |

Every page is named `index.html` inside its own directory, so its URL ends with a
directory and needs no file extension. Never add a page as a bare
`{function}.html`.

Folder names are lowercase, single words where possible, matching the operation
name used in the package: `build`, `delete`, `invite`, `release`, `remove`.

## Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{functionName} - {Area} Documentation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        pre {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
        }
        .code-block {
            font-family: 'Courier New', Courier, monospace;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">{functionName} - {Area} Documentation</h1>

        <section>
            <h2>Code</h2>
            <pre class="code-block"><code>...</code></pre>
        </section>
    </div>
</body>
</html>
```

Rules that follow from it:

* `lang="en"`, the UTF-8 charset, and the responsive viewport meta are required on
  every page.
* The `<title>` and the H1 say the same thing.
* Bootstrap is pinned at `5.3.0` from `cdn.jsdelivr.net`. Do not change the
  version, do not switch CDN, and do not add a second CSS or JavaScript
  dependency without approval.
* Page specific CSS goes in the inline `<style>` block. There is no shared
  stylesheet, so keep the block small and copy the existing declarations rather
  than inventing new class names.
* Content sits inside `<div class="container mt-5">` and is divided into
  `<section>` elements introduced by an H2.
* Code samples are `<pre class="code-block"><code>` and must be HTML escaped.

## Footer

`docs/footer.html` holds the shared footer markup. There is no include mechanism,
so a page that shows a footer carries a copy of that markup. When the footer
changes, `docs/footer.html` changes first and every page that copies it is updated
in the same commit.

## Landing Page

`docs/index.html` is the navigation hub. Pages are grouped by area under an H2,
inside a `.scrollable-block` holding a Bootstrap button group, with one relative
`<a>` per page. A new page is not reachable until it is linked there. Keep the
buttons in the same order as the operations appear in the package.

## Links

All links between pages of this site are relative. See
[`../deploy/github-pages.md`](../deploy/github-pages.md).
