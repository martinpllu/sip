import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import myChart from "./routes/my-chart";
import root from "./routes/root";
import formPage from "./routes/form-page";
import { initCharts } from "./util/echarts";
import { readFileSync } from "fs";

initCharts();
const app = new Hono();

app.route("/", formPage);

export const handler = handle(app);
