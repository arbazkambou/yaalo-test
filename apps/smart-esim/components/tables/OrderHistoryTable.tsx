"use client";

import OrderHistoryTableSkelton from "@/components/ui/skeltons/OrderHistoryTableSkeleton";
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
import { Locale, useTranslations } from "next-intl";

function OrderHistoryTable({ locale }: { locale: Locale }) {
  const t = useTranslations("refillPage.orderHistoryTable");
  const { data, isLoading, isRefetching, refetch } = useOrderHistory(locale);

  return (
    <section className="container mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-h2-base font-500 md:text-h2-md xl:text-h2-xl">
          {t("title")}
        </h2>
        <Button
          className="rounded-full bg-primary text-background shadow-none"
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
          <Table className="  ">
            <TableHeader className="bg-primary">
              <TableRow>
                <TableHead>
                  <div className="flex gap-1 text-primary-foreground">
                    <User size={19} className="shrink-0" />
                    <p>{t("id")}</p>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 text-base font-500 text-primary-foreground">
                    <CreditCard size={19} className="shrink-0" />
                    <p>{t("amount")}</p>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2 text-base font-500 text-primary-foreground">
                    <NotepadText size={19} className="shrink-0" />
                    <p>{t("description")}</p>
                  </div>
                </TableHead>
                <TableHead className="text-right">
                  <div className="flex items-center gap-2 text-base font-500 text-primary-foreground">
                    <Clock4 size={19} className="shrink-0" />
                    <p>{t("time")}</p>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data && data.length > 0 ? (
                data.map((order, index) => (
                  <TableRow key={index} className="bg-muted">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      {order.amount >= 0 ? (
                        <span className="rounded-[6px] bg-primary/10 px-[12px] py-[4px] font-500 text-primary">
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
                  className="mt-10 w-full bg-muted p-3 text-center font-semibold text-foreground"
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
