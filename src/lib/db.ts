import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Pass the DATABASE_URL to the Pool
export const connectionString = import.meta.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

declare global {
  var prisma: PrismaClient | undefined;
}

// Use a global variable in development to avoid multiple clients during HMR
export const prisma =
  globalThis.prisma ??
  new PrismaClient({
    adapter,
    log: ["query", "error"],
  });

if (import.meta.env.DEV) globalThis.prisma = prisma;
