"use client";

import CountUp from "react-countup";
import { FadeIn } from "@/components/ui/fade-in";

export function StatsSection() {
  return (
    <section className="w-full bg-[#114092] py-16 relative overflow-hidden">
      {/* Elementos visuais de fundo (opcional para dar mais classe) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-white/20">
          
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white flex items-center">
                <span>+</span>
                <CountUp end={98} duration={3} enableScrollSpy scrollSpyOnce />
                <span>%</span>
              </h3>
              <p className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">SLA de Entrega</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white flex items-center">
                <span>+</span>
                <CountUp end={92} duration={3.5} enableScrollSpy scrollSpyOnce />
                <span>%</span>
              </h3>
              <p className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">Retenção de Clientes</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white flex items-center">
                <span>+</span>
                <CountUp end={10} duration={2.5} enableScrollSpy scrollSpyOnce />
              </h3>
              <p className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">Anos de Experiência</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white flex items-center">
                <CountUp end={100} duration={3.2} enableScrollSpy scrollSpyOnce />
                <span>%</span>
              </h3>
              <p className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wider">De Norte a Sul do Brasil</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
