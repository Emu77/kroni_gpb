"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const LAYERS = 25;
  const layers = Array.from({ length: LAYERS }, (_, i) => i);
  const [visible, setVisible] = useState<boolean[]>(() => Array(LAYERS).fill(false));

  useEffect(() => {
    const timers: number[] = [];
    layers.forEach((idx, i) => {
      const t = window.setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[idx] = true;
          return next;
        });
      }, i * 90);
      timers.push(t);
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="font-sans min-h-screen p-6 sm:p-20 bg-gradient-to-b from-emerald-100 to-emerald-200 text-emerald-950">
      <main className="max-w-4xl mx-auto flex flex-col items-center sm:items-start gap-12">
        
        {/* Bild mit Layer-Effekt */}
        <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-emerald-300">
          {layers.map((i) => (
            <img
              key={i}
              src={`https://www.bio-gut.de/shared/layer.php?foto=kronas.jpg&dichte=25&nr=${i}`}
              alt={`Layer ${i}`}
              draggable={false}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: visible[i] ? 1 : 0,
                transform: visible[i]
                  ? "translateY(0) scale(1)"
                  : `translateY(${6 + (i % 4)}px) scale(1.01)`,
                transition:
                  "opacity 400ms ease-out, transform 500ms cubic-bezier(.2,.8,.2,1)",
                zIndex: i,
              }}
            />
          ))}
        </div>

        {/* Texte */}
        <section className="w-full text-center sm:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-emerald-900">
            Willkommen auf meiner Homepage!
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl leading-relaxed text-emerald-800">
            Hallo, ich bin Emu. Hier teile ich Projekte, Ideen und alles, was mich inspiriert – digital, lebendig und natürlich.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://github.com/emu"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-lg transition-all duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.bio-gut.de"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-emerald-950 font-medium shadow-lg transition-all duration-200"
            >
              Meine Projekte
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-emerald-300 pt-8 text-center text-sm text-emerald-700">
        <div>© {new Date().getFullYear()} Emu. Alle Rechte vorbehalten.</div>
        <div className="mt-2 flex gap-4 justify-center">
          <a className="hover:underline" href="/impressum">
            Impressum
          </a>
          <a className="hover:underline" href="/kontakt">
            Kontakt
          </a>
        </div>
      </footer>
    </div>
  );
}

