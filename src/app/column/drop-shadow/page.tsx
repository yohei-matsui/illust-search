import Link from "next/link";

export const metadata = {
  title: "【クオリティUP】おしゃれなドロップシャドウのつけ方｜テロップルールの基本 | デザインコラム | ラクポチ イラスト",
  description:
    "Premiere Proのエッセンシャルグラフィックスを使ったドロップシャドウの正解パターンと、絶対NGな失敗例を解説。ふんわり型・くっきり型・3D風テロップまで徹底解説します。",
};

export default function DropShadowPage() {
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
          <span className="text-gray-500">おしゃれなドロップシャドウのつけ方</span>
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
            {/* シャドウ演出 */}
            <div className="relative">
              <span
                className="relative z-10 text-3xl font-black text-white tracking-wide"
                style={{ textShadow: "6px 6px 16px rgba(0,0,0,0.8)" }}
              >
                テロップ
              </span>
            </div>
            <p
              className="absolute bottom-5 right-6 text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "rgba(196,181,253,0.7)" }}
            >
              Drop Shadow
            </p>
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold text-orange-500">実践</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 8 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【クオリティUP】おしゃれなドロップシャドウのつけ方<br />
              <span className="text-lg">｜テロップルールの基本</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              テロップを背景から際立たせ、より見やすくおしゃれに演出するために欠かせない「ドロップシャドウ」。
              ただ「つければいい」ではなく、数値の根拠がある。NGパターンと正しいアプローチを具体的な設定値で紹介します。
            </p>
          </div>
        </div>

        {/* ─── Section 1: ドロップシャドウ ─── */}
        <SectionHeading num="1" title="ドロップシャドウ：見やすさと「さりげなさ」のバランス" />

        <Body>
          <p>
            ドロップシャドウの本来の役割は、「テロップにエッジ（境界線）をつけたくないけれど、背景に沈まないように見やすくしたい」という場面で活躍します。
            主に Vlog やシネマティックな動画など、おしゃれな雰囲気を壊したくない時によく使われます。
          </p>
          <p>
            ドロップシャドウを美しく設定するための基本は、<strong className="text-pink-500">「現実世界の影の原理」</strong>を理解することです。
            現実の影は、物体（テロップ）と背景との距離が近いほど「濃く・くっきり」と落ち、距離が遠くなるほど「薄く・ぼやけて（ブラー）」広がっていきます。
          </p>
        </Body>

        {/* NG vs OK 比較 */}
        <div className="grid sm:grid-cols-2 gap-3 my-6">
          {/* NG */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid rgba(239,68,68,0.2)" }}
          >
            <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(254,242,242,0.9)" }}>
              <span className="text-xs font-black text-red-500">❌ NGパターン</span>
            </div>
            <div
              className="px-5 py-5 flex items-center justify-center"
              style={{ background: "#1a1a2e", minHeight: "80px" }}
            >
              <span
                className="text-lg font-black text-white"
                style={{ textShadow: "20px 20px 0px rgba(0,0,0,0.9)" }}
              >
                テロップ
              </span>
            </div>
            <div className="px-4 py-3" style={{ background: "rgba(254,242,242,0.6)" }}>
              <p className="text-[11px] text-red-500 font-semibold mb-1">距離が遠い + 影が濃い + ぼかしなし</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">影が悪目立ちし、テロップ本体より影に視線がいってしまう</p>
            </div>
          </div>
          {/* OK: ふんわり */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid rgba(34,197,94,0.2)" }}
          >
            <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "rgba(240,253,244,0.9)" }}>
              <span className="text-xs font-black text-green-500">✅ 正解パターン</span>
            </div>
            <div
              className="px-5 py-5 flex items-center justify-center"
              style={{ background: "#1a1a2e", minHeight: "80px" }}
            >
              <span
                className="text-lg font-black text-white"
                style={{ textShadow: "6px 8px 18px rgba(0,0,0,0.35)" }}
              >
                テロップ
              </span>
            </div>
            <div className="px-4 py-3" style={{ background: "rgba(240,253,244,0.6)" }}>
              <p className="text-[11px] text-green-600 font-semibold mb-1">距離ほどよく + 不透明度低め + ブラー強め</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">影が目立たず、テロップが自然に背景から浮き上がる</p>
            </div>
          </div>
        </div>

        {/* 2パターン */}
        <H3 title="正解パターン：2つのアプローチ" />
        <div className="grid sm:grid-cols-2 gap-3 my-4">
          <ParamCard
            type="ふんわりタイプ"
            emoji="🌫️"
            desc="背景とテロップの間に空気感を持たせる上品な仕上がり。Vlog・シネマティック向き。"
            params={[
              { label: "距離", value: "15" },
              { label: "不透明度", value: "15%" },
              { label: "ブラー", value: "40" },
            ]}
          />
          <ParamCard
            type="くっきりタイプ"
            emoji="🔲"
            desc="文字の輪郭を少しだけ立たせる、さりげない視認性アップ。汎用的に使いやすい。"
            params={[
              { label: "距離", value: "2" },
              { label: "不透明度", value: "50%" },
              { label: "ブラー", value: "10" },
            ]}
          />
        </div>

        <Body>
          <div
            className="rounded-xl px-4 py-3 text-[11px] text-gray-500 leading-relaxed"
            style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(0,0,0,0.05)" }}
          >
            ※数値はあくまで目安です。背景映像によって見え方は全く異なるため、プレビュー画面を見ながら「さりげなさ」を意識して微調整してください。
          </div>
        </Body>

        {/* 同系色テクニック */}
        <H3 title="ワンランク上のテクニック：同系色のシャドウ" />
        <Body>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1.5">影の色を「黒」にしない</p>
            <p>
              背景がある程度単色の場合は、背景の色に合わせた<strong className="text-pink-500">「同系色の濃い色」</strong>を影の色に設定してみてください。
              真っ黒の影より映像全体のトーンになじみ、わざとらしさのない洗練されたテロップになります。CG合成などでもよく使われる、自然に見せるための重要なアプローチです。
            </p>
          </TipBox>
        </Body>

        {/* ポップなテロップにも */}
        <H3 title="ポップなテロップ（Wエッジ）にも有効" />
        <Body>
          <p>
            白エッジ＋黒エッジのような「ポップなテロップ（Wエッジ）」にもドロップシャドウは有効です。
            エッジが重なるとテロップ全体の面積が広がり、画面上で「のっぺり」と平面的な印象になりがちです。
            ここに薄くシャドウを落として文字を背景から少し浮かせてあげる（段差を作る）だけで、文字が立ち、メリハリのある画面に仕上がります。
          </p>
        </Body>

        <ImagePlaceholder label="Wエッジテロップ（シャドウなし）とシャドウあり比較画像" />

        {/* ─── Section 2: 3D風 ─── */}
        <SectionHeading num="2" title="簡易3D風テロップ（立体文字）の作り方" />

        <Body>
          <p>
            2つ目の立体感の出し方は、バラエティ番組の YouTube 動画などで頻繁に使用される「3D風（奥行き）」の表現です。
            エッセンシャルグラフィックスの「シャドウ」機能を応用するだけで簡単に作成できます。
          </p>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1.5">作り方はたったこれだけ</p>
            <p>
              ドロップシャドウで設定していた<strong className="text-pink-500">「ブラー（ぼかし）」の数値をゼロ（0）にする</strong>だけ。
              ぼかしを無くした状態で、シャドウの「距離」と「サイズ（広がり）」を調整することで、文字に厚み（側面）が生まれたような立体風テロップになります。
              影（側面）の色には、エッジと同系色の少し濃い色か黒を設定すると奥行き感が増します。
            </p>
          </TipBox>
        </Body>

        {/* 3D比較 */}
        <div className="grid sm:grid-cols-2 gap-3 my-6">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid rgba(239,68,68,0.2)" }}
          >
            <div className="px-4 py-2.5" style={{ background: "rgba(254,242,242,0.9)" }}>
              <span className="text-xs font-black text-red-500">❌ NGパターン</span>
            </div>
            <div
              className="px-5 py-5 flex items-center justify-center"
              style={{ background: "#1a1a2e", minHeight: "80px" }}
            >
              {/* 角が離れるイメージ */}
              <span
                className="text-xl font-black"
                style={{
                  color: "#fff",
                  WebkitTextStroke: "2px #000",
                  textShadow: "18px 18px 0 #333",
                }}
              >
                テロップ
              </span>
            </div>
            <div className="px-4 py-3" style={{ background: "rgba(254,242,242,0.6)" }}>
              <p className="text-[11px] text-red-500 font-semibold mb-1">距離だけ遠い・サイズ未調整</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">文字の角と影の角に隙間ができ、中途半端な見た目になる</p>
            </div>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1.5px solid rgba(34,197,94,0.2)" }}
          >
            <div className="px-4 py-2.5" style={{ background: "rgba(240,253,244,0.9)" }}>
              <span className="text-xs font-black text-green-500">✅ 正解パターン</span>
            </div>
            <div
              className="px-5 py-5 flex items-center justify-center"
              style={{ background: "#1a1a2e", minHeight: "80px" }}
            >
              {/* 角がくっつくイメージ */}
              <span
                className="text-xl font-black"
                style={{
                  color: "#fff",
                  WebkitTextStroke: "2px #000",
                  textShadow: "4px 4px 0 #222, 5px 5px 0 #222, 6px 6px 0 #111",
                }}
              >
                テロップ
              </span>
            </div>
            <div className="px-4 py-3" style={{ background: "rgba(240,253,244,0.6)" }}>
              <p className="text-[11px] text-green-600 font-semibold mb-1">距離とサイズのバランスを取る</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">文字本体と影の角がピタッとくっつき、厚みのある立体感が生まれる</p>
            </div>
          </div>
        </div>

        <Body>
          <div
            className="rounded-xl px-4 py-3.5 flex gap-2.5"
            style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)" }}
          >
            <span className="text-sm flex-shrink-0">⚠️</span>
            <p className="text-[11px] text-amber-700 leading-relaxed">
              角の隙間はディレクターやクライアントから「細かいディテールに気づけない編集者だ」とスキルを低く評価される要因になります。必ず距離とサイズのバランスを取り、隙間のない状態を作ってください。
            </p>
          </div>
        </Body>

        <ImagePlaceholder label="3D風テロップ（NG：隙間あり）と（OK：角ぴったり）の比較画像" />

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
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            テロップの装飾は「絶対こうしなければならない」という明確な正解があるわけではありませんが、「見づらい」「不自然」という明確な不正解は存在します。
          </p>
          <div className="space-y-2.5 mb-5">
            {[
              { label: "ドロップシャドウ", desc: "距離・不透明度・ブラーのバランスで「さりげなさ」を演出する" },
              { label: "同系色シャドウ", desc: "影の色を黒にせず、背景と同系色にすることで映像になじませる" },
              { label: "3D風テロップ", desc: "ブラーをゼロにし、距離とサイズを合わせて角の隙間をなくす" },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-2.5">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(249,168,212,0.3)" }}
                >
                  <span className="text-[10px] text-pink-500 font-black">✓</span>
                </span>
                <div>
                  <span className="text-xs font-bold text-gray-700">{label} — </span>
                  <span className="text-xs text-gray-500">{desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="rounded-xl p-4 text-sm text-gray-700 font-semibold leading-relaxed"
            style={{ background: "rgba(236,72,153,0.06)" }}
          >
            エッセンシャルグラフィックスのシャドウ機能は非常に手軽に使えます。次回の編集からぜひ意識して設定を見直してみてください。
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

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-start gap-3 mt-12 mb-6">
      <span
        className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white mt-0.5"
        style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
      >
        {num}
      </span>
      <h2 className="text-base sm:text-lg font-black text-gray-800 leading-snug">{title}</h2>
    </div>
  );
}

function H3({ title }: { title: string }) {
  return (
    <h3 className="text-sm font-black text-gray-700 mt-8 mb-4 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full inline-block flex-shrink-0" style={{ background: "linear-gradient(180deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }} />
      {title}
    </h3>
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

function ParamCard({
  type, emoji, desc, params,
}: {
  type: string;
  emoji: string;
  desc: string;
  params: { label: string; value: string }[];
}) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,240,250,0.65) 100%)",
        border: "1px solid rgba(236,72,153,0.12)",
      }}
    >
      <p className="text-xs font-black text-gray-700 mb-1">{emoji} {type}</p>
      <p className="text-[10px] text-gray-400 leading-relaxed mb-3">{desc}</p>
      <div className="space-y-1.5">
        {params.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-[10px] text-gray-500">{label}</span>
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-bold text-pink-500"
              style={{ background: "rgba(249,168,212,0.15)" }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
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
