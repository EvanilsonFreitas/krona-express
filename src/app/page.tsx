import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { QuoteTrackerSection } from "@/components/sections/quote-tracker-section";
import { FaqSection } from "@/components/sections/faq-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        
        <div className="flex justify-center pb-12 bg-background">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <Link href="/servicos">Ver todos os detalhes dos serviços</Link>
          </Button>
        </div>

        <QuoteTrackerSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
