# Next.js Starter Kit
Welcome to the Next.js Starter Kit—your go-to template for rapid development with Next.js. This starter kit integrates modern tools and best practices to help you get started quickly with a robust foundation.

### Features
- NextAuth.js Integration: Seamlessly handle authentication with providers like Google, GitHub, and custom credentials.
- Prisma + PostgreSQL: Efficiently manage your database with Prisma ORM connected to a PostgreSQL instance.
- TypeScript Support: Enjoy the benefits of static typing and type safety with TypeScript built-in.
- Tailwind CSS: Rapidly build your UI with utility-first CSS classes, fully integrated and ready to use.
- Docker & Docker Compose: Easily develop and deploy with Docker and Docker Compose, streamlining your containerization and orchestration processes.

### Getting Started
- Clone the Repository:
  ```bash
  git clone https://github.com/VaibhavArora314/nextjs-starter.git
  cd nextjs-starter
  ```

- Set Up Environment Variables:

  Copy the .env.example file to .env and adjust the values as needed. <br/>
  For Google OAuth Credentials: [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) <br/>
  For GitHub OAuth Credentials: [https://github.com/settings/apps](https://github.com/settings/apps) <br/>
  (While creating a GitHub App, make sure that you keep the email address permission to read-only instead of no access)

- Build and Run with Docker:
  ```bash
  docker compose watch
  ```
  This will build the Docker images and start the containers for both the app and the PostgreSQL database and also watch for any changes in the nextjs application and update in realtime.
  ```bash
  docker compose down
  ```
  This will stop your application by stoping all the containers running.
- Build and Run without Docker:
  
  Create a postgres container or use your own postgres database and specify its url in .env
  ```bash
  docker run -d \
  --name db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=db \
  -p 5432:5432 \
  postgres
  ```
  Now start your application
  ```bash
  npm install
  npx prisma migrate dev
  npm run dev
  ```
- Access the Application:
  
  Open your browser and go to http://localhost:3000 to view the application.

### Contributing
If you want to contribute to this project, please follow these steps:
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push the branch (git push origin feature/your-feature).
- Open a Pull Request.

### License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
