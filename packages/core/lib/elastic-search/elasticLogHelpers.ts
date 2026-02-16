import { NextRequest, NextResponse } from "next/server";

export function buildLogData(request: NextRequest, response: NextResponse) {
  // Real client IP when behind Cloudflare
  const cfIp = request.headers.get("cf-connecting-ip")?.trim();
const xffRaw = request.headers.get("x-forwarded-for");
const xffIp = xffRaw?.split(",")[0]?.trim();
const ip = cfIp || xffIp || "unknown";

const proxyIp = xffRaw || null;

  const userAgent = request.headers.get("user-agent") || "unknown";

  const tags = [
    `IP: ${ip}`,
    `URL: ${request.nextUrl.pathname}`,
    `UserAgent: ${userAgent}`,
  ];

  return {
    type: "request",
    user_role: null,
    user_id: null,
    user_email: null,
    ip,
    proxy_ip: proxyIp,
    url: request.url,
    method: request.method,
    response_status: response.status,
    tags,
    input: Object.fromEntries(request.nextUrl.searchParams),
    recorded_at: new Date().toISOString(),
  };
}

export async function sendLog(request: NextRequest, response: NextResponse) {
  const logData = buildLogData(request, response);

  try {
    const origin = process.env.NEXT_ORIGIN || "http://localhost:3000";
    const url = `${origin}/api/log`;
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(logData),
      headers: { "Content-Type": "application/json" },
    });
  } catch {}
}
