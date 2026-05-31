"use client";

import { IllustSite } from "@/types";

type Props = {
  sites: IllustSite[];
  onSearch: (query: string) => void;
};

// サイトごとのアクセントカラー
const ACCENT_COLORS: Record<string, string> = {
  irasutoya:    "bg-orange-100 text-orange-500",
  sokosuto:     "bg-sky-100 text-sky-500",
  linustock:    "bg-slate-100 text-slate-500",
  illust_ac:    "bg-blue-100 text-blue-500",
  loosedrawing: "bg-teal-100 text-teal-500",
  icooon:       "bg-gray-100 text-gray-500",
  girlysozai:   "bg-pink-100 text-pink-500",
  illustman:    "bg-indigo-100 text-indigo-500",
  illustnavi:   "bg-yellow-100 text-yellow-600",
  fujikana:     "bg-amber-100 text-amber-500",
  suisai:       "bg-cyan-100 text-cyan-500",
  sozaino:      "bg-lime-100 text-lime-600",
  shigureni:    "bg-rose-100 text-rose-500",
  kyuncuts:     "bg-fuchsia-100 text-fuchsia-500",
  irasuton:     "bg-orange-100 text-orange-400",
  jitanda:      "bg-violet-100 text-violet-500",
  tyoudoii:     "bg-green-100 text-green-500",
  undraw:       "bg-purple-100 text-purple-500",
  storyset:     "bg-red-100 text-red-500",
  manypixels:   "bg-emerald-100 text-emerald-500",
  vectorshelf:  "bg-blue-100 text-blue-400",
};

function SiteInitial({ site }: { site: IllustSite }) {
  const color = ACCENT_COLORS[site.id] ?? "bg-gray-100 text-gray-400";
  const initial = site.name.charAt(0).toUpperCase();
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold shrink-0 ${color}`}>
      {initial}
    </div>
  );
}

export default function SiteShowcase({ sites, onSearch }: Props) {
  // 日本語サイトと海外サイトに分ける
  const overseasIds = new Set(["undraw", "storyset", "manypixels", "vectorshelf"]);
  const japaneseSites = sites.filter((s) => !overseasIds.has(s.id));
  const overseasSites = sites.filter((s) => overseasIds.has(s.id));

  return (
    <div className="w-full">
      <SiteGroup label="🇯🇵 日本語サイト" sites={japaneseSites} onSearch={onSearch} />
      {overseasSites.length > 0 && (
        <SiteGroup label="🌏 海外サイト" sites={overseasSites} onSearch={onSearch} />
      )}
    </div>
  );
}

function SiteGroup({
  label, sites, onSearch,
}: {
  label: string;
  sites: IllustSite[];
  onSearch: (q: string) => void;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">{label}</p>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
        {sites.map((site) => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <SiteInitial site={site} />
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">{site.name}</p>
                <p className="text-[10px] text-gray-300 truncate">{site.url.replace(/https?:\/\//, "").replace(/\/$/, "")}</p>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-200 group-hover:text-pink-300 shrink-0 ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{site.description}</p>
            <div className="flex flex-wrap gap-1">
              {site.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={(e) => { e.preventDefault(); onSearch(tag); }}
                  className="rounded-full bg-pink-50 hover:bg-pink-100 px-2 py-0.5 text-[10px] font-medium text-pink-400 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
