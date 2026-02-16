"use client";

import { Card } from "@workspace/ui/components/card";
import AuthTabs from "../auth/AuthTabs";
import loginBg from "@/assets/images/loginBg.png";
import loginBgDark from "@/assets/images/loginDark.png";
import Image from "next/image";

function LoginPage() {
  return (
    <section className="pb-40 flex relative items-center justify-center">
      <Image
        src={loginBg}
        alt="Hero background light"
        fill
        quality={100}
        priority
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={loginBgDark}
        alt="Hero background dark"
        fill
        quality={100}
        priority
        className="object-cover object-center hidden dark:flex"
      />
      <Card className="p-8 relative z-10 mt-30 rounded-4xl w-full mx-8 min-w-[360px] md:max-w-[550px] border border-[#C3C3C3] bg-gradient-to-b from-transparent to-white backdrop-blur-[5px] dark:border dark:border-[rgba(178,179,181,0.20)] dark:bg-gradient-to-b dark:from-white/0 dark:to-[#3B3A3F] dark:backdrop-blur-[5px]">
        <AuthTabs />
      </Card>
    </section>
  );
}

export default LoginPage;
