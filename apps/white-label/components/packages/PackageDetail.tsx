import PackageDetailItem from "@/components/packages/PackageDetailItem";
import { MyTooltip } from "@/components/ui/tooltip/MyTooltip";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { formatSupportedNetworkCoverage } from "@workspace/core/helpers/formatSupportedNetworkCoverage";
import { useCoverageSearch } from "@workspace/core/hooks/packages/useCoverageSearch";
import { Package } from "@workspace/core/types/services/packages/packages.types";
import { Input } from "@workspace/ui/components/input";
import {
  Antenna,
  Calendar,
  Database,
  Dot,
  MessageCircle,
  Phone,
  Rocket,
  Search,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface PropsType {
  packageDetail: Package;
  countryFlag: string;
  isMobile?: boolean;
}

function PackageDetail({ packageDetail, countryFlag, isMobile }: PropsType) {
    const t = useTranslations("SharedUI");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const {
    name: packageName,
    data_quantity,
    data_unit,
    package_validity,
    package_validity_unit,
    tether,
    coverages,
    countries,
    sms_quantity,
    voice_quantity,
    voice_unit,
    package_type,
    activation_type_description,
    other_info,
    unthrottle_data,
    throttle_speed,
    throttle,
  } = packageDetail;

  const isUnlimitedSms = sms_quantity < 0;

  const { filtered, searchQuery, setSearchQuery, reshaped } = useCoverageSearch(
    { type: "package", data: packageDetail },
  );

  return (
    <>
      {/* flag and package name  */}
      <div className="mt-2 flex items-center gap-6">
        <Image
          src={countryFlag}
          alt="Global Packages"
          width={38}
          height={38}
          sizes="auto"
          className="shrink-0 rounded-full object-cover shadow-md"
        />
        <h3 className="text-start text-body-base font-500 leading-none xl:text-body-lg xl:leading-normal">
          {packageName}
        </h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3.5">
        {/* data quantity  */}
        <PackageDetailItem>
          <div className="flex items-center gap-2">
            <Database size={19} className="text-primary" />
            <p className="font-500">{t("features.data")}</p>
          </div>
          <p>
            {data_quantity === -1 ? t("unlimited") : data_quantity} {data_unit}
          </p>
        </PackageDetailItem>

        {/* validity  */}
        <PackageDetailItem>
          <div className="flex items-center gap-2">
            <Calendar size={19} className="text-primary" />
            <p className="text-body-base font-500">{t("features.validity")}</p>
          </div>
          <p>
            {package_validity} {package_validity_unit}
          </p>
        </PackageDetailItem>

        {/* throttling  */}
        <PackageDetailItem>
          <div className="flex items-center gap-2">
            <Rocket size={19} className="text-primary" />
            <p className="text-body-base font-500">{t("features.speed")}</p>
          </div>
          <p className="flex items-center gap-2">
            {throttle ? (
              <>
                <span>{t("yes")}</span>
                {throttle_speed && unthrottle_data && (
                  <MyTooltip
                    message={t("highSpeedThenUnlimited", {
                      unthrottle_data,
                      throttle_speed,
                    })}
                  />
                )}
              </>
            ) : (
              t("no")
            )}
          </p>
        </PackageDetailItem>

        {/* Tethering Hotspot  */}
        <PackageDetailItem>
          <div className="flex items-center gap-2">
            <Antenna size={19} className="text-primary" />
            <p className="text-body-base font-500">{t("features.tethering")}</p>
          </div>
          <p>{tether ? t("yes") : t("no")}</p>
        </PackageDetailItem>

        {package_type === "DATA-VOICE-SMS" && (
          <>
            {/* minutes quantity  */}
            {voice_quantity !== 0 && (
              <PackageDetailItem>
                <div className="flex items-center gap-2">
                  <Phone size={19} className="text-primary" />
                  <p className="text-body-base font-500">{voice_unit}</p>
                </div>
                <p>{voice_quantity < 0 ? t("unlimited") : voice_quantity}</p>
              </PackageDetailItem>
            )}

            {/* sms quantity  */}
            {sms_quantity !== 0 && (
              <PackageDetailItem>
                <div className="flex items-center gap-2">
                  <MessageCircle size={19} className="text-primary" />
                  <p className="text-body-base font-500">{t("features.sms")}</p>
                </div>
                <p>{isUnlimitedSms ? t("unlimitedSms") : sms_quantity}</p>
              </PackageDetailItem>
            )}
          </>
        )}
      </div>

      <div className="flex flex-col gap-3.5">
        <div className="grid shrink-0 gap-4">
          <p className="text-xl font-500">{t("supportedCountries")}</p>

          {reshaped.length > 2 && (
            <div className="relative h-full w-full shrink-0">
              <Input
                placeholder={t("globalPlaceholder")}
                className="h-[50px] w-full shrink-0 xl:h-full"
                onChange={(e) => setSearchQuery(cleanString(e.target.value))}
                value={searchQuery}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" style={
                  isArabic
                    ? { left: "0.75rem", right: "auto" }
                    : { right: "0.75rem", left: "auto" }
                } />
            </div>
          )}
        </div>

        <div
          className={`barMini  ${isMobile ? "max-h-[420px]" : "max-h-[170px]"} min-h-[170px] overflow-auto rounded-[0.6rem] border bg-secondary px-3 py-2`}
        >
          <div className="flex flex-col gap-4">
            {filtered.length !== 0 ? (
              filtered.map((item, index) => (
                <div className="flex flex-wrap gap-1" key={index}>
                  <p className="me-6 text-body-md font-500">
                    {item.country_name}
                  </p>
                  {item.country_coverage.map((countrycoverages, index) => (
                    <div
                      className="flex items-center gap-[0.62rem] rounded-full border bg-background p-1 text-sm"
                      key={index}
                    >
                      <p>{countrycoverages.network_name}</p>

                      <p className="!rounded-full bg-primary-accent px-2">
                        {formatSupportedNetworkCoverage(countrycoverages)}
                      </p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="h-full text-center text-muted-foreground">
                 {t("noSearchMatch")} 🙂
              </p>
            )}
          </div>
        </div>
      </div>

      {/* message of activation  */}
      <ul className="flex flex-col rounded-[9px] border border-primary p-1">
        <li className="flex text-sm">
          <Dot size={18} className="shrink-0" />
          {activation_type_description}
        </li>
        {other_info &&
          other_info.split("\\n").map((item, index) => (
            <li className="flex text-sm" key={index}>
              <Dot size={18} className="shrink-0" />
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}

export default PackageDetail;
