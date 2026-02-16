import { CART_FULL_MESSAGE } from "@workspace/core/constants/messages.constants";
import {
  useAppDispatch,
  useAppSelector,
} from "@workspace/core/lib/redux/hooks/hooks";
import {
  addItem,
  clearCart,
  clearError,
  decreaseQuantity,
  decreaseTempItemQuantity,
  deleteItem,
  getTotalCartPrice,
  getTotalQuantity,
  getTotalQuantityById,
  handleShowCartDetail,
  increaseQuantity,
  increaseTempItemQuantity,
} from "@workspace/core/lib/redux/slices/cartSlice";
import { Package } from "@workspace/core/types/services/packages/packages.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type ValidationMessages = {
  noSelectedPackage: string;
  cartFull: string;
};

export function useCartActions(validationMessages?: ValidationMessages) {
  const [isCartDetailLoading, setIsCartDetailLoading] = useState(true);

  const showCartDetail = useAppSelector((state) => state.cart.showCartDetail);
  const dispatch = useAppDispatch();
  const totalCartQuantity = useAppSelector((state) =>
    getTotalQuantity(state.cart.items)
  );
  const totalCartItems = useAppSelector((state) => state.cart.items);
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart.items)
  );
  const cartError = useAppSelector((state) => state.cart.error);
  const tempItemQuantity = useAppSelector(
    (state) => state.cart.tempItemQuantity
  );

  const router = useRouter();

  function setShowCartDetail(show: boolean) {
    dispatch(handleShowCartDetail(show));
  }

  function handleAddToCart({
    packages,
    selectedPackageId,
    flag,
    goToCheckout,
  }: {
    packages: Package[];
    selectedPackageId: string;
    flag: string;
    goToCheckout?: boolean;
  }) {
    if (!selectedPackageId) {
      toast.error(
        validationMessages?.noSelectedPackage ??
          "Please select a package first."
      );
      return;
    }

    if (totalCartQuantity >= 5) {
      toast.error(validationMessages?.cartFull ?? CART_FULL_MESSAGE);
      return;
    }

    //get the id of package from the state and then find the details of the package from the packages array and put in the cart
    const searchedPackage = packages.find(
      (item) => item.id === selectedPackageId
    );

    if (searchedPackage) {
      const cartItem = {
        ...searchedPackage,
        quantity: tempItemQuantity,
        image_url: flag,
        // recurring: 0,
        // can_renew: searchedPackage. ? true : false,
      };

      dispatch(addItem(cartItem));

      if (goToCheckout) {
        router.push("/cart");
        return;
      }
      // toast.success("Your package has been added to the cart successfully!");
      setShowCartDetail(true);
    }
  }

  function itemQuantityById(itemId: string) {
    const quantity = useAppSelector((state) =>
      getTotalQuantityById(state.cart.items, itemId)
    );

    return quantity ? quantity : 0;
  }

  function handleIncreaseItemQuantity(itemId: string) {
    dispatch(increaseQuantity(itemId));
  }

  function handleDecreaseItemQuantity(itemId: string) {
    dispatch(decreaseQuantity(itemId));
  }

  function handleIncreaseTempItemQuantity() {
    dispatch(increaseTempItemQuantity());
  }

  function handleDecreaseTempItemQuantity() {
    dispatch(decreaseTempItemQuantity());
  }

  function handleDeleteItem(itemId: string) {
    dispatch(deleteItem(itemId));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cartError) {
    toast.error(validationMessages?.cartFull ?? cartError);
    dispatch(clearError());
  }

  useEffect(function () {
    if (typeof window !== "undefined") {
      setIsCartDetailLoading(false);
    }
  }, []);

  return {
    showCartDetail,
    setShowCartDetail,

    handleAddToCart,
    totalCartQuantity,
    totalCartItems,
    totalCartPrice,
    itemQuantityById,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
    handleIncreaseTempItemQuantity,
    handleDecreaseTempItemQuantity,
    handleDeleteItem,
    handleClearCart,
    tempItemQuantity,
    isCartDetailLoading,
  };
}
