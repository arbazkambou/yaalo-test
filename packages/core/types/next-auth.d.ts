import "next-auth";
import { AuthenticatedUser } from "./services/auth/auth.types";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: AuthenticatedUser;
  }

  interface User extends AuthenticatedUser {
    access_token: string;
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: AuthenticatedUser;
  }
}
