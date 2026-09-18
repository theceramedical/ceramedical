FROM node:22-alpine AS build
WORKDIR /workspace
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/contracts/package.json packages/contracts/package.json
COPY packages/ui/package.json packages/ui/package.json
RUN pnpm install --frozen-lockfile --filter @cera/web...

COPY apps/web apps/web
COPY packages/contracts packages/contracts
COPY packages/ui packages/ui
RUN pnpm --filter @cera/web build

FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S cera -g 1001 && adduser -S cera -u 1001 -G cera
COPY --from=build --chown=cera:cera /workspace/apps/web/.next/standalone ./
COPY --from=build --chown=cera:cera /workspace/apps/web/.next/static ./apps/web/.next/static
USER cera
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
