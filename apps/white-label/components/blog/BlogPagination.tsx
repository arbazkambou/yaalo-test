
"use client";

import { useRouter } from "@/i18n/navigation";
import { BlogMeta } from "@workspace/core/types/services/blog/Blogs";
import { Button } from "@workspace/ui/components/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function BlogPagination({
  blogMeta,
}: {
  blogMeta: BlogMeta;
}) {
  const t = useTranslations("BlogPage.paginationBtn");
  const { currentPage, lastPage } = blogMeta;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || "1");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (page === "1") {
      params.delete("page");
    } else {
      params.set("page", page);
    }

    router.push(`?${params.toString()}`);
  }, [page, router]);

  return (
    <div className="flex items-center justify-between gap-4 py-8">
  
      <Button
        variant="ghost"
        disabled={currentPage === 1}
        onClick={() => setPage(String(currentPage - 1))}
        className="flex items-center gap-1"
      >
        <ArrowLeft size={16} />
        {t("previous")}
      </Button>

      <p className="text-sm font-medium text-muted-foreground">
        {t("page")} <span className="text-foreground">{currentPage}</span> {t("of")}{" "}
        <span className="text-foreground">{lastPage}</span>
      </p>

      <Button
        variant="ghost"
        disabled={currentPage === lastPage}
        onClick={() => setPage(String(currentPage + 1))}
        className="flex items-center gap-1"
      >
       {t("next")}
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}

