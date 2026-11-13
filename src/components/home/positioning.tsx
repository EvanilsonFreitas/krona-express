import { Eyebrow, TextLink } from "@/components/krona/ui";
import { Reveal, ScrollText } from "@/components/krona/motion";

const facts = ["Atendimento direto", "Planejamento por embarque", "Acompanhamento da coleta à entrega"];

export function Positioning() {
  return (
    <section className="k-section bg-paper" aria-labelledby="posicionamento">
      <div className="k-container">
        <div className="k-grid gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <Eyebrow index="01">A Krona</Eyebrow>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 id="posicionamento" className="sr-only">
              Posicionamento
            </h2>
            <ScrollText
              className="text-[clamp(1.85rem,1.05rem+3.1vw,4.25rem)] leading-[1.04] font-[500] tracking-[-0.034em] text-ink [font-variation-settings:'wdth'_94]"
              text="Somos uma transportadora enxuta. Menos camadas entre você e quem cuida da sua carga: atendimento direto, decisões rápidas e cada embarque acompanhado por quem o planejou."
            />
            <div className="mt-14 grid gap-px border-t border-line pt-6 sm:grid-cols-3 md:mt-20">
              {facts.map((f, i) => (
                <Reveal key={f} delay={i * 0.08} className="t-label flex items-start gap-3 py-2 text-steel">
                  <span className="text-ink">0{i + 1}</span>
                  {f}
                </Reveal>
              ))}
            </div>
            <TextLink href="/sobre" className="mt-8">
              Conheça a Krona
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
