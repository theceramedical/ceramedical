FROM node:22-alpine AS build
WORKDIR /workspace
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/cms/package.json apps/cms/package.json
RUN pnpm install --frozen-lockfile --filter @cera/cms...

COPY apps/cms apps/cms
RUN pnpm --filter @cera/cms build

FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S cera -g 1001 && adduser -S cera -u 1001 -G cera
COPY --from=build --chown=cera:cera /workspace/apps/cms/.next/standalone ./
COPY --from=build --chown=cera:cera /workspace/apps/cms/.next/static ./apps/cms/.next/static
USER cera
EXPOSE 3001
CMD ["node", "apps/cms/server.js"]
