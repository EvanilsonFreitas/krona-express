"use client";

import Link from "next/link";
import { Mail01Icon, Mouse01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Parallax } from "@/components/ui/parallax";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { heroQuoteSchema, HeroQuoteFormValues } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

export function HeroSection() {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

  const form = useForm<HeroQuoteFormValues>({
    resolver: zodResolver(heroQuoteSchema),
    defaultValues: {
      origem: "",
      destino: "",
      valor_nf: "",
      qtd: "",
      peso: "",
      nome: "",
      email: "",
      whatsapp: "",
    },
  });

  function onSubmit(data: HeroQuoteFormValues) {
    console.log("Hero Form Data:", data);
    alert("Cotação enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
  }

  const inputClasses = "w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#114092] focus:ring-4 focus:ring-[#114092]/10 transition-all aria-invalid:border-red-500 aria-invalid:ring-red-500/20 aria-invalid:ring-4 dark:aria-invalid:border-red-500/80";

  return (
    <section className="relative min-h-[100vh] lg:min-h-[110vh] w-full max-w-[1920px] mx-auto flex flex-col justify-start pt-32 lg:pt-40 overflow-hidden bg-[#070d1f]">
      {/* Container da Imagem que assume a altura exata da imagem */}
      <div className="absolute top-0 left-0 w-full z-0">
        <img
          src={`${basePath}/images/pages/home/Fundo_Header.png`}
          alt="Background Hero"
          className="w-full h-auto object-top"
        />
        {/* Degradê posicionado perfeitamente em cima do bottom da imagem */}
        <div className="absolute bottom-0 left-0 w-full h-[25%] min-h-[150px] bg-gradient-to-t from-[#070d1f] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Gradiente azul marinho escuro horizontal para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030b1c]/90 via-[#030b1c]/40 to-transparent z-0 w-full h-full pointer-events-none" />

      {/* Grid de Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Coluna da Esquerda (Textos e CTA) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Comprometimento <br /> e Pontualidade
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 font-medium max-w-xl leading-relaxed drop-shadow-sm">
            Transporte com quem entende do assunto: frete fracionado, exclusivo, armazenagem e mudanças.
          </p>

          {/* Action Buttons (Email e WhatsApp) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-10 animate-fade-in-up animation-delay-200">
            {/* E-mail Button */}
            <a
              href="mailto:comercial@kronaexpress.com.br"
              className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#0E3F8E] hover:bg-blue-800 text-white font-medium text-[17px] transition-all duration-300 shadow-lg hover:-translate-y-1 border border-blue-700/50"
            >
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                <Mail01Icon className="w-5 h-5" />
              </div>
              Mande um e-mail
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-white hover:text-white/90 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={`${basePath}/images/icons/whatsapp.png`}
                alt="WhatsApp"
                className="w-[50px] h-[50px] object-contain drop-shadow-lg group-hover:scale-105 transition-transform shrink-0"
              />
              <span className="font-medium text-[17px]">Chame no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Coluna da Direita (Card Flutuante de Cotação) */}
        <Parallax speed={0.15} className="lg:col-span-5 w-full relative z-20 lg:translate-y-16">
          <div className="bg-white/95 dark:bg-slate-900/95 rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-6 sm:p-10 border border-white/80 dark:border-slate-700/50 backdrop-blur-2xl w-full max-w-lg mx-auto lg:ml-auto">

            <div className="mb-8 text-center">
              <Badge variant="outline" className="mb-3 bg-blue-50 text-[#114092] border-blue-200 px-3 py-1 text-xs tracking-wider">RESPOSTA EM 15 MIN</Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Faça sua Cotação</h2>
              <p className="text-slate-500 mt-2 text-sm font-medium">Preencha os dados abaixo e entraremos em contato imediatamente.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Bloco 1: Logística */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="origem"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input {...field} placeholder="Origem da carga *" className={inputClasses} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destino"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input {...field} placeholder="Destino da carga *" className={inputClasses} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="valor_nf"
                      render={({ field }) => (
                        <FormItem className="col-span-3 sm:col-span-1">
                          <FormControl>
                            <input 
                              {...field} 
                              inputMode="numeric" 
                              placeholder="Valor (NF) *" 
                              className={inputClasses}
                              onChange={(e) => field.onChange(e.target.value.replace(/[^\d.,]/g, ''))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="qtd"
                      render={({ field }) => (
                        <FormItem className="col-span-1">
                          <FormControl>
                            <input 
                              {...field} 
                              inputMode="numeric" 
                              placeholder="Qtd *" 
                              className={inputClasses}
                              onChange={(e) => field.onChange(e.target.value.replace(/[^\d]/g, ''))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="peso"
                      render={({ field }) => (
                        <FormItem className="col-span-2 sm:col-span-1">
                          <FormControl>
                            <input 
                              {...field} 
                              inputMode="numeric" 
                              placeholder="Peso (kg) *" 
                              className={inputClasses}
                              onChange={(e) => field.onChange(e.target.value.replace(/[^\d.,]/g, ''))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Divisor */}
                <div className="flex items-center gap-3 py-3">
                  <div className="h-px w-full bg-slate-300 dark:bg-slate-700"></div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest shrink-0">Seus Dados</span>
                  <div className="h-px w-full bg-slate-300 dark:bg-slate-700"></div>
                </div>

                {/* Bloco 2: Contato */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input {...field} placeholder="Nome Completo / Empresa *" className={inputClasses} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input {...field} type="email" placeholder="Seu melhor e-mail *" className={inputClasses} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input 
                              {...field} 
                              type="tel" 
                              placeholder="WhatsApp *" 
                              className={inputClasses}
                              onChange={(e) => field.onChange(e.target.value.replace(/[^\d\s\-\+\(\)]/g, ''))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Botão de Envio */}
                <button type="submit" className="w-full bg-[#114092] hover:bg-[#0c2f6d] text-white font-bold text-base py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(17,64,146,0.3)] hover:shadow-[0_10px_25px_rgba(17,64,146,0.4)] active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group cursor-pointer">
                  Solicitar Cotação
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </Form>
          </div>
        </Parallax>
      </div>

      {/* Indicador de Scroll (Mouse) */}
      <div
        className="absolute bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer opacity-70 hover:opacity-100 transition-opacity animate-bounce"
        style={{ animationDuration: '3s' }}
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        title="Rolar para baixo"
      >
        <div className="p-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-lg">
          <Mouse01Icon className="w-6 h-6 text-white drop-shadow-md" />
        </div>
      </div>

    </section>
  );
}
