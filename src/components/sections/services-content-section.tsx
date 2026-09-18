"use client";

import { motion } from "motion/react";
import { CheckmarkCircle01Icon, ArrowRight01Icon } from "hugeicons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "lotacao",
    title: "Carga Lotação (FTL)",
    subtitle: "Exclusividade e máxima velocidade para sua operação",
    description: "No modelo FTL (Full Truckload), disponibilizamos um veículo dedicado exclusivamente para a sua carga, sem paradas intermediárias ou consolidações. Ideal para envios urgentes, mercadorias de alto valor agregado ou volumes que ocupam toda a capacidade do caminhão.",
    features: [
      "Veículo lacrado da origem ao destino",
      "Redução drástica do prazo de entrega",
      "Menor risco de avarias (sem manuseio em trânsito)",
      "Flexibilidade de horário de coleta e entrega"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    id: "fracionada",
    title: "Carga Fracionada (LTL)",
    subtitle: "Economia e eficiência para envios menores",
    description: "Com o LTL (Less Than Truckload), sua carga viaja de forma compartilhada com mercadorias de outros clientes. Utilizamos nossa rede inteligente de cross-docking e rotas otimizadas para garantir que sua mercadoria chegue ao destino com segurança, reduzindo significativamente os custos logísticos.",
    features: [
      "Rateio de custos com outras cargas",
      "Ideal para pequenos e médios volumes",
      "Rastreabilidade por volume",
      "Malha de distribuição capilarizada"
    ],
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
  {
    id: "reversa",
    title: "Logística Reversa",
    subtitle: "Gestão inteligente de retornos e devoluções",
    description: "Transformamos o que seria um problema em uma vantagem competitiva. Gerenciamos coletas de devoluções, troca em garantia, retorno de embalagens e paletes com a mesma agilidade e cuidado do fluxo de ida.",
    features: [
      "Processo ágil para melhorar a experiência do seu cliente",
      "Coleta programada de devoluções",
      "Retorno de paletes e ativos retornáveis",
      "Integração de informação na logística reversa"
    ],
    image: "https://images.unsplash.com/photo-1565515268064-07e113645c08?auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    id: "especiais",
    title: "Operações Especiais e Projetos",
    subtitle: "Soluções in-house customizadas para grandes operações",
    description: "Para empresas que necessitam de uma operação logística altamente especializada, oferecemos soluções desenhadas sob medida. Alocamos veículos padronizados, equipe dedicada (in-house) e desenhamos SLAs exclusivos para a sua necessidade.",
    features: [
      "Frota corporativa padronizada",
      "Equipe dedicada na planta do cliente",
      "Desenho de rotas exclusivas",
      "Gestão de indicadores e performance (KPIs) específicos"
    ],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    reverse: true,
  }
];

export function ServicesContentSection() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="space-y-24">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col gap-12 lg:gap-20 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-xl font-medium text-primary">{service.subtitle}</p>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <CheckmarkCircle01Icon className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm md:text-base leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button asChild size="lg" className="bg-[#111111] hover:bg-primary text-white group rounded-full px-8">
                    <Link href={`/cotacao?servico=${service.id}`}>
                      Solicitar Cotação
                      <ArrowRight01Icon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
