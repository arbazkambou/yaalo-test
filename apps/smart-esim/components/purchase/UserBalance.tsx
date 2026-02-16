"use client";

import UserBalanceSkelton from "@/components/ui/skeltons/UserBalanceSkelton";
import { useUser } from "@workspace/core/hooks/user/useUser";
import { Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

function UserBalance() {
  const { isLoading, error, data: user } = useUser();
  const t = useTranslations("cartPage");

  if (isLoading) {
    return <UserBalanceSkelton />;
  }

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div
      className={`flex w-full justify-between rounded-2xl bg-secondary-green/10 px-[33px] py-[26px] leading-none text-foreground flex-row items-center gap-6`}
    >
      <div className="space-y-3.5">
        <p className={`text-body-base mt-2 font-400 `}>{t("currentBalance")}</p>
        <p className={`text-[40px]! font-700`}>${user?.balance}</p>
      </div>
      <div>
        <Wallet size={30} className="text-secondary-green" />
      </div>
    </div>
  );
}

export default UserBalance;
