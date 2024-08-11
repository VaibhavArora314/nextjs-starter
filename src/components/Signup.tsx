"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import AuthProviders from "./AuthProvider";
import { signUpAction } from "@/actions/auth/signup";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    const user = await signUpAction(name,email,password);

    if (user && user.id) {
      await signIn("credentials", { email, password, redirect: false });
      router.push("/");
    } else {
      console.error("Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-md w-full border-2 border-zinc-950">
        <h1 className="text-2xl text-gray-100 font-semibold mb-6 text-center">Create a new account</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-zinc-800 text-white placeholder-gray-500 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <div className="my-4 text-gray-400 text-center">OR</div>

        <AuthProviders/>

        <div className="mt-6 text-gray-400 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500 hover:text-blue-400">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
}
