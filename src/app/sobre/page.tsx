import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about-section";

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="bg-slate-50 dark:bg-slate-900/50 py-12 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Sobre a Krona Express</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa história, missão e o rigoroso padrão de gerenciamento de risco que garante a segurança da sua carga.
            </p>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
