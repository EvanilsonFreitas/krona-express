import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/krona/page-hero";
import { Photo } from "@/components/krona/photo";
import { MaskReveal, Reveal } from "@/components/krona/motion";
import { CtaList } from "@/components/krona/cta-list";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Krona Express, transportadora rodoviária de cargas com estrutura enxuta, atendimento direto e acompanhamento durante todo o transporte.",
  alternates: { canonical: "sobre/" },
};

const method = [
  {
    title: "Entendemos a carga primeiro",
    text: "Antes de qualquer proposta, perguntamos o que vai ser transportado, de onde sai, para onde vai, qual é o prazo e se existe alguma restrição de coleta ou entrega.",
  },
  {
    title: "Planejamos cada embarque",
    text: "A rota, o veículo e a data de coleta são definidos para aquele embarque, e não copiados de um padrão.",
  },
  {
    title: "Acompanhamos até a entrega",
    text: "A mesma equipe que planejou o frete acompanha a execução. Você sabe com quem falar do início ao fim.",
  },
];

const principles = [
  { title: "Clareza", text: "Proposta, prazos e condições explicados de forma simples, sem surpresas depois." },
  { title: "Responsabilidade", text: "Sabemos que cada carga representa um compromisso do cliente com quem vai recebê-la." },
  { title: "Proximidade", text: "Você tem um contato direto na Krona, com nome e telefone, durante todo o serviço." },
  { title: "Cuidado com os detalhes", text: "Documentação conferida, combinados cumpridos e qualquer mudança comunicada a tempo." },
];

export default function SobrePage() {
  return (
    <>
      <Header tone="dark" />
      <main id="conteudo">
        <PageHero
          label="Sobre a Krona"
          title={["Uma transportadora", "do tamanho certo"]}
          lead="Estrutura enxuta, atendimento direto e responsabilidade sobre cada carga que transportamos."
          image={{ name: "cabine-estrada", alt: "Vista da estrada a partir da cabine de um caminhão", focus: "50% 60%" }}
        />

        <section id="sobre-nos" className="k-section bg-paper" aria-labelledby="quem-somos">
          <div className="k-container">
            <div className="k-grid gap-y-10">
              <div className="col-span-12 lg:col-span-4">
                <Reveal>
                  <h2 id="quem-somos" className="t-h2">
                    Quem somos
                  </h2>
                </Reveal>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <Reveal>
                  <p className="t-lead">
                    A Krona Express é uma empresa de transporte rodoviário de cargas. Atendemos empresas com fretes de
                    lotação, carga fracionada, logística reversa e operações dedicadas.
                  </p>
                </Reveal>
                <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
                  <Reveal delay={0.06}>
                    <p className="t-body text-steel">
                      Escolhemos manter uma estrutura enxuta. Quem atende o cliente conhece a operação, e quem planeja o
                      frete acompanha a execução. Essa proximidade nos permite responder rápido e ajustar o que for
                      preciso.
                    </p>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="t-body text-steel">
                      Quando a operação exige, trabalhamos com parceiros de transporte que conhecemos. Mesmo nesses casos,
                      você continua falando com a Krona, que segue responsável pelo atendimento.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="qualidade" className="bg-paper pb-[var(--section-y)]" aria-labelledby="como-trabalhamos">
          <div className="k-container">
            <div className="k-grid gap-y-12">
              <div className="col-span-12 lg:col-span-6">
                <MaskReveal>
                  <Photo
                    name="conferencia-checklist"
                    alt="Profissional conferindo uma lista de verificação em prancheta"
                    focus="45% 50%"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="aspect-[4/5] w-full bg-ink md:aspect-[5/4] lg:aspect-[4/5]"
                  />
                </MaskReveal>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-20">
                <Reveal>
                  <h2 id="como-trabalhamos" className="t-h2">
                    Como trabalhamos
                  </h2>
                </Reveal>
                <ul className="mt-12 space-y-10">
                  {method.map((m, i) => (
                    <Reveal as="li" key={m.title} delay={i * 0.06} x={0} y={16}>
                      <h3 className="t-h3">{m.title}</h3>
                      <p className="t-body mt-3 text-steel">{m.text}</p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section data-surface="dark" className="on-dark relative isolate overflow-hidden bg-ink text-white" aria-labelledby="proposito">
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-45 md:block">
            <Photo name="motorista-silhueta" alt="" sizes="50vw" className="h-full w-full" focus="40% 50%" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#06122a_0%,rgb(6_18_42/0)_60%)]" />
          </div>
          <div className="k-container k-section">
            <div className="max-w-2xl">
              <Reveal>
                <h2 id="proposito" className="t-h2">
                  Nosso propósito
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="t-lead mt-8 text-white/85">
                  Queremos que o cliente contrate o frete e tenha tranquilidade de que a carga vai chegar, sem precisar
                  ficar cobrando informação.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="t-body mt-6 text-white/65">
                  Para isso, cuidamos do planejamento, da documentação e da comunicação com a mesma atenção que damos ao
                  transporte em si.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="principios" className="k-section bg-paper" aria-labelledby="principios-title">
          <div className="k-container">
            <div className="k-grid gap-y-12">
              <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <Reveal>
                  <h2 id="principios-title" className="t-h2">
                    Nossos princípios
                  </h2>
                </Reveal>
                <MaskReveal className="mt-12 hidden md:block">
                  <Photo name="pneu-detalhe" alt="Detalhe da banda de rodagem de um pneu de caminhão" sizes="33vw" className="aspect-[3/4] w-full bg-ink" />
                </MaskReveal>
              </div>
              <ul className="col-span-12 grid gap-x-12 gap-y-14 sm:grid-cols-2 md:col-span-7 md:col-start-6 md:self-center">
                {principles.map((p, i) => (
                  <Reveal as="li" key={p.title} delay={i * 0.06} x={0} y={16}>
                    <h3 className="text-[clamp(1.85rem,1.3rem+1.8vw,3rem)] leading-[1.02] font-[520] tracking-[-0.035em]">{p.title}</h3>
                    <p className="t-body mt-4 max-w-xs text-steel">{p.text}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-paper-2" aria-labelledby="relacionamento">
          <div className="k-grid items-stretch">
            <div className="col-span-12 md:col-span-6">
              <Photo
                name="motorista-janela"
                alt="Motorista apoiando o braço na janela da cabine"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full min-h-[420px] w-full bg-ink"
                focus="40% 50%"
              />
            </div>
            <div className="col-span-12 flex flex-col justify-center px-[var(--gutter)] py-[var(--section-y)] md:col-span-6 md:px-[clamp(2rem,5vw,6rem)]">
              <Reveal>
                <h2 id="relacionamento" className="t-h2 max-w-[16ch]">
                  Relações de longo prazo
                </h2>
              </Reveal>
              <p className="t-body mt-6 max-w-md text-steel">
                Preferimos construir relações duradouras a fazer fretes avulsos. Quanto mais conhecemos a rotina de um
                cliente, com seus volumes, horários e exigências, mais simples fica organizar cada novo embarque.
              </p>
            </div>
          </div>
        </section>

        <CtaList />
      </main>
      <Footer />
    </>
  );
}
