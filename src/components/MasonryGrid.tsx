"use client";

import Masonry from "react-masonry-css";
import { IllustItem } from "@/types";
import IllustCard from "./IllustCard";

type Props = {
  items: IllustItem[];
  isLoading?: boolean;
};

const breakpointColumns = {
  default: 4,
  1280: 4,
  1024: 3,
  768: 2,
  480: 2,
};

export default function MasonryGrid({ items, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <span className="inline-block w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mb-5" />
        <p className="text-gray-400 text-sm font-medium">検索中...</p>
        <p className="text-gray-300 text-xs mt-1">複数サイトを横断して探しています</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <span className="text-5xl mb-4">🔍</span>
        <p className="text-gray-400 text-sm">
          条件に一致するイラストが見つかりませんでした
        </p>
        <p className="text-gray-300 text-xs mt-1">
          キーワードや対象サイトを変えてみてください
        </p>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex w-full gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {items.map((item) => (
        <IllustCard key={item.id} item={item} />
      ))}
    </Masonry>
  );
}
