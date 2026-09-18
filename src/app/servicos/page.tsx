import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesContentSection } from "@/components/sections/services-content-section";

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#111111] pt-40 pb-20 border-b relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Soluções Logísticas</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Operações dedicadas, carga lotação e fracionada. Conheça as especificações técnicas e escolha a modalidade ideal para a sua empresa.
            </p>
          </div>
        </div>
        <ServicesContentSection />
      </main>
      <Footer />
    </div>
  );
}
