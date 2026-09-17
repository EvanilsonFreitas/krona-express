import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesSection } from "@/components/sections/services-section";
import { QuoteTrackerSection } from "@/components/sections/quote-tracker-section";
import { FaqSection } from "@/components/sections/faq-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Parallax } from "@/components/ui/parallax";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* O Hero não precisa de FadeIn da rolagem, ele já entra no load */}
        <HeroSection />

        <FadeIn direction="up">
          <AboutSection />
        </FadeIn>

        <Parallax speed={-0.1} className="relative z-20">
          <StatsSection />
        </Parallax>

        <FadeIn direction="up">
          <ServicesSection />
        </FadeIn>

        <FadeIn direction="up">
          <QuoteTrackerSection />
        </FadeIn>

        <FadeIn direction="up">
          <FaqSection />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
