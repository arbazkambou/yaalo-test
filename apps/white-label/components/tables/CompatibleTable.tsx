"use client";

import { phonesTableData } from "@/constants/compatible-phones";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { HashIcon, SettingsIcon, TabletSmartphoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function CompatibleTable() {
    const t = useTranslations("EsimCompatiblePage.tableHeadings");
  return (
    <section className="container mt-16">
      <div className="border border-border rounded-xl overflow-hidden">
      <Table className="text-center">
        <TableHeader>
          <TableRow >
            <TableHead className="">
              <div className="flex items-center text-lg font-semibold py-6 px-2 gap-2 justify-center ">
                <SettingsIcon className="w-5 h-5" /> {t("manufacturer")}
              </div>
            </TableHead>
            <TableHead className="">
              <div className="flex items-center text-lg font-semibold gap-2 justify-center">
                <TabletSmartphoneIcon className="w-5 h-5" /> {t("phoneModel")}
              </div>
            </TableHead>
            <TableHead className="">
              <div className="flex items-center text-lg font-semibold gap-2 justify-center">
                <HashIcon className="w-5 h-5" />{t("numberOfEsims")}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {phonesTableData.map((phone, index) => (
            <TableRow
              key={`${phone.Manufacturer}-${phone.phoneModel}`}
            >
              <TableCell className="font-medium">
                {phone.Manufacturer}
              </TableCell>
              <TableCell>{phone.phoneModel}</TableCell>
              <TableCell className="bg-secondary px-3 mt-2 mb-6 rounded-sm inline-block">
                {phone.NoOfeSIMs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </section>
  );
}

export default CompatibleTable;
