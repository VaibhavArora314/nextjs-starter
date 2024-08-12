import { NEXT_AUTH_OPTIONS } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  console.log(session);

  if (!session)
    return NextResponse.json({
      message: "No user logged in!",
    });

  return NextResponse.json({
    email: session?.user?.email,
  });
}
