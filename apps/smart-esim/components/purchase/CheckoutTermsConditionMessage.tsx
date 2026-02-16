import FooterLink from "@/components/ui/links/FooterLink";
import { useTranslations } from "next-intl";

interface PropsType {
  amountDeductFromCard: number;
}

function CheckoutTermsConditionMessage({ amountDeductFromCard }: PropsType) {
  const t = useTranslations("cartPage.checkoutTermsConditionMessage");
  return (
    <p className="mx-2 mt-8 text-base">
      {t("byClicking")}
      {amountDeductFromCard === 0 ? t("purchaseNow") : t("secureCheckout")}
      {t("youAgree")}{" "}
      <FooterLink
        href={"/terms"}
        className="inline text-primary underline underline-offset-2"
      >
        {t("termsOfUse")}
      </FooterLink>{" "}
      {t("and")}{" "}
      <FooterLink
        href={"/privacy-policy"}
        className="inline text-primary underline underline-offset-2"
      >
        {t("privacyPolicy")}
      </FooterLink>{" "}
      {amountDeductFromCard !== 0 && t("redirectedStripe")}
    </p>
  );
}

export default CheckoutTermsConditionMessage;
