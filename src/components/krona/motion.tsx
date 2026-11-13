"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

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
  const reduce = useReducedMotion();
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

/** Revelação de imagem por máscara, no sentido do percurso. */
export function MaskReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.25, ease: routeEase, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Linha de rota que se desenha ao entrar na tela, terminando em um nó. */
export function RouteRule({ className, inverse = false, delay = 0 }: { className?: string; inverse?: boolean; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative h-px w-full", className)} aria-hidden="true">
      <div className={cn("absolute inset-0", inverse ? "bg-line-inverse" : "bg-line")} />
      <motion.div
        className={cn("absolute inset-y-0 left-0 w-full origin-left", inverse ? "bg-white/70" : "bg-ink")}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.4, ease: routeEase, delay }}
      />
    </div>
  );
}

/**
 * Texto revelado palavra a palavra conforme o scroll avança.
 * Leitura completa garantida: sem JS ou com reduced-motion, o texto aparece inteiro.
 */
export function ScrollText({ text, className, mutedClassName = "opacity-[0.16]" }: { text: string; className?: string; mutedClassName?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  if (reduce) return <p className={className}>{text}</p>;

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
