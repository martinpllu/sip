import { Hono } from "hono";
import yourDetailsPage from "./routes/your-details-page";
import homePage from "./routes/home-page";
import dbPage from "./routes/db-page";

export const app = new Hono();

app.route("/", homePage);
app.route("/your-details", yourDetailsPage);
app.route("/db", dbPage);
