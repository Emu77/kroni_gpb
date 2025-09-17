// src/app/components/Header.tsx
"use client"

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shadow-lg">
          <span className="font-black text-lg tracking-tight">BG</span>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold">E. Kronas im Web!</h1>
          <p className="text-sm text-slate-300"> </p>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 items-center text-sm">
        <Link href="/" className="hover:text-emerald-400">Home</Link>
        <Link href="/kontakt" className="hover:text-emerald-400">Kontakt</Link>
      </nav>

      <div className="md:hidden">{/* mobile nav placeholder */}</div>
    </header>
  );
}
