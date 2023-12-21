import { Hono } from "hono";
import yourDetailsPage from "./routes/your-details";
import homePage from "./routes/home";

export const app = new Hono();

app.route("/", homePage);
app.route("/your-details", yourDetailsPage);
