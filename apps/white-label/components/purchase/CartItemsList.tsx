"use client";

import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import { CartItemsListSkelton } from "./CartItemsListSkelton";
import { ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";
import { useTranslations } from "next-intl";

function CartItemsList() {
  const { totalCartItems, isCartDetailLoading } = useCartActions();
  const t = useTranslations("cartPage.checkoutDetails");
  return (
    <section>
      <div className="flex gap-4 py-4 px-2   items-center">
        <ShoppingCart className="text-foreground" size={28} />
        <p className="text-body-xl text-foreground font-500">{t("orderSummary")}</p>
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
