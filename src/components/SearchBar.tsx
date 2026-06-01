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
    <section className="relative overflow-hidden border-b" style={{background: "transparent", borderColor: "rgba(255,255,255,0.3)"}}>
      {/* Liquid Glass 装飾サークル */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full" style={{background: "radial-gradient(circle, rgba(251,207,232,0.5) 0%, rgba(255,255,255,0.1) 70%)", backdropFilter: "blur(1px)"}} />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full" style={{background: "radial-gradient(circle, rgba(216,180,254,0.35) 0%, transparent 70%)"}} />
      <div className="pointer-events-none absolute top-10 right-1/3 w-48 h-48 rounded-full" style={{background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)"}} />

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
                className="w-full rounded-2xl pl-10 pr-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-300 transition-all"
              style={{background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(1.8)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 16px rgba(236,72,153,0.08), inset 0 1px 0 rgba(255,255,255,0.8)"}}
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-2xl active:scale-95 text-white px-7 py-3.5 text-sm font-bold transition-all"
              style={{background: "linear-gradient(135deg, rgba(249,168,212,0.9) 0%, rgba(236,72,153,0.95) 40%, rgba(219,39,119,0.9) 100%)", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(236,72,153,0.4), inset 0 1px 0 rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.3)"}}
            >
              検索
            </button>
          </form>

          <div className="flex items-center gap-2 mt-5">
            <span className="text-xs text-gray-500">よく検索されるキーワード：</span>
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
