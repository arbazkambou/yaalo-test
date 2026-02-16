export interface PostContactUsDataInputs {
  email: string;
  subject: string;
  phone: string;
  "g-recaptcha-response": string;
  description: string;
}

export interface PostContactUsData {
  status: boolean;
  message: string;
  errors: string[];
}

export type GetAppSettingsResponse = {
  status: boolean;
  data: AppSettings;
};

export interface TawkSettings {
  link: string;
  propertyId: string;
  widgetId: string;
}
export interface AppLinkSettings {
  android: string;
  ios: string;
}
export interface SupportSettings {
  email: string;
  phone: string;
  whatsapp: string;
}
export interface SocialSettings {
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  tiktok: string | null;
  twitter: string | null;
  youtube: string | null;
}
export interface BrandingSettings {
  mainLogo: string;
  secondaryLogo: string;
  favicon: string;
}
export interface SiteColorSettings {
  background: string;
  button: string;
  main: string;
  secondary: string;
  accent: string;
  text: string;
  buttonHover: string;
}
export interface SiteSettings {
  name: string;
  domain: string;
  colors: SiteColorSettings;
  fontFamily: string;
}
export interface AppScreenshotSteps {
  step1: string;
  step2: string;
  step3: string;
}

export interface FeatureSettings {
  appScreenshotShow: boolean;
  appScreenshotDouble: string;
  appScreenshot: AppScreenshotSteps;
}
export interface CommerceSettings {
  retailCurrency: string;
  topupLimit: number;
}
export interface AnalyticsSettings {
  gtmId: string;
}
export interface MaintenanceSettings {
  enabled: string; // change to boolean if backend fixes it
  message: string;
}

export interface ChatSettings {
  tawk: TawkSettings;
}

export interface AppSettings {
  appLink: AppLinkSettings;
  appVersion: AppLinkSettings;
  support: SupportSettings;
  social: SocialSettings;
  branding: BrandingSettings;
  site: SiteSettings;
  chat: ChatSettings;
  webLinks: {
    faq: string;
    terms: string;
    privacyPolicy: string;
    helpCenter: string;
    contactUs: string;
    compatibleDevices: string;
  };
  features: FeatureSettings;
  commerce: CommerceSettings;
  analytics: AnalyticsSettings;
  maintenance: MaintenanceSettings;
}
