import "dotenv/config";
import { db } from "./db";
import { sql } from "drizzle-orm";
import { log } from "console";

(async () => {
    if (process.argv.length < 3) {
        log("Please provide a query as a command line argument");
        process.exit(1);
    }
    const query = process.argv[2];
    const result = await db.execute(sql.raw(query));
    log(JSON.stringify(result.rows, undefined, 3));
})();
