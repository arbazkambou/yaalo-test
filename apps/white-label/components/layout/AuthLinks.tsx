"use client";
import NavSkelton from "@/components/ui/skeltons/NavSkelton";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { cn } from "@workspace/ui/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import AccountMenu from "./AccountMenu";
import { User } from "lucide-react";
import { useTranslations } from "next-intl";
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

export function AuthLinks() {
  const { isAuthLoading, isAuthenticated, logOut } = useAuth();
  const pathname = usePathname();
  const t = useTranslations("SharedUI.navLinks");

  const config = {
    icon: <User size={18} />,
    gradient:
      "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(29, 78, 216, 0) 100%)",
    iconColor: "text-blue-500",
  };

  if (isAuthLoading) return <NavSkelton />;
  if (isAuthenticated) return <AccountMenu />;

  return (
    <motion.div
      className="block rounded-xl overflow-visible group relative"
      style={{ perspective: "600px" }}
      whileHover="hover"
      initial="initial"
    >
      {/* Active Link Indicator (Sliding Background) */}
      {pathname === "/login/" && (
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
      <Link
        href="/login/"
        className={cn(
          "flex items-center gap-2 py-2 relative z-10 bg-transparent transition-colors rounded-xl font-500",
          pathname === "/login/" ? "text-primary" : "text-foreground",
        )}
      >
        <motion.div
          variants={itemVariants}
          transition={sharedTransition}
          className="flex items-center gap-2"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <span
            className={`transition-all duration-300 group-hover:${config.iconColor} ${pathname === "/login/" ? "text-primary" : "text-foreground"}`}
          >
            {config.icon}
          </span>
          <span>{t("login")}</span>
        </motion.div>
      </Link>

      {/* Back Face */}
      <Link
        href="/login/"
        className="flex items-center gap-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl font-500"
      >
        <motion.div
          variants={backVariants}
          transition={sharedTransition}
          className="flex items-center gap-2"
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
          <span className="text-foreground shrink-0">{t("login")}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
