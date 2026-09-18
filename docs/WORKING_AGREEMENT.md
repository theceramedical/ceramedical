# Three-developer working agreement

## The simple explanation

We are building one platform from three connected workstreams.

- Developer 01 builds what visitors, customers and content editors see.
- Developer 02 builds the service catalogue, enquiry data and integrations.
- Developer 03 builds the environment in which everything runs safely.

The shared contracts package is the handshake between them. Developer 01 can
build against fixtures while Developer 02 implements the real API. Developer 03
keeps both environments and delivery checks stable.

## Branch map

- main represents production.
- develop represents the next integrated staging version.
- feat, fix, test, ci and chore branches start from develop.
- release branches start from develop and merge to main.
- hotfix branches start from main and merge to main and develop.

## Every morning

First protect unfinished work by committing a complete unit or creating a
temporary stash. Then:

    git status
    git fetch --prune origin
    git switch develop
    git pull --ff-only origin develop
    git switch your-feature-branch
    git merge --no-edit develop
    pnpm install --frozen-lockfile
    pnpm typecheck
    pnpm test

This team uses a merge from develop into active feature branches. Beginners do
not rebase shared branches and never need a force push.

## Starting a task

1. Confirm the issue is Ready and its dependencies exist.
2. Update develop.
3. Create the exact branch shown in the developer manual.
4. Move the issue to In progress.
5. Implement one reviewable feature slice.

   git switch develop
   git pull --ff-only origin develop
   git switch -c feat/cera-123-short-name

## Saving and sharing work

    git status
    git diff
    git add -p
    git diff --cached
    git commit -m "feat(enquiry): validate consent and service id"
    git push -u origin "$(git branch --show-current)"

Open a pull request to develop. Include the issue, acceptance evidence, tests,
screenshots, migrations, configuration changes and rollback notes.

## Review and merge

- The author performs a self-review.
- One approval is required for normal work.
- Two approvals are required for authorization, secrets, migrations, CI/CD and releases.
- CI must pass and conversations must be resolved.
- Use squash merge for feature pull requests.
- develop deploys to staging after merge.
- main deploys only through an approved release or hotfix.

## Merge conflicts

    git status
    # Edit each conflicted file and remove conflict markers.
    git diff --check
    git add path/to/resolved-file
    git commit
    pnpm typecheck
    pnpm test
    git push

Use git merge --abort if the merge must be cancelled before committing. Do not
choose ours or theirs without understanding and testing the combined behavior.

## End of day

Each developer must leave:

- a pushed branch or merged pull request;
- an updated issue and acceptance evidence;
- a named blocker if work cannot proceed;
- a clear handoff for the next developer;
- no secrets, production data or broken integration branch.
