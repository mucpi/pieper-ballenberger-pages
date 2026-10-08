#!/bin/sh
# Downloads every image referenced by src/assets/*.asset.json from the live
# Lovable site into self-host-assets/, mirroring the /__l5e/... URL paths the
# app uses. Re-run after adding or replacing images in Lovable.
set -eu
ORIGIN="${ASSET_ORIGIN:-https://pieper-ballenberger-pages.lovable.app}"
OUT="self-host-assets"
for f in src/assets/*.asset.json; do
  url=$(sed -n 's/.*"url": *"\([^"]*\)".*/\1/p' "$f")
  [ -n "$url" ] || continue
  mkdir -p "$OUT$(dirname "$url")"
  curl -fsSL "$ORIGIN$url" -o "$OUT$url"
  echo "fetched $url"
done
