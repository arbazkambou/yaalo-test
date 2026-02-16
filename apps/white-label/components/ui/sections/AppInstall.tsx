import stars from "@/assets/svgs/5Star.svg";
import greenStar from "@/assets/svgs/greenStars.svg";
import Image from "next/image";
import SocialsButtons from "@/components/ui/buttons/SocialsButtons";
import appSs from "@/assets/images/appInstallSS.png";
import { getTranslations } from "next-intl/server";

interface PropsType {
 title?: string;
 description?: string;
}

async function AppInstall({ title, description }: PropsType) {
 const t = await getTranslations("SharedUI.appInstall");

 return (
  <section className="mt-16 bg-card-dark sm:container sm:rounded-[48px] text-white">
   <div className="py-[32px] px-[35px] sm:rounded-[48px] md:px-[40px] md:py-[37px] xl:px-[70px] xl:py-[28px] grid gap-x-20 gap-y-10 xl:grid-cols-[1fr_auto]">
    <div className="flex flex-col items-center gap-8 xl:items-start justify-center">
     <div className="flex items-center gap-4">
      <div className="relative h-[21.5px] w-[120px]">
       <Image
        src={stars || "/placeholder.svg"}
        alt="5 stars rating"
        fill
        sizes="auto"
       />
      </div>
      <p className="text-body-sm font-600 dark:text-muted-foreground">
       {t("download")}
      </p>
     </div>

     <div>
      {title ? (
       <h3 className="text-center px-1 sm:px-0 xl:text-start text-h2 dark:text-foreground">
        {title}
       </h3>
      ) : (
       <h2 className="text-center px-1 sm:px-0 xl:text-start text-h2 dark:text-foreground">
        {t("title")}
       </h2>
      )}
      {description ? (
       <p className="mt-[1.31rem] text-center text-body-sm opacity-80 xl:text-start xl:text-body-base xl:font-500 dark:text-foreground">
        {description}
       </p>
      ) : (
       <p className="mt-[1.31rem] text-center px-2 sm:px-0 text-body-sm xl:text-start xl:text-body-base xl:font-500 dark:text-foreground">
        {t("description")}
       </p>
      )}
     </div>
     <div>
      <SocialsButtons />
     </div>
    </div>

    <div className="flex items-center justify-center">
     <div
      className={`w-[280px] h-[290px] xs:w-[341px] xs:h-[370px] xl:h-[433px] xl:w-[494px] relative xl:-mt-5`}
     >
      <Image
       src={appSs}
       alt="Mobile app on phones"
       fill
       quality={70}
       className="sm:object-cover"
      />
     </div>
    </div>
   </div>
  </section>
 );
}

export default AppInstall;