"use client";

import { useThemeToggle } from "@workspace/core/hooks/theme/useThemeToggle";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import { Handshake, Mail, Smartphone } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import * as React from "react";

// Imports for consolidated components
import CartQuantityButton from "@/components/cart/CartQuantityButton";
import { AuthLinks } from "@/components/layout/AuthLinks";
import DarkModeToggle from "@/components/layout/DarkModeToggle";
import Logo from "@/components/layout/Logo";
import { navLinks } from "@/constants/Links";
import { useMediaQuery } from "@workspace/core/hooks/ui/useMediaQuery";
import { Locale, useTranslations } from "next-intl";
import { SimCardIcon } from "../ui/icons/SimCardIcon";
import DropdownLinks from "./DropdownLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const MotionLink = motion.create(Link);

const linkConfig: Record<
  string,
  {
    icon: React.ReactNode;
    gradient: string;
    iconColor: string;
    iconGradient: string;
  }
> = {
  buyEsim: {
    icon: <SimCardIcon className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
    iconGradient: "from-blue-400 to-blue-600",
  },
  contactInfo: {
    icon: <Mail className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
    iconGradient: "from-green-400 to-green-600",
  },
  affiliatePartner: {
    icon: <Handshake className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
    iconGradient: "from-red-400 to-red-600",
  },
};

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

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function FlippableAction({
  children,
  isActive,
  config = {
    gradient:
      "radial-gradient(circle, rgba(100,100,100,0.15) 0%, transparent 70%)",
    iconColor: "text-primary",
  },
}: {
  children: React.ReactNode;
  isActive?: boolean;
  config?: { gradient?: string; iconColor?: string };
}) {
  return (
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
        className="relative z-10 group-hover:pointer-events-none"
        variants={itemVariants}
        transition={sharedTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center bottom",
        }}
      >
        {children}
      </motion.div>

      {/* Back Face */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
        variants={backVariants}
        transition={sharedTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          rotateX: 90,
        }}
      >
        <div
          className={`${config.iconColor} flex items-center justify-center w-full h-full`}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Navbar({
  searchComponent,
  locale,
}: {
  searchComponent?: React.ReactNode;
  locale: Locale;
}) {
  const t = useTranslations("SharedUI.navLinks");
  const { theme } = useThemeToggle();
  const pathname = usePathname();
  const isDarkTheme = theme === "dark";
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  // Scroll detection
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (!isDesktop) {
      setIsScrolled(false);
      return;
    }
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });

  return (
    <motion.div
      className={`container mt-2 rounded-xl  z-50 transition-colors duration-300 ${
        isScrolled
          ? " shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)] bg-background/60 backdrop-blur-lg dark:bg-background/60 dark:border-border dark:border dark:bg-white/20 mt-6"
          : "border-transparent shadow-none bg-transparent"
      }`}
      animate={
        isScrolled ? { y: [0, 5, 0], scale: [1, 1.02, 1] } : { y: 0, scale: 1 }
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        y: { type: "tween", duration: 0.3 },
        scale: { type: "tween", duration: 0.3 },
      }}
      initial="initial"
      layout
    >
      <motion.div
        className={`w-full flex items-center justify-between py-4 px-4 md:px-8 transition-all duration-300`}
      >
        {/* Background Glow Container */}
        <motion.div
          className={`absolute inset-0 z-0  pointer-events-none `}
          layout
        >
          <motion.div
            className={`absolute -inset-2 bg-gradient-radial from-transparent ${
              isDarkTheme
                ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
                : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
            } to-transparent rounded-3xl z-0 pointer-events-none`}
            variants={navGlowVariants}
            animate={isScrolled ? "hover" : "initial"}
          />
        </motion.div>

        {/* Left: Logo */}

        <div className="relative z-10 pl-4 shrink-0">
          <Logo />
        </div>
        {/* Center: Nav Links */}
        <ul className=" items-center relative z-10 shrink-0 hidden xl:flex gap-2">
          {navLinks.map((link) => {
            const config = linkConfig[link.labelKey] || {
              icon: <Smartphone className="h-5 w-5" />,
              gradient:
                "radial-gradient(circle, rgba(100,100,100,0.15) 0%, rgba(100,100,100,0.06) 50%, rgba(100,100,100,0) 100%)",
              iconColor: "text-foreground",
              iconGradient: "from-foreground/50 to-foreground/80",
            };
            const isActive = pathname === link.href;

            return (
              <motion.li key={link.labelKey} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Active Link Indicator (Sliding Background) - Hidden on Hover */}
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
                  <MotionLink
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <span
                      className={`transition-all duration-300 group-hover:${config.iconColor} ${
                        isActive ? "text-primary font-600" : "text-foreground"
                      }`}
                    >
                      {config.icon}
                    </span>
                    <span
                      className={`${isActive ? "text-primary font-500" : "text-foreground"}`}
                    >
                      {t(link.labelKey)}
                    </span>
                  </MotionLink>

                  {/* Back Face */}
                  <MotionLink
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-500"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      rotateX: 90,
                    }}
                  >
                    <span
                      className={`transition-all duration-300 shrink-0 ${config.iconColor}`}
                    >
                      {config.icon}
                    </span>
                    <span className="text-foreground shrink-0">
                      {t(link.labelKey)}
                    </span>
                  </MotionLink>
                </motion.div>
              </motion.li>
            );
          })}
          <DropdownLinks />
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center relative z-10 pr-4 shrink-0 gap-2 lg:gap-2">
          <FlippableAction
            config={{
              gradient:
                "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
              iconColor: "text-green-500",
            }}
          >
            {searchComponent}
          </FlippableAction>
          <div className="hidden xl:block">
            <AuthLinks />
          </div>

          <FlippableAction
            config={{
              gradient:
                "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)",
              iconColor: "text-black-500",
            }}
          >
            <CartQuantityButton />
          </FlippableAction>

          <FlippableAction
            config={{
              gradient:
                "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
              iconColor: "text-purple-500",
            }}
          >
            <DarkModeToggle />
          </FlippableAction>
          <div className="hidden xl:block">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
