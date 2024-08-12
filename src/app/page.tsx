export default function Home() {
  return (
    <div className="min-h-screen text-gray-100 flex items-center justify-center p-6">
      <div className="bg-zinc-900 p-10 rounded-lg shadow-lg max-w-3xl w-full border-2 border-zinc-800">
        <h1 className="text-4xl font-semibold text-center mb-6">
          Welcome to the Next.js Starter Kit
        </h1>
        <p className="text-lg text-gray-400 text-center mb-8">
          Your go-to template for rapid development with Next.js, integrated
          with modern tools and best practices.
        </p>

        <div className="space-y-6">
          <FeatureCard
            title="NextAuth.js Integration"
            description="Seamlessly handle authentication with providers like Google, GitHub, and custom credentials."
          />
          <FeatureCard
            title="Prisma + PostgreSQL"
            description="Efficiently manage your database with Prisma ORM connected to a PostgreSQL instance."
          />
          <FeatureCard
            title="TypeScript Support"
            description="Enjoy the benefits of static typing and type safety with TypeScript built-in."
          />
          <FeatureCard
            title="Tailwind CSS"
            description="Rapidly build your UI with utility-first CSS classes, fully integrated and ready to use."
          />
          <FeatureCard
            title="Docker & Docker Compose"
            description="Easily develop and deploy with Docker and Docker Compose, streamlining your containerization and orchestration processes."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-800 p-6 rounded-md border border-zinc-700">
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
