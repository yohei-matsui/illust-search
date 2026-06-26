import Link from "next/link";

export const metadata = {
  title: "【これで差がつく】演出に使える動画編集のおすすめフォント11選 | デザインコラム | ラクポチ イラスト",
  description:
    "バラエティ・Vlog・ホラー・和風まで——動画のジャンルに合わせて使い分けたいフリーフォント11選を特徴・利用シーンとともに徹底解説。",
};

type Font = {
  no: number;
  name: string;
  tags: string[];
  tagColor: string;
  mood: string;
  desc: string;
  scenes: string[];
  caution?: string;
  preview: string;
  previewStyle?: React.CSSProperties;
};

const FONTS: Font[] = [
  {
    no: 1,
    name: "昔々ふぉんと",
    tags: ["和風", "ゆるかわ", "手書き風"],
    tagColor: "#d97706",
    mood: "親しみやすさ・温かみ",
    desc: "少し手書き感のある温かいフォルム。適度に太めで、RPGのような冒険シーンや「残念系」の演出にもマッチします。和風の動画や昔話のようなナレーション動画にも使いやすい定番フォントです。",
    scenes: ["和風動画", "昔話ナレーション", "残念系演出", "ゆるいバラエティ"],
    preview: "昔々、あるところに…",
    previewStyle: { fontFamily: "serif", color: "#92400e" },
  },
  {
    no: 2,
    name: "レゲエOne",
    tags: ["バラエティ", "ダイナミック", "ツッコミ"],
    tagColor: "#dc2626",
    mood: "迫力・躍動感",
    desc: "文字の先端が鋭く尖り、ダイナミックで躍動感のあるデザイン。演者が大声を上げたり、鋭いツッコミを入れる瞬間のテロップとして映像の勢いをさらに強調できます。",
    scenes: ["YouTube バラエティ", "ツッコミテロップ", "感情が高ぶるシーン", "目を引きたい場面"],
    preview: "うそやろ！！",
    previewStyle: { fontFamily: "serif", fontWeight: 900, color: "#dc2626", letterSpacing: "-0.02em" },
  },
  {
    no: 3,
    name: "あんずもじ",
    tags: ["女性向け", "手書き", "日常系"],
    tagColor: "#db2777",
    mood: "優しさ・おしゃれ",
    desc: "女性向け・Vlog・日常系に最適な手書き風フォント。個性が強すぎず見やすさのバランスが絶妙で、手書きフォントの中で最も使い勝手が良い一本です。",
    scenes: ["メイク動画", "丁寧な暮らし", "Vlog", "日常系チャンネル"],
    preview: "今日のコーデ♡",
    previewStyle: { fontFamily: "cursive", color: "#db2777" },
  },
  {
    no: 4,
    name: "どきどきファンタジア",
    tags: ["ぽよかわ", "ハイライト入り", "個性的"],
    tagColor: "#7c3aed",
    mood: "可愛さ・キュート",
    desc: "文字の中に最初からハイライト（ツヤ）が含まれた、テリッとしたぽよっと可愛いデザイン。ひらがな・カタカナにのみツヤが入り、漢字には含まれないため使い方に注意が必要です。",
    scenes: ["ポップな演出", "キャラクター紹介", "ゲーム系動画"],
    caution: "漢字にはツヤが入らないため、小さいサイズでは効果が薄れます。大きめサイズで使用推奨。",
    preview: "どきどき♡",
    previewStyle: { fontFamily: "sans-serif", fontWeight: 700, color: "#7c3aed" },
  },
  {
    no: 5,
    name: "筑紫A丸ゴシック",
    tags: ["上品", "レトロ", "丸ゴシック"],
    tagColor: "#065f46",
    mood: "洗練・高級感・温かみ",
    desc: "明朝体のような筆の運びや墨溜まりを感じさせる美しい丸ゴシック体。柔らかさの中に洗練された高級感を演出でき、視聴者に安心感と信頼感を与えます。",
    scenes: ["対談動画", "ドキュメンタリー", "解説動画", "落ち着いたトーンの動画"],
    preview: "丁寧に、穏やかに。",
    previewStyle: { fontFamily: "serif", color: "#065f46" },
  },
  {
    no: 6,
    name: "FOT-キアロ Std",
    tags: ["スタイリッシュ", "シャープ", "近未来"],
    tagColor: "#1d4ed8",
    mood: "クール・知性・スピード感",
    desc: "爽やかさの中にシャープな印象を持つフォント。源暎ラテミンより尖ったデザインで、近未来・ビジネス・IT系の動画に最適。クールで知的なイメージを演出します。",
    scenes: ["ビジネス解説", "ガジェットレビュー", "IT系チャンネル", "近未来表現"],
    preview: "TECH REVIEW 2025",
    previewStyle: { fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.05em", color: "#1d4ed8" },
  },
  {
    no: 7,
    name: "わんぱくルイカ",
    tags: ["ポップ", "元気", "子供向け"],
    tagColor: "#ea580c",
    mood: "明るさ・楽しさ",
    desc: "角に丸みを持つポップなフォント。太めのウェイトで明るく楽しい動画にぴったりはまり、可読性も高いためスマホ視聴でも読みやすいのが大きな利点です。",
    scenes: ["子供向けチャンネル", "エンタメ企画動画", "楽しげな演出"],
    preview: "やってみた！",
    previewStyle: { fontFamily: "sans-serif", fontWeight: 900, color: "#ea580c" },
  },
  {
    no: 8,
    name: "黒龍爽",
    tags: ["筆文字", "和風", "力強い"],
    tagColor: "#111827",
    mood: "迫力・インパクト・和",
    desc: "文字のかすれや筆の勢いがリアルに表現された圧倒的な迫力の筆文字フォント。格闘技・スポーツ系の煽りテロップやオープニングタイトルとして絶大な効果を発揮します。",
    scenes: ["スポーツ・格闘技動画", "オープニングタイトル", "サムネイル", "ここぞという強調場面"],
    preview: "覚悟",
    previewStyle: { fontFamily: "serif", fontWeight: 900, fontSize: "28px", color: "#111827", letterSpacing: "0.1em" },
  },
  {
    no: 9,
    name: "ぶらっしゅ",
    tags: ["バラエティ", "マーカー風", "エンタメ"],
    tagColor: "#b45309",
    mood: "勢い・テンポ感・笑い",
    desc: "太いマーカーや筆で勢いよく書かれたようなポップなデザイン。テレビバラエティで頻繁に見かけるテイストで、驚き・笑い・リアクションのテロップに最適です。",
    scenes: ["バラエティ系テロップ", "強調キーワード", "驚き・笑いの演出", "テンポ重視の動画"],
    preview: "え、まじ!?",
    previewStyle: { fontFamily: "sans-serif", fontWeight: 900, color: "#b45309" },
  },
  {
    no: 10,
    name: "AB-doramin",
    tags: ["ホラー", "ミステリー", "個性的"],
    tagColor: "#4c1d95",
    mood: "不思議・恐怖・非日常",
    desc: "ドラキュラやモンスターを連想させる鋭いセリフが特徴的な不思議なフォント。ホラー・オカルト・都市伝説系の動画で独自の世界観を構築するのに役立ちます。",
    scenes: ["ホラー動画", "ハロウィン企画", "都市伝説・オカルト", "ミステリー系チャンネル"],
    preview: "深夜0時の話…",
    previewStyle: { fontFamily: "serif", color: "#4c1d95" },
  },
  {
    no: 11,
    name: "源暎ぽっぷる",
    tags: ["ポップ", "ゴシック", "エンタメ"],
    tagColor: "#0891b2",
    mood: "明るさ・扱いやすさ",
    desc: "Adobe Fontsの「モッチーポップ」より文字の崩れ具合を綺麗に整えた、扱いやすいポップゴシック体。エンタメ動画全般で幅広く活用できる優秀な一本です。",
    scenes: ["エンタメ系全般", "メインテロップ", "明るい雰囲気の動画"],
    preview: "楽しくいこう！",
    previewStyle: { fontFamily: "sans-serif", fontWeight: 700, color: "#0891b2" },
  },
];

const TAG_COLORS: Record<string, string> = {
  "和風": "#fef3c7", "ゆるかわ": "#fce7f3", "手書き風": "#fce7f3",
  "バラエティ": "#fee2e2", "ダイナミック": "#fee2e2", "ツッコミ": "#fee2e2",
  "女性向け": "#fce7f3", "手書き": "#fce7f3", "日常系": "#fce7f3",
  "ぽよかわ": "#ede9fe", "ハイライト入り": "#ede9fe", "個性的": "#ede9fe",
  "上品": "#d1fae5", "レトロ": "#d1fae5", "丸ゴシック": "#d1fae5",
  "スタイリッシュ": "#dbeafe", "シャープ": "#dbeafe", "近未来": "#dbeafe",
  "ポップ": "#ffedd5", "元気": "#ffedd5", "子供向け": "#ffedd5",
  "筆文字": "#f3f4f6", "力強い": "#f3f4f6",
  "マーカー風": "#fef3c7", "エンタメ": "#cffafe",
  "ホラー": "#ede9fe", "ミステリー": "#ede9fe",
  "ゴシック": "#cffafe",
};

export default function RecommendedFontsPage() {
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
          <span className="text-gray-500">おすすめフォント11選</span>
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
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-20 overflow-hidden px-6">
              {["昔々", "レゲエ", "あんず", "筑紫", "黒龍"].map((t, i) => (
                <span
                  key={i}
                  className="text-white font-black whitespace-nowrap"
                  style={{ fontSize: `${20 + i * 4}px`, opacity: 0.6 }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="relative z-10 text-center">
              <p className="text-5xl mb-2">🔤</p>
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(196,181,253,0.9)" }}>
                Font Collection
              </p>
            </div>
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-500">デザイン基礎</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 10 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【これで差がつく】演出に使える動画編集のおすすめフォント11選
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              同じセリフでもフォントのデザインが違うだけで、視聴者が受け取る感情（楽しさ・悲しみ・驚きなど）は全く異なります。
              動画のジャンルやシーンに合わせた適切なフォントの使い分けは、動画編集者にとって必須のスキルです。
            </p>
          </div>
        </div>

        {/* ジャンル早見表 */}
        <div
          className="rounded-2xl p-5 mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(236,72,153,0.12)",
          }}
        >
          <p className="text-[11px] font-bold tracking-widest uppercase text-pink-400 mb-4">ジャンル別 早見表</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { label: "バラエティ・エンタメ", fonts: "レゲエOne・ぶらっしゅ・わんぱくルイカ" },
              { label: "和風・ゆるかわ",       fonts: "昔々ふぉんと・黒龍爽" },
              { label: "女性向け・Vlog",      fonts: "あんずもじ・どきどきファンタジア" },
              { label: "ビジネス・IT系",       fonts: "FOT-キアロ・筑紫A丸ゴシック" },
              { label: "ホラー・ミステリー",    fonts: "AB-doramin" },
              { label: "汎用エンタメ",         fonts: "源暎ぽっぷる" },
            ].map(({ label, fonts }) => (
              <div
                key={label}
                className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.8)" }}
              >
                <p className="text-[10px] font-bold text-gray-600 mb-1">{label}</p>
                <p className="text-[10px] text-pink-400">{fonts}</p>
              </div>
            ))}
          </div>
        </div>

        {/* フォント一覧 */}
        <h2 className="text-base font-black text-gray-800 mb-5">おすすめフォント11選</h2>
        <div className="space-y-5">
          {FONTS.map((font) => (
            <div
              key={font.no}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,245,252,0.62) 100%)",
                border: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 2px 12px rgba(236,72,153,0.05)",
              }}
            >
              {/* 画像エリア */}
              <div
                className="w-full flex flex-col items-center justify-center gap-2 py-8"
                style={{
                  background: "linear-gradient(135deg, rgba(240,240,248,0.8) 0%, rgba(250,240,255,0.7) 100%)",
                  border: "none",
                  borderBottom: "1.5px dashed rgba(200,180,220,0.5)",
                  minHeight: "120px",
                }}
              >
                <span className="text-3xl opacity-30">🖼️</span>
                <span className="text-[11px] text-gray-300">{font.name} — フォントサンプル画像</span>
              </div>

              <div className="px-5 py-4">
                {/* No + 名前 + タグ */}
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center text-[11px] font-black text-white mt-0.5"
                    style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
                  >
                    {font.no}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-sm font-black text-gray-800">{font.name}</span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                        style={{ background: `${font.tagColor}18`, color: font.tagColor }}
                      >
                        {font.mood}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {font.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md px-2 py-0.5 text-[9px] font-medium text-gray-500"
                          style={{ background: TAG_COLORS[tag] ?? "#f3f4f6" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 説明 */}
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{font.desc}</p>

                {/* 注意 */}
                {font.caution && (
                  <div className="rounded-lg px-3 py-2 mb-3 flex gap-2" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)" }}>
                    <span className="text-xs flex-shrink-0">⚠️</span>
                    <p className="text-[11px] text-amber-700 leading-relaxed">{font.caution}</p>
                  </div>
                )}

                {/* 利用シーン */}
                <div className="flex flex-wrap gap-1.5">
                  {font.scenes.map((scene) => (
                    <span
                      key={scene}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium text-pink-400"
                      style={{ background: "rgba(249,168,212,0.12)" }}
                    >
                      {scene}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* おわりに */}
        <div
          className="rounded-2xl p-7 mt-10 mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 20px rgba(236,72,153,0.07)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-3">おわりに</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            これらのフォントを活用することで、視聴者に伝えたい感情や動画のコンセプトをより的確に表現できるようになります。
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              "配布元のサイトが急に閉鎖されるケースがあるため、気になったフォントはすぐにDLしておく",
              "いつ有料に変わるかもわからないため、早めの確保が重要",
              "アップデートで収録漢字が増えることもあるため、定期的に作者サイトをチェック",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="flex-shrink-0 text-pink-400 mt-0.5">•</span>
                <p className="text-xs text-gray-500 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div
            className="rounded-xl p-4 text-sm text-gray-700 font-semibold leading-relaxed"
            style={{ background: "rgba(236,72,153,0.06)" }}
          >
            ぜひ今回ご紹介したフォントを動画編集に取り入れ、より魅力的なコンテンツ制作に役立ててください。
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="flex justify-center mb-12">
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
