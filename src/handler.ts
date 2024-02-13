import { handle } from "hono/aws-lambda";
import { app } from "./app";
import { ApiHandler } from "sst/node/api";

// Wrap in the SST ApiHandler so we can call useSession in the app
export const handler = ApiHandler(async (event) => {
    const honoHandler = handle(app);
    return honoHandler(event);
});
