"use client";

import resetHero from "@/assets/svgs/resetHero.svg";
import { Card } from "@workspace/ui/components/card";
import Image from "next/image";
import PasswordResetForm from "../auth/PasswordResetForm";

function PasswordResetPage() {
  return (
    <section className="container mt-4 flex w-full justify-center rounded-[2.4rem] bg-muted py-16">
      <Card className="grid w-[97%] gap-[3rem] rounded-[2rem] px-[1.5rem] py-[1.5rem] shadow-lg xs:w-[95%] sm:px-[1.38rem] sm:py-[2.5rem] lg:w-[90%] xl:grid-cols-2 xl:px-[3.44rem] xl:py-[3.94rem]">
        <div className={`relative h-full w-full"}`}>
          <Image
            src={resetHero}
            alt="password reset image"
            fill
            sizes="auto"
            quality={70}
          />
        </div>
        <PasswordResetForm />
      </Card>
    </section>
  );
}

export default PasswordResetPage;
