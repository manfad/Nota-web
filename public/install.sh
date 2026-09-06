#!/bin/sh
# Installs Nota (https://github.com/manfad/Nota) for macOS.
# Downloads the latest release .zip from GitHub, verifies the app bundle
# inside it, and copies Nota.app into place. Safe to run again to update.
set -eu

if [ "$(uname -s)" != "Darwin" ]; then
  echo "Nota is a macOS app. This installer only runs on macOS." >&2
  exit 1
fi

API_URL="https://api.github.com/repos/manfad/Nota/releases/latest"
ZIP_URL=$(curl -fsSL "$API_URL" \
  | grep -o '"browser_download_url": *"[^"]*\.zip"' \
  | head -n 1 \
  | sed -E 's/.*"(https:[^"]+)"/\1/')

if [ -z "$ZIP_URL" ]; then
  echo "Could not find a Nota release .zip." >&2
  echo "Check https://github.com/manfad/Nota/releases" >&2
  exit 1
fi

ASSET_NAME=$(basename "$ZIP_URL")
VERSION=$(echo "$ASSET_NAME" | sed -E 's/^Nota-(.+)\.zip$/\1/')

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT INT TERM

echo "Downloading $ASSET_NAME..."
curl -fsSL -o "$TMPDIR/$ASSET_NAME" "$ZIP_URL"

ditto -x -k "$TMPDIR/$ASSET_NAME" "$TMPDIR"

if [ ! -x "$TMPDIR/Nota.app/Contents/MacOS/Nota" ]; then
  echo "The downloaded archive did not contain a valid Nota.app." >&2
  exit 1
fi

if [ -n "${NOTA_INSTALL_DIR:-}" ]; then
  DEST_DIR="$NOTA_INSTALL_DIR"
elif [ -w /Applications ]; then
  DEST_DIR="/Applications"
else
  DEST_DIR="$HOME/Applications"
  mkdir -p "$DEST_DIR"
fi

DEST="$DEST_DIR/Nota.app"

if [ -d "$DEST" ]; then
  if pgrep -x Nota >/dev/null 2>&1; then
    echo "Quitting the running Nota..."
    osascript -e 'tell application "Nota" to quit' >/dev/null 2>&1 || true
    i=0
    while [ "$i" -lt 10 ] && pgrep -x Nota >/dev/null 2>&1; do
      sleep 0.5
      i=$((i + 1))
    done
  fi
  rm -rf "$DEST"
fi

ditto "$TMPDIR/Nota.app" "$DEST"

echo "Installed Nota $VERSION to $DEST_DIR."
echo "Run 'open -a Nota' or find it in Launchpad to get started."
