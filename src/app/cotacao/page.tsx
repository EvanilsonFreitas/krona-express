import { Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Photo } from "@/components/krona/photo";
import { ActionLink } from "@/components/krona/ui";
import { Reveal } from "@/components/krona/motion";
import { QuoteForm } from "@/components/quote/quote-form";
import { site, whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Solicitar cotação",
  description: "Solicite uma cotação de frete rodoviário com a Krona Express. Informe origem, destino e dados da carga e receba a proposta da equipe comercial.",
  alternates: { canonical: "cotacao/" },
};

const next = [
  { title: "Você envia a mensagem", text: "Depois de revisar os dados, você envia o resumo pelo WhatsApp ou pelo e-mail." },
  { title: "Analisamos a carga", text: "Se precisarmos de alguma informação adicional, entramos em contato." },
  { title: "Enviamos a proposta", text: "Você recebe a modalidade indicada e as condições do transporte." },
];

export default function CotacaoPage() {
  return (
    <>
      <Header tone="light" />
      <main id="conteudo" className="bg-paper">
        <section className="pt-[calc(var(--header-h)+clamp(3rem,2rem+4vw,6rem))] pb-[var(--section-y)]" aria-labelledby="cotacao-title">
          <div className="k-container">
            <div className="k-grid gap-y-14">
              <aside className="col-span-12 lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
                  <Reveal>
                    <h1 id="cotacao-title" className="t-h1 max-w-[9ch]">
                      Solicitar cotação
                    </h1>
                  </Reveal>
                  <p className="t-lead mt-6 max-w-sm text-steel">
                    Conte para nós sobre a sua carga. Quanto mais detalhes, mais precisa será a proposta.
                  </p>

                  <h2 className="mt-12 text-[1.0625rem] font-semibold">Como funciona</h2>
                  <ol className="mt-5 space-y-5">
                    {next.map((n, i) => (
                      <li key={n.title} className="grid grid-cols-[1.75rem_1fr] gap-x-2">
                        <span className="text-steel" aria-hidden="true">{i + 1}.</span>
                        <div>
                          <p className="font-medium">{n.title}</p>
                          <p className="t-small mt-0.5 text-steel">{n.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-12 border-t border-line pt-8">
                    <p className="text-[1.0625rem] font-semibold">Prefere conversar?</p>
                    <p className="t-small mt-1 text-steel">
                      Fale com a equipe comercial pelo WhatsApp ou pelo telefone {site.contact.phoneDisplay}.
                    </p>
                    <ActionLink
                      href={whatsappLink("Olá! Gostaria de solicitar uma cotação de frete.")}
                      external
                      icon="whatsapp"
                      variant="outline"
                      className="mt-5 w-full"
                    >
                      Falar no WhatsApp
                    </ActionLink>
                  </div>

                  <Photo
                    name="prancheta-documentos"
                    alt="Prancheta com documento de transporte apoiada sobre uma caixa"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="mt-12 hidden aspect-[4/3] w-full bg-ink lg:block"
                    focus="40% 50%"
                  />
                </div>
              </aside>

              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <Suspense fallback={<div className="min-h-[60vh] bg-white" aria-hidden="true" />}>
                  <QuoteForm />
                </Suspense>
                <p className="t-small mt-5 text-steel">
                  Os valores finais podem mudar se as medidas ou o peso da carga forem diferentes dos informados.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
