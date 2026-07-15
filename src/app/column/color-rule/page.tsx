import Link from "next/link";

export const metadata = {
  title: "【鉄則】動画デザインの配色ルール｜色の使い方の基本 | デザインコラム | ラクポチ イラスト",
  description:
    "3色以内・70:25:5の黄金比率・トンマナ——プロの動画編集者が実務で使う配色の基本ルールをロジックで解説します。",
};

export default function ColorRulePage() {
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
            <Link href="/search" className="hover:text-gray-600 transition-colors">横断検索</Link>
            <Link href="/" className="text-pink-400 font-semibold">デザインコラム</Link>
            <Link href="/search#sites" className="hover:text-gray-600 transition-colors">サイト一覧</Link>
          </nav>
        </div>
      </header>

      {/* パンくず */}
      <div className="max-w-screen-md mx-auto w-full px-6 pt-6">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
          <Link href="/" className="hover:text-gray-600 transition-colors">ホーム</Link>
          <span className="text-gray-300">/</span>
          <Link href="/" className="hover:text-gray-600 transition-colors">デザインコラム</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">動画デザインの配色ルール</span>
        </div>
      </div>

      {/* 記事本体 */}
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
          {/* サムネイルバナー — 配色をテーマにした70:25:5ビジュアル */}
          <div
            className="w-full h-48 relative overflow-hidden flex items-center justify-center"
            style={{ background: "#1a1a2e" }}
          >
            {/* ベース(70%) */}
            <div className="absolute inset-0" style={{ background: "#1a1a2e" }} />
            {/* メイン(25%) — 青の帯 */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 opacity-80"
              style={{ background: "linear-gradient(90deg, #1e40af 0%, #2563eb 100%)" }}
            />
            {/* アクセント(5%) — 黄色の点 */}
            <div
              className="absolute top-8 right-12 w-10 h-10 rounded-full"
              style={{ background: "#facc15", boxShadow: "0 0 24px rgba(250,204,21,0.5)" }}
            />
            {/* テキスト */}
            <div className="relative z-10 text-center">
              <p className="text-4xl mb-2">🎨</p>
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(147,197,253,0.9)" }}>
                Color Rule
              </p>
            </div>
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-semibold text-purple-500">配色</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 7 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【鉄則】動画デザインの配色ルール<br />
              <span className="text-lg">｜色の使い方の基本</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              日々の動画編集実務において、デザインのクオリティを左右する最も重要な要素の一つが「配色」です。
              どれだけエフェクトやトランジションにこだわっても、色の使い方が間違っていると一瞬で素人っぽさが出てしまいます。
            </p>
          </div>
        </div>

        {/* 導入 */}
        <Body>
          <p>
            今回は、実務で絶対に守るべき配色の基本ルールと、動画全体に統一感を持たせる「トンマナ（トーン＆マナー）」の考え方について整理します。
          </p>
        </Body>

        {/* ─── 色を使いすぎる問題 ─── */}
        <H2 icon="⚠️" title="最大の失敗：色を多用しすぎる" />
        <Body>
          <ImagePlaceholder label="色を多用しすぎたまとまりのない画面と、3色で統一された画面の比較" />
          <p>
            動画デザインにおいて最もやりがちな失敗は「色を多用しすぎる」ことです。
            初心者の頃は、色をたくさん使えば使うほどリッチでクオリティの高い動画になると思い込みがちですが、これは完全に逆効果です。
          </p>

          {/* Netflixの例 */}
          <div
            className="rounded-2xl p-5 my-2"
            style={{
              background: "linear-gradient(135deg, rgba(20,20,30,0.92) 0%, rgba(40,10,10,0.88) 100%)",
              border: "1px solid rgba(220,38,38,0.2)",
            }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(252,165,165,0.8)" }}>
              📺 Netflix に学ぶ配色
            </p>
            <p className="text-sm leading-relaxed text-gray-200">
              深い黒の背景（ベース）に、象徴的な赤のロゴやボタン（アクセント）。
              この極めて限定された配色があるからこそ、アプリを開いた瞬間に「映画館のような没入感」や「プレミアムな映像体験」を直感的に受け取ることができます。
            </p>
            <p className="text-sm leading-relaxed text-gray-300 mt-3">
              もしあのUI画面に、パステルピンクや蛍光グリーン、明るいイエローなど無数の色が使われていたら——
              特有のソリッドな世界観は一瞬で崩壊し、ノイズの多い画面になってしまうはずです。
            </p>
          </div>

          <p>
            動画編集のテロップやレイアウトにおいても、これと全く同じことが言えます。
            色を使いすぎると、動画全体の世界観が表現できなくなるばかりか、「どこを一番強調したいのか」という視線誘導の機能まで失われてしまいます。
          </p>
        </Body>

        {/* ─── 3色ルール ─── */}
        <H2 icon="🎯" title="大原則：配色は3色以内に収める" />
        <Body>
          <p>
            美しいデザインを作るための大原則は、基本の配色を<strong className="text-pink-500">「3色以内」</strong>に収めることです。
            具体的には以下の黄金比率を意識して色を割り当てます。
          </p>
        </Body>

        {/* 70:25:5 カード */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {[
            { pct: "70%", label: "ベースカラー", desc: "背景や余白など、画面で最も広い面積を占める色", color: "#f1f5f9", textColor: "#64748b", accent: "#cbd5e1" },
            { pct: "25%", label: "メインカラー", desc: "ブランドイメージやチャンネルのテーマを象徴する色", color: "#1e40af", textColor: "#fff", accent: "#3b82f6" },
            { pct: "5%",  label: "アクセントカラー", desc: "最も強調したい部分に使う色", color: "#facc15", textColor: "#1a1a1a", accent: "#fbbf24" },
          ].map(({ pct, label, desc, color, textColor, accent }) => (
            <div
              key={pct}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div
                className="h-16 flex items-center justify-center text-xl font-black"
                style={{ background: color, color: textColor }}
              >
                {pct}
              </div>
              <div
                className="flex-1 px-3 py-3"
                style={{ background: "rgba(255,255,255,0.75)" }}
              >
                <p className="text-[11px] font-bold text-gray-700 mb-1">{label}</p>
                <p className="text-[10px] text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Body>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1">黄金比率 70 : 25 : 5</p>
            <p>
              この比率を守るだけで、動画の印象は一気にプロらしく、洗練されたものになります。
            </p>
          </TipBox>
          <ImagePlaceholder label="メインカラー（青）、ベース（白）、アクセント（黄）で構成された動画のキャプチャ" />
        </Body>

        {/* ─── トンマナ ─── */}
        <H2 icon="🗂️" title="トンマナ（トーン＆マナー）の設定" />
        <Body>
          <p>
            次に、これらの色をどのように選ぶべきかという「トンマナ（トーン＆マナー）」の設定についてです。
            トンマナとは、デザインの雰囲気（トーン）と、色やスタイルのルール（マナー）を決めることで、動画全体に一貫性と統一感を持たせる手法です。
          </p>
          <p>
            配色を決める際は、まず「どんな雰囲気（トーン）の動画にしたいのか」を明確にします。
            例えば、「男性向けのビジネス系で、クールで知的な動画」を作りたいのであれば、メインカラーには暗めの青（ネイビーなど）を選択します。
          </p>

          {/* 色の心理効果テーブル */}
          <div
            className="rounded-xl overflow-hidden my-2"
            style={{ border: "1px solid rgba(236,72,153,0.12)" }}
          >
            <div
              className="px-4 py-2.5 text-[11px] font-bold text-pink-400 tracking-widest uppercase"
              style={{ background: "rgba(255,240,250,0.8)" }}
            >
              色の心理効果
            </div>
            {[
              { color: "#ef4444", bg: "rgba(254,242,242,0.8)", name: "赤", effect: "情熱・エネルギー・警告" },
              { color: "#facc15", bg: "rgba(254,252,232,0.8)", name: "黄色", effect: "明るさ・注意喚起・ポジティブ" },
              { color: "#3b82f6", bg: "rgba(239,246,255,0.8)", name: "青", effect: "信頼・冷静・知性" },
              { color: "#22c55e", bg: "rgba(240,253,244,0.8)", name: "緑", effect: "安心感・自然・成長" },
              { color: "#f9fafb", bg: "rgba(255,255,255,0.8)", name: "白", effect: "清潔感・シンプル・余白" },
              { color: "#1f2937", bg: "rgba(249,250,251,0.8)", name: "黒", effect: "高級感・力強さ・プレミアム" },
            ].map(({ color, bg, name, effect }) => (
              <div
                key={name}
                className="flex items-center gap-4 px-4 py-2.5 border-t"
                style={{ background: bg, borderColor: "rgba(0,0,0,0.04)" }}
              >
                <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: color, border: "1px solid rgba(0,0,0,0.08)" }} />
                <span className="text-xs font-semibold text-gray-600 w-10 flex-shrink-0">{name}</span>
                <span className="text-xs text-gray-500">{effect}</span>
              </div>
            ))}
          </div>

          <TipBox>
            <p className="font-bold text-gray-700 mb-1">プロに求められる説明責任</p>
            <p>
              「なぜこの色にしたのか？」と問われた時に、「この動画は〇〇という目的とトーンなので、この色をメインに設定しました」とロジカルに説明できることが、プロの編集者には求められます。
            </p>
          </TipBox>
        </Body>

        {/* ─── フォント ─── */}
        <H2 icon="🔤" title="色だけじゃない——フォントの統一感" />
        <Body>
          <ImagePlaceholder label="源ノ角ゴシックのフォントファミリー（細い文字から太い文字の比較）" />
          <p>
            最後に、色だけでなく「フォント」の統一感もトンマナにおいて非常に重要です。
            動画をおしゃれに見せるコツは、たくさんの種類のフォントを乱用するのではなく、<strong className="text-pink-500">「フォントファミリー」</strong>を活用することです。
          </p>
          <p>
            フォントファミリーとは、同じ書体の中で線の太さ（ウエイト）が異なるバリエーションの集まりのことです。
          </p>

          <div
            className="rounded-xl p-5 my-2 space-y-2"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
              border: "1px solid rgba(236,72,153,0.12)",
            }}
          >
            <p className="text-[11px] font-bold text-pink-400 tracking-widest uppercase mb-3">
              フォントファミリーの使い分け例（源ノ角ゴシック）
            </p>
            {[
              { weight: "Heavy / Bold", use: "タイトル・見出し", size: "text-xl", fw: "font-black" },
              { weight: "Medium",       use: "重要なテロップ",   size: "text-base", fw: "font-semibold" },
              { weight: "Regular",      use: "本文・補足説明",   size: "text-sm", fw: "font-normal" },
              { weight: "Light",        use: "キャプション・注釈", size: "text-xs", fw: "font-light" },
            ].map(({ weight, use, size, fw }) => (
              <div key={weight} className="flex items-baseline gap-4">
                <span className={`${size} ${fw} text-gray-700 flex-1`}>{weight}</span>
                <span className="text-[10px] text-gray-400 flex-shrink-0">{use}</span>
              </div>
            ))}
          </div>

          <p>
            同じフォントの中で太さによって強弱をつけるだけで、メリハリがありながらも全体に統一感のある、非常に見やすい画面を作ることができます。
            毎回「どのフォントを使おうか」と迷う時間が減るため、作業の効率化にも直結します。
          </p>
        </Body>

        {/* まとめ */}
        <div
          className="rounded-2xl p-7 mt-10 mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 20px rgba(236,72,153,0.07)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-3">まとめ</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            動画は、1枚1枚の画像の連続（パラパラ漫画）です。
            1画面ごとの配色のルールがしっかり守られていれば、必然的に動画全体のクオリティも高くなります。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            「3色以内のルール」と「トンマナの統一」は、持って生まれたデザインセンスの有無に関わらず、ロジックとして知っていれば誰でも実践できる確実な手法です。
          </p>
          <div
            className="rounded-xl p-4 text-sm text-gray-700 font-semibold leading-relaxed"
            style={{ background: "rgba(236,72,153,0.06)" }}
          >
            まずは今開いているプロジェクトデータで、無駄な色が使われていないか、フォントのルールがブレていないかを見直してみてください。
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="flex justify-center mb-12">
          <Link
            href="/"
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

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,240,250,0.7) 100%)",
        border: "1px solid rgba(236,72,153,0.15)",
      }}
    >
      <div className="flex items-start gap-2">
        <span className="text-base flex-shrink-0 mt-0.5">💡</span>
        <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="w-full rounded-xl flex flex-col items-center justify-center gap-2 py-10"
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
