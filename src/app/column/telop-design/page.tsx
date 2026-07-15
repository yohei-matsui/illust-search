import Link from "next/link";

export const metadata = {
  title: "【絶対NG】ダサくなるテロップの特徴｜テロップルールの基本 | デザインコラム | ラクポチ イラスト",
  description:
    "テロップデザインの落とし穴5つを解説。マイター結合・配色・視認性・字間・改行位置——実務で使える改善ロジックをまとめました。",
};

const CHECKS = [
  "マイター結合のまま放置している（角張った文字）",
  "相性の悪い色（色相の近い色）を組み合わせている",
  "背景や演者に依存した視認性の低さ",
  "字間（トラッキング）が調整されておらず可読性が低い",
  "文字数だけを基準にした無意味な改行",
];

export default function TelopDesignPage() {
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
          <span className="text-gray-500">ダサくなるテロップの特徴</span>
        </div>
      </div>

      {/* 記事本体 */}
      <main className="max-w-screen-md mx-auto w-full px-4 sm:px-6 py-8 flex-1">
        {/* 記事ヘッダーカード */}
        <div
          className="rounded-3xl overflow-hidden mb-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,245,250,0.6) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 4px 32px rgba(236,72,153,0.08)",
          }}
        >
          {/* サムネイルバナー */}
          <div
            className="w-full h-48 flex flex-col items-center justify-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,30,40,0.92) 0%, rgba(60,20,60,0.88) 100%)",
            }}
          >
            <span className="text-5xl">🎬</span>
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "rgba(249,168,212,0.8)" }}
            >
              Telop Design
            </span>
          </div>

          <div className="px-8 py-7">
            {/* カテゴリ + 日付 */}
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-500">
                実践
              </span>
              <span className="text-[11px] text-gray-500">2025-06-26</span>
              <span className="ml-auto text-[11px] text-gray-500">約 8 min</span>
            </div>

            {/* タイトル */}
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight mb-4">
              【絶対NG】ダサくなるテロップの特徴<br />
              <span className="text-lg">｜テロップルールの基本</span>
            </h1>

            {/* リード文 */}
            <p className="text-sm text-gray-500 leading-relaxed">
              動画編集の実務において、どれだけカットや演出にこだわっても、テロップのデザイン1つで動画全体が台無しになることは多々あります。
              「この編集者、初心者だな」とクライアントや視聴者に直感的にバレてしまう最大の要因は、多くの場合テロップデザインにあります。
            </p>
          </div>
        </div>

        {/* 導入文 */}
        <ArticleSection>
          <p className="text-sm text-gray-600 leading-relaxed">
            「なんかダサい」の正体は、ほぼ5つのどれかです。チェックして直せば即効性があります。
          </p>
        </ArticleSection>

        {/* チェックリスト */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(236,72,153,0.15)",
            boxShadow: "0 2px 16px rgba(236,72,153,0.06)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-4">
            この記事で学べること
          </p>
          <ul className="space-y-2.5">
            {CHECKS.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}>
                  {i + 1}
                </span>
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── セクション 1 ─── */}
        <SectionHeading number={1} title="マイター結合のまま放置している（角張った文字）" />
        <ArticleSection>
          <p>
            テロップがダサく見える原因の1つ目は、文字の境界線が「マイター結合」になっていることです。
          </p>
          <ImagePlaceholder label="マイター結合とラウンド結合の比較画像" />
          <p>
            マイター結合のままだと、文字の先端が鋭く角張ってしまい、洗練されていない印象を与えます。
            これを「ラウンド結合」に変更するだけで、文字の先端が丸くなり、一気に視認性が向上して見やすいテキストになります。
          </p>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1.5">Premiere Pro での修正手順</p>
            <p>
              アピアランスのグラフィックプロパティを開き、結合の設定を
              <Kbd>マイター結合</Kbd>から<Kbd>ラウンド結合</Kbd>に変更します。
            </p>
          </TipBox>
          <p>
            また、毎回設定する手間を省くためにデフォルト設定自体を変更しておくことを推奨します。
            Premiere Pro の左上にある設定から「グラフィック」を選択し、「ストロークラインの結合」を「ラウンド結合」に変更します。
            これにより、新規作成時も常に文字の縁が丸く出力されるようになります。
          </p>
        </ArticleSection>

        {/* ─── セクション 2 ─── */}
        <SectionHeading number={2} title="相性の悪い色（色相の近い色）を組み合わせている" />
        <ArticleSection>
          <p>
            2つ目の特徴は、配色のロジックを無視して相性の悪い色を使ってしまうことです。
          </p>
          <ImagePlaceholder label="黄色テロップ×黄緑境界線と、黄色×紫の比較画像" />
          <p>
            例えば、黄色のテロップに対して黄緑の境界線を設定した場合、色合いが近い2色であるため、境界がぼやけて非常に見づらい文字になってしまいます。
          </p>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1.5">補色を使う</p>
            <p>
              「色相環」における向かい合った色＝<strong className="text-pink-500">補色</strong>を活用します。
              黄色をメインに使うなら補色の<strong className="text-pink-500">紫</strong>を組み合わせることで文字が際立ちます。
              色相環での距離が近すぎる色同士の組み合わせを避けるだけで、配色の失敗は防げます。
            </p>
          </TipBox>
        </ArticleSection>

        {/* ─── セクション 3 ─── */}
        <SectionHeading number={3} title="背景や演者に依存した視認性の低さ" />
        <ArticleSection>
          <p>
            「視認性」とは、目で見た時に瞬間的に正しい情報を認識できるかどうかの指標です。
          </p>
          <ImagePlaceholder label="背景なしの白文字と、背景ありの白文字の比較画像" />
          <p>
            動画編集においては、演者の服装や撮影背景を編集者側で指定することは基本的に不可能です。
            そのため、単なる白文字などを配置しただけでは、背景の色と被って文字が消えてしまうリスクがあります。
          </p>
          <p>
            どのような服装・背景であっても全視聴者が確実に読めるテロップを作るためには、
            テキストの背景（座布団）をうまく使ったり、境界線を適切に設定したりする工夫が必須です。
          </p>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1.5">明度コントラストのルール</p>
            <p>
              明度の高い色（赤・黄色・白など）と明度の低い色（黒・青など）を組み合わせることで、
              背景に左右されない<strong className="text-pink-500">堅牢なテロップ設計</strong>が可能になります。
            </p>
          </TipBox>
        </ArticleSection>

        {/* ─── セクション 4 ─── */}
        <SectionHeading number={4} title="字間（トラッキング）が調整されておらず可読性が低い" />
        <ArticleSection>
          <p>
            動画における「可読性」とは、テロップや字幕がいかにスムーズに読めるかを示す指標です。
          </p>
          <ImagePlaceholder label="字間が広いテロップと、適切に詰めたテロップの比較画像" />
          <p>
            文字と文字の距離（字間）が遠すぎると、パッと画面を見た時に視線が散り、読みづらさを感じさせてしまいます。
            テキストの距離感を少し近づけることで、文字全体が1つのブロックとしてまとまって見えるようになります。
          </p>
          <TipBox>
            <p className="font-bold text-gray-700 mb-1.5">Premiere Pro での設定</p>
            <p>
              プロパティパネルにある「<Kbd>トラッキング</Kbd>」の数値を変更します。
              基本的には字間を詰めることで可読性は上がりますが、あえて広く開けることで落ち着いた雰囲気を演出する手法もあります。
              動画のシーンや目的に合わせて、意図的に数値をコントロールすることが重要です。
            </p>
          </TipBox>
        </ArticleSection>

        {/* ─── セクション 5 ─── */}
        <SectionHeading number={5} title="文字数だけを基準にした無意味な改行" />
        <ArticleSection>
          <p>
            最後は「改行位置」の選定です。
            動画の字幕が非常に読みづらいと感じる場合、大抵はこの改行位置がおかしいことが原因です。
          </p>
          <ImagePlaceholder label="単なる文字数での改行と、意味のまとまりでの改行の比較画像" />
          <p>
            駆け出しの編集者に多いのが、「文字数が増えて画面端に近づいたから改行する」という、レイアウト都合だけの無自覚な改行です。
            正しい改行位置とは、常に<strong className="text-pink-500">「意味のまとまり」で区切られた位置</strong>を指します。
          </p>
          <p>
            改行位置への配慮が欠けていると、動画全体のテンポが阻害されます。
            もし動画の再生回数や維持率が低かった場合、ディレクターやクライアントから「編集のクオリティが低い」と評価される要因になり得ます。
          </p>
          <p>
            チャンネルの仕様によって1行表示か2行表示かは異なりますが、どちらにせよクライアントの動画の成果を最大化するためには、この改行位置のロジックにまでこだわって実務を行う必要があります。
          </p>
        </ArticleSection>

        {/* まとめ */}
        <div
          className="rounded-2xl p-7 mt-4 mb-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,240,250,0.6) 100%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 20px rgba(236,72,153,0.07)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-pink-400 mb-3">
            まとめ
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            今回は、ダサいテロップの原因となる5つの特徴と改善策をまとめました。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            単純なカットやテロップ挿入といった作業は、今後 AI によって自動化されていく領域です。
            だからこそ、「視認性」や「可読性」を担保するデザインのルールを適用し、視聴者にとって真に見やすい動画を設計するスキルが、今後の動画編集者やディレクターの価値を決めることになります。
          </p>
          <div
            className="rounded-xl p-4 text-sm text-gray-700 font-semibold leading-relaxed"
            style={{ background: "rgba(236,72,153,0.06)" }}
          >
            まずはご自身のプロジェクトファイルを開き、現在のテロップ設定がこれらのルールから外れていないか、確認と修正を行ってみてください。
          </div>
        </div>

        {/* コラム一覧へ戻る */}
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

function SectionHeading({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-start gap-3 mt-10 mb-5">
      <span
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white"
        style={{ background: "linear-gradient(135deg, rgba(249,168,212,1) 0%, rgba(236,72,153,1) 100%)" }}
      >
        {number}
      </span>
      <h2 className="text-base sm:text-lg font-black text-gray-800 leading-snug pt-0.5">
        {title}
      </h2>
    </div>
  );
}

function ArticleSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
      {children}
    </div>
  );
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

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block mx-0.5 px-1.5 py-0.5 rounded text-[11px] font-bold text-gray-600"
      style={{ background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.1)" }}
    >
      {children}
    </span>
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
