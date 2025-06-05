// App: Customer CRUD Application
// Package: customer-app
// File: src/app/customers/page.tsx
// Version: 2.0.45
// Author: Bobwares
// Date: 2025-06-05 07:21:35 UTC
// Description: Customer maintenance page using customer-api backend.
//
"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

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
  const [form, setForm] = useState<Customer>({
    id: 0,
    first: '',
    last: '',
    age: 0,
    email: '',
    address: { street: '', city: '', state: '', zipcode: '' },
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
    key: 'last',
    direction: 'asc',
  });

  const loadCustomers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const resetForm = () => {
    setForm({
      id: 0,
      first: '',
      last: '',
      age: 0,
      email: '',
      address: { street: '', city: '', state: '', zipcode: '' },
    });
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form };
    if (editingId === null) {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch(`${API_URL}/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    resetForm();
    loadCustomers();
  };

  const handleEdit = (id: number) => {
    const customer = customers.find((c) => c.id === id);
    if (!customer) return;
    setForm({ ...customer, address: customer.address ?? { street: '', city: '', state: '', zipcode: '' } });
    setEditingId(id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (editingId === id) {
      resetForm();
    }
    loadCustomers();
  };

  const setAddress = (key: keyof Address, value: string) => {
    setForm((prev) => ({
      ...prev,
      address: { ...(prev.address || { street: '', city: '', state: '', zipcode: '' }), [key]: value },
    }));
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.col}>
          <label>
            First
            <input
              value={form.first}
              onChange={(e) => setForm({ ...form, first: e.target.value })}
              required
              maxLength={30}
            />
          </label>
          <label>
            Last
            <input
              value={form.last}
              onChange={(e) => setForm({ ...form, last: e.target.value })}
              required
              maxLength={30}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={30}
            />
          </label>
          <label>
            Age
            <input
              type="number"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
              min={0}
              required
            />
          </label>
        </div>
        <div className={styles.col}>
          <label>
            Street
            <input
              value={form.address?.street ?? ''}
              onChange={(e) => setAddress('street', e.target.value)}
              required
              maxLength={30}
            />
          </label>
          <label>
            City
            <input
              value={form.address?.city ?? ''}
              onChange={(e) => setAddress('city', e.target.value)}
              required
              maxLength={30}
            />
          </label>
          <div className={styles.row}>
            <label>
              State
              <select
                className={styles.stateSelect}
                value={form.address?.state ?? ''}
                onChange={(e) => setAddress('state', e.target.value)}
                required
              >
                <option value="">Select...</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Zipcode
              <input
                value={form.address?.zipcode ?? ''}
                onChange={(e) => setAddress('zipcode', e.target.value)}
                required
                maxLength={10}
                className={styles.zipInput}
              />
            </label>
          </div>
        </div>
        <div className={styles.formButtons}>
          <button type="submit" className={styles.button}>
            {editingId === null ? 'Add' : 'Update'}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className={`${styles.button} ${styles.cancelButton}`}
          >
            {editingId === null ? 'Reset' : 'Cancel'}
          </button>
        </div>
      </form>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('last')}>Last, First</th>
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
                  <button onClick={() => handleEdit(c.id)}>Edit</button>
                  <button onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
