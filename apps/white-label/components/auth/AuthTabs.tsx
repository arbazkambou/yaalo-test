"use client";
import { Link } from "@/i18n/navigation";
import LoginForm from "@/components/auth/LoginForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { cn } from "@workspace/ui/lib/utils";
import RegisterForm from "@/components/auth/RegisterForm";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

function AuthTabs() {
    const t = useTranslations("LoginPage.tabLinks");
  const pathName = usePathname();
  const router = useRouter();
  const authTabs = [
    {
      label: t("login"),
      href: "/login/",
      content: <LoginForm />,
    },
    {
      label: t("register"),
      href: "/register/",
      content: <RegisterForm />,
    },
  ];

  function handleTabChange(value: string) {
    router.push(value);
  }

  return (
    <Tabs
      value={pathName}
      onValueChange={handleTabChange}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center justify-center">
        <TabsList className="flex w-full justify-between h-12 rounded-sm bg-muted p-1">
          {authTabs.map((item) => (
            <TabsTrigger
              key={item.href}
              value={item.href}
              className={cn(
                "w-full rounded-[8px] p-1 h-10 border-0 text-body-base font-semibold transition-all",
                "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
                "data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground-light",
                "hover:bg-accent",
              )}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {authTabs.map((item) => (
        <TabsContent value={item.href} key={item.href}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default AuthTabs;
