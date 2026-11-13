"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "radix-ui";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { nav, site, whatsappLink } from "@/config/site";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { ActionLink, ArrowIcon, WhatsAppIcon } from "@/components/krona/ui";
import { routeEase } from "@/components/krona/motion";

type Tone = "dark" | "light";

function isActive(pathname: string, href: string) {
  const clean = pathname.replace(/\/$/, "") || "/";
  return href === "/" ? clean === "/" : clean.startsWith(href);
}

/**
 * Header: presente quando necessário, discreto quando não.
 * - Sobre o hero: transparente, leve.
 * - Em scroll: superfície sólida e compacta; recolhe ao descer e retorna ao subir.
 * O indicador ativo evolui a antiga "pílula" para um segmento de rota com nó.
 */
export function Header({ tone = "dark" }: { tone?: Tone }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const reduce = useReducedMotion();

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
        hidden && !open ? "-translate-y-full" : "translate-y-0",
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

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="-mr-2 flex size-12 cursor-pointer items-center justify-center lg:hidden"
              aria-label="Abrir menu"
            >
              <span className="flex w-7 flex-col gap-[7px]" aria-hidden="true">
                <span className="h-[1.5px] w-full bg-current" />
                <span className="h-[1.5px] w-4/6 self-end bg-current" />
              </span>
            </button>
          </Dialog.Trigger>
          <AnimatePresence>
            {open && (
              <Dialog.Portal forceMount>
                <Dialog.Content forceMount asChild aria-describedby={undefined}>
                  <motion.div
                    className="on-dark fixed inset-0 z-[var(--z-overlay)] flex flex-col bg-ink text-white"
                    initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
                    animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
                    exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 0.7, ease: routeEase }}
                  >
                    <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>
                    <div className="k-container flex h-[var(--header-h)] items-center justify-between border-b border-line-inverse">
                      {/* eslint-disable-next-line @next/next/no-img-element -- logotipo estático */}
                      <img src={asset("/brand/logo/monochrome/Logo_Krona_Branco.png")} alt="Krona Express" width={66} height={44} className="h-11 w-auto" />
                      <Dialog.Close asChild>
                        <button type="button" className="-mr-2 flex size-12 cursor-pointer items-center justify-center" aria-label="Fechar menu">
                          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
                            <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav aria-label="Principal" className="k-container flex-1 overflow-y-auto py-8">
                      <ol className="border-t border-line-inverse">
                        {nav.map((item, i) => {
                          const active = isActive(pathname, item.href);
                          return (
                            <motion.li
                              key={item.href}
                              className="border-b border-line-inverse"
                              initial={reduce ? false : { opacity: 0, x: -24 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.7, ease: routeEase, delay: 0.15 + i * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                aria-current={active ? "page" : undefined}
                                className="block py-4"
                              >
                                <span className={cn("text-[2.25rem] leading-none font-[520] tracking-[-0.035em]", active ? "text-white" : "text-white/60")}>
                                  {item.label}
                                </span>
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ol>
                    </nav>

                    <div className="k-container space-y-3 border-t border-line-inverse py-6">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-13 items-center justify-between bg-krona px-5 font-medium">
                        <span className="flex items-center gap-3">
                          <WhatsAppIcon className="size-[18px]" /> Falar no WhatsApp
                        </span>
                        <ArrowIcon />
                      </a>
                      <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 pt-2 text-[0.875rem] text-steel-2">
                        <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
                        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </header>
  );
}
