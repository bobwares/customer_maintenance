// App: Customer CRUD Application
// Package: customer-api
// File: src/persons/persons.controller.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:13:21 UTC
// Description: HTTP controller for person routes.
//
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create(@Body() dto: CreatePersonDto) {
    return this.personsService.create(dto);
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePersonDto) {
    return this.personsService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.personsService.remove(Number(id));
    return {};
  }
}
