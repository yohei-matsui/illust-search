import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "フリー画像・映像素材サイト20選｜商用利用・クレジット表記まとめ | ラクポチ",
  description:
    "写真AC・ぱくたそ・Unsplash・Pexels・PIXTAまで、写真と動画の素材サイト20選を「無料／有料」「クレジット表記」「会員登録」の条件つきで整理しました。",
};

type PhotoSiteInfo = {
  id: string;
  name: string;
  url: string;
  domain: string;
  description: string;
  /** 料金体系 */
  price: "無料" | "無料＋有料" | "有料";
  /** クレジット表記が必要か */
  credit: boolean;
  /** 会員登録が必要か */
  signup: boolean;
  /** 動画素材があるか */
  video: boolean;
  tags: string[];
  accent: string;
};

const GROUPS: { label: string; note: string; icon: string; sites: PhotoSiteInfo[] }[] = [
  {
    label: "日本語・無料サイト",
    note: "日本人モデルや日本の風景を探すならこの中から。日本語で検索できるのが最大の強み。",
    icon: "🇯🇵",
    sites: [
      {
        id: "photo_ac", name: "写真AC", url: "https://www.photo-ac.com", domain: "photo-ac.com",
        description: "日本最大級の無料写真素材サイト。日本人モデル・日本の風景・ビジネスシーンが圧倒的に豊富で、まず最初に探す場所。無料会員は1日のダウンロード数と検索回数に制限がある。",
        price: "無料＋有料", credit: false, signup: true, video: false,
        tags: ["日本人モデル", "大容量", "定番"], accent: "#0ea5e9",
      },
      {
        id: "video_ac", name: "動画AC", url: "https://video-ac.com", domain: "video-ac.com",
        description: "写真ACの動画版。日本語で探せる無料の動画素材サイト。背景ループ・トランジション・実写クリップまで揃い、YouTube編集の差し込み素材に使いやすい。",
        price: "無料＋有料", credit: false, signup: true, video: true,
        tags: ["動画", "日本語", "背景ループ"], accent: "#6366f1",
      },
      {
        id: "pakutaso", name: "ぱくたそ", url: "https://www.pakutaso.com", domain: "pakutaso.com",
        description: "日本の定番フリー写真素材。人物・ビジネスの実用カットからネタ系まで振れ幅が広く、サムネイルやバナーで使うと目を引く。登録不要ですぐ落とせる。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["人物", "ネタ系", "登録不要"], accent: "#f97316",
      },
      {
        id: "photock", name: "フォトック", url: "https://www.photock.jp", domain: "photock.jp",
        description: "登録不要で使える無料写真素材。風景・自然・街並みが中心でクセが少なく、背景として敷いても主張しすぎない。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["風景", "自然", "登録不要"], accent: "#14b8a6",
      },
      {
        id: "girlydrop", name: "GIRLY DROP", url: "https://girlydrop.com", domain: "girlydrop.com",
        description: "女子目線のおしゃれな写真素材。カフェ・雑貨・コスメなど「かわいい」寄りのシーンに強く、他の素材サイトでは埋めにくいテイストを補える。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["おしゃれ", "カフェ", "女子向け"], accent: "#ec4899",
      },
      {
        id: "busitry", name: "busitry-photo", url: "https://busitry-photo.info", domain: "busitry-photo.info",
        description: "ビジネスシーンに特化した無料写真素材。オフィス・会議・PC作業といった定番カットが揃っているので、法人系のLPや資料で使いやすい。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["ビジネス", "オフィス", "特化型"], accent: "#64748b",
      },
      {
        id: "model_foto", name: "model.foto", url: "https://model.foto.ne.jp", domain: "model.foto.ne.jp",
        description: "人物モデルの写真素材に特化。ポートレートや表情のバリエーションが揃うので、同じモデルで複数カット使いたいときに便利。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["人物", "ポートレート", "特化型"], accent: "#f43f5e",
      },
      {
        id: "food_foto", name: "food.foto", url: "https://food.foto.ne.jp", domain: "food.foto.ne.jp",
        description: "料理・食材の写真素材専門。和食や日本の食卓シーンも揃っていて、海外系フードサイトでは出てこないカットが見つかる。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["料理", "和食", "特化型"], accent: "#f59e0b",
      },
      {
        id: "find47", name: "FIND/47", url: "https://find47.jp", domain: "find47.jp",
        description: "日本各地の風景写真を都道府県別に高解像度で公開している官民連携のプロジェクト。ご当地・観光ビジュアルを探すなら精度が高い。",
        price: "無料", credit: true, signup: false, video: false,
        tags: ["風景", "都道府県別", "高解像度"], accent: "#10b981",
      },
      {
        id: "skyseeker", name: "Skyseeker", url: "https://skyseeker.net", domain: "skyseeker.net",
        description: "空と雲の写真に特化したフリー素材。合成用の空差し替えや、テロップを乗せる背景を探すときに刺さる。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["空", "背景", "合成向け"], accent: "#06b6d4",
      },
    ],
  },
  {
    label: "海外・無料サイト",
    note: "クオリティとおしゃれさで選ぶならこちら。英語で検索したほうがヒット数が伸びる。",
    icon: "🌍",
    sites: [
      {
        id: "unsplash", name: "Unsplash", url: "https://unsplash.com", domain: "unsplash.com",
        description: "高品質でアーティスティックな写真が揃う定番。雰囲気重視のLPやサムネイルなら第一候補。ただし定番すぎて他社と被りやすいのが弱点。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["高品質", "おしゃれ", "定番"], accent: "#374151",
      },
      {
        id: "pexels", name: "Pexels", url: "https://www.pexels.com", domain: "pexels.com",
        description: "写真と動画の両方が無料で使える大手。動画素材の質が高く、日本語検索にもある程度対応しているので導入しやすい。",
        price: "無料", credit: false, signup: false, video: true,
        tags: ["写真", "動画", "日本語対応"], accent: "#22c55e",
      },
      {
        id: "pixabay", name: "pixabay", url: "https://pixabay.com", domain: "pixabay.com",
        description: "写真・イラスト・動画・音楽まで揃う総合素材サイト。1か所で映像もBGMも揃うので、動画編集の素材集めが早い。",
        price: "無料", credit: false, signup: false, video: true,
        tags: ["総合", "動画", "音楽あり"], accent: "#84cc16",
      },
      {
        id: "freepik", name: "Freepik", url: "https://www.freepik.com", domain: "freepik.com",
        description: "写真・イラスト・動画・PSDまで揃う大手。編集可能なPSDやベクターが強みだが、無料プランはクレジット表記が必要な点に注意。",
        price: "無料＋有料", credit: true, signup: true, video: true,
        tags: ["総合", "PSD", "ベクター"], accent: "#3b82f6",
      },
      {
        id: "kaboompics", name: "Kaboompics", url: "https://kaboompics.com", domain: "kaboompics.com",
        description: "高品質なライフスタイル写真。各画像にカラーパレットが付いているので、素材を選んだ流れでそのまま配色まで決められる。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["ライフスタイル", "配色つき", "高品質"], accent: "#d946ef",
      },
      {
        id: "burst", name: "BURST", url: "https://www.shopify.com/stock-photos", domain: "shopify.com/stock-photos",
        description: "Shopifyが運営する無料写真素材。EC・物販向けの商品カットやビジネス系が充実していて、ネットショップの素材集めに向く。",
        price: "無料", credit: false, signup: false, video: false,
        tags: ["EC", "商品カット", "ビジネス"], accent: "#8b5cf6",
      },
      {
        id: "foodiesfeed", name: "Foodiesfeed", url: "https://www.foodiesfeed.com", domain: "foodiesfeed.com",
        description: "食べ物専門の高品質フリー写真。海外系の料理・カフェシーンに強く、シズル感のあるカットが揃う。",
        price: "無料＋有料", credit: false, signup: false, video: false,
        tags: ["料理", "カフェ", "シズル感"], accent: "#eab308",
      },
    ],
  },
  {
    label: "有料ストック",
    note: "無料で見つからなかったとき、クオリティと権利の安心を金で買う選択肢。",
    icon: "💎",
    sites: [
      {
        id: "pixta", name: "PIXTA", url: "https://pixta.jp", domain: "pixta.jp",
        description: "日本最大級の有料ストック。日本人モデル・日本の風景・日本のビジネスシーンの質と量で他を圧倒する。無料サイトで日本人素材が見つからないときの最終手段。",
        price: "有料", credit: false, signup: true, video: true,
        tags: ["日本人モデル", "動画", "高品質"], accent: "#ef4444",
      },
      {
        id: "adobestock", name: "Adobe Stock", url: "https://stock.adobe.com", domain: "stock.adobe.com",
        description: "Adobe公式の有料ストック。Photoshop・Premiere Proから直接検索して配置できる連携が最大の強み。透かし入りで試してから購入できる。",
        price: "有料", credit: false, signup: true, video: true,
        tags: ["Adobe連携", "動画", "試用可"], accent: "#dc2626",
      },
      {
        id: "istock", name: "iStock", url: "https://www.istockphoto.com", domain: "istockphoto.com",
        description: "Getty Images運営の有料ストック。写真・イラスト・動画まで網羅し、ここにしかない独占素材（Signature）が多い。",
        price: "有料", credit: false, signup: true, video: true,
        tags: ["独占素材", "動画", "Getty系"], accent: "#a855f7",
      },
    ],
  },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.sites.length, 0);

