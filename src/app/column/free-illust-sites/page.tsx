import Link from "next/link";

export const metadata = {
  title: "【厳選21選】フリーイラストサイトの選び方 | デザインコラム | ラクポチ イラスト",
  description:
    "商用利用・クレジット表記・点数制限まで細かく整理。実務で安心して使えるフリーイラストサイト21選をテイスト別に紹介します。",
};

type Site = {
  no: number;
  name: string;
  desc: string;
  commercial: "無料" | "有料プランあり" | "要確認";
  credit: boolean | "任意";
  limit?: string;
  tags: string[];
};

const SITES_SIMPLE: Site[] = [
  {
    no: 1, name: "いらすとや",
    desc: "圧倒的な網羅性を誇る定番サイト。どんなシーンでも見つかる安心感。",
    commercial: "無料", credit: false, limit: "1制作物につき20点まで",
    tags: ["網羅性◎", "温かみ"],
  },
  {
    no: 2, name: "ソコスト",
    desc: "シンプルで洗練された線画と塗り。ビジネス系スライドや動画デザインによく馴染む。",
    commercial: "無料", credit: false,
    tags: ["シンプル", "ビジネス向け"],
  },
  {
    no: 3, name: "ちょうどいいイラスト",
    desc: "主張が強すぎないため、メインの文字情報を邪魔せず配置できる。",
    commercial: "無料", credit: false,
    tags: ["使いやすい", "主張控えめ"],
  },
  {
    no: 4, name: "イラストAC",
    desc: "日本最大級の素材数。検索すればほぼ何でも見つかる。無料会員は制限あり。",
    commercial: "有料プランあり", credit: false, limit: "無料会員は1日DL数に制限",
    tags: ["素材数◎", "検索力高い"],
  },
];

const SITES_LINE: Site[] = [
  {
    no: 5, name: "Linustock",
    desc: "非常にシンプルな線画。AIデータも入手でき、線の太さを変えたい時に便利。",
    commercial: "無料", credit: false,
    tags: ["線画", "AI対応", "加工◎"],
  },
  {
    no: 6, name: "loosedrawing",
    desc: "サイト上でベースカラーを変更してDLできるため、トンマナを合わせる作業が短縮できる。",
    commercial: "無料", credit: false,
    tags: ["線画", "色変更可", "抜け感"],
  },
  {
    no: 7, name: "しぐれに",
    desc: "女の子の素朴で可愛らしい日常イラスト。エッセイ風動画や柔らかいLPに合う。",
    commercial: "無料", credit: false,
    tags: ["女の子", "エッセイ風"],
  },
  {
    no: 8, name: "じたんだ（時短だ）",
    desc: "資料作成に特化。累計20点までなら商用無料。色変更が容易。",
    commercial: "無料", credit: false, limit: "累計20点まで無料",
    tags: ["資料向け", "色変更可"],
  },
  {
    no: 9, name: "unDraw",
    desc: "ITやビジネス系のモダンなフラットデザインに最適。HEX値入力で全色が一括変更できる。",
    commercial: "無料", credit: false,
    tags: ["海外製", "フラット", "色変更◎"],
  },
  {
    no: 10, name: "Storyset",
    desc: "Freepikが提供する高品質なイラストセット。アニメーション機能もあり。",
    commercial: "無料", credit: true,
    tags: ["高品質", "アニメ対応"],
  },
  {
    no: 11, name: "ManyPixels",
    desc: "unDrawと似た海外製の高品質フラットイラスト。SaaS系・テック系に最適。",
    commercial: "無料", credit: false,
    tags: ["海外製", "SaaS向け", "色変更可"],
  },
];

