"use client";

import { useRef, useState, useEffect } from "react";
import {
  ArrowRight01Icon,
  ArrowLeft01Icon
} from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Lotação (FTL)",
      description: "Veículos dedicados exclusivamente para sua carga. Máxima eficiência, transporte direto ponto a ponto com lacre rastreado e sem consolidação.",
      tag: "Direto",
      tagColor: "bg-[#114092]/90 hover:bg-[#114092]",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
      href: "/servicos#lotacao",
    },
    {
      title: "Fracionada (LTL)",
      description: "Consolidação inteligente de cargas para otimização de custos. Rotas roteirizadas, malha nacional e entrega econômica com rastreabilidade total.",
      tag: "Econômico",
      tagColor: "bg-[#114092]/90 hover:bg-[#114092]",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
      href: "/servicos#fracionada",
    },
    {
      title: "Logística Reversa",
      description: "Gerenciamento ágil de devoluções e retorno de paletes. Operação sustentável focada em apoiar processos de troca e garantia do seu cliente final.",
      tag: "Sustentável",
      tagColor: "bg-[#114092]/90 hover:bg-[#114092]",
      image: "/images/pages/sobre/Entregador_Caixa.jpg",
      href: "/servicos#reversa",
    },
    {
      title: "Operações Especiais",
      description: "Projetos dedicados in-house para grandes operações logísticas. Frota corporativa padronizada, processos customizados e SLA rigoroso.",
      tag: "Premium",
      tagColor: "bg-[#114092]/90 hover:bg-[#114092]",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      href: "/servicos#especiais",
    }
  ];

  // Helper para descobrir a largura real de 1 card + gap no DOM
  const getCardWidth = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      return cardWidth + 24; // 24 = gap-6
    }
    return 0;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const distance = getCardWidth();
      const scrollAmount = direction === "left" ? -distance : distance;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Monitorar scroll para atualizar os pontos (dots) de paginação
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const distance = getCardWidth() || 300;
      const newIndex = Math.round(scrollLeft / distance);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < cards.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Auto-play do Carrossel a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const distance = getCardWidth();

        // Se chegou no final (com tolerância de 20px pra erros de arredondamento)
        if (scrollLeft >= maxScroll - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
        }
      }
    }, 4000); // Aumentado para 4s pra dar tempo de ler os novos textos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servicos" className="w-full py-24 bg-white relative overflow-hidden">
      {/* Fundo com padrão de grade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

          {/* Coluna Esquerda: Bloco de Texto */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left pr-0 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#111111] leading-[1.1] tracking-tight">
              Soluções Logísticas Sob Medida
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Nossos serviços logísticos abrangentes são projetados para lidar com cada etapa da sua cadeia de suprimentos com precisão. Da coleta à entrega final, oferecemos abrangência nacional com máxima segurança e rastreabilidade.
            </p>
            <Button asChild className="bg-[#111111] text-white hover:bg-[#114092] rounded-lg px-8 py-7 text-base font-semibold transition-all duration-300 group">
              <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Explorar Serviços
                <ArrowRight01Icon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Coluna Direita: Bloco de Cards (Carrossel) */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >

            {/* Controles do Carrossel (Setas laterais flutuantes) */}
            <div className="absolute left-0 top-[45%] -translate-y-1/2 -ml-5 md:-ml-8 z-20">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#111111] hover:scale-105 transition-transform border border-slate-100"
              >
                <ArrowLeft01Icon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="absolute right-0 top-[45%] -translate-y-1/2 -mr-5 md:-mr-8 z-20">
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#111111] hover:scale-105 transition-transform border border-slate-100"
              >
                <ArrowRight01Icon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Trilha do Carrossel */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2 scroll-smooth w-full"
            >
              {cards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  /* Largura adaptativa: 1 card completo (66.6%) e metade do próximo (~33.3%) visíveis */
                  className="relative block w-[85vw] sm:w-[320px] lg:w-[calc(66.666%-16px)] h-[480px] rounded-[32px] overflow-hidden snap-center lg:snap-start group cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 shrink-0"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradiente agressivo para leitura perfeita (mais escuro na base, chegando até a metade da foto) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a101d] via-[#0a101d]/60 to-transparent pointer-events-none" />

                  {/* Tag Superior (Direto, Sustentável, etc) */}
                  <div className="absolute top-5 left-5">
                    <Badge className={`${card.tagColor} backdrop-blur-md text-white border-none px-4 py-1.5 shadow-lg font-semibold tracking-wide rounded-full text-xs uppercase`}>
                      {card.tag}
                    </Badge>
                  </div>

                  {/* Ícone de Seta no canto superior direito */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#114092] group-hover:border-[#114092]">
                    <ArrowRight01Icon className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" />
                  </div>

                  {/* Textos no rodapé */}
                  <div className="absolute bottom-6 left-6 pr-6 w-full space-y-2">
                    <h3 className="text-white font-extrabold text-2xl tracking-wide">{card.title}</h3>
                    <p className="text-white/80 font-medium text-sm leading-snug line-clamp-3 pr-2">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Dots de Paginação */}
            <div className="flex justify-center gap-3 mt-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ left: index * getCardWidth(), behavior: "smooth" });
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "bg-[#111111] scale-110"
                    : "bg-transparent border-2 border-[#111111] hover:bg-slate-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
