import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "es", "nl", "tr", "fr", "it"],
  localePrefix: "as-needed",
  defaultLocale: "en",
});
