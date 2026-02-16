"use client";

import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu";
import { Cpu, LogOut, UserIcon, Wallet, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
      scale: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
      },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function AccountMenu() {
  const pathname = usePathname();
  const t = useTranslations("SharedUI.navLinks");
  const { logOut } = useAuth();

  const authLinks = [
    {
      key: "wallet",
      label: t("wallet"),
      svg: <Wallet size={100} className="shrink-0" />,
      href: "/refill/",
    },
    {
      key: "esim",
      label: t("esim"),
      svg: <Cpu size={100} className="shrink-0 " />,
      href: "/my-esims/",
    },
    {
      key: "logout",
      label: t("logout"),
      svg: <LogOut size={24} className="shrink-0" />,
      href: "",
    },
  ];

  const config = {
    icon: <UserIcon className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(29, 78, 216, 0) 100%)",
    iconColor: "text-blue-500",
  };

  const isActive = authLinks.some(
    (link) => link.href !== "" && pathname === link.href,
  );

  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={(e) => e.preventDefault()}
            className="group relative h-auto bg-transparent! p-0 hover:bg-transparent! focus:bg-transparent! data-[state=open]:bg-transparent! border-none overflow-visible"
            showIcon={false}
          >
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              {/* Active Link Indicator (Sliding Background) */}
              {isActive && (
                <motion.div
                  layoutId="active-link"
                  className="absolute inset-0 z-0 rounded-xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, var(--bg-primary) 0%, transparent 70%)",
                  }}
                  variants={{
                    initial: { opacity: 0.15, scale: 2 },
                    hover: { opacity: 0, scale: 1.8 },
                  }}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                />
              )}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                variants={glowVariants}
                style={{
                  background: config.gradient,
                  opacity: 0,
                }}
              />

              {/* Front Face */}
              <motion.div
                className="flex items-center gap-2 py-2 relative z-10 bg-transparent transition-colors rounded-xl font-500"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
              >
                <span
                  className={`transition-all duration-300 group-hover:${config.iconColor} ${isActive ? "text-primary font-600" : "text-foreground"}`}
                >
                  {config.icon}
                </span>
                <span
                  className={`flex items-center gap-1 ${isActive ? "text-primary font-600" : "text-foreground font-500"}`}
                >
                  {t("account")}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180 ${isActive ? "text-primary" : ""}`}
                  />
                </span>
              </motion.div>

              {/* Back Face */}
              <motion.div
                className="flex items-center gap-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl font-500"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  rotateX: 90,
                }}
              >
                <span
                  className={`transition-all duration-300 ${config.iconColor} shrink-0`}
                >
                  {config.icon}
                </span>
                <span className="text-foreground flex items-center gap-1 font-500 shrink-0">
                  {t("account")}
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </span>
              </motion.div>
            </motion.div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex h-full w-[180px] flex-col p-1.5">
              {authLinks.map((item, subIndex) => (
                <NavigationMenuLink
                  className={`rounded-sm px-2 py-1.5 text-sm transition-all hover:bg-muted dark:hover:bg-muted focus:bg-transparent! focus:text-foreground! dark:focus:text-foreground! focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:focus:text-foreground! dark:data-[state=open]:focus:text-foreground! ${
                    item.href === pathname
                      ? "font-500 text-primary! bg-transparent dark:text-primary-foreground"
                      : "text-foreground dark:text-foreground/90"
                  } `}
                  asChild
                  key={subIndex}
                  onClick={(e) => {
                    if (item.key !== "logout") return;
                    e.preventDefault();
                    logOut();
                  }}
                >
                  <Link
                    href={item.href}
                    passHref
                    className="flex hover:text-foreground flex-row items-center gap-2 w-full [&_svg]:h-6 [&_svg]:w-6"
                  >
                    {item.svg}
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default AccountMenu;
