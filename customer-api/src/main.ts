// App: Customer CRUD Application
// Package: customer-api
// File: src/main.ts
// Version: 2.0.31
// Author: Bobwares
// Date: 2025-06-04 21:28:20 UTC
// Description: Bootstraps the NestJS application.
//
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3001);
}

bootstrap();
