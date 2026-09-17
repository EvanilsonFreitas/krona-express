import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CoverageSection } from "@/components/sections/coverage-section";

export default function CoberturaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="bg-slate-50 dark:bg-slate-900/50 py-12 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Nossa Cobertura</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Conexões diárias e otimizadas entre as regiões Sudeste, Sul e Centro-Oeste com prazos padronizados.
            </p>
          </div>
        </div>
        <CoverageSection />
      </main>
      <Footer />
    </div>
  );
}
