# Secrets runbook

- CERA owns every production vendor account.
- Local developers use local or sandbox credentials only.
- Staging and production use separate GitHub environments and separate credentials.
- No secret is committed, pasted into an issue, printed in CI or stored in an image.
- Server secret files live outside the repository with minimum file permissions.
- Record owner, purpose, environment, creation date, rotation date and revocation
  method in the secret inventory, but never record the secret value there.
- Rotate credentials after exposure, staff departure and final developer handover.
