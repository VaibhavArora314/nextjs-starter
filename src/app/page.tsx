import prisma from "@/db";

export default async function Home() {
  const users = await prisma.user.findMany({
    where: {}
  });

  return (
    <p className="text-white">
      {JSON.stringify(users)}
    </p>
  );
}
