import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import yourDetailsPage from "./routes/your-details-page";
import homePage from "./routes/home-page";
import dbPage from "./routes/db-page";
// import { initCharts } from "./util/echarts";

// initCharts();
const app = new Hono();

app.route("/", homePage);
app.route("/your-details", yourDetailsPage);
app.route("/db", dbPage);

export const handler = handle(app);
