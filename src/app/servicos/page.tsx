import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/krona/page-hero";
import { Photo } from "@/components/krona/photo";
import { ActionLink } from "@/components/krona/ui";
import { MaskReveal, Reveal } from "@/components/krona/motion";
import { CtaList } from "@/components/krona/cta-list";
import { services } from "@/config/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Transporte rodoviário de cargas em lotação (FTL), carga fracionada (LTL), logística reversa e operações dedicadas. Veja quando cada modalidade é indicada.",
  alternates: { canonical: "servicos/" },
};

const details = {
  lotacao: {
    when: ["Volumes que ocupam o veículo inteiro ou quase todo", "Cargas que não devem passar por transbordo", "Entregas com prazo apertado"],
    how: ["Um veículo exclusivo é enviado ao endereço de coleta", "A carga segue direto para o destino", "Não há divisão de espaço com outras remessas"],
  },
  fracionada: {
    when: ["Volumes menores ou remessas recorrentes", "Quem quer pagar apenas pelo espaço utilizado", "Envios entre empresas com prazo flexível"],
    how: ["Sua carga divide o veículo com outras remessas", "O roteiro é organizado conforme os destinos", "O valor é calculado pelo peso e pelo volume"],
  },
  reversa: {
    when: ["Devoluções e trocas de mercadorias", "Retorno de embalagens e paletes", "Recolhimento de produtos em clientes finais"],
    how: ["A coleta é agendada no endereço de retorno", "Os volumes são conferidos no momento da coleta", "A entrega é feita no ponto que você definir"],
  },
};

const dedicatedSteps = [
  { title: "Conhecemos a rotina", text: "Levantamos volumes, frequência, horários de coleta e restrições de cada ponto de entrega." },
  { title: "Desenhamos a operação", text: "Definimos rotas, tipo de veículo e as pessoas de contato dos dois lados." },
  { title: "Executamos e ajustamos", text: "Acompanhamos os resultados com você e fazemos ajustes quando a rotina muda." },
];

