import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

// Singleton Prisma (evita connessioni multiple in sviluppo con hot-reload)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const url = process.env.DATABASE_URL ?? "";

// In produzione si usa Turso (libSQL) tramite driver adapter; in locale, con un
// DATABASE_URL "file:…", resta il classico SQLite nativo (nessun token richiesto).
const useTurso = url.startsWith("libsql:") || url.startsWith("http");

const log: ("error" | "warn")[] =
  process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"];

function createPrisma(): PrismaClient {
  if (useTurso) {
    const adapter = new PrismaLibSQL({
      url,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    });
    return new PrismaClient({ adapter, log });
  }
  return new PrismaClient({ log });
}

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
