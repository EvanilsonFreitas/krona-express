import { TextLink } from "@/components/krona/ui";
import { Reveal, ScrollText } from "@/components/krona/motion";

export function Positioning() {
  return (
    <section className="k-section bg-paper" aria-labelledby="posicionamento">
      <div className="k-container">
        <div className="k-grid gap-y-10">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <h2 id="posicionamento" className="sr-only">
              Sobre a Krona Express
            </h2>
            <ScrollText
              className="text-[clamp(1.85rem,1.05rem+3.1vw,4.25rem)] leading-[1.06] font-[500] tracking-[-0.034em] text-ink [font-variation-settings:'wdth'_94]"
              text="A Krona Express é uma transportadora de estrutura enxuta. Você fala diretamente com quem organiza o seu frete, e as respostas não precisam passar por várias áreas até chegar a você."
            />
            <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-16 lg:w-5/6">
              <Reveal>
                <p className="t-body text-steel">
                  Atendemos empresas que precisam transportar cargas pela rodovia com regularidade ou em embarques
                  pontuais. Antes de propor qualquer solução, entendemos o que vai ser transportado, de onde sai, para
                  onde vai e em qual prazo.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="t-body text-steel">
                  Com essas informações, indicamos a modalidade mais adequada e mantemos o mesmo contato com você durante
                  todo o transporte.
                </p>
                <TextLink href="/sobre" className="mt-4">
                  Conheça a Krona
                </TextLink>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
