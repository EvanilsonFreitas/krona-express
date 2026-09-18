"use client";

import { motion } from "motion/react";
import { Flag01Icon, EyeIcon, Diamond01Icon, Rocket01Icon, UserGroupIcon, Shield01Icon } from "hugeicons-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutContentSection() {
  const stats = [
    { value: "15+", label: "Anos de Mercado", icon: <Rocket01Icon className="w-6 h-6" /> },
    { value: "50k+", label: "Cargas Entregues", icon: <Flag01Icon className="w-6 h-6" /> },
    { value: "300+", label: "Colaboradores", icon: <UserGroupIcon className="w-6 h-6" /> },
    { value: "100%", label: "Carga Assegurada", icon: <Shield01Icon className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white pb-24">
      {/* Seção de História */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Nossa História</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Fundada com o propósito de redefinir o padrão de qualidade no transporte rodoviário, a Krona Express cresceu aliando tecnologia, segurança e um atendimento extremamente focado nas necessidades do cliente. Hoje, somos referência nacional em soluções logísticas ágeis e eficientes.
            </p>
          </motion.div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  <Flag01Icon className="w-12 h-12 text-[#114092] mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Entregar não apenas cargas, mas soluções logísticas completas, agregando valor e segurança às cadeias de suprimentos dos nossos clientes em todo o território nacional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  <EyeIcon className="w-12 h-12 text-emerald-600 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ser reconhecida como a transportadora mais confiável e inovadora do Brasil, estabelecendo o padrão de excelência em transporte rodoviário e logística de alta performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  <Diamond01Icon className="w-12 h-12 text-amber-500 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Compromisso com o Prazo</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Transparência Total</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Inovação Contínua</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Foco no Cliente</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Nossa Estrutura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden aspect-video relative group">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Galpão" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h4 className="text-white font-bold text-xl">Armazéns Modernos</h4>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video relative group">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" alt="Frota" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h4 className="text-white font-bold text-xl">Frota Própria</h4>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video relative group">
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" alt="Equipe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h4 className="text-white font-bold text-xl">Equipe Especializada</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
