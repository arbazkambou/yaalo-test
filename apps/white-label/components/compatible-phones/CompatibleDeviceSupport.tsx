import { DeviceSection } from "@/constants/compatible-phones";
import { CompatibleDeviceCard } from "./CompatibleDeviceCard";


export function DeviceSupportSection({ section }: { section: DeviceSection }) {
  return (
    <section className="space-y-6 flex flex-col md:items-center xl:block ">
        <h2 className="text-h2 mt-14 text-center xl:text-start xl:mt-20">{section.heading}</h2>
      <p className="max-w-5xl text-body-base text-center lg:mx-12 md:mx-8 xl:mx-0 xl:text-start text-muted-foreground">
        {section.description}
      </p>

      {section.infoBox?.text && (
        <div className="inline-flex md:max-w-[604px] lg:max-w-[700px] text-body-base font-medium items-start rounded-xl bg-secondary border-border p-4">
          <span className="text-xl">💡</span>
          <p className="text-sm leading-6 text-foreground">
            {section.infoBox.text}
          </p>
        </div>
      )}

      <div className="grid gap-5 grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:mt-10 md:gap-10 ">
        {section.devices.map((device) => (
          <CompatibleDeviceCard key={device.id} item={device} />
        ))}
      </div>
    </section>
  )
}
