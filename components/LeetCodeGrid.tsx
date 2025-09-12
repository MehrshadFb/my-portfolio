"use client";

import { useEffect, useState, useCallback } from "react";
import { ChartRadialStacked } from "@/components/ui/RadiaChart";

interface ProblemStats {
  solved: number;
  total: number;
}

interface ProblemData {
  easy: ProblemStats;
  medium: ProblemStats;
  hard: ProblemStats;
}

interface DailyProgress {
  [date: string]: number;
}

interface YearProgress {
  daily: DailyProgress;
  total: number;
}

interface ProgressData {
  [year: string]: YearProgress;
  current: YearProgress;
}

interface LeetCodeApiResponse {
  aboutme: string;
  company: string | null;
  country_name: string;
  github: string;
  job_title: string | null;
  linkedin: string;
  problem: ProblemData;
  progress: ProgressData;
  ranking: number;
  realname: string;
  school: string;
  skill: string[];
  twitter: string | null;
  username: string;
  website: string[];
}

export interface LeetCodeChartData {
  easy: number;
  medium: number;
  hard: number;
}

const API_BASE_URL =
  "https://leetcode-api-140473619582.us-central1.run.app/api/user";
const USERNAME = "MehrshadFb";
const FETCH_TIMEOUT = 10000;

export function LeetCodeGrid() {
  const [leetCodeData, setLeetCodeData] = useState<LeetCodeChartData>({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeetCodeData =
    useCallback(async (): Promise<LeetCodeApiResponse> => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
      try {
        const response = await fetch(`${API_BASE_URL}/${USERNAME}`, {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: LeetCodeApiResponse = await response.json();
        if (!data?.problem) {
          throw new Error("Invalid API response format");
        }
        return data;
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            throw new Error("Request timeout");
          }
          throw error;
        }
        throw new Error("Unknown error occurred");
      } finally {
        clearTimeout(timeoutId);
      }
    }, []);

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchLeetCodeData();
        if (isMounted) {
          setLeetCodeData({
            easy: data.problem.easy.solved || 0,
            medium: data.problem.medium.solved || 0,
            hard: data.problem.hard.solved || 0,
          });
        }
      } catch (error) {
        if (isMounted) {
          setError(
            error instanceof Error ? error.message : "Failed to load data"
          );
          console.error("Failed to fetch LeetCode data:", error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, [fetchLeetCodeData]);

  return (
    <ChartRadialStacked
      data={leetCodeData}
      isLoading={isLoading}
      error={error}
    />
  );
}
