#!/bin/sh
# Renders the Meta ad PNGs from src/ad.html with headless Chromium.
# Usage: sh marketing/meta-ads/render.sh   (from the repo root or anywhere)
set -e
DIR=$(cd "$(dirname "$0")" && pwd)
CHROME=${CHROME:-$(ls -d /opt/pw-browsers/chromium_headless_shell-*/*/headless_shell | head -1)}
for spec in feed:1080x1350 square:1080x1080 story:1080x1920; do
  name=${spec%%:*}; size=${spec#*:}
  sed "s/<body>/<body class=\"$name\">/" "$DIR/src/ad.html" > "$DIR/src/.ad-$name.html"
  "$CHROME" --no-sandbox --hide-scrollbars --force-device-scale-factor=1 \
    --allow-file-access-from-files --virtual-time-budget=3000 \
    --window-size="${size%x*},${size#*x}" \
    --screenshot="$DIR/fix-and-flip-$name-$size.png" "file://$DIR/src/.ad-$name.html" 2>/dev/null
  rm "$DIR/src/.ad-$name.html"
done
ls -la "$DIR"/*.png
