import { MaskReveal, Reveal } from "@/components/krona/motion";
import { Photo } from "@/components/krona/photo";
import { processSteps } from "@/config/site";

const steps = processSteps;

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
