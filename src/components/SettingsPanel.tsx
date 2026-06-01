"use client";

import { useState, useEffect, useCallback } from "react";

const FOLDER_STORAGE_KEY = "rakupochi_download_folder";

// CEP環境の型定義
declare global {
  interface Window {
    cep?: {
      fs: {
        showOpenDialog: (
          allowMultipleSelection: boolean,
          chooseDirectory: boolean,
          title: string,
          initialPath: string,
          fileTypes: string
        ) => { data: string[] };
      };
    };
  }
}

function loadSavedFolder(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(FOLDER_STORAGE_KEY) ?? "";
}

export default function SettingsPanel() {
  const [folderPath, setFolderPath] = useState<string>("");
  const [isCep, setIsCep] = useState<boolean>(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setFolderPath(loadSavedFolder());
    setIsCep(typeof window !== "undefined" && !!window.cep);
  }, []);

  const handleSelectFolder = useCallback(() => {
    if (!window.cep) return;
    const result = window.cep.fs.showOpenDialog(
      false,
      true,
      "ダウンロードフォルダを選択",
      "",
      ""
    );
    if (result?.data?.length > 0) {
      const path = result.data[0];
      setFolderPath(path);
      localStorage.setItem(FOLDER_STORAGE_KEY, path);
      flashSaved();
    }
  }, []);

  const handleManualSave = useCallback(() => {
    localStorage.setItem(FOLDER_STORAGE_KEY, folderPath);
    flashSaved();
  }, [folderPath]);

  function flashSaved() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="w-full max-w-xl mx-auto py-8 px-2">
      {/* セクションタイトル */}
      <p className="text-[10px] font-bold tracking-[0.18em] text-gray-500 uppercase mb-6 px-1">
        ダウンロードフォルダ設定
      </p>

      {/* カード */}
      <div
        className="w-full rounded-2xl p-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,245,250,0.6) 100%)",
          backdropFilter: "blur(20px) saturate(1.8)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow:
            "0 4px 24px rgba(236,72,153,0.07), inset 0 1px 0 rgba(255,255,255,0.9)",
          boxSizing: "border-box",
        }}
      >
        {/* 現在のパス表示ラベル */}
        <p className="text-xs font-semibold text-gray-600 mb-2">
          現在の保存先フォルダ
        </p>

        {/* パス表示エリア */}
        <div
          className="w-full rounded-xl px-4 py-3 mb-4 min-h-[48px] flex items-center overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(236,72,153,0.15)",
            boxSizing: "border-box",
          }}
        >
          {folderPath ? (
            <span
              className="text-xs text-gray-700 break-all leading-relaxed"
              style={{ wordBreak: "break-all" }}
            >
              {folderPath}
            </span>
          ) : (
            <span className="text-xs text-gray-400">
              フォルダが設定されていません
            </span>
          )}
        </div>

        {/* CEP環境：ボタンでOS選択ダイアログ */}
        {isCep ? (
          <button
            type="button"
            onClick={handleSelectFolder}
            className="w-full rounded-xl py-3 text-sm font-bold text-white transition-all active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,168,212,0.9) 0%, rgba(236,72,153,0.95) 40%, rgba(219,39,119,0.9) 100%)",
              boxShadow: "0 4px 16px rgba(236,72,153,0.35)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            フォルダを選択
          </button>
        ) : (
          /* 非CEP環境：手動入力フォールバック */
          <div className="w-full" style={{ boxSizing: "border-box" }}>
            <p className="text-[10px] text-gray-400 mb-2">
              ※ ブラウザ環境のため、パスを手動入力できます
            </p>
            <div className="flex w-full gap-2" style={{ boxSizing: "border-box" }}>
              <input
                type="text"
                value={folderPath}
                onChange={(e) => setFolderPath(e.target.value)}
                placeholder="/Users/username/Downloads/illust"
                className="flex-1 min-w-0 rounded-xl px-3 py-2.5 text-xs text-gray-700 outline-none placeholder:text-gray-300 transition-all"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(236,72,153,0.2)",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="button"
                onClick={handleManualSave}
                className="shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-all active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,168,212,0.9) 0%, rgba(236,72,153,0.95) 100%)",
                  boxShadow: "0 3px 12px rgba(236,72,153,0.3)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                保存
              </button>
            </div>
          </div>
        )}

        {/* 保存完了トースト */}
        {saved && (
          <div className="mt-3 flex items-center gap-1.5">
            <span className="inline-block w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="text-xs text-green-500 font-semibold">保存しました</span>
          </div>
        )}
      </div>

      {/* 補足説明 */}
      <div
        className="w-full mt-4 rounded-xl px-4 py-3"
        style={{
          background: "rgba(255,255,255,0.45)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxSizing: "border-box",
        }}
      >
        <p className="text-[11px] text-gray-500 leading-relaxed">
          ここで設定したフォルダに、ダウンロードしたイラストが保存されます。
          設定は次回起動時にも引き継がれます。
        </p>
      </div>
    </div>
  );
}
