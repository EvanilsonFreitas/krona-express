"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/krona-express' : '';

  useEffect(() => {
    // Nas demais páginas, ele deve ser fixo independente do scroll
    if (!isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Quando o scroll passar da área inicial do Hero (onde já tem o botão de WhatsApp)
      // Mostramos o botão flutuante. Assumimos que o botão do Hero some da tela após ~500px de scroll.
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Checar estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <Link 
        href="https://wa.me/551140000000?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor." 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-[60px] h-[60px] cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <img 
          src={`${basePath}/images/icons/whatsapp.png`} 
          alt="WhatsApp" 
          className="w-full h-full object-contain drop-shadow-[0_4px_15px_rgba(37,211,102,0.4)] group-hover:scale-110 group-hover:drop-shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300"
        />
      </Link>
    </div>
  );
}
