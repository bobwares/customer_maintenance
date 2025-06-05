// App: Customer CRUD Application
// Package: customer-app
// File: src/app/customers/page.tsx
// Version: 2.0.41
// Author: Bobwares
// Date: 2025-06-05 06:37:28 UTC
// Description: Customer maintenance page using customer-api backend.
//
"use client";
import { useEffect, useState } from 'react';
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
  const [form, setForm] = useState<Customer>({
    id: 0,
    first: '',
    last: '',
    age: 0,
    email: '',
    address: { street: '', city: '', state: '', zipcode: '' },
  });
  const [editingId, setEditingId] = useState<number | null>(null);

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
            />
          </label>
          <label>
            Last
            <input
              value={form.last}
              onChange={(e) => setForm({ ...form, last: e.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
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
            />
          </label>
          <label>
            City
            <input
              value={form.address?.city ?? ''}
              onChange={(e) => setAddress('city', e.target.value)}
              required
            />
          </label>
          <label>
            State
            <input
              value={form.address?.state ?? ''}
              onChange={(e) => setAddress('state', e.target.value)}
              required
              maxLength={2}
            />
          </label>
          <label>
            Zipcode
            <input
              value={form.address?.zipcode ?? ''}
              onChange={(e) => setAddress('zipcode', e.target.value)}
              required
            />
          </label>
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
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Age</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.first}</td>
                <td>{c.last}</td>
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
