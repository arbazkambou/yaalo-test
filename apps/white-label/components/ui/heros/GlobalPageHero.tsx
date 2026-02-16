import bgHero from "@/assets/images/bgInner.png";
import bgHeroDark from "@/assets/images/bgHeroDark.png";
import Image from "next/image";

interface PropsType {
  heading: React.ReactNode;
  description?: string | React.ReactNode;
  trustpilot?: boolean;
}
function GlobalPageHero({ heading, description }: PropsType) {
  return (
    <section className="pb-[100px] relative overflow-hidden">
      <Image
        src={bgHero}
        alt="Hero background light"
        fill
        priority
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={bgHeroDark}
        alt="Hero background dark"
        fill
        priority
        className="object-cover object-center hidden dark:flex"
      />
      <div className="grid pt-40 relative z-10 xl:rounded-[2.5rem] container">
        <div className="flex flex-col items-center justify-center gap-[1.5rem] text-center xl:col-span-1">
          <p className="text-h1 xl:max-w-[1080px] ">{heading}</p>
          <p className="text-sm font-400 sm:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default GlobalPageHero;
