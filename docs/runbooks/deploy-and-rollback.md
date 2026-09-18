# Deploy and rollback runbook

## Staging

1. Merge an approved pull request into develop.
2. CI creates immutable images tagged with the merge commit SHA.
3. The staging workflow deploys that exact SHA after its required checks pass.
4. The deployment runs compatible migrations once.
5. Compose starts the new images and waits for container health checks.
6. The team completes the critical customer and staff smoke tests.
7. If any gate fails, stop the release and follow the rollback procedure below.

## Production

1. Freeze the release branch and complete CERA UAT.
2. Merge the approved release pull request to main.
3. Create an annotated semantic version tag.
4. Record CERA Product Owner and Technical Release Approver approvals.
5. Confirm off-server backup and rollback digest.
6. Build immutable SHA and version tags from the verified main commit.
7. After the protected GitHub production approval, run migrations, deploy,
   smoke test and observe.

## Rollback

Use the last recorded healthy image digest. Prefer a forward database correction
unless the migration contains a separately tested safe down path. Record the
incident timeline, user impact, image digests, database action and follow-up issue.
