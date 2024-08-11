import { NEXT_AUTH_OPTIONS } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Profile from "@/components/Profile";

export default async function ProfilePage() {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session || !session.user) {
    redirect("/signin")
  }

  return <Profile/>
}
