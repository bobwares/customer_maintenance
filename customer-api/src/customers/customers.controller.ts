// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.controller.ts
// Version: 2.0.41
// Author: Bobwares
// Date: 2025-06-05 06:37:28 UTC
// Description: HTTP controller for customer routes.
//
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() dto: CreateCustomerDto) {
    return this.customersService.create(dto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.customersService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.customersService.remove(Number(id));
    return {};
  }
}