function Badge({
  label, tone,
}: {
  label: string;
  tone: "free" | "paid" | "mixed" | "warn" | "muted";
}) {
  const styles: Record<string, string> = {
    free: "bg-green-50 text-green-600",
    mixed: "bg-sky-50 text-sky-600",
    paid: "bg-purple-50 text-purple-600",
    warn: "bg-amber-50 text-amber-600",
    muted: "bg-gray-50 text-gray-400",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${styles[tone]}`}>
      {label}
    </span>
  );
}

export default function PhotoIndexPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 20%, rgba(251,207,232,0.6) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(216,180,254,0.4) 0%, transparent 50%)",
      }}
    >
      <SiteNav current="photo" />

      {/* ヒーロー */}
      <section className="max-w-screen-xl mx-auto w-full px-6 pt-12 pb-2">
        <p className="text-xs font-semibold tracking-[0.2em] text-pink-400 uppercase mb-3">
          Free Photo &amp; Video Sites
        </p>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-800 tracking-tight leading-tight mb-3">
          フリー画像・映像素材サイト{TOTAL}選
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
          写真AC・ぱくたそ・Unsplash・PIXTA まで、写真と動画の素材サイトを
          「無料か有料か」「クレジット表記が要るか」「会員登録が要るか」で整理しました。
        </p>

        {/* 横断検索への導線 */}
        <Link
          href="/photo/search"
          className="inline-flex items-center gap-2 mt-6 rounded-2xl px-5 py-3 text-sm font-bold text-white transition-all active:scale-95"
          style={{
            background:
              "linear-gradient(135deg, rgba(249,168,212,0.9) 0%, rgba(236,72,153,0.95) 40%, rgba(219,39,119,0.9) 100%)",
            boxShadow: "0 4px 20px rgba(236,72,153,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          {TOTAL}サイトをまとめて横断検索する
        </Link>
      </section>

      {/* 凡例 */}
      <section className="max-w-screen-xl mx-auto w-full px-6 pt-8">
        <div
          className="rounded-2xl px-5 py-4 flex flex-wrap items-center gap-x-5 gap-y-2"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,245,250,0.5) 100%)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
        >
          <span className="text-[11px] font-bold text-gray-500">アイコンの見方</span>
          <span className="flex items-center gap-1.5"><Badge label="無料" tone="free" /><span className="text-[11px] text-gray-500">完全無料</span></span>
          <span className="flex items-center gap-1.5"><Badge label="無料＋有料" tone="mixed" /><span className="text-[11px] text-gray-500">無料枠に制限あり</span></span>
          <span className="flex items-center gap-1.5"><Badge label="有料" tone="paid" /><span className="text-[11px] text-gray-500">購読・都度購入</span></span>
          <span className="flex items-center gap-1.5"><Badge label="要クレジット" tone="warn" /><span className="text-[11px] text-gray-500">出典表記が必要</span></span>
          <span className="flex items-center gap-1.5"><Badge label="要登録" tone="muted" /><span className="text-[11px] text-gray-500">会員登録が必要</span></span>
          <span className="flex items-center gap-1.5"><Badge label="動画あり" tone="mixed" /><span className="text-[11px] text-gray-500">映像素材も扱う</span></span>
        </div>
      </section>

      {/* サイト一覧 */}
      <main className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 py-8 flex-1">
        {GROUPS.map((group) => (
          <section key={group.label} className="mb-12">
            <div className="flex items-center gap-2.5 mb-1.5 px-1">
              <span className="text-lg">{group.icon}</span>
              <h2 className="text-base font-black text-gray-800">{group.label}</h2>
              <span className="text-[11px] text-gray-400 font-medium">{group.sites.length}サイト</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-5 px-1">{group.note}</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.sites.map((site) => (
                <a
                  key={site.id}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.68) 0%, rgba(255,245,250,0.58) 100%)",
                    backdropFilter: "blur(20px) saturate(1.8)",
                    border: "1px solid rgba(255,255,255,0.78)",
                    boxShadow: "0 2px 16px rgba(236,72,153,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  {/* ヘッダー */}
                  <div className="flex items-center gap-3 px-4 pt-4 pb-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black text-white shrink-0"
                      style={{ background: site.accent }}
                    >
                      {site.name.charAt(0).toUpperCase()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-gray-800 truncate group-hover:text-pink-500 transition-colors">
                        {site.name}
                      </p>
                      <p className="text-[10px] text-gray-400 truncate">{site.domain}</p>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 text-gray-200 group-hover:text-pink-300 shrink-0 transition-colors"
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>

                  {/* 条件バッジ */}
                  <div className="flex flex-wrap gap-1.5 px-4 pb-3">
                    <Badge
                      label={site.price}
                      tone={site.price === "有料" ? "paid" : site.price === "無料" ? "free" : "mixed"}
                    />
                    {site.credit && <Badge label="要クレジット" tone="warn" />}
                    {site.signup && <Badge label="要登録" tone="muted" />}
                    {site.video && <Badge label="動画あり" tone="mixed" />}
                  </div>

                  {/* 説明 */}
                  <p className="px-4 text-xs text-gray-500 leading-relaxed flex-1">
                    {site.description}
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-1 px-4 py-3.5">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* 注意書き */}
        <div
          className="rounded-2xl px-6 py-5 mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,240,250,0.55) 100%)",
            border: "1px solid rgba(236,72,153,0.12)",
          }}
        >
          <p className="text-xs font-black text-gray-700 mb-2">利用前に必ず確認してください</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            各サイトの利用規約は改定されることがあります。ここに載せた「無料／クレジット表記／会員登録」の情報は目安として使い、
            実際に使う前には配布元の最新の利用規約を必ず確認してください。
            とくに<strong className="text-gray-700">人物が写った素材の商用利用</strong>と
            <strong className="text-gray-700">再配布・二次配布</strong>は、サイトごとに条件が大きく違います。
          </p>
        </div>

        {/* 横断検索CTA */}
        <div className="flex justify-center pb-4">
          <Link
            href="/photo/search"
            className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-pink-500 transition-all hover:bg-pink-50"
            style={{ border: "1.5px solid rgba(236,72,153,0.3)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            {TOTAL}サイトを横断検索する
          </Link>
        </div>
      </main>

      {/* フッター */}
      <footer
        className="mt-auto border-t py-6"
        style={{ background: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.5)" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="" className="w-5 h-5" />
            <span className="text-xs text-gray-400 font-medium">ラクポチ</span>
          </div>
          <Link href="/privacy" className="text-xs text-gray-300 hover:text-gray-500 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </footer>
    </div>
  );
}
