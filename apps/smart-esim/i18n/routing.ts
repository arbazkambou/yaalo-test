import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "es", "nl", "fr", "it", "tr"],
  // Used when no locale matches
  localePrefix: "as-needed",
  defaultLocale: "en",
});
