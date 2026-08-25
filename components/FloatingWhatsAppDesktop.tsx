"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type WhatsAppMode = "hidden" | "icon" | "full";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.42 2.18 11.85c0 1.74.45 3.44 1.32 4.95L2 22l5.35-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.85 0-2.63-1.03-5.1-2.84-7.03Zm-7.02 15.2h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.09-.2-.31a8.15 8.15 0 0 1-1.25-4.35c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.76 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.15 8.16Zm4.47-6.11c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.17-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.52.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function FloatingWhatsAppDesktop() {
  const [mode, setMode] = useState<WhatsAppMode>("hidden");

  useEffect(() => {
    const sobre = document.getElementById("sobre");
    const local = document.getElementById("local");

    if (!sobre || !local) return;

    const updateMode = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const sobreStart = sobre.offsetTop - viewportHeight * 0.75;
      const localStart = local.offsetTop - viewportHeight * 0.75;

      if (scrollY < sobreStart) {
        setMode("hidden");
        return;
      }

      if (scrollY < localStart) {
        setMode("icon");
        return;
      }

      setMode("full");
    };

    updateMode();

    window.addEventListener("scroll", updateMode, { passive: true });
    window.addEventListener("resize", updateMode);

    return () => {
      window.removeEventListener("scroll", updateMode);
      window.removeEventListener("resize", updateMode);
    };
  }, []);

  const isVisible = mode !== "hidden";
  const isExpanded = mode === "full";

  return (
    <Link
      href="https://wa.me/5511947961496?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Le%20Club"
      target="_blank"
      rel="noreferrer"
      aria-label="Fale no WhatsApp"
      className={[
        "fixed bottom-8 right-8 z-50 inline-flex md:flex items-center overflow-hidden rounded-full bg-[var(--nav-text)] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
        isExpanded
          ? "h-12 w-12 justify-center md:w-auto md:justify-start md:gap-2 md:px-5"
          : "h-12 w-12 justify-center",
      ].join(" ")}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />

      <span
        className={[
          "whitespace-nowrap text-sm font-medium transition-all duration-300",
          isExpanded
            ? "max-w-0 opacity-0 md:max-w-[160px] md:opacity-100"
            : "max-w-0 opacity-0",
        ].join(" ")}
      >
        Fale no WhatsApp
      </span>
    </Link>
  );
}