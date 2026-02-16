import Image from "next/image";
import { Link } from "@/i18n/navigation";

import logo from "@/assets/svgs/smartLogo.svg";

export default function FooterLogo() {
  return (
    <Link href="/" className="flex relative items-center ">
      <Image src={logo} width={83} height={67} alt="Logo" />
    </Link>
  );
}
