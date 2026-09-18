# CERA Medical Platform

This is the initialization workspace for the complete CERA Medical platform.
It is deliberately split so three developers can work in parallel without
editing the same areas every day.

## Ownership

- Developer 01: apps/web, public pages, CMS presentation, customer experience.
- Developer 02: apps/commerce, packages/contracts, enquiry and integrations.
- Developer 03: infrastructure, identity, CI/CD, security, backups and releases.
- Shared changes require the relevant two owners to agree before implementation.

## Applications

- apps/web: Next.js public website and customer portal.
- apps/cms: Payload CMS content and editorial administration.
- apps/commerce: Vendure service catalogue, worker and operational APIs.
- packages/contracts: shared schemas, public types and mock fixtures.
- packages/ui: reusable accessible interface components.
- packages/observability: safe structured logging helpers.

## First local setup

    cp .env.example .env
    pnpm install --frozen-lockfile
    pnpm infra:up
    pnpm dev

Local endpoints:

- Web: http://localhost:3000
- CMS: http://localhost:3001/admin
- Vendure Shop API: http://localhost:3002/shop-api
- Vendure Admin API: http://localhost:3002/admin-api
- Mailpit: http://localhost:8125

## Required daily branch routine

    git status
    git fetch --prune origin
    git switch develop
    git pull --ff-only origin develop
    git switch your-feature-branch
    git merge --no-edit develop
    pnpm install --frozen-lockfile
    pnpm typecheck
    pnpm test

Feature work starts from develop and returns to develop through a pull request.
No developer pushes directly to develop or main. See docs/WORKING_AGREEMENT.md.

## Important boundary

The launch version is a service information and enquiry platform. It does not
include checkout, payments, appointment booking, clinical records, diagnosis,
prescriptions or medical-document uploads.

## Documentation

The complete client, product, architecture, contract and developer document
library is indexed in [docs/formal/README.md](docs/formal/README.md). Working
engineering guidance remains directly under `docs/`.
