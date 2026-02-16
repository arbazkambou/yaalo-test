import { useTranslations } from "next-intl";
import React from "react";

export default function ManualAndAutomaticSteps() {
  const t = useTranslations("EsimCompatiblePage")
  return (
    <section className="my-16 text-body-base">
      <div className="container">
        <h2 className="py-3 text-h2 text-center xl:text-start">
          {t("stepUpInstructions.title")}
        </h2>
        <div className="container rounded-2xl bg-secondary px-4 py-6">
          <ul className="list-decimal font-medium space-y-2 px-5">
            <li>{t("stepUpInstructions.Step1")}</li>
            <li>{t("stepUpInstructions.Step2")}</li>
            <li>{t("stepUpInstructions.Step3")}</li>
            <li>
              {t("stepUpInstructions.Step4")}            </li>
            <li>{t("stepUpInstructions.Step5")}</li>
            <li>
              {t("stepUpInstructions.Step6")}
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h2 className="py-3 text-h2 text-center xl:text-start">
          {t("manualInstructions.title")}
        </h2>
        <div className="container rounded-2xl bg-secondary px-4 py-6">
          <ul className="list-decimal font-medium space-y-2 px-5">
            <li>{t("manualInstructions.Step1")}</li>
            <li>{t("manualInstructions.Step2")}</li>
            <li>{t("manualInstructions.Step3")}</li>
            <li>
              {t("manualInstructions.Step4")}            </li>
            <li>{t("manualInstructions.Step5")}</li>
            <li>
              {t("manualInstructions.Step6")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
