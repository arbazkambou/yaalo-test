"use client";

import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { api } from "@workspace/core/lib/API";
import { GetUserResponse } from "@workspace/core/types/services/auth/auth.types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, logOut, isAuthLoading, session } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  const toastShownRef = useRef(false);

  async function checkAuth() {
    try {
      const data = await api<GetUserResponse>("/user", session?.accessToken);
      if (!data?.status) {
        logOut();
      }
    } catch (error) {
      if (error instanceof Error && error.message === "Unauthenticated.") {
        logOut();
      }
    }
  }

  useEffect(() => {
    if (isAuthLoading) return;
    if (isAuthenticated) {
      checkAuth();
    }
  }, [isAuthenticated, isAuthLoading]);

  useEffect(() => {
    const loginStatus = searchParams.get("login");

    if (
      loginStatus === "success" &&
      isAuthenticated &&
      !toastShownRef.current
    ) {
      toast.success("Login successfully!");
      toastShownRef.current = true;

      router.replace(window.location.pathname);
    }
  }, [searchParams, isAuthenticated, router]);

  return <>{children}</>;
}

export default AuthProvider;
