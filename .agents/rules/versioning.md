---
name: versioning-rules
description: Never change the project version on your own initiative. How to propose a bump and wait for explicit user approval.
---

# Versioning Rules

## Never Bump On Your Own Initiative

Never change the project version by yourself. Always ask the user first and wait
for an explicit answer.

This repository has no package manifest, so its version lives entirely in
`wiki/logs/`. That makes the rule stricter, not looser: creating a new version
directory is the only way a version is claimed here, so creating one without
approval invents a release.

## What This Covers

* Creating a new `wiki/logs/{Major}/{Minor}/{Patch}/` directory.
* Git tags and GitHub release drafts on this repository.
* Any version string written into a published page under `docs/`.
* Any version carrier added later, for example a `package.json`, a `VERSION`
  file, or a site generator manifest.

It also covers the jwz package version quoted on the site. This repository does
not own that number. It is set in the `jwz` repository, and the site may only
report a version that has actually been released there.

## How To Propose A Bump

When a change looks like it warrants a bump, do not apply it. Present a proposal
that states:

1. the current version, taken from the newest directory under `wiki/logs/`;
2. the proposed version;
3. whether it is major, minor, or patch, and why;
4. every file that would change;
5. the `wiki/logs/` directory that would be created.

Then stop and wait for the user's answer.

## Released Versions Are Immutable

Never re-tag a released version. Never rewrite the log directory of a version that
has already been released. Corrections go into the next version's log.
