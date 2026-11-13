import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { Indicators } from "@/components/home/indicators";
import { ServicesEditorial } from "@/components/home/services-editorial";
import { RouteProcess } from "@/components/home/route-process";
import { OperationsPanel } from "@/components/home/operations-panel";
import { Principles } from "@/components/home/principles";
import { ImageBand } from "@/components/home/image-band";
import { CtaList } from "@/components/krona/cta-list";

export default function Home() {
  return (
    <>
      <Header tone="dark" />
      <main id="conteudo">
        <Hero />
        <Positioning />
        <Indicators />
        <ServicesEditorial />
        <RouteProcess />
        <OperationsPanel />
        <Principles />
        <ImageBand
          name="rodovia-serra-aerea"
          alt="Vista aérea de uma rodovia entre montanhas com caminhões em fila"
          statement="Durante todo o transporte, você sabe com quem falar sobre a sua carga."
          focus="40% 70%"
        />
        <CtaList />
      </main>
      <Footer />
    </>
  );
}
