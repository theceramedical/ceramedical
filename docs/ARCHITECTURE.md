# CERA architecture baseline

## Request flow

1. Cloudflare provides DNS and approved edge controls.
2. Caddy terminates HTTPS and routes traffic.
3. Next.js serves public pages and the customer experience.
4. Payload controls approved editorial content.
5. Vendure owns the service catalogue and background jobs.
6. PostgreSQL stores application data in separate databases.
7. Valkey supports queues and short-lived coordination where configured.
8. Authentik issues identities and roles through OIDC.
9. Cloudflare R2 stores approved media.
10. Zoho receives the minimum approved CRM fields.
11. Resend sends transactional email.
12. GlitchTip receives redacted errors and release information.

## Data ownership

- Payload owns pages, posts, navigation, policy copy, SEO and media metadata.
- Vendure owns service records, slugs, categories, display pricing and availability.
- The CERA application owns enquiries, status events, ownership and audit events.
- Authentik owns identity, login, MFA, session and role claims.
- Zoho is a synchronized operational destination, not the authoritative enquiry database.

## Environment mapping

- Local: synthetic data, local PostgreSQL/Valkey/Mailpit, no production credentials.
- Staging: develop branch, separate databases/buckets/OIDC clients and test vendors.
- Production: signed release from main, manual approvals and production-only secrets.

## Non-negotiable boundaries

- Authorization is enforced on the server.
- Internal notes never enter customer or public responses.
- No clinical record or medical-document upload is included.
- External delivery uses idempotency and durable job records.
- Production releases are immutable and retain a tested rollback target.
