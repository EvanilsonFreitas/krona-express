"use client";

import { motion } from "motion/react";
import { Location01Icon, MapsLocation01Icon, MapsLocation02Icon, Clock01Icon } from "hugeicons-react";
import { Card, CardContent } from "@/components/ui/card";

export function CoverageMapSection() {
  const bases = [
    { city: "São Paulo, SP", type: "Matriz & Hub Central", address: "Guarulhos (Próximo à Rodovia Dutra)" },
    { city: "Campinas, SP", type: "Cross-docking", address: "Polo Logístico Viracopos" },
    { city: "Curitiba, PR", type: "Hub Região Sul", address: "São José dos Pinhais" },
    { city: "Belo Horizonte, MG", type: "Base Operacional", address: "Contagem" },
    { city: "Goiânia, GO", type: "Hub Centro-Oeste", address: "Aparecida de Goiânia" },
  ];

  const slaData = [
    { route: "SP Capital ➔ Grande SP", prazo: "24 horas", destaque: true },
    { route: "SP ➔ Interior SP (até 200km)", prazo: "24 a 48 horas", destaque: false },
    { route: "SP ➔ Curitiba / PR", prazo: "48 horas", destaque: false },
    { route: "SP ➔ Belo Horizonte / MG", prazo: "48 a 72 horas", destaque: false },
    { route: "SP ➔ Goiânia / GO", prazo: "72 a 96 horas", destaque: false },
  ];

  return (
    <div className="bg-white py-24">
      
      {/* Seção do Mapa / Estados Atendidos */}
      <section className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <MapsLocation01Icon className="w-5 h-5" />
              Presença Nacional
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Malha Logística de Alta Performance
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Atuamos com foco total nas regiões <strong>Sudeste, Sul e Centro-Oeste</strong> do Brasil, os maiores polos econômicos do país. Nossa malha é desenhada para garantir conexões rápidas, sem perda de tempo em terminais intermediários desnecessários.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-md bg-slate-50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#114092] text-white flex items-center justify-center shrink-0">
                    <Location01Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Sudeste</h4>
                    <p className="text-xs text-slate-500">SP, MG, RJ, ES</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-slate-50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#114092] text-white flex items-center justify-center shrink-0">
                    <Location01Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Sul</h4>
                    <p className="text-xs text-slate-500">PR, SC, RS</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-slate-50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#114092] text-white flex items-center justify-center shrink-0">
                    <Location01Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Centro-Oeste</h4>
                    <p className="text-xs text-slate-500">GO, DF, MT, MS</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Imagem de placeholder para um mapa do Brasil focado nas regiões */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Mapa de Cobertura" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-[#114092]/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Conectando o Brasil</h3>
              <p className="text-white/80">Monitoramento 24/7 em todas as rotas atendidas.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SLA de Entregas e Bases Operacionais */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Tabela de SLA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock01Icon className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-slate-900">Prazos de Entrega (SLA)</h3>
              </div>
              <p className="text-slate-600 mb-8">
                Tempos de trânsito médios (Lead Time) para cargas fracionadas partindo de São Paulo. Para cargas lotação (FTL), o prazo é reduzido.
              </p>
              
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                      <th className="p-4 font-semibold">Rota de Destino</th>
                      <th className="p-4 font-semibold text-right">Prazo Estimado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {slaData.map((item, idx) => (
                      <tr key={idx} className={`hover:bg-slate-50 transition-colors cursor-pointer ${item.destaque ? 'bg-blue-50/50' : ''}`}>
                        <td className="p-4 font-medium text-slate-800 flex items-center gap-2">
                          {item.destaque && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
                          {item.route}
                        </td>
                        <td className="p-4 text-right font-bold text-primary">{item.prazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Bases Operacionais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <MapsLocation02Icon className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-slate-900">Bases Operacionais</h3>
              </div>
              <p className="text-slate-600 mb-8">
                Contamos com centros de distribuição localizados estrategicamente para agilizar operações de cross-docking e last-mile.
              </p>
              
              <div className="space-y-4">
                {bases.map((base, idx) => (
                  <Card key={idx} className="border border-slate-200 shadow-sm hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer">
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{base.city}</h4>
                        <p className="text-sm text-slate-500 mt-1">{base.address}</p>
                      </div>
                      <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {base.type}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
