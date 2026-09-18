import Link from "next/link";
import Image from "next/image";
import { Call02Icon, Mail01Icon, Location02Icon } from "hugeicons-react";

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <Image 
              src="/brand/logo/primary/Logo_Krona_Original.png" 
              alt="Krona Express" 
              width={180} 
              height={50} 
              className="h-10 w-auto object-contain" 
            />
            <p className="text-sm text-slate-600 leading-relaxed">
              Excelência em logística rodoviária pesada. Nosso compromisso é com o transporte seguro e pontual de suas cargas por todo o território nacional.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Soluções Logísticas</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/servicos/#lotacao" className="hover:text-[#114092] transition-colors">Carga Lotação</Link></li>
              <li><Link href="/servicos/#fracionada" className="hover:text-[#114092] transition-colors">Carga Fracionada</Link></li>
              <li><Link href="/servicos/#reversa" className="hover:text-[#114092] transition-colors">Logística Reversa</Link></li>
              <li><Link href="/servicos/#especiais" className="hover:text-[#114092] transition-colors">Armazenagem / Cross-docking</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Institucional</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/sobre/#sobre-nos" className="hover:text-[#114092] transition-colors">Sobre Nós</Link></li>
              <li><Link href="/sobre/#qualidade" className="hover:text-[#114092] transition-colors">Política de Qualidade</Link></li>
              <li><Link href="/sobre/#gerenciamento-risco" className="hover:text-[#114092] transition-colors">Gerenciamento de Risco</Link></li>
              <li><Link href="/contato/" className="hover:text-[#114092] transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Location02Icon className="w-5 h-5 shrink-0 text-[#114092]" />
                <span>Rua da Logística, 1000<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Call02Icon className="w-5 h-5 shrink-0 text-[#114092]" />
                <span>(11) 4000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail01Icon className="w-5 h-5 shrink-0 text-[#114092]" />
                <span>comercial@kronaexpress.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#070d1f] text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-blue-100/60">
          <p>© {new Date().getFullYear()} Krona Express. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
          <div className="flex items-center gap-3">
            <span>Desenvolvido por</span>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
              <Image 
                src="/brand/logo/symbol/logo_Onebi.svg" 
                alt="Onebi Analytics" 
                width={250} 
                height={80} 
                className="h-14 w-auto opacity-100 hover:scale-105 transition-all drop-shadow-sm" 
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
