import { MaskReveal, Reveal } from "@/components/krona/motion";
import { Photo } from "@/components/krona/photo";

const items = [
  { title: "Contato com quem conduz a operação", text: "Você conversa com a pessoa que organiza o seu frete, sem central de atendimento e sem repasse de recados entre setores." },
  { title: "Operação definida para cada carga", text: "Volume, rota, prazo e restrições mudam de um embarque para outro. Por isso a operação é planejada caso a caso." },
  { title: "Informação durante o transporte", text: "Quando quiser saber como está a sua carga, fale com a nossa equipe pelo WhatsApp ou por telefone." },
  { title: "Agilidade comercial", text: "Cotações, ajustes de coleta e mudanças de última hora recebem resposta rápida e objetiva." },
  { title: "Parceiros de transporte qualificados", text: "Quando a operação exige, trabalhamos com parceiros que conhecemos, e a Krona segue responsável pelo atendimento." },
];

export function Principles() {
  return (
    <section className="k-section bg-paper" aria-labelledby="diferenciais">
      <div className="k-container">
        <div className="k-grid gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <Reveal>
                <h2 id="diferenciais" className="t-h2 max-w-[13ch]">
                  Por que trabalhar com a Krona
                </h2>
              </Reveal>
              <p className="t-body mt-6 max-w-sm text-steel">
                Atendimento direto, respostas objetivas e acompanhamento próximo do seu frete, do pedido de cotação até a
                confirmação da entrega.
              </p>
              <MaskReveal className="mt-10">
                <Photo
                  name="rodovia-caminhao-dia"
                  alt="Caminhão basculante trafegando por uma rodovia duplicada em dia de céu aberto"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  focus="70% 60%"
                  className="aspect-[16/10] w-full bg-ink"
                />
              </MaskReveal>
            </div>
          </div>
          <ul className="col-span-12 lg:col-span-6 lg:col-start-7">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.04}
                x={0}
                y={16}
                className="border-t border-line py-9 first:border-t-0 first:pt-0 md:py-11"
              >
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-body mt-3 max-w-lg text-steel">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
