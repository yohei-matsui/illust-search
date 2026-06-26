import Link from "next/link";

export const metadata = {
  title: "【初心者向け】失敗しない色の選び方｜色彩心理学を活かした配色方法 | デザインコラム | ラクポチ イラスト",
  description:
    "色が人の性格・気分・味覚にまで影響を与える「色彩心理学」を解説。対人関係を円滑にする3テクニック、なりたい自分に近づく配色の魔法まで実践的に紹介します。",
};

const COLOR_RELATIONS = [
  { color: "赤", hex: "#ef4444", bg: "rgba(254,226,226,0.7)", border: "rgba(239,68,68,0.2)", icon: "🔴", effect: "情熱・生命力・自信・アドレナリン促進" },
  { color: "青", hex: "#3b82f6", bg: "rgba(219,234,254,0.7)", border: "rgba(59,130,246,0.2)", icon: "🔵", effect: "冷静・誠意・感情鎮静・心拍数低下" },
  { color: "緑", hex: "#22c55e", bg: "rgba(220,252,231,0.7)", border: "rgba(34,197,94,0.2)", icon: "🟢", effect: "リラックス・癒し・心拍数安定" },
  { color: "黄色", hex: "#eab308", bg: "rgba(254,249,195,0.7)", border: "rgba(234,179,8,0.2)", icon: "🟡", effect: "好奇心・積極性・コミュニケーション促進" },
  { color: "ピンク", hex: "#ec4899", bg: "rgba(252,231,243,0.7)", border: "rgba(236,72,153,0.2)", icon: "🩷", effect: "可愛らしさ・保護欲刺激・柔らかさ" },
  { color: "黒", hex: "#1f2937", bg: "rgba(243,244,246,0.7)", border: "rgba(31,41,55,0.15)", icon: "⚫", effect: "プレッシャー遮断・権威・距離感" },
];

const PARTNER_TECHS = [
  {
    no: "①",
    title: "心理的距離を縮める「カラーミラーリング効果」",
    color: "#7c3aed",
    bg: "rgba(237,233,254,0.6)",
    border: "rgba(124,58,237,0.15)",
    badge: "親近感",
    badgeBg: "#7c3aed",
    body: "相手がよく着ている服の色や身につけている小物の色と同じ色を、自分自身のファッションや持ち物にも取り入れるテクニックです。",
    detail: "人間には、自分と共通点を持つ相手に無意識に親近感を抱く心理（類似性の法則）があります。相手のパーソナルカラーを「ミラーリング」することで、相手の無意識に強く働きかけ、「この人といるとなんだか心地いいな」と感じさせることができます。",
    point: "相手が好む色を観察 → 自分の服・小物に取り入れる",
  },
  {
    no: "②",
    title: "怒りを鎮め誠意を伝える「ブルーのアンダーコントロール」",
    color: "#2563eb",
    bg: "rgba(219,234,254,0.6)",
    border: "rgba(37,99,235,0.15)",
    badge: "誠意・謝罪",
    badgeBg: "#2563eb",
    body: "青色が持つ「心を穏やかにして感情を落ち着かせる効果」を利用したテクニックです。",
    detail: "青色は「怒り」を抑制するだけでなく、相手に冷静さと誠意を感じさせる色です。仕事でミスをして謝罪に行く場面では、明るい色を避けて「濃い青（ネイビー）のスーツ」を選ぶのが正解。青が相手の怒りを視覚的に中和し、誠意と反省を示すサポートをしてくれます。",
    point: "謝罪・交渉シーン → ネイビーのスーツ・アイテムを選ぶ",
  },
  {
    no: "③",
    title: "第一印象を操る「カラーインプレッション効果」",
    color: "#db2777",
    bg: "rgba(252,231,243,0.6)",
    border: "rgba(219,39,119,0.15)",
    badge: "恋愛・初対面",
    badgeBg: "#db2777",
    body: "デートに着ていく服装の「色」によって、相手に与える印象は劇的に変わります。",
    detail: "初デートのおすすめは「ピンク」や「オレンジ」などの暖色系。淡いピンクは「守ってあげたい」という心理を刺激し、オレンジは親しみやすさを演出します。逆に「黒」と「白」のモノトーンは心理的な壁を作りやすいため、関係を深めたい初期段階では注意が必要です。",
    point: "初デートNG → 黒・白のモノトーン ／ OK → ピンク・オレンジ",
  },
];

