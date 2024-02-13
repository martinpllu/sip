import { sql } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { exec } from "child_process";
import { drizzle } from "drizzle-orm/neon-http";
import { promisify } from "util";

const execPromise = promisify(exec);

const getDatabaseUrlSecret = async () => {
    try {
        const { stdout } = await execPromise("npx sst secrets get DATABASE_URL");
        return stdout.trim();
    } catch (error) {
        console.error("Failed to get DATABASE_URL:", error);
        throw error;
    }
};

(async () => {
    if (process.argv.length < 3) {
        console.log("Please provide a query as a command line argument");
        process.exit(1);
    }
    const url = await getDatabaseUrlSecret();
    const neonDb = neon(url);
    const db = drizzle(neonDb, { logger: true });
    const query = process.argv[2];
    const result = await db.execute(sql.raw(query));
    console.log(JSON.stringify(result.rows, undefined, 3));
})();
