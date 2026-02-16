import email from "@/assets/svgs/email-blue.svg";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
async function EmailReceive() {
  const t = await getTranslations("SharedUI.emailReceive");
  return (
    <section className="mt-16 container rounded-3xl bg-secondary-green/10">
      <div className="grid gap-y-10 px-[25px] py-[60px] sm:px-[68px] sm:py-[86px] xl:grid-cols-[1fr_minmax(350px,350px)] xl:px-[75px] xl:py-[65px] container">
        <div className="flex flex-col gap-8">
          <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl xl:font-700">
            {t("title")}
          </h2>
          <p className="text-center text-body-sm  md:text-body-md xl:text-start xl:text-body-md">
            {t("description")} <br />
            <br />
            {t("shareWith")}
          </p>
          <a
            className="rounded-md p-1 px-2 text-center text-body-sm opacity-80 md:text-body-md xl:w-max bg-transparent border-foreground border xl:text-start xl:text-body-md xl:opacity-100"
            // href={
            //   "/blog/info/what-is-esim/#:~:text=How%20to%20Activate,via%20QR%20Code"
            // }
          >
            ➡️ {t("installation")}
          </a>
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
