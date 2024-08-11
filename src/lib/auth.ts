import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";

export const NEXT_AUTH_OPTIONS:AuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
          password: {
            label: "Password",
            type: "password",
            placeholder: "Password",
          },
        },
        async authorize(credentials: any) {
          const email = credentials.email;
          const password = credentials.password;
  
          // get user from db and validate
          // if (!user || !passwordMatch) return null;
          return {
            id: "user1",
            name: "vaibhav",
            email,
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
      })
    ],
    callbacks: {
      jwt: ({ token, user }: any) => {
        if (user) {
          token.userId = user.id;
        }
        return token;
      },
      session: ({ session, token, user }: any) => {
        if (session.user) {
          session.user.id = token.userId;
        }
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/signin"
    }
  }