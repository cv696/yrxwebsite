"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

type Locale = "zh-CN" | "zh-TW";

interface LocaleContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: (text: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "yuanrongxuan-locale";

function detectLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh-CN" || stored === "zh-TW") return stored;
  }
  if (typeof navigator !== "undefined") {
    const lang = navigator.language;
    if (lang.startsWith("zh-TW") || lang.startsWith("zh-HK")) return "zh-TW";
  }
  return "zh-CN";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "zh-CN";
    return detectLocale();
  });

  const converterRef = useRef<((text: string) => string) | null>(null);
  const loadingRef = useRef(false);
  // 用 key 强制 re-render 在转换器就绪后
  const [, setReady] = useState(false);

  // 当 locale 变为 zh-TW 时，加载转换器
  useEffect(() => {
    if (locale === "zh-CN") {
      converterRef.current = null;
      return;
    }
    if (converterRef.current) return; // 已加载
    if (loadingRef.current) return;   // 正在加载
    loadingRef.current = true;

    import("opencc-js")
      .then((mod) => {
        const convert = mod.Converter({ from: "cn", to: "tw" });
        converterRef.current = convert;
        setReady((v) => !v); // 触发 re-render
      })
      .catch((err) => {
        console.warn("OpenCC 繁简转换器加载失败:", err);
        converterRef.current = null;
      });
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "zh-CN" ? "zh-TW" : "zh-CN";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = useCallback(
    (text: string): string => {
      if (locale === "zh-CN" || !converterRef.current) return text;
      return converterRef.current(text);
    },
    [locale],
  );

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within <LocaleProvider>");
  return ctx;
}
