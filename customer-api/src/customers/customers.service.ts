// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.service.ts
// Version: 2.0.32
// Author: Bobwares
// Date: 2025-06-04 21:28:20 UTC
// Description: Business logic for managing customers.
//
import { Injectable, NotFoundException } from '@nestjs/common';

export interface Customer {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];
  private nextId = 1;

  create(data: { name: string; email: string }): Customer {
    const customer = { id: this.nextId++, ...data };
    this.customers.push(customer);
    return customer;
  }

  findAll(): Customer[] {
    return this.customers;
  }

  findOne(id: number): Customer {
    const customer = this.customers.find((c) => c.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return customer;
  }

  update(id: number, data: { name?: string; email?: string }): Customer {
    const customer = this.findOne(id);
    if (data.name !== undefined) {
      customer.name = data.name;
    }
    if (data.email !== undefined) {
      customer.email = data.email;
    }
    return customer;
  }

  remove(id: number): void {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    this.customers.splice(index, 1);
  }
}
