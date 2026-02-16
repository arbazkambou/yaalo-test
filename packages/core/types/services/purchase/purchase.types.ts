import { CartState } from "@workspace/core/lib/redux/slices/cartSlice";

export type PurchasePackagesResponse = {
  status: boolean;
  data: PurchasePackageDataType;
};

export type PurchasePackageDataType = FromWallet | FromCardPayment;

export type FromWallet = {
  open_checkout: false;
};

export type FromCardPayment = {
  verified: boolean;
  stripe_checkout_url: string;
  open_checkout: true;
};

export type PurchasePackagesAsGuestResponse =
  | ExistingUserResponse
  | NewUserResponse;

export type ExistingUserResponse = {
  status: true;
  data: {
    account: true;
  };
  message: string;
};

export type NewUserResponse = {
  status: true;
  data: {
    verified: boolean;
    stripe_checkout_url: string;
    open_checkout: boolean;
    account: false;
    nonce_token: string;
  };
  message: null;
};

export type PurchasePackagesInputs = {
  cartItems: CartState[];
  redirect_url: string;
  promo_code: string | null;
};

export type PurchasePackagesAsGuestInputs = {
  cartItems: CartState[];
  redirect_url: string;
  promo_code: string | null;
  email: string;
  name: string;
};

export const CART_COOKIE_NAME = "cartItems";

export type ShowDiscountTimerResponse = {
  status: boolean;
  data: {
    show_discount_timer: boolean;
  };
};

export interface CheckoutSummaryResponse {
  status: boolean;
  data: CheckoutSummary;
  message: string;
}

export type CheckoutSummary = {
  balance: number;
  total_amount: number;
  original_amount: number;
  discount: number;
  discount_amount: number;
  amount_deducted_from_wallet: number;
  amount_deducted_from_card: number;
  promo_applied: boolean;
  promo_applied_message: string | null;
  validation_message: string;
};

export interface WalletRefillResponse {
  status: boolean;
  message: string;
  data: {
    verified: boolean;
    stripe_customer_id: string;
    payment_gateway: string;
    stripe_checkout_url: string;
  };
}
