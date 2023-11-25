import dayjs from "dayjs";
import * as echarts from "echarts/core";
import { Hono } from "hono";
import { exampleData } from "./example-data";

export default new Hono() //
    .get("/", async (c) => {
        const chart = echarts.init(null, null, {
            renderer: "svg",
            ssr: true,
            width: 400,
            height: 300,
        });
        chart.setOption({
            xAxis: {
                type: "category",
                data: exampleData.map((d: any) => dayjs(d.date).format("MMM D")),
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: exampleData.map((d: any) => d.count),
                    type: "line",
                    showSymbol: false,
                },
            ],
            grid: {
                top: 10,
                bottom: 30,
                left: 60,
            },
        });

        const svg = chart.renderToSVGString();
        return c.html(svg);
    });
