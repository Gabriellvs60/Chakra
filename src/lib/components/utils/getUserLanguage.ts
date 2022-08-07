export type BrowserLanguageType = { locale: string; language: string };

export function getUserLanguage(): BrowserLanguageType {
  const language =
    (navigator.languages && navigator.languages[0]) || navigator.language;

  const locale = language.toLowerCase().split(/[_-]+/)[0];

  return ["en", "pt"].includes(locale)
    ? { locale, language }
    : { locale: "en", language: "en" };
}
