#!/usr/bin/env bash
# Build the Mana public demo from live source into this repo's public/ dir.
#
# Pipeline (run on the Air — never build over the /Volumes NFS mount, Vite hangs):
#   1. pull the latest cockpit client from GitHub (serdarsalim/mana)
#   2. build it with --mode demo (VITE_DEMO): MSW + localStorage, no server/LLM/DB
#   3. emit the static bundle into ./public, which Vercel serves as-is
#
# It does NOT commit or push — review the diff, then commit + push to deploy.
# Pushing to this repo is what triggers Vercel → mana.serdarsalim.com.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${MANA_SRC:-$HOME/mana-build}"
REPO="https://github.com/serdarsalim/mana.git"

echo "▸ Source: $SRC"
if [ -d "$SRC/.git" ]; then
  git -C "$SRC" fetch origin main --quiet
  git -C "$SRC" reset --hard origin/main --quiet
  echo "  pulled latest origin/main"
else
  git clone --depth 1 "$REPO" "$SRC"
fi

cd "$SRC/dashboard/client"
echo "▸ Installing client deps"
pnpm install

echo "▸ Building demo into $HERE/public"
DEMO_OUT_DIR="$HERE/public" pnpm build:demo

echo
echo "✓ Built. Static bundle is in public/ (compiled files + fake seed only — no vault content)."
echo "  Review, then:  git -C \"$HERE\" add -A && git -C \"$HERE\" commit -m 'deploy' && git -C \"$HERE\" push"
echo "  That push triggers Vercel → https://mana.serdarsalim.com"
