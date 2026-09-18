# How to explain the CERA platform delivery

## Thirty-second version

We are building CERA as one secure platform made from specialized services.
The public website and customer portal use Next.js. CERA staff control approved
content through Payload, while Vendure stores the service catalogue and runs
reliable background work. Authentik controls identity, PostgreSQL stores data,
Cloudflare and Caddy protect delivery, and Zoho and Resend are integrated through
auditable jobs. Three developers work in parallel against shared data contracts,
then every approved change is automatically tested in staging before a controlled
production release.

## Five-minute version

Start with the customer journey:

1. A visitor opens the CERA website and reads only approved content.
2. The visitor selects a service from the controlled catalogue.
3. The visitor submits a consented enquiry and receives a reference.
4. CERA staff receive and process the enquiry.
5. The customer creates or uses a secure account to see a safe status.
6. Zoho receives only approved CRM fields and Resend delivers notifications.

Then explain the three workstreams:

- Experience: pages, accessibility, forms, CMS presentation and dashboard.
- Product data: catalogue, enquiries, status rules, Zoho and email.
- Platform: identity, environments, CI/CD, security, backup and monitoring.

Finally explain quality:

- No direct pushes to staging or production branches.
- Every change uses an issue, feature branch, review and automated checks.
- develop is deployed to staging for CERA approval.
- main is production and accepts only approved releases.
- Every release records its image, migration, backup, smoke test and rollback.

## Honest schedule statement

The ten-day plan is an aggressive first production release. It is achievable
only when scope remains frozen, CERA supplies accounts and approved content on
time, reviewers respond the same day, and unresolved security or data risks are
not hidden. Safety, authorization, backups and release checks are never removed
to recover time.
