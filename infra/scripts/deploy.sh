#!/usr/bin/env bash
set -euo pipefail

environment_name="$1"
image_tag="$2"

if [[ "$environment_name" != "staging" && "$environment_name" != "production" ]]; then
  echo "Usage: deploy.sh staging|production IMAGE_TAG" >&2
  exit 2
fi

export CERA_IMAGE_TAG="$image_tag"
compose_file="infra/compose/compose.$environment_name.yaml"

docker compose -f "$compose_file" config --quiet
docker compose -f "$compose_file" pull
docker compose -f "$compose_file" run --rm commerce node apps/commerce/dist/migrate.js
docker compose -f "$compose_file" up -d --remove-orphans --wait --wait-timeout 180

echo "CERA $environment_name deployment is healthy at image $image_tag."
