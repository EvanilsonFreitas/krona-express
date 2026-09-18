"use client";

import { motion } from "motion/react";
import { Flag01Icon, EyeIcon, Diamond01Icon, Rocket01Icon, Shield01Icon, DeliveryTruck01Icon, CustomerService01Icon, Settings01Icon, ArrowUpRight01Icon } from "hugeicons-react";

export function AboutContentSection() {
  const differentials = [
    { title: "Tecnologia de Ponta", icon: <Settings01Icon className="w-8 h-8" />, desc: "Sistemas integrados para roteirização e gestão completa." },
    { title: "Segurança Total", icon: <Shield01Icon className="w-8 h-8" />, desc: "Gerenciamento de risco rigoroso de ponta a ponta." },
    { title: "Capilaridade", icon: <DeliveryTruck01Icon className="w-8 h-8" />, desc: "Ampla rede logística cobrindo rotas estratégicas." },
    { title: "Atendimento Humanizado", icon: <CustomerService01Icon className="w-8 h-8" />, desc: "Equipe especializada pronta para resolver demandas complexas." },
  ];

  return (
    <div className="bg-white pb-24">

      {/* 1. Nossa Identidade - Zig Zag Layout */}
      <section id="sobre-nos" className="py-24 scroll-mt-32">
        <div className="container mx-auto px-4 max-w-6xl space-y-24">

          {/* Bloco 1: A Empresa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80" alt="Krona Express" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f]/90 via-[#070d1f]/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white font-medium shadow-lg">
                  <p className="text-lg">Mais que transporte, entregamos <span className="font-bold text-blue-300">confiança e precisão</span>.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:pl-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#114092] font-semibold text-sm tracking-wide">
                <Flag01Icon className="w-4 h-4" /> NOSSO PROPÓSITO
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Nascemos para <br /><span className="text-[#114092]">Elevar o Padrão</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A Krona Express foi fundada com um propósito claro: redefinir a qualidade do transporte rodoviário de cargas. Sabemos que a logística moderna exige agilidade, mas acima de tudo, exige previsibilidade e segurança inquestionável.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Aliamos tecnologia de ponta, processos operacionais rigorosos e um atendimento extremamente focado nas necessidades de cada cliente para garantir que sua cadeia de suprimentos funcione sem interrupções.
              </p>
            </motion.div>
          </div>

          {/* Bloco 2: Como Operamos (Invertido) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:pr-10 lg:order-1 order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm tracking-wide">
                <Rocket01Icon className="w-4 h-4" /> PERFORMANCE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Compromisso com o <br /><span className="text-[#114092]">Seu Resultado</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Entendemos que cada embarque carrega a reputação da sua empresa. Por isso, nossa operação não trata sua mercadoria apenas como um pacote, mas como um elo crítico do seu negócio.
              </p>
              <ul className="space-y-5 pt-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#114092]/10 text-[#114092] flex items-center justify-center shrink-0 mt-0.5"><Rocket01Icon className="w-5 h-5" /></div>
                  <span className="text-slate-700 font-medium text-lg leading-snug">Soluções otimizadas para redução severa de tempo de trânsito.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#114092]/10 text-[#114092] flex items-center justify-center shrink-0 mt-0.5"><EyeIcon className="w-5 h-5" /></div>
                  <span className="text-slate-700 font-medium text-lg leading-snug">Monitoramento ativo em tempo real para mitigação de riscos estruturais.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl lg:order-2 order-1"
            >
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80" alt="Operação Logística" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f]/90 via-[#070d1f]/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white font-medium shadow-lg">
                  <p className="text-lg">Alta performance focada no <span className="font-bold text-blue-300">sucesso da sua operação</span>.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Diferenciais Estratégicos */}
      <section id="qualidade" className="py-20 bg-slate-50 relative scroll-mt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Por que escolher a <span className="text-[#114092]">Krona</span>?</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Nossos pilares de excelência garantem que a sua operação nunca pare.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-[#114092]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#114092]/5 rounded-2xl flex items-center justify-center text-[#114092] mb-6 group-hover:scale-110 group-hover:bg-[#114092] group-hover:text-white transition-all duration-300">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{diff.title}</h3>
                <p className="text-slate-600 leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Missão, Visão e Valores (Layout Orgânico / Bento Grid) */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        {/* Elementos orgânicos de fundo */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">O que nos <span className="text-[#114092]">Move</span></h2>
            <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
              Mais do que movimentar mercadorias, somos impulsionados pela missão de conectar negócios com extrema segurança, agilidade e tecnologia. Conheça os pilares inegociáveis que garantem a excelência absoluta da Krona Express em cada rota do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
            {/* Missão - Card Principal Grande */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group cursor-pointer"
            >
              {/* Imagem flutuante no fundo, máscara degradê para esmaecer suavemente pra esquerda */}
              <div className="absolute top-0 right-0 w-2/3 h-full opacity-50 transition-transform duration-1000 group-hover:scale-105 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 70%)', maskImage: 'linear-gradient(to right, transparent, black 70%)' }}>
                <img src="https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&w=800&q=80" alt="Background Logística" className="w-full h-full object-cover grayscale" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#114092] font-semibold text-xs tracking-wide mb-6 uppercase">
                  <Flag01Icon className="w-3.5 h-3.5" /> Nosso Propósito Diário
                </div>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Nossa Missão</h3>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                  Entregar não apenas cargas, mas <span className="font-semibold text-[#114092]">soluções logísticas completas</span>, agregando valor e segurança máxima às cadeias de suprimentos dos nossos clientes em todo o território nacional.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-100">
                    <strong className="block text-slate-900 text-lg">Soluções</strong>
                    <span className="text-slate-500 text-sm">Logística integrada e inteligente</span>
                  </div>
                  <div className="flex-1 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-100">
                    <strong className="block text-slate-900 text-lg">Valor Real</strong>
                    <span className="text-slate-500 text-sm">Foco no crescimento do cliente</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visão - Card Complementar (Vertical) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 bg-[#070d1f] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#114092]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold text-xs tracking-wide mb-6 uppercase backdrop-blur-sm">
                  <EyeIcon className="w-3.5 h-3.5" /> Nosso Futuro
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-6">Nossa Visão</h3>
                <p className="text-lg text-blue-100/80 leading-relaxed font-light">
                  Ser reconhecida como a transportadora <span className="font-semibold text-white">mais confiável e moderna</span> do Brasil, estabelecendo o padrão absoluto de excelência em logística de alta performance.
                </p>
              </div>
              <div className="mt-8 self-end relative">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse group-hover:bg-blue-400/40 transition-colors duration-500"></div>
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500">
                  <ArrowUpRight01Icon className="w-8 h-8 text-blue-300" />
                </div>
              </div>
            </motion.div>

            {/* Valores - Span total em colunas na base */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center mb-10">
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-semibold text-xs tracking-wide mb-4 uppercase">
                    <Diamond01Icon className="w-3.5 h-3.5" /> Nosso DNA
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">Nossos Valores</h3>
                </div>
                <div className="flex-1 w-full h-px bg-slate-100 hidden md:block"></div>
                <p className="text-slate-500 max-w-sm text-sm">
                  A base inegociável da nossa cultura corporativa, moldando cada decisão.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-8">
                <div className="group cursor-pointer relative pt-6">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-100 group-hover:bg-[#114092] transition-colors duration-500"></div>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-[#114092] transition-colors duration-500">01</span>
                    <strong className="text-slate-900 text-xl font-bold group-hover:text-[#114092] transition-colors duration-300 mt-2">Compromisso</strong>
                  </div>
                  <span className="text-slate-600 leading-relaxed block text-base group-hover:text-slate-800 transition-colors">A pontualidade é a nossa regra número um. Seu planejamento 100% respeitado.</span>
                </div>

                <div className="group cursor-pointer relative pt-6">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-100 group-hover:bg-[#114092] transition-colors duration-500"></div>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-[#114092] transition-colors duration-500">02</span>
                    <strong className="text-slate-900 text-xl font-bold group-hover:text-[#114092] transition-colors duration-300 mt-2">Transparência</strong>
                  </div>
                  <span className="text-slate-600 leading-relaxed block text-base group-hover:text-slate-800 transition-colors">Comunicação clara e imediata em cada etapa, sem surpresas para sua operação.</span>
                </div>

                <div className="group cursor-pointer relative pt-6">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-100 group-hover:bg-[#114092] transition-colors duration-500"></div>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-[#114092] transition-colors duration-500">03</span>
                    <strong className="text-slate-900 text-xl font-bold group-hover:text-[#114092] transition-colors duration-300 mt-2">Inovação</strong>
                  </div>
                  <span className="text-slate-600 leading-relaxed block text-base group-hover:text-slate-800 transition-colors">Adoção das melhores ferramentas tecnológicas para garantir eficiência de ponta a ponta.</span>
                </div>

                <div className="group cursor-pointer relative pt-6">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-100 group-hover:bg-[#114092] transition-colors duration-500"></div>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-5xl font-black text-slate-100 group-hover:text-[#114092] transition-colors duration-500">04</span>
                    <strong className="text-slate-900 text-xl font-bold group-hover:text-[#114092] transition-colors duration-300 mt-2">Foco no Cliente</strong>
                  </div>
                  <span className="text-slate-600 leading-relaxed block text-base group-hover:text-slate-800 transition-colors">Atendimento humano, dedicado e flexível, entendendo o seu negócio profundamente.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Galeria de Estrutura (Bento Grid) */}
      <section id="gerenciamento-risco" className="py-12 scroll-mt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Nossa <span className="text-[#114092]">Estrutura</span></h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Tudo que é necessário para garantir a integridade da sua operação de ponta a ponta.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Item Grande (Span 2 cols) */}
            <motion.div 
              className="md:col-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" alt="Rede de Armazenagem" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-bold text-3xl mb-2">Rede de Armazenagem</h4>
                  <p className="text-white/80 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Bases estratégicas prontas para cross-docking e armazenagem temporária segura.</p>
                </div>
              </div>
            </motion.div>

            {/* Item Normal */}
            <motion.div 
              className="rounded-[2rem] overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" alt="Veículos Monitorados" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-bold text-2xl mb-1">Veículos Monitorados</h4>
                <p className="text-white/70 text-sm">Rastreamento 24h avançado.</p>
              </div>
            </motion.div>

            {/* Item Normal */}
            <motion.div 
              className="rounded-[2rem] overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Equipe Especializada" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-bold text-2xl mb-1">Equipe Capacitada</h4>
                <p className="text-white/70 text-sm">Treinamento contínuo em segurança.</p>
              </div>
            </motion.div>

            {/* Item Grande (Span 2 cols) */}
            <motion.div 
              className="md:col-span-2 rounded-[2rem] overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80" alt="Gestão de Risco" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-bold text-3xl mb-2">Gerenciamento de Risco Integrado</h4>
                  <p className="text-white/80 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">PGR rigoroso aplicado do embarque à entrega final, minimizando qualquer tipo de sinistro.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
