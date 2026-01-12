FROM node:20-alpine

WORKDIR /app

# Copy package.json first for caching
COPY package*.json ./

RUN npm install

# Copy rest of the code
COPY . .

# Pass DATABASE_URL as build argument
ARG DATABASE_URL="postgresql://placeholder:placeholder@placeholder:5432/placeholder"
ENV DATABASE_URL=$DATABASE_URL
# Generate Prisma client (needs DATABASE_URL)
RUN npx prisma generate

# Build SvelteKit
RUN npm run build

EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"]
