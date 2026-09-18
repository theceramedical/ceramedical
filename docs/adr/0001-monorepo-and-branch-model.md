# ADR 0001: Monorepo and GitFlow-lite branch model

Status: Accepted

## Decision

Use a pnpm monorepo and a beginner-friendly GitFlow-lite model. main represents
production, develop represents staging integration, and short-lived work branches
merge through pull requests.

## Reasons

- Shared contracts stay versioned with producers and consumers.
- Three developers can own paths while reviewing cross-cutting changes.
- One build can produce traceable application images from the same commit.
- develop gives CERA a stable UAT target without exposing main to daily work.

## Consequences

- Required checks must be fast and reliable.
- Feature branches must remain short.
- Release and hotfix fixes must be merged back to develop.
- CODEOWNERS handles must be updated when the GitHub organization is known.
