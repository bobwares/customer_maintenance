// App: Customer CRUD Application
// Package: customer-app
// File: src/app/customers/page.tsx
// Version: 2.0.47
// Author: Bobwares
// Date: 2025-06-05 07:44:19 UTC
// Description: Customer table page with navigation to form page.
//
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Customer {
  id: number;
  first: string;
  last: string;
  age: number;
  email: string;
  address?: Address;
}

const API_URL = 'http://localhost:3001/customers';

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
    key: 'last',
    direction: 'asc',
  });
  const router = useRouter();

  const loadCustomers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/customers/form?id=${id}`);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadCustomers();
  };

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    const getValue = (c: Customer) => {
      switch (sortConfig.key) {
        case 'last':
          return c.last;
        case 'first':
          return c.first;
        case 'email':
          return c.email;
        case 'age':
          return c.age;
        case 'street':
          return c.address?.street ?? '';
        case 'city':
          return c.address?.city ?? '';
        case 'state':
          return c.address?.state ?? '';
        case 'zipcode':
          return c.address?.zipcode ?? '';
        default:
          return '';
      }
    };
    const valA = getValue(a);
    const valB = getValue(b);
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortConfig.direction === 'asc' ? valA - valB : valB - valA;
    }
    return sortConfig.direction === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  return (
    <div className={styles.container}>
      <h1>Customer Maintenance</h1>
      <div className={styles.tableHeader}>
        <Link href="/customers/form" className={styles.newButton}>
          New Customer
        </Link>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('last')}>Name</th>
              <th onClick={() => handleSort('email')}>Email</th>
              <th onClick={() => handleSort('age')}>Age</th>
              <th onClick={() => handleSort('street')}>Street</th>
              <th onClick={() => handleSort('city')}>City</th>
              <th onClick={() => handleSort('state')}>State</th>
              <th onClick={() => handleSort('zipcode')}>Zipcode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedCustomers.map((c) => (
              <tr key={c.id}>
                <td>{`${c.last}, ${c.first}`}</td>
                <td>{c.email}</td>
                <td>{c.age}</td>
                <td>{c.address?.street}</td>
                <td>{c.address?.city}</td>
                <td>{c.address?.state}</td>
                <td>{c.address?.zipcode}</td>
                <td>
                  <button className={styles.actionButton} onClick={() => handleEdit(c.id)}>Edit</button>
                  <button className={styles.actionButton} onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
