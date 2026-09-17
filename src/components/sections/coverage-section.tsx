import { Location01Icon, Location02Icon, DeliveryTruck01Icon, Target01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function CoverageSection() {
  return (
    <section id="cobertura" className="w-full py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary">Área de Atuação</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cobertura Nacional e Rotas Estratégicas
          </h2>
          <p className="text-muted-foreground text-lg">
            Agilidade e conexão direta entre os principais polos industriais e comerciais do país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Location01Icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-xl">Rotas Estratégicas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">
                Conexões diárias e otimizadas entre as regiões Sudeste, Sul, Centro-Oeste e principais capitais, reduzindo o tempo de trânsito.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Location02Icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-xl">Bases Operacionais</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">
                Centros de Distribuição localizados em pontos nevrálgicos para agilizar operações de cross-docking e transferência.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <Target01Icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-xl">Prazos Padronizados</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">
                Lead times previsíveis por perfil de rota e modalidade, assegurando o SLA acordado com sua operação.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <DeliveryTruck01Icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="text-xl">Rastreabilidade Total</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-foreground/80">
                Monitoramento da carga durante todo o trajeto, com atualizações de status para embarcador e destinatário.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
