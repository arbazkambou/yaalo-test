import { NextResponse } from "next/server";
import { indexLog } from "@workspace/core/lib/elastic-search/elasticSearch";

export async function POST(req: Request) {
  const body = await req.json();
  await indexLog("yaalo_nextjs_access_logs", body);
  return NextResponse.json({ success: true });
}
