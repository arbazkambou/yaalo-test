import logoDark from "@/assets/logos/yaalo-logo-dark.svg";
import logoLight from "@/assets/logos/yaalo-light-logo.svg";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={logoLight}
        alt="Yaalo logo"
        priority
        className="w-[98px] hidden md:w-[128px] dark:flex"
        height={50}
        width={200}
      />
      <Image
        src={logoDark}
        alt="Yaalo logo"
        priority
        className="w-[98px]  md:w-[128px] dark:hidden"
        height={50}
        width={200}
      />
    </Link>
  );
}

export default Logo;
