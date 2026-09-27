import Link from "next/link";

export type NavKey = "column" | "illust" | "photo";

const ITEMS: { key: NavKey; href: string; label: string }[] = [
  { key: "column", href: "/", label: "デザインコラム" },
  { key: "illust", href: "/search", label: "イラスト検索" },
  { key: "photo", href: "/photo/search", label: "画像・映像検索" },
];

/** 全ページ共通のヘッダー。current で現在地をハイライトする */
export default function SiteNav({ current }: { current?: NavKey }) {
  return (
    <header
      className="sticky top-0 z-20 backdrop-blur-2xl border-b"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(var(--brand-surface),0.45) 100%)",
        borderColor: "rgba(255,255,255,0.5)",
        boxShadow: "0 4px 24px rgba(var(--brand-rgb),0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href={current === "illust" || current === "photo" ? ITEMS.find((i) => i.key === current)!.href : "/"}
          className="flex items-center gap-2.5 shrink-0"
        >
          <img src="/favicon.svg" alt="ラクポチ" className="w-7 h-7" />
          <span className="text-sm font-black text-gray-800 tracking-tight">ラクポチ</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-xs text-gray-400 font-medium">
          {ITEMS.filter((item) => !(item.key === "column" && (current === "illust" || current === "photo"))).map((item) =>
            item.key === current ? (
              <span key={item.key} className="text-[color:var(--brand-400)] font-semibold whitespace-nowrap">
                {item.label}
              </span>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="hover:text-gray-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
