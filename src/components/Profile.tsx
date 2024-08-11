import { NEXT_AUTH_OPTIONS } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  return (
    <div className="bg-zinc-900 p-6">
      <div className="max-w-4xl mx-auto bg-zinc-700 p-6 rounded-md shadow-lg">
        <h1 className="text-3xl text-gray-100 font-semibold mb-4">User Profile</h1>
        <div className="text-white">
          <p><strong>Name:</strong> {session?.user?.name}</p>
          <p><strong>Email:</strong> {session?.user?.email}</p>
          <p>{JSON.stringify(session)}</p>
        </div>
      </div>
    </div>
  );
}
