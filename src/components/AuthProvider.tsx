"use client";
import { signIn } from "next-auth/react";

export default function AuthProviders() {
  return (
    <div>
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mb-4"
        onClick={async () => {
          await signIn("google");
        }}
      >
        Login with Google
      </button>

      <button
        className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md mb-4"
        onClick={async () => {
          await signIn("github");
        }}
      >
        Login with Github
      </button>
    </div>
  );
}
