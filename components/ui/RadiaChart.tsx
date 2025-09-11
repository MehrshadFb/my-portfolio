"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", easy: 1260, medium: 570, hard: 300 }];

const chartConfig = {
  easy: {
    label: "Easy",
    color: "#20B2AA",
  },
  medium: {
    label: "Medium",
    color: "#FFA500",
  },
  hard: {
    label: "Hard",
    color: "#DC2626",
  },
} satisfies ChartConfig;

export function ChartRadialStacked() {
  const totalVisitors =
    chartData[0].easy + chartData[0].medium + chartData[0].hard;

  return (
    <div className="mx-auto w-full max-w-[250px] h-[125px] ">
      <ChartContainer
        config={chartConfig}
        className="aspect-square w-full max-w-[250px] pb-0 mb-0"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={180}
          innerRadius={100}
          outerRadius={110}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-2xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground"
                      >
                        Solved
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="easy"
            stackId="a"
            cornerRadius={5}
            fill="#20B2AA"
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="medium"
            fill="#FFA500"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="hard"
            fill="#DC2626"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