const SITES_ICON: Site[] = [
  {
    no: 12, name: "ICOOON MONO",
    desc: "モノトーンのアイコン専門サイト。図解や目次など情報の視認性を高めたい時に。",
    commercial: "無料", credit: false,
    tags: ["アイコン", "モノトーン"],
  },
  {
    no: 13, name: "イラストマン",
    desc: "ユーモアのある人物イラストが中心。20点以上は連絡が必要。",
    commercial: "無料", credit: false, limit: "20点以上は連絡必要",
    tags: ["人物", "ユニーク"],
  },
  {
    no: 14, name: "ガーリー素材",
    desc: "女性向けの柔らかくアンティークな雰囲気。美容系や女性向けコンテンツに最適。",
    commercial: "無料", credit: false,
    tags: ["女性向け", "アンティーク"],
  },
  {
    no: 15, name: "いらすとん",
    desc: "いらすとやと同じ作者による水彩タッチのイラスト。親しみやすさを出したい時に。",
    commercial: "無料", credit: false,
    tags: ["水彩", "ゆるかわ"],
  },
  {
    no: 16, name: "イラストナビ",
    desc: "シンプルで可愛い保育・学校系イラストが豊富。柔らかい雰囲気の構築に。",
    commercial: "無料", credit: false,
    tags: ["教育系", "シンプル"],
  },
  {
    no: 17, name: "水彩素材",
    desc: "背景やテクスチャに使える美しい水彩の滲み素材。乗算などブレンドモードで重ねると効果的。",
    commercial: "無料", credit: "任意",
    tags: ["テクスチャ", "温かみ"],
  },
  {
    no: 18, name: "VectorShelf",
    desc: "レトロで手描き感のあるフラットなベクター素材（食べ物・雑貨など）。ビンテージ感を出したい時に。",
    commercial: "無料", credit: false,
    tags: ["レトロ", "ベクター", "手描き"],
  },
  {
    no: 19, name: "フジカナイラスト",
    desc: "手描き感のある高品質で温かみのあるイラスト。商用利用規約はサイト内で確認を。",
    commercial: "要確認", credit: "任意",
    tags: ["手描き", "高品質"],
  },
  {
    no: 20, name: "素材ノ",
    desc: "ニッチなテイストや汎用性の高いパーツを探す際に便利。個別規約を確認しながら活用。",
    commercial: "要確認", credit: "任意",
    tags: ["汎用", "パーツ系"],
  },
  {
    no: 21, name: "キュンカッツ",
    desc: "個性的な可愛いイラスト。他と被りたくない時のアクセントとして使える。",
    commercial: "無料", credit: false,
    tags: ["個性的", "アクセント"],
  },
];

const COMMERCIAL_STYLE: Record<string, { bg: string; text: string; label: string }> = {
  "無料":       { bg: "rgba(220,252,231,0.9)", text: "#16a34a", label: "商用無料" },
  "有料プランあり": { bg: "rgba(254,249,195,0.9)", text: "#b45309", label: "有料プランあり" },
  "要確認":     { bg: "rgba(243,244,246,0.9)", text: "#6b7280", label: "要確認" },
};

