"use client";

import CheckoutDetail from "@/components/purchase/CheckoutDetail";
import FooterLink from "@/components/ui/links/FooterLink";
import { CheckoutPageSkelton } from "@/components/ui/skeltons/CheckoutPageSkelton";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import { Card } from "@workspace/ui/components/card";
import { useTranslations } from "next-intl";

function CheckoutPage() {
  const t = useTranslations("cartPage");
  const { isCartDetailLoading, totalCartQuantity } = useCartActions();
  const { isAuthLoading, isAuthenticated } = useAuth();

  if (isCartDetailLoading || isAuthLoading) return <CheckoutPageSkelton />;

  if (totalCartQuantity === 0)
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Card className="ms-6 mt-4 flex flex-col gap-2 rounded-pill p-5 px-10">
          <h2 className="text-lg text-foreground font-semibold">
            {t("emptyCart")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("exploreText")}
          </p>

          <FooterLink
            href={"/destinations/"}
            className="text-primary underline underline-offset-4"
          >
            {t("browseText")}
          </FooterLink>
        </Card>
      </div>
    );

  return (
    <section className="container">
      <div className={`mt-16  }`}>
        <CheckoutDetail />
      </div>
    </section>
  );
}

export default CheckoutPage;
