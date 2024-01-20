import { Hono } from "hono";
import yourDetailsPage from "./pages/your-details.page";
import homePage from "./pages/home.page";

export const app = new Hono();

app.route("/", homePage);
app.route("/your-details", yourDetailsPage);
