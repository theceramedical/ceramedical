#!/usr/bin/env bash
set -euo pipefail

backup_file="$1"
database_url="$2"

sha256sum --check "$backup_file.sha256"
pg_restore --clean --if-exists --no-owner --no-acl --dbname "$database_url" "$backup_file"

echo "Restore completed. Run application smoke and integrity checks now."
