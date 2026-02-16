"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

function BlogSearch() {
    const t = useTranslations("BlogPage");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search") || "");
 const locale = useLocale();
  const isArabic = locale === "ar";
  const handleSearch = () => {
    const params = new URLSearchParams(window.location.search);

    if (query.trim()) {
      params.set("search", query.trim());
      params.delete("page");
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("hero.searchPlaceholder")}
        className="w-full rounded-[1.4375rem] bg-background text-muted-foreground shadow focus-within:shadow-xl"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-primary"
        onClick={handleSearch}
        style={
                isArabic
                  ? { left: "0.75rem", right: "auto" }
                  : { right: "0.75rem", left: "auto" }
              }
      />
    </div>
  );
}

export default BlogSearch;
