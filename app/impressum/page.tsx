// src/app/impressum/page.tsx
"use client"

import React from "react";
import Layout from "../components/Layout";

export default function Impressum()  {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 flex-grow">
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
    </Layout>
  );
}
