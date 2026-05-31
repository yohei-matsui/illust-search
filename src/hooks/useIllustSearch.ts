"use client";

import { useState, useCallback, useRef } from "react";
import { IllustItem } from "@/types";

type SearchState =
  | { status: "idle" }
  | { status: "loading"; page: number }
  | { status: "done"; items: IllustItem[]; page: number; hasMore: boolean; fromApi: boolean }
  | { status: "error"; message: string };

const PER_PAGE = 100; // SerpAPI Google Images が1ページで返す件数の目安

export function useIllustSearch(enabledSiteIds: Set<string>) {
  const [state, setState] = useState<SearchState>({ status: "idle" });
  const currentQuery = useRef("");

  const fetchPage = useCallback(
    async (query: string, page: number) => {
      if (!query) {
        setState({ status: "idle" });
        return;
      }

      currentQuery.current = query;
      setState({ status: "loading", page });

      try {
        const sites = [...enabledSiteIds].join(",");
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}&sites=${encodeURIComponent(sites)}&page=${page}`
        );
        const json = await res.json();

        // 途中で別の検索が走った場合は破棄
        if (currentQuery.current !== query) return;

        if (!res.ok) throw new Error(json.error ?? `HTTP ${res.status}`);

        const items: IllustItem[] = json.items ?? [];
        setState({
          status: "done",
          items,
          page,
          hasMore: items.length >= PER_PAGE,
          fromApi: true,
        });
      } catch (err) {
        if (currentQuery.current !== query) return;
        setState({
          status: "error",
          message: err instanceof Error ? err.message : "不明なエラーが発生しました",
        });
      }
    },
    [enabledSiteIds]
  );

  const search = useCallback(
    (query: string) => fetchPage(query, 0),
    [fetchPage]
  );

  const goToPage = useCallback(
    (page: number) => fetchPage(currentQuery.current, page),
    [fetchPage]
  );

  return { state, search, goToPage };
}
