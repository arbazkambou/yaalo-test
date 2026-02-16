"use client";

import CartItem from "@/components/purchase/CartItem";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { Card, CardContent } from "@workspace/ui/components/card";
import { CartItemsListSkelton } from "./CartItemsListSkelton";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

function CartItemsList() {
  const { totalCartItems, isCartDetailLoading } = useMyCartActions();
  const t = useTranslations("cartPage.checkoutDetails");

  return (
    <section>
      <div className="flex gap-4 py-4 px-2 items-center">
        <ShoppingCart size={28} />
        <p className="text-[25px] font-500">{t("orderSummary")}</p>
      </div>
      {isCartDetailLoading ? (
        <CartItemsListSkelton />
      ) : (
        <div className="flex flex-col gap-3">
          {totalCartItems.map((item, index) => (
            <CartItem cartItem={item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CartItemsList;
