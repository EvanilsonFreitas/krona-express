"use client";

import { Accordion } from "radix-ui";

const faqs = [
  {
    q: "Qual a diferença entre carga lotação (FTL) e fracionada (LTL)?",
    a: "Na lotação (FTL, Full Truckload), o veículo é dedicado exclusivamente à sua carga e segue direto da origem ao destino. Costuma ser indicada para grandes volumes ou prazos apertados. Na fracionada (LTL, Less than Truckload), sua mercadoria divide o veículo com outras remessas, o que reduz o custo para volumes menores.",
  },
  {
    q: "Quais documentos são necessários para o embarque?",
    a: "Para emitir o CT-e e o MDF-e, precisamos da Nota Fiscal Eletrônica (NF-e) da mercadoria, com o arquivo XML e a DANFE. Origem, destino, peso, volumes e valor devem estar corretamente declarados na nota.",
  },
  {
    q: "Como funciona o seguro da carga?",
    a: "As condições de seguro e de gerenciamento de risco dependem do tipo de mercadoria, do valor e da rota, e são apresentadas na proposta comercial. Se a sua operação tem exigências específicas, informe na solicitação de cotação.",
  },
  {
    q: "Como acompanho uma carga em transporte?",
    a: "Fale com o nosso atendimento pelo WhatsApp ou telefone informando o número da NF-e ou do CT-e. Nós informamos a situação do transporte.",
  },
  {
    q: "Em quanto tempo recebo a cotação?",
    a: "Respondemos o mais rápido possível dentro do horário comercial. Quando houver urgência, prefira o WhatsApp.",
  },
];

export function Faq() {
  return (
    <section className="k-section bg-paper" aria-labelledby="faq">
      <div className="k-container">
        <div className="k-grid gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="faq" className="t-h2 max-w-[10ch]">
              Perguntas frequentes
            </h2>
          </div>
          <Accordion.Root type="single" collapsible className="col-span-12 border-t border-line lg:col-span-8">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`q${i}`} className="border-b border-line">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full cursor-pointer items-start gap-5 py-6 text-left md:py-7">
                    <span className="flex-1 text-[clamp(1.125rem,1rem+0.5vw,1.5rem)] leading-snug font-[500] tracking-[-0.015em]">{f.q}</span>
                    <span className="relative mt-2 size-3.5 shrink-0" aria-hidden="true">
                      <span className="absolute top-1/2 left-0 h-px w-full bg-current" />
                      <span className="absolute top-0 left-1/2 h-full w-px bg-current transition-transform duration-300 ease-[var(--ease-route)] group-data-[state=open]:scale-y-0" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="t-body max-w-2xl pb-7 text-steel">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
