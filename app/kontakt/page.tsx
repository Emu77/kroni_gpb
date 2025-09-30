import React from "react";
import Layout from "../components/Layout";

export default function Kontakt() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-12 flex-grow">
        <div className="bg-white/4 p-8 rounded-2xl border border-white/6 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold">Kontakt</h3>
          <p className="mt-2 text-slate-300">Schreiben Sie mir eine Nachricht oder rufen Sie an — ich melde mich zurück.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input aria-label="Name" className="p-3 rounded-lg bg-white/5 border border-white/6" placeholder="Dein Name" />
            <input aria-label="E-Mail" className="p-3 rounded-lg bg-white/5 border border-white/6" placeholder="E-Mail" />
            <input aria-label="Betreff" className="p-3 rounded-lg bg-white/5 border border-white/6 md:col-span-2" placeholder="Betreff" />
            <textarea aria-label="Nachricht" className="p-3 rounded-lg bg-white/5 border border-white/6 md:col-span-2" rows={5} placeholder="Deine Nachricht" />
            <button type="button" className="md:col-span-2 bg-blue-600/90 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold">Nachricht senden</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
