"use server";

import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { auth } from "@workspace/core/lib/NextAuth";
import { ApiResponse } from "@workspace/core/types/services/api/api.types";
import {
  AuthenticatedUser,
  GetUserResponse,
  LoginUserInputs,
  LoginUserResponse,
  RegisterUserInputs,
  RegisterUserResponse,
  SendOTPResponse,
  SendPasswordResetDataInputType,
  SendPasswordResetDataResponseType,
  SendPasswordResetPinResponseType,
  SendRegisterOTPInputs,
  SocialLoginInputs,
} from "@workspace/core/types/services/auth/auth.types";
import { redirect } from "next/navigation";

export async function checkSession() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return session;
}

export async function loginUser({ email, password, token }: LoginUserInputs) {
  try {
    let data;
    if (token) {
      data = await api<LoginUserResponse>("/login-nonce", null, {
        method: "POST",
        body: { token },
      });
    }

    if (!token) {
      data = await api<LoginUserResponse>("/login", null, {
        method: "POST",
        body: { email, password },
      });
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getUser(): Promise<ApiResponse<AuthenticatedUser>> {
  const session = await auth();
  try {
    const data = await api<GetUserResponse>("/user", session?.accessToken, {
      next: { tags: [queryKeys.user.get] },
    });

    return { status: true, data: data.data };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function sendOTP({
  email,
  password,
  recaptchaToken,
}: SendRegisterOTPInputs) {
  try {
    const data = await api<SendOTPResponse>("/send-otp", null, {
      body: { email, password, "re-captcha": recaptchaToken },
      method: "POST",
    });
    return data;
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function registerUser({
  ...inputs
}: RegisterUserInputs): Promise<ApiResponse<RegisterUserResponse>> {
  try {
    const data = await api<RegisterUserResponse>("/register", null, {
      body: { ...inputs },
      method: "POST",
    });

    return { status: true, data: { ...data } };
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function sendPasswordResetPin(email: string) {
  try {
    const data = await api<SendPasswordResetPinResponseType>(
      "/send-password-reset-otp",
      null,
      {
        method: "POST",
        body: { email },
      },
    );

    return data;
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function sendPasswordResetData({
  email,
  password,
  password_confirmation,
  token,
}: SendPasswordResetDataInputType) {
  try {
    const data = await api<SendPasswordResetDataResponseType>(
      "/submit/password-reset",
      null,
      {
        method: "POST",
        body: {
          email,
          password,
          password_confirmation,
          otp: token,
        },
      },
    );

    return data;
  } catch (error) {
    return { status: false, message: globalErrorHandler(error) };
  }
}

export async function socialLogin(inputs: SocialLoginInputs) {
  try {
    const data = await api<LoginUserResponse>(`/social/login`, null, {
      method: "POST",
      body: { ...inputs },
    });

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
