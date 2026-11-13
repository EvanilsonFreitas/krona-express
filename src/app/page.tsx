import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { ServicesEditorial } from "@/components/home/services-editorial";
import { RouteProcess } from "@/components/home/route-process";
import { ImageBand } from "@/components/home/image-band";
import { Principles } from "@/components/home/principles";
import { CtaList } from "@/components/krona/cta-list";

export default function Home() {
  return (
    <>
      <Header tone="dark" />
      <main id="conteudo">
        <Hero />
        <Positioning />
        <ServicesEditorial />
        <RouteProcess />
        <Principles />
        <ImageBand
          name="retrovisor-estrada"
          alt="Rodovia vista pelo retrovisor de um veículo em movimento"
          label="Acompanhamento"
          statement="Da coleta ao destino, sua carga segue acompanhada — e você, informado."
          focus="55% 50%"
        />
        <CtaList index="05" />
      </main>
      <Footer />
    </>
  );
}
