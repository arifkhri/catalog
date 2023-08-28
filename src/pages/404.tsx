'use client';

import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className="bg-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <h1 className="mt-8 text-4xl md:text-6xl">Halaman tidak ditemukan :(</h1>
          <a href="/" className="link" style={{color: '#000'}}>Kembali</a>
        </div>
      </section>
    </main>
  );
}
