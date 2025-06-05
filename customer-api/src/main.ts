// App: Customer CRUD Application
// Package: customer-api
// File: src/main.ts
// Version: 2.0.41
// Author: Bobwares
// Date: 2025-06-05 06:37:28 UTC
// Description: Bootstraps the NestJS application.
//
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors();
  await app.listen(3001);
}

bootstrap();
