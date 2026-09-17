import Link from "next/link";
import Image from "next/image";
import { Call02Icon, Mail01Icon, Location02Icon } from "hugeicons-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
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
            <p className="text-sm text-muted-foreground">
              Excelência em logística rodoviária pesada. Nosso compromisso é com o transporte seguro e pontual de suas cargas por todo o território nacional.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Soluções Logísticas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/servicos" className="hover:text-primary">Carga Lotação</Link></li>
              <li><Link href="/servicos" className="hover:text-primary">Carga Fracionada</Link></li>
              <li><Link href="/servicos" className="hover:text-primary">Logística Reversa</Link></li>
              <li><Link href="/servicos" className="hover:text-primary">Armazenagem / Cross-docking</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Institucional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/sobre" className="hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="/sobre" className="hover:text-primary">Política de Qualidade</Link></li>
              <li><Link href="/sobre" className="hover:text-primary">Gerenciamento de Risco</Link></li>
              <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Atendimento</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Location02Icon className="w-5 h-5 shrink-0 text-primary" />
                <span>Rua da Logística, 1000<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Call02Icon className="w-5 h-5 shrink-0 text-primary" />
                <span>(11) 4000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail01Icon className="w-5 h-5 shrink-0 text-primary" />
                <span>comercial@kronaexpress.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-muted py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Krona Express. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Termos de Uso</Link>
            <Link href="#" className="hover:text-primary">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
