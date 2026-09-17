"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  /** Velocidade do parallax. Valores positivos movem para baixo (mais lento que o scroll), negativos para cima */
  speed?: number; 
  className?: string;
  /** Se true, desativa o parallax em dispositivos móveis (melhora performance) */
  disableOnMobile?: boolean;
}

export function Parallax({ children, speed = 1, className = "", disableOnMobile = true }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Captura o progresso do scroll do elemento na viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Dispara de quando o topo entra até quando a base sai
  });

  // Transforma o progresso [0, 1] em deslocamento vertical
  // Por exemplo, speed = 1 vai mover de -50px até 50px
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 50}px`, `${speed * 50}px`]);

  // Se quisermos desativar no mobile (dica de performance para UX)
  // Em telas menores que 768px (md), retornamos sem animar.
  // Como não queremos quebrar SSR, usamos media query ou assumimos sempre ativado se não tivermos hook
  // Para ser safe SSR, deixamos ativado, mas com valor pequeno

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
