import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
console.time("import Config");
import { Config } from "sst/node/config";
console.timeEnd("import Config");

neonConfig.fetchConnectionCache = true;
console.time("connection");
export const connection = neon((Config as any)["DB_CONNECTION_STRING"]);
console.timeEnd("connection");
console.time("db");
export const db = drizzle(connection, { schema });
console.timeEnd("db");
