"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { nav, site } from "@/config/site";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { ActionLink } from "@/components/krona/ui";
import { routeEase, usePrefersReducedMotion } from "@/components/krona/motion";

type Tone = "dark" | "light";

function isActive(pathname: string, href: string) {
  const clean = pathname.replace(/\/$/, "") || "/";
  return href === "/" ? clean === "/" : clean.startsWith(href);
}

/**
 * Header: presente quando necessário, discreto quando não.
 * - Sobre o hero: transparente, leve.
 * - Em scroll: superfície sólida e compacta; recolhe ao descer e retorna ao subir.
 * O indicador ativo evolui a antiga "pílula" para um traço sob o item atual.
 */
export function Header({ tone = "dark" }: { tone?: Tone }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 480) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;
  const onDark = tone === "dark" && !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[var(--z-header)] transition-[transform,background-color,border-color,color] duration-500 ease-[var(--ease-route)]",
        hidden ? "-translate-y-full" : "translate-y-0",
        solid ? "border-b border-line bg-paper/90 text-ink backdrop-blur-md" : "border-b border-transparent",
        onDark ? "text-white" : "text-ink",
      )}
    >
      <div className="k-container flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label="Krona Express, página inicial" className="relative block h-11 w-[66px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- logotipo estático; duas versões para fundos claro/escuro */}
          <img
            src={asset(onDark ? "/brand/logo/monochrome/Logo_Krona_Branco.png" : "/brand/logo/primary/Logo_Krona_Original.png")}
            alt="Krona Express"
            width={66}
            height={44}
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "t-nav relative block px-4 py-3 transition-opacity duration-300",
                      active ? "opacity-100" : "opacity-70 hover:opacity-100",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-route"
                        transition={reduce ? { duration: 0 } : { duration: 0.6, ease: routeEase }}
                        className="absolute inset-x-4 bottom-1.5 h-px bg-current"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={site.contact.phoneHref} className="t-num text-[0.875rem] opacity-75 transition-opacity hover:opacity-100">
            {site.contact.phoneDisplay}
          </a>
          <ActionLink href="/cotacao" variant={onDark ? "light" : "solid"} className="min-h-11 px-4 text-[0.875rem]">
            Solicitar cotação
          </ActionLink>
        </div>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}
