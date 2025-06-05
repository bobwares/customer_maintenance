// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.service.spec.ts
// Version: 2.0.41
// Author: Bobwares
// Date: 2025-06-05 06:37:28 UTC
// Description: Unit tests for CustomersService.
//
import { CustomersService } from './customers.service';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { Address } from './address.entity';

describe('CustomersService', () => {
  let service: CustomersService;
  let repo: any;

  beforeEach(() => {
    repo = {
      create: jest.fn((data: any) => data),
      save: jest.fn(async (data: any) => ({ id: 1, ...data })),
      find: jest.fn(async () => []),
      findOne: jest.fn(async ({ where: { id } }: any) =>
        id === 1
          ? {
              id: 1,
              first: 'John',
              last: 'Doe',
              age: 30,
              email: 'john@example.com',
              address: {
                street: '123',
                city: 'City',
                state: 'CA',
                zipcode: '12345',
              } as Address,
            }
          : null,
      ),
      delete: jest.fn(),
    };
    service = new CustomersService(repo as unknown as Repository<Customer>);
  });

  it('creates a customer with address', async () => {
    const customer = await service.create({
      first: 'John',
      last: 'Doe',
      age: 30,
      email: 'john@example.com',
      address: { street: '123', city: 'City', state: 'CA', zipcode: '12345' },
    });
    expect(repo.create).toHaveBeenCalled();
    expect(customer.address.street).toBe('123');
  });

  it('throws when customer not found', async () => {
    await expect(service.findOne(2)).rejects.toThrow();
  });
});
