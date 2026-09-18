import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about-section";
import { AboutContentSection } from "@/components/sections/about-content-section";

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#111111] pt-40 pb-20 border-b relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sobre a Krona Express</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Conheça nossa história, nossos valores e o padrão de excelência que rege cada etapa das nossas operações logísticas.
            </p>
          </div>
        </div>
        <AboutSection />
        <AboutContentSection />
      </main>
      <Footer />
    </div>
  );
}
