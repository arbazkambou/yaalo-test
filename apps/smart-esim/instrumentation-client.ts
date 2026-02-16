import * as Sentry from "@sentry/nextjs";

const APP_ENV = process.env.NEXT_PUBLIC_ENV;
const DSN = process.env.NEXT_PUBLIC_BASE_SENTRY_DSN;

Sentry.init({
  dsn: DSN,
  enableLogs: true,
  tracesSampleRate: 1,
  sendDefaultPii: true,
  enabled: APP_ENV === "production" && !!DSN,
  ignoreErrors: [
    // Form / parsing noise
    /Failed to parse body as FormData/i,

    // Browser quirks
    /ResizeObserver loop/i,
    /Script error\.?$/i,
    /Illegal invocation/i,
    /Maximum call stack size exceeded/i,
    /The object can not be found here/i,
    /The operation is insecure/i,
    /Connection to Indexed Database server lost/i,
    /Unknown root exit status\.?/i,

    // Promise / unknown
    /Non-Error promise rejection/i,
    /^<unknown>$/i,

    // Network / fetch noise (be careful with these in production)
    /NetworkError/i,
    /Network request failed/i,
    /Load failed/i,
    /Failed to fetch.*(doubleclick\.net)/i,
    /Connection closed/i,

    // Third-party / analytics noise
    /fb_xd_fragment/i,
    /fbq/i,
    /gtag/i,
    /dataLayer/i,

    // DOM manipulation noise
    /Failed to execute 'removeChild'/i,
    /read only property 'error'/i,

    // Firefox specific
    /NS_ERROR_FAILURE/i,

    // Runtime mismatch
    /ReadableStream is not defined/i,

    // React Server Components bundler error (new addition)
    /Could not find the module.*Dialog.*in the React Client Manifest/i,
    /Module \d+ was instantiated because it was required from module \d+, but the module factory is not available/i,
  ],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
