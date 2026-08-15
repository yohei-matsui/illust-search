import { IllustSite } from "@/types";

/** 画像・映像素材サイト（写真／動画） */
export const PHOTO_SITES: IllustSite[] = [
  // ── 日本語・無料系 ──
  {
    id: "photo_ac", name: "写真AC", url: "https://www.photo-ac.com",
    description: "日本最大級の無料写真素材サイト。会員登録すれば商用利用も無料。日本人モデル・日本の風景が豊富。",
    tags: ["日本語", "大容量", "商用可"], enabled: true,
  },
  {
    id: "video_ac", name: "動画AC", url: "https://video-ac.com",
    description: "写真ACの動画版。日本語で探せる無料の動画素材。背景ループやトランジション素材も揃う。",
    tags: ["動画", "日本語", "商用可"], enabled: true,
  },
  {
    id: "pakutaso", name: "ぱくたそ", url: "https://www.pakutaso.com",
    description: "日本の定番フリー写真素材。人物・ビジネスからネタ系まで幅広く、登録不要で使える。",
    tags: ["人物", "定番", "登録不要"], enabled: true,
  },
  {
    id: "photock", name: "フォトック", url: "https://www.photock.jp",
    description: "登録不要で使える無料写真素材。風景・自然・街並みが中心でクセが少ない。",
    tags: ["風景", "自然", "登録不要"], enabled: true,
  },
  {
    id: "girlydrop", name: "GIRLY DROP", url: "https://girlydrop.com",
    description: "女子目線のおしゃれな写真素材。カフェ・雑貨・コスメなど「かわいい」シーンに強い。",
    tags: ["おしゃれ", "カフェ", "女子"], enabled: true,
  },
  {
    id: "busitry", name: "busitry-photo", url: "https://busitry-photo.info",
    description: "ビジネスシーンに特化した無料写真素材。オフィス・会議・PC作業などの定番カットが揃う。",
    tags: ["ビジネス", "オフィス", "特化型"], enabled: true,
  },
  {
    id: "model_foto", name: "model.foto", url: "https://model.foto.ne.jp",
    description: "人物モデルの写真素材に特化。ポートレート・表情バリエーションが充実。",
    tags: ["人物", "ポートレート", "特化型"], enabled: true,
  },
  {
    id: "food_foto", name: "food.foto", url: "https://food.foto.ne.jp",
    description: "料理・食材の写真素材専門。和食や日本の食卓シーンも揃う。",
    tags: ["料理", "食材", "特化型"], enabled: true,
  },
  {
    id: "find47", name: "FIND/47", url: "https://find47.jp",
    description: "日本各地の風景写真を都道府県別に高解像度で公開。ご当地・観光ビジュアルに。",
    tags: ["風景", "日本", "高解像度"], enabled: true,
  },
  {
    id: "skyseeker", name: "Skyseeker", url: "https://skyseeker.net",
    description: "空と雲の写真に特化したフリー素材。背景・合成用の空素材を探すならここ。",
    tags: ["空", "背景", "特化型"], enabled: true,
  },

  // ── 海外・無料系 ──
  {
    id: "unsplash", name: "Unsplash", url: "https://unsplash.com",
    description: "高品質でアーティスティックな写真が揃う定番。クレジット表記不要でおしゃれな雰囲気重視なら第一候補。",
    tags: ["高品質", "おしゃれ", "クレジット不要"], enabled: true,
  },
  {
    id: "pexels", name: "Pexels", url: "https://www.pexels.com",
    description: "写真と動画の両方が無料で使える大手。クレジット表記不要で商用利用も可能。",
    tags: ["写真", "動画", "クレジット不要"], enabled: true,
  },
  {
    id: "pixabay", name: "pixabay", url: "https://pixabay.com",
    description: "写真・イラスト・動画・音楽まで揃う総合素材サイト。クレジット表記不要。",
    tags: ["総合", "動画", "クレジット不要"], enabled: true,
  },
  {
    id: "freepik", name: "Freepik", url: "https://www.freepik.com",
    description: "写真・イラスト・動画・PSDまで揃う大手。無料プランはクレジット表記が必要。",
    tags: ["総合", "PSD", "要クレジット"], enabled: true,
  },
  {
    id: "kaboompics", name: "Kaboompics", url: "https://kaboompics.com",
    description: "高品質なライフスタイル写真。各画像にカラーパレットが付き、配色の参考にもなる。",
    tags: ["ライフスタイル", "配色", "高品質"], enabled: true,
  },
  {
    id: "burst", name: "BURST", url: "https://www.shopify.com/stock-photos",
    description: "Shopify運営の無料写真素材。EC・物販向けの商品カットやビジネス系が充実。",
    tags: ["EC", "ビジネス", "商用可"], enabled: true,
  },
  {
    id: "foodiesfeed", name: "Foodiesfeed", url: "https://www.foodiesfeed.com",
    description: "食べ物専門の高品質フリー写真。海外系の料理・カフェシーンに強い。",
    tags: ["料理", "カフェ", "特化型"], enabled: true,
  },

  // ── 有料ストック ──
  {
    id: "pixta", name: "PIXTA", url: "https://pixta.jp",
    description: "日本最大級の有料ストック。日本人モデル・日本の風景・ビジネスシーンの質と量で他を圧倒。",
    tags: ["有料", "日本人", "高品質"], enabled: true,
  },
  {
    id: "adobestock", name: "Adobe Stock", url: "https://stock.adobe.com",
    description: "Adobe公式の有料ストック。Photoshop・Premiere Proから直接検索・配置できる連携が強み。",
    tags: ["有料", "Adobe連携", "動画"], enabled: true,
  },
  {
    id: "istock", name: "iStock", url: "https://www.istockphoto.com",
    description: "Getty Images運営の有料ストック。写真・イラスト・動画まで網羅し、独占素材も多い。",
    tags: ["有料", "動画", "独占素材"], enabled: true,
  },
];

/** 海外サイトのID（表示グルーピング用） */
export const PHOTO_OVERSEAS_IDS = new Set([
  "unsplash", "pexels", "pixabay", "freepik",
  "kaboompics", "burst", "foodiesfeed",
]);

/** 有料ストックのID（表示グルーピング用） */
export const PHOTO_PAID_IDS = new Set(["pixta", "adobestock", "istock"]);
