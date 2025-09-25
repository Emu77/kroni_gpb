// src/app/components/Layout.tsx
"use client"

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-700 to-cyan-800 text-slate-100 flex flex-col">
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
