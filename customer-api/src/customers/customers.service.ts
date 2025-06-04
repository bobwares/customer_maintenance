// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.service.ts
// Version: 2.0.33
// Author: Bobwares
// Date: 2025-06-04 21:55:00 UTC
// Description: Business logic for managing customers.
//
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly repo: Repository<Customer>,
  ) {}

  async create(data: { name: string; email: string }): Promise<Customer> {
    const customer = this.repo.create(data);
    return this.repo.save(customer);
  }

  findAll(): Promise<Customer[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.repo.findOne({ where: { id } });
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  async update(id: number, data: { name?: string; email?: string }): Promise<Customer> {
    const customer = await this.findOne(id);
    if (data.name !== undefined) {
      customer.name = data.name;
    }
    if (data.email !== undefined) {
      customer.email = data.email;
    }
    return this.repo.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
