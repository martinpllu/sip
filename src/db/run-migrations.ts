import "dotenv/config";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { migrate } from "drizzle-orm/neon-serverless/migrator";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.DB_CONNECTION_STRING });
const client = await pool.connect();
export const db = drizzle(client);
try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Successfully applied migrations");
} catch (e) {
    console.error("something went wrong", e);
} finally {
    client.release();
}
