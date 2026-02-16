"use server";

import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import {
  PostContactUsData,
  PostContactUsDataInputs,
} from "@workspace/core/types/services/support/support.types";

export async function postContactUsData(inputs: PostContactUsDataInputs) {
  try {
    const data = await api<PostContactUsData>("/contact-us", null, {
      method: "POST",
      body: JSON.stringify({ ...inputs }),
      next: { tags: [queryKeys.support.contactUs] },
    });

    return data.message;
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}
