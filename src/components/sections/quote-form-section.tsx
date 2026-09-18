"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DeliveryTruck01Icon, Call02Icon, InformationCircleIcon } from "hugeicons-react";

export function QuoteFormSection() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Formulário */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-xl bg-white overflow-hidden p-0">
              <div className="bg-primary p-6 text-white flex items-center gap-4">
                <DeliveryTruck01Icon className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold">Solicitação de Cotação</h3>
                  <p className="text-primary-foreground/80 text-sm">Preencha os dados abaixo e receba nossa proposta em até 30 minutos.</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Dados de Contato */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b pb-2">1. Dados de Contato</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Nome / Empresa *</label>
                        <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ex: João Silva ou Empresa XYZ" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">E-mail *</label>
                        <input type="email" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Telefone / WhatsApp *</label>
                        <input type="tel" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(00) 00000-0000" />
                      </div>
                    </div>
                  </div>

                  {/* Dados da Carga */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b pb-2">2. Dados da Carga</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">CEP de Origem *</label>
                        <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="00000-000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">CEP de Destino *</label>
                        <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="00000-000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Peso Total (kg) *</label>
                        <input type="number" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ex: 500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Valor da Nota Fiscal (R$)</label>
                        <input type="text" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="R$ 0,00" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-slate-700">Descrição / Dimensões / Observações</label>
                        <textarea className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all min-h-[100px]" placeholder="Descreva os produtos, dimensões (AxLxC) ou necessidades específicas de coleta/entrega."></textarea>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#111111] hover:bg-primary text-white text-lg py-6 rounded-xl font-bold shadow-lg transition-all">
                    Solicitar Cotação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg bg-emerald-50 relative overflow-hidden p-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full -z-10"></div>
              <CardContent className="p-8">
                <Call02Icon className="w-12 h-12 text-emerald-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tem muita urgência?</h3>
                <p className="text-slate-600 mb-6">
                  Nossa equipe de cotação está online agora no WhatsApp. Envie os dados e receba resposta imediata.
                </p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 rounded-xl shadow-md">
                    Chamar no WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-blue-50 relative overflow-hidden p-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -z-10"></div>
              <CardContent className="p-8">
                <InformationCircleIcon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Informações Importantes</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Para cargas perigosas, anexe a FISPQ (caso tenha contato por e-mail).</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> A cotação web tem validade de 5 dias úteis.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> O valor final pode sofrer alteração em caso de divergência nas medidas informadas.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
