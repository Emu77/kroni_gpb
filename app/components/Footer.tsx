// src/app/components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-auto border-t border-white/6">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-300">
        <div>© {new Date().getFullYear()} Emanuel Kronas — Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  );
}
