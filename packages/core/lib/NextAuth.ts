// @ts-nocheck

import {
  AuthenticatedUser,
  LoginUserInputs,
} from "@workspace/core/types/services/auth/auth.types";
import NextAuth, { type NextAuthResult } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import AppleProvider from "next-auth/providers/apple";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { globalErrorHandler } from "../helpers/apiHandlers";
import { loginUser, socialLogin } from "../services/auth/auth.services";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
      // clientSecret: {
      //   appleId: process.env.APPLE_CLIENT_ID!,
      //   teamId: process.env.APPLE_TEAM_ID!,
      //   privateKey: process.env.APPLE_PRIVATE_KEY!,
      //   keyId: process.env.APPLE_KEY_ID!,
      // } as any,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        token: { label: "token", type: "text" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password, token } = credentials as LoginUserInputs;

        let data;

        try {
          data = await loginUser({ email, password, token });

          return {
            access_token: data.access_token,
            ...data.user,
          };
        } catch (error) {
          const message = globalErrorHandler(error);
          if (message === "Something went wrong!") {
            throw new Error("Something went wrong!");
          }
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "apple") {
        try {
          const backendResponse = await socialLogin({
            access_token: account?.access_token,
            email: user?.email,
            name: user?.name,
            provider: account?.provider,
          });

          user.access_token = backendResponse.access_token;
          user.user = backendResponse.user;

          return true;
        } catch (error) {
          console.error("Social login error:", error);
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.user = token.user as AuthenticatedUser & AdapterUser;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },

  pages: {
    signIn: "/login",
  },
};

const result = NextAuth(authOptions);

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;
