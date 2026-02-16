"use client";

import Accordions from "@/components/ui/accordion/Accordions";
import { useTranslations } from "next-intl";

function PagesMeta({
  features,
  countryName,
  description,
  technicalSpecs,
}: {
  countryName: string;
  features: string;
  technicalSpecs: string;
  description: string;
}) {
  const t = useTranslations("SharedUI.pagesMetaComponent");
  const accordionsData = [
    {
      title: t("feature.title"),
      body: (
        <div>
          <h2 className="text-body-base font-500 md:text-body-md xl:text-body-lg xl:font-600">
            {t("feature.subheading", { country: countryName })}
          </h2>
          <div className="custom-list text-body-base -tracking-[0.04rem] text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: features }} />
          </div>
        </div>
      ),
    },
    {
      title: t("description.title"),
      body: (
        <div>
          <h2 className="text-body-base font-500 md:text-body-md xl:text-body-lg xl:font-600">
             {t("description.subheading", { country: countryName })}
          </h2>
          <div className="custom-list text-body-base -tracking-[0.04rem] text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      ),
    },
    {
      title: t("technicalSpecs.title"),
      body: (
        <div>
          <h2 className="text-body-base font-500 md:text-body-md xl:text-body-lg xl:font-600">
           {t("technicalSpecs.subheading")}
          </h2>
          <div className="custom-list text-body-base -tracking-[0.04rem] text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: technicalSpecs }} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Accordions
        accordions={accordionsData}
        // className="md:!min-w-[650px] lg:min-w-[750px]! min-w-[360px]!"
        className="mt-2"
      />
    </>
  );
}

export default PagesMeta;
