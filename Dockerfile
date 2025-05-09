FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Build stage with build-time secrets
FROM base AS builder
WORKDIR /app

# Add build-time args
ARG SANITY_PROJECT_ID
ARG SANITY_DATASET
ARG SANITY_AUTH_TOKEN
ARG POSTHOG_KEY

# Promote args to env so Next.js can read them
ENV SANITY_PROJECT_ID=$SANITY_PROJECT_ID
ENV SANITY_DATASET=$SANITY_DATASET
ENV SANITY_AUTH_TOKEN=$SANITY_AUTH_TOKEN
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$SANITY_DATASET
ENV NEXT_PUBLIC_POSTHOG_KEY=$POSTHOG_KEY
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Final production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
