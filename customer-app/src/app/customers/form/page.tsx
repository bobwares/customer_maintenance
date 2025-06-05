// App: Customer CRUD Application
// Package: customer-app
// File: src/app/customers/form/page.tsx
// Version: 2.0.46
// Author: Bobwares
// Date: 2025-06-05 07:30:00 UTC
// Description: Customer form page for adding or editing records.
//
"use client";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../page.module.css';

const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
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

export default function CustomerFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');
  const editingId = idParam ? Number(idParam) : null;

  const [form, setForm] = useState<Customer>({
    id: 0,
    first: '',
    last: '',
    age: 0,
    email: '',
    address: { street: '', city: '', state: '', zipcode: '' },
  });

  useEffect(() => {
    if (editingId !== null) {
      fetch(`${API_URL}/${editingId}`)
        .then((res) => res.json())
        .then((data) => setForm({ ...data, address: data.address ?? { street: '', city: '', state: '', zipcode: '' } }));
    }
  }, [editingId]);

  const setAddress = (key: keyof Address, value: string) => {
    setForm((prev) => ({
      ...prev,
      address: { ...(prev.address || { street: '', city: '', state: '', zipcode: '' }), [key]: value },
    }));
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
    router.push('/customers');
  };

  return (
    <div className={styles.container}>
      <h1>{editingId === null ? 'Add Customer' : 'Edit Customer'}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.col}>
          <label>
            First
            <input value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} required maxLength={30} />
          </label>
          <label>
            Last
            <input value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} required maxLength={30} />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={30} />
          </label>
          <label>
            Age
            <input type="number" value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })} min={0} required />
          </label>
        </div>
        <div className={styles.col}>
          <label>
            Street
            <input value={form.address?.street ?? ''} onChange={(e) => setAddress('street', e.target.value)} required maxLength={30} />
          </label>
          <label>
            City
            <input value={form.address?.city ?? ''} onChange={(e) => setAddress('city', e.target.value)} required maxLength={30} />
          </label>
          <div className={styles.row}>
            <label>
              State
              <select className={styles.stateSelect} value={form.address?.state ?? ''} onChange={(e) => setAddress('state', e.target.value)} required>
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
              <input value={form.address?.zipcode ?? ''} onChange={(e) => setAddress('zipcode', e.target.value)} required maxLength={10} className={styles.zipInput} />
            </label>
          </div>
        </div>
        <div className={styles.formButtons}>
          <button type="submit" className={styles.button}>
            {editingId === null ? 'Add' : 'Update'}
          </button>
          <button type="button" onClick={() => router.push('/customers')} className={`${styles.button} ${styles.cancelButton}`}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
