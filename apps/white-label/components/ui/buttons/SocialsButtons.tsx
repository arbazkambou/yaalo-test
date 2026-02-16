import Image from "next/image";
import { Link } from "@/i18n/navigation";

import appleLink from "@/assets/svgs/appleLink.svg";
import playLink from "@/assets/svgs/playLink.svg";

function SocialsButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={
          "https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
          <Image src={playLink} fill alt="Yaalo android app" sizes="auto" />
        </div>
      </Link>
      <Link
        href={"https://apps.apple.com/app/id6753675047"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[50px] w-[150px] hover:opacity-80 xl:h-[45px] xl:w-[170px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
          <Image src={appleLink} fill alt="Yaalo ios app" sizes="auto" />
        </div>
      </Link>
    </div>
  );
}

export default SocialsButtons;
