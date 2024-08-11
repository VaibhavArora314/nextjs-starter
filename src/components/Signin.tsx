"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import AuthProviders from "@/components/AuthProvider";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center p-6">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-zinc-950">
        <h1 className="text-2xl text-gray-100 font-semibold mb-6 text-center">
          Login to your account
        </h1>

        <input
          type="text"
          placeholder="Email"
          className="w-full bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md mb-4"
          onClick={async () => {
            const res = await signIn("credentials", {
              email,
              password,
              redirect: false,
            });
            console.log(res);
            router.push("/");
          }}
        >
          Login with Email
        </button>

        <div className="my-4 text-gray-400 text-center">OR</div>

        <AuthProviders />

        <div className="mt-6 text-gray-400 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-400">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
