// src/app/page.tsx
"use client"

import React from "react";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Stylisch. Modern. Gesetzeskonform.</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">Diese Beispielseite zeigt ein modernes, responsives Layout inklusive Impressum (gesetzliche Anbieterkennzeichnung).</p>
        </div>
      </section>
    </Layout>
  );
}
