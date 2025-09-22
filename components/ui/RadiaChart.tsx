"use client";

import { useMemo } from "react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LeetCodeChartData } from "../LeetCodeGrid";

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

interface ChartRadialStackedProps {
  data: LeetCodeChartData;
  isLoading?: boolean;
  error?: string | null;
}

export function ChartRadialStacked({
  data,
  isLoading = false,
  error = null,
}: ChartRadialStackedProps) {
  const totalSolvedProblems = useMemo(
    () => data.easy + data.medium + data.hard,
    [data]
  );

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-[250px] h-[125px] flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-[250px] h-[125px] flex items-center justify-center">
        <div className="text-destructive text-sm text-center">
          <div>Failed to load data</div>
          <div className="text-xs text-muted-foreground mt-1">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[250px] h-[125px]">
      <ChartContainer
        config={chartConfig}
        className="aspect-square w-full max-w-[250px] pb-0 mb-0"
      >
        <RadialBarChart
          data={[data]}
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
                        {totalSolvedProblems.toLocaleString()}
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
