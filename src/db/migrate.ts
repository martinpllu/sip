import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.DRIZZLE_DATABASE_URL });
const client = await pool.connect();
export const db = drizzle(client);
try {
    await migrate(db, { migrationsFolder: "./drizzle" });
} catch (e) {
    console.error("something went wrong", e);
} finally {
    client.release();
}
