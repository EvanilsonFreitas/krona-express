"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search01Icon, Call02Icon, Mail01Icon, Menu01Icon, Package01Icon, Home01Icon, Building01Icon, LiftTruckIcon, UserAdd01Icon, Calculator01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    : "bg-[#070d1f]/95 backdrop-blur-md shadow-lg border-b border-white/5"; 

  const topBarClass = isTransparent
    ? "bg-transparent border-transparent"
    : "bg-[#040814] border-b border-white/5";

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${headerBgClass}`}>
      {/* TopBar */}
      <div className={`w-full text-sm font-medium transition-all duration-300 overflow-hidden ${
        scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-20 py-2.5 opacity-100'
      } ${topBarClass}`}>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"><Call02Icon className="w-4 h-4" /> (11) 4000-0000</span>
            <span className="flex items-center gap-2 hidden sm:flex text-white/80 hover:text-white transition-colors"><Mail01Icon className="w-4 h-4" /> comercial@kronaexpress.com.br</span>
          </div>
          <Link href="/contato#rastreamento" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
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
          <Link href="/" className="relative z-10 transition-transform hover:scale-105">
            <Image 
              src={`${basePath}/brand/logo/monochrome/Logo_Krona_Branco.png`} 
              alt="Krona Express" 
              width={180} 
              height={50} 
              className="h-11 w-auto object-contain transition-all duration-300 ease-in-out" 
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav - Glassmorphism Premium Elevado */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? isHome : pathname.startsWith(item.href) || pathname.includes(item.href.replace('/#', ''));
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className="relative group flex flex-col items-center justify-center px-4 py-1.5 transition-all duration-300"
              >
                <div className={`flex items-center gap-2 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                }`}>
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                  <span className="text-[16px] font-normal tracking-wide">{item.name}</span>
                </div>
                
                {/* Linha Ativa (Underline) - Arredondada e posicionada logo abaixo do texto */}
                <div className={`absolute -bottom-1 h-[3px] rounded-full bg-white transition-all duration-300 ease-out ${
                  isActive ? 'w-10 opacity-100' : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-50'
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Rastrear Carga (Aparece no scroll) para balancear o logo */}
        <div className="hidden lg:flex w-[180px] justify-end">
          <Link 
            href="/contato#rastreamento" 
            className={`flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full px-5 py-2.5 text-white font-medium transition-all duration-300 shadow-lg ${
              scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <Package01Icon className="w-4 h-4" />
            Rastrear carga
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center pointer-events-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu01Icon className="w-6 h-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#070d1f] border-slate-800 text-white">
              <SheetTitle className="sr-only text-white">Menu de Navegação</SheetTitle>
              <div className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => {
                  const isActive = item.href === "/" ? isHome : pathname.startsWith(item.href) || pathname.includes(item.href.replace('/#', ''));
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      className={`flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                        isActive ? "bg-[#0E3F8E] text-white" : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  );
                })}
                <Button asChild className="w-full mt-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-sm rounded-xl py-6">
                  <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Chame no WhatsApp</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
