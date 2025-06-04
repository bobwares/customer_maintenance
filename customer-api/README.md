# Customer API

This directory contains a small NestJS backend providing CRUD endpoints for customer management.

## Development

Install dependencies and run the server in development mode:

```bash
npm install
npm run start
```

The API listens on `http://localhost:3001`.

### Database

Start a PostgreSQL container for local development:

```bash
docker build -f ../Dockerfile.postgres -t customer-db ..
docker run -d --name customer-db -p 5432:5432 customer-db
```

The API reads database credentials from `.env` in this directory.
