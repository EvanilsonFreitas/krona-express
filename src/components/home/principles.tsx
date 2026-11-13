import { Eyebrow } from "@/components/krona/ui";
import { Reveal } from "@/components/krona/motion";

const items = [
  { title: "Atendimento direto", text: "Você fala com quem planeja e acompanha a sua carga — sem central, sem repasse de recados." },
  { title: "Operação sob medida", text: "Cada embarque é planejado conforme volume, rota e prazo. Não existe pacote padrão." },
  { title: "Acompanhamento de perto", text: "Informação ao longo do percurso, da coleta à entrega, sem que você precise correr atrás." },
  { title: "Decisão rápida", text: "Uma estrutura enxuta responde e ajusta a operação sem camadas de aprovação." },
  { title: "Parceiros selecionados", text: "Quando a operação pede, coordenamos com parceiros de transporte que conhecemos e acompanhamos." },
];

export function Principles() {
  return (
    <section className="k-section bg-paper" aria-labelledby="diferenciais">
      <div className="k-container">
        <div className="k-grid gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <Eyebrow index="04">Por que a Krona</Eyebrow>
              <Reveal>
                <h2 id="diferenciais" className="t-h2 mt-6 max-w-[12ch]">
                  Enxuta por escolha. Profissional por princípio.
                </h2>
              </Reveal>
              <p className="t-body mt-6 max-w-sm text-steel">
                Não precisamos parecer maiores do que somos. Precisamos que sua carga chegue — e que você saiba
                exatamente como ela está chegando.
              </p>
            </div>
          </div>
          <ol className="col-span-12 border-t border-line lg:col-span-7">
            {items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.04} className="group grid grid-cols-12 gap-x-4 gap-y-3 border-b border-line py-8 md:py-10">
                <span className="t-label col-span-2 pt-2 text-steel md:col-span-1">0{i + 1}</span>
                <h3 className="t-h3 col-span-10 transition-transform duration-500 ease-[var(--ease-route)] group-hover:translate-x-1.5 md:col-span-5">
                  {item.title}
                </h3>
                <p className="t-body col-span-10 col-start-3 text-steel md:col-span-6 md:col-start-auto">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
