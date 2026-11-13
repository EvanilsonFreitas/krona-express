import { Photo } from "@/components/krona/photo";
import { ActionLink } from "@/components/krona/ui";
import { Reveal } from "@/components/krona/motion";

/** Painel editorial sobre fotografia de doca: coleta e entrega na prática. */
export function OperationsPanel() {
  return (
    <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="coleta-entrega">
      <Photo
        name="doca-saida-caminhao"
        alt="Interior de uma doca de carga com um caminhão estacionado na saída"
        sizes="100vw"
        focus="55% 50%"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(6_18_42/0.55)_0%,rgb(6_18_42/0.1)_60%)]" />
      <div className="k-container flex min-h-[min(92vh,880px)] items-end py-[clamp(3rem,2rem+4vw,6rem)] lg:items-center lg:justify-end">
        <Reveal x={24} className="w-full max-w-xl bg-paper p-8 md:p-12">
          <h2 id="coleta-entrega" className="t-h2">
            Coleta e entrega combinadas antes da saída
          </h2>
          <p className="t-body mt-6 text-steel">
            A coleta acontece na janela de horário combinada com você. Antes de a carga sair, alinhamos as condições de
            entrega, como horário de recebimento, restrições de acesso e necessidade de agendamento no destino.
          </p>
          <p className="t-body mt-4 text-steel">
            Na coleta, conferimos os volumes e a nota fiscal. Se algo estiver diferente do previsto, você fica sabendo
            na hora.
          </p>
          <ActionLink href="/cotacao" className="mt-10 w-full sm:w-auto sm:min-w-72">
            Solicitar cotação
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}
