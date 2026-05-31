export type IllustSite = {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  enabled: boolean;
};

export type IllustItem = {
  id: string;
  title: string;
  imageUrl: string;
  sourceUrl: string;
  siteId: string;
  siteName: string;
  tags: string[];
};
