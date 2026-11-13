import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/krona/page-hero";
import { CtaList } from "@/components/krona/cta-list";

export const metadata: Metadata = {
  title: "Área de atendimento",
  description: "A área atendida pela Krona Express depende de cada operação. Informe origem e destino na cotação para confirmarmos a viabilidade.",
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
          lead="A viabilidade de cada frete depende da origem, do destino e do tipo de carga. Informe esses dados na cotação e confirmamos se conseguimos atender."
        />
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
