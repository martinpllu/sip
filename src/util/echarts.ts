import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import {
    GridComponent,
    TitleComponent,
    TooltipComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";

// Using the tree-shakable echarts interface to import a minimal set of dependencies
// See https://echarts.apache.org/en/tutorial.html#Use%20ECharts%20with%20bundler%20and%20NPM

export function initCharts() {
    echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        BarChart,
        LineChart,
        SVGRenderer,
    ]);
}
