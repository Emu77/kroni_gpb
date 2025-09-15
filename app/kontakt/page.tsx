"use client"

import React from "react";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-rose-900 text-slate-100 flex flex-col">
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shadow-lg">
            <span className="font-black text-lg tracking-tight">BG</span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">E. Kronas im Web!</h1>
            <p className="text-sm text-slate-300">mit </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#kontakt" className="hover:underline">Kontakt</a>
          <a href="#impressum" className="border border-white/10 px-3 py-2 rounded-lg hover:bg-white/5">Impressum</a>
        </nav>

        <div className="md:hidden">{/* mobile nav placeholder */}</div>
      </header>

      <section id="home" className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Stylisch. Modern. Gesetzeskonform.</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">Diese Beispielseite zeigt ein modernes, responsives Layout inklusive Impressum (gesetzliche Anbieterkennzeichnung). Passe die Inhalte unten an deine Firmendaten an.</p>

          <div className="mt-8 flex gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-white/10 px-5 py-3 rounded-lg shadow hover:bg-white/20">Kontakt aufnehmen</a>
            <a href="#impressum" className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 rounded-lg">Impressum lesen</a>
          </div>
        </div>

        <div className="md:flex-1 w-full">
          <div className="bg-white/6 p-8 rounded-2xl backdrop-blur-md border border-white/6 shadow-xl">
            <h3 className="text-xl font-bold">Schnellübersicht</h3>
            <ul className="mt-4 text-slate-200 space-y-2">
              <li>✓ Responsives Layout (Tailwind)</li>
              <li>✓ Klar gestaltetes Impressum</li>
              <li>✓ Platzhalterdaten zum Ersetzen</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="kontakt" className="container mx-auto px-6 py-12">
        <div className="bg-white/4 p-8 rounded-2xl border border-white/6 max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold">Kontakt</h3>
          <p className="mt-2 text-slate-300">Schreib uns eine Nachricht oder ruf an — wir melden uns zurück.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input aria-label="Name" className="p-3 rounded-lg bg-white/5 border border-white/6" placeholder="Dein Name" />
            <input aria-label="E-Mail" className="p-3 rounded-lg bg-white/5 border border-white/6" placeholder="E-Mail" />
            <input aria-label="Betreff" className="p-3 rounded-lg bg-white/5 border border-white/6 md:col-span-2" placeholder="Betreff" />
            <textarea aria-label="Nachricht" className="p-3 rounded-lg bg-white/5 border border-white/6 md:col-span-2" rows={5} placeholder="Deine Nachricht" />
            <button type="button" className="md:col-span-2 bg-indigo-600/90 hover:bg-indigo-500 px-6 py-3 rounded-lg font-semibold">Nachricht senden</button>
          </form>
        </div>
      </section>

      <section id="impressum" className="container mx-auto px-6 py-16">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/6 max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold">Impressum</h3>
          <p className="mt-4 text-slate-200">Die folgenden Angaben sind Musterangaben. Bitte ersetze sie durch deine tatsächlichen Unternehmensdaten oder lasse das Impressum von einer juristisch bevollmächtigten Person prüfen.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-200">
            <div>
              <h4 className="font-bold">Angaben gemäß § 5 TMG</h4>
              <p className="mt-2">Beispiel GmbH<br />Musterstraße 1<br />12345 Musterstadt</p>
            </div>

            <div>
              <h4 className="font-bold">Vertreten durch</h4>
              <p className="mt-2">Geschäftsführer: Max Mustermann</p>
            </div>

            <div>
              <h4 className="font-bold">Kontakt</h4>
              <p className="mt-2">Telefon: +49 (0) 123 456789<br />E-Mail: info@beispiel.de</p>
            </div>

            <div>
              <h4 className="font-bold">Registereintrag</h4>
              <p className="mt-2">Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Musterstadt<br />Registernummer: HRB 12345</p>
            </div>

            <div>
              <h4 className="font-bold">Umsatzsteuer-ID</h4>
              <p className="mt-2">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789</p>
            </div>

            <div>
              <h4 className="font-bold">Verantwortlich für den Inhalt</h4>
              <p className="mt-2">Max Mustermann, Musterstraße 1, 12345 Musterstadt</p>
            </div>
          </div>

          <div className="mt-8 text-sm text-slate-300">
            <h4 className="font-semibold">Haftungsausschluss</h4>
            <p className="mt-2">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
          </div>

        </div>
      </section>

      <footer className="mt-auto border-t border-white/6">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-300">
          <div>© {new Date().getFullYear()} Beispiel GmbH — Alle Rechte vorbehalten.</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="/datenschutz" className="hover:underline">Datenschutz</a>
            <a href="#impressum" className="hover:underline">Impressum</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
