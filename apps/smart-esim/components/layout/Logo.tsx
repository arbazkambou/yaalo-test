import Image from "next/image";
import { Link } from "@/i18n/navigation";
import logo from "@/assets/svgs/logoSvg.svg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={logo} alt="Logo" width={150} height={33} priority />
    </Link>
  );
}
