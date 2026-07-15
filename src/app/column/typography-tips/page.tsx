import Link from "next/link";

export const metadata = {
  title: "【初心者向け】プロっぽいテロップにする小技｜クオリティを上げる文字組み | デザインコラム | ラクポチ イラスト",
  description:
    "字間・行間・全角半角・句読点・ひらがな——プロが必ず実践する文字組みテクニック5選。これを意識するだけでテロップのクオリティは劇的に上がります。",
};

const TIPS = [
  {
    no: 1,
    title: "字間（文字と文字の間）は5〜10%開ける",
    keyword: "字間 / トラッキング",
    icon: "↔️",
    color: "#2563eb",
    bgColor: "rgba(219,234,254,0.6)",
    borderColor: "rgba(37,99,235,0.15)",
    ng: { label: "窮屈すぎ", sample: "テロップ", style: { letterSpacing: "-0.1em" } },
    ok: { label: "5〜10%の余白", sample: "テロップ", style: { letterSpacing: "0.08em" } },
    body: "文字がくっつきすぎていると圧倒的に読みにくくなります。スムーズに文字を読ませるための適切な字間の目安は、フォントサイズの5%〜10%程度の空間を開けることです。毎回厳密にパーセンテージを計算する必要はありませんが、「窮屈な文字」と「適度に空間がある文字」を普段から比較して見ておくことで、自然と違和感に気づけるようになります。",
    note: "意図的に字間を大きく開けて高級感やゆったりとした余韻を出すロゴデザインなどは例外です。",
  },
  {
    no: 2,
    title: "行間はフォントサイズの70%開ける",
    keyword: "行間 / ラインスペーシング",
    icon: "↕️",
    color: "#7c3aed",
    bgColor: "rgba(237,233,254,0.6)",
    borderColor: "rgba(124,58,237,0.15)",
    ng: { label: "詰まりすぎ", sample: "1行目のテロップ\n2行目のテロップ", style: { lineHeight: "1.1" } },
    ok: { label: "70%の行間", sample: "1行目のテロップ\n2行目のテロップ", style: { lineHeight: "1.7" } },
    body: "行間が狭すぎると息苦しい印象を与え、逆に100%以上開けすぎると行同士の関連性が薄れて間延びして見えます。読みやすく、かつデザインとして綺麗に見える行間の目安は「文字サイズの70%程度」です。使用するフォントやデバイスによって多少の前後はありますが、ある程度の空間（余白）が確保されている状態が正解です。",
    note: null,
  },
  {
    no: 3,
    title: "全角・半角を必ず統一する",
    keyword: "全角 / 半角 / 統一",
    icon: "🔡",
    color: "#dc2626",
    bgColor: "rgba(254,226,226,0.6)",
    borderColor: "rgba(220,38,38,0.15)",
    ng: { label: "全角・半角が混在", sample: "６月1２日（全角混じり）", style: {} },
    ok: { label: "半角に統一", sample: "6月12日（半角統一）", style: {} },
    body: "全角と半角が混ざると、文字の大きさや前後の空間が不揃いになり、全体のバランスが崩れて非常に素人くさく見えます。日付（例：6月12日）などを記載する際は、すべてを「半角」に統一するだけで、一気にデザインが引き締まりプロっぽくなります。まずは「全角と半角を混ぜない」ということを徹底してください。",
    note: null,
  },
  {
    no: 4,
    title: "句読点や記号の後ろは「詰める」",
    keyword: "カーニング / 句読点",
    icon: "、。",
    color: "#d97706",
    bgColor: "rgba(254,243,199,0.6)",
    borderColor: "rgba(217,119,6,0.15)",
    ng: { label: "詰めなし（隙間が目立つ）", sample: "『私は、Web』", style: { letterSpacing: "0.05em" } },
    ok: { label: "手動でカーニング調整済み", sample: "『私は、Web』", style: { letterSpacing: "-0.03em" } },
    body: "「、」「。」といった句読点や括弧記号を入力した際、そのままにしておくと記号の前後に不自然な空白が空いてしまいます。PhotoshopやPremiere Proなどのソフトでは、ショートカットキー（Alt/Option ＋ 左右矢印キー）を使って、不自然な空白を意識的に詰めるようにしてください。この一手間で見た目の美しさが格段に変わります。",
    note: null,
  },
  {
    no: 5,
    title: "ひらがな・カタカナの間は「詰める」",
    keyword: "カーニング / ひらがな / カタカナ",
    icon: "あア",
    color: "#0891b2",
    bgColor: "rgba(207,250,254,0.6)",
    borderColor: "rgba(8,145,178,0.15)",
    ng: { label: "打ちっぱなし（スカスカ）", sample: "仕事がたのしい", style: { letterSpacing: "0.1em" } },
    ok: { label: "ひらがなを詰めて調整", sample: "仕事がたのしい", style: { letterSpacing: "0em" } },
    body: "漢字に対してひらがな・カタカナはバウンディングボックス内の余白の取り方が異なるため、そのまま入力すると文字間が空いて見えてしまいます。空間が空いて見える「ひらがな・カタカナ」の間は少し詰め、逆に詰まって見える「漢字」の間は少し開けるといった微調整（カーニング）ができるようになると、いよいよプロのクオリティに到達します。",
    note: null,
  },
];

