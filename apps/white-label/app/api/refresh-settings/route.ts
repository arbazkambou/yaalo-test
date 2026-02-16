import { queryKeys } from "@workspace/core/constants/queries.keys";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidateTag(queryKeys.support.appSettings, "byDaily");

  return NextResponse.json({ revalidated: true });
}
