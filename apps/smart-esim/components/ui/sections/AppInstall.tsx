import stars from "@/assets/images/5stars.png";
import Image from "next/image";
import SocialsButtons from "@/components/ui/buttons/SocialsButtons";
import appSs from "@/assets/images/phoneLg.png";
import mobileMd from "@/assets/images/phoneMd.png";
import { getTranslations } from "next-intl/server";
import { getAppSettings } from "@workspace/core/services/misc/appSettings.services";

interface PropsType {
  title?: string;
  description?: string;
}

async function AppInstall({ title, description }: PropsType) {
  const t = await getTranslations("SharedUI.appInstall");
  const { appLink } = await getAppSettings();
  return (
    <section className="relative mt-16 xl:h-[424px] bg-secondary-green/10 pb-12 pt-14 xl:container sm:rounded-[2.5rem] xl:mt-36">
      <div className="grid gap-x-12 gap-y-8 xl:grid-cols-2">
        <div className="flex flex-col items-center gap-8 xl:items-start xl:ps-8">
          <div className="flex items-center gap-4">
            <div className="relative h-[21.5px] w-[147.8px]">
              <Image
                src={stars || "/placeholder.svg"}
                alt="5 stars rating"
                fill
                sizes="auto"
              />
            </div>
            <p className="text-body-sm font-700 text-dark">{t("download")}</p>
          </div>

          <div>
            {title ? (
              <h3 className="text-center font-montserrat text-h2-base font-600 text-dark md:text-h2-md xl:text-start xl:text-[2.3rem] 2xl:text-h2-xl">
                {title}
              </h3>
            ) : (
              <h2 className="text-center font-montserrat text-h2-base font-600 text-dark md:text-h2-md xl:text-start xl:text-[2.3rem] 2xl:text-h2-xl">
                {t("title")}
              </h2>
            )}
            {description ? (
              <p className="mt-[1.31rem] text-center text-body-sm text-dark opacity-80 xl:text-start xl:text-body-md">
                {description}
              </p>
            ) : (
              <p className="mt-[1.31rem] max-w-[621px] text-center text-body-sm text-dark  xl:text-start xl:text-body-md">
                {t("description")}
              </p>
            )}
          </div>
          <div className="z-50">
            <SocialsButtons appLink={appLink} />
          </div>
        </div>
        <div>
          {/* Mobile phone image - visible on smaller screens */}
          <div className="mx-auto mt-6 h-[460px] w-[300px] relative xl:hidden">
            <Image
              src={mobileMd}
              alt="Mobile app"
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop phone image - visible only on xl screens and above */}
          <div
            className={`left relative right-0 hidden w-full xl:block bottom-14`}
          >
            <Image
              src={appSs}
              alt="Mobile app on phones"
              width={558}
              height={424}
              className="object-cover h-[424px] w-[558px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppInstall;
