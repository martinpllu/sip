import "dotenv/config";
import type { Config } from "drizzle-kit";
export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DB_CONNECTION_STRING!,
    },
} satisfies Config;
