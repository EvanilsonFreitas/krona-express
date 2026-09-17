"use client";

import Link from "next/link";
import { CheckmarkCircle01Icon, InstagramIcon } from "hugeicons-react";
import { motion } from "motion/react";

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
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Usando variants para garantir sincronização perfeita entre a coluna esquerda e direita */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >

          {/* Coluna Esquerda - Texto e Tópicos */}
          <motion.div 
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0A1A3A] leading-tight">
              Conheça um pouco mais da Krona Express
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Na Krona Express, combinamos alta performance operacional e atenção minuciosa aos detalhes para entregar mais do que cargas: entregamos eficiência e resultados reais. Nossa equipe atua com foco total na prevenção de falhas e na pontualidade, garantindo que sua cadeia de suprimentos funcione sem interrupções. Conte com nossa experiência para otimizar sua logística e impulsionar o crescimento do seu negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 pt-2">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 + (idx * 0.1), ease: "easeOut" } }
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#114092] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckmarkCircle01Icon className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.8, ease: "easeOut" } }
              }}
            >
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
            </motion.div>
          </motion.div>

          {/* Coluna Direita - Imagem Blob e Instagram */}
          <div className="relative flex justify-center items-center lg:justify-end mt-10 lg:mt-0">
            {/* Shape Irregular / Blob - Linear e de uma única vez */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.7 } }}
              className="relative w-full max-w-[550px] aspect-square overflow-hidden shadow-2xl bg-slate-100"
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
            </motion.div>

            {/* Botão Flutuante do Instagram */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8, x: 30 },
                visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 } }
              }}
              className="absolute top-[45%] right-1/2 translate-x-1/2 lg:right-[60%] lg:translate-x-0 z-20"
            >
              <a
                href="https://instagram.com/kronaexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgb(0,0,0,0.15)] hover:scale-110 transition-transform duration-300 group"
              >
                <InstagramIcon className="w-10 h-10 text-slate-800 group-hover:text-pink-600 transition-colors" />
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
