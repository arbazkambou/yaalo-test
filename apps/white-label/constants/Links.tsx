import { AuthLinkKey, DropdownGroup, NavLinkKey, NonAuthLink } from "@/types/keys";
import { Cpu, LogOut, Wallet } from "lucide-react";
import { ReactNode } from "react";

export const navLinks: Array<{
  labelKey: `${NavLinkKey}`;
  href: string;
}> = [
  {
    labelKey: "buyEsim",       
    href: "/destinations/",
  },
  {
    labelKey: "contactInfo",
    href: "/contact-us/",
  },
  {
    labelKey: "affiliatePartner",
    href: "/affiliate-partner/",
  },
];

export const dropdownLinks: DropdownGroup[] = [
  {
    labelKey: "more",
    items: [
      {
        labelKey: "aboutUs",
        href: "/about-us/",
      },
      {
        labelKey: "esimCompatible",
        href: "/esim-compatible-devices/",
      },
      {
        labelKey: "faqs",
        href: "/faq/",
      },
      {
        labelKey: "blog",
        href: "/blog/",
      },

    ],
  },
];

export const nonAuthLinks :NonAuthLink[] = [
  {
    labelKey: "login",
    href: "/login/",
  },
];

export const authLinks: Array<{
  labelKey: `${AuthLinkKey}`;
  svg: ReactNode;
  href: string;
}> = [
  {
    labelKey: "wallet",
    svg: <Wallet size={20} />,
    href: "/refill/",
  },
  {
    labelKey: "myEsim",
    svg: <Cpu size={20} />,
    href: "/my-esims/",
  },
  {
    labelKey: "logout",
    svg: <LogOut size={20} />,
    href: "#", 
  },
];

export const afterLoginLinks = [
  {
    labelKey: "wallet",
    href: "/refill/",
  },
  {
    labelKey: "esim",
    href: "/my-esims/",
  },
];
