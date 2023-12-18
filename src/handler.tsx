import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import formPage from "./routes/form-page";
import homePage from "./routes/home-page";
import dbPage from "./routes/db-page";
// import { initCharts } from "./util/echarts";

// initCharts();
const app = new Hono();

app.route("/", homePage);
app.route("/form", formPage);
app.route("/db", dbPage);

export const handler = handle(app);
