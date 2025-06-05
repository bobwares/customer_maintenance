# customer_maintenance

Customer maintenance encompasses activities like adding new customers to a database, updating their information, and removing outdated records.

This repository contains a small Next.js application in `customer-app/` using TypeScript and a NestJS backend in `customer-api/`.

## Getting Started

### Frontend

Install dependencies and run the development server:

```bash
cd customer-app
npm install
npm run dev
```

Open `http://localhost:3000/customers` to access the customer maintenance page.

### Backend

Start the API server:

```bash
cd customer-api
npm install
npm run start
```

The API will be available at `http://localhost:3001`.

### Database

After starting PostgreSQL, run `schema/create_schema.sql` to initialize the tables:

```bash
psql -h localhost -U postgres -f schema/create_schema.sql
```


Build and run a PostgreSQL container using the provided Dockerfile:

```bash
docker build -f Dockerfile.postgres -t customer-db .
docker run -d --name customer-db -p 5432:5432 customer-db
```

Ensure the environment variables in `customer-api/.env` match these settings.

### E2E Tests

Sample `.http` files for testing the API can be found in `customer-api/e2e/`.
These files can be executed using an HTTP client extension such as the VS Code
REST Client.
