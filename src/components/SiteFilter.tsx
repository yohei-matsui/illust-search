"use client";

import { useState } from "react";
import { IllustSite } from "@/types";

type Props = {
  sites: IllustSite[];
  onToggle: (siteId: string) => void;
};

function FilterContent({ sites, onToggle }: Props) {
  const enabledCount = sites.filter((s) => s.enabled).length;
  return (
    <div className="flex flex-col h-full">
      <p className="text-[10px] font-bold tracking-[0.18em] text-gray-500 uppercase mb-4 px-1 shrink-0">
        検索対象サイト
      </p>
      <ul className="space-y-1 overflow-y-auto pr-1 flex-1 min-h-0">
        {sites.map((site) => (
          <li key={site.id}>
            <button
              type="button"
              onClick={() => onToggle(site.id)}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-left transition-all overflow-hidden ${
                site.enabled
                  ? "bg-white shadow-sm border border-pink-100 text-gray-700"
                  : "text-gray-400 hover:bg-white/60"
              }`}
            >
              <span className="text-xs font-medium truncate min-w-0">{site.name}</span>
              <span
                className={`relative inline-flex shrink-0 items-center rounded-full transition-colors ${
                  site.enabled ? "bg-pink-400" : "bg-gray-200"
                }`}
                style={{ height: "18px", width: "32px" }}
              >
                <span
                  className={`inline-block h-3 w-3 rounded-full bg-white shadow-sm transition-transform ${
                    site.enabled ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3 px-3 shrink-0">
        <div className="h-px bg-gray-100 mb-4" />
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{enabledCount} / {sites.length} サイト</span>
          <button
            type="button"
            onClick={() => sites.forEach((s) => !s.enabled && onToggle(s.id))}
            className="text-pink-400 hover:text-pink-600 font-medium transition-colors"
          >
            すべて選択
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SiteFilter({ sites, onToggle }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const enabledCount = sites.filter((s) => s.enabled).length;

  return (
    <>
      {/* PC: サイドバー */}
      <aside className="hidden lg:block w-52 shrink-0" style={{}}>
        <div className="sticky top-24 flex flex-col max-h-[calc(100vh-7rem)] rounded-2xl p-3" style={{background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,245,250,0.4) 100%)", backdropFilter: "blur(20px) saturate(1.8)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 4px 24px rgba(236,72,153,0.06), inset 0 1px 0 rgba(255,255,255,0.8)"}}>
          <FilterContent sites={sites} onToggle={onToggle} />
        </div>
      </aside>

      {/* スマホ: フィルターボタン */}
      <div className="lg:hidden fixed bottom-5 right-5 z-30">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 text-white text-sm font-bold px-4 py-3 rounded-full transition-all active:scale-95"
          style={{background: "linear-gradient(135deg, rgba(249,168,212,0.85) 0%, rgba(236,72,153,0.9) 100%)", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(236,72,153,0.35), inset 0 1px 0 rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.35)"}}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          サイト選択
          <span className="bg-white text-pink-500 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
            {enabledCount}
          </span>
        </button>
      </div>

      {/* スマホ: ドロワー */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          {/* 背景 */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
          {/* パネル */}
          <div className="w-72 bg-[#faf8fb] flex flex-col p-5 shadow-2xl h-screen overflow-hidden">
            <div className="flex items-center justify-between mb-4 shrink-0">
              <p className="text-sm font-black text-gray-700">検索対象サイト</p>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="text-gray-300 hover:text-gray-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="flex-1 min-h-0">
              <FilterContent sites={sites} onToggle={onToggle} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
