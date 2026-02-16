import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { Skeleton } from "@workspace/ui/components/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { ChevronRight } from "lucide-react";
import { Locale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Suspense } from "react";
import GetCountriesWithStartingPrice from "../data-fetching/GetCountriesWithStartingPrice";
import RegionsWithDataOnly from "../features/packages/RegionsWithDataOnly";
import StartingPriceSkelton from "../ui/skeltons/StartingPriceSkelton";
import globalFlag from "@/public/images/globalFlag.svg";

function StartingPriceSection({ locale }: { locale: Locale }) {
  const t = useTranslations("HomePage.startingPrice");
  const isArabic = locale === "ar";
  return (
    <section className="container bg-background mt-16">
      <Tabs
        defaultValue="local"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="flex flex-col gap-[2.38rem] px-5 xl:px-0">
          <div className="flex flex-col gap-5">
            <div className=" items-center justify-between">
              <h2 className="text-center text-h2 md:text-start">
                {t("title")}{" "}
              </h2>
              {/* <PrimaryButton href="/destinations/" variant="link">
                View All Destinations
              </PrimaryButton> */}
            </div>
            <p className="text-center text-body-sm text-muted-foreground md:text-start md:text-body-base">
              {t("subtitle")}
            </p>
          </div>

          {/* Links and buttons */}
          <div className="flex flex-col gap-[2.38rem] md:flex-row md:justify-between md:gap-[1.8rem] ">
            <TabsList className="flex items-center justify-start gap-0.5 border-muted p-0.5 border border-border text-muted-foreground xl:gap-4 overflow-x-auto flex-nowrap rounded-[1.1875rem]!">
              <TabsTrigger
                value="local"
                className="flex items-center gap-2 font-500 transition-all data-[state=active]:bg-primary data-[state=active]:font-600 data-[state=active]:text-primary-foreground w-[140px] data-[state=active]:shadow xl:w-[130px] bg-transparent"
              >
                {t("tabs.local")}
              </TabsTrigger>
              <TabsTrigger
                value="regional"
                className="flex items-center gap-2 font-500 transition-all data-[state=active]:bg-primary data-[state=active]:font-600 data-[state=active]:text-primary-foreground w-[140px] data-[state=active]:shadow xl:w-[130px] bg-transparent"
              >
                {t("tabs.regional")}
              </TabsTrigger>
              <TabsTrigger
                value="global"
                className="flex items-center gap-2 font-500 transition-all data-[state=active]:bg-primary data-[state=active]:font-600 data-[state=active]:text-primary-foreground w-[140px] data-[state=active]:shadow xl:w-[130px] focus:outline-none focus-visible:outline-none bg-transparent"
              >
                {t("tabs.global")}
              </TabsTrigger>
            </TabsList>

            <div className="hidden items-center md:flex">
              <PrimaryButton href="/destinations/" variant="link">
                {t("allDestinations")}
              </PrimaryButton>{" "}
            </div>
          </div>

          {/* Data Only Packages  */}
          <TabsContent value="local">
            <Suspense fallback={<StartingPriceSkelton />}>
              <GetCountriesWithStartingPrice locale={locale} />
            </Suspense>
          </TabsContent>

          <TabsContent value="regional">
            <Suspense
              fallback={
                <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 20 }).map((item, index) => (
                    <Skeleton className="h-[200px] w-full" key={index} />
                  ))}
                </section>
              }
            >
              {/* just a wrapper to fetch regions that have data only packages  */}
              <RegionsWithDataOnly locale={locale} />
            </Suspense>
          </TabsContent>

          <TabsContent value="global">
            <Link
              href={"/esim-global/"}
              className="group relative flex max-w-[400px] flex-col gap-2 rounded-[19.5px]   transition-all hover:cursor-pointer hover:text-primary hover:shadow-xl xl:gap-10  xl:hover:scale-105 border-muted border-2  bg-[url('assets/images/bg-global.png')] bg-cover bg-no-repeat"
            >
              <div className="flex flex-col gap-2 mx-[1.06rem] my-[0.94rem]">
                <div className="relative h-[73px] w-[73px]">
                  <Image
                    src={globalFlag}
                    alt="global flag"
                    fill
                    className="object-cover rounded-full shadow-sm bg-foreground"
                  />
                </div>
                <h3 className="text-body-base font-semibold">
                  {" "}
                  {t("globalPackage")}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">{t("startsAt")}</p>
                  </div>
                  <div className="absolute end-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </TabsContent>

          {/* <Suspense fallback={<StartingPriceSkelton />}>
          <GetCountriesWithStartingPrice />
        </Suspense> */}

          <div className="flex w-full items-center justify-center md:hidden">
            <PrimaryButton href="/destinations/" variant="link">
              {t("allDestinations")}
            </PrimaryButton>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default StartingPriceSection;
