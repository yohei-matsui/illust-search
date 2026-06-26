import Link from "next/link";

export const metadata = {
  title: "【一瞬で良くなる】動画デザインのコツ3選｜デザインの基本ルール | デザインコラム | ラクポチ イラスト",
  description:
    "近接・整列／強弱／余白——素人っぽさが抜けない動画の根本原因と、実務で使えるデザインの基本ルールを具体的に解説します。",
};

const TIPS = [
  { num: 1, icon: "⚡", title: "近接・整列", sub: "情報をグループ化して整頓する" },
  { num: 2, icon: "🎯", title: "強弱", sub: "視線をコントロールしてメリハリをつける" },
  { num: 3, icon: "⬜", title: "余白", sub: "引き算の設計が垢抜けを生む" },
];

export default function DesignTipsPage() {
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
          <span className="text-gray-500">動画デザインのコツ3選</span>
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
          {/* サムネイル — 3つのルールを視覚化 */}
          <div
            className="w-full h-48 relative overflow-hidden flex items-center justify-center gap-6"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}
          >
            {TIPS.map((t) => (
              <div key={t.num} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t.icon}
                </div>
                <span className="text-[10px] font-bold text-white/60 tracking-wider">{t.title}</span>
              </div>
            ))}
          </div>

          <div className="px-8 py-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-500">デザイン基礎</span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 8 min</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【一瞬で良くなる】動画デザインのコツ3選<br />
              <span className="text-lg">｜デザインの基本ルール</span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              カット割りやエフェクトは作り込まれているのに、どうしても「素人っぽさ」が抜けない映像。その原因は大抵、動画編集の技術ではなく画面上の「デザインの基本ルール」が守られていないことにあります。
            </p>
          </div>
        </div>

        {/* 導入 */}
        <Body>
          <p>
            デザインは持って生まれた感覚や才能によるアートではなく、明確なルールが存在します。
            それに沿って要素を配置していくだけで、動画のクオリティは担保される仕組みになっています。
          </p>
          <p>
            このルールを知らないまま編集を続けると、無意識のうちにクオリティの低いデザインになり、視聴者に直感で「いけてない動画だ」と判断されてしまいます。
            今回は、実務で特に差がつく3つのロジックを整理します。
          </p>
        </Body>

        {/* 3つの概要チップ */}
        <div className="grid grid-cols-3 gap-3 my-8">
          {TIPS.map((t) => (
            <div
              key={t.num}
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
                border: "1px solid rgba(236,72,153,0.12)",
              }}
            >
              <span className="text-xl">{t.icon}</span>
              <p className="text-xs font-black text-gray-700">{t.title}</p>
              <p className="text-[10px] text-gray-400 leading-relaxed">{t.sub}</p>
            </div>
          ))}
        </div>

        {/* ─── Tip 1: 近接・整列 ─── */}
        <TipHeading num={1} icon="⚡" title="近接・整列" label="情報をグループ化して整頓する" />
        <Body>
          <ImagePlaceholder label="バラバラに配置されたテロップと、グループ化・整列されたテロップの比較" />
          <p>
            まずは、デザインの4大原則にも含まれている「近接」の概念です。
            近接とは、関係する情報を近づけて配置し、ひとまとめにグループ化して見せる手法を指します。
          </p>

          {/* 近接のNG/OK比較 */}
          <div className="grid grid-cols-2 gap-3 my-2">
            <CompareBox type="ng" label="近接NG — バラバラ">
              <div className="flex flex-col gap-4 items-start">
                <div className="rounded px-3 py-1 text-[10px] font-bold text-white" style={{ background: "#ef4444" }}>ポイント1</div>
                <div className="rounded px-3 py-1 text-[10px] font-bold text-white" style={{ background: "#ef4444" }}>ポイント2</div>
                <div className="rounded px-3 py-1 text-[10px] font-bold text-white" style={{ background: "#ef4444" }}>ポイント3</div>
              </div>
            </CompareBox>
            <CompareBox type="ok" label="近接OK — まとまり">
              <div className="flex flex-col gap-1.5 items-start">
                <div className="rounded px-3 py-1 text-[10px] font-bold text-white" style={{ background: "#22c55e" }}>ポイント1</div>
                <div className="rounded px-3 py-1 text-[10px] font-bold text-white" style={{ background: "#22c55e" }}>ポイント2</div>
                <div className="rounded px-3 py-1 text-[10px] font-bold text-white" style={{ background: "#22c55e" }}>ポイント3</div>
              </div>
            </CompareBox>
          </div>

          <p>
            例えば、大事なポイントを3つ箇条書きで表示させるシーンを想像してみてください。
            文字の下に敷く色付きの帯（座布団）の距離感がバラバラだと、情報がまとまって頭に入ってきません。
            適切な距離感に縮め、同じ要素を1つのグループとしてまとめてあげるだけで、画面は一気に見やすくなります。
          </p>

          <p>
            そして、近接とセットで意識すべきなのが「整列」です。
            要素の位置や大きさ、形、色などを意図的に揃えて配置するルールです。
          </p>

          <TipBox>
            <p className="font-bold text-gray-700 mb-1">整列がズレると素人感が出る理由</p>
            <p>
              1番上の座布団は左端に合っているのに、2番目の座布団が右端に寄っているなど、整列がしっかりされていないと画面に落ち着きがなくなります。
              左揃え・中央揃えといった基準を厳格に守ることで、画面全体に安定感が生まれます。
            </p>
          </TipBox>
        </Body>

        {/* ─── Tip 2: 強弱 ─── */}
        <TipHeading num={2} icon="🎯" title="強弱" label="視線をコントロールしてメリハリをつける" />
        <Body>
          <ImagePlaceholder label="一部の文字だけが大きく、色が変わっている強調テロップの例" />
          <p>
            次に、視聴者の視線をコントロールする「強弱」の付け方です。
            強弱とは、情報に優先度をつけて違いを明確にし、画面にメリハリをつけることを指します。
          </p>

          {/* テロップの強弱イメージ */}
          <div
            className="rounded-xl p-5 my-2 flex flex-col gap-3"
            style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">テロップの強弱 — 比較</p>
            {/* 均一（NG） */}
            <div>
              <p className="text-[9px] text-red-400 mb-1.5">❌ 均一（強弱なし）</p>
              <p className="text-sm text-white/70">視聴離脱を防ぐためのデザインとは何か</p>
            </div>
            {/* 強弱あり（OK） */}
            <div>
              <p className="text-[9px] text-green-400 mb-1.5">✅ 強弱あり</p>
              <p className="text-sm text-white/70">
                <span className="text-xl font-black text-yellow-300">視聴離脱</span>
                を防ぐためのデザインとは何か
              </p>
            </div>
          </div>

          <p>
            重要なメッセージをただ均一な文字で表示するのではなく、一番伝えたい部分だけ文字を大きくして視認性を高めます。
            さらに強調したい場合は、その一部の文字の色を変更するのも有効な手段です。
          </p>

          <TipBox>
            <p className="font-bold text-gray-700 mb-1">テレビのテロップを観察してみる</p>
            <p>
              普段テレビ番組のテロップなどを観察していると、「1部分のみの文字を大きくする」「色を変える」といった強弱の演出が当たり前のように行われていることに気づきます。
              文字のサイズや色を変えることで視聴者はすぐに重要な部分を理解できるため、動画の離脱を防ぐための必須のワークフローと言えます。
            </p>
          </TipBox>
        </Body>

        {/* ─── Tip 3: 余白 ─── */}
        <TipHeading num={3} icon="⬜" title="余白" label="引き算の設計が垢抜けを生む" />
        <Body>
          <ImagePlaceholder label="セーフマージンを表示した作業画面と、UI領域を避けたレイアウト" />
          <p>
            そして最後に、個人的に最も重要視しているのが「余白」のコントロールです。
            デザイン業界では「余白で全て決まる」と言われるほど重要な要素ですが、これは動画編集においても全く同じです。
          </p>

          {/* セーフマージンのイメージ */}
          <div
            className="rounded-xl overflow-hidden my-2"
            style={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="p-4 relative aspect-video flex items-center justify-center">
              {/* 外枠（セーフマージン） */}
              <div
                className="absolute"
                style={{
                  inset: "10%",
                  border: "1.5px dashed rgba(250,204,21,0.6)",
                  borderRadius: "4px",
                }}
              />
              {/* NG例 — はみ出し */}
              <div
                className="absolute left-1 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-[9px] font-bold text-white"
                style={{ background: "rgba(239,68,68,0.8)" }}
              >
                ❌ 端ギリギリ
              </div>
              {/* OK例 — 内側 */}
              <div
                className="rounded px-3 py-1.5 text-[10px] font-bold text-white"
                style={{ background: "rgba(34,197,94,0.8)" }}
              >
                ✅ セーフマージン内
              </div>
              {/* ラベル */}
              <p
                className="absolute bottom-2 right-3 text-[9px] font-bold"
                style={{ color: "rgba(250,204,21,0.7)" }}
              >
                セーフマージン
              </p>
            </div>
          </div>

          <p>
            初心者のデータで非常に多いのが、画面の端と文字などの要素が極端に近すぎるケースです。
            視聴者にストレスを与えないためには、必ず「セーフマージン」のガイドラインを活用し、重要な情報が見切れないように余白を確保しなければなりません。
          </p>

          <TipBox>
            <p className="font-bold text-gray-700 mb-1">Premiere Pro での確認方法</p>
            <p>
              Premiere Pro であれば設定からセーフマージンを表示できるため、常にこのラインから出ないように運用します。
              テレビ・スマホ・タブレットなどデバイスによって画面の表示は微妙に変わるため、どんな環境でも全視聴者が見やすい状態を作るには不可欠です。
            </p>
          </TipBox>

          {/* ショート動画の注意点 */}
          <div
            className="rounded-2xl overflow-hidden my-2"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
              border: "1px solid rgba(236,72,153,0.12)",
            }}
          >
            <div className="flex">
              {/* ショート動画イメージ */}
              <div
                className="w-24 flex-shrink-0 relative flex items-center justify-center"
                style={{ background: "#0f172a" }}
              >
                {/* 右側UIアイコン */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  {["❤️","💬","↗️"].map((icon, i) => (
                    <div key={i} className="text-[10px] opacity-60">{icon}</div>
                  ))}
                </div>
                {/* テキスト被りNG */}
                <p className="text-[7px] text-red-400 font-bold absolute left-1 top-8">テキスト被り ❌</p>
              </div>
              <div className="p-4 flex-1">
                <p className="text-[10px] font-bold text-pink-400 mb-2 tracking-wider">📱 ショート動画の注意点</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  TikTok・Instagram のショート動画では、画面右側に「高評価」「コメント」のUIアイコンが配置されます。
                  この右側部分に文字やイラストが被らないように余白を設計することが必須です。
                </p>
              </div>
            </div>
          </div>

          <p>
            横長の YouTube 動画であっても、強調用の背景色とテロップの距離感が近すぎると窮屈に見えてしまいます。
            たくさんの要素を入れたい気持ちをぐっと我慢して意図的に余白を使うことが、垢抜けた見やすいデザインを作るコツです。
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
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            これからの時代、単純に字幕を入れたりカットを繋いだりするだけの作業は、間違いなく AI に取って代わられていく領域です。
            だからこそ、「近接・整列」「強弱」「余白」といったデザインの原則を活用し、視聴者が本当に見やすい動画を設計・提供できるスキルが、編集者やディレクターの価値を決めることになります。
          </p>
          {/* 3点チェックリスト */}
          <div className="space-y-2 mb-4">
            {[
              "情報は距離感を揃えてグループ化できているか",
              "重要な一語だけサイズ・色で強調しているか",
              "セーフマージン内に全ての要素が収まっているか",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                  style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
          <div
            className="rounded-xl p-4 text-sm text-gray-700 font-semibold leading-relaxed"
            style={{ background: "rgba(236,72,153,0.06)" }}
          >
            小手先の技術より先に、基本のレイアウトルールが守られているか。毎回のプロジェクトで検証と修正を繰り返すことが、いちばん早い上達の道です。
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

/* ─── 共通コンポーネント ─── */

function TipHeading({ num, icon, title, label }: { num: number; icon: string; title: string; label: string }) {
  return (
    <div
      className="flex items-center gap-4 mt-12 mb-6 rounded-2xl px-5 py-4"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
        border: "1px solid rgba(236,72,153,0.12)",
      }}
    >
      <span
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black text-white"
        style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
      >
        {num}
      </span>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <h2 className="text-base font-black text-gray-800">{title}</h2>
        </div>
        <p className="text-[11px] text-gray-400 mt-0.5">{label}</p>
      </div>
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

function CompareBox({ type, label, children }: { type: "ng" | "ok"; label: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: type === "ng" ? "rgba(254,242,242,0.8)" : "rgba(240,253,244,0.8)",
        border: `1px solid ${type === "ng" ? "rgba(239,68,68,0.15)" : "rgba(34,197,94,0.15)"}`,
      }}
    >
      <p className={`text-[10px] font-bold mb-3 ${type === "ng" ? "text-red-400" : "text-green-500"}`}>{label}</p>
      {children}
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