const CHECKLIST = [
  "字間は5〜10%開ける",
  "行間は70%開ける",
  "全角・半角は統一する",
  "句読点や記号の前後は詰める",
  "ひらがな・カタカナの間は詰める",
];

export default function TypographyTipsPage() {
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
          <span className="text-gray-500">プロっぽいテロップにする小技</span>
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
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}
          >
            {/* Before/After風 */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-2xl font-black text-white/30" style={{ letterSpacing: "-0.08em" }}>テロップ（NG）</span>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-pink-400/40" />
                <span className="text-[10px] text-pink-300/70 font-bold tracking-widest">文字組み調整</span>
                <div className="h-px w-12 bg-pink-400/40" />
              </div>
              <span className="text-2xl font-black text-white" style={{ letterSpacing: "0.06em" }}>テロップ（OK）</span>
            </div>
            <p className="absolute bottom-4 right-6 text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(196,181,253,0.7)" }}>
              Typography
            </p>
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-500">デザイン基礎</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 8 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【初心者向け】プロっぽいテロップにする小技<br />
              <span className="text-lg">｜クオリティを上げる文字組み</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              初心者がやりがちな「素人っぽさ」の原因は、エフェクトの技術不足ではなく、基礎中の基礎である「文字組み」ができていないことにあります。
              地味だけど、ここを直すだけでテロップのクオリティは一段上がります。
            </p>
          </div>
        </div>

        {/* リード */}
        <Body>
          <p>
            エフェクトや色より先に、文字組みを直してください。これだけでテロップの印象は別物になります。
          </p>
        </Body>

        {/* テクニック5選 */}
        <div className="space-y-8 mt-8">
          {TIPS.map((tip) => (
            <div
              key={tip.no}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,245,252,0.62) 100%)",
                border: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* 見出し */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: tip.bgColor, borderBottom: `1px solid ${tip.borderColor}` }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${tip.color}cc, ${tip.color})` }}
                >
                  {tip.no}
                </span>
                <div>
                  <p className="text-sm font-black text-gray-800 leading-snug">{tip.title}</p>
                  <p className="text-[10px] font-bold mt-0.5" style={{ color: tip.color }}>{tip.keyword}</p>
                </div>
              </div>

              <div className="px-5 py-5 space-y-4">
                {/* NG/OK比較 */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1.5px solid rgba(239,68,68,0.2)" }}
                  >
                    <div className="px-3 py-1.5" style={{ background: "rgba(254,242,242,0.9)" }}>
                      <span className="text-[9px] font-black text-red-500">❌ {tip.ng.label}</span>
                    </div>
                    <div
                      className="px-4 py-4 flex items-center justify-center text-sm font-black text-white whitespace-pre-line text-center leading-relaxed"
                      style={{ background: "#1a1a2e", minHeight: "68px", ...tip.ng.style }}
                    >
                      {tip.ng.sample}
                    </div>
                  </div>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1.5px solid rgba(34,197,94,0.2)" }}
                  >
                    <div className="px-3 py-1.5" style={{ background: "rgba(240,253,244,0.9)" }}>
                      <span className="text-[9px] font-black text-green-500">✅ {tip.ok.label}</span>
                    </div>
                    <div
                      className="px-4 py-4 flex items-center justify-center text-sm font-black text-white whitespace-pre-line text-center leading-relaxed"
                      style={{ background: "#1a1a2e", minHeight: "68px", ...tip.ok.style }}
                    >
                      {tip.ok.sample}
                    </div>
                  </div>
                </div>

                {/* 解説 */}
                <p className="text-xs text-gray-600 leading-relaxed">{tip.body}</p>

                {/* 注意 */}
                {tip.note && (
                  <div
                    className="rounded-lg px-3 py-2.5 text-[11px] text-gray-500 leading-relaxed"
                    style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    ※ {tip.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* まとめ：チェックリスト */}
        <div
          className="rounded-2xl p-7 mt-10 mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 20px rgba(236,72,153,0.07)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">まとめ：チェックリスト化して目を鍛える</p>

          <div className="space-y-2.5 mb-6">
            {CHECKLIST.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            最初は違和感に気づかなくて当然です。プロが「なんか文字が窮屈そうだな」「間抜けな空間があるな」と反射的に感じられるのは、何百回も修正してきた結果です。
          </p>

          <div
            className="rounded-xl p-4 text-sm text-gray-700 font-semibold leading-relaxed"
            style={{ background: "rgba(236,72,153,0.06)" }}
          >
            「たかが字間、されど字間」。この細かな文字組みの調整ができるようになると、他のデザイン素材やレイアウトの違和感にも気づけるようになり、クリエイターとしてのレベルが一段階上がります。騙されたと思って、次の作業から必ず実践してみてください。
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

function Body({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-sm text-gray-600 leading-relaxed">{children}</div>;
}
