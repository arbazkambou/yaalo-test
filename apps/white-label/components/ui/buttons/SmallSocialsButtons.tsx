import Image from "next/image";
import { Link } from "@/i18n/navigation";

import appleLink from "@/assets/svgs/apple-store.svg";
import appleLinkDark from "@/assets/svgs/appleLinkDark.svg";
import playLink from "@/assets/svgs/g-play.svg";
import playLinkDark from "@/assets/svgs/playLinkDark.svg";

function SmallSocialsButtons() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={
          "https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[50px] w-20 transition-all hover:opacity-80 xl:h-[45px] xl:w-20">
          <Image
            src={playLink}
            fill
            alt="Yaalo android app"
            sizes="auto"
            className="dark:hidden"
          />
          <Image
            src={playLinkDark}
            fill
            alt="Yaalo android app"
            sizes="auto"
            className="dark:flex hidden"
          />
        </div>
      </Link>
      <Link
        href={"https://apps.apple.com/app/id6753675047"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[50px] w-20 transition-all hover:opacity-80 xl:h-[45px] xl:w-20">
          <Image
            src={appleLink}
            fill
            alt="Yaalo ios app"
            sizes="auto"
            className="dark:hidden"
          />
          <Image
            src={appleLinkDark}
            fill
            alt="Yaalo ios app"
            sizes="auto"
            className="dark:flex hidden"
          />
        </div>
      </Link>
    </div>
  );
}

export default SmallSocialsButtons;
