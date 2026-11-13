"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { asset } from "@/lib/asset";
import { whatsappLink } from "@/config/site";
import { ActionLink, TextLink } from "@/components/krona/ui";
import { routeEase, usePrefersReducedMotion } from "@/components/krona/motion";

const lines = ["Fretes rodoviários", "planejados com você."];

/**
 * Hero cinematográfico.
 * Footage: rodovia com caminhões em luz rasante (tomada aérea). Representa o universo
 * rodoviário, não uma frota própria. Loop codificado com crossfade (sem emenda visível).
 * - <picture> art-directed por baixo (poster desktop/mobile) = LCP rápido e fallback.
 * - Vídeo mobile vertical recortado sobre a rodovia; desktop 1080p WebM/MP4.
 * - prefers-reduced-motion: sem autoplay, poster estático; controle de play disponível.
 */
export function Hero() {
  const reduce = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlaying = () => setReady(true);
    const sync = () => setPaused(v.paused);
    v.addEventListener("playing", onPlaying);
    v.addEventListener("pause", sync);
    v.addEventListener("play", sync);
    if (reduce) {
      v.pause();
    } else {
      v.play().catch(() => {
        /* autoplay bloqueado: o poster permanece visível */
      });
    }
    // Sincroniza o estado do botão com o elemento de vídeo (sistema externo).
    const raf = requestAnimationFrame(sync);
    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("pause", sync);
      v.removeEventListener("play", sync);
    };
  }, [reduce]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <section
      ref={sectionRef}
      data-surface="dark"
      className="on-dark relative isolate flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-ink text-white"
      aria-label="Apresentação"
    >
      <motion.div className="absolute inset-0 -z-10" style={reduce ? undefined : { scale: videoScale }}>
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={asset("/media/hero/hero-poster-mobile.webp")} type="image/webp" />
          <source srcSet={asset("/media/hero/hero-poster.webp")} type="image/webp" />
          <img src={asset("/media/hero/hero-poster.jpg")} alt="" fetchPriority="high" className="h-full w-full object-cover" />
        </picture>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          preload={reduce ? "none" : "auto"}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source media="(max-width: 767px)" src={asset("/media/hero/hero-mobile.mp4")} type="video/mp4" />
          <source media="(min-width: 768px)" src={asset("/media/hero/hero-1080.webm")} type="video/webm" />
          <source src={asset("/media/hero/hero-1080.mp4")} type="video/mp4" />
        </video>
        {/* Gradação localizada: contraste onde o texto está, luz preservada no restante */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_18_42/0.55)_0%,rgb(6_18_42/0)_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(6_18_42/0.92)_0%,rgb(6_18_42/0.55)_32%,rgb(6_18_42/0)_62%)]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(6_18_42/0.5)_0%,rgb(6_18_42/0)_55%)] md:block" />
      </motion.div>

      <motion.div className="k-container mt-auto w-full pb-8 md:pb-12" style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}>
        <div className="k-grid items-end gap-y-8 md:gap-y-10">
          <h1 className="t-display col-span-12 text-[clamp(3.1rem,1rem+6.6vw,8.25rem)]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, ease: routeEase, delay: 0.3 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="col-span-12 grid gap-x-8 gap-y-7 border-t border-white/20 pt-7 lg:grid-cols-12"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: routeEase, delay: 0.7 }}
          >
            <p className="t-body max-w-md text-white/85 lg:col-span-5">
              Lotação, carga fracionada, logística reversa e operações dedicadas. Nossa equipe organiza cada embarque e
              acompanha o transporte até a entrega.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:col-span-7 lg:justify-end">
              <ActionLink href="/cotacao" variant="light" className="sm:min-w-60">
                Solicitar cotação
              </ActionLink>
              <ActionLink
                href={whatsappLink("Olá! Gostaria de solicitar uma cotação de frete.")}
                external
                icon="whatsapp"
                variant="outline-inverse"
                className="sm:min-w-60"
              >
                Falar no WhatsApp
              </ActionLink>
            </div>
            <div className="flex items-center justify-between gap-4 lg:col-span-12">
              <TextLink href="/servicos" inverse className="text-white/85">
                Conhecer os serviços
              </TextLink>
              <button
                type="button"
                onClick={toggle}
                className="flex min-h-11 cursor-pointer items-center gap-2 text-[0.8125rem] text-white/70 transition-colors hover:text-white"
                aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}
              >
                {paused ? (
                  <svg viewBox="0 0 12 12" className="size-2.5" fill="currentColor" aria-hidden="true"><path d="M2 1l9 5-9 5z" /></svg>
                ) : (
                  <svg viewBox="0 0 12 12" className="size-2.5" fill="currentColor" aria-hidden="true"><path d="M2 1h3v10H2zM7 1h3v10H7z" /></svg>
                )}
                {paused ? "Reproduzir vídeo" : "Pausar vídeo"}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
