import Link from "next/link";
import { services, type ServiceId } from "@/config/site";
import { cn } from "@/lib/utils";
import { Photo } from "@/components/krona/photo";
import { ArrowIcon } from "@/components/krona/ui";
import { MaskReveal, Reveal } from "@/components/krona/motion";

const images: Record<ServiceId, { name: string; alt: string; focus?: string }> = {
  lotacao: { name: "estrada-chuva-lanternas", alt: "Carretas em rodovia sob chuva, com as lanternas traseiras acesas", focus: "60% 50%" },
  fracionada: { name: "paletes-empilhadeira", alt: "Empilhadeira movimentando palete envolto em filme entre fileiras de cargas", focus: "35% 60%" },
  reversa: { name: "coleta-caixas-reversa", alt: "Profissional carregando caixas de papelão em uma coleta", focus: "55% 40%" },
  especiais: { name: "carregamento-plataforma", alt: "Empilhadeira carregando paletes na carroceria de um caminhão", focus: "50% 55%" },
};

/* Composição assimétrica: larguras alternadas por linha (7/5, depois 5/7). */
const layout: Record<ServiceId, string> = {
  lotacao: "lg:col-span-7",
  fracionada: "lg:col-span-5",
  reversa: "lg:col-span-5",
  especiais: "lg:col-span-7",
};

/** Serviços como painéis fotográficos grandes, com o texto sobre a própria imagem. */
export function ServicesEditorial() {
  return (
    <section className="k-section bg-paper" aria-labelledby="servicos-home">
      <div className="k-container">
        <div className="k-grid items-end gap-y-6">
          <Reveal className="col-span-12 lg:col-span-6">
            <h2 id="servicos-home" className="t-h2 max-w-[14ch]">
              Serviços de transporte
            </h2>
          </Reveal>
          <p className="t-body col-span-12 max-w-md text-steel lg:col-span-5 lg:col-start-8">
            Quatro modalidades de transporte rodoviário. Depois de conhecer a sua carga, indicamos a que faz mais sentido
            para o volume, o prazo e o destino.
          </p>
        </div>

        <div className="k-grid mt-12 gap-y-4 md:mt-16 lg:gap-y-[clamp(1rem,0.4rem+1.6vw,2rem)]">
          {services.map((s, i) => (
            <MaskReveal key={s.id} delay={(i % 2) * 0.12} className={cn("col-span-12", layout[s.id])}>
              <Link
                href={`/servicos#${s.id}`}
                className="group relative isolate flex h-[clamp(440px,48vw,640px)] flex-col justify-end overflow-hidden bg-ink p-6 text-white md:p-9"
              >
                <Photo
                  name={images[s.id].name}
                  alt={images[s.id].alt}
                  focus={images[s.id].focus}
                  sizes={i === 0 || i === 3 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                  className="absolute inset-0 -z-20 h-full w-full"
                  imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-route)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(6_18_42/0.92)_0%,rgb(6_18_42/0.45)_45%,rgb(6_18_42/0.05)_75%)]" />
                <p className="t-small text-white/75">{s.code}</p>
                <h3 className="t-h2 mt-2">{s.title}</h3>
                <p className="t-body mt-4 max-w-md text-white/80">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                  Ver detalhes
                  <ArrowIcon className="transition-transform duration-300 ease-[var(--ease-route)] group-hover:translate-x-1" />
                </span>
              </Link>
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
