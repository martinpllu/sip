import { sql } from "drizzle-orm";
import { localDb } from "./local-db";

(async () => {
    if (process.argv.length < 3) {
        console.log("Please provide a query as a command line argument");
        process.exit(1);
    }
    const query = process.argv[2];
    const result = await localDb.execute(sql.raw(query));
    console.log(JSON.stringify(result.rows, undefined, 3));
})();
