import React from "react";
import AffiliateForm from "./AffiliateForm";
import { Card } from "@workspace/ui/components/card";
import Image from "next/image";
import formImg from "@/assets/images/affiliateFormImg.png";
import { getTranslations } from "next-intl/server";

async function AffiliateFormSection() {
  const t = await getTranslations("AffiliatePartnerPage.affiliateForm");
  return (
    <section className="bg-muted">
      <div className="container py-16 flex flex-col gap-5">
        <h2 id="affiliate-form" className="text-h2 xl:text-start text-center">
          {t("title")}
        </h2>
        <p className="text-base text-center xl:text-start md:text-lg text-foreground/60 xl:max-w-[1007px]">
          {t("description")}
        </p>
      </div>
      <div className="container flex justify-center pb-16">
        <Card className="p-8 rounded-4xl w-full mx-8 min-w-[360px] md:max-w-[606px]">
          <AffiliateForm />
        </Card>
        <div className="relative h-[800px] w-[692px] hidden xl:block">
          <Image
            src={formImg}
            fill
            alt="Form Image"
            quality={70}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default AffiliateFormSection;
