"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Photo } from "@/components/krona/photo";
import { routeEase, usePrefersReducedMotion } from "@/components/krona/motion";

type ImageProps = { name: string; alt: string; focus?: string };

/**
 * Abertura das páginas internas.
 * - "image": fotografia full-bleed, título no terço inferior (mesma gramática do hero da Home, menor).
 * - "plain": composição editorial sobre papel, sem imagem.
 */
export function PageHero({
  label,
  title,
  lead,
  image,
  aside,
}: {
  label: string;
  title: string[];
  lead?: string;
  image?: ImageProps;
  aside?: ReactNode;
}) {
  const reduce = usePrefersReducedMotion();
  const dark = Boolean(image);

  const titleEl = (
    <h1 className="t-h1">
      {title.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.07em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: routeEase, delay: 0.15 + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );


  const leadEl = lead && (
    <motion.p
      className={`t-lead max-w-xl ${dark ? "text-white/80" : "text-steel"}`}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: routeEase, delay: 0.45 }}
    >
      {lead}
    </motion.p>
  );

  if (image) {
    return (
      <section aria-label={label} data-surface="dark" className="on-dark relative isolate flex min-h-[min(88svh,900px)] flex-col overflow-hidden bg-ink text-white">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: routeEase }}
        >
          <Photo name={image.name} alt={image.alt} focus={image.focus} priority sizes="100vw" className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(6_18_42/0.55)_0%,rgb(6_18_42/0)_25%),linear-gradient(0deg,rgb(6_18_42/0.9)_0%,rgb(6_18_42/0.35)_45%,rgb(6_18_42/0.05)_75%)]" />
        <div className="k-container mt-auto pt-40 pb-12 md:pb-16">
          <div className="k-grid items-end gap-y-8">
            <div className="col-span-12 lg:col-span-8">{titleEl}</div>
            <div className="col-span-12 lg:col-span-4 lg:pb-2">{leadEl}</div>
          </div>
          {aside}
        </div>
      </section>
    );
  }

  return (
    <section aria-label={label} className="bg-paper pt-[calc(var(--header-h)+clamp(3.5rem,2rem+5vw,7rem))] pb-[clamp(3rem,2rem+3vw,5rem)]">
      <div className="k-container">
        <div className="k-grid items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">{titleEl}</div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">{leadEl}</div>
        </div>
        {aside}
      </div>
    </section>
  );
}
