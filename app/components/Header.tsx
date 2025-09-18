// src/app/components/Header.tsx
"use client"

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-white">E. Kronas im Web!</h1>
            <p className="text-sm text-slate-300"> </p>
          </div>
        </div>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <Link href="/kontakt" className="hover:text-emerald-400">Kontakt</Link>
        </nav>

        {/* Mobile-Menü-Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400 transition-transform duration-300 transform rotate-90"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile-Menü-Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900 bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <button
            className="absolute top-8 right-6 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-blue-400 transition-transform duration-300 transform rotate-90"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="/"
              className="text-4xl font-extrabold text-white hover:text-blue-400 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/kontakt"
              className="text-4xl font-extrabold text-white hover:text-blue-400 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
