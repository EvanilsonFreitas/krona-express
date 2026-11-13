"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";


const reducedQuery = "(prefers-reduced-motion: reduce)";
function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(reducedQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/**
 * prefers-reduced-motion seguro para hidratação: no servidor e na hidratação vale `false`;
 * logo depois o cliente passa a usar a preferência real, sem mismatch de HTML.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(reducedQuery).matches,
    () => false,
  );
}

/** Curva padrão da linguagem "movimento ao longo de uma rota". */
export const routeEase = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Deslocamento horizontal: elementos entram no sentido do fluxo (esquerda → direita). */
  x?: number;
  y?: number;
  as?: "div" | "li" | "p" | "span" | "section" | "header";
  amount?: number;
};

export function Reveal({ children, className, delay = 0, x = -28, y = 0, as = "div", amount = 0.3 }: RevealProps) {
  const reduce = usePrefersReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: routeEase, delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * Revelação de imagem por máscara, no sentido do percurso.
 * O observador fica no wrapper externo: no Chrome, um elemento 100% recortado por clip-path
 * nunca é considerado visível pelo IntersectionObserver.
 */
export function MaskReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.2 }}>
      <motion.div
        className="h-full"
        variants={{ hidden: { clipPath: "inset(0% 100% 0% 0%)" }, shown: { clipPath: "inset(0% 0% 0% 0%)" } }}
        transition={{ duration: 1.25, ease: routeEase, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Texto revelado palavra a palavra conforme o scroll avança.
 * Leitura completa garantida: sem JS ou com reduced-motion, o texto aparece inteiro.
 */
export function ScrollText({ text, className, mutedClassName = "opacity-[0.16]" }: { text: string; className?: string; mutedClassName?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  if (reduce)
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} mutedClassName={mutedClassName}>
            {word}
          </Word>
        ))}
      </span>
    </p>
  );
}

function Word({ children, progress, range, mutedClassName }: { children: string; progress: MotionValue<number>; range: [number, number]; mutedClassName: string }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[0.24em] inline-block">
      <span className={mutedClassName}>{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {children}
      </motion.span>
    </span>
  );
}
