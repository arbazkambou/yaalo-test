import { _Translator, Messages, useTranslations } from "next-intl";

export type DeviceItem = {
  id: string;
  name: string;
  type: string; // "Smartphone", "Tablet", etc.
};

export type InfoBox = {
  text: string;
};

export type DeviceSection = {
  id: string;
  heading: string;
  description: string;
  infoBox?: InfoBox;
  devices: DeviceItem[];
};
export function getDeviceSections(
  t: _Translator<Messages, 'EsimCompatiblePage'> 
): DeviceSection[] {
  return [ 
    {
    id: "apple",
        heading: t("iPhones.heading"),
    description:
t("iPhones.description"),
    infoBox: {
      text: t("iPhones.descriptionTwo"),
    },
    devices: [
      {
        id: "iphone-16-pro-max",
        name: "iPhone 16 Pro Max",
        type: "Smartphone",
      },
      { id: "iphone-16-pro", name: "iPhone 16 Pro", type: "Smartphone" },
      { id: "iphone-16-plus", name: "iPhone 16 Plus", type: "Smartphone" },
      { id: "iphone-16", name: "iPhone 16", type: "Smartphone" },
      {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        type: "Smartphone",
      },

      { id: "iphone-15-pro", name: "iPhone 15 Pro", type: "Smartphone" },
      { id: "iphone-15-plus", name: "iPhone 15 Plus", type: "Smartphone" },
      { id: "iphone-15", name: "iPhone 15", type: "Smartphone" },
      {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        type: "Smartphone",
      },
      { id: "iphone-14-pro", name: "iPhone 14 Pro", type: "Smartphone" },

      { id: "iphone-14-plus", name: "iPhone 14 Plus", type: "Smartphone" },
      { id: "iphone-14", name: "iPhone 14", type: "Smartphone" },
      {
        id: "iphone-13-pro-max",
        name: "iPhone 13 Pro Max",
        type: "Smartphone",
      },
      { id: "iphone-13-pro", name: "iPhone 13 Pro", type: "Smartphone" },
      { id: "iphone-13", name: "iPhone 13", type: "Smartphone" },

      { id: "iphone-13-mini", name: "iPhone 13 mini", type: "Smartphone" },
      {
        id: "iphone-12-pro-max",
        name: "iPhone 12 Pro Max",
        type: "Smartphone",
      },
      { id: "iphone-12-pro", name: "iPhone 12 Pro", type: "Smartphone" },
      { id: "iphone-12", name: "iPhone 12", type: "Smartphone" },
      { id: "iphone-12-mini", name: "iPhone 12 mini", type: "Smartphone" },

      { id: "iphone-se-3", name: "iPhone SE 3rd gen", type: "Smartphone" },
      {
        id: "iphone-11-pro-max",
        name: "iPhone 11 Pro Max",
        type: "Smartphone",
      },
      { id: "iphone-11-pro", name: "iPhone 11 Pro", type: "Smartphone" },
      { id: "iphone-11", name: "iPhone 11", type: "Smartphone" },
      { id: "iphone-se-2", name: "iPhone SE 2nd gen", type: "Smartphone" },

      { id: "iphone-xs-max", name: "iPhone XS Max", type: "Smartphone" },
      { id: "iphone-xs", name: "iPhone XS", type: "Smartphone" },
      { id: "iphone-xr", name: "iPhone XR", type: "Smartphone" },
    ],
  },
  {
    id: "apple-ipad",
    heading: t("iPads.heading"),
    description:
    t("iPads.description"),
    infoBox: {
      text: t("iPads.descriptionTwo"),
    },
    devices: [
      { id: "ipad-pro-13-m4", name: "iPad Pro 13-inch M4", type: "Tablet" },
      { id: "ipad-pro-11-m4", name: "iPad Pro 11-inch M4", type: "Tablet" },
      { id: "ipad-air-13-m2", name: "iPad Air 13-inch M2", type: "Tablet" },
      { id: "ipad-air-11-m2", name: "iPad Air 11-inch M2", type: "Tablet" },
      {
        id: "ipad-pro-12-9-6",
        name: "iPad Pro 12.9-inch 6th gen",
        type: "Tablet",
      },

      { id: "ipad-pro-11-4", name: "iPad Pro 11-inch 4th gen", type: "Tablet" },
      { id: "ipad-air-5", name: "iPad Air 5th gen", type: "Tablet" },
      { id: "ipad-10", name: "iPad 10th gen", type: "Tablet" },
      { id: "ipad-mini-6", name: "iPad mini 6th gen", type: "Tablet" },
      {
        id: "ipad-pro-12-9-5",
        name: "iPad Pro 12.9-inch 5th gen",
        type: "Tablet",
      },

      { id: "ipad-pro-11-3", name: "iPad Pro 11-inch 3rd gen", type: "Tablet" },
      { id: "ipad-air-4", name: "iPad Air 4th gen", type: "Tablet" },
      { id: "ipad-9", name: "iPad 9th gen", type: "Tablet" },
      {
        id: "ipad-pro-12-9-4",
        name: "iPad Pro 12.9-inch 4th gen",
        type: "Tablet",
      },
      { id: "ipad-pro-11-2", name: "iPad Pro 11-inch 2nd gen", type: "Tablet" },

      { id: "ipad-8", name: "iPad 8th gen", type: "Tablet" },
      { id: "ipad-7", name: "iPad 7th gen", type: "Tablet" },
      { id: "ipad-air-3", name: "iPad Air 3rd gen", type: "Tablet" },
      { id: "ipad-mini-5", name: "iPad mini 5th gen", type: "Tablet" },
      {
        id: "ipad-pro-12-9-3",
        name: "iPad Pro 12.9-inch 3rd gen",
        type: "Tablet",
      },

      { id: "ipad-pro-11-1", name: "iPad Pro 11-inch 1st gen", type: "Tablet" },
    ],
  },
  {
    id: "samsung-galaxy",
    heading: t("Samsung.heading"),
    description:
    t("Samsung.description"),
    infoBox: {
      text: t("Samsung.descriptionTwo"),
    },
    devices: [
      { id: "galaxy-s25-ultra", name: "Galaxy S25 Ultra", type: "Smartphone" },
      { id: "galaxy-s25-plus", name: "Galaxy S25+", type: "Smartphone" },
      { id: "galaxy-s25", name: "Galaxy S25", type: "Smartphone" },
      { id: "galaxy-s24-ultra", name: "Galaxy S24 Ultra", type: "Smartphone" },
      { id: "galaxy-s24-plus", name: "Galaxy S24+", type: "Smartphone" },

      { id: "galaxy-s24", name: "Galaxy S24", type: "Smartphone" },
      { id: "galaxy-s24-fe", name: "Galaxy S24 FE", type: "Smartphone" },
      { id: "galaxy-s23-ultra", name: "Galaxy S23 Ultra", type: "Smartphone" },
      { id: "galaxy-s23-plus", name: "Galaxy S23+", type: "Smartphone" },
      { id: "galaxy-s23", name: "Galaxy S23", type: "Smartphone" },

      { id: "galaxy-s23-fe", name: "Galaxy S23 FE", type: "Smartphone" },
      { id: "galaxy-s22-ultra", name: "Galaxy S22 Ultra", type: "Smartphone" },
      { id: "galaxy-s22-plus", name: "Galaxy S22+", type: "Smartphone" },
      { id: "galaxy-s22", name: "Galaxy S22", type: "Smartphone" },
      {
        id: "galaxy-s21-ultra-5g",
        name: "Galaxy S21 Ultra 5G",
        type: "Smartphone",
      },

      { id: "galaxy-s21-plus-5g", name: "Galaxy S21+ 5G", type: "Smartphone" },
      { id: "galaxy-s21-5g", name: "Galaxy S21 5G", type: "Smartphone" },
      { id: "galaxy-s21-fe-5g", name: "Galaxy S21 FE 5G", type: "Smartphone" },
      {
        id: "galaxy-s20-ultra-5g",
        name: "Galaxy S20 Ultra 5G",
        type: "Smartphone",
      },
      { id: "galaxy-s20-plus-5g", name: "Galaxy S20+ 5G", type: "Smartphone" },

      { id: "galaxy-s20-5g", name: "Galaxy S20 5G", type: "Smartphone" },
      { id: "galaxy-s20-fe-5g", name: "Galaxy S20 FE 5G", type: "Smartphone" },
      { id: "galaxy-z-fold6", name: "Galaxy Z Fold6", type: "Smartphone" },
      { id: "galaxy-z-flip6", name: "Galaxy Z Flip6", type: "Smartphone" },
      { id: "galaxy-z-fold5", name: "Galaxy Z Fold5", type: "Smartphone" },

      { id: "galaxy-z-flip5", name: "Galaxy Z Flip5", type: "Smartphone" },
      { id: "galaxy-z-fold4", name: "Galaxy Z Fold4", type: "Smartphone" },
      { id: "galaxy-z-flip4", name: "Galaxy Z Flip4", type: "Smartphone" },
      {
        id: "galaxy-z-fold3-5g",
        name: "Galaxy Z Fold3 5G",
        type: "Smartphone",
      },
      {
        id: "galaxy-z-flip3-5g",
        name: "Galaxy Z Flip3 5G",
        type: "Smartphone",
      },

      {
        id: "galaxy-z-fold2-5g",
        name: "Galaxy Z Fold2 5G",
        type: "Smartphone",
      },
      { id: "galaxy-z-flip-5g", name: "Galaxy Z Flip 5G", type: "Smartphone" },
      { id: "galaxy-z-flip", name: "Galaxy Z Flip", type: "Smartphone" },
      { id: "galaxy-n20-ultra", name: "Galaxy N20 Ultra", type: "Smartphone" },
      { id: "galaxy-note20-5g", name: "Galaxy Note20 5G", type: "Smartphone" },

      { id: "galaxy-a55-5g", name: "Galaxy A55 5G", type: "Smartphone" },
      { id: "galaxy-a54-5g", name: "Galaxy A54 5G", type: "Smartphone" },
      { id: "galaxy-a35-5g", name: "Galaxy A35 5G", type: "Smartphone" },
      { id: "galaxy-a34-5g", name: "Galaxy A34 5G", type: "Smartphone" },
    ],
  },
  {
    id: "google-pixel",
    heading:   t("GooglePixel.heading"),
    description:
      t("GooglePixel.description"),
    infoBox: {
   text: t("GooglePixel.descriptionTwo"),
    },
    devices: [
      { id: "pixel-10-pro-xl", name: "Pixel 10 Pro XL", type: "Smartphone" },
      { id: "pixel-10-pro", name: "Pixel 10 Pro", type: "Smartphone" },
      { id: "pixel-10", name: "Pixel 10", type: "Smartphone" },
      { id: "pixel-9-pro-fold", name: "Pixel 9 Pro Fold", type: "Smartphone" },
      { id: "pixel-9-pro-xl", name: "Pixel 9 Pro XL", type: "Smartphone" },

      { id: "pixel-9-pro", name: "Pixel 9 Pro", type: "Smartphone" },
      { id: "pixel-9", name: "Pixel 9", type: "Smartphone" },
      { id: "pixel-8-pro", name: "Pixel 8 Pro", type: "Smartphone" },
      { id: "pixel-8a", name: "Pixel 8a", type: "Smartphone" },
      { id: "pixel-8", name: "Pixel 8", type: "Smartphone" },

      { id: "pixel-fold", name: "Pixel Fold", type: "Smartphone" },
      { id: "pixel-7-pro", name: "Pixel 7 Pro", type: "Smartphone" },
      { id: "pixel-7a", name: "Pixel 7a", type: "Smartphone" },
      { id: "pixel-7", name: "Pixel 7", type: "Smartphone" },
      { id: "pixel-6-pro", name: "Pixel 6 Pro", type: "Smartphone" },

      { id: "pixel-6a", name: "Pixel 6a", type: "Smartphone" },
      { id: "pixel-6", name: "Pixel 6", type: "Smartphone" },
      { id: "pixel-5a-5g", name: "Pixel 5a 5G", type: "Smartphone" },
      { id: "pixel-5", name: "Pixel 5", type: "Smartphone" },
      { id: "pixel-4a-5g", name: "Pixel 4a 5G", type: "Smartphone" },

      { id: "pixel-4a", name: "Pixel 4a", type: "Smartphone" },
      { id: "pixel-4-xl", name: "Pixel 4 XL", type: "Smartphone" },
      { id: "pixel-4", name: "Pixel 4", type: "Smartphone" },
      { id: "pixel-3a-xl", name: "Pixel 3a XL", type: "Smartphone" },
      { id: "pixel-3a", name: "Pixel 3a", type: "Smartphone" },

      { id: "pixel-3-xl", name: "Pixel 3 XL", type: "Smartphone" },
      { id: "pixel-3", name: "Pixel 3", type: "Smartphone" },
      { id: "pixel-2-xl", name: "Pixel 2 XL", type: "Smartphone" },
      { id: "pixel-2", name: "Pixel 2", type: "Smartphone" },
    ],
  },
  {
    id: "huawei",
    heading: t("Huawei.heading"),
    description:
     t("Huawei.description"),
    infoBox: {
      text: t("Huawei.descriptionTwo"),
    },
    devices: [
      { id: "pura-70-ultra", name: "Pura 70 Ultra", type: "Smartphone" },
      { id: "pura-70-pro", name: "Pura 70 Pro", type: "Smartphone" },
      { id: "pura-70", name: "Pura 70", type: "Smartphone" },
      { id: "mate-60-pro-plus", name: "Mate 60 Pro+", type: "Smartphone" },
      { id: "mate-60-pro", name: "Mate 60 Pro", type: "Smartphone" },

      { id: "p60-pro", name: "P60 Pro", type: "Smartphone" },
      { id: "p50-pro", name: "P50 Pro", type: "Smartphone" },
      { id: "mate-40-pro", name: "Mate 40 Pro", type: "Smartphone" },
      { id: "p40-pro-plus", name: "P40 Pro+", type: "Smartphone" },
      { id: "p40-pro", name: "P40 Pro", type: "Smartphone" },

      { id: "p40", name: "P40", type: "Smartphone" },
    ],
  },
  {
    id: "oppo",
 heading: t("Oppo.heading"),
    description:
     t("Oppo.description"),
    infoBox: {
      text: t("Oppo.descriptionTwo"),
    },
    devices: [
      { id: "find-x7-ultra", name: "Find X7 Ultra", type: "Smartphone" },
      { id: "find-x7-pro", name: "Find X7 Pro", type: "Smartphone" },
      { id: "find-x7", name: "Find X7", type: "Smartphone" },
      { id: "find-x6-pro", name: "Find X6 Pro", type: "Smartphone" },
      { id: "find-x6", name: "Find X6", type: "Smartphone" },

      { id: "find-x6-lite", name: "Find X6 Lite", type: "Smartphone" },
      { id: "find-n3-flip", name: "Find N3 Flip", type: "Smartphone" },
      { id: "find-n3", name: "Find N3", type: "Smartphone" },
      { id: "find-x5-pro", name: "Find X5 Pro", type: "Smartphone" },
      { id: "find-x5", name: "Find X5", type: "Smartphone" },

      { id: "find-x5-lite", name: "Find X5 Lite", type: "Smartphone" },
      { id: "find-n2-flip", name: "Find N2 Flip", type: "Smartphone" },
      { id: "find-x3-pro", name: "Find X3 Pro", type: "Smartphone" },
      { id: "find-x3", name: "Find X3", type: "Smartphone" },
      { id: "find-x3-lite", name: "Find X3 Lite", type: "Smartphone" },

      { id: "reno-12-pro-plus", name: "Reno 12 Pro+", type: "Smartphone" },
      { id: "reno-12-pro", name: "Reno 12 Pro", type: "Smartphone" },
      { id: "reno-12", name: "Reno 12", type: "Smartphone" },
      { id: "reno-11-pro-plus", name: "Reno 11 Pro+", type: "Smartphone" },
      { id: "reno-11-pro", name: "Reno 11 Pro", type: "Smartphone" },

      { id: "reno-11", name: "Reno 11", type: "Smartphone" },
      { id: "reno-10-pro-plus", name: "Reno 10 Pro+", type: "Smartphone" },
      { id: "reno-10-pro", name: "Reno 10 Pro", type: "Smartphone" },
      { id: "reno-10", name: "Reno 10", type: "Smartphone" },
      { id: "reno-9a", name: "Reno 9A", type: "Smartphone" },

      { id: "reno-8-pro", name: "Reno 8 Pro", type: "Smartphone" },
      { id: "reno-8", name: "Reno 8", type: "Smartphone" },
      { id: "reno-7-pro", name: "Reno 7 Pro", type: "Smartphone" },
      { id: "reno-7", name: "Reno 7", type: "Smartphone" },
      { id: "reno-7a", name: "Reno 7A", type: "Smartphone" },

      { id: "reno-6-pro", name: "Reno 6 Pro", type: "Smartphone" },
      { id: "reno-6", name: "Reno 6", type: "Smartphone" },
      { id: "reno-5a", name: "Reno 5A", type: "Smartphone" },
      { id: "a98-5g", name: "A98 5G", type: "Smartphone" },
      { id: "a97-5g", name: "A97 5G", type: "Smartphone" },

      { id: "a79-5g", name: "A79 5G", type: "Smartphone" },
      { id: "a78-5g", name: "A78 5G", type: "Smartphone" },
      { id: "a55s-5g", name: "A55s 5G", type: "Smartphone" },
    ],
  },
  {
    id: "sony",
 heading: t("Sony.heading"),
    description:
     t("Sony.description"),
    infoBox: {
      text: t("Sony.descriptionTwo"),
    },
    devices: [
      { id: "xperia-1-vi", name: "Xperia 1 VI", type: "Smartphone" },
      { id: "xperia-10-vi", name: "Xperia 10 VI", type: "Smartphone" },
      { id: "xperia-1-v", name: "Xperia 1 V", type: "Smartphone" },
      { id: "xperia-5-v", name: "Xperia 5 V", type: "Smartphone" },
      { id: "xperia-10-v", name: "Xperia 10 V", type: "Smartphone" },

      { id: "xperia-1-iv", name: "Xperia 1 IV", type: "Smartphone" },
      { id: "xperia-5-iv", name: "Xperia 5 IV", type: "Smartphone" },
      { id: "xperia-10-iv", name: "Xperia 10 IV", type: "Smartphone" },
      { id: "xperia-pro-i", name: "Xperia Pro-I", type: "Smartphone" },
      { id: "xperia-1-iii", name: "Xperia 1 III", type: "Smartphone" },

      { id: "xperia-5-iii", name: "Xperia 5 III", type: "Smartphone" },
      {
        id: "xperia-10-iii-lite",
        name: "Xperia 10 III Lite",
        type: "Smartphone",
      },
      { id: "xperia-ace-iii", name: "Xperia Ace III", type: "Smartphone" },
    ],
  },
  {
    id: "xiaomi",
 heading: t("Xiaomi.heading"),
    description:
     t("Xiaomi.description"),
    infoBox: {
      text: t("Xiaomi.descriptionTwo"),
    },
    devices: [
      { id: "xiaomi-15-ultra", name: "15 Ultra", type: "Smartphone" },
      { id: "xiaomi-15-pro", name: "15 Pro", type: "Smartphone" },
      { id: "xiaomi-15", name: "15", type: "Smartphone" },
      { id: "xiaomi-14t-pro", name: "14T Pro", type: "Smartphone" },
      { id: "xiaomi-14t", name: "14T", type: "Smartphone" },

      { id: "xiaomi-14-ultra", name: "14 Ultra", type: "Smartphone" },
      { id: "xiaomi-14-pro", name: "14 Pro", type: "Smartphone" },
      { id: "xiaomi-14", name: "14", type: "Smartphone" },
      { id: "xiaomi-13t-pro", name: "13T Pro", type: "Smartphone" },
      { id: "xiaomi-13t", name: "13T", type: "Smartphone" },

      { id: "xiaomi-13-ultra", name: "13 Ultra", type: "Smartphone" },
      { id: "xiaomi-13-pro", name: "13 Pro", type: "Smartphone" },
      { id: "xiaomi-13-lite", name: "13 Lite", type: "Smartphone" },
      { id: "xiaomi-13", name: "13", type: "Smartphone" },
      { id: "xiaomi-12t-pro", name: "12T Pro", type: "Smartphone" },

      { id: "xiaomi-12t", name: "12T", type: "Smartphone" },
      { id: "xiaomi-12-pro", name: "12 Pro", type: "Smartphone" },
      { id: "xiaomi-12", name: "12", type: "Smartphone" },
    ],
  },
  {
    id: "motorola",
 heading: t("Motorola.heading"),
    description:
     t("Motorola.description"),
    infoBox: {
      text: t("Motorola.descriptionTwo"),
    },
    devices: [
      { id: "razr-60-ultra", name: "Razr 60 Ultra", type: "Smartphone" },
      { id: "razr-60-plus", name: "Razr 60+", type: "Smartphone" },
      { id: "razr-60", name: "Razr 60", type: "Smartphone" },
      { id: "edge-70", name: "Edge 70", type: "Smartphone" },
      { id: "edge-60-pro", name: "Edge 60 Pro", type: "Smartphone" },

      { id: "edge-60-neo", name: "Edge 60 Neo", type: "Smartphone" },
      { id: "edge-60-stylus", name: "Edge 60 Stylus", type: "Smartphone" },
      { id: "edge-60-fusion", name: "Edge 60 Fusion", type: "Smartphone" },
      { id: "thinkphone-25", name: "ThinkPhone 25", type: "Smartphone" },
      {
        id: "moto-g-power-2025",
        name: "Moto G Power 2025",
        type: "Smartphone",
      },

      {
        id: "moto-g-stylus-5g-2025",
        name: "Moto G Stylus 5G 2025",
        type: "Smartphone",
      },
      { id: "moto-g-2025", name: "Moto G 2025", type: "Smartphone" },
      { id: "edge-2025", name: "Edge 2025", type: "Smartphone" },
      { id: "razr-plus-2024", name: "Razr+ 2024", type: "Smartphone" },
      { id: "razr-2024", name: "Razr 2024", type: "Smartphone" },

      {
        id: "moto-g86-power-5g",
        name: "Moto G86 Power 5G",
        type: "Smartphone",
      },
      { id: "moto-g86-5g", name: "Moto G86 5G", type: "Smartphone" },
      { id: "moto-g75", name: "Moto G75", type: "Smartphone" },
      { id: "moto-g56-5g", name: "Moto G56 5G", type: "Smartphone" },
      { id: "moto-g55", name: "Moto G55", type: "Smartphone" },

      { id: "moto-g54-power", name: "Moto G54 Power", type: "Smartphone" },
      { id: "moto-g54", name: "Moto G54", type: "Smartphone" },
      { id: "moto-g53-5g", name: "Moto G53 5G", type: "Smartphone" },
      { id: "moto-g35", name: "Moto G35", type: "Smartphone" },
      { id: "moto-g34", name: "Moto G34", type: "Smartphone" },

      { id: "edge-50-ultra", name: "Edge 50 Ultra", type: "Smartphone" },
      { id: "edge-50-pro", name: "Edge 50 Pro", type: "Smartphone" },
      { id: "edge-50-fusion", name: "Edge 50 Fusion", type: "Smartphone" },
      { id: "edge-50-neo", name: "Edge 50 Neo", type: "Smartphone" },
      { id: "edge-50", name: "Edge 50", type: "Smartphone" },

      { id: "razr-40-ultra", name: "Razr 40 Ultra", type: "Smartphone" },
      { id: "razr-40", name: "Razr 40", type: "Smartphone" },
      { id: "edge-40-neo", name: "Edge 40 Neo", type: "Smartphone" },
      { id: "edge-40-pro", name: "Edge 40 Pro", type: "Smartphone" },
      { id: "edge-40", name: "Edge 40", type: "Smartphone" },

      { id: "edge-plus-2023", name: "Edge+ 2023", type: "Smartphone" },
      { id: "thinkphone", name: "ThinkPhone", type: "Smartphone" },
      { id: "razr-2022", name: "Razr 2022", type: "Smartphone" },
      { id: "edge-plus-2022", name: "Edge+ 2022", type: "Smartphone" },
      { id: "edge-30-ultra", name: "Edge 30 Ultra", type: "Smartphone" },

      { id: "edge-30-pro", name: "Edge 30 Pro", type: "Smartphone" },
      { id: "edge-30", name: "Edge 30", type: "Smartphone" },
      { id: "edge-30-fusion", name: "Edge 30 Fusion", type: "Smartphone" },
      { id: "razr-5g", name: "Razr 5G", type: "Smartphone" },
      { id: "razr-2019", name: "Razr 2019", type: "Smartphone" },
    ],
  },
  {
    id: "honor",
 heading: t("Honor.heading"),
    description:
     t("Honor.description"),
    infoBox: {
      text: t("Honor.descriptionTwo"),
    },
    devices: [
      { id: "honor-200", name: "Honor 200", type: "Smartphone" },
      { id: "honor-200-pro", name: "Honor 200 Pro", type: "Smartphone" },
      { id: "honor-90", name: "Honor 90", type: "Smartphone" },
      { id: "magic-v3", name: "Magic V3", type: "Smartphone" },

      { id: "magic-v2", name: "Magic V2", type: "Smartphone" },
      { id: "honor-x8", name: "Honor X8", type: "Smartphone" },
      { id: "magic-6-pro", name: "Magic 6 Pro", type: "Smartphone" },
      { id: "magic-5-pro", name: "Magic 5 Pro", type: "Smartphone" },

      { id: "magic-4-pro", name: "Magic 4 Pro", type: "Smartphone" },
    ],
  },
  {
    id: "lenovo",
 heading: t("Lenovo.heading"),
    description:
     t("Lenovo.description"),
    infoBox: {
      text: t("Lenovo.descriptionTwo"),
    },
    devices: [
      {
        id: "thinkpad-x1-titanium-yoga",
        name: "ThinkPad X1 Titanium Yoga 2-in-1",
        type: "Laptop",
      },
      {
        id: "thinkpad-x1-carbon-gen7-12",
        name: "ThinkPad X1 Carbon (Gen 7–Gen 12)",
        type: "Laptop",
      },
      {
        id: "thinkpad-x1-yoga-gen4-8",
        name: "ThinkPad X1 Yoga (Gen 4–Gen 8)",
        type: "Laptop",
      },
      {
        id: "thinkpad-x1-nano-gen1-3",
        name: "ThinkPad X1 Nano (Gen 1–Gen 3)",
        type: "Laptop",
      },
      {
        id: "thinkpad-x1-fold",
        name: "ThinkPad X1 Fold",
        type: "Laptop",
      },
      {
        id: "thinkpad-x12-detachable",
        name: "ThinkPad X12 Detachable",
        type: "Laptop",
      },
      {
        id: "thinkpad-t14s-gen3",
        name: "ThinkPad T14s Gen 3",
        type: "Laptop",
      },

      {
        id: "ideapad-flex-5g",
        name: "Lenovo IdeaPad Flex 5G",
        type: "Laptop",
      },
      {
        id: "yoga-c630",
        name: "Lenovo Yoga C630",
        type: "Laptop",
      },
      {
        id: "miix-630",
        name: "Lenovo Miix 630",
        type: "Laptop",
      },
      {
        id: "yoga-520",
        name: "Lenovo Yoga 520",
        type: "Laptop",
      },
      {
        id: "yoga-720",
        name: "Lenovo Yoga 720 2-in-1",
        type: "Laptop",
      },
    ],
  },
  {
    id: "microsoft",
 heading: t("Microsoft.heading"),
    description:
     t("Microsoft.description"),
    infoBox: {
      text: t("Microsoft.descriptionTwo"),
    },
    devices: [
      { id: "surface-pro-x", name: "Surface Pro X", type: "Tablet" },
      { id: "surface-pro-9-5g", name: "Surface Pro 9 with 5G", type: "Tablet" },
      { id: "surface-pro-8", name: "Surface Pro 8", type: "Tablet" },
      { id: "surface-pro-8-lte", name: "Surface Pro 8 LTE", type: "Tablet" },
      {
        id: "surface-pro-7-plus-lte",
        name: "Surface Pro 7+ (LTE/eSIM)",
        type: "Tablet",
      },
      {
        id: "surface-pro-5-lte-advanced",
        name: "Surface Pro LTE / Surface Pro 5 LTE Advanced",
        type: "Tablet",
      },
      {
        id: "surface-pro-lte-advanced",
        name: "Surface Pro LTE Advanced",
        type: "Tablet",
      },

      {
        id: "surface-go-2-lte",
        name: "Surface Go 2 (LTE/eSIM)",
        type: "Tablet",
      },
      { id: "surface-go-3-lte", name: "Surface Go 3 with LTE", type: "Tablet" },

      {
        id: "surface-laptop-4-lte",
        name: "Surface Laptop 4 (LTE/eSIM)",
        type: "Laptop",
      },
      {
        id: "surface-laptop-5-lte",
        name: "Surface Laptop 5 (LTE models)",
        type: "Laptop",
      },
      {
        id: "surface-laptop-studio",
        name: "Surface Laptop Studio",
        type: "Laptop",
      },
      {
        id: "surface-laptop-studio-2",
        name: "Surface Laptop Studio 2",
        type: "Laptop",
      },

      { id: "surface-duo", name: "Surface Duo", type: "Smartphone" },
      { id: "surface-duo-2", name: "Surface Duo 2", type: "Smartphone" },
    ],
  },
  {
    id: "dell",
 heading: t("Dell.heading"),
    description:
     t("Dell.description"),
    infoBox: {
      text: t("Dell.descriptionTwo"),
    },
    devices: [
      {
        id: "dell-latitude-7210-2in1",
        name: "Dell Latitude 7210 2-in-1",
        type: "Laptop",
      },
      { id: "dell-latitude-7310", name: "Dell Latitude 7310", type: "Laptop" },
      { id: "dell-latitude-7320", name: "Dell Latitude 7320", type: "Laptop" },
      { id: "dell-latitude-7410", name: "Dell Latitude 7410", type: "Laptop" },
      { id: "dell-latitude-7420", name: "Dell Latitude 7420", type: "Laptop" },
      { id: "dell-latitude-7440", name: "Dell Latitude 7440", type: "Laptop" },
      { id: "dell-latitude-9410", name: "Dell Latitude 9410", type: "Laptop" },
      { id: "dell-latitude-9420", name: "Dell Latitude 9420", type: "Laptop" },
      { id: "dell-latitude-9430", name: "Dell Latitude 9430", type: "Laptop" },
      { id: "dell-latitude-9440", name: "Dell Latitude 9440", type: "Laptop" },
      { id: "dell-latitude-9510", name: "Dell Latitude 9510", type: "Laptop" },
      { id: "dell-latitude-5410", name: "Dell Latitude 5410", type: "Laptop" },
      { id: "dell-latitude-5420", name: "Dell Latitude 5420", type: "Laptop" },
      { id: "dell-latitude-5411", name: "Dell Latitude 5411", type: "Laptop" },
      { id: "dell-latitude-5511", name: "Dell Latitude 5511", type: "Laptop" },
      {
        id: "dell-latitude-7340-ultralight",
        name: "Dell Latitude 7340 Ultralight",
        type: "Laptop",
      },
      {
        id: "dell-xps-13-plus-9320",
        name: "Dell XPS 13 Plus 9320",
        type: "Laptop",
      },
      {
        id: "dell-precision-5570",
        name: "Dell Precision 5570",
        type: "Laptop",
      },
    ],
  },
  {
    id: "hp",
 heading: t("Hp.heading"),
    description:
     t("Hp.description"),
    infoBox: {
      text: t("Hp.descriptionTwo"),
    },
    devices: [
      { id: "hp-elitebook-g5", name: "HP EliteBook G5", type: "Laptop" },
      { id: "hp-probook-g5", name: "HP ProBook G5", type: "Laptop" },
      {
        id: "hp-zbook-g5",
        name: "HP ZBook G5",
        type: "Laptop",
      },
      {
        id: "hp-spectre-folio-13",
        name: "HP Spectre Folio 13",
        type: "Laptop",
      },
      {
        id: "hp-spectre-x360",
        name: "HP Spectre x360 Convertible",
        type: "Laptop",
      },
      {
        id: "hp-elite-dragonfly",
        name: "HP Elite Dragonfly / Elite Dragonfly G2",
        type: "Laptop",
      },
      {
        id: "hp-elite-folio-13",
        name: "HP Elite Folio 13 / Elite Folio 2-in-1",
        type: "Laptop",
      },
      {
        id: "hp-elitebook-840-aero-g8",
        name: "HP EliteBook 840 Aero G8",
        type: "Laptop",
      },
      { id: "hp-zbook-5g", name: "HP ZBook 5G", type: "Laptop" },
      { id: "hp-probook-5g", name: "HP ProBook 5G", type: "Laptop" },
      { id: "hp-elitebook-5g", name: "HP EliteBook 5G", type: "Laptop" },
    ],
  },
  {
    id: "other-laptops",
 heading: t("OtherLaptops.heading"),
    description:
     t("OtherLaptops.description"),
    infoBox: {
      text: t("OtherLaptops.descriptionTwo"),
    },
    devices: [
      // Acer
      { id: "acer-swift-3", name: "Acer Swift 3", type: "Laptop" },
      { id: "acer-swift-7", name: "Acer Swift 7", type: "Laptop" },
      { id: "acer-travelmate-p2", name: "Acer TravelMate P2", type: "Laptop" },
      {
        id: "acer-travelmate-spin-p4",
        name: "Acer TravelMate Spin P4",
        type: "Laptop",
      },
      { id: "acer-travelmate-p6", name: "Acer TravelMate P6", type: "Laptop" },
      {
        id: "acer-chromebook-spin-511",
        name: "Acer Chromebook Spin 511",
        type: "Laptop",
      },
      {
        id: "acer-chromebook-spin-513",
        name: "Acer Chromebook Spin 513",
        type: "Laptop",
      },

      // ASUS
      {
        id: "asus-transformer-mini-t103haf",
        name: "ASUS Mini Transformer T103HAF",
        type: "Laptop",
      },
      {
        id: "asus-novago-tp370ql",
        name: "ASUS NovaGo TP370QL",
        type: "Laptop",
      },
      {
        id: "asus-vivobook-flip-14",
        name: "ASUS VivoBook Flip 14 TP401NA",
        type: "Laptop",
      },

      // Microsoft Surface
      {
        id: "surface-pro-lte-advanced",
        name: "Surface Pro LTE Advanced",
        type: "Tablet",
      },
      { id: "surface-pro-x", name: "Surface Pro X", type: "Tablet" },
      {
        id: "surface-pro-7-plus-lte",
        name: "Surface Pro 7+ (LTE)",
        type: "Tablet",
      },
      { id: "surface-pro-8-lte", name: "Surface Pro 8 (LTE)", type: "Tablet" },
      { id: "surface-pro-9-5g", name: "Surface Pro 9 with 5G", type: "Tablet" },
      { id: "surface-go-2-lte", name: "Surface Go 2 (LTE)", type: "Tablet" },
    ],
  },
  {
    id: "watches",
 heading: t("Watches.heading"),
    description:
     t("Watches.description"),
    infoBox: {
      text: t("Watches.descriptionTwo"),
    },
    devices: [
      // Apple Watch (GPS + Cellular)
      {
        id: "apple-watch-series-9",
        name: "Apple Watch Series 9 (GPS + Cellular)",
        type: "Watch",
      },
      {
        id: "apple-watch-series-8",
        name: "Apple Watch Series 8 (GPS + Cellular)",
        type: "Watch",
      },
      {
        id: "apple-watch-series-7",
        name: "Apple Watch Series 7 (GPS + Cellular)",
        type: "Watch",
      },
      {
        id: "apple-watch-series-6",
        name: "Apple Watch Series 6 (GPS + Cellular)",
        type: "Watch",
      },
      {
        id: "apple-watch-se-cellular",
        name: "Apple Watch SE (GPS + Cellular)",
        type: "Watch",
      },
      { id: "apple-watch-ultra", name: "Apple Watch Ultra", type: "Watch" },
      { id: "apple-watch-ultra-2", name: "Apple Watch Ultra 2", type: "Watch" },

      // Samsung Galaxy Watch (LTE)
      {
        id: "galaxy-watch-6-lte",
        name: "Samsung Galaxy Watch 6 LTE",
        type: "Watch",
      },
      {
        id: "galaxy-watch-6-classic-lte",
        name: "Samsung Galaxy Watch 6 Classic LTE",
        type: "Watch",
      },
      {
        id: "galaxy-watch-5-lte",
        name: "Samsung Galaxy Watch 5 LTE",
        type: "Watch",
      },
      {
        id: "galaxy-watch-5-pro-lte",
        name: "Samsung Galaxy Watch 5 Pro LTE",
        type: "Watch",
      },
      {
        id: "galaxy-watch-4-lte",
        name: "Samsung Galaxy Watch 4 LTE",
        type: "Watch",
      },
      {
        id: "galaxy-watch-4-classic-lte",
        name: "Samsung Galaxy Watch 4 Classic LTE",
        type: "Watch",
      },

      // Google Pixel Watch (Cellular)
      {
        id: "pixel-watch",
        name: "Google Pixel Watch (Cellular)",
        type: "Watch",
      },
      {
        id: "pixel-watch-2",
        name: "Google Pixel Watch 2 (Cellular)",
        type: "Watch",
      },

      // Huawei, Oppo & Other Android Watches
      { id: "huawei-watch-3", name: "Huawei Watch 3", type: "Watch" },
      { id: "huawei-watch-3-pro", name: "Huawei Watch 3 Pro", type: "Watch" },
      { id: "oppo-watch-lte", name: "Oppo Watch LTE", type: "Watch" },
      { id: "oppo-watch-2-lte", name: "Oppo Watch 2 LTE", type: "Watch" },
      {
        id: "ticwatch-pro-4g-lte",
        name: "Mobvoi TicWatch Pro 4G/LTE",
        type: "Watch",
      },
      {
        id: "ticwatch-pro-5-lte",
        name: "Mobvoi TicWatch Pro 5 LTE",
        type: "Watch",
      },
    ],
  },
  {
    id: "other-android",
 heading: t("OtherAndroid.heading"),
    description:
     t("OtherAndroid.description"),
    devices: [
      {
        id: "motorola-razr-2019",
        name: "Motorola Razr 2019",
        type: "Smartphone",
      },
      { id: "motorola-razr-5g", name: "Motorola Razr 5G", type: "Smartphone" },
      { id: "gemini-pda", name: "Gemini PDA", type: "Smartphone" },
      { id: "rakuten-mini", name: "Rakuten Mini", type: "Smartphone" },

      { id: "rakuten-bigs", name: "Rakuten BigS", type: "Smartphone" },
      { id: "oneplus-12", name: "OnePlus 12", type: "Smartphone" },
      { id: "rakuten-big", name: "Rakuten Big", type: "Smartphone" },
      { id: "rakuten-hand", name: "Rakuten Hand", type: "Smartphone" },

      { id: "rakuten-hand-5g", name: "Rakuten Hand 5G", type: "Smartphone" },
      { id: "surface-pro-x", name: "Surface Pro X", type: "Smartphone" },
      { id: "surface-duo", name: "Surface Duo", type: "Smartphone" },
      { id: "fairphone-4", name: "Fairphone 4", type: "Smartphone" },

      { id: "aquos-sense-6s", name: "Aquos Sense 6s", type: "Smartphone" },
      { id: "sharp-aquos-wish", name: "Sharp Aquos Wish", type: "Smartphone" },
      { id: "doogee-v30", name: "DOOGEE V30", type: "Smartphone" },
      { id: "nuu-mobile-x5", name: "Nuu Mobile X5", type: "Smartphone" },

      { id: "fairphone-5", name: "Fairphone 5", type: "Smartphone" },
    ],
  },

];}

