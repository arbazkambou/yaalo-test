"use client";

import resetHero from "@/assets/svgs/resetHero.svg";
import { Card } from "@workspace/ui/components/card";
import Image from "next/image";
import PasswordResetForm from "../auth/PasswordResetForm";
import loginBg from "@/assets/images/loginBg.png";
import loginBgDark from "@/assets/images/loginDark.png";

function PasswordResetPage() {
  return (
    <section className="pb-40 relative overflow-hidden flex items-center justify-center">
      <Image
        src={loginBg}
        alt="Hero background light"
        fill
        priority
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={loginBgDark}
        alt="Hero background dark"
        fill
        priority
        className="object-cover object-center hidden dark:flex"
      />
      <Card className="p-8 z-10 relative mt-30 rounded-4xl w-full mx-8 min-w-[360px] md:max-w-[550px] border border-[#C3C3C3] bg-gradient-to-b from-transparent to-white backdrop-blur-[5px] dark:border dark:border-[rgba(178,179,181,0.20)] dark:bg-gradient-to-b dark:from-white/0 dark:to-[#3B3A3F] dark:backdrop-blur-[5px]">
        <PasswordResetForm />
      </Card>
    </section>
  );
}

export default PasswordResetPage;
