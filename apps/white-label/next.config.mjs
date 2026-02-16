import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/core"],
  reactCompiler: true,
  cacheComponents: true,
  cacheLife: {
    byDaily: {
      stale: 86400,
      revalidate: 86400,
      expire: 60 * 60 * 24 * 14,
    },
  },
  images: {
    remotePatterns: [
      new URL("https://flagcdn.com/**"),
      new URL("https://test.esimwhitelabel.com/**"),
      new URL("https://esimwhitelabel.com/**"),
      new URL("https://portal.esimcard.com/**"),
      new URL("https://platform.defymobile.com/**"),
      new URL("https://sales.esimwhitelabel.com/**"),
      new URL("https://platform.yaalo.com/**"),
    ],
    qualities: [50, 60, 70, 75, 80, 85, 90, 95, 100],
  },
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();
export default withSentryConfig(withNextIntl(nextConfig), {
  org: "codiea",
  project: "yaalo-nextjs",
  silent: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
  },
  authToken: process.env.SENTRY_AUTH_TOKEN,
  tunnelRoute: "/monitoring",
  silent: !process.env.CI,
});