export const phonesTableData = [
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone XR",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone XS",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone XS Max",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 11",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 11 Pro",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 11 Pro Max",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone SE(2020)",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 12 Mini",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 12",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 12 Pro",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 12 Pro Max",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 13 mini",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 13",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 13 Pro",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 13 Pro Max",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone SE(2022)",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 14",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 14 Plus",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 14 Pro",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 14 Pro Max",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 15",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 15 Plus",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 15 Pro",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPhone 15 Pro Max",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPad Pro (2018 and onwards)",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPad Air",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Apple",
    phoneModel: "iPad",
    NoOfeSIMs: "20",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 3",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 3a",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 4",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 4a",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 5",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 6",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 6a",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 6 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 7",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 7 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 8",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel 8 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Google",
    phoneModel: "Pixel Fold",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Huawei",
    phoneModel: "P40",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Huawei",
    phoneModel: "P40 Pro (not including the P40 Pro +)",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Huawei",
    phoneModel: "Mate 40 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Razr 2019",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Razr 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Razr 40",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Razr 40 Ultra",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Razr+",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Edge+",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Edge 40",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "Edge 40 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "G52J 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "G52J 5G  Ⅱ",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Motorola",
    phoneModel: "G53J 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Flip",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Flip 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Flip3 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Flip4",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Flip5 5G",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Fold",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Fold2 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Fold3 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Fold4",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Z Fold5 5G",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S20",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S20+ 5G",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S20 Ultra",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S20 Ultra 5G",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S21",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S21+ 5G",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S21 Ultra 5G",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S22",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S22+",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S22 Ultra",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Note 20 Ultra 5G",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy Note 20",
    NoOfeSIMs: "5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S23",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S23+",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Samsung",
    phoneModel: "Galaxy S23 Ultra",
    NoOfeSIMs: "+5",
  },
  {
    Manufacturer: "Rakuten Mobile",
    phoneModel: "Rakuten Mini",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Rakuten Mobile",
    phoneModel: "Big-S",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Rakuten Mobile",
    phoneModel: "Big",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Rakuten Mobile",
    phoneModel: "Hand",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Rakuten Mobile",
    phoneModel: "Hand 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "Find N2 Flip",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "Find X3 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "Reno 5 A",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "Find X5",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "Find X5 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "A55s 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Oppo",
    phoneModel: "Reno 6 Pro 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Xperia 10 III Lite",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Xperia 10 IV",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Xperia 10V",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Xperia 1 IV",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Xperia 5 IV",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Xperia 1 V",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sony",
    phoneModel: "Sony Xperia Ace III",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Honor",
    phoneModel: "Magic 4 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Honor",
    phoneModel: "Magic 5 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Honor",
    phoneModel: "90",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Xiaomi",
    phoneModel: "12T Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Xiaomi",
    phoneModel: "13",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Xiaomi",
    phoneModel: "13 Lite",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Xiaomi",
    phoneModel: "13 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Xiaomi",
    phoneModel: "13T Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos Sense6s",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos sense 7",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos sense 7plus",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos Wish",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos wish 2 SHG08",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos wish3",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos Sense4 lite",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos zero 6",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Simple Sumaho6",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos R7",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos R8",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Sharp",
    phoneModel: "Aquos R8 Pro",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "DOOGEE",
    phoneModel: "V30",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "OnePlus",
    phoneModel: "11",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "HAMMER",
    phoneModel: "Blade 3",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "HAMMER",
    phoneModel: "Explorer PRO",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "HAMMER",
    phoneModel: "Blade 5G",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Nokia",
    phoneModel: "XR21",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Nokia",
    phoneModel: "X30",
    NoOfeSIMs: "1",
  },
  {
    Manufacturer: "Nokia",
    phoneModel: "G60 5G",
    NoOfeSIMs: "1",
  },
];
