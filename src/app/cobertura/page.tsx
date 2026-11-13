import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/krona/page-hero";
import { CtaList } from "@/components/krona/cta-list";

export const metadata: Metadata = {
  title: "Área de atendimento",
  description: "A viabilidade de cada frete com a Krona Express depende de origem, destino, tipo de carga, modalidade e condições operacionais. Consulte pela cotação.",
  alternates: { canonical: "cobertura/" },
};

/**
 * Página mantida por compatibilidade de URL. O conteúdo anterior descrevia uma malha de cobertura
 * que não está confirmada; até haver dados reais, a página orienta o cliente a consultar a viabilidade.
 */
export default function CoberturaPage() {
  return (
    <>
      <Header tone="light" />
      <main id="conteudo">
        <PageHero
          label="Área de atendimento"
          title={["Área de", "atendimento"]}
          lead="A disponibilidade de cada frete é avaliada caso a caso, conforme origem, destino, tipo de carga, modalidade e condições operacionais."
        />
        <section className="bg-paper pt-[clamp(1rem,1rem+2vw,3rem)]" aria-labelledby="como-avaliamos">
          <div className="k-container">
            <div className="k-grid gap-y-8">
              <h2 id="como-avaliamos" className="t-h3 col-span-12 lg:col-span-4">
                O que avaliamos antes de confirmar um frete
              </h2>
              <ul className="t-body col-span-12 space-y-3 text-steel lg:col-span-7 lg:col-start-6">
                <li>A origem e o destino da carga, incluindo as condições de acesso nos dois endereços.</li>
                <li>O tipo de carga, o peso, o volume e o valor da nota fiscal.</li>
                <li>A modalidade mais adequada: lotação, fracionada, logística reversa ou operação dedicada.</li>
                <li>As condições operacionais, como janela de coleta, prazo de entrega e necessidade de agendamento.</li>
              </ul>
            </div>
          </div>
        </section>
        <CtaList
          title="Consulte a viabilidade do seu frete"
          items={[
            { label: "Solicitar cotação", href: "/cotacao" },
            { label: "Falar com a equipe", href: "/contato" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
