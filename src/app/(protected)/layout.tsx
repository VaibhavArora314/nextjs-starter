import { NEXT_AUTH_OPTIONS } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session || !session.user) {
    redirect("/signin");
  }

  return <>{children}</>;
}
