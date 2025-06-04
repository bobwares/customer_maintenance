// App: Customer CRUD Application
// Package: customer-app
// File: src/app/layout.tsx
// Version: 2.0.33
// Author: Bobwares
// Date: 2025-06-04 21:55:00 UTC
// Description: Root layout for the Next.js application.
//
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Customer App',
  description: 'Customer maintenance demo',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
