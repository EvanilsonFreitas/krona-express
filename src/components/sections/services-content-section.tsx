"use client";

import { motion } from "motion/react";
import { ArrowRight01Icon, ZapIcon, Shield01Icon, Coins01Icon, PackageIcon, CircleArrowDown01Icon, UserGroupIcon, SecurityCheckIcon, StarIcon, Navigation01Icon, CustomerService01Icon } from "hugeicons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "lotacao",
    title: "Carga Lotação (FTL)",
    tag: "Máxima Velocidade",
    tagIcon: <ZapIcon className="w-4 h-4" />,
    tagColor: "bg-amber-500/90",
    description: "No modelo FTL (Full Truckload), disponibilizamos um veículo dedicado exclusivamente para a sua carga, sem paradas intermediárias ou consolidações. Ideal para envios urgentes, mercadorias de alto valor agregado ou volumes que ocupam toda a capacidade do caminhão.",
    features: [
      { title: "Veículo Lacrado", desc: "Da origem ao destino sem manipulação.", icon: <Shield01Icon className="w-5 h-5" /> },
      { title: "Prazo Reduzido", desc: "Entrega expressa sem roteirização extra.", icon: <Navigation01Icon className="w-5 h-5" /> },
      { title: "Menor Risco", desc: "Sem manuseio em trânsito previne avarias.", icon: <SecurityCheckIcon className="w-5 h-5" /> },
      { title: "Flexibilidade", desc: "Coleta e entrega em horários customizados.", icon: <CustomerService01Icon className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
  },
  {
    id: "fracionada",
    title: "Carga Fracionada (LTL)",
    tag: "Custo-Benefício",
    tagIcon: <Coins01Icon className="w-4 h-4" />,
    tagColor: "bg-emerald-500/90",
    description: "Com o LTL (Less Than Truckload), sua carga viaja de forma compartilhada com mercadorias de outros clientes. Utilizamos nossa rede inteligente de cross-docking e rotas otimizadas para garantir que sua mercadoria chegue ao destino com segurança e custos reduzidos.",
    features: [
      { title: "Rateio de Custos", desc: "Pague apenas pelo espaço utilizado.", icon: <Coins01Icon className="w-5 h-5" /> },
      { title: "Volumes Menores", desc: "Ideal para remessas B2B padronizadas.", icon: <PackageIcon className="w-5 h-5" /> },
      { title: "Rastreabilidade", desc: "Controle de ponta a ponta por volume.", icon: <Shield01Icon className="w-5 h-5" /> },
      { title: "Malha Capilarizada", desc: "Ampla cobertura em nossa rede de atuação.", icon: <Navigation01Icon className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    reverse: true,
  },
  {
    id: "reversa",
    title: "Logística Reversa",
    tag: "Gestão Inteligente",
    tagIcon: <CircleArrowDown01Icon className="w-4 h-4" />,
    tagColor: "bg-blue-500/90",
    description: "Transformamos o que seria um problema em uma vantagem competitiva. Gerenciamos coletas de devoluções, troca em garantia, retorno de embalagens e paletes com a mesma agilidade e cuidado do fluxo de ida.",
    features: [
      { title: "Experiência do Cliente", desc: "Processo ágil para o consumidor final.", icon: <CustomerService01Icon className="w-5 h-5" /> },
      { title: "Coleta Programada", desc: "Agendamento prévio de devoluções.", icon: <Navigation01Icon className="w-5 h-5" /> },
      { title: "Retorno de Ativos", desc: "Gestão de paletes e embalagens retornáveis.", icon: <PackageIcon className="w-5 h-5" /> },
      { title: "Integração", desc: "Fluxo de informação rápido e preciso.", icon: <ZapIcon className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
  },
  {
    id: "especiais",
    title: "Operações Especiais",
    tag: "Projetos In-House",
    tagIcon: <StarIcon className="w-4 h-4" />,
    tagColor: "bg-purple-600/90",
    description: "Para empresas que necessitam de uma operação logística altamente especializada, desenhamos soluções sob medida. Alocamos veículos padronizados, equipe dedicada (in-house) e desenhamos SLAs exclusivos para a sua necessidade.",
    features: [
      { title: "Frota Corporativa", desc: "Veículos padronizados para o seu projeto.", icon: <ZapIcon className="w-5 h-5" /> },
      { title: "Equipe Dedicada", desc: "Profissionais alocados na planta do cliente.", icon: <UserGroupIcon className="w-5 h-5" /> },
      { title: "Rotas Exclusivas", desc: "Desenho da malha operacional dedicada.", icon: <Navigation01Icon className="w-5 h-5" /> },
      { title: "Gestão de KPIs", desc: "Acompanhamento rigoroso de performance.", icon: <Shield01Icon className="w-5 h-5" /> }
    ],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    reverse: true,
  }
];

export function ServicesContentSection() {
  return (
    <div className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-16 md:space-y-24">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white rounded-[2.5rem] p-6 md:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 scroll-mt-32"
            >
              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side - Smaller, decorative */}
                <motion.div 
                  className="w-full lg:w-[45%] relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative rounded-[2rem] overflow-hidden aspect-video lg:aspect-[4/3] shadow-lg group cursor-pointer">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                    <div className="absolute top-5 left-5 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs uppercase tracking-wider shadow-sm">
                        <div className={`p-1 rounded-full ${service.tagColor} text-white`}>
                          {service.tagIcon}
                        </div>
                        {service.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="w-full lg:w-[55%] flex flex-col"
                  initial={{ opacity: 0, x: service.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 group cursor-pointer">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-[#114092] flex items-center justify-center group-hover:bg-[#114092] group-hover:text-white transition-colors duration-300 shadow-sm">
                          {feature.icon}
                        </div>
                        <div>
                          <strong className="text-slate-900 block mb-1 group-hover:text-[#114092] transition-colors">{feature.title}</strong>
                          <span className="text-slate-500 text-sm leading-relaxed">{feature.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button asChild size="lg" className="w-full sm:w-auto h-14 bg-[#114092] hover:bg-blue-800 text-white rounded-full px-10 text-base font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                      <Link href={`/cotacao?servico=${service.id}`}>
                        Solicitar Cotação
                        <ArrowRight01Icon className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
