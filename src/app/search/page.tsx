import HomeClient from "../HomeClient";

export const metadata = {
  title: "フリーイラスト横断検索 | ラクポチ イラスト",
  description: "いらすとや・ソコスト・Linustockなど複数のフリーイラストサイトを横断検索できるサービス",
  robots: { index: false, follow: false },
};

export default function SearchPage() {
  return <HomeClient />;
}
