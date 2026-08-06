# Setup

## Clone

```sh
git clone https://github.com/JetsadaWijit/jwz-website.git
cd jwz-website
```

There is nothing to install. This repository has no package manifest, no
dependencies, no build step, and no test runner. The files under `docs/` are the
website exactly as it is served.

## Preview A Page

The simplest preview is opening the file directly in a browser:

```sh
xdg-open docs/index.html
```

Relative links between pages work from the file system, so the whole site can be
clicked through this way.

For a preview closer to production, serve the directory over HTTP with any static
server, for example:

```sh
python3 -m http.server 8000 --directory docs
```

Then open `http://localhost:8000/`.

## Dev Container

`.devcontainer/devcontainer.json` defines an editor environment named `static`. It
installs no packages and runs no commands. It sets a dark theme and recommends a
few extensions, of which Live Server is the relevant one: it serves the workspace
and reloads the page on save, which is the intended editing loop for this site.

## Publish

GitHub Pages serves the `docs/` directory of the default branch. Merging to the
default branch is the deployment; there is no workflow to run and no build to
wait for. The live site is:

https://jetsadawijit.github.io/jwz-website/

Because the site is served from the `/jwz-website/` subpath, links between pages
must be relative. A link starting with `/` resolves to the wrong place in
production and a hardcoded domain breaks local preview.

## Before Pushing

1. Open every page you changed, locally.
2. Click every link you added or moved.
3. Confirm any new page is linked from `docs/index.html`.
4. Read the diff for anything that looks like a real credential. Everything under
   `docs/` is public the moment it is pushed.
