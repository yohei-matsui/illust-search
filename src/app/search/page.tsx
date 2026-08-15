import SearchApp, { SearchAppConfig } from "@/components/SearchApp";
import { SITES } from "@/data/dummyData";

export const metadata = {
  title: "フリーイラスト横断検索 | ラクポチ",
  description: "いらすとや・ソコスト・Linustockなど複数のフリーイラストサイトを横断検索できるサービス",
  robots: { index: false, follow: false },
};

const CONFIG: SearchAppConfig = {
  navKey: "illust",
  sites: SITES,
  apiPath: "/api/search",
  storageKey: "rakupochi_enabled_sites",
  hero: {
    eyebrow: "Free Illustration Search by RAKUPOCHI",
    title: "フリーイラストをまとめて探す",
    brand: "ラクポチ イラスト",
    description:
      "いらすとや・ソコスト・Linustock など人気サイトを横断して検索！\n欲しい素材がきっと見つかります！",
    placeholder: "キーワードを入力（例：ビジネス、家族、春）",
    keywords: ["ビジネス", "家族", "季節", "アイコン"],
  },
  howToTitle: "イラスト横断検索の使い方",
  howTo: [
    { step: "1", title: "キーワードを入力", desc: "検索バーに「ビジネス」「猫」「季節」など探したいイラストのキーワードを入力します。" },
    { step: "2", title: "サイトを選ぶ", desc: "左のサイドバーで検索対象のサイトをON/OFFできます。設定は次回訪問時にも保持されます。" },
    { step: "3", title: "画像をクリック", desc: "気に入ったイラストをクリックすると、素材配布元のサイトが新しいタブで開きます。" },
  ],
};

export default function SearchPage() {
  return <SearchApp config={CONFIG} />;
}
