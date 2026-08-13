---
name: logs-index
description: Versioned change logs for jwz-website, newest version first, with the documents each version directory contains.
---

# Logs Index

**Scope:** `wiki/logs/`
**Parent:** [Root Index](root-index.md)

One directory per released version, at `wiki/logs/{Major}/{Minor}/{Patch}/`. This
repository has no package manifest, so a version is claimed **here and nowhere
else** — creating a directory under `wiki/logs/` is the whole act of releasing.
That makes `{shared}/rules/versioning.md` stricter here, not looser: never create
one without explicit user approval. A released version is never rewritten;
corrections go in the next version's log.

Any version directory added is reflected here in the same commit, newest first.

| Version | Documents | Covers |
|---|---|---|
| [`1.0.0`](../../wiki/logs/1/0/0/CHANGELOG.md) | `CHANGELOG.md` | First versioned log for the documentation site, recording the agent instruction and documentation scaffold. |
