import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";

export function useLogin(callBackUrl?: string) {
  const router = useRouter();
  const { loginWithEmailAndPassword, isAuthenticated, socialLogin } =
    useAuth(callBackUrl);

  const {
    isPending: isEmailAndPasswordLoggingIn,
    mutate: loginWithEmailAndPasswordApi,
  } = useMutation({
    mutationFn: loginWithEmailAndPassword,
    // onSuccess: () => {
    //   toast.success("Login Successfully");
    //   // window.location.href = "/";
    // },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { isPending: isAppleLoggingIn, mutate: appleLoginApi } = useMutation({
    mutationFn: () => socialLogin("apple"),

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { isPending: isGoogleLoggingIn, mutate: googleLoginApi } = useMutation({
    mutationFn: () => socialLogin("google"),

    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return {
    loginWithEmailAndPasswordApi,
    googleLoginApi,
    appleLoginApi,
    isEmailAndPasswordLoggingIn,
    isGoogleLoggingIn,
    isAppleLoggingIn,
  };
}
