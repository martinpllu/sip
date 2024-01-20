import { serve } from "@hono/node-server";
import { app } from "../app";

serve(app, (info) => {
    console.log(`Listening on http://localhost:${info.port}`);
});
