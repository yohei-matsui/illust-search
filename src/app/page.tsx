"use client";

import { useState, useMemo, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import SiteFilter from "@/components/SiteFilter";
import MasonryGrid from "@/components/MasonryGrid";
import SiteShowcase from "@/components/SiteShowcase";
import Pagination from "@/components/Pagination";
import { SITES } from "@/data/dummyData";
import { IllustSite } from "@/types";
import { useIllustSearch } from "@/hooks/useIllustSearch";

const STORAGE_KEY = "rakupochi_enabled_sites";

function loadEnabledIds(): Set<string> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return null;
  }
}

function buildInitialSites(): IllustSite[] {
  const saved = loadEnabledIds();
  if (!saved) return SITES;
  return SITES.map((s) => ({ ...s, enabled: saved.has(s.id) }));
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [sites, setSites] = useState<IllustSite[]>(buildInitialSites);

  const handleToggle = (siteId: string) => {
    setSites((prev) => {
      const next = prev.map((s) => (s.id === siteId ? { ...s, enabled: !s.enabled } : s));
      // 変更後の有効IDをlocalStorageに保存
      const enabledIds = next.filter((s) => s.enabled).map((s) => s.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enabledIds));
      return next;
    });
  };

  const enabledSiteIds = useMemo(
    () => new Set(sites.filter((s) => s.enabled).map((s) => s.id)),
    [sites]
  );

  const { state, search, goToPage } = useIllustSearch(enabledSiteIds);

  useEffect(() => {
    search(query);
  }, [query, search]);

  const displayItems = state.status === "done" ? state.items : [];
  const currentPage  = state.status === "done" || state.status === "loading" ? (state as { page: number }).page : 0;
  const hasMore      = state.status === "done" ? state.hasMore : false;

  const isIdle    = state.status === "idle";
  const isLoading = state.status === "loading";
  const isError   = state.status === "error";
  const fromApi   = state.status === "done" && state.fromApi;

  // サイドバーの有効サイトに絞ったSITES
  const enabledSites = useMemo(
    () => sites.filter((s) => s.enabled),
    [sites]
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#faf8fb]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-pink-500 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm font-black text-gray-800 tracking-tight">ラクポチ イラスト</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-gray-400 font-medium">
            <span className="text-pink-400 font-semibold">横断検索</span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">サイト一覧</span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">使い方</span>
          </nav>
        </div>
      </header>

      {/* ヒーロー＆検索 */}
      <SearchBar onSearch={setQuery} />

      {/* コンテンツエリア */}
      <div className="max-w-screen-xl mx-auto w-full px-6 py-8 flex gap-8 flex-1 min-w-0">
        {/* サイドバー */}
        <SiteFilter sites={sites} onToggle={handleToggle} />

        {/* メイン */}
        <main className="flex-1 min-w-0">
          {/* クエリなし → サイト紹介 */}
          {isIdle ? (
            <SiteShowcase sites={enabledSites} onSearch={setQuery} />
          ) : (
            <>
              {/* 結果ヘッダー */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gray-100" />
                <div className="flex items-center gap-2 shrink-0">
                  {isLoading && (
                    <span className="inline-block w-3.5 h-3.5 border-2 border-pink-300 border-t-pink-500 rounded-full animate-spin" />
                  )}
                  <p className="text-xs text-gray-400">
                    {isLoading ? (
                      "検索中..."
                    ) : isError ? (
                      <span className="text-red-400">{(state as { message: string }).message}</span>
                    ) : (
                      <>
                        <span className="font-semibold text-pink-500">「{query}」</span>
                        {" — "}{displayItems.length} 件
                        {fromApi && (
                          <span className="ml-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[10px] text-green-500 font-semibold">
                            Live
                          </span>
                        )}
                      </>
                    )}
                  </p>
                </div>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <MasonryGrid items={displayItems} isLoading={isLoading} />
              {!isLoading && (
                <Pagination
                  currentPage={currentPage}
                  hasMore={hasMore}
                  onPageChange={goToPage}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* フッター */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-pink-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-500">ラクポチ イラスト</span>
          </div>
          <p className="text-xs text-gray-300">© 2026 — フリーイラスト横断検索（プロトタイプ）</p>
        </div>
      </footer>
    </div>
  );
}
