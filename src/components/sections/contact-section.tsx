import { Call02Icon, Mail01Icon, Comment01Icon, Time01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contato" className="w-full py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">Atendimento</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fale Diretamente com Nossos Especialistas em Logística
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender suas demandas comerciais e operacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Call02Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Telefone Operacional</h3>
              <p className="text-muted-foreground text-sm">Suporte 24h para operações e tráfego.</p>
              <p className="text-2xl font-black text-foreground pt-2">(11) 4000-0000</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-[#25D366] shadow-lg hover:shadow-xl transition-all transform md:-translate-y-4">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Comment01Icon className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold">WhatsApp Dedicado</h3>
              <p className="text-muted-foreground text-sm">Cotação rápida e atendimento ágil.</p>
              <div className="pt-2">
                <Button asChild size="lg" className="w-full font-bold bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <Link href="https://wa.me/551140000000?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+r%C3%A1pida+de+frete+com+a+Krona+Express." target="_blank" rel="noopener noreferrer">
                    Conversar Agora
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-8 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail01Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">E-mail Comercial</h3>
              <p className="text-muted-foreground text-sm">Envie propostas e planilhas de cotação.</p>
              <p className="text-lg font-bold text-foreground pt-2 break-all">
                comercial@kronaexpress.com.br
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center flex items-center justify-center gap-2 text-muted-foreground">
          <Time01Icon className="w-5 h-5 text-primary" />
          <span><strong>Horário Comercial:</strong> Segunda a Sexta, das 08:00 às 18:00. (Operação 24h)</span>
        </div>
      </div>
    </section>
  );
}
