import { NextRequest, NextResponse } from "next/server";
import { IllustItem } from "@/types";

const SITE_DOMAINS: Record<string, string> = {
  irasutoya:    "www.irasutoya.com",
  sokosuto:     "soco-st.com",
  linustock:    "linustock.com",
  illust_ac:    "www.ac-illust.com",
  loosedrawing: "loosedrawing.com",
  icooon:       "icooon-mono.com",
  girlysozai:   "girlysozai.com",
  illustman:    "illustman.net",
  illustnavi:   "illust-navi.com",
  fujikana:     "fujikanaillust.com",
  suisai:       "sui-sai.jp",
  sozaino:      "sozaino.site",
  shigureni:    "shigureni.com",
  kyuncuts:     "kyuncuts.com",
  irasuton:     "irasuton.com",
  jitanda:      "jitanda.com",
  tyoudoii:     "tyoudoii-illust.com",
  undraw:       "undraw.co",
  storyset:     "storyset.com",
  manypixels:   "manypixels.co",
  vectorshelf:  "vectorshelf.com",
};

const SITE_NAMES: Record<string, string> = {
  irasutoya:    "いらすとや",
  sokosuto:     "ソコスト",
  linustock:    "Linustock",
  illust_ac:    "イラストAC",
  loosedrawing: "loosedrawing",
  icooon:       "ICOOON MONO",
  girlysozai:   "ガーリー素材",
  illustman:    "イラストマン",
  illustnavi:   "イラストナビ",
  fujikana:     "フジカナイラスト",
  suisai:       "水彩素材",
  sozaino:      "素材ノ",
  shigureni:    "しぐれに",
  kyuncuts:     "キュンカッツ",
  irasuton:     "いらすとん",
  jitanda:      "じたんだ",
  tyoudoii:     "ちょうどいいイラスト",
  undraw:       "unDraw",
  storyset:     "Storyset",
  manypixels:   "ManyPixels",
  vectorshelf:  "VectorShelf",
};

type SerpImageResult = {
  title?: string;
  original?: string;
  thumbnail?: string;
  link?: string;
  source?: string;
};

function siteIdFromSource(source: string): string {
  return (
    Object.entries(SITE_DOMAINS).find(([, domain]) =>
      source?.includes(domain) || domain?.includes(source)
    )?.[0] ?? "unknown"
  );
}

function toIllustItem(raw: SerpImageResult, index: number): IllustItem | null {
  const imageUrl = raw.thumbnail ?? raw.original;
  if (!imageUrl || !raw.link) return null;

  const siteId = siteIdFromSource(raw.source ?? "");

  return {
    id: `serp-${index}-${Date.now()}`,
    title: raw.title ?? "",
    imageUrl,
    sourceUrl: raw.link,
    siteId,
    siteName: SITE_NAMES[siteId] ?? raw.source ?? "",
    tags: [],
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("q")?.trim();
  const siteIds = searchParams.get("sites")?.split(",").filter(Boolean) ?? [];
  const page = Math.max(0, parseInt(searchParams.get("page") ?? "0", 10));

  if (!query) {
    return NextResponse.json({ error: "クエリパラメータ q が必要です" }, { status: 400 });
  }

  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "SERPAPI_KEY が設定されていません" }, { status: 503 });
  }

  const allSiteIds = Object.keys(SITE_DOMAINS);
  const activeSiteIds =
    siteIds.length === 0 || siteIds.length === allSiteIds.length
      ? allSiteIds
      : siteIds;

  const domains = activeSiteIds.map((id) => SITE_DOMAINS[id]).filter(Boolean);
  const siteFilter = domains.map((d) => `site:${d}`).join(" OR ");
  const fullQuery = `${query} (${siteFilter})`;

  const url = new URL("https://serpapi.com/search");
  url.searchParams.set("engine", "google_images");
  url.searchParams.set("q", fullQuery);
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("safe", "active");
  url.searchParams.set("hl", "ja");
  url.searchParams.set("gl", "jp");
  if (page > 0) url.searchParams.set("ijn", String(page));

  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    const body = await res.text();
    console.error("[SerpAPI] error:", res.status, body);
    return NextResponse.json({ error: `SerpAPI エラー: ${res.status}` }, { status: res.status });
  }

  const data = await res.json();

  if (data.error) {
    return NextResponse.json({ error: data.error }, { status: 400 });
  }

  const items: IllustItem[] = (data.images_results ?? [])
    .map((item: SerpImageResult, i: number) => toIllustItem(item, i))
    .filter((item: IllustItem | null): item is IllustItem => item !== null);

  return NextResponse.json({ items, totalResults: items.length });
}
