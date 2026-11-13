"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { services, type ServiceId } from "@/config/site";
import { cn } from "@/lib/utils";
import { Photo } from "@/components/krona/photo";
import { ArrowIcon } from "@/components/krona/ui";
import { Reveal, routeEase } from "@/components/krona/motion";

const images: Record<ServiceId, { name: string; alt: string; focus?: string }> = {
  lotacao: { name: "estrada-chuva-lanternas", alt: "Carretas em rodovia sob chuva, lanternas traseiras acesas", focus: "60% 50%" },
  fracionada: { name: "paletes-empilhadeira", alt: "Empilhadeira movimentando palete envolto em filme entre fileiras de cargas", focus: "35% 60%" },
  reversa: { name: "coleta-caixas-reversa", alt: "Profissional carregando caixas de papelão em uma coleta", focus: "55% 40%" },
  especiais: { name: "carregamento-plataforma", alt: "Empilhadeira carregando paletes na carroceria de um caminhão", focus: "50% 55%" },
};

/**
 * Serviços como listagem editorial: imagem sticky que responde ao serviço ativo
 * (hover, foco ou posição de scroll). Sem grade de cards.
 */
export function ServicesEditorial() {
  const [active, setActive] = useState<ServiceId>("lotacao");
  const reduce = useReducedMotion();

  return (
    <section className="k-section border-t border-line bg-paper" aria-labelledby="servicos-home">
      <div className="k-container">
        <div className="k-grid gap-y-12">
          {/* Sticky image (desktop) */}
          <div className="relative col-span-12 hidden lg:col-span-5 lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 0% 100%)" }}
                    animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: reduce ? 0.2 : 0.9, ease: routeEase }}
                  >
                    <Photo
                      name={images[active].name}
                      alt={images[active].alt}
                      focus={images[active].focus}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="h-full w-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <Reveal>
              <h2 id="servicos-home" className="t-h2 max-w-[14ch]">
                Serviços de transporte
              </h2>
            </Reveal>
            <p className="t-body mt-6 max-w-lg text-steel">
              Trabalhamos com quatro modalidades de transporte rodoviário. Depois de conhecer a sua carga, indicamos a que
              faz mais sentido para o volume, o prazo e o destino.
            </p>

            <ol className="mt-14 border-t border-line md:mt-20">
              {services.map((s) => (
                <ServiceRow key={s.id} id={s.id} active={active === s.id} onActivate={() => setActive(s.id)} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ id, active, onActivate }: { id: ServiceId; active: boolean; onActivate: () => void }) {
  const s = services.find((x) => x.id === id)!;
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-48% 0px -48% 0px" });

  useEffect(() => {
    if (inView) onActivate();
  }, [inView, onActivate]);

  return (
    <li ref={ref} className="border-b border-line" onMouseEnter={onActivate}>
      {/* Mobile image */}
      <div className="pt-8 lg:hidden">
        <Photo name={images[id].name} alt={images[id].alt} focus={images[id].focus} sizes="100vw" className="aspect-[16/11] w-full bg-ink" />
      </div>
      <Link
        href={`/servicos#${id}`}
        onFocus={onActivate}
        className="group block py-8 md:py-10"
        aria-describedby={`svc-${id}-summary`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h3
            className={cn(
              "text-[clamp(2.1rem,1.3rem+3vw,4rem)] leading-[0.98] font-[520] tracking-[-0.038em] transition-[color,transform] duration-500 ease-[var(--ease-route)] [font-variation-settings:'wdth'_92]",
              active ? "text-ink lg:translate-x-2" : "text-ink lg:text-ink/35",
            )}
          >
            {s.title}
          </h3>
          <span className="t-label text-steel">{s.code}</span>
        </div>
        <div className={cn("grid transition-[grid-template-rows] duration-500 ease-[var(--ease-route)] lg:grid-rows-[0fr]", active && "lg:grid-rows-[1fr]")}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-5 pt-5 md:flex-row md:items-end md:justify-between">
              <p id={`svc-${id}-summary`} className="t-body max-w-md text-steel">
                {s.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-krona">
                Ver detalhes <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
