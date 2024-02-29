import { Config } from "sst/node/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
// TODO - how can the cast to any be avoided?
const sql = neon((Config as any)["DATABASE_URL"]);
export const db = drizzle(sql, { logger: true });
