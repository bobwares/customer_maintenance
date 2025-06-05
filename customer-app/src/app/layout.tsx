// App: Customer CRUD Application
// Package: customer-app
// File: src/app/layout.tsx
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:14:14 UTC
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
