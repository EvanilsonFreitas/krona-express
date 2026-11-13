"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/krona/ui";

/**
 * WhatsApp flutuante — integrado à linguagem (superfície reta, navy),
 * expande o rótulo no desktop; no mobile fica compacto e não cobre o conteúdo.
 * Na Home só aparece após o hero (onde o CTA de WhatsApp já está visível).
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  const isHome = (pathname.replace(/\/$/, "") || "/") === "/";
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = !isHome || past;

  return (
    <a
      href={whatsappLink("Olá! Gostaria de falar com um consultor da Krona Express.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "group fixed right-4 bottom-4 z-[var(--z-floating)] flex h-13 items-center overflow-hidden bg-ink text-white shadow-[0_10px_30px_-12px_rgb(6_18_42/0.55)] transition-[transform,opacity] duration-500 ease-[var(--ease-route)] md:right-6 md:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span className="flex size-13 shrink-0 items-center justify-center bg-krona">
        <WhatsAppIcon className="size-[22px]" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[0.875rem] font-medium transition-[max-width,padding] duration-500 ease-[var(--ease-route)] group-hover:max-w-48 group-hover:px-4 group-focus-visible:max-w-48 group-focus-visible:px-4 md:block">
        Falar no WhatsApp
      </span>
    </a>
  );
}
