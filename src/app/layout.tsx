'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

import '../styles/globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body>
        <main>
          yo hello
        </main>
      </body>
    </html>
  );
}
