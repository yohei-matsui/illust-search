"use client";

type Props = {
  currentPage: number;     // 0-indexed
  hasMore: boolean;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, hasMore, onPageChange }: Props) {
  const hasPrev = currentPage > 0;
  if (!hasPrev && !hasMore) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-10 mb-4">
      <button
        type="button"
        disabled={!hasPrev}
        onClick={() => { onPageChange(currentPage - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all
          disabled:opacity-30 disabled:cursor-not-allowed
          enabled:border-pink-200 enabled:text-pink-500 enabled:hover:bg-pink-50 enabled:hover:border-pink-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        前のページ
      </button>

      <span className="px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-bold min-w-[3rem] text-center">
        {currentPage + 1}
      </span>

      <button
        type="button"
        disabled={!hasMore}
        onClick={() => { onPageChange(currentPage + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all
          disabled:opacity-30 disabled:cursor-not-allowed
          enabled:border-pink-200 enabled:text-pink-500 enabled:hover:bg-pink-50 enabled:hover:border-pink-300"
      >
        次のページ
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
