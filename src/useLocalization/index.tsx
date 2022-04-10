export interface Locale {
  locale: string;
  flag?: string;
}

export const useLocalization = () => {
  const getLocale = (): string => "cs";

  const getAvailableLocales = (): Locale[] => [
    { locale: "cs", flag: "🇨🇿" },
    { locale: "en", flag: "🇬🇧" },
    { locale: "sk", flag: "🇸🇰" },
  ];

  return {
    getLocale,
    getAvailableLocales,
  };
};
