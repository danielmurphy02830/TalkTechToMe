# Build Stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm ci

# Copy source files
COPY . .

# Build production assets
RUN npm run build

# Production Runtime Stage with Nginx
FROM nginx:alpine

# Set default PORT for Cloud Run (defaults to 8080 if not set by Cloud Run)
ENV PORT=8080

# Copy nginx template with $PORT substitution support
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy built static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port (informative)
EXPOSE 8080

# Nginx alpine image automatically runs envsubst on /etc/nginx/templates/*.template
CMD ["nginx", "-g", "daemon off;"]
