import { DeliveryTruck01Icon, Package01Icon, Location02Icon, DocumentValidationIcon, ArrowRight01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="servicos" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">Soluções Logísticas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Transporte Sob Medida para a sua Cadeia de Suprimentos
          </h2>
          <p className="text-muted-foreground text-lg">
            Da coleta à entrega final, oferecemos abrangência nacional com máxima segurança e rastreabilidade para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <DeliveryTruck01Icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Carga Lotação (FTL)</CardTitle>
              <CardDescription>
                Veículos dedicados ponto a ponto para máxima eficiência.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Transporte dedicado sem consolidação</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Lacre rastreado desde a origem</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Flexibilidade de rotas e horários</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Entregas expressas garantidas</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
                <Link href="https://wa.me/551140000000?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+r%C3%A1pida+de+frete+com+a+Krona+Express." target="_blank" rel="noopener noreferrer">Cotação Rápida</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Package01Icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Carga Fracionada (LTL)</CardTitle>
              <CardDescription>
                Consolidação otimizada de mercadorias.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Otimização inteligente de rotas e cargas</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Centros de distribuição estratégicos</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Redução de custos para menores volumes</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Acompanhamento detalhado do trânsito</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
                <Link href="https://wa.me/551140000000?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+r%C3%A1pida+de+frete+com+a+Krona+Express." target="_blank" rel="noopener noreferrer">Cotação Rápida</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <DocumentValidationIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Logística Reversa</CardTitle>
              <CardDescription>
                Gerenciamento inteligente de retornos e devoluções.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Coleta e retorno ágil de materiais e paletes</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Atendimento a garantias e devoluções</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Rastreabilidade documental (canhotos/CT-e)</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Processos integrados com a operação do cliente</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
                <Link href="https://wa.me/551140000000?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+r%C3%A1pida+de+frete+com+a+Krona+Express." target="_blank" rel="noopener noreferrer">Cotação Rápida</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 4 */}
          <Card className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Location02Icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Operações Especiais</CardTitle>
              <CardDescription>
                Projetos dedicados in-house para grandes operações.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Transporte corporativo dedicado</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Customização operacional total</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Nível de Serviço (SLA) estruturado</li>
                <li className="flex gap-2 items-start"><ArrowRight01Icon className="w-4 h-4 shrink-0 text-primary mt-0.5"/> Frota padronizada com a sua marca</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950">
                <Link href="https://wa.me/551140000000?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+r%C3%A1pida+de+frete+com+a+Krona+Express." target="_blank" rel="noopener noreferrer">Cotação Rápida</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
