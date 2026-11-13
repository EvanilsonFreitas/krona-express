import { Reveal } from "@/components/krona/motion";

const items = [
  { title: "Atendimento direto", text: "Você conversa com quem cuida do seu frete. Não há central de atendimento nem repasse de recados entre setores." },
  { title: "Cada embarque é planejado", text: "Volume, rota e prazo mudam de uma carga para outra. Por isso a operação é definida caso a caso." },
  { title: "Informação durante o transporte", text: "Se você quiser saber como está a sua carga, basta falar com a nossa equipe pelo canal que preferir." },
  { title: "Respostas rápidas", text: "Por sermos uma empresa enxuta, ajustes e decisões não dependem de várias aprovações internas." },
  { title: "Parceiros de confiança", text: "Quando uma operação exige, trabalhamos com parceiros de transporte que conhecemos e acompanhamos de perto." },
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
                Somos uma empresa pequena e não tentamos parecer maior. O que oferecemos é atenção ao seu transporte e
                um atendimento que conhece a sua operação.
              </p>
            </div>
          </div>
          <ul className="col-span-12 lg:col-span-7">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.04}
                x={0}
                y={16}
                className="grid gap-x-8 gap-y-3 border-t border-line py-9 first:border-t-0 first:pt-0 md:grid-cols-2 md:py-11"
              >
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-body text-steel">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
