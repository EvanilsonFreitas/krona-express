"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import { indicators, type Indicator } from "@/config/site";
import { cn } from "@/lib/utils";
import { routeEase, usePrefersReducedMotion } from "@/components/krona/motion";

const format = (n: number) => Math.round(n).toLocaleString("pt-BR");

/**
 * Faixa de indicadores (evolução da antiga StatsSection).
 * Uma superfície azul contínua; números com contagem suave ao entrar na tela, uma única vez.
 * O valor final está sempre no HTML (leitores de tela, sem JS e reduced-motion).
 */
export function Indicators() {
  const items = indicators.filter((i) => i.confirmed);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const reduce = usePrefersReducedMotion();

  if (items.length === 0) return null;

  return (
    <section
      ref={ref}
      data-surface="dark"
      aria-label="A Krona em números"
      className="on-dark bg-krona-deep text-white"
    >
      <div className="k-container py-[clamp(4rem,2.5rem+5vw,8rem)]">
        <dl
          className={cn(
            "grid grid-cols-1",
            items.length === 2 && "md:grid-cols-2",
            items.length === 3 && "md:grid-cols-3",
            items.length >= 4 && "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {items.map((item, i) => (
            <div
              key={item.label}
              className="relative flex flex-col-reverse justify-end gap-5 py-8 first:pt-0 last:pb-0 md:px-[clamp(1.25rem,2.5vw,3rem)] md:py-0 md:first:pl-0 md:last:pr-0"
            >
              {/* Divisor discreto: horizontal no mobile, vertical a partir do tablet */}
              {i > 0 && (
                <motion.span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-full origin-left bg-white/20 md:h-full md:w-px md:origin-top"
                  initial={reduce ? false : { scale: 0 }}
                  animate={inView || reduce ? { scale: 1 } : undefined}
                  transition={{ duration: 1.1, ease: routeEase, delay: 0.1 + i * 0.12 }}
                />
              )}
              <dt className="t-body max-w-[24ch] text-white/75">{item.label}</dt>
              <dd className="m-0">
                <CountUp item={item} start={inView} delay={i * 0.14} reduce={Boolean(reduce)} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CountUp({ item, start, delay, reduce }: { item: Indicator; start: boolean; delay: number; reduce: boolean }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  // Prepara o número em 0 enquanto a faixa ainda não foi vista (o HTML inicial traz o valor final).
  useEffect(() => {
    if (reduce || done.current || !numRef.current) return;
    numRef.current.textContent = format(0);
  }, [reduce]);

  useEffect(() => {
    const el = numRef.current;
    if (!start || reduce || done.current || !el) return;
    const controls = animate(0, item.value, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
      onComplete: () => {
        done.current = true;
      },
    });
    return () => controls.stop();
  }, [start, reduce, item.value, delay]);

  const final = `${item.prefix ?? ""}${format(item.value)}${item.suffix ?? ""}`;

  return (
    <span className="block text-[clamp(4.5rem,2.5rem+6.5vw,9rem)] leading-[0.86] font-[520] tracking-[-0.05em] tabular-nums [font-variation-settings:'wdth'_90]">
      <span className="sr-only">{final}</span>
      <span aria-hidden="true">
        {item.prefix}
        <span ref={numRef}>{format(item.value)}</span>
        {item.suffix && <span className="text-[0.5em] tracking-[-0.02em] text-white/80">{item.suffix}</span>}
      </span>
    </span>
  );
}