const SELF_TECHS = [
  {
    color: "赤",
    hex: "#ef4444",
    bg: "rgba(254,226,226,0.6)",
    border: "rgba(239,68,68,0.2)",
    icon: "🔴",
    title: "自信とポジティブさを引き出す「赤」",
    target: "引っ込み思案・自信がない",
    mechanism: "交感神経刺激 → アドレナリン分泌 → 自己暗示強化",
    body: "服やネクタイ、ハンカチなどのワンポイントに赤色を取り入れましょう。視界に赤が入ることで交感神経が刺激されアドレナリンの分泌が促され、「自分はプラス思考でポジティブだ」という強い自己暗示をかけることができます。",
  },
  {
    color: "黒",
    hex: "#1f2937",
    bg: "rgba(243,244,246,0.6)",
    border: "rgba(31,41,55,0.15)",
    icon: "⚫",
    title: "緊張をほぐしプレッシャーから身を守る「黒」",
    target: "人前での緊張・プレッシャー",
    mechanism: "光を吸収 → 存在を目立ちにくく → バリア心理効果",
    body: "重要なプレゼンや大勢の前での発言時は「黒」の服を選ぶのがおすすめ。黒には光を吸収して自分の存在を目立ちにくくする効果があり、「外部のプレッシャーから自分を守ってくれている」という安心感を与えてくれます。",
  },
  {
    color: "黄色",
    hex: "#ca8a04",
    bg: "rgba(254,249,195,0.6)",
    border: "rgba(202,138,4,0.2)",
    icon: "🟡",
    title: "積極的なコミュニケーションを生む「黄色」",
    target: "消極的・話しかけられない",
    mechanism: "太陽・光の連想 → 好奇心旺盛な気分 → 外向きの意識",
    body: "「もっと相手のことをよく知りたい」「自分から話しかけたい」という積極性を持ちたい場合は黄色が効果的。黄色は新しいことや変わったものが好きな「好奇心旺盛な性格」へと気分をシフトさせ、初対面の相手ともスムーズなコミュニケーションが取れるようになります。",
  },
];

