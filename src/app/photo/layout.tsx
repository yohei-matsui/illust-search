/**
 * /photo 以下は水色テーマ。
 * .theme-sky が --brand-* を上書きし、配下の共通コンポーネントが追従する。
 * body の色はテーマクラスの外側なので、ここで併せて上書きしておく
 * （オーバースクロール時にピンクが覗くのを防ぐ）。
 */
export default function PhotoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`html, body { background-color: #f0f9ff; }`}</style>
      <div className="theme-sky">{children}</div>
    </>
  );
}
