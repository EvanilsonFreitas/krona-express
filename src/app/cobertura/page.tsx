import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CoverageSection } from "@/components/sections/coverage-section";
import { CoverageMapSection } from "@/components/sections/coverage-map-section";

export default function CoberturaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#111111] pt-40 pb-20 border-b relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nossa Cobertura</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Conexões diárias e otimizadas entre as regiões Sudeste, Sul e Centro-Oeste com prazos padronizados e máxima segurança.
            </p>
          </div>
        </div>
        <CoverageSection />
        <CoverageMapSection />
      </main>
      <Footer />
    </div>
  );
}
