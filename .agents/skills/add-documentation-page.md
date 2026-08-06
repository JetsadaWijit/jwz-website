---
name: add-documentation-page
description: Step by step procedure for documenting a jwz function on this site, from reading the source to linking the page from the landing page.
---

# Skill: Add A Documentation Page

Use this when a jwz function has no page here, or when a function has changed and
its page must be rewritten.

## 1. Read The Source

Open the function's file in the [jwz](https://github.com/JetsadaWijit/jwz)
repository and confirm it is exported from its folder `index.js` and reachable
through the `exports` map in `package.json`. If it is not exported, it is not
public and gets no page. Note the exact parameter list, in order, and what the
function resolves with. See
[`../docs/content-standards.md`](../docs/content-standards.md).

## 2. Choose The Path

```
docs/{area}/{function}/index.html
```

| jwz import | Page directory |
|---|---|
| `jwz/github` | `docs/github/{operation}/` |
| `jwz/gitlab` | `docs/gitlab/{operation}/` |
| `jwz/deepseek`, `jwz/openai`, `jwz/openrouter` | `docs/ai/{provider}/` |
| `jwz/mailer/outlook/send` | `docs/util/mail/outlook/send/` |

If the function belongs to a new area, mirror the package layout rather than
inventing a name, and ask the user before creating a new top level directory under
`docs/`.

## 3. Copy The Nearest Page

Copy the closest existing page in the same area and edit it. That keeps the
skeleton, the pinned Bootstrap link, and the inline styles identical across the
site. The required structure is in
[`../frontend/page-structure.md`](../frontend/page-structure.md).

## 4. Write The Content

In order: the title and H1 naming the function and its area, a `Code` section
holding the current source, every parameter with its type and meaning, what the
call resolves with on success and on failure, and a copyable usage example that
imports through the real subpath export.

HTML escape everything inside `<code>`. Use `"YOUR_TOKEN"` and similar
placeholders. Never publish a real credential.

## 5. Link It From The Landing Page

Add a relative `<a>` to `docs/index.html` in the button group for that area,
keeping the order the operations have in the package. A page that is not linked
there is unreachable.

## 6. Preview

Open the new page and the landing page locally, for example with the Live Server
extension recommended in `.devcontainer/devcontainer.json`, and click every link
you added. See [`../deploy/github-pages.md`](../deploy/github-pages.md).

## 7. Commit

One logical change per commit, diff reviewed first:

```
git add docs/github/archive/index.html
git commit -m "docs(github): add page for archiveRepos"

git add docs/index.html
git commit -m "docs(site): link the archiveRepos page from the landing page"
```

See [`../git/commit-conventions.md`](../git/commit-conventions.md).

## Verify Before Reporting Done

* The function exists in the jwz source and is exported.
* Every parameter, type, and return value on the page matches that source.
* The path is `docs/{area}/{function}/index.html`, not a bare `.html` file.
* The skeleton, the pinned Bootstrap link, and the styles match the neighboring
  pages.
* The page is linked from `docs/index.html` with a relative href.
* No credential appears anywhere on the page.
