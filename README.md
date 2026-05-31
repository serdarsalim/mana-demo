# Mana — public demo

An interactive, fully usable demo of **Mana**, a self-hosted personal cockpit for your goals, money, groceries, people, and projects, all in one place and driven by chat or voice.

Live at **[mana.serdarsalim.com](https://mana.serdarsalim.com)**.

## What this is

This is the **real Mana client**, compiled with a demo flag. A [Mock Service Worker](https://mswjs.io) intercepts every `/api/*` call and serves it from your browser's `localStorage`, so the exact same app runs with **no server, no LLM, and no database**.

That means:

- **Every tool actually works.** Add goals, tick off the week's commitments, log expenses, move groceries into the pantry, leave notes on people in your circle. It all saves, right in your browser.
- **It's yours alone.** Each visitor gets their own sandbox in their own browser. No accounts, no shared state, nothing sent anywhere.
- **The chat and voice are a friendly teaser.** The one thing a demo can't do is think. Wire an LLM into your own self-hosted Mana and you drive all of it by talking, instead of clicking.

No real data ships here, only fictional sample content for a made-up user.

## How it works

| Layer | In the real cockpit | In this demo |
| --- | --- | --- |
| UI | Lit + Vite client | identical, same source |
| Backend | Node server + SQLite | Mock Service Worker over `localStorage` |
| Brain | an LLM you connect | a canned, scripted teaser |

Because the demo is the real client with only the network boundary faked, it stays 1:1 with the actual product.

## Running it locally

It's a static site, but it needs to be served over http (a service worker won't run from `file://`):

```bash
cd public
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

## Deploying

Vercel serves the prebuilt `public/` directory as static files. It does **not** build anything. `publish.sh` rebuilds the bundle from the live Mana client and drops it into `public/`; committing and pushing triggers a deploy.

## License

Copyright (C) 2026 Serdar Salim.

Licensed under the [GNU Affero General Public License v3.0](LICENSE). If you run a modified version of this as a network service, you must make your source available to its users.
