import { IllustItem, IllustSite } from "@/types";

export const SITES: IllustSite[] = [
  // 日本語系
  {
    id: "irasutoya", name: "いらすとや", url: "https://www.irasutoya.com",
    description: "日本最大級のフリーイラスト素材サイト。ゆるくてかわいいタッチのイラストが豊富。",
    tags: ["かわいい", "ゆるい", "日常"], enabled: true,
  },
  {
    id: "sokosuto", name: "ソコスト", url: "https://soco-st.com",
    description: "シンプルでおしゃれなフラットデザインのイラスト素材。商用利用も無料。",
    tags: ["フラット", "シンプル", "商用可"], enabled: true,
  },
  {
    id: "linustock", name: "Linustock", url: "https://www.linustock.com",
    description: "線画スタイルのスタイリッシュなイラスト素材。モノクロ〜カラーまで揃う。",
    tags: ["線画", "スタイリッシュ", "モノクロ"], enabled: true,
  },
  {
    id: "illust_ac", name: "イラストAC", url: "https://www.ac-illust.com",
    description: "クリエイターが投稿する膨大な量のフリーイラスト。多様なジャンルに対応。",
    tags: ["多ジャンル", "投稿系", "大容量"], enabled: true,
  },
  {
    id: "loosedrawing", name: "loosedrawing", url: "https://loosedrawing.com",
    description: "手書き風のナチュラルなタッチが特徴。日常・ビジネスシーンに使いやすい。",
    tags: ["手書き", "ナチュラル", "ビジネス"], enabled: true,
  },
  {
    id: "icooon", name: "ICOOON MONO", url: "https://icooon-mono.com",
    description: "モノクロのシンプルなアイコン素材が揃う定番サイト。SVGダウンロード対応。",
    tags: ["アイコン", "モノクロ", "SVG"], enabled: true,
  },
  {
    id: "girlysozai", name: "ガーリー素材", url: "https://girlysozai.com",
    description: "ガーリーでかわいいデザインの素材が豊富。パターンや飾り罫も充実。",
    tags: ["ガーリー", "かわいい", "デコ"], enabled: true,
  },
  {
    id: "illustman", name: "イラストマン", url: "https://illustman.net",
    description: "ビジネス・医療・教育など幅広いシーンのイラストを無料で配布。",
    tags: ["ビジネス", "医療", "教育"], enabled: true,
  },
  {
    id: "illustnavi", name: "イラストナビ", url: "https://illust-navi.com",
    description: "かわいいキャラクターや季節行事のイラストが揃うフリー素材サイト。",
    tags: ["キャラクター", "季節", "行事"], enabled: true,
  },
  {
    id: "fujikana", name: "フジカナイラスト", url: "https://fujikanaillust.com",
    description: "ほっこり温かみのあるタッチの手書きイラスト素材。日常・家族シーンが豊富。",
    tags: ["手書き", "ほっこり", "家族"], enabled: true,
  },
  {
    id: "suisai", name: "水彩素材", url: "https://sui-sai.jp",
    description: "水彩画風のやわらかいタッチのイラスト素材。自然・花・動物が充実。",
    tags: ["水彩", "やわらか", "自然"], enabled: true,
  },
  {
    id: "sozaino", name: "素材ノ", url: "https://sozaino.site",
    description: "おしゃれでシンプルなフリー素材サイト。フレームやテクスチャも豊富。",
    tags: ["おしゃれ", "フレーム", "テクスチャ"], enabled: true,
  },
  {
    id: "shigureni", name: "しぐれに", url: "https://shigureni.com",
    description: "ゆるくかわいい女の子のイラストが特徴的。SNS利用にも最適。",
    tags: ["女の子", "ゆるかわ", "SNS"], enabled: true,
  },
  {
    id: "kyuncuts", name: "キュンカッツ", url: "https://kyuncuts.com",
    description: "キュートでポップなイラスト素材。明るい色使いで視線を引く素材が揃う。",
    tags: ["ポップ", "キュート", "カラフル"], enabled: true,
  },
  {
    id: "irasuton", name: "いらすとん", url: "http://www.irasuton.com",
    description: "シンプルでかわいいフリーイラスト素材。ビジネス・日常の幅広いシーンに対応。",
    tags: ["シンプル", "かわいい", "ビジネス"], enabled: true,
  },
  {
    id: "jitanda", name: "じたんだ", url: "https://jitanda.com",
    description: "ゆるくてリアルな人物イラストが特徴。感情表現豊かなキャラが揃う。",
    tags: ["人物", "ゆるい", "感情"], enabled: true,
  },
  {
    id: "tyoudoii", name: "ちょうどいいイラスト", url: "https://tyoudoii-illust.com",
    description: "「ちょうどいい」使いやすさのイラスト素材。クセが少なくどんな場面にも馴染む。",
    tags: ["使いやすい", "汎用", "シンプル"], enabled: true,
  },
  // 海外系
  {
    id: "undraw", name: "unDraw", url: "https://undraw.co",
    description: "カラーカスタマイズ可能なフラットイラスト。テクノロジー・ビジネス系が充実。",
    tags: ["フラット", "海外", "カスタマイズ"], enabled: true,
  },
  {
    id: "storyset", name: "Storyset", url: "https://storyset.com",
    description: "アニメーション対応のイラスト素材。スタイル違いで同テーマの素材が揃う。",
    tags: ["アニメーション", "海外", "多スタイル"], enabled: true,
  },
  {
    id: "manypixels", name: "ManyPixels", url: "https://www.manypixels.co",
    description: "モダンでトレンド感のあるイラスト素材。SVG形式でダウンロード可能。",
    tags: ["モダン", "海外", "SVG"], enabled: true,
  },
  {
    id: "vectorshelf", name: "VectorShelf", url: "https://vectorshelf.com",
    description: "高品質なベクターイラスト素材。商用利用可で多彩なジャンルに対応。",
    tags: ["ベクター", "高品質", "商用可"], enabled: true,
  },
];

const seeds = [42,17,93,55,28,71,36,84,12,67,49,23,88,5,60,34,79,14,56,91,
               38,72,19,63,47,82,9,54,27,70,43,86,21,65,30,75,8,52,96,31];

export const DUMMY_ITEMS: IllustItem[] = SITES.flatMap((site, si) =>
  Array.from({ length: 3 }, (_, i) => {
    const seed = seeds[(si * 3 + i) % seeds.length];
    const heights = [300, 420, 260, 480, 350, 310, 460, 280, 400, 380];
    const h = heights[(si * 3 + i) % heights.length];
    return {
      id: `${site.id}-${i + 1}`,
      title: `${site.name}のイラスト素材 ${i + 1}`,
      imageUrl: `https://picsum.photos/seed/${seed}/400/${h}`,
      sourceUrl: site.url,
      siteId: site.id,
      siteName: site.name,
      tags: site.tags,
    };
  })
);
