# mana-demo

Public, interactive demo of the [Mana](https://github.com/serdarsalim/mana) cockpit, served at **mana.serdarsalim.com**.

It is the **real cockpit client** compiled with `--mode demo` (`VITE_DEMO`). A Mock Service Worker intercepts every `/api/*` call and serves it from the visitor's `localStorage`, so the exact same UI runs with **no server, no LLM, and no database**. Every tool (goals, grocery, finance, circles, office, wazir/canvas) works by hand. Chat and voice are a canned teaser pointing people at running their own Mana.

Per visitor, the demo lives entirely in their browser — their own sandbox, no shared state, no real data.

## How it deploys

Vercel serves this repo's `public/` directory **as static files — it does not build anything** (it can't reach the private source repo, and that keeps vault content off Vercel). The compiled bundle is committed here; a push triggers a Vercel deploy.

```
Pro:  edit Mana → commit → push to github.com/serdarsalim/mana   (normal work)
Air:  ./publish.sh → review → commit → push here                 (deploy)
```

## Rebuilding the demo

On the Air (never build over the `/Volumes` NFS mount — Vite hangs):

```bash
./publish.sh                 # pulls latest mana, builds into public/
git add -A && git commit -m "deploy" && git push    # Vercel deploys
```

`publish.sh` clones/pulls `serdarsalim/mana` into `~/mana-build` (override with `MANA_SRC`), runs `pnpm build:demo`, and emits the static bundle into `public/`.

## What's in here

- `public/` — the compiled demo bundle (committed; what Vercel serves). Only compiled files + fake seed data, never vault content.
- `publish.sh` — rebuild-from-live-source script.
- `vercel.json` — static serve config (no build), SPA rewrite, service-worker + asset cache headers.
