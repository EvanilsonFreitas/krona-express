"use client";

import { useState } from "react";
import { Call02Icon, Mail01Icon, Comment01Icon, Time01Icon, ArrowRight01Icon, Copy01Icon, Tick01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("comercial@kronaexpress.com.br");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contato" className="w-full py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <Badge variant="outline" className="text-primary border-primary">Atendimento</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fale Diretamente com Nossos Especialistas em Logística
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender suas demandas comerciais e operacionais.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Telefone */}
          <div className="group cursor-pointer relative bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-[#114092] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-blue-100/50">
                <Call02Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Telefone Operacional</h3>
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">Suporte 24h para monitoramento e informações de tráfego da sua carga.</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-slate-900 group-hover:text-[#114092] transition-colors duration-300">(11) 4000-0000</span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#114092] group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100">
                  <ArrowRight01Icon className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp - Destaque */}
          <div className="group cursor-pointer relative bg-[#070d1f] rounded-[2rem] p-8 shadow-xl border border-slate-800 hover:shadow-2xl hover:shadow-[#25D366]/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden transform md:-translate-y-4">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2rem]">
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80" 
                alt="Atendimento Logístico" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-luminosity" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/80 to-[#070d1f]/40"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#25D366]/20 transition-colors duration-500 shadow-sm border border-[#25D366]/20">
                <img src={`${basePath}/images/icons/whatsapp.png`} alt="WhatsApp" className="w-8 h-8 object-contain drop-shadow-sm" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">WhatsApp Dedicado</h3>
              <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">Canal exclusivo para cotações rápidas e atendimento direto com o time comercial.</p>
              
              <div className="mt-auto">
                <Button asChild size="lg" className="w-full h-12 font-bold bg-[#25D366] hover:bg-[#1fae53] text-white rounded-xl shadow-lg shadow-[#25D366]/20 cursor-pointer transition-colors">
                  <Link href="https://wa.me/551140000000" target="_blank" rel="noopener noreferrer">
                    Conversar Agora
                    <ArrowRight01Icon className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* E-mail */}
          <div className="group cursor-pointer relative bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-[#114092] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-blue-100/50">
                <Mail01Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">E-mail Corporativo</h3>
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">Envie propostas formais, planilhas para análise de malha e demandas institucionais.</p>
              
              <div 
                className="flex items-center justify-between mt-auto bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:border-[#114092]/30 transition-colors cursor-pointer"
                onClick={handleCopyEmail}
                title="Copiar e-mail"
              >
                <span className="text-sm font-bold text-slate-700 truncate mr-2">comercial@kronaexpress.com.br</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 shadow-sm ${
                  emailCopied ? 'bg-green-100 text-green-600' : 'bg-white text-slate-400 group-hover:text-[#114092]'
                }`}>
                  {emailCopied ? <Tick01Icon className="w-5 h-5 animate-in zoom-in duration-300" /> : <Copy01Icon className="w-4 h-4" />}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center flex items-center justify-center gap-2 text-muted-foreground">
          <Time01Icon className="w-5 h-5 text-primary" />
          <span><strong>Horário Comercial:</strong> Segunda a Sexta, das 08:00 às 18:00. (Operação 24h)</span>
        </div>
      </div>
    </section>
  );
}
