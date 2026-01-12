FROM node:20-alpine

WORKDIR /app

# Copy package.json first for caching
COPY package*.json ./

RUN npm install

# Copy rest of the code
COPY . .

# Pass DATABASE_URL as build argument (placeholder for Prisma generate)
ARG DATABASE_URL="postgresql://placeholder:placeholder@placeholder:5432/placeholder"
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma client (needs DATABASE_URL)
RUN npx prisma generate

# Build SvelteKit
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview", "--", "--port", "3000", "--host", "0.0.0.0"]