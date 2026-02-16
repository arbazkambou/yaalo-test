"use client";
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

  const handleTabChange = (value: string) => {
    router.push(value);
  };

  return (
    <Tabs
      value={pathName}
      onValueChange={handleTabChange}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center justify-center">
        <TabsList className="flex w-full justify-between h-15 rounded-[1.1875rem] bg-primary-light p-1">
          {authTabs.map((item) => (
            <TabsTrigger
              key={item.href}
              value={item.href}
              className={cn(
                "w-full rounded-[1.1875rem] h-15 border-0 text-sm sm:text-base transition-all",
                "data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow",
                "data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground-light",
                "hover:bg-primary/10"
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
