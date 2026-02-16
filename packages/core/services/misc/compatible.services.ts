import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { SupportedDeviceResponseType } from "@workspace/core/types/services/misc/compatible.types";

const url =
  "https://esimcard.com/api/get-supported-mobile-devices?key=esimcard-2001-101110-2030";

export async function getSupportedDeviceList() {
  try {
    const data = await api<SupportedDeviceResponseType>(url, null, {
      next: { tags: [queryKeys.misc.compatibleDevices] },
    });

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
