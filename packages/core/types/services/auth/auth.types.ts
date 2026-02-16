export type LoginUserInputs = {
  email: string;
  password: string;
  token?: string;
};

export type SendRegisterOTPInputs = {
  email: string;
  password: string;
  recaptchaToken: string;
};

export type LoginUserResponse = {
  status: boolean;
  access_token: string;
  token_type: string;
  device_token: boolean | null;
  user: AuthenticatedUser;
};

export type GetUserResponse = {
  status: boolean;
  data: AuthenticatedUser;
};

export type UserRole = {
  type: string;
  nonce: string;
  redirect_url: string;
};

export type AuthenticatedUser = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  stripe_id: string | null;
  pm_type: string | null;
  pm_last_four: string | null;
  deleted_at: string | null;
  blocked: number;
  should_logout: number;
  status: number;
  balance: number;
  phone_number: string | null;
  birthday: string | null;
  country: string | null;
  favorite_destination: string | null;
  role?: UserRole;
};

export type SendOTPResponse = {
  status: boolean;
  message: string;
};

export interface RegisterUserInputs extends LoginUserInputs {
  name: string;
  otp: string;
  is_affiliate?: number;
}

export type RegisterUserResponse = LoginUserResponse;

export interface SendPasswordResetPinInputType {
  email: string;
}

export interface SendPasswordResetPinResponseType {
  status: boolean;
  message: string;
  errors?: string[];
}

export interface SendPasswordResetDataInputType {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export interface SendPasswordResetDataResponseType {
  status: boolean;
  message: string;
  errors?: string[];
}

export interface SocialLoginInputs {
  provider: string;
  email: string | null;
  name: string | null;
  access_token: string | undefined;
}
