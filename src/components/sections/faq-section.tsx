import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">FAQ Operacional</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossas operações logísticas e padrões de atendimento.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-semibold text-lg">
              Como funciona o seguro de carga nas operações da Krona Express?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Trabalhamos com gerenciamento de risco de ponta a ponta e possuímos apólices completas de RCTR-C (Responsabilidade Civil do Transportador Rodoviário de Carga) e RCF-DC (Desvio de Carga). Nossa equipe segue rigorosamente as diretrizes do PGR (Plano de Gerenciamento de Risco) para garantir a integridade da sua mercadoria.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-semibold text-lg">
              Qual a diferença prática entre Carga Lotação (FTL) e Fracionada (LTL)?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Na Carga Lotação (FTL - Full Truckload), o veículo é dedicado exclusivamente para a sua carga, indo direto da origem ao destino, ideal para grandes volumes ou urgência. Na Carga Fracionada (LTL - Less than Truckload), sua mercadoria divide o espaço do veículo com outros embarcadores, passando por processos de consolidação, o que otimiza custos para volumes menores.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-semibold text-lg">
              Quais documentos são exigidos para embarque e emissão de CT-e/MDF-e?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Para a correta emissão do Conhecimento de Transporte (CT-e) e Manifesto Eletrônico (MDF-e), exigimos o arquivo XML e a DANFE física da Nota Fiscal Eletrônica (NF-e) da mercadoria. Todos os dados de origem, destino, peso, cubagem e valor devem estar corretamente declarados na nota.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-semibold text-lg">
              Como faço para acompanhar o status e localização da minha mercadoria?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Você pode acompanhar sua carga diretamente na nossa Área de Rastreamento (no menu principal) informando o CNPJ do embarcador ou pagador e o número da NF/CT-e. Além disso, nosso SAC atende solicitações via WhatsApp para status emergenciais.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-semibold text-lg">
              Qual o prazo médio de retorno após o envio de uma solicitação de cotação?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Nossa equipe comercial está comprometida em oferecer agilidade. Solicitações enviadas via formulário detalhado são respondidas em até 2 horas úteis. Para demandas ainda mais urgentes, nosso canal de Cotação Rápida via WhatsApp oferece atendimento praticamente imediato durante o horário comercial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
