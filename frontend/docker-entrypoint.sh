#!/bin/sh
set -e

if [ -z "$BACKEND_BASE_URL" ]; then
  echo "ERROR: BACKEND_BASE_URL is not set"
  exit 1
fi

echo "Injecting BACKEND_BASE_URL=$BACKEND_BASE_URL"

sed -i "s|__BACKEND_BASE_URL__|$BACKEND_BASE_URL|g" \
  /usr/share/nginx/html/env.js

exec "$@"