"use client";
import * as React from "react";
import { dropdownLinks } from "@/constants/Links";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@workspace/ui/components/navigation-menu";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

function DropdownLinks() {
  const pathname = usePathname();
  const t = useTranslations("SharedUI.navLinks");

  const config = {
    icon: (
      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
    ),
    gradient:
      "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.06) 50%, rgba(109, 40, 217, 0) 100%)",
    iconColor: "text-purple-500",
  };

  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList className="items-center">
        {dropdownLinks.map((item, index) => (
          <NavigationMenuItem key={index}>
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
                  className="flex items-center gap-2 px-2 py-2 relative z-10 bg-transparent transition-colors rounded-xl"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                >
                  <span
                    className={`transition-colors duration-300 group-hover:${config.iconColor} text-foreground`}
                  >
                    {config.icon}
                  </span>
                  <span className="text-foreground flex items-center gap-1">
                    {t(item.labelKey)}
                  </span>
                </motion.div>

                {/* Back Face */}
                <motion.div
                  className="flex items-center gap-2 px-2 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-500"
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
                  <span className="text-foreground shrink-0 flex items-center gap-1">
                    {t(item.labelKey)}
                  </span>
                </motion.div>
              </motion.div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-2xl shadow-xl overflow-hidden min-w-[220px] bg-background/60! backdrop-blur-lg!">
              <ul className="flex flex-col p-2 w-[250px]">
                {item.items.map((subItem, subIndex) => (
                  <NavigationMenuLink
                    className={`rounded-xl px-2 py-2 text-sm transition-all hover:bg-muted dark:hover:bg-muted focus:bg-transparent! focus:text-foreground! dark:focus:text-foreground! focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:focus:text-foreground! dark:data-[state=open]:focus:text-foreground! ${
                      subItem.href === pathname
                        ? "font-500 text-primary!"
                        : "text-foreground/80!"
                    } `}
                    asChild
                    key={subIndex}
                  >
                    <Link href={subItem.href} passHref>
                      {t(subItem.labelKey)}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DropdownLinks;
