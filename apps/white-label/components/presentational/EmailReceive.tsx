import email from "@/assets/svgs/email-yellow.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
function EmailReceive({ countryName }: { countryName: string }) {
  const t = useTranslations("EsimPage.EmailReceive");
  return (
    <section className="mt-16 bg-card-dark md:container md:rounded-[48px] text-background dark:text-foreground!">
      <div className="grid gap-x-[10rem] gap-y-[2.5rem] px-[25px] py-[60px] sm:px-[68px] sm:py-[86px] xl:grid-cols-[1fr_minmax(350px,350px)] xl:px-[75px] xl:py-[65px] container">
        <div className="flex flex-col gap-8">
          <h2 className="text-center xl:text-start text-h2">
            {t("title")}
          </h2>
          <p className="text-center text-body-sm  md:text-body-md xl:text-start xl:text-body-md">
            {t("description", { countryName })}
            {/* We’ll share with you: */}
          </p>
          {/* <a
            className="rounded-md p-1 px-2 text-center text-body-sm opacity-80 md:text-body-md xl:w-max xl:bg-background xl:text-start xl:text-body-md xl:opacity-100 hover:text-primary hover:shadow-md"
            href={
              "/blog/info/what-is-esim/#:~:text=How%20to%20Activate,via%20QR%20Code"
            }
          >
            ➡️ Installation instructions for QR code & Manual installation
          </a> */}
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[312px] w-[350px]">
            <Image
              src={email}
              alt="You will receive your eSIM Profile through e-mail or in the App"
              quality={70}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailReceive;
