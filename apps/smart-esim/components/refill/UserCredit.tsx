"use client";

import { useUser } from "@workspace/core/hooks/user/useUser";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Tag } from "lucide-react";
import { useTranslations } from "next-intl";

function UserCredit() {
  const { isLoading, data: user, error } = useUser();
  const t= useTranslations("refillPage");

  if (isLoading) {
    return <Skeleton className="h-[1.1885rem] w-[70px] bg-primary/10" />;
  }

  if (error || !user) {
    throw new Error(
      error?.message ?? t("errorMessage")
    );
  }

  return (
    <div className="flex items-center xl:justify-end">
      <div className="flex w-full items-center justify-center gap-2 rounded-[0.5rem] bg-muted px-[1rem] py-[0.89rem] xl:w-max">
        <Tag className="h-[15px] w-[15px]" />
        <p className="text-[1.1885rem] font-500">{t("currentBalance")}</p>

        <p className="text-[1.1885rem] font-600 text-primary">
          ${user?.balance}
        </p>
      </div>
    </div>
  );
}
export default UserCredit;
