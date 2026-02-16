"use client";

import PendingSimDetail from "@/components/sims/PendingSimDetail";
import SimDetail from "@/components/sims/SimDetail";
import InfoMessage from "@/components/ui/info/InfoMessage";
import SimDetailSkeleton from "@/components/ui/skeltons/SimDetailSkeleton";
import { useMyEsims } from "@workspace/core/hooks/sims/useMyEsims";
import { usePendingEsims } from "@workspace/core/hooks/sims/usePendingEsims";
import { Button } from "@workspace/ui/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { RefreshCcw } from "lucide-react";
import { useTranslations } from "next-intl";

function MyEsimsPage({ locale }: { locale: string }) {
    const t = useTranslations("mySimPage");
  const {
    data: myEsims,
    isLoading: isSimsLoading,
    refetch: refetchMyEsims,
    isRefetching: isMyEsimsRefetching,
    error: myEsimsError,
  } = useMyEsims(locale);

  const {
    data: pendingEsims,
    isLoading: isPendingEsimsLoading,
    refetch: refetchPendingEsims,
    isRefetching: isPendingEsimsRefetching,
    error: pendingEsimsError,
  } = usePendingEsims();

  const isRefetching = isMyEsimsRefetching || isPendingEsimsRefetching;

  function handleRefresh() {
    refetchMyEsims();
    refetchPendingEsims();
  }

  if (isSimsLoading || isPendingEsimsLoading) {
    return <SimDetailSkeleton />;
  }

  if (pendingEsimsError || myEsimsError) {
    const error = pendingEsimsError || myEsimsError;
    throw new Error(error?.message ?? t("failedToGetSims"));
  }

  const haveMyEsims = myEsims?.length! > 0;
  const havePendingEsims = pendingEsims?.length! > 0;

  return (
    <Tabs defaultValue="myEsims">
      <section className="container flex flex-col gap-[1rem] xl:flex-row xl:justify-between">
        <div className="flex items-center mx-auto lg:mx-0 gap-4">
          <h1 className="text-center text-h2">{t("title")}</h1>
          <Button
            className="mt-2 rounded-full bg-primary text-foreground dark:text-background hover:bg-foreground hover:text-background border-none cursor-pointer "
            onClick={handleRefresh}
            disabled={isRefetching}
            size={"sm"}
          >
            {isRefetching ? (
              <RefreshCcw className="animate-spin" />
            ) : (
              <RefreshCcw />
            )}
          </Button>
        </div>
        <TabsList className="gap-2 bg-muted mt-2 md:mt-0 px-2 py-1 lg:mx-0 mx-auto">
          <TabsTrigger
            value="myEsims"
            className="rounded-pill text-foreground! dark:data-[state=active]:text-background! font-semibold cursor-pointer"
          >
           {t("mySimTab")}
          </TabsTrigger>
          <TabsTrigger
            value="pendingEsims"
            className="rounded-pill text-foreground! dark:data-[state=active]:text-background! font-semibold cursor-pointer"
          >
            {t("pendingSimTab")}
          </TabsTrigger>
        </TabsList>
      </section>

      <TabsContent
        className="container mt-10 flex flex-col gap-[1rem]"
        value="myEsims"
      >
        <h2 className="text-center text-h2 xl:text-start">{t("mySimTab")}</h2>

        {!haveMyEsims && <InfoMessage message={t("noSimFound")} />}

        <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
          {myEsims?.map((item, index) => (
            <SimDetail key={index} sim={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent
        className="container mt-10 flex flex-col gap-[1rem]"
        value="pendingEsims"
      >
        <h2 className="text-center text-h2 xl:text-start"> {t("pendingSimTab")}</h2>

        {!havePendingEsims && <InfoMessage message={t("noPendingSimFound")} />}

        <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
          {pendingEsims?.map((item, index) => (
            <PendingSimDetail key={index} pendingPackage={item} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default MyEsimsPage;
