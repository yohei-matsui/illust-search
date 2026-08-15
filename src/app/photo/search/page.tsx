import SearchApp, { SearchAppConfig } from "@/components/SearchApp";
import { PHOTO_SITES, PHOTO_OVERSEAS_IDS, PHOTO_PAID_IDS } from "@/data/photoData";

export const metadata = {
  title: "フリー画像・映像 横断検索 | ラクポチ",
  description: "写真AC・ぱくたそ・Unsplash・Pexelsなど、写真と動画の素材サイトをまとめて横断検索できるサービス",
  robots: { index: false, follow: false },
};

const CONFIG: SearchAppConfig = {
  navKey: "photo",
  sites: PHOTO_SITES,
  apiPath: "/api/photo-search",
  storageKey: "rakupochi_enabled_photo_sites",
  hero: {
    eyebrow: "Free Photo & Video Search by RAKUPOCHI",
    title: "フリー画像・映像をまとめて探す",
    brand: "ラクポチ フォト",
    description:
      "写真AC・ぱくたそ・Unsplash・Pexels など人気サイトを横断して検索！\n写真も動画も、欲しい素材がきっと見つかります！",
    placeholder: "キーワードを入力（例：ビジネス、風景、料理）",
    keywords: ["ビジネス", "風景", "料理", "人物"],
  },
  groups: [
    { label: "海外・無料サイト", ids: PHOTO_OVERSEAS_IDS },
    { label: "有料ストック", ids: PHOTO_PAID_IDS },
  ],
  howToTitle: "画像・映像 横断検索の使い方",
  howTo: [
    { step: "1", title: "キーワードを入力", desc: "検索バーに「ビジネス」「風景」「料理」など探している素材のキーワードを入力します。" },
    { step: "2", title: "サイトを選ぶ", desc: "左のサイドバーで検索対象のサイトをON/OFFできます。無料だけに絞る、有料ストックも含める、といった使い分けが可能です。" },
    { step: "3", title: "画像をクリック", desc: "気に入った素材をクリックすると、配布元のサイトが新しいタブで開きます。利用規約は各サイトで必ず確認してください。" },
  ],
};

export default function PhotoSearchPage() {
  return <SearchApp config={CONFIG} />;
}
