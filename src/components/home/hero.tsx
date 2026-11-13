"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { asset } from "@/lib/asset";
import { whatsappLink } from "@/config/site";
import { ActionLink, TextLink } from "@/components/krona/ui";
import { routeEase } from "@/components/krona/motion";

const lines = ["Precisão", "em cada", "quilômetro."];
const strip = ["Lotação · FTL", "Fracionada · LTL", "Logística reversa", "Operações dedicadas"];

/**
 * Hero cinematográfico.
 * Footage: rodovia com caminhões em luz rasante (tomada aérea). Representa o universo
 * rodoviário — não uma frota própria. Loop codificado com crossfade (sem emenda visível).
 * - <picture> art-directed por baixo (poster desktop/mobile) = LCP rápido e fallback.
 * - Vídeo mobile vertical recortado sobre a rodovia; desktop 1080p WebM/MP4.
 * - prefers-reduced-motion: sem autoplay, poster estático; controle de play disponível.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);
  const nodeLeft = useTransform(progress, (p) => `${p * 100}%`);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let frame = 0;
    // A linha de rota do rodapé acompanha o loop do vídeo (progresso contínuo, sem re-render).
    const tick = () => {
      if (v.duration) progress.set(v.currentTime / v.duration);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const onPlaying = () => setReady(true);
    v.addEventListener("playing", onPlaying);
    if (reduce) {
      v.pause();
    } else {
      v.play().catch(() => {
        /* autoplay bloqueado: o poster permanece visível */
      });
    }
    // Sincroniza o estado da UI com o elemento de vídeo (sistema externo).
    const sync = () => setPaused(v.paused);
    v.addEventListener("pause", sync);
    v.addEventListener("play", sync);
    const raf = requestAnimationFrame(sync);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(frame);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("pause", sync);
      v.removeEventListener("play", sync);
    };
  }, [reduce, progress]);

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
      {/* Media layer */}
      <motion.div className="absolute inset-0 -z-10" style={reduce ? undefined : { scale: videoScale }}>
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={asset("/media/hero/hero-poster-mobile.webp")} type="image/webp" />
          <source srcSet={asset("/media/hero/hero-poster.webp")} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element -- poster art-directed (LCP) */}
          <img
            src={asset("/media/hero/hero-poster.jpg")}
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-[50%_50%]"
          />
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
        {/* Localized grading: legibility where the type lives, light left intact elsewhere */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_18_42/0.55)_0%,rgb(6_18_42/0)_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(6_18_42/0.92)_0%,rgb(6_18_42/0.55)_32%,rgb(6_18_42/0)_62%)]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(6_18_42/0.5)_0%,rgb(6_18_42/0)_55%)] md:block" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="k-container mt-auto w-full pb-6 md:pb-8"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="t-label mb-6 flex items-center gap-3 text-white/75"
          initial={reduce ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: routeEase, delay: 0.2 }}
        >
          <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
          Transporte rodoviário de cargas
        </motion.p>

        <div className="k-grid items-end gap-y-8">
          <h1 className="t-display col-span-12 lg:col-span-7">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, ease: routeEase, delay: 0.35 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="col-span-12 md:col-span-8 lg:col-span-5 lg:col-start-8 lg:pb-3 xl:col-span-4 xl:col-start-9"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: routeEase, delay: 0.75 }}
          >
            <p className="t-body max-w-md text-white/80">
              Lotação, fracionada, logística reversa e operações dedicadas — cada embarque planejado com você e
              acompanhado de perto, da coleta à entrega.
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <ActionLink href="/cotacao" variant="light" className="sm:flex-1">
                Solicitar cotação
              </ActionLink>
              <ActionLink href={whatsappLink("Olá! Gostaria de solicitar uma cotação de frete.")} external icon="whatsapp" variant="outline-inverse" className="sm:flex-1">
                Falar no WhatsApp
              </ActionLink>
            </div>
            <TextLink href="/servicos" inverse className="mt-3 text-white/80">
              Conhecer os serviços
            </TextLink>
          </motion.div>
        </div>

        {/* Route strip */}
        <div className="mt-10 md:mt-14">
          <div className="relative h-px w-full bg-white/20" aria-hidden="true">
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-white/80"
              style={{ scaleX: progress }}
            />
            <motion.span
              className="absolute -top-[2.5px] size-1.5 -translate-x-1/2 rounded-full bg-gold"
              style={{ left: nodeLeft }}
            />
          </div>
          <div className="flex items-center justify-between gap-6 pt-4">
            <ul className="t-label hidden gap-x-10 text-white/65 md:flex" aria-label="Modalidades">
              {strip.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="t-label text-white/65 md:hidden">Da coleta à entrega</p>
            <button
              type="button"
              onClick={toggle}
              className="t-label flex min-h-11 cursor-pointer items-center gap-2.5 text-white/80 transition-colors hover:text-white"
              aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}
            >
              <span aria-hidden="true" className="flex size-3 items-center justify-center">
                {paused ? (
                  <svg viewBox="0 0 12 12" className="size-3" fill="currentColor"><path d="M2 1l9 5-9 5z" /></svg>
                ) : (
                  <svg viewBox="0 0 12 12" className="size-3" fill="currentColor"><path d="M2 1h3v10H2zM7 1h3v10H7z" /></svg>
                )}
              </span>
              {paused ? "Reproduzir" : "Pausar"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
