import { handle } from "hono/aws-lambda";
import { app } from "./app";
import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";

export const handler = ApiHandler(async (event) => {
    // const session = useSession();
    // console.log("JMP handler", session.properties);

    const honoHandler = handle(app);
    return honoHandler(event);
});
