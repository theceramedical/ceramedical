# Day 1 initialization checklist

## Before developers start

- [ ] CERA GitHub organization and private repository exist.
- [ ] Two CERA owners have MFA.
- [ ] Developer names and GitHub handles are confirmed.
- [ ] CODEOWNERS placeholders are replaced.
- [ ] main and develop rulesets are enabled.
- [ ] Staging and production GitHub environments exist.
- [ ] CERA Product Owner and Content and Clinical Approver are named.
- [ ] Domain, Hetzner, Cloudflare, R2, Zoho and Resend owners are named.

## Technical start

    cp .env.example .env
    pnpm install
    pnpm infra:up
    pnpm typecheck
    pnpm test
    pnpm dev

Confirm the web, CMS, Vendure APIs and Mailpit open locally. Then commit the
reviewed lockfile and require frozen installs in CI and developer machines.

## First integration gate

- [ ] Developer 01 can edit apps/web and consume shared fixtures.
- [ ] Developer 02 can change packages/contracts and start Vendure.
- [ ] Developer 03 can start dependencies and validate Compose.
- [ ] All developers can open a feature branch and pull request.
- [ ] Required CI check names are stable before rulesets require them.
