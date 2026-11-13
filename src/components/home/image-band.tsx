"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Photo } from "@/components/krona/photo";

/** Faixa fotográfica full-bleed com parallax leve e uma única frase. */
export function ImageBand({
  name,
  alt,
  label,
  statement,
  focus,
}: {
  name: string;
  alt: string;
  label: string;
  statement: string;
  focus?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} data-surface="dark" className="on-dark relative isolate h-[min(88vh,860px)] min-h-[520px] overflow-hidden bg-ink text-white">
      <motion.div className="absolute -inset-y-[10%] inset-x-0 -z-10" style={reduce ? undefined : { y }}>
        <Photo name={name} alt={alt} focus={focus} sizes="100vw" className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(6_18_42/0.85)_0%,rgb(6_18_42/0.2)_45%,rgb(6_18_42/0.1)_100%)]" />
      <div className="k-container flex h-full flex-col justify-between py-10 md:py-14">
        <p className="t-label flex items-center gap-3 text-white/75">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
          {label}
        </p>
        <p className="t-h2 max-w-[18ch]">{statement}</p>
      </div>
    </section>
  );
}
