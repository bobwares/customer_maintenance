## AI Prompt Context Instructions
    - Always include metadata header section for project at the top of each source code file.
    - Definition of Metadata header section:

```markdown
# App: Customer CRUD Application
# Package: {{package}}
# File: {{file name}}
# Version: 2.0.29
# Author: Bobwares
# Date: {{current date/ time}}
# Description: document the function of the code.
#
```

- Update version each time new code is generated.
- create file version.md with updated version number and list of changes.
- follow code formatting standards:   
  - Python: PEP 8: E303 too many blank lines (2)


### **Full-Stack Technology Stack (NestJS + Next.js)**

**Backend – NestJS (Node.js + TypeScript):**

* TypeScript (ECMAScript 2022) for type-safe backend development.
* NestJS for scalable, modular server-side applications.
* Express or Fastify as the underlying HTTP adapter.
* TypeORM, Prisma, or Mongoose for database access (PostgreSQL, MySQL, MongoDB).
* class-validator + class-transformer for DTO validation.
* Passport.js with JWT for authentication.
* @nestjs/config for environment-based configuration management.
* BullMQ (backed by Redis) for background jobs and queue processing.
* Swagger via `@nestjs/swagger` for automatic API documentation.
* Jest for unit and integration testing.
* Winston or Pino for structured logging.
* Event-driven architecture support using `@nestjs/event-emitter` or message brokers (Kafka, RabbitMQ).

**Frontend – Next.js (React + TypeScript):**

* TypeScript for type-safe frontend development.
* Next.js for server-side rendering (SSR), static generation (SSG), and hybrid rendering.
* Tailwind CSS for utility-first, responsive styling.
* Zustand for global state management.
* React Hook Form + Zod/Yup for form state management and validation.
* Axios or native Fetch API for communicating with the NestJS backend.
* NextAuth.js for authentication workflows including OAuth and JWT.
* Jest + React Testing Library for component-level testing.
* ESLint + Prettier for linting and consistent code formatting.
* Webpack (default) or Vite (with plugin) for optimized builds.
