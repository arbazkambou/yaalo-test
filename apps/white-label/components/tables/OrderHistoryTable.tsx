"use client";

import { formatDateTime } from "@workspace/core/helpers/formatDateTime";
import useOrderHistory from "@workspace/core/hooks/refill/useOrderHistory";
import { Button } from "@workspace/ui/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Clock4, CreditCard, NotepadText, RefreshCw, User } from "lucide-react";
import OrderHistoryTableSkelton from "../ui/skeltons/OrderHistoryTableSkelton";
import { Locale, useTranslations } from "next-intl";

function OrderHistoryTable({ locale }: { locale: Locale }) {
    const t = useTranslations("refillPage.orderHistoryTable");

  const { data, isLoading, isRefetching, refetch } = useOrderHistory(locale);

  return (
    <section className="container mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-h2">{t("title")}</h2>
        <Button
          className="rounded-full shadow-none hover:border-none hover:text-background hover:bg-foreground cursor-pointer bg-primary"
          onClick={() => refetch()}
        >
          {isRefetching ? (
            <>
              <RefreshCw size={20} className="animate-spin" />
              {t("refreshing")}
            </>
          ) : (
            <>
              <RefreshCw size={20} />
             {t("refresh")}
            </>
          )}
        </Button>
      </div>
      {isLoading ? (
        <OrderHistoryTableSkelton />
      ) : (
      <div className="mt-4 overflow-hidden rounded-lg border">

        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead>
                <div className="flex gap-1 dark:text-background">
                  <User size={19} className="shrink-0" />
                  <p>{t("id")}</p>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 text-body-base dark:text-background font-500">
                  <CreditCard size={19} className="shrink-0" />
                  <p>{t("amount")}</p>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2 text-body-base font-500 dark:text-background">
                  <NotepadText size={19} className="shrink-0" />
                  <p>{t("description")}</p>
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center gap-2 text-body-base font-500 dark:text-background">
                  <Clock4 size={19} className="shrink-0" />
                  <p>{t("time")}</p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    {order.amount >= 0 ? (
                      <span className="rounded-[6px] bg-accent px-[12px] py-[4px] font-500 text-primary">
                        ${order.amount}
                      </span>
                    ) : (
                      <span className="rounded-[6px] bg-destructive/10 px-[12px] py-[4px] font-500 text-destructive">
                        -${Math.abs(order.amount)}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{formatDateTime(order.created_at)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell
                className="mt-10 w-full bg-accent p-3 text-center font-semibold text-foreground"
                colSpan={4}
              >
                {t("nodata")}
              </TableCell>
            )}
          </TableBody>
        </Table>
      </div>
      )}
    </section>
  );
}

export default OrderHistoryTable;
