"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AppBar = () => {
  const session = useSession();
  const router = useRouter();

  const isAuthenticated = session && session.status === "authenticated";

  return (
    <div className="bg-zinc-950 p-4">
      <div className="flex items-center justify-between mx-4">
        <span>
          <Link className="text-2xl text-gray-100 font-semibold" href="/">
            NextJS Starter Kit
          </Link>
        </span>

        {isAuthenticated ? (
          <span className="flex gap-4 items-center">
            <p className="text-white font-medium cursor-pointer" onClick={() => {
              router.push("/profile")
            }}>
              {session.data.user?.name}
            </p>
            <button
              className="text-white font-medium border-zinc-800 border-2 rounded-md hover:bg-zinc-800 p-2 focus:outline-1 focus:ring-1"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          </span>
        ) : (
          <span>
            <button
              className="text-white font-medium border-zinc-800 border-2 rounded-md hover:bg-zinc-800 p-2 focus:outline-1 focus:ring-1"
              onClick={() => {
                signIn();
              }}
            >
              Signin
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default AppBar;
