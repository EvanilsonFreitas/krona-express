import { TextLink } from "@/components/krona/ui";
import { MaskReveal, Reveal } from "@/components/krona/motion";
import { Photo } from "@/components/krona/photo";

const benefits = [
  "Contato direto com quem conduz a operação",
  "Respostas objetivas para cotações e ajustes",
  "Acompanhamento durante todo o transporte",
];

/** Apresentação: o que a Krona faz, em composição foto + texto. */
export function Positioning() {
  return (
    <section className="k-section overflow-hidden bg-paper" aria-labelledby="o-que-fazemos">
      <div className="k-container">
        <div className="k-grid items-center gap-y-16">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <h2 id="o-que-fazemos" className="t-h2 max-w-[14ch]">
                Transporte rodoviário de cargas para empresas
              </h2>
            </Reveal>
            <p className="t-lead mt-8 text-steel">
              Organizamos fretes de lotação e carga fracionada, coletas de logística reversa e operações dedicadas.
              Cuidamos do planejamento, da coleta, do transporte e da entrega, e a mesma equipe acompanha cada etapa.
            </p>
            <ul className="mt-10 border-t border-line">
              {benefits.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.06} x={0} y={10} className="border-b border-line py-4 text-[1.0625rem] font-medium">
                  {b}
                </Reveal>
              ))}
            </ul>
            <TextLink href="/sobre" className="mt-6">
              Conheça a Krona
            </TextLink>
          </div>

          <div className="relative col-span-12 lg:col-span-7">
            <MaskReveal>
              <Photo
                name="caminhao-rodovia-movimento"
                alt="Caminhão com semirreboque refrigerado em movimento numa rodovia"
                sizes="(min-width: 1024px) 58vw, 100vw"
                focus="30% 50%"
                className="aspect-[4/3] w-full bg-ink lg:ml-[clamp(1rem,3vw,4rem)] lg:w-[calc(100%+var(--gutter))]"
              />
            </MaskReveal>
            <MaskReveal delay={0.25} className="absolute -bottom-10 left-0 hidden w-[42%] border-[10px] border-paper sm:block lg:-bottom-16 lg:-left-16">
              <Photo name="paletes-madeira" alt="Pilha de paletes de madeira" sizes="25vw" className="aspect-square w-full bg-ink" />
            </MaskReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
