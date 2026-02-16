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
      <Table className="text-center">
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead className="text-background">
              <div className="flex items-center gap-2 justify-center ">
                <SettingsIcon className="w-4 h-4" /> {t("manufacturer")}
              </div>
            </TableHead>
            <TableHead className="text-background">
              <div className="flex items-center gap-2 justify-center">
                <TabletSmartphoneIcon className="w-4 h-4" /> {t("phoneModel")}
              </div>
            </TableHead>
            <TableHead className="text-background">
              <div className="flex items-center gap-2 justify-center">
                <HashIcon className="w-4 h-4" /> {t("numberOfEsims")}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {phonesTableData.map((phone, index) => (
            <TableRow
              key={`${phone.Manufacturer}-${phone.phoneModel}`}
              className={index % 2 === 0 ? "bg-background" : "bg-secondary"}
            >
              <TableCell className="font-medium">
                {phone.Manufacturer}
              </TableCell>
              <TableCell>{phone.phoneModel}</TableCell>
              <TableCell className="bg-primary/20 px-3 mt-2 mb-6 rounded-sm text-primary inline-block">
                {phone.NoOfeSIMs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default CompatibleTable;
