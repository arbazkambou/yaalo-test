import CopyButton from "@/components/ui/buttons/CopyButton";
import {
  androidInstallationInstruction,
  iosInstallationInstruction,
} from "@workspace/core/constants/installationGuide.constants";
import { Esim } from "@workspace/core/types/services/sims/sims.types";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import {
  ArrowRightLeft,
  ArrowUpRight,
  BadgeInfo,
  Info,
  KeyIcon,
  Settings2,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

import QrCodeGenerator from "./QrCodeGenerator";
import { getTranslations } from "next-intl/server";

interface PropsType {
  sim: Esim;
}
type TiosInstallationInstruction = {
  direct: {
    step1: ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8"];
    step2: ["key1", "key2", "key3", "key4"];
  };
  qr: {
    step1: ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8"];
    step2: ["key1", "key2", "key3", "key4", "key5", "key6", "key7"];
  };
  manual: {
    step1: [
      "key1",
      "key2",
      "key3",
      "key4",
      "key5",
      "key6",
      "key7",
      "key8",
      "key9",
      "key10",
    ];
    step2: ["key1", "key2", "key3", "key4", "key5", "key6", "key7"];
  };
};
type TandroidInstallationInstruction = {
  qr: {
    step1: ["key1", "key2", "key3", "key4", "key5", "key6"];
    step2: [
      "key1",
      "key2",
      "key3",
      "key4",
      "key5",
      "key6",
      "key7",
      "key8",
      "key9",
    ];
  };
  manual: {
    step1: ["key1", "key2", "key3", "key4", "key5", "key6", "key7"];
    step2: [
      "key1",
      "key2",
      "key3",
      "key4",
      "key5",
      "key6",
      "key7",
      "key8",
      "key9",
    ];
  };
};
async function SimInstallationGuide({ sim }: PropsType) {
    const t = await getTranslations("simDetailPage");
    const iosInstallationInstruction: TiosInstallationInstruction = {
    direct: {
      step1: ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8"],
      step2: ["key1", "key2", "key3", "key4"],
    },
    qr: {
      step1: ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8"],
      step2: ["key1", "key2", "key3", "key4", "key5", "key6", "key7"],
    },
    manual: {
      step1: [
        "key1",
        "key2",
        "key3",
        "key4",
        "key5",
        "key6",
        "key7",
        "key8",
        "key9",
        "key10",
      ],
      step2: ["key1", "key2", "key3", "key4", "key5", "key6", "key7"],
    },
  };

  const androidInstallationInstruction: TandroidInstallationInstruction = {
    qr: {
      step1: ["key1", "key2", "key3", "key4", "key5", "key6"],
      step2: [
        "key1",
        "key2",
        "key3",
        "key4",
        "key5",
        "key6",
        "key7",
        "key8",
        "key9",
      ],
    },
    manual: {
      step1: ["key1", "key2", "key3", "key4", "key5", "key6", "key7"],
      step2: [
        "key1",
        "key2",
        "key3",
        "key4",
        "key5",
        "key6",
        "key7",
        "key8",
        "key9",
      ],
    },
  };
  return (
    <Tabs className="mt-[25px]" defaultValue="ios">
      <TabsList className="flex justify-start gap-4">
        <TabsTrigger
          value="ios"
          className="group flex items-center data-[state=active]:text-foreground dark:data-[state=active]:text-background gap-[12.9px] px-4 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="currentColor"
            className="group-data-[state=active]:text-foreground dark:group-data-[state=active]:text-background"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1236 3.19287C13.8527 2.34788 14.3441 1.17098 14.2096 0C13.159 0.04 11.8879 0.671147 11.1346 1.51514C10.4581 2.26413 9.86757 3.4609 10.0263 4.60889C11.1983 4.69588 12.3945 4.03885 13.1236 3.19287ZM15.7517 10.625C15.781 13.652 18.5224 14.6589 18.5527 14.6719C18.5305 14.7429 18.1149 16.1066 17.1087 17.5166C16.2381 18.7346 15.3351 19.9476 13.9124 19.9736C12.5149 19.9986 12.0649 19.1797 10.4662 19.1797C8.86851 19.1797 8.36898 19.9475 7.04633 19.9985C5.67313 20.0475 4.62654 18.6808 3.74983 17.4668C1.95597 14.9838 0.5858 10.4501 2.42618 7.39014C3.3403 5.87116 4.97338 4.90779 6.74702 4.88379C8.09494 4.85879 9.36804 5.75293 10.1922 5.75293C11.0163 5.75293 12.5634 4.67794 14.1894 4.83594C14.87 4.86294 16.7811 5.09885 18.0077 6.81982C17.9086 6.87882 15.7275 8.09504 15.7517 10.625Z"
            />
          </svg>
           IOS {t("devices")}
        </TabsTrigger>
        <TabsTrigger
          value="android"
          className="group flex items-center data-[state=active]:text-foreground dark:data-[state=active]:text-background gap-[12.9px] px-4 py-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="currentColor"
            className="dark:group-data-[state=active]:text-background group-data-[state=active]:text-foreground"
          >
            <path d="M17.0869 6.71924C16.7769 6.71924 16.4795 6.84239 16.2603 7.06161C16.0411 7.28082 15.918 7.57812 15.918 7.88813V13.1856C15.918 13.4956 16.0411 13.7929 16.2603 14.0122C16.4795 14.2314 16.7769 14.3545 17.0869 14.3545C17.3969 14.3545 17.6942 14.2314 17.9135 14.0122C18.1327 13.7929 18.2558 13.4956 18.2558 13.1856V7.88813C18.2558 7.57812 18.1327 7.28082 17.9135 7.06161C17.6942 6.84239 17.3969 6.71924 17.0869 6.71924Z" />
            <path d="M2.01462 6.71924C1.70461 6.71924 1.40728 6.84239 1.18807 7.06161C0.968863 7.28082 0.845703 7.57812 0.845703 7.88813V13.1856C0.845703 13.4956 0.968863 13.7929 1.18807 14.0122C1.40728 14.2314 1.70461 14.3545 2.01462 14.3545C2.32464 14.3545 2.62197 14.2314 2.84117 14.0122C3.06038 13.7929 3.18354 13.4956 3.18354 13.1856V7.88813C3.18354 7.57812 3.06038 7.28082 2.84117 7.06161C2.62197 6.84239 2.32464 6.71924 2.01462 6.71924Z" />
            <path d="M4.0293 6.71924V14.6778C4.0293 14.8525 4.06371 15.0256 4.13058 15.187C4.19745 15.3485 4.29545 15.4952 4.41901 15.6187C4.54257 15.7423 4.68925 15.8403 4.85069 15.9072C5.01211 15.974 5.18514 16.0084 5.35988 16.0084H6.20548V18.8312C6.20548 19.1412 6.32863 19.4386 6.54785 19.6578C6.76706 19.877 7.06439 20.0001 7.3744 20.0001C7.68441 20.0001 7.98174 19.877 8.20097 19.6578C8.42021 19.4386 8.54332 19.1412 8.54332 18.8312V16.0084H10.5578V18.8312C10.5578 19.1412 10.681 19.4386 10.9002 19.6578C11.1194 19.877 11.4168 20.0001 11.7268 20.0001C12.0368 20.0001 12.3341 19.877 12.5533 19.6578C12.7726 19.4386 12.8957 19.1412 12.8957 18.8312V16.0084H13.7413C14.0942 16.0084 14.4326 15.8683 14.6821 15.6187C14.9317 15.3692 15.0719 15.0307 15.0719 14.6778V6.71924H4.0293Z" />
            <path d="M14.9226 5.06523C14.5567 3.83738 13.745 2.79065 12.647 2.1305L12.4604 2.01858L12.2615 1.9191L12.4853 1.5336L13.1444 0.290069C13.1568 0.254641 13.1576 0.216116 13.1464 0.180253C13.1352 0.144402 13.1127 0.113127 13.0822 0.0911038H12.9952C12.9635 0.0925338 12.9324 0.10109 12.9044 0.116161C12.8764 0.131233 12.8522 0.152423 12.8335 0.178151L12.162 1.33464L11.9506 1.72013L11.7516 1.63308L11.5402 1.55847C10.2516 1.11122 8.8496 1.11122 7.56093 1.55847L7.36196 1.63308L7.15056 1.72013L6.93916 1.33464L6.26766 0.0911038C6.25621 0.0706974 6.24088 0.0527283 6.2225 0.0382536C6.20414 0.0237665 6.18309 0.0130349 6.16057 0.00669289C6.13805 0.000338443 6.1145 -0.00151442 6.09127 0.00123378C6.06804 0.00398199 6.04557 0.0112813 6.02517 0.0227094C6.00475 0.0341499 5.98679 0.0494826 5.9723 0.067862C5.95782 0.086229 5.9471 0.107282 5.94074 0.12979C5.9344 0.15231 5.93254 0.175863 5.9353 0.199092C5.93804 0.222322 5.94533 0.244792 5.95677 0.265198L6.61584 1.50873L6.83968 1.89423L6.64072 1.99371L6.45419 2.10563C5.35089 2.76849 4.5416 3.82681 4.19096 5.06523C4.0939 5.38838 4.03956 5.72283 4.0293 6.06006H15.0719C15.0597 5.72391 15.0096 5.39018 14.9226 5.06523ZM7.06352 4.40616C6.96514 4.40616 6.86897 4.37699 6.78717 4.32233C6.70537 4.26768 6.64161 4.19 6.60397 4.09911C6.56631 4.00822 6.55647 3.9082 6.57565 3.81172C6.59485 3.71522 6.64222 3.62659 6.71178 3.55703C6.78136 3.48746 6.86999 3.44009 6.96647 3.4209C7.06296 3.40171 7.163 3.41156 7.2539 3.4492C7.3448 3.48685 7.4224 3.55061 7.47711 3.63241C7.53171 3.71421 7.56093 3.81037 7.56093 3.90875C7.56093 4.04067 7.50858 4.16719 7.41519 4.26048C7.32192 4.35376 7.19546 4.40616 7.06352 4.40616ZM12.0376 4.40616C11.9393 4.40616 11.843 4.37699 11.7613 4.32233C11.6795 4.26768 11.6157 4.19 11.578 4.09911C11.5405 4.00822 11.5305 3.9082 11.5498 3.81172C11.569 3.71522 11.6163 3.62659 11.686 3.55703C11.7555 3.48746 11.8442 3.44009 11.9407 3.4209C12.0371 3.40171 12.1371 3.41156 12.228 3.4492C12.3189 3.48685 12.3965 3.55061 12.4512 3.63241C12.5058 3.71421 12.5351 3.81037 12.5351 3.90875C12.5351 4.04067 12.4827 4.16719 12.3893 4.26048C12.2961 4.35376 12.1696 4.40616 12.0376 4.40616Z" />
          </svg>
          Android {t("devices")}
        </TabsTrigger>
      </TabsList>

      {/* ios installation guide  */}
      <TabsContent value="ios">
        <Tabs
          defaultValue="direct"
          className="relative mr-auto mt-[25px] w-full"
        >
          {/* ios tabs list */}
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="direct"
              className="relative rounded-none border-b-2 border-b-transparent !bg-background px-4 pb-3 pt-2 text-body-lg text-muted-foreground shadow-none transition-all data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none focus-visible:ring-0"
            >
               {t("direct")}
            </TabsTrigger>
            <TabsTrigger
              value="qr"
              className="relative rounded-none border-b-2 border-b-transparent !bg-background px-4 pb-3 pt-2 text-body-lg text-muted-foreground shadow-none transition-all data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none focus-visible:ring-0"
            >
              {t("qrCode")}
            </TabsTrigger>
            <TabsTrigger
              value="manual"
              className="relative rounded-none border-b-2 border-b-transparent !bg-background px-4 pb-3 pt-2 text-body-lg text-muted-foreground shadow-none transition-all data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none focus-visible:ring-0"
            >
              {t("manual")}
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            {/* ios direct  */}
            <TabsContent
              value="direct"
              className="mt-0 grid gap-[21px] xl:grid-cols-2 xl:gap-[50px]"
            >
              <div className="flex flex-col gap-4">
                <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                  {t("iosInstallationInstruction.direct.step1.key1")}
                </p>
                <div className="flex flex-col text-body-sm">
                  {iosInstallationInstruction.direct.step1
                    .slice(1)
                    .map((item, index) => (
                       <p key={index}>
                        {t(`iosInstallationInstruction.direct.step1.${item}`)}
                      </p>
                    ))}
                </div>
                <Link
                  href={`https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${sim.qr_code_generation}`}
                  target="_blank"
                >
                  <Button
                    variant={"animatedYaalo"}
                    className="group flex w-max items-center gap-2 rounded-full"
                    size={"md"}
                  >
                    {t("clickHere")}{" "}
                    <ArrowUpRight
                      size={16}
                      className="transition-all group-hover:rotate-45"
                    />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col gap-4">
                  <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                    {t("iosInstallationInstruction.direct.step2.key1")}
                  </p>
                  <div className="flex flex-col text-body-sm">
                    {iosInstallationInstruction.direct.step2
                      .slice(1)
                      .map((item, index) => (
                        <p key={index}>
                          {t(`iosInstallationInstruction.direct.step2.${item}`)}
                        </p>
                      ))}
                  </div>
                </div>
                <Card className="flex flex-col gap-[30px] rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex items-center gap-[10px] rounded-[10px] bg-primary/10 text-foreground px-[12px] py-[10px]">
                    <Info size={18} />
                    <p>{t("notWorking")}</p>
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("apn")}</p>
                      <p>{sim.apn}</p>
                    </div>
                    <ArrowRightLeft className="text-primary" size={18} />
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("dataRoaming")}</p>
                      <p>{t("on")}</p>
                    </div>
                    <BadgeInfo className="text-primary" size={18} />
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* ios qr code  */}
            <TabsContent
              value="qr"
              className="mt-0 grid gap-[21px] xl:grid-cols-2 xl:gap-[50px]"
            >
              {/* step 1 */}
              <div className="flex flex-col items-start gap-4">
                <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                   {t("iosInstallationInstruction.qr.step1.key1")}
                </p>
                <div className="flex flex-col text-body-sm">
                  {iosInstallationInstruction.qr.step1
                    .slice(1)
                    .map((item, index) => (
                       <p key={index}>
                        {t(`iosInstallationInstruction.qr.step1.${item}`)}
                      </p>
                    ))}
                </div>

                <Card className="mt-4 flex flex-col gap-[30px] rounded-[29px] border px-[18px] py-[18px] text-body-base sm:px-[29px]">
                  <QrCodeGenerator
                    qrCodeValue={sim.qr_code_generation}
                    isShareable={true}
                  />
                </Card>
              </div>

              {/* step 2 */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                    {t("iosInstallationInstruction.qr.step2.key1")}
                  </p>
                  <div className="flex flex-col text-body-sm">
                    {iosInstallationInstruction.qr.step2
                      .slice(1)
                      .map((item, index) => (
                        <p key={index}>
                          {t(`iosInstallationInstruction.qr.step2.${item}`)}
                        </p>
                      ))}
                  </div>
                </div>
                <Card className="flex flex-col gap-[30px] rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex items-center gap-[10px] rounded-[10px] bg-primary/10 text-foreground px-[12px] py-[10px]">
                    <Info size={18} />
                    <p>{t("notWorking")}</p>
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("apn")}</p>
                      <p>{sim.apn}</p>
                    </div>
                    <ArrowRightLeft className="text-primary" size={18} />
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("dataRoaming")}</p>
                      <p>{t("on")}</p>
                    </div>
                    <BadgeInfo className="text-primary" size={18} />
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* ios manual  */}
            <TabsContent
              value="manual"
              className="mt-0 grid gap-[21px] xl:grid-cols-2 xl:gap-[50px]"
            >
              {/* step 1  */}
              <div className="flex flex-col items-start gap-4">
                <Card className="rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex flex-col gap-4">
                    {/* smdp address  */}
                    <div className="flex flex-col justify-between rounded-[10px] bg-muted px-[13px] py-[11px] sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <Settings2 size={18} className="text-primary" />
                        <p className="text-body-sm font-500">{t("smdpAddress")}</p>
                      </div>

                      {sim.smdp_address ? (
                        <div className="flex items-center gap-2">
                          <p>
                            {sim.smdp_address.length! > 25
                              ? `${sim.smdp_address.slice(0, 25)}...`
                              : sim.smdp_address}
                          </p>
                          <CopyButton text={sim.smdp_address!} />
                        </div>
                      ) : (
                        <p>{t("inprocess")}</p>
                      )}
                    </div>

                    {/* activation code  */}
                    <div className="flex flex-col justify-between rounded-[10px] bg-muted px-[13px] py-[11px] sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <KeyIcon size={18} className="text-primary" />
                        <p className="text-body-sm font-500">{t("activationCode")}</p>
                      </div>

                      {sim.matching_id ? (
                        <div className="flex items-center gap-2">
                          <p>
                            {sim.matching_id.length! > 25
                              ? `${sim.matching_id.slice(0, 25)}...`
                              : sim.matching_id}
                          </p>
                          <CopyButton text={sim.matching_id!} />
                        </div>
                      ) : (
                        t("inprocess")
                      )}
                    </div>

                    {/* message  */}
                    <p className="text-body-base text-muted-foreground">
                     {t("descriptionTwo")}
                    </p>
                  </div>
                </Card>
                <p className="mt-4 w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                   {t("iosInstallationInstruction.manual.step1.key1")}
                </p>
                <div className="flex flex-col text-body-sm">
                  {iosInstallationInstruction.manual.step1
                    .slice(1)
                    .map((item, index) => (
                      <p key={index}>
                        {t(`iosInstallationInstruction.manual.step1.${item}`)}
                      </p>
                    ))}
                </div>
              </div>

              {/* step 2 */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                    {t("iosInstallationInstruction.manual.step2.key1")}
                  </p>
                  <div className="flex flex-col text-body-sm">
                    {iosInstallationInstruction.manual.step2
                      .slice(1)
                      .map((item, index) => (
                        <p key={index}>
                          {t(`iosInstallationInstruction.manual.step2.${item}`)}
                        </p>
                      ))}
                  </div>
                </div>
                <Card className="flex flex-col gap-[30px] rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex items-center gap-[10px] rounded-[10px] bg-primary/10 px-[12px] py-[10px] text-foreground">
                    <Info size={18} />
                    <p>{t("notWorking")}</p>
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("apn")}</p>
                      <p>{sim.apn}</p>
                    </div>
                    <ArrowRightLeft className="text-primary" size={18} />
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary"> {t("dataRoaming")}</p>
                      <p>{t("on")}</p>
                    </div>
                    <BadgeInfo className="text-primary" size={18} />
                  </div>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </TabsContent>

      {/* Android installation guide  */}
      <TabsContent value="android">
        <Tabs defaultValue="qr" className="relative mr-auto mt-[25px] w-full">
          {/* android tabs list */}
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="qr"
              className="relative rounded-none border-b-2 border-b-transparent !bg-background px-4 pb-3 pt-2 text-body-lg text-muted-foreground shadow-none transition-all data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none focus-visible:ring-0"
            >
               {t("qrCode")}
            </TabsTrigger>

            <TabsTrigger
              value="manual"
              className="relative rounded-none border-b-2 border-b-transparent !bg-background px-4 pb-3 pt-2 text-body-lg text-muted-foreground shadow-none transition-all data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none focus-visible:ring-0"
            >
              {t("manual")}
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            {/* android qr code  */}
            <TabsContent
              value="qr"
              className="mt-0 grid gap-[21px] xl:grid-cols-2 xl:gap-[50px]"
            >
              {/* step 1  */}
              <div className="flex flex-col items-start gap-4">
                <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                  {t("androidInstallationInstruction.qr.step1.key1")}
                </p>
                <div className="flex flex-col text-body-sm">
                  {androidInstallationInstruction.qr.step1
                    .slice(1)
                    .map((item, index) => (
                      <p key={index}>
                        {t(`androidInstallationInstruction.qr.step1.${item}`)}
                      </p>
                    ))}
                </div>

                <Card className="mt-4 flex flex-col gap-[30px] rounded-[29px] border px-[18px] py-[18px] text-body-base sm:px-[29px]">
                  <QrCodeGenerator
                    qrCodeValue={sim.qr_code_generation}
                    isShareable={true}
                  />
                </Card>
              </div>

              {/* step 2 */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                    {t("androidInstallationInstruction.qr.step2.key1")}
                  </p>
                  <div className="flex flex-col text-body-sm">
                    {androidInstallationInstruction.qr.step2
                      .slice(1)
                      .map((item, index) => (
                       <p key={index}>
                          {t(`androidInstallationInstruction.qr.step2.${item}`)}
                        </p>
                      ))}
                  </div>
                </div>
                <Card className="flex flex-col gap-[30px] rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex items-center gap-[10px] rounded-[10px] bg-primary/10 px-[12px] py-[10px] text-foreground">
                    <Info size={18} />
                    <p>{t("notWorking")}</p>
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("apn")}</p>
                      <p>{sim.apn}</p>
                    </div>
                    <ArrowRightLeft className="text-primary" size={18} />
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("dataRoaming")}</p>
                      <p>{t("on")}</p>
                    </div>
                    <BadgeInfo className="text-primary" size={18} />
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* android manual  */}
            <TabsContent
              value="manual"
              className="mt-0 grid gap-[21px] xl:grid-cols-2 xl:gap-[50px]"
            >
              {/* step 1  */}
              <div className="flex flex-col items-start gap-4">
                <Card className="max-w-[600px] rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex flex-col gap-4">
                    {/* lpa andoird  */}
                    <div className="flex flex-col justify-between rounded-[10px] bg-muted px-[13px] py-[11px] sm:flex-row sm:items-center">
                      <div className="flex items-center gap-2">
                        <Settings2 size={18} className="text-primary" />
                        <p className="text-body-sm font-500">{t("manualEntry")}</p>
                      </div>

                      {sim.qr_code_generation ? (
                        <div className="flex items-center gap-2">
                          <p>
                            {sim.qr_code_generation.length! > 25
                              ? `${sim.qr_code_generation.slice(0, 25)}...`
                              : sim.qr_code_generation}
                          </p>
                          <CopyButton text={sim.qr_code_generation} />
                        </div>
                      ) : (
                        <p>{t("inprocess")}</p>
                      )}
                    </div>

                    {/* message  */}
                    <p className="text-body-base text-muted-foreground">
                     {t("descriptionTwo")}
                    </p>
                  </div>
                </Card>
                <p className="mt-4 w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                 {t("androidInstallationInstruction.manual.step1.key1")}
                </p>
                <div className="flex flex-col text-body-sm">
                  {androidInstallationInstruction.manual.step1
                    .slice(1)
                    .map((item, index) => (
                      <p key={index}>
                        {t(
                          `androidInstallationInstruction.manual.step1.${item}`
                        )}
                      </p>
                    ))}
                </div>
              </div>

              {/* step 2 */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <p className="w-max rounded-[6px] bg-accent px-[10.34px] py-[6.58px] text-body-sm font-500 text-foreground">
                    {t("androidInstallationInstruction.manual.step1.key1")}
                  </p>
                  <div className="flex flex-col text-body-sm">
                    {androidInstallationInstruction.manual.step2
                      .slice(1)
                      .map((item, index) => (
                        <p key={index}>
                          {t(
                            `androidInstallationInstruction.manual.step2.${item}`
                          )}
                        </p>
                      ))}
                  </div>
                </div>
                <Card className="flex flex-col gap-[30px] rounded-[29px] border px-[29px] py-[18px] text-body-base">
                  <div className="flex items-center gap-[10px] rounded-[10px] bg-primary/10 px-[12px] py-[10px] text-foreground">
                    <Info size={18} />
                    <p>{t("notWorking")}</p>
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("apn")}</p>
                      <p>{sim.apn}</p>
                    </div>
                    <ArrowRightLeft className="text-primary" size={18} />
                  </div>

                  <div className="flex items-center justify-between gap-[10px] rounded-[10px] bg-primary/15 px-[12px] py-[10px] text-foreground">
                    <div className="flex flex-col gap-1 leading-none">
                      <p className="font-500 text-primary">{t("dataRoaming")}</p>
                      <p>{t("on")}</p>
                    </div>
                    <BadgeInfo className="text-primary" size={18} />
                  </div>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </TabsContent>
    </Tabs>
  );
}

export default SimInstallationGuide;
