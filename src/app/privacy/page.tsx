export const metadata = {
  title: "プライバシーポリシー | ラクポチ イラスト",
  description: "ラクポチ イラストのプライバシーポリシーページです。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* ヘッダー */}
      <header className="bg-white/90 border-b border-gray-100">
        <div className="max-w-screen-md mx-auto px-6 h-14 flex items-center">
          <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <circle cx="11" cy="11" r="2" fill="currentColor" stroke="none"/>
              </svg>
            </div>
            <span className="text-sm font-black text-gray-800 tracking-tight">ラクポチ イラスト</span>
          </a>
        </div>
      </header>

      {/* コンテンツ */}
      <main className="max-w-screen-md mx-auto px-6 py-12">
        <h1 className="text-2xl font-black text-gray-800 mb-2">プライバシーポリシー</h1>
        <p className="text-xs text-gray-400 mb-10">最終更新日: 2026年6月1日</p>

        <div className="space-y-10 text-sm text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">1. はじめに</h2>
            <p>ラクポチ イラスト（以下「当サイト」）は、フリーイラスト素材を横断検索できるサービスです。当サイトをご利用いただくにあたり、以下のプライバシーポリシーをご確認ください。</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">2. 収集する情報</h2>
            <p>当サイトでは、以下の情報を収集する場合があります。</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>検索キーワード（サービス改善のため）</li>
              <li>アクセスログ（IPアドレス、ブラウザ情報、参照元URLなど）</li>
              <li>Cookie（サイト設定の保存のため）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">3. Cookieについて</h2>
            <p>当サイトでは、検索対象サイトの設定を保存するためにブラウザのlocalStorageを使用しています。これはお客様のデバイスに保存されるものであり、当サイトのサーバーには送信されません。</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">4. 広告について</h2>
            <p>当サイトでは、Google AdSenseを利用して広告を掲載する場合があります。Google AdSenseはCookieを使用して、ユーザーの興味に基づいた広告を表示します。Googleによる広告のCookie使用については、<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Googleのポリシー</a>をご確認ください。</p>
            <p className="mt-2">ユーザーは<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Googleの広告設定</a>からパーソナライズ広告を無効にすることができます。</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">5. アクセス解析について</h2>
            <p>当サイトでは、サービス改善のためにアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用してアクセス情報を収集しますが、個人を特定する情報は収集しません。</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">6. 第三者へのリンクについて</h2>
            <p>当サイトの検索結果には、外部のイラスト素材サイトへのリンクが含まれます。リンク先のサイトのプライバシーポリシーについては、各サイトの規約をご確認ください。当サイトはリンク先の内容について責任を負いません。</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">7. プライバシーポリシーの変更</h2>
            <p>当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点で効力を持ちます。</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-800 mb-3">8. お問い合わせ</h2>
            <p>プライバシーポリシーに関するお問い合わせは、サイト運営者までご連絡ください。</p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <a href="/" className="text-sm text-pink-500 hover:text-pink-600 font-medium transition-colors">
            ← トップページに戻る
          </a>
        </div>
      </main>
    </div>
  );
}
