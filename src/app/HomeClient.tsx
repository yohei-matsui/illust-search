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
  const [showHowTo, setShowHowTo] = useState(false);

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100" style={{backgroundImage: "radial-gradient(ellipse at 20% 20%, rgba(251,207,232,0.6) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(216,180,254,0.4) 0%, transparent 50%), radial-gradient(ellipse at 60% 10%, rgba(254,205,211,0.5) 0%, transparent 40%)"}}>
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 backdrop-blur-2xl border-b" style={{background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,240,245,0.45) 100%)", borderColor: "rgba(255,255,255,0.5)", boxShadow: "0 4px 24px rgba(236,72,153,0.08), inset 0 1px 0 rgba(255,255,255,0.7)"}}>
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="ラクポチ イラスト" className="w-7 h-7" />
            <span className="text-sm font-black text-gray-800 tracking-tight">ラクポチ イラスト</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-gray-400 font-medium">
            <span className="text-pink-400 font-semibold">横断検索</span>
            <a
              href="/"
              className="hover:text-gray-600 transition-colors"
            >デザインコラム</a>
            <span
              className="hover:text-gray-600 cursor-pointer transition-colors"
              onClick={() => { setQuery(""); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >サイト一覧</span>
            <span
              className="hover:text-gray-600 cursor-pointer transition-colors"
              onClick={() => setShowHowTo(true)}
            >使い方</span>
          </nav>
        </div>
      </header>

      {/* ヒーロー＆検索 */}
      <SearchBar onSearch={setQuery} />

      {/* コンテンツエリア */}
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex gap-8 flex-1 min-w-0">
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

      {/* 使い方モーダル */}
      {showHowTo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setShowHowTo(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
              onClick={() => setShowHowTo(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="flex items-center gap-2.5 mb-6">
              <img src="/favicon.svg" alt="ラクポチ イラスト" className="w-8 h-8" />
              <h2 className="text-base font-black text-gray-800">ラクポチ イラストの使い方</h2>
            </div>
            <ol className="space-y-5">
              {[
                { step: "1", title: "キーワードを入力", desc: "検索バーに「ビジネス」「猫」「季節」など探したいイラストのキーワードを入力します。" },
                { step: "2", title: "サイトを選ぶ", desc: "左のサイドバーで検索対象のサイトをON/OFFできます。設定は次回訪問時にも保持されます。" },
                { step: "3", title: "画像をクリック", desc: "気に入ったイラストをクリックすると、素材配布元のサイトが新しいタブで開きます。" },
              ].map(({ step, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-500 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{step}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-700 mb-1">{title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <button
              className="mt-8 w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold py-3 transition-colors"
              onClick={() => setShowHowTo(false)}
            >
              さっそく使ってみる
            </button>
          </div>
        </div>
      )}

      {/* フッター */}
      <footer className="border-t backdrop-blur-xl" style={{background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,240,245,0.4) 100%)", borderColor: "rgba(255,255,255,0.4)"}}>
        <div className="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="ラクポチ イラスト" className="w-5 h-5" />
            <span className="text-xs font-bold text-gray-500">ラクポチ イラスト</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">プライバシーポリシー</a>
            <p className="text-xs text-gray-500">© 2026 ラクポチ イラスト</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
