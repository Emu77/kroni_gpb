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
    <div
      className="font-sans min-h-screen p-8 sm:p-20"
      style={{
        background: "linear-gradient(180deg,#d1fae5,#86efac)",
        color: "#052e16",
      }}
    >
      <main className="max-w-3xl mx-auto flex flex-col items-center sm:items-start gap-8">
        {/* Bild */}
        <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
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
                  : `translateY(${6 + (i % 4)}px) scale(1.02)`,
                transition:
                  "opacity 350ms ease-out, transform 400ms cubic-bezier(.2,.9,.2,1)",
                zIndex: i,
              }}
            />
          ))}
        </div>

        {/* Texte */}
        <div className="w-full text-center sm:text-left">
          <h1
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: "#065f46" }}
          >
            Willkommen auf meiner Homepage!
          </h1>
          <p className="mt-4 text-lg max-w-xl" style={{ color: "#064e3b" }}>
            Hallo, ich bin Emu. Hier teile ich Projekte, Ideen und alles,
            was mich inspiriert — bunt, lebendig und natürlich.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/emu"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-6 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              style={{
                background: "#15803d",
                color: "white",
              }}
            >
              GitHub
            </a>
            <a
              href="https://www.bio-gut.de"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-6 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              style={{
                background: "#eab308",
                color: "#1c1917",
              }}
            >
              Meine Projekte
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="mt-12 text-center"
        style={{ color: "#064e3b", fontSize: 14 }}
      >
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

