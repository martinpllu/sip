import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import myChart from "./routes/my-chart";
import root from "./routes/root";
import { initCharts } from "./util/echarts";
import { readFileSync } from "fs";

initCharts();
const app = new Hono();

app.route("/", root);
app.route("/my-chart", myChart);
app.get("/index.css", (c) => c.text(readFileSync("assets/index.css", "utf-8")));

export const handler = handle(app);
