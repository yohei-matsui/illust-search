"use client";

import { IllustItem } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  item: IllustItem;
};

export default function IllustCard({ item }: Props) {
  const [inFrame, setInFrame] = useState(false);
  useEffect(() => { setInFrame(window !== window.top); }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (inFrame) {
      e.preventDefault();
      window.parent.postMessage({ type: "openTab", url: item.sourceUrl, title: item.title }, "*");
    }
  };

  return (
    <a
      href={item.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group block w-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
      style={{background: "linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,245,250,0.55) 100%)", backdropFilter: "blur(20px) saturate(1.8)", border: "1px solid rgba(255,255,255,0.75)", boxShadow: "0 2px 16px rgba(236,72,153,0.07), inset 0 1px 0 rgba(255,255,255,0.9)"}}
    >
      {/* 画像エリア */}
      <div className="relative w-full overflow-hidden bg-pink-50/50">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          unoptimized
        />
        {/* ホバーオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* サイトバッジ */}
        <div className="absolute top-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-gray-600 shadow-sm">
            {item.siteName}
          </span>
        </div>
      </div>

      {/* テキストエリア */}
      <div className="px-4 py-3.5">
        <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug mb-2.5">
          {item.title}
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1 min-w-0">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-pink-50 px-2 py-0.5 text-[10px] font-medium text-pink-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <svg
            className="w-3.5 h-3.5 text-gray-200 group-hover:text-pink-300 shrink-0 transition-colors"
            fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </div>
      </div>
    </a>
  );
}
