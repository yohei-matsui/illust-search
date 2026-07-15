import Link from "next/link";

export const metadata = {
  title: "デザインコラム | ラクポチ イラスト",
  description: "動画編集・イラスト素材・配色など、クリエイターの制作をサポートするデザインコラムを発信しています。",
};

const ARTICLES = [
  {
    slug: "color-psychology",
    category: "配色",
    date: "2025-06-26",
    title: "【初心者向け】失敗しない色の選び方｜色彩心理学を活かした配色方法",
    excerpt:
      "色が人の性格・気分・味覚にまで影響を与える「色彩心理学」を解説。対人テクニック3選・なりたい自分に近づく配色の魔法まで実践的に紹介します。",
    readMin: 10,
  },
  {
    slug: "typography-tips",
    category: "デザイン基礎",
    date: "2025-06-26",
    title: "【初心者向け】プロっぽいテロップにする小技｜クオリティを上げる文字組み",
    excerpt:
      "字間・行間・全角半角・句読点・ひらがな——プロが必ず実践する文字組みテクニック5選。これを意識するだけでテロップのクオリティは劇的に上がります。",
    readMin: 8,
  },
  {
    slug: "drop-shadow",
    category: "実践",
    date: "2025-06-26",
    title: "【クオリティUP】おしゃれなドロップシャドウのつけ方｜テロップルールの基本",
    excerpt:
      "ふんわり型・くっきり型・3D風テロップまで。Premiere Proのエッセンシャルグラフィックスで使える正解パターンと絶対NGな失敗例を解説します。",
    readMin: 8,
  },
  {
    slug: "recommended-fonts",
    category: "デザイン基礎",
    date: "2025-06-26",
    title: "【これで差がつく】演出に使える動画編集のおすすめフォント11選",
    excerpt:
      "バラエティ・Vlog・ホラー・和風まで——動画のジャンルに合わせて使い分けたいフリーフォント11選を特徴・利用シーンとともに解説します。",
    readMin: 10,
  },
  {
    slug: "telop-design",
    category: "実践",
    date: "2025-06-26",
    title: "【絶対NG】ダサくなるテロップの特徴｜テロップルールの基本",
    excerpt:
      "マイター結合・補色・視認性・字間・改行位置——実務で絶対に避けるべき5つのテロップデザインの落とし穴と、具体的な改善手順を解説します。",
    readMin: 8,
  },
  {
    slug: "free-illust-sites",
    category: "素材選び",
    date: "2025-06-26",
    title: "【厳選21選】フリーイラストサイトの選び方｜商用利用まで細かく解説",
    excerpt:
      "商用利用・クレジット・点数制限まで細かく整理。万能系・線画フラット系・アイコン特化型の3カテゴリでテイスト別に厳選21サイトを紹介します。",
    readMin: 12,
  },
  {
    slug: "design-tips",
    category: "デザイン基礎",
    date: "2025-06-26",
    title: "【一瞬で良くなる】動画デザインのコツ3選｜デザインの基本ルール",
    excerpt:
      "近接・整列／強弱／余白——素人っぽさが抜けない動画の根本原因と、実務で使えるデザインの基本ルールを具体的に解説します。",
    readMin: 8,
  },
  {
    slug: "color-rule",
    category: "配色",
    date: "2025-06-26",
    title: "【鉄則】動画デザインの配色ルール｜色の使い方の基本",
    excerpt:
      "3色以内・70:25:5の黄金比率・トンマナ——プロの動画編集者が実務で使う配色の基本ルールをロジックで解説します。",
    readMin: 7,
  },
];

const CATEGORY_COLOR: Record<string, string> = {
  素材選び: "bg-pink-50 text-pink-500",
  配色: "bg-purple-50 text-purple-500",
  デザイン基礎: "bg-blue-50 text-blue-500",
  ツール: "bg-green-50 text-green-500",
  実践: "bg-orange-50 text-orange-500",
};

export default function ColumnPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 20%, rgba(251,207,232,0.6) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(216,180,254,0.4) 0%, transparent 50%)",
      }}
    >
      {/* ヘッダー */}
      <header
        className="sticky top-0 z-20 backdrop-blur-2xl border-b"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,240,245,0.45) 100%)",
          borderColor: "rgba(255,255,255,0.5)",
          boxShadow:
            "0 4px 24px rgba(236,72,153,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="ラクポチ イラスト" className="w-7 h-7" />
            <span className="text-sm font-black text-gray-800 tracking-tight">
              ラクポチ イラスト
            </span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-gray-400 font-medium">
            <Link href="/search" className="hover:text-gray-600 transition-colors">
              横断検索
            </Link>
            <span className="text-pink-400 font-semibold">デザインコラム</span>
            <Link href="/search#sites" className="hover:text-gray-600 transition-colors">
              サイト一覧
            </Link>
          </nav>
        </div>
      </header>

      {/* ページタイトル */}
      <section className="max-w-screen-xl mx-auto w-full px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">✏️</span>
          <h1 className="text-2xl font-black text-gray-800 tracking-tight">
            デザインコラム
          </h1>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          動画編集・イラスト素材・配色など、クリエイターの制作をサポートする記事をお届けします。
        </p>
      </section>

      {/* 記事一覧 */}
      <main className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 pb-16 flex-1">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link key={article.slug} href={`/column/${article.slug}`} className="block">
              <article
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,245,250,0.55) 100%)",
                  backdropFilter: "blur(20px) saturate(1.8)",
                  border: "1px solid rgba(255,255,255,0.75)",
                  boxShadow:
                    "0 2px 16px rgba(236,72,153,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* サムネイルプレースホルダー */}
                <div
                  className="w-full h-36 flex items-center justify-center text-4xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(251,207,232,0.5) 0%, rgba(216,180,254,0.4) 100%)",
                  }}
                >
                  {article.category === "素材選び" && "🖼️"}
                  {article.category === "配色" && "🎨"}
                  {article.category === "デザイン基礎" && "📐"}
                  {article.category === "ツール" && "🛠️"}
                  {article.category === "実践" && "🎬"}
                </div>

                <div className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        CATEGORY_COLOR[article.category] ?? "bg-gray-50 text-gray-400"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-[10px] text-gray-300">{article.date}</span>
                    <span className="ml-auto text-[10px] text-gray-300">
                      {article.readMin} min
                    </span>
                  </div>

                  <h2 className="text-sm font-bold text-gray-700 leading-snug mb-2 line-clamp-2 group-hover:text-pink-500 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>続きを読む</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer
        className="mt-auto border-t py-6"
        style={{
          background: "rgba(255,255,255,0.4)",
          borderColor: "rgba(255,255,255,0.5)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="" className="w-5 h-5" />
            <span className="text-xs text-gray-400 font-medium">ラクポチ イラスト</span>
          </div>
          <Link href="/privacy" className="text-xs text-gray-300 hover:text-gray-500 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </footer>
    </div>
  );
}
