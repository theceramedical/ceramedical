# Directory ownership

| Path                   | Primary owner | Required reviewer                                 |
| ---------------------- | ------------- | ------------------------------------------------- |
| apps/web               | Developer 01  | Developer 02 for contracts; Developer 03 for auth |
| apps/cms               | Developer 01  | Developer 03 for access and deployment            |
| apps/commerce          | Developer 02  | Developer 03 for worker/database changes          |
| packages/contracts     | Developer 02  | Developer 01                                      |
| packages/ui            | Developer 01  | Developer 02 for form contracts                   |
| packages/observability | Developer 03  | Developer 02                                      |
| infra                  | Developer 03  | Developer 02                                      |
| .github/workflows      | Developer 03  | Two reviewers                                     |
| migrations             | Developer 02  | Developer 03                                      |
| release runbooks       | Developer 03  | CERA Product Owner for operational ownership      |

Ownership means responsibility, not permission to work alone. A developer may
edit another area when the issue requires it, but the listed reviewer must approve.
