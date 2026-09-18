"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search01Icon, Call02Icon, Mail01Icon, Menu01Icon, Package01Icon, Home01Icon, Building01Icon, LiftTruckIcon, UserAdd01Icon, Calculator01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { motion, LayoutGroup } from "motion/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Efeito para calcular a posição e tamanho exato do botão ativo no menu
  useEffect(() => {
    if (!navRef.current) return;
    
    // Procura o link que está ativo no momento
    const activeLink = navRef.current.querySelector<HTMLElement>('[data-active="true"]');
    
    if (activeLink) {
      // Medimos a posição relativa ao container <nav>
      const parentRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setPillStyle({
        left: linkRect.left - parentRect.left,
        width: linkRect.width,
        opacity: 1
      });
    } else {
      setPillStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [pathname, scrolled]); // Recalcula quando a rota ou o scroll muda (pois o padding do header pode mudar)

  const navItems = [
    { name: "Página inicial", href: "/", icon: Home01Icon },
    { name: "Sobre Nós", href: "/sobre", icon: Building01Icon },
    { name: "Serviços", href: "/servicos", icon: LiftTruckIcon },
    { name: "Contato", href: "/contato", icon: UserAdd01Icon },
    { name: "Cotação", href: "/cotacao", icon: Calculator01Icon },
  ];

  // O TopBar usa a lógica de transparência em todas as páginas
  const isTransparent = !scrolled;

  const headerBgClass = isTransparent 
    ? "bg-transparent border-transparent" 
    : "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/50"; 

  const topBarClass = isTransparent
    ? "bg-transparent border-transparent"
    : "bg-[#040814] border-b border-white/5";

  return (
    <header className={`w-full fixed top-0 z-50 transition duration-300 ease-in-out ${headerBgClass}`}>
      {/* TopBar */}
      <div className={`w-full text-sm font-medium transition-all duration-300 overflow-hidden ${
        scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-20 py-2.5 opacity-100'
      } ${topBarClass}`}>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"><Call02Icon className="w-4 h-4" /> (11) 4000-0000</span>
            <span className="flex items-center gap-2 hidden sm:flex text-white/80 hover:text-white transition-colors"><Mail01Icon className="w-4 h-4" /> comercial@kronaexpress.com.br</span>
          </div>
          <Link href="/#rastreamento" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
            <Package01Icon className="w-4 h-4" /> Rastrear carga
          </Link>
        </div>
      </div>

      {/* Linha Divisória em Degradê */}
      <div className={`w-full h-[1px] transition-all duration-300 bg-gradient-to-r from-transparent via-white/30 to-transparent ${
        scrolled ? 'opacity-0' : 'opacity-100'
      }`} />

      {/* Main Header */}
      <div className="container mx-auto px-4 h-[88px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="relative z-10 transition-transform hover:scale-105 cursor-pointer">
            <Image 
              src={`${basePath}/brand/logo/${scrolled ? 'primary/Logo_Krona_Original.png' : 'monochrome/Logo_Krona_Branco.png'}`} 
              alt="Krona Express" 
              width={180} 
              height={50} 
              className="h-11 w-auto object-contain transition-all duration-300 ease-in-out" 
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav - Glassmorphism Premium Elevado */}
        <nav 
          ref={navRef}
          className={`hidden xl:flex relative items-center gap-2 border backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] ${
            scrolled ? 'bg-slate-100/50 border-slate-200/60' : 'bg-white/10 border-white/20'
          }`}
        >
          {/* Pílula Animada de Fundo (Exclusivamente Horizontal) */}
          <motion.div
            className="absolute top-2 bottom-2 bg-[#114092] shadow-md rounded-full"
            initial={false}
            animate={{ 
              left: pillStyle.left, 
              width: pillStyle.width, 
              opacity: pillStyle.opacity 
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />

          {navItems.map((item) => {
            const isActive = item.href === "/" ? isHome : pathname.startsWith(item.href) || pathname.includes(item.href.replace('/#', ''));
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                data-active={isActive}
                className={`relative z-10 group flex items-center justify-center px-5 py-2 cursor-pointer rounded-full transition-colors duration-300 ${
                  isActive ? '' : (scrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10')
                }`}
              >
                <div className={`flex items-center gap-2 transition-colors duration-300 ${
                  isActive 
                    ? 'text-white' 
                    : (scrolled ? 'text-slate-600 group-hover:text-[#114092]' : 'text-white/90 group-hover:text-white')
                }`}>
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                  <span className="text-[16px] font-medium tracking-wide">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Rastrear Carga (Aparece no scroll) para balancear o logo */}
        <div className="hidden xl:flex min-w-[200px] justify-end">
          <Link 
            href="/#rastreamento" 
            className={`flex items-center gap-2 border backdrop-blur-md rounded-full px-6 py-2.5 font-bold transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap ${
              scrolled 
                ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#114092] hover:bg-blue-800 border-[#114092] text-white' 
                : 'opacity-0 -translate-y-2 pointer-events-none bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
          >
            <Package01Icon className="w-4 h-4" />
            Rastrear carga
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden flex items-center pointer-events-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`cursor-pointer transition-colors ${
                scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}>
                <Menu01Icon className="w-6 h-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l-slate-100 text-slate-900 w-[90vw] max-w-[420px] flex flex-col h-full p-0">
              {/* Header do Menu */}
              <div className="p-8 pb-4 flex items-center justify-between">
                <SheetTitle className="sr-only text-slate-900">Menu de Navegação</SheetTitle>
                <Image 
                  src={`${basePath}/brand/logo/primary/Logo_Krona_Original.png`} 
                  alt="Krona Express" 
                  width={140} 
                  height={40} 
                  className="h-9 w-auto object-contain"
                />
              </div>

              {/* Lista de Navegação */}
              <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col justify-center">
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = item.href === "/" ? isHome : pathname.startsWith(item.href) || pathname.includes(item.href.replace('/#', ''));
                    return (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        className={`group flex items-center text-3xl md:text-4xl font-extrabold tracking-tight transition-all duration-300 ${
                          isActive ? "text-[#114092] translate-x-2" : "text-slate-400 hover:text-slate-900 hover:translate-x-2"
                        }`}
                      >
                        {item.name}
                        {isActive && <div className="ml-4 w-2 h-2 bg-[#114092] rounded-full" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Rodapé Fixo */}
              <div className="px-8 pb-8 pt-6 border-t border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-center mb-6 text-slate-500 text-sm font-medium">
                  <a href="tel:1140000000" className="hover:text-slate-900 transition-colors">
                    (11) 4000-0000
                  </a>
                  <a href="mailto:comercial@kronaexpress.com.br" className="hover:text-slate-900 transition-colors">
                    comercial@kronaexpress.com.br
                  </a>
                </div>
                
                <Button asChild className="w-full h-14 bg-[#25D366] hover:bg-[#1fae53] text-white font-bold text-lg rounded-xl shadow-none hover:shadow-lg hover:shadow-[#25D366]/20 transition-all">
                  <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Chamar no WhatsApp
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
