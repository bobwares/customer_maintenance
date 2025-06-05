// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.service.ts
// Version: 2.0.35
// Author: Bobwares
// Date: 2025-06-05 01:23:52 UTC
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

  async create(data: {
    first: string;
    last: string;
    age: number;
    address: { street: string; city: string; state: string; zipcode: string };
  }): Promise<Customer> {
    const customer = this.repo.create({
      first: data.first,
      last: data.last,
      age: data.age,
      street: data.address.street,
      city: data.address.city,
      state: data.address.state,
      zipcode: data.address.zipcode,
    });
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

  async update(
    id: number,
    data: {
      first?: string;
      last?: string;
      age?: number;
      address?: {
        street?: string;
        city?: string;
        state?: string;
        zipcode?: string;
      };
    },
  ): Promise<Customer> {
    const customer = await this.findOne(id);
    if (data.first !== undefined) {
      customer.first = data.first;
    }
    if (data.last !== undefined) {
      customer.last = data.last;
    }
    if (data.age !== undefined) {
      customer.age = data.age;
    }
    if (data.address) {
      if (data.address.street !== undefined) {
        customer.street = data.address.street;
      }
      if (data.address.city !== undefined) {
        customer.city = data.address.city;
      }
      if (data.address.state !== undefined) {
        customer.state = data.address.state;
      }
      if (data.address.zipcode !== undefined) {
        customer.zipcode = data.address.zipcode;
      }
    }
    return this.repo.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
