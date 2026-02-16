import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import { useTranslations } from "next-intl";

export function useMyCartActions() {
  const t = useTranslations("cartPage.addToCartMessages");
  return useCartActions({
    cartFull: t("cartFull"),
    noSelectedPackage: t("noSelectedPackage"),
  });
}
