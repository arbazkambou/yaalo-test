import { useMyCartActions } from "@/hooks/useMyCartActions";
import { CartState } from "@workspace/core/lib/redux/slices/cartSlice";
import { Card } from "@workspace/ui/components/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function CartItem({ cartItem }: { cartItem: CartState }) {
    const t = useTranslations("cartPage");
  const {
    id,
    name,
    data_quantity,
    data_unit,
    package_validity,
    package_validity_unit,
    image_url,
    total_price,
    unlimited,
  } = cartItem;

  const {
    itemQuantityById,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
    handleDeleteItem,
  } = useMyCartActions();

  return (
    <Card className="flex justify-between gap-[20px] rounded-none border-0 px-[26px] py-[19px] shadow-custom! flex-row!">
      {/* country flag  */}
      <div className="relative h-[45px] w-[45px] shrink-0 sm:h-[55px] sm:w-[55px]">
        <Image
          src={image_url}
          alt="country flag"
          fill
          sizes="auto"
          className="shrink-0 rounded-full object-cover shadow-md"
        />
      </div>

      {/* country name and inc and dec btns  */}
      <div className="flex flex-grow justify-between gap-[15px]">
        <div className="flex flex-col gap-[15px] leading-none">
          {/* country name and package detail  */}
          <div className="flex flex-col gap-1">
            <p className="text-body-sm font-600 xs:text-body-base text-foreground">
              {name}
            </p>

            <p className="flex items-center gap-1 text-body-sm">
              <span className="text-primary">{t("Data")}:</span>
              <span className="text-muted-foreground">
                {unlimited ? t("Unlimited") : `${data_quantity} ${data_unit}`}
              </span>
            </p>

            <p className="flex items-center gap-1 text-body-sm">
              <span className="text-primary">{t("Duration")}:</span>
              <span className="text-muted-foreground">
                {package_validity} {package_validity_unit}
              </span>
            </p>
          </div>

          {/* increament and decreament buttons  */}
          <div className="flex w-[105px] items-center justify-between rounded-pill bg-primary px-2.5 py-1 text-background">
            <span
              role="button"
              className="rounded-pill px-1.5 transition-all hover:bg-background/40 cursor-pointer dark:hover:bg-background/20"
              onClick={() => handleDecreaseItemQuantity(id)}
            >
              <Minus
                className="text-foreground dark:text-primary-foreground"
                size={18}
              />
            </span>
            <p className="text-body-sm text-foreground dark:text-primary-foreground">
              {itemQuantityById(id)}
            </p>
            <span
              role="button"
              className="rounded-pill px-1.5 transition-all hover:bg-background/40 cursor-pointer dark:hover:bg-background/20"
              onClick={() => handleIncreaseItemQuantity(id)}
            >
              <Plus
                className="text-foreground dark:text-primary-foreground"
                size={18}
              />
            </span>
          </div>
        </div>

        {/* pricing  */}
        <div className="flex shrink-0 flex-col justify-between">
          <span className="flex shrink-0 items-center justify-center rounded-[6px] bg-primary/15 px-[10px] py-[6px] text-body-base font-500 leading-none text-foreground">
            ${total_price}
          </span>

          <div className="flex w-full justify-end">
            <span
              className="flex w-max shrink-0 items-center justify-center rounded-[6px] bg-destructive/15 px-[12px] py-[4px] text-body-base font-500 text-destructive transition-all hover:!bg-destructive/80 hover:text-background/90 cursor-pointer"
              onClick={() => handleDeleteItem(id)}
            >
              <Trash2 size={20} className="shrink-0" />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
