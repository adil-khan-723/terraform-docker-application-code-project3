#!/bin/sh
set -e

if [ -z "$BACKEND_INTERNAL_ALB" ]; then
  echo "ERROR: BACKEND_INTERNAL_ALB is not set"
  exit 1
fi

echo "Injecting BACKEND_INTERNAL_ALB=$BACKEND_INTERNAL_ALB"

sed -i "s|__BACKEND_INTERNAL_ALB__|$BACKEND_INTERNAL_ALB|g" \
  /etc/nginx/conf.d/default.conf

exec "$@"