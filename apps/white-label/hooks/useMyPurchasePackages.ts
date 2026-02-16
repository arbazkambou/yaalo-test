import { usePurchasePackages } from "@workspace/core/hooks/purchase/usePurchasePackages";
import { useTranslations } from "next-intl";

export function useMyPurchasePackages() {
  const t = useTranslations("cartPage.purchasePackagesMessages");
  return usePurchasePackages({
    alreadyRegistered: t("alreadyRegistered"),
    orderProcessed: t("orderProcessed"),
    redirectingToStripe: t("redirectingToStripe"),
  });
}
