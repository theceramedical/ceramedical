FROM node:22-alpine AS build
WORKDIR /workspace
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/commerce/package.json apps/commerce/package.json
COPY packages/contracts/package.json packages/contracts/package.json
COPY packages/observability/package.json packages/observability/package.json
RUN pnpm install --frozen-lockfile --filter @cera/commerce...

COPY apps/commerce apps/commerce
COPY packages/contracts packages/contracts
COPY packages/observability packages/observability
RUN pnpm --filter @cera/commerce build

FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S cera -g 1001 && adduser -S cera -u 1001 -G cera
COPY --from=build --chown=cera:cera /workspace /app
USER cera
EXPOSE 3002
CMD ["node", "apps/commerce/dist/index.js"]
