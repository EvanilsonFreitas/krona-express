import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Photo } from "@/components/krona/photo";
import { ActionLink } from "@/components/krona/ui";
import { MaskReveal, Reveal } from "@/components/krona/motion";
import { Faq } from "@/components/krona/faq";
import { ContactChannels } from "@/components/contact/channels";
import { whatsappLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Krona Express pelo WhatsApp, telefone ou e-mail. Atendimento direto para cotações, dúvidas e acompanhamento de cargas.",
  alternates: { canonical: "contato/" },
};

export default function ContatoPage() {
  return (
    <>
      <Header tone="light" />
      <main id="conteudo">
        <section id="contato" className="bg-paper pt-[calc(var(--header-h)+clamp(3.5rem,2rem+5vw,7rem))] pb-[var(--section-y)]" aria-labelledby="contato-title">
          <div className="k-container">
            <div className="k-grid gap-y-14">
              <div className="col-span-12 lg:col-span-5">
                <Reveal>
                  <h1 id="contato-title" className="t-h1 max-w-[11ch]">
                    Fale com quem cuida da sua carga
                  </h1>
                </Reveal>
                <p className="t-lead mt-8 max-w-md text-steel">
                  Nosso atendimento é feito pela própria equipe que organiza os fretes. Escolha o canal que for mais
                  prático para você.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <ContactChannels />
              </div>
            </div>
          </div>
        </section>

        <section id="rastreamento" data-surface="dark" className="on-dark bg-ink text-white" aria-labelledby="acompanhar">
          <div className="k-grid items-stretch">
            <div className="col-span-12 px-[var(--gutter)] py-[var(--section-y)] lg:col-span-6 lg:pr-[clamp(2rem,5vw,6rem)]">
              <Reveal>
                <h2 id="acompanhar" className="t-h2 max-w-[13ch]">
                  Acompanhar uma carga
                </h2>
              </Reveal>
              <p className="t-lead mt-6 max-w-md text-white/80">
                Para saber como está uma carga em transporte, fale com a nossa equipe e informe o número da nota fiscal
                (NF-e) ou do conhecimento de transporte (CT-e).
              </p>
              <p className="t-body mt-4 max-w-md text-white/60">
                No momento, o acompanhamento é feito diretamente pelo nosso atendimento, e não por consulta on-line.
              </p>
              <ActionLink
                href={whatsappLink("Olá! Gostaria de informações sobre uma carga em transporte. Número da NF-e ou CT-e: ")}
                external
                icon="whatsapp"
                variant="light"
                className="mt-10 w-full sm:w-auto sm:min-w-80"
              >
                Consultar pelo WhatsApp
              </ActionLink>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <MaskReveal className="h-full">
                <Photo
                  name="cabine-reflexo"
                  alt="Lateral de cabine de caminhão escura refletindo a luz do ambiente"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full min-h-[380px] w-full bg-ink"
                  focus="50% 40%"
                />
              </MaskReveal>
            </div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
