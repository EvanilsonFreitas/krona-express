"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Eyebrow } from "@/components/krona/ui";
import { Reveal } from "@/components/krona/motion";

export const steps = [
  { title: "Solicitação", text: "Você nos conta origem, destino, tipo de carga e prazo — pelo formulário, WhatsApp ou telefone." },
  { title: "Análise", text: "Avaliamos volume, peso, natureza da mercadoria e as restrições de coleta e de entrega." },
  { title: "Planejamento", text: "Definimos rota, janela de coleta e o veículo adequado para aquele embarque." },
  { title: "Definição da operação", text: "Você recebe a proposta com a modalidade indicada: lotação, fracionada, reversa ou dedicada." },
  { title: "Coleta", text: "A carga é coletada conforme o combinado, com a documentação fiscal conferida." },
  { title: "Acompanhamento", text: "Seguimos o transporte de perto e mantemos você informado ao longo do percurso." },
  { title: "Entrega", text: "Confirmamos a entrega no destino e fechamos o ciclo com você." },
];

/**
 * "Como sua carga avança" — storytelling de rota.
 * Desktop: seção sticky; o scroll vertical desloca a rota horizontalmente e preenche a linha.
 * Mobile / reduced-motion: rota vertical com trilho que se preenche.
 */
export function RouteProcess() {
  const reduce = useReducedMotion();
  return (
    <section data-surface="dark" className="on-dark bg-ink text-white" aria-labelledby="como-operamos">
      <div className="hidden lg:block">{reduce ? <VerticalRoute /> : <HorizontalRoute />}</div>
      <div className="lg:hidden">
        <VerticalRoute />
      </div>
    </section>
  );
}

function Intro({ id }: { id?: string }) {
  return (
    <div className="k-grid items-end gap-y-6">
      <div className="col-span-12 lg:col-span-7">
        <Eyebrow index="03" inverse>
          Como operamos
        </Eyebrow>
        <h2 id={id} className="t-h1 mt-6">
          Como sua carga avança.
        </h2>
      </div>
      <p className="t-body col-span-12 max-w-md text-steel-2 lg:col-span-4 lg:col-start-9">
        Sete etapas, uma mesma lógica: nada sai do lugar antes de estar entendido e planejado.
      </p>
    </div>
  );
}

function HorizontalRoute() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.04, 0.96], [0, -distance]);
  const fill = useTransform(scrollYProgress, [0.04, 0.96], [0, 1]);
  // A linha cobre a trilha inteira; o nó da etapa i fica em i/n dela.
  const lineFill = useTransform(fill, (p) => (p * (steps.length - 1)) / steps.length);

  return (
    <div ref={sectionRef} style={{ height: `${steps.length * 48 + 60}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden pt-[calc(var(--header-h)+3rem)] pb-14">
        <div className="k-container">
          <Intro id="como-operamos" />
        </div>

        <div className="relative">
          <motion.div style={{ x }} className="relative w-max pl-[var(--gutter)]">
            {/* Route line */}
            <div className="absolute top-0 right-0 left-[var(--gutter)] h-px bg-white/15" aria-hidden="true">
              <motion.div className="h-full origin-left bg-white" style={{ scaleX: lineFill }} />
            </div>
            <ol ref={trackRef} className="flex">
              {steps.map((s, i) => (
                <Step key={s.title} index={i} progress={fill} {...s} />
              ))}
            </ol>
          </motion.div>
        </div>

        <div className="k-container t-label flex justify-between text-steel-2">
          <span>Da coleta à entrega</span>
          <span>Role para avançar</span>
        </div>
      </div>
    </div>
  );
}

function Step({ index, title, text, progress }: { index: number; title: string; text: string; progress: MotionValue<number> }) {
  const at = index / (steps.length - 1);
  const passed = useTransform(progress, [Math.max(0, at - 0.06), at], [0.35, 1]);
  const node = useTransform(progress, [Math.max(0, at - 0.02), at], ["rgb(255 255 255 / 0.35)", "#cfa23a"]);
  return (
    <motion.li style={{ opacity: passed }} className="relative w-[min(30vw,440px)] shrink-0 pt-10 pr-16">
      <motion.span style={{ backgroundColor: node }} className="absolute -top-[4px] left-0 size-[9px] rounded-full" aria-hidden="true" />
      <span className="t-label text-steel-2">
        Etapa {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
      </span>
      <h3 className="t-h2 mt-5">{title}</h3>
      <p className="t-body mt-5 max-w-xs text-steel-2">{text}</p>
    </motion.li>
  );
}

function VerticalRoute() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });

  return (
    <div className="k-container k-section">
      <Intro />
      <ol ref={listRef} className="relative mt-16 md:mt-20">
        <li className="absolute top-2 bottom-2 left-[4px] w-px list-none bg-white/15" aria-hidden="true">
          <motion.span className="block h-full w-full origin-top bg-white" style={reduce ? undefined : { scaleY: scrollYProgress }} />
        </li>
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} x={-16} className="relative grid gap-3 pb-12 pl-10 last:pb-0 md:grid-cols-12 md:gap-8">
            <span className="absolute top-[7px] left-0 size-[9px] rounded-full bg-gold" aria-hidden="true" />
            <span className="t-label text-steel-2 md:col-span-2">Etapa {String(i + 1).padStart(2, "0")}</span>
            <h3 className="t-h3 md:col-span-4">{s.title}</h3>
            <p className="t-body text-steel-2 md:col-span-6">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
