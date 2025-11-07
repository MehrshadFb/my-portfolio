"use client";

import { useMemo, useState } from "react";
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
  const [showTooltip, setShowTooltip] = useState(false);

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
    <div
      className="mx-auto w-full max-w-[250px] h-[125px] relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
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
      {showTooltip && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-background border border-border rounded-lg shadow-lg px-3 py-2 z-10">
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#20B2AA" }}
              ></div>
              <span className="text-muted-foreground">Easy:</span>
              <span className="font-semibold">{data.easy}</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#FFA500" }}
              ></div>
              <span className="text-muted-foreground">Medium:</span>
              <span className="font-semibold">{data.medium}</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "#DC2626" }}
              ></div>
              <span className="text-muted-foreground">Hard:</span>
              <span className="font-semibold">{data.hard}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
