import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { ApiResponse } from "@workspace/core/types/services/api/api.types";
import {
  Order,
  OrderHistoryResponse,
} from "@workspace/core/types/services/purchase/OrderHistory";
import { WalletRefillResponse } from "@workspace/core/types/services/purchase/purchase.types";
import {
  WalletRefillInputs,
  WalletRefresh,
} from "@workspace/core/types/services/refill/refill.types";
import { checkSession } from "../auth/auth.services";

export async function walletRefill({
  amount,
  landing_redirect_url,
}: WalletRefillInputs): Promise<ApiResponse<WalletRefillResponse>> {
  const session = await checkSession();

  try {
    const data = await api<WalletRefillResponse>(
      "/refill",
      session.accessToken,
      { body: { amount, redirect_url: landing_redirect_url }, method: "POST" }
    );

    return { status: true, data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function getOrderHistory(
  locale: string = "en"
): Promise<ApiResponse<Order[]>> {
  const session = await checkSession();
  try {
    const data = await api<OrderHistoryResponse>(
      "/user/credits",
      session.accessToken,
      {
        headers: {
          "Accept-Language": locale,
        },
      }
    );

    return { status: true, data: data?.data?.credits || [] };
  } catch (error) {
    return {
      status: false,
      message: globalErrorHandler(error),
    };
  }
}

export async function walletRefresh(
  tid: string | null
): Promise<ApiResponse<WalletRefresh>> {
  const session = await checkSession();

  try {
    const data = await api<WalletRefresh>(
      `/refill/refresh/${tid}`,
      session.accessToken
    );

    return { status: true, data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}
