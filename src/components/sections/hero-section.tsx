"use client";

import Link from "next/link";
import { Mail01Icon, Mouse01Icon } from "hugeicons-react";


export function HeroSection() {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

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
        <div className="lg:col-span-5 w-full relative z-20 lg:translate-y-16">
          <div className="bg-white/98 dark:bg-slate-900/98 rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/60 dark:border-slate-800 backdrop-blur-md w-full max-w-lg mx-auto lg:ml-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">Faça uma cotação</h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Origem da carga" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                <input type="text" placeholder="Destino da carga" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input type="text" placeholder="Valor da nota" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                <input type="number" placeholder="Quantidade" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                <input type="text" placeholder="Peso (kg)" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
              </div>

              <textarea placeholder="Dados da carga / Descrição" rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"></textarea>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-slate-600 dark:text-slate-400 font-medium">Seu nome</label>
                  <input type="text" placeholder="Nome e sobrenome" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-slate-600 dark:text-slate-400 font-medium">WhatsApp</label>
                  <input type="tel" placeholder="(11) 9 9999-9999" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-600 dark:text-slate-400 font-medium">Seu e-mail</label>
                <input type="email" placeholder="Exemplo@gmail.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
              </div>

              <button type="submit" className="w-full bg-[#114092] hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-900/30 active:scale-[0.98] mt-2">
                Solicitar cotação
              </button>
            </form>
          </div>
        </div>
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
