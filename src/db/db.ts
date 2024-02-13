import { Config } from "sst/node/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(Config["DATABASE_URL"]);
export const db = drizzle(sql, { logger: true });
