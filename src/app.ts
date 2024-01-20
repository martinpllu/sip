import { Hono } from "hono";
import yourDetailsPage from "./pages/your-details";
import homePage from "./pages/home";

export const app = new Hono();

app.route("/", homePage);
app.route("/your-details", yourDetailsPage);
