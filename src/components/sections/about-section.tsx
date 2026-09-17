"use client";

import Link from "next/link";
import { CheckmarkCircle01Icon, InstagramIcon } from "hugeicons-react";

export function AboutSection() {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

  const features = [
    "Suporte 24h",
    "Atendimento especializado",
    "Equipe treinada",
    "Carga 100% assegurada",
    "Entrega no prazo",
    "Transparência no processo"
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna Esquerda - Texto e Tópicos */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0A1A3A] leading-tight">
              Conheça um pouco mais da Krona Express
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Na Krona Express, combinamos alta performance operacional e atenção minuciosa aos detalhes para entregar mais do que cargas: entregamos eficiência e resultados reais. Nossa equipe atua com foco total na prevenção de falhas e na pontualidade, garantindo que sua cadeia de suprimentos funcione sem interrupções. Conte com nossa experiência para otimizar sua logística e impulsionar o crescimento do seu negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#114092] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckmarkCircle01Icon className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                href="/cotacao"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[#114092] text-white font-semibold hover:bg-blue-800 shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-0.5"
              >
                Solicitar cotação
              </Link>
              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border-2 border-slate-200 text-slate-600 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
              >
                Chame no WhatsApp
                <img src={`${basePath}/images/icons/whatsapp.png`} alt="WhatsApp" className="w-5 h-5 object-contain opacity-80" />
              </a>
            </div>
          </div>

          {/* Coluna Direita - Imagem Blob e Instagram */}
          <div className="relative flex justify-center items-center lg:justify-end mt-10 lg:mt-0">
            {/* Shape Irregular / Blob */}
            <div 
              className="relative w-full max-w-[550px] aspect-square overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-700 bg-slate-100"
              style={{
                borderRadius: '35% 65% 55% 45% / 40% 30% 70% 60%' // Blob effect similar to image
              }}
            >
              <img 
                src={`${basePath}/images/pages/sobre/Entregador_Caixa.jpg`} 
                alt="Caminhão Krona Express" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback se a imagem não existir
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            
            {/* Botão Flutuante do Instagram */}
            <a 
              href="https://instagram.com/kronaexpress"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[45%] right-1/2 translate-x-1/2 lg:right-[60%] lg:translate-x-0 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:scale-110 transition-transform duration-300 group z-10"
            >
              <InstagramIcon className="w-10 h-10 text-slate-800 group-hover:text-pink-600 transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
