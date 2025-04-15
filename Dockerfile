# Base Image
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app ./  
COPY . .  
RUN ls -la  # Debugging: Check file structure
RUN cat package.json  # Debugging: Confirm correct package.json
RUN yarn build  # Build Next.js application

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Create a system user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy build output - Adjust paths based on project structure
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

USER nextjs
CMD ["node", "server.js"]
