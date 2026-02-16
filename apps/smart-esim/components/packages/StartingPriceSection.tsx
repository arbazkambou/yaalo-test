import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { Suspense } from "react";
import GetCountriesWithStartingPrice from "../data-fetching/GetCountriesWithStartingPrice";
import { PackageCardSkelton } from "../ui/skeltons/PackageCardSkeleton";
import TabContent from "./TabContent";
import RegionsWithDataOnly from "../features/packages/RegionsWithDataOnly";
import { Locale, useTranslations } from "next-intl";
import GlobalPackageCardWrapper from "./GlobalPackageCardWrapper";

function CountriesSection({ locale }: { locale: Locale }) {
  const t = useTranslations("HomePage.startingPrice");
  return (
    <section className="container mt-16 bg-background">
      <Tabs defaultValue="local">
        <div className="flex flex-col gap-[2.38rem]">
          <div className="flex flex-col gap-5">
            <h2 className="text-center font-montserrat text-h2-base font-600 lg:text-start md:text-h2-md">
              {t("title")}
            </h2>
          </div>

          <div className="flex items-center justify-center lg:justify-between gap-[2.38rem]">
            <TabsList className="flex items-center justify-between gap-1 md:gap-3 bg-muted! px-1.5 sm:px-3 rounded-full py-2 text-muted-foreground w-[345px] sm:w-auto ">
              <TabsTrigger
                value="local"
                className="flex cursor-pointer bg-background rounded-full min-w-[100px] md:min-w-[130px] items-center gap-2 font-500 transition-all data-[state=active]:bg-primary data-[state=active]:font-600 data-[state=active]:text-background  data-[state=active]:shadow xl:w-[130px]"
              >
                {t("tabs.local")}
              </TabsTrigger>
              <TabsTrigger
                value="regional"
                className="flex cursor-pointer bg-background rounded-full min-w-[100px] md:min-w-[130px] items-center gap-2 font-500 transition-all data-[state=active]:bg-primary data-[state=active]:font-600 data-[state=active]:text-background data-[state=active]:shadow xl:w-[130px]"
              >
                {t("tabs.regional")}
              </TabsTrigger>
              <TabsTrigger
                value="global"
                className="flex cursor-pointer bg-background  rounded-full min-w-[100px] md:min-w-[130px] items-center gap-2 font-500 transition-all  data-[state=active]:bg-primary data-[state=active]:font-600 data-[state=active]:text-background data-[state=active]:shadow"
              >
                {t("tabs.global")}
              </TabsTrigger>
            </TabsList>

            <div className="hidden items-center lg:flex">
              <PrimaryButton
                href="/esim/"
                variant="link"
                className="bg-primary text-background font-medium rounded-[70px] hover:border-primary"
              >
                {t("allDestinations")}
              </PrimaryButton>
            </div>
          </div>

          {/* Data Only Packages  */}
          <TabsContent value="local">
            <Suspense
              fallback={
                <div className="grid gap-x-[1.2rem] gap-y-[1rem] sm:grid-cols-2 md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 20 }).map((item, index) => (
                    <PackageCardSkelton key={index} />
                  ))}
                </div>
              }
            >
              <GetCountriesWithStartingPrice locale={locale} />
            </Suspense>
          </TabsContent>

          <TabContent value="regional">
            <Suspense
              fallback={
                <div className="grid gap-x-[1.2rem] gap-y-[1rem] sm:grid-cols-2 md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 20 }).map((item, index) => (
                    <PackageCardSkelton key={index} />
                  ))}
                </div>
              }
            >
              <RegionsWithDataOnly locale={locale} />
            </Suspense>
          </TabContent>

          <TabContent value="global">
            <GlobalPackageCardWrapper />
          </TabContent>

          <div className="lg:hidden self-center ">
            <PrimaryButton
              href="/esim/"
              variant="link"
              className="bg-primary text-background font-medium rounded-[70px] hover:border-primary"
            >
              {t("allDestinations")}
            </PrimaryButton>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default CountriesSection;
