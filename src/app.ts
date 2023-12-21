import { Hono } from "hono";
import yourDetailsPage from "./routes/your-details";
import homePage from "./routes/home";
import dbPage from "./routes/db";

export const app = new Hono();

app.route("/", homePage);
app.route("/your-details", yourDetailsPage);
app.route("/db", dbPage);
