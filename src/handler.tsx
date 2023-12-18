import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import formPage from "./routes/form-page";
import dbPage from "./routes/db-page";
// import { initCharts } from "./util/echarts";

// initCharts();
const app = new Hono();

// app.route("/", formPage);
app.route("/", dbPage);

export const handler = handle(app);
