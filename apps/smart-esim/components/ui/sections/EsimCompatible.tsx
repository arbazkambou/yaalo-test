import esimSS from "@/assets/images/esimSS.png";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import { getTranslations } from "next-intl/server";
import huawei from "@/assets/svgs/huawei.svg";
import apple from "@/assets/svgs/apple.svg";
import google from "@/assets/svgs/googleLogo.svg";
import samsung from "@/assets/svgs/smasung.svg";


 
async function EsimCompatible() {
   const phoneBrand = [
    {
      logo: apple,
      name: "Apple"
    },
    {
      logo: google,
      name: "Google"
    },
    {
      logo: samsung,
      name: "Samsung"
    },
    {
      logo: huawei,
      name: "Huawei"
    },]
  const t = await getTranslations("HomePage.esimCompatible");
  return (
    <section className="mt-20 bg-background">
      <div className="container flex flex-col items-center gap-[2.31rem] px-8 py-12 md:gap-[2.88rem] md:px-17 md:py-[5.38rem] xl:grid xl:grid-cols-[1fr_minmax(600px,680px)] xl:items-start xl:gap-x-12 xl:gap-y-8 xl:px-8 xl:py-16 xxl:gap-y-8 2xl:grid-cols-[1fr_minmax(600px,778px)]">

        <div className="hidden w-full sm:block">
          {/* hero image  */}
          <div className="relative lg:h-[450px] xl:h-[650px] w-full">
            <Image
              src={esimSS}
              alt="Distribution Partner with Smart eSIM"
              fill
              className="object-contain"
              quality={70}
            />
          </div>


        </div>


        {/* text section  */}
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-[1.31rem] xl:gap-[2.5rem] w-full lg:w-[83%] ">
            <h2 className="text-center font-montserrat text-h2-base font-600 md:text-4xl xl:text-start">
                {t("title")}
            </h2>
            <p className="text-center text-body-sm md:text-body-base xl:text-start text-foreground/50">
                {t("description")}
            </p>
            <div className="flex flex-wrap justify-center xl:justify-start gap-6 md:gap-8">
              {phoneBrand.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative h-12 w-12 md:h-14 md:w-14">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span className="text-sm md:text-body-md font-500 text-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>


            <div className="hidden xl:block">
              <PrimaryButton
                className="bg-primary text-background rounded-4xl cursor-pointer hover:scale-105 transition-all duration-300"
                variant="link"
                href={"/esim-compatible"}
              >
                 {t("compatibleBtn")}
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* link button on mobile  */}
        <div className="xl:hidden">
          <PrimaryButton
            variant="link"
            href={"/esim-compatible"}
            className="group flex bg-primary text-background cursor-pointer hover:scale-105 transition-all duration-300 items-center gap-3 text-sm"
          >
            {t("compatibleBtn")}
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
}

export default EsimCompatible;
