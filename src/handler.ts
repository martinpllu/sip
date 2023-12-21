import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import yourDetails from "./routes/your-details";
import home from "./routes/home";
import dbPage from "./routes/db";

const app = new Hono();

app.route("/", home);
app.route("/your-details", yourDetails);
// app.route("/db", dbPage);

export const handler = handle(app);
