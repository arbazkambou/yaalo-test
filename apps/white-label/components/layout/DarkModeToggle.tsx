"use client";

import { useThemeToggle } from "@workspace/core/hooks/theme/useThemeToggle";
import moon from "@/assets/svgs/moonDark.svg";
import sun from "@/assets/svgs/sunLight.svg";
import Image from "next/image";

export default function DarkModeToggle() {
  const { toggleTheme } = useThemeToggle();

  return (
    <button
      className="flex items-center justify-center cursor-pointer h-8 w-8 rounded-full border-0! bg-transparent shadow-none!"
      onClick={toggleTheme}
    >
      <Image
        src={sun}
        className=" rotate-0 scale-0 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-100"
        alt="sun"
      />
      <Image
        src={moon}
        className="absolute rotate-0 scale-100 transition-all duration-500 ease-in-out dark:rotate-90 dark:scale-0"
        alt="moon"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
