"use server";

import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { auth } from "@workspace/core/lib/NextAuth";
import { CartState } from "@workspace/core/lib/redux/slices/cartSlice";
import { ApiResponse } from "@workspace/core/types/services/api/api.types";
import {
  CheckoutSummary,
  CheckoutSummaryResponse,
  PurchasePackageDataType,
  PurchasePackagesAsGuestInputs,
  PurchasePackagesAsGuestResponse,
  PurchasePackagesInputs,
  PurchasePackagesResponse,
} from "@workspace/core/types/services/purchase/purchase.types";
import { cookies } from "next/headers";

export async function purchasePackages({
  promo_code,
  redirect_url,
  cartItems,
}: PurchasePackagesInputs): Promise<ApiResponse<PurchasePackageDataType>> {
  const session = await auth();
  const cookieStore = await cookies();
  const referral = cookieStore.get("referral")?.value;

  try {
    const bundles = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const data = await api<PurchasePackagesResponse>(
      "/cart/checkout",
      session?.accessToken,
      {
        body: {
          bundles,
          promo_code: promo_code ? promo_code : referral ? referral : null,
          redirect_url,
          platform: "web",
          version: "1.1",
        },
        method: "POST",
        next: { tags: [queryKeys.purchase.purchasePackages] },
      }
    );

    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function purchasePackagesAsGuest({
  promo_code,
  redirect_url,
  cartItems,
  email,
  name,
}: PurchasePackagesAsGuestInputs): Promise<
  ApiResponse<PurchasePackagesAsGuestResponse>
> {
  const cookieStore = await cookies();
  const referral = cookieStore.get("referral")?.value;

  try {
    const bundles = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const data = await api<PurchasePackagesAsGuestResponse>(
      "/guest-checkout-session",
      null,
      {
        body: {
          bundles,
          promo_code: promo_code ? promo_code : referral ? referral : null,
          redirect_url,
          email,
          name,
          guest: "guest",
          platform: "web",
          version: "1.1",
        },
        method: "POST",
        next: { tags: [queryKeys.purchase.purchasePackages] },
      }
    );

    return { status: true, data: data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function getCheckoutSummary({
  cartItems,
  promo_code,
}: {
  cartItems: CartState[];
  promo_code: string | null;
}): Promise<ApiResponse<CheckoutSummary>> {
  const session = await auth();

  const bundles = cartItems.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));

  try {
    const data = await api<CheckoutSummaryResponse>(
      "/cart/checkout/summary",
      session?.accessToken,
      {
        body: { bundles, promo_code: promo_code ? promo_code : null },
        method: "POST",
        next: { tags: [queryKeys.purchase.checkoutSummary] },
      }
    );

    data.data.validation_message = data.message;

    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function getCheckoutSummaryAsGuest({
  cartItems,
  promo_code,
}: {
  cartItems: CartState[];
  promo_code: string | null;
}): Promise<ApiResponse<CheckoutSummary>> {
  // const session = await auth();

  const bundles = cartItems.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));

  try {
    const data = await api<CheckoutSummaryResponse>("/guest-checkout", null, {
      body: { bundles, promo_code: promo_code ? promo_code : null },
      method: "POST",
      next: { tags: [queryKeys.purchase.checkoutSummary] },
    });

    data.data.validation_message = data.message;

    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}
