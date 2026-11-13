"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Dialog } from "radix-ui";
import { AnimatePresence, motion } from "motion/react";
import { nav, site, whatsappLink } from "@/config/site";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { Photo } from "@/components/krona/photo";
import { ArrowIcon, WhatsAppIcon } from "@/components/krona/ui";
import { routeEase, usePrefersReducedMotion } from "@/components/krona/motion";

function isActive(pathname: string, href: string) {
  const clean = pathname.replace(/\/$/, "") || "/";
  return href === "/" ? clean === "/" : clean.startsWith(href);
}

/**
 * Navegação mobile/tablet em tela cheia.
 * Radix Dialog garante focus trap, ESC, bloqueio de scroll do body, aria-expanded/aria-controls
 * no gatilho e retorno do foco ao botão ao fechar.
 */
export function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const reduce = usePrefersReducedMotion();
  const ease = routeEase;

  // Bloqueio de scroll do documento enquanto o menu está aberto (e oculta widgets flutuantes).
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", open);
    return () => root.classList.remove("menu-open");
  }, [open]);

  const item = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay } },
          exit: { opacity: 0, transition: { duration: 0.15 } },
        };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="-mr-2 flex size-12 cursor-pointer items-center justify-center lg:hidden" aria-label="Abrir menu" aria-controls="menu-navegacao">
          <span className="flex w-7 flex-col gap-[7px]" aria-hidden="true">
            <span className="h-[1.5px] w-full bg-current" />
            <span className="h-[1.5px] w-4/6 self-end bg-current" />
          </span>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Content forceMount asChild aria-describedby={undefined} id="menu-navegacao">
              <motion.div
                data-surface="dark"
                className="on-dark fixed inset-0 z-[2147483000] flex h-dvh flex-col overflow-hidden bg-ink text-white"
                initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
                animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
                exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
                transition={{ duration: reduce ? 0.2 : 0.45, ease }}
              >
                <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>

                {/* Topo */}
                <div className="shrink-0 border-b border-line-inverse pt-[env(safe-area-inset-top)]">
                  <div className="k-container flex h-[var(--header-h)] items-center justify-between">
                    <Link href="/" onClick={() => setOpen(false)} aria-label="Krona Express, página inicial">
                      {/* eslint-disable-next-line @next/next/no-img-element -- logotipo estático */}
                      <img src={asset("/brand/logo/monochrome/Logo_Krona_Branco.png")} alt="Krona Express" width={66} height={44} className="h-11 w-auto" />
                    </Link>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="-mr-2 flex size-12 cursor-pointer items-center justify-center border border-transparent transition-colors hover:border-line-inverse"
                        aria-label="Fechar menu"
                      >
                        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
                          <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </button>
                    </Dialog.Close>
                  </div>
                </div>

                {/* Corpo: coluna única no celular, duas colunas no tablet */}
                <div className="flex min-h-0 flex-1 flex-col md:grid md:grid-cols-12">
                  <div className="flex shrink-0 flex-col md:col-span-7 md:min-h-0">
                    <nav aria-label="Principal" className="k-container flex flex-col justify-center py-[clamp(1rem,3.5dvh,2.5rem)] md:min-h-0 md:flex-1">
                      <ul>
                        {nav.map((n, i) => {
                          const active = isActive(pathname, n.href);
                          return (
                            <motion.li key={n.href} {...item(0.12 + i * 0.04)}>
                              <Link
                                href={n.href}
                                onClick={() => setOpen(false)}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                  "group flex min-h-12 items-center justify-between gap-6 py-[clamp(0.2rem,0.9dvh,0.6rem)] transition-colors duration-300",
                                  active ? "text-white" : "text-white/55 hover:text-white focus-visible:text-white active:text-white",
                                )}
                              >
                                <span className="relative text-[clamp(2.1rem,1.4rem+3.6vw,3.25rem)] leading-[1.02] font-[520] tracking-[-0.038em] transition-transform duration-300 ease-[var(--ease-route)] [font-variation-settings:'wdth'_92] group-hover:translate-x-1.5">
                                  {n.label}
                                  {active && <span className="absolute -bottom-1 left-0 h-[2px] w-8 bg-gold" aria-hidden="true" />}
                                </span>
                                <ArrowIcon
                                  className={cn(
                                    "size-6 transition-[opacity,transform] duration-300 ease-[var(--ease-route)]",
                                    active ? "opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                                  )}
                                />
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </nav>

                    {/* Atendimento */}
                    <motion.div
                      {...item(0.36)}
                      className="k-container hidden shrink-0 grid-cols-2 gap-6 border-t border-line-inverse py-6 md:grid"
                    >
                      <ContactBlock />
                    </motion.div>
                  </div>

                  {/* Painel visual + conversão */}
                  <div className="flex min-h-0 flex-1 flex-col md:col-span-5 md:border-l md:border-line-inverse">
                    <motion.div
                      className="relative min-h-[120px] flex-1 overflow-hidden bg-navy [@media(max-height:680px)]:hidden"
                      initial={reduce ? false : { clipPath: "inset(0% 100% 0% 0%)" }}
                      animate={{ clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.7, ease, delay: 0.2 } }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    >
                      <Photo
                        name="serra-caminhoes-mata"
                        alt="Caminhões em rodovia de serra cercada de mata"
                        sizes="(min-width: 768px) 42vw, 100vw"
                        widths={[640, 1280]}
                        priority
                        focus="55% 55%"
                        className="absolute inset-0 h-full w-full"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(6_18_42/0.75)_0%,rgb(6_18_42/0)_55%)]" />
                      <p className="t-small absolute bottom-4 left-[var(--gutter)] text-white/85 md:left-8">Transporte rodoviário de cargas</p>
                    </motion.div>

                    <motion.div
                      {...item(0.3)}
                      className="k-container shrink-0 space-y-2.5 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:px-8 md:py-8"
                    >
                      <Link
                        href="/cotacao"
                        onClick={() => setOpen(false)}
                        className="group relative isolate flex min-h-15 items-center justify-between overflow-hidden bg-krona px-5 text-[1.0625rem] font-medium before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-krona-deep before:transition-transform before:duration-500 before:ease-[var(--ease-route)] hover:before:scale-x-100"
                      >
                        Solicitar cotação
                        <ArrowIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-13 items-center justify-between border border-line-inverse px-5 text-[0.9375rem] text-white/90 transition-colors hover:border-white/50"
                      >
                        <span className="flex items-center gap-3">
                          <WhatsAppIcon className="size-[18px]" />
                          Falar no WhatsApp
                        </span>
                        <ArrowIcon direction="up-right" />
                      </a>
                      <div className="grid grid-cols-2 gap-4 pt-4 md:hidden [@media(max-height:600px)]:hidden">
                        <ContactBlock />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function ContactBlock() {
  return (
    <>
      <div className="min-w-0">
        <p className="text-[0.8125rem] text-steel-2">Telefone</p>
        <a href={site.contact.phoneHref} className="t-num mt-1 block text-[0.9375rem] text-white">
          {site.contact.phoneDisplay}
        </a>
      </div>
      <div className="min-w-0">
        <p className="text-[0.8125rem] text-steel-2">E-mail</p>
        <a href={`mailto:${site.contact.email}`} className="mt-1 block truncate text-[0.9375rem] text-white">
          {site.contact.email}
        </a>
      </div>
    </>
  );
}
