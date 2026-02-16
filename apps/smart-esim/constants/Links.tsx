import { Cpu, LogOut, User, Wallet } from "lucide-react";

export const navLinks = [
  {
    label: "Buy eSIM",
    href: "/esim/",
  },
  {
    label: "About Us",
    href: "/about-us/",
  },
  {
    label: "Contact Info",
    href: "/contact-us/",
  },
];

export const dropdownLinks = [
  {
    label: "More",
    items: [
      {
        label: "eSIM Compatible Phones",
        href: "/esim-compatible/",
      },
      // {
      //   label: "International Calling",
      //   href: "/international-calling/",
      // },
      {
        label: "FAQs",
        href: "/faqs/",
      },
      // {
      //   label: "Help Center",
      //   href: "/help-center/",
      // },
      {
        label: "Blog",
        href: "/blog/",
      },

      // {
      //   label: "What is an eSIM",
      //   href: "/blog/info/what-is-esim/",
      // },
    ],
  },
];

export const nonAuthLinks = [
  {
    label: "Login",
    href: "/login/",
  },
];

export const authLinks = [
  {
    label: "Wallet",
    svg: <Wallet size={20} />,
    href: "/refill/",
  },
  {
    label: "eSIM",
    svg: <Cpu size={20} />,
    href: "/my-esims/",
  },

  {
    label: "Logout",
    svg: <LogOut size={20} />,
    href: "#",
  },
];
