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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