function DetailLists({ when, how, inverse = false }: { when: string[]; how: string[]; inverse?: boolean }) {
  const muted = inverse ? "text-white/70" : "text-steel";
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {[
        { title: "Quando indicamos", items: when },
        { title: "Como funciona", items: how },
      ].map((col) => (
        <div key={col.title}>
          <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em]">{col.title}</h3>
          <ul className={`t-body mt-4 space-y-3 ${muted}`}>
            {col.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function ServicosPage() {
  const [lotacao, fracionada, reversa, especiais] = services;

  return (
    <>
      <Header tone="dark" />
      <main id="conteudo">
        <PageHero
          label="Serviços"
          title={["A modalidade certa", "para cada carga"]}
          lead="Lotação, carga fracionada, logística reversa e operações dedicadas. Conheça cada uma e veja quando ela é indicada."
          image={{ name: "caminhao-movimento-noite", alt: "Caminhão em movimento em uma via ao anoitecer", focus: "45% 55%" }}
        />

        {/* Comparação funcional */}
        <section className="k-section bg-paper" aria-labelledby="como-escolher">
          <div className="k-container">
            <div className="k-grid gap-y-10">
              <div className="col-span-12 lg:col-span-4">
                <Reveal>
                  <h2 id="como-escolher" className="t-h2 max-w-[11ch]">
                    Como escolher
                  </h2>
                </Reveal>
                <p className="t-body mt-6 max-w-sm text-steel">
                  Se ainda não sabe qual modalidade usar, tudo bem. Na cotação, indicamos a mais adequada para a sua carga.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <table className="block w-full border-collapse text-left md:table">
                  <thead className="hidden md:table-header-group">
                    <tr className="border-b border-ink">
                      <th scope="col" className="pb-4 text-[0.9375rem] font-semibold">Modalidade</th>
                      <th scope="col" className="pb-4 text-[0.9375rem] font-semibold">Indicada para</th>
                      <th scope="col" className="pb-4 text-[0.9375rem] font-semibold"><span className="sr-only">Detalhes</span></th>
                    </tr>
                  </thead>
                  <tbody className="block border-t border-ink md:table-row-group md:border-t-0">
                    {services.map((s) => (
                      <tr key={s.id} className="block border-b border-line py-6 md:table-row md:py-0">
                        <th scope="row" className="block pr-6 align-top font-normal md:table-cell md:py-6">
                          <span className="block text-[1.375rem] leading-tight font-[540] tracking-[-0.02em]">{s.title}</span>
                          <span className="t-small mt-1 block text-steel">{s.code}</span>
                        </th>
                        <td className="t-body block pt-3 pr-6 align-top text-steel md:table-cell md:py-6">{s.summary}</td>
                        <td className="block pt-3 align-top md:table-cell md:py-6">
                          <a href={`#${s.id}`} className="k-link text-[0.9375rem] font-medium whitespace-nowrap text-krona">
                            Ver detalhes
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Lotação: painel cinematográfico */}
        <section id="lotacao" data-surface="dark" className="on-dark bg-ink text-white" aria-labelledby="t-lotacao">
          <div className="relative isolate flex min-h-[min(90vh,880px)] items-end overflow-hidden">
            <Photo name="caminhoes-neblina" alt="Caminhões estacionados à noite com luzes atravessando a neblina" sizes="100vw" className="absolute inset-0 -z-10 h-full w-full" focus="50% 50%" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#06122a_0%,rgb(6_18_42/0.4)_50%,rgb(6_18_42/0.15)_100%)]" />
            <div className="k-container pb-14 md:pb-20">
              <Reveal>
                <h2 id="t-lotacao" className="t-display max-w-[9ch]">{lotacao.title}</h2>
              </Reveal>
              <p className="t-lead mt-6 max-w-xl text-white/85">{lotacao.summary}</p>
            </div>
          </div>
          <div className="k-container pb-[var(--section-y)] pt-4">
            <div className="k-grid gap-y-10">
              <div className="col-span-12 lg:col-span-7">
                <DetailLists inverse {...details.lotacao} />
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
                <ActionLink href="/cotacao?servico=lotacao" variant="light" className="w-full">
                  Cotar frete de lotação
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        {/* Fracionada: split assimétrico com imagem sangrando */}
        <section id="fracionada" className="bg-paper py-[var(--section-y)]" aria-labelledby="t-fracionada">
          <div className="k-grid items-center gap-y-12">
            <div className="col-span-12 px-[var(--gutter)] lg:col-span-5 lg:pr-0">
              <Reveal>
                <h2 id="t-fracionada" className="t-h1">{fracionada.title}</h2>
              </Reveal>
              <p className="t-lead mt-6 max-w-md text-steel">{fracionada.summary}</p>
              <div className="mt-12">
                <DetailLists {...details.fracionada} />
              </div>
              <ActionLink href="/cotacao?servico=fracionada" variant="solid" className="mt-12 w-full sm:w-auto sm:min-w-72">
                Cotar carga fracionada
              </ActionLink>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <MaskReveal>
                <Photo
                  name="bau-aberto-palete"
                  alt="Baú de caminhão aberto com palete de carga sendo carregado"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[4/3] w-full bg-ink lg:aspect-[5/6]"
                  focus="40% 60%"
                />
              </MaskReveal>
            </div>
          </div>
        </section>

        {/* Reversa: fundo tonal, imagem menor deslocada */}
        <section id="reversa" className="bg-paper-2 py-[var(--section-y)]" aria-labelledby="t-reversa">
          <div className="k-container">
            <div className="k-grid gap-y-12">
              <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-2 lg:pt-28">
                <MaskReveal>
                  <Photo
                    name="carrinho-caixas-van"
                    alt="Profissional levando caixas em um carrinho até uma van"
                    sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[3/4] w-full bg-ink"
                    focus="60% 50%"
                  />
                </MaskReveal>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7">
                <Reveal>
                  <h2 id="t-reversa" className="t-h1">{reversa.title}</h2>
                </Reveal>
                <p className="t-lead mt-6 max-w-md text-steel">
                  Devoluções também precisam de planejamento. {reversa.summary}
                </p>
                <div className="mt-12">
                  <DetailLists {...details.reversa} />
                </div>
                <ActionLink href="/cotacao?servico=reversa" variant="solid" className="mt-12 w-full sm:w-auto sm:min-w-72">
                  Cotar logística reversa
                </ActionLink>
              </div>
            </div>
          </div>
        </section>

        {/* Operações dedicadas: bloco navy com imagem lateral */}
        <section id="especiais" data-surface="dark" className="on-dark bg-navy text-white" aria-labelledby="t-especiais">
          <div className="k-grid items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Photo
                name="operador-carreta-doca"
                alt="Profissional junto à traseira de uma carreta em área de carregamento"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full min-h-[440px] w-full bg-ink"
                focus="35% 50%"
              />
            </div>
            <div className="col-span-12 px-[var(--gutter)] py-[var(--section-y)] lg:col-span-6 lg:px-[clamp(2.5rem,5vw,6rem)]">
              <Reveal>
                <h2 id="t-especiais" className="t-h1">{especiais.title}</h2>
              </Reveal>
              <p className="t-lead mt-6 max-w-md text-white/80">{especiais.summary}</p>
              <ol className="mt-12 space-y-8">
                {dedicatedSteps.map((step, i) => (
                  <Reveal as="li" key={step.title} x={0} y={14} delay={i * 0.06} className="grid grid-cols-[2rem_1fr] gap-x-3">
                    <span className="t-h3 text-white/40" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h3 className="t-h3">{step.title}</h3>
                      <p className="t-body mt-2 text-white/70">{step.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <ActionLink href="/cotacao?servico=especiais" variant="light" className="mt-12 w-full sm:w-auto sm:min-w-72">
                Conversar sobre uma operação
              </ActionLink>
            </div>
          </div>
        </section>

        <CtaList />
      </main>
      <Footer />
    </>
  );
}
