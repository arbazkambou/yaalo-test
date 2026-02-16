"use client";

import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import { CartState } from "@workspace/core/lib/redux/slices/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Card } from "@workspace/ui/components/card";
import { useTranslations } from "next-intl";

function CartItem({ cartItem }: { cartItem: CartState }) {
  const t = useTranslations("cartPage");
  const {
    id,
    name,
    image_url,
    total_price,
    quantity,
    package_type,
    data_quantity,
    data_unit,
    package_validity,
    package_validity_unit,
    unlimited,
  } = cartItem;

  const {
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
    handleDeleteItem,
  } = useCartActions();

  const title =
    package_type === "DATA-VOICE-SMS"
      ? name
      : unlimited
        ? `${t("unlimitedDataFor")} ${package_validity} ${package_validity_unit}`
        : `${data_quantity}${data_unit} ${t("esimDataFor")} ${package_validity} ${package_validity_unit}`;

  return (
    <section className="bg-background hover:bg-background">
      <Card className="bg-muted p-1 pb-4 sm:p-2 border-none">
        <div className="flex items-stretch gap-4">
          <div className="flex h-[103px] w-[103px] bg-background items-center mt-2 sm:mt-0 justify-center rounded-3xl shrink-0">
            <div className="relative h-[50px] w-[50px] overflow-hidden rounded-md">
              <Image
                src={image_url}
                alt="country flag"
                fill
                sizes="33px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex h-[103px] py-2 px-2 flex-1 flex-col justify-between">
            <p className="text-body-sm font-500 leading-tight text-foreground sm:text-body-sm">
              {title}
            </p>

            <div className="flex items-end justify-between gap-3">
              <div className="flex w-fit items-center justify-between rounded-pill  p-[3px] leading-none text-foreground sm:w-[80px] sm:px-[6px] sm:py-[6px]">
                <span
                  role="button"
                  className="mr-4 transition-all cursor-pointer"
                  onClick={() => handleDeleteItem(id)}
                >
                  <Trash2 className="h-5 w-5 hover:text-destructive" />
                </span>
                <span
                  role="button"
                  className="rounded-full w-6 h-6 flex items-center justify-center bg-foreground/10 px-0.5 transition-all cursor-pointer hover:bg-foreground/20"
                  onClick={() => handleDecreaseItemQuantity(id)}
                >
                  <Minus className="h-5 w-5" />
                </span>

                <p className="text-body-base px-3 font-500">{quantity}</p>

                <span
                  role="button"
                  className="rounded-full h-6 w-6 flex items-center justify-center bg-foreground/10 px-0.5 transition-all cursor-pointer hover:bg-foreground/20"
                  onClick={() => handleIncreaseItemQuantity(id)}
                >
                  <Plus className="h-5 w-5" />
                </span>
              </div>

              <div className="text-lg text-foreground/80 ">${total_price}</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default CartItem;