export default function FreeIllustSitesPage() {
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
          background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,240,245,0.45) 100%)",
          borderColor: "rgba(255,255,255,0.5)",
          boxShadow: "0 4px 24px rgba(236,72,153,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="ラクポチ イラスト" className="w-7 h-7" />
            <span className="text-sm font-black text-gray-800 tracking-tight">ラクポチ イラスト</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-gray-400 font-medium">
            <Link href="/" className="hover:text-gray-600 transition-colors">横断検索</Link>
            <Link href="/column" className="text-pink-400 font-semibold">デザインコラム</Link>
            <Link href="/#sites" className="hover:text-gray-600 transition-colors">サイト一覧</Link>
          </nav>
        </div>
      </header>

      {/* パンくず */}
      <div className="max-w-screen-md mx-auto w-full px-6 pt-6">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors">ホーム</Link>
          <span className="text-gray-300">/</span>
          <Link href="/column" className="hover:text-gray-600 transition-colors">デザインコラム</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">フリーイラストサイト21選</span>
        </div>
      </div>

      <main className="max-w-screen-md mx-auto w-full px-4 sm:px-6 py-8 flex-1">

        {/* 記事ヘッダーカード */}
        <div
          className="rounded-3xl overflow-hidden mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,245,250,0.6) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 4px 32px rgba(236,72,153,0.08)",
          }}
        >
          {/* サムネイル */}
          <div
            className="w-full h-48 relative overflow-hidden flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)" }}
          >
            {/* 21のドット */}
            <div className="absolute inset-0 grid grid-cols-7 grid-rows-3 gap-3 p-8 opacity-30">
              {Array.from({ length: 21 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="relative z-10 text-center">
              <p className="text-5xl mb-2">🗂️</p>
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(196,181,253,0.9)" }}>
                Free Illust Sites
              </p>
            </div>
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-500">素材選び</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 12 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【厳選21選】フリーイラストサイトの選び方<br />
              <span className="text-lg">｜商用利用まで細かく解説</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              実務で動画編集やWeb制作をしていると、イメージに合うイラスト素材を探すだけで数時間経っていた…ということがよくあります。
              特にクライアントワークでは、デザインのトンマナに合っているかだけでなく、商用利用の確認が必須です。
            </p>
          </div>
        </div>

        {/* ─── 選び方の基準 ─── */}
        <H2 icon="🔍" title="サイトを選ぶ2つの基準" />
        <Body>
          <p>
            単に「かわいいから」で選ぶと、動画やサイト全体の世界観がブレてしまいます。
            実務では以下の2点を必ず確認します。
          </p>
        </Body>

        <div className="grid sm:grid-cols-2 gap-3 my-6">
          <CriteriaCard num="01" title="データ形式" icon="📁">
            後から色を調整したい場合は、PNG ではなく<strong className="text-pink-500">SVG や AI データ（ベクター）</strong>がダウンロードできるサイトを選ぶと、Premiere Pro や Figma でのカラー修正が圧倒的に楽になります。
          </CriteriaCard>
          <CriteriaCard num="02" title="商用利用の細かい規約" icon="📋">
            「商用フリー」と書かれていても、<strong className="text-pink-500">「1成果物につき〇点まで」「クレジット表記が必須」</strong>といった制限が隠れていることが多いです。以下のリストで分類しました。
          </CriteriaCard>
        </div>

        <ImagePlaceholder label="用途別にマッピングされたイラストサイトの図表" />

        {/* ─── カテゴリ1 ─── */}
        <CategoryHeading no="1" title="万能・シンプル系" desc="どんな案件でも使いやすい定番サイト群" color="#ec4899" />
        <SiteList sites={SITES_SIMPLE} />

        <ImagePlaceholder label="線画テイストのイラストを使ったおしゃれなレイアウト例" />

        {/* ─── カテゴリ2 ─── */}
        <CategoryHeading no="2" title="線画・フラット系" desc="主張を抑えてスタイリッシュに見せたい時" color="#8b5cf6" />
        <SiteList sites={SITES_LINE} />

        <ImagePlaceholder label="水彩やアイコン素材を活用したUIデザインの例" />

        {/* ─── カテゴリ3 ─── */}
        <CategoryHeading no="3" title="アイコン・特化型" desc="表現の幅を広げる個性派サイト" color="#2563eb" />
        <SiteList sites={SITES_ICON} />

        {/* まとめ */}
        <div
          className="rounded-2xl p-7 mt-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 20px rgba(236,72,153,0.07)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-3">まとめ</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            求める「トンマナ」によって使うべきサイトは自然と絞られてきます。
            無数にあるイラストサイトを毎回検索するのではなく、自分のプロジェクトの目的に合う数サイトをブックマークし、すぐに色変更や加工ができる状態を整えておくのが一番の時短になります。
          </p>

          {/* ラクポチCTA */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: "linear-gradient(135deg, rgba(249,168,212,0.15) 0%, rgba(216,180,254,0.12) 100%)",
              border: "1.5px solid rgba(236,72,153,0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <img src="/favicon.svg" alt="" className="w-6 h-6" />
              <p className="text-sm font-black text-gray-700">ラクポチ イラスト なら1回で全サイトを検索</p>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              これまでそれぞれのサイトから個別に画像をDLする必要がありましたが、<strong className="text-pink-500">「横断検索」</strong>機能を使えば1回の検索で複数のサイトを一度に検索できます。工数や時間を大幅に削減できるようになりました。
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-white transition-opacity hover:opacity-85"
              style={{
                background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)",
                boxShadow: "0 3px 10px rgba(236,72,153,0.3)",
              }}
            >
              横断検索を使ってみる →
            </Link>
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="flex justify-center my-10">
          <Link
            href="/column"
            className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-pink-500 transition-all hover:bg-pink-50"
            style={{ border: "1.5px solid rgba(236,72,153,0.3)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            コラム一覧に戻る
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

/* ─── 共通コンポーネント ─── */

function H2({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-5">
      <span className="text-xl">{icon}</span>
      <h2 className="text-base sm:text-lg font-black text-gray-800 leading-snug">{title}</h2>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-sm text-gray-600 leading-relaxed">{children}</div>;
}

function CriteriaCard({ num, title, icon, children }: { num: string; title: string; icon: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,240,250,0.65) 100%)",
        border: "1px solid rgba(236,72,153,0.12)",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[10px] font-black text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
        >{num}</span>
        <span className="text-sm font-black text-gray-700">{icon} {title}</span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{children}</p>
    </div>
  );
}

function CategoryHeading({ no, title, desc, color }: { no: string; title: string; desc: string; color: string }) {
  return (
    <div className="mt-12 mb-5 flex items-center gap-3">
      <div
        className="w-1 rounded-full self-stretch"
        style={{ background: color, minHeight: "40px" }}
      />
      <div>
        <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5" style={{ color }}>
          Category {no}
        </p>
        <h2 className="text-base font-black text-gray-800">{title}</h2>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function SiteList({ sites }: { sites: Site[] }) {
  return (
    <div className="space-y-3">
      {sites.map((site) => {
        const cs = COMMERCIAL_STYLE[site.commercial];
        return (
          <div
            key={site.no}
            className="rounded-2xl px-5 py-4 flex gap-4"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,245,252,0.6) 100%)",
              border: "1px solid rgba(255,255,255,0.85)",
              boxShadow: "0 1px 8px rgba(236,72,153,0.04)",
            }}
          >
            {/* No */}
            <span
              className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center text-[11px] font-black text-white mt-0.5"
              style={{ background: "linear-gradient(135deg, rgba(249,168,212,0.9) 0%, rgba(236,72,153,0.95) 100%)" }}
            >
              {site.no}
            </span>

            <div className="flex-1 min-w-0">
              {/* 名前 + バッジ */}
              <div className="flex items-center flex-wrap gap-2 mb-1.5">
                <span className="text-sm font-black text-gray-700">{site.name}</span>
                {/* 商用 */}
                <span
                  className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                  style={{ background: cs.bg, color: cs.text }}
                >
                  {cs.label}
                </span>
                {/* クレジット */}
                {site.credit === true && (
                  <span className="rounded-full px-2 py-0.5 text-[9px] font-bold bg-gray-100 text-gray-500">
                    クレジット必要
                  </span>
                )}
                {/* 制限 */}
                {site.limit && (
                  <span className="rounded-full px-2 py-0.5 text-[9px] font-bold bg-red-50 text-red-400">
                    ⚠ {site.limit}
                  </span>
                )}
              </div>

              {/* 説明 */}
              <p className="text-xs text-gray-500 leading-relaxed mb-2">{site.desc}</p>

              {/* タグ */}
              <div className="flex flex-wrap gap-1">
                {site.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md px-2 py-0.5 text-[9px] font-medium text-pink-400"
                    style={{ background: "rgba(249,168,212,0.12)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="w-full rounded-xl flex flex-col items-center justify-center gap-2 py-10 my-6"
      style={{
        background: "linear-gradient(135deg, rgba(240,240,248,0.8) 0%, rgba(250,240,255,0.7) 100%)",
        border: "1.5px dashed rgba(200,180,220,0.6)",
      }}
    >
      <span className="text-3xl opacity-40">🖼️</span>
      <span className="text-[11px] text-gray-300">{label}</span>
    </div>
  );
}
