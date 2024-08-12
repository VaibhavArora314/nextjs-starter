import { NEXT_AUTH_OPTIONS } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  return (
    <div className="bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-zinc-900 p-10 rounded-lg shadow-lg border-2 border-zinc-800">
        <h1 className="text-4xl text-gray-100 font-semibold text-center mb-6">
          User Profile
        </h1>
        <div className="text-lg text-gray-400">
          <p className="mb-4">
            <strong className="text-gray-100">Name:</strong> {session?.user?.name ?? "N/A"}
          </p>
          <p>
            <strong className="text-gray-100">Email:</strong> {session?.user?.email ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
