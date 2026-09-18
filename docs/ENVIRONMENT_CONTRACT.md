# Environment contract

Every variable has one owner and one allowed environment. This document stores
names and purpose only; it must never contain secret values.

| Variable             | Purpose                       | Local             | Staging             | Production owner |
| -------------------- | ----------------------------- | ----------------- | ------------------- | ---------------- |
| CMS_DATABASE_URL     | Payload PostgreSQL connection | local             | separate            | Dev 3            |
| COMMERCE*DB*\*       | Vendure PostgreSQL connection | local             | separate            | Dev 3            |
| PAYLOAD_SECRET       | Payload signing secret        | local placeholder | staging secret      | Dev 3            |
| AUTHENTIK_ISSUER_URL | OIDC discovery base           | local/test        | staging client      | Dev 3            |
| R2\_\*               | CMS media storage             | optional sandbox  | staging bucket      | CERA + Dev 3     |
| ZOHO\_\*             | CRM OAuth                     | sandbox/test      | staging credentials | CERA + Dev 2     |
| RESEND_API_KEY       | Transactional email           | test only         | staging key         | CERA + Dev 2     |
| GLITCHTIP_DSN        | Error destination             | optional          | staging project     | Dev 3            |

Rules:

- Browser-visible variables may contain public configuration only.
- Local, staging and production credentials are never shared.
- CI pull-request jobs do not receive production or deployment secrets.
- Every deployed secret has an owner, rotation date and revocation procedure.
