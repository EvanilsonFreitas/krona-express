import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function ContatoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#111111] pt-40 pb-20 border-b relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Fale Conosco</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Nossa equipe está pronta para atender suas demandas operacionais, tirar dúvidas e fornecer suporte rápido e eficiente.
            </p>
          </div>
        </div>
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
