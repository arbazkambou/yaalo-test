import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { GetAppSettingsResponse } from "@workspace/core/types/services/support/support.types";
import { cacheLife, cacheTag } from "next/cache";

export async function getAppSettings() {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.support.appSettings);
  try {
    const data = await api<GetAppSettingsResponse>("/web-settings", null);

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
