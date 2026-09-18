#!/usr/bin/env bash
set -euo pipefail

backup_root="$1"
database_url="$2"
timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
backup_file="$backup_root/cera-$timestamp.dump"

install -d -m 0700 "$backup_root"
pg_dump --format=custom --no-owner --no-acl "$database_url" >"$backup_file"
sha256sum "$backup_file" >"$backup_file.sha256"

echo "Created encrypted-storage-ready database dump: $backup_file"
