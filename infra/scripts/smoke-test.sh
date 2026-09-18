#!/usr/bin/env bash
set -euo pipefail

web_url="${WEB_URL:-http://localhost:3000}"
cms_url="${CMS_URL:-http://localhost:3001}"
commerce_url="${COMMERCE_URL:-http://localhost:3002}"

curl --fail --silent --show-error "$web_url/api/health" >/dev/null
curl --fail --silent --show-error "$cms_url" >/dev/null
curl --fail --silent --show-error "$commerce_url/health" >/dev/null

echo "CERA smoke checks passed."
