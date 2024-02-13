import "dotenv/config";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./db";

(async () => {
    try {
        await migrate(db, { migrationsFolder: "./drizzle" });
        console.log("Successfully applied migrations");
    } catch (e) {
        console.error("something went wrong", e);
    }
})();
