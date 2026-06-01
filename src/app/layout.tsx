import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "フリーイラストをまとめて探す｜ラクポチ イラスト",
  description: "いらすとや・ソコスト・Linustockなど複数のフリーイラストサイトを横断検索できるサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1890897512125264"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