export default function ColorPsychologyPage() {
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
          <span className="text-gray-500">失敗しない色の選び方</span>
        </div>
      </div>

      <main className="max-w-screen-md mx-auto w-full px-4 sm:px-6 py-8 flex-1">

        {/* ヘッダーカード */}
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
            className="w-full h-52 relative overflow-hidden flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
          >
            {/* カラーサークル */}
            <div className="flex items-center gap-4 relative z-10">
              {["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#7c3aed","#ec4899"].map((c, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: i === 3 ? "52px" : "36px",
                    height: i === 3 ? "52px" : "36px",
                    background: c,
                    boxShadow: `0 0 20px ${c}99`,
                    opacity: i === 3 ? 1 : 0.8,
                  }}
                />
              ))}
            </div>
            <p className="absolute bottom-4 right-6 text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(196,181,253,0.7)" }}>
              Color Psychology
            </p>
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-semibold text-purple-500">配色</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 10 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【初心者向け】失敗しない色の選び方<br />
              <span className="text-lg">｜色彩心理学を活かした配色方法</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              服の色を変えるだけで、相手への印象も自分の気分も変わります。
              色彩心理学の実践テクニックを、対人・自己変革の2方向から解説します。
            </p>
          </div>
        </div>

        {/* リード */}
        <Body>
          <p>
            「色」は人の気持ちや行動、さらには性格にまで影響を与えます。
            デザインやアートの現場では常識ですが、この色が人間の心理を動かすメカニズムは
            <strong className="text-gray-700">「色彩心理学」</strong>という専門分野で研究されています。
          </p>
        </Body>

        {/* セクション1: 色と私たちの関係 */}
        <SectionHeading number="1">色と私たちの密接な関係性とは？</SectionHeading>

        <Body>
          <p>
            「あなたは何色が好きですか？」と聞かれたとき、「青」と答える人は服も持ち物も自然と青で揃えていて、
            スーパーでも青いパッケージに手が伸びる——そういうことが実際に起きています。
          </p>
          <p>
            実は、色の好みと人間の性格には密接な関係があり、人はその時の心の状態や思考回路によって、
            特定の波長を持つ色を無意識に求めてしまう生き物なのです。
            <strong className="text-gray-700">「相手が好んで選んでいる色から、その人の考え方や行動パターンを読み取ることができる」</strong>——これが色彩心理学の根幹です。
          </p>
        </Body>

        {/* 色と効果テーブル */}
        <div
          className="rounded-2xl overflow-hidden my-6"
          style={{
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          }}
        >
          <div
            className="px-5 py-3 flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(236,72,153,0.06) 100%)", borderBottom: "1px solid rgba(124,58,237,0.1)" }}
          >
            <span className="text-xs font-black text-purple-500 tracking-wide">主な色と心理効果</span>
          </div>
          <div
            className="divide-y"
            style={{ background: "rgba(255,255,255,0.65)", divideColor: "rgba(0,0,0,0.05)" }}
          >
            {COLOR_RELATIONS.map((item) => (
              <div key={item.color} className="flex items-center gap-4 px-5 py-3">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black"
                  style={{ background: item.bg, border: `1.5px solid ${item.border}` }}
                >
                  {item.icon}
                </div>
                <div className="flex-shrink-0 w-10">
                  <span className="text-xs font-black" style={{ color: item.hex }}>{item.color}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.effect}</p>
              </div>
            ))}
          </div>
        </div>

        <Body>
          <p>
            また、色は私たちの気分や感覚（五感）にも直接影響を与えています。
            自然をイメージさせる「緑色」に囲まれた空間にいると心拍数が落ち着きますし、「赤」より「青」で統一された部屋のほうが体感温度として涼しく感じられます。
          </p>
        </Body>

        <TipBox>
          <p className="font-bold text-gray-700 mb-1">💡 視覚が味覚に影響する例</p>
          <p>
            白いカップのコーヒーは苦みをより強く感じさせます。白と黒のコントラストが視覚的に苦みを強調するためです。
            同様に、イチゴのショートケーキも「白いお皿」の方が「黒いお皿」より甘く濃く感じられるという実験結果があります。
          </p>
        </TipBox>

        {/* セクション2: 対人関係テクニック */}
        <SectionHeading number="2">相手を動かす！対人関係を円滑にする色彩心理学</SectionHeading>

        <Body>
          <p>
            色彩心理学は「相手への働きかけ」と「自分自身への働きかけ」の2方向で使えます。
            まず相手への3テクニックから。
          </p>
        </Body>

        <div className="space-y-5 mt-5">
          {PARTNER_TECHS.map((tech) => (
            <div
              key={tech.no}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,245,252,0.62) 100%)",
                border: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="px-5 py-4 flex items-start gap-3"
                style={{ background: tech.bg, borderBottom: `1px solid ${tech.border}` }}
              >
                <span
                  className="flex-shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-black text-white mt-0.5"
                  style={{ background: tech.badgeBg }}
                >
                  {tech.badge}
                </span>
                <div>
                  <p className="text-xs font-black text-gray-400 mb-0.5">{tech.no}</p>
                  <p className="text-sm font-black text-gray-800 leading-snug">{tech.title}</p>
                </div>
              </div>
              <div className="px-5 py-5 space-y-3">
                <p className="text-xs text-gray-600 leading-relaxed">{tech.body}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{tech.detail}</p>
                <div
                  className="rounded-lg px-3 py-2.5 flex items-center gap-2"
                  style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${tech.border}` }}
                >
                  <span className="text-[10px] font-black" style={{ color: tech.color }}>実践ポイント</span>
                  <span className="text-[11px] text-gray-600">{tech.point}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* セクション3: 自分を変える配色 */}
        <SectionHeading number="3">なりたい自分に近づく！自分の性格を変える配色の魔法</SectionHeading>

        <Body>
          <p>
            実は私たちは、状況に応じて自分の性格を無意識に調整しています。後輩が入社してきたら「先輩らしく」振る舞い、
            合コンでは「可愛く見せよう」とピンク系の服を着る。人はその場に合った役割を演じることで、実際に行動が変わります。
          </p>
          <p>
            そして「色」には、一瞬にして私たちの自己認識を変え、性格を望む方向へ導いてくれる力があります。
          </p>
        </Body>

        <div className="grid gap-4 mt-5 sm:grid-cols-3">
          {SELF_TECHS.map((tech) => (
            <div
              key={tech.color}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,245,252,0.62) 100%)",
                border: "1px solid rgba(255,255,255,0.85)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="px-4 py-4 text-center"
                style={{ background: tech.bg, borderBottom: `1px solid ${tech.border}` }}
              >
                <span className="text-3xl">{tech.icon}</span>
                <p className="text-xs font-black mt-1.5" style={{ color: tech.hex }}>{tech.color}</p>
                <div
                  className="rounded-full px-2 py-0.5 inline-block mt-1 text-[9px] font-bold text-white"
                  style={{ background: tech.hex }}
                >
                  {tech.target}
                </div>
              </div>
              <div className="px-4 py-4 space-y-2.5">
                <p className="text-[11px] font-black text-gray-700 leading-snug">{tech.title}</p>
                <div
                  className="rounded-lg px-2.5 py-1.5 text-[9px] font-mono text-gray-400 leading-relaxed"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  {tech.mechanism}
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">{tech.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* まとめ */}
        <div
          className="rounded-2xl p-7 mt-10 mb-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 20px rgba(236,72,153,0.07)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">まとめ：色を味方につけて日常を豊かにする</p>

          <div className="space-y-3 mb-6 text-sm text-gray-600 leading-relaxed">
            <p>
              色が人間の心理に与える影響は、知れば知るほど大きい。
              <strong className="text-gray-700">「今日身につけるアイテムの色を変えるだけ」</strong>——これなら誰でも今日からできます。
            </p>
          </div>

          {/* チェックリスト風まとめ */}
          <div className="space-y-2 mb-6">
            {[
              { c: "🔴", text: "自信が欲しい日 → 赤をワンポイントに取り入れる" },
              { c: "🔵", text: "謝罪・交渉シーン → ネイビーを選ぶ" },
              { c: "🩷", text: "初デート → ピンク・オレンジで好印象" },
              { c: "🟡", text: "積極的になりたい日 → 黄色のアイテムを使う" },
              { c: "⚫", text: "プレゼンで緊張しそうな日 → 黒でバリアを作る" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.6)" }}>
                <span className="text-base">{item.c}</span>
                <span className="text-xs text-gray-700 font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            服を選ぶときに「今日は何色にしようか」と少し考えるだけで、その日の印象も気分も変わります。
            難しい話ではありません。まず明日の一枚から試してみてください。
          </p>
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

/* ─── 共通コンポーネント ─── */

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-4">
      <span
        className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white"
        style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(167,139,250,1) 100%)" }}
      >
        {number}
      </span>
      <h2 className="text-base font-black text-gray-800 leading-snug">{children}</h2>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-sm text-gray-600 leading-relaxed">{children}</div>;
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 my-5 text-xs text-gray-600 leading-relaxed"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,245,252,0.6) 100%)",
        border: "1.5px solid rgba(236,72,153,0.12)",
      }}
    >
      {children}
    </div>
  );
}
