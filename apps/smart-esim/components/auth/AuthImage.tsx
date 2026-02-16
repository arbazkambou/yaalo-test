import authImage from "@/assets/images/authHero.png";
import users from "@/assets/images/users.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

function AuthImage() {
  const t = useTranslations("LoginPage.authImage");
  return (
    <div className="relative hidden h-full w-full xl:block">
      <div className=""></div>
      <Image
        src={authImage}
        fill
        sizes="auto"
        quality={80}
        alt="Smart eSIM"
        className="rounded-[2.4rem] rounded-br-none rounded-tr-none shadow-xl"
      />
    </div>
  );
}

export default AuthImage;
