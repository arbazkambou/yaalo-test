"use server";

import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { auth } from "@workspace/core/lib/NextAuth";
import { ApiResponse } from "@workspace/core/types/services/api/api.types";
import {
  Esim,
  EsimDetail,
  EsimDetailResponse,
  GetMyEsimsResponse,
  PendingEsim,
  PendingEsimsResponse,
} from "@workspace/core/types/services/sims/sims.types";
import { checkSession } from "../auth/auth.services";

export async function getMyEsims(
  locale: string = "en"
): Promise<ApiResponse<Esim[]>> {
  const session = await auth();

  try {
    const data = await api<GetMyEsimsResponse>("/sim", session?.accessToken, {
      next: { tags: [queryKeys.sims.myEsims] },
      headers: {
        "Accept-Language": locale,
      },
    });
    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function getPendingEsims(): Promise<ApiResponse<PendingEsim[]>> {
  const session = await auth();

  try {
    const data = await api<PendingEsimsResponse>(
      "/pending-packages",
      session?.accessToken,
      { next: { tags: [queryKeys.sims.pendingEsims] } }
    );

    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function getEsimDetail(
  simId: string,
  locale: string = "en"
): Promise<ApiResponse<EsimDetail>> {
  const session = await checkSession();
  try {
    const data = await api<EsimDetailResponse>(
      `/sim/${simId}`,
      session.accessToken,
      {
        next: { tags: [queryKeys.sims.esimDetail] },
        headers: {
          "Accept-Language": locale,
        },
      }
    );

    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}
