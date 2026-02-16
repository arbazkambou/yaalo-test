import { LoginUserInputs } from "@workspace/core/types/services/auth/auth.types";
import { getSession, signIn, signOut, useSession } from "next-auth/react";

export function useAuth(callBackUrl?: string) {
  const { data: session, status } = useSession();

  const isAuthLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  function logOut() {
    signOut();
  }

  async function loginWithEmailAndPassword({ ...inputs }: LoginUserInputs) {
    const { error, ok } = await signIn("credentials", {
      ...inputs,
      redirect: false,
    });

    if (error) {
      if (error === "CredentialsSignin") {
        throw new Error("Invalid login details.");
      } else {
        throw new Error("Something went wrong while login.");
      }
    }

    const session = await getSession();
    const isAffiliate = session?.user?.role?.type === "Affiliate";
    if (isAffiliate) {
      signOut({ redirect: false });
      window.location.href = `${session?.user?.role?.redirect_url}`;
    }
    return { redirect: isAffiliate ? false : true };
  }
  async function loginWithNonceToken(token: string) {
    await signIn("credentials", {
      token,
      redirect: false,
    });
  }

  async function socialLogin(provider: "google" | "apple") {
    try {
      await signIn(provider, {
        callbackUrl: callBackUrl ? callBackUrl : "/?login=success",
      });
    } catch (error) {
      throw new Error(`Something went wrong with ${provider} login.`);
    }
  }

  return {
    isAuthLoading,
    isAuthenticated,
    session,
    logOut,
    loginWithEmailAndPassword,
    socialLogin,
    loginWithNonceToken,
  };
}
