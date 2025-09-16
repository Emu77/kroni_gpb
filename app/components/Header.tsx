// src/app/components/Header.tsx
"use client"

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold">E. Kronas im Web!</h1>
          <p className="text-sm text-slate-300"> </p>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 items-center text-sm">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/kontakt" className="hover:text-blue-400">Kontakt</Link>
        <Link href="/impressum" className="border border-blue-600/40 px-3 py-2 rounded-lg hover:bg-blue-600/20">Impressum</Link>
      </nav>

      <div className="md:hidden">{/* mobile nav placeholder */}</div>
    </header>
  );
}
