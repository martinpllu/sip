import { migrate } from "drizzle-orm/neon-http/migrator";
import { localDb } from "./local-db";

(async () => {
    try {
        await migrate(localDb, { migrationsFolder: "./drizzle" });
        console.log("Successfully applied migrations");
    } catch (e) {
        console.error("something went wrong", e);
    }
})();
