import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { QuoteTrackerSection } from "@/components/sections/quote-tracker-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <div className="bg-slate-50 dark:bg-slate-900/50 py-12 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Atendimento & Cotação</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Central de cotação detalhada, rastreamento de cargas e canais de comunicação direto com a equipe operacional.
            </p>
          </div>
        </div>
        <QuoteTrackerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
