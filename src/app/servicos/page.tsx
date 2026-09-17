import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesSection } from "@/components/sections/services-section";

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="bg-slate-50 dark:bg-slate-900/50 py-12 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Soluções Logísticas</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Operações dedicadas, carga lotação e fracionada. Detalhamento completo e especificações técnicas de cada modalidade de transporte.
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
