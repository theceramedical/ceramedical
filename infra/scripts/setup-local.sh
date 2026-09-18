#!/usr/bin/env bash
set -euo pipefail

repository_root="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$repository_root"

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "Created .env from the safe example. Replace local placeholder secrets."
else
  echo ".env already exists; leaving it unchanged."
fi

pnpm install
docker compose --env-file .env -f infra/compose/compose.local.yaml up -d
docker compose --env-file .env -f infra/compose/compose.local.yaml ps

echo "Local dependencies are ready. Start applications with: pnpm dev"
