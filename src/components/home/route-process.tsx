import { MaskReveal, Reveal } from "@/components/krona/motion";
import { Photo } from "@/components/krona/photo";

const steps = [
  {
    title: "Solicitação",
    text: "Você envia os dados da carga pelo formulário, pelo WhatsApp ou por telefone: origem, destino, peso, volumes e o prazo que precisa.",
  },
  {
    title: "Análise",
    text: "Nossa equipe avalia a carga e as condições de coleta e de entrega. Se faltar alguma informação, entramos em contato com você.",
  },
  {
    title: "Planejamento",
    text: "Definimos a rota, o tipo de veículo e a data de coleta mais adequados para esse embarque.",
  },
  {
    title: "Proposta",
    text: "Enviamos a proposta com a modalidade indicada e as condições do transporte. Com o seu aceite, a coleta é agendada.",
  },
  {
    title: "Coleta",
    text: "Retiramos a carga no endereço combinado e conferimos a nota fiscal antes da saída.",
  },
  {
    title: "Acompanhamento",
    text: "Enquanto a carga está na estrada, você fala com a nossa equipe sempre que quiser saber como está o transporte.",
  },
  {
    title: "Entrega",
    text: "Depois da entrega no destino, confirmamos com você a conclusão do serviço.",
  },
];

/** Processo de atendimento, apresentado como lista institucional (sem timeline conceitual). */
export function RouteProcess() {
  return (
    <section data-surface="dark" className="on-dark k-section bg-ink text-white" aria-labelledby="como-sua-carga-avanca">
      <div className="k-container">
        <div className="k-grid gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
              <Reveal>
                <h2 id="como-sua-carga-avanca" className="t-h1 max-w-[10ch]">
                  Como sua carga avança
                </h2>
              </Reveal>
              <p className="t-lead mt-8 max-w-md text-white/75">
                O processo é o mesmo para todos os embarques, seja qual for o tamanho da carga. Assim você sabe o que
                acontece em cada momento e com quem falar.
              </p>
              <MaskReveal className="mt-12">
                <Photo
                  name="doca-carreta-plataforma"
                  alt="Caminhão com carreta posicionado na plataforma de carregamento"
                  sizes="40vw"
                  focus="55% 50%"
                  className="aspect-[4/3] w-full bg-navy"
                />
              </MaskReveal>
            </div>
          </div>

          <ol className="col-span-12 space-y-12 md:space-y-14 lg:col-span-6 lg:col-start-7 lg:pt-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} x={0} y={18} className="grid grid-cols-[2.5rem_1fr] gap-x-4 md:grid-cols-[3.5rem_1fr]">
                <span className="t-h3 text-white/35" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="t-body mt-3 max-w-lg text-white/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
