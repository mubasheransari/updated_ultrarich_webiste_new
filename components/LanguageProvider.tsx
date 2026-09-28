"use client";

import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = {
  code: string;
  label: string;
  nativeLabel: string;
};

export const LANGUAGES: Language[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "ur", label: "Urdu", nativeLabel: "اردو" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "de", label: "German", nativeLabel: "Deutsch" },
  { code: "it", label: "Italian", nativeLabel: "Italiano" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "bn", label: "Bengali", nativeLabel: "বাংলা" },
  { code: "fa", label: "Persian", nativeLabel: "فارسی" },
  { code: "zh-CN", label: "Chinese", nativeLabel: "中文" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia" },
  { code: "ms", label: "Malay", nativeLabel: "Bahasa Melayu" },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands" },
  { code: "pl", label: "Polish", nativeLabel: "Polski" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  { code: "ko", label: "Korean", nativeLabel: "한국어" },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (code: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function setGoogleLanguage(code: string) {
  if (code === "en") {
    document.cookie = "googtrans=;path=/;max-age=0";
    document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "googtrans=;path=/;domain=" + window.location.hostname + ";max-age=0";
    document.cookie = "googtrans=;path=/;domain=" + window.location.hostname + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = "";
      combo.dispatchEvent(new Event("change", { bubbles: true }));
    }
    window.setTimeout(() => window.location.reload(), 50);
    return;
  }

  document.cookie = `googtrans=/en/${code};path=/;max-age=31536000`;
  document.cookie = `googtrans=/en/${code};path=/;domain=${window.location.hostname};max-age=31536000`;

  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (combo) {
    combo.value = code;
    combo.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("ultra-rich-language") || "en";
    setCode(saved);

    const timer = window.setTimeout(() => {
      if (saved !== "en") setGoogleLanguage(saved);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  const setLanguage = (nextCode: string) => {
    const safeCode = LANGUAGES.some((item) => item.code === nextCode) ? nextCode : "en";
    localStorage.setItem("ultra-rich-language", safeCode);
    setCode(safeCode);

    if (safeCode === "en") {
      setGoogleLanguage("en");
      return;
    }

    setGoogleLanguage(safeCode);
  };

  useEffect(() => {
    const lang = LANGUAGES.find((item) => item.code === code) ?? LANGUAGES[0];
    document.documentElement.lang = lang.code;
    document.documentElement.dir = ["ar", "ur", "fa"].includes(lang.code) ? "rtl" : "ltr";
  }, [code]);

  const value = useMemo(
    () => ({
      language: LANGUAGES.find((item) => item.code === code) ?? LANGUAGES[0],
      setLanguage,
    }),
    [code]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <div id="google_translate_element" className="sr-only" aria-hidden="true" />
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: '${LANGUAGES.map((item) => item.code).join(",")}',
                autoDisplay: false
              }, 'google_translate_element');
            };
          `,
        }}
      />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
