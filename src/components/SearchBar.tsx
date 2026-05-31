"use client";

import { useState, FormEvent } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-pink-100">
      {/* 装飾的な背景サークル */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pink-100/60" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-pink-50" />

      <div className="relative max-w-screen-xl mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-pink-400 uppercase mb-3">
            Free Illustration Search by RAKUPOCHI
          </p>
          <h1 className="text-4xl font-black text-gray-900 leading-tight mb-1">
            フリーイラストをまとめて探す
          </h1>
          <p className="text-xl font-bold text-pink-500 mb-4">ラクポチ イラスト</p>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">
            いらすとや・ソコスト・Linustock など人気サイトを横断して検索！<br />
            欲しい素材がきっと見つかります！
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-xl">
            <div className="relative flex-1 min-w-0">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300"
                fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="キーワードを入力（例：ビジネス、家族、春）"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 py-3.5 text-sm text-gray-800 outline-none focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50 placeholder:text-gray-300 transition-all"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-pink-500 hover:bg-pink-600 active:scale-95 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-all"
            >
              検索
            </button>
          </form>

          <div className="flex items-center gap-2 mt-5">
            <span className="text-xs text-gray-300">よく検索されるキーワード：</span>
            {["ビジネス", "家族", "季節", "アイコン"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => { setValue(tag); onSearch(tag); }}
                className="text-xs text-pink-400 hover:text-pink-600 hover:underline transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
