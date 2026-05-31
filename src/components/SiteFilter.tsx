"use client";

import { IllustSite } from "@/types";

type Props = {
  sites: IllustSite[];
  onToggle: (siteId: string) => void;
};

export default function SiteFilter({ sites, onToggle }: Props) {
  const enabledCount = sites.filter((s) => s.enabled).length;

  return (
    <aside className="w-52 shrink-0">
      <div className="sticky top-24 flex flex-col max-h-[calc(100vh-7rem)]">
        <p className="text-[10px] font-bold tracking-[0.18em] text-gray-300 uppercase mb-4 px-1 shrink-0">
          検索対象サイト
        </p>
        <ul className="space-y-1 overflow-y-auto pr-1 flex-1 min-h-0">
          {sites.map((site) => (
            <li key={site.id}>
              <button
                type="button"
                onClick={() => onToggle(site.id)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                  site.enabled
                    ? "bg-white shadow-sm border border-pink-100 text-gray-700"
                    : "text-gray-400 hover:bg-white/60"
                }`}
              >
                <span className="text-sm font-medium truncate">{site.name}</span>
                {/* pill toggle */}
                <span
                  className={`relative inline-flex h-4.5 w-8 shrink-0 items-center rounded-full transition-colors ${
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
    </aside>
  );
}
