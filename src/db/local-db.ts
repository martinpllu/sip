// Can't use the following on the client side: import { Config } from "sst/node/config";
// so need to get the secrets from the command line
// TODO - is there a better way to do this?
import { promisify } from "util";
import { exec } from "child_process";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const execPromise = promisify(exec);

export const getDatabaseUrlSecret = async () => {
    try {
        const { stdout } = await execPromise("npx sst secrets get DATABASE_CONNECTION_STRING");
        return stdout.trim();
    } catch (error) {
        console.error("Failed to get DATABASE_CONNECTION_STRING:", error);
        throw error;
    }
};

const url = await getDatabaseUrlSecret();
const neonDb = neon(url);
export const localDb = drizzle(neonDb, { logger: true });
