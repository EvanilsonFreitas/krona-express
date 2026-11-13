import Link from "next/link";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/krona/ui";

type Item = { label: string; href: string; external?: boolean };

const defaults: Item[] = [
  { label: "Solicitar cotação", href: "/cotacao" },
  { label: "Falar no WhatsApp", href: whatsappLink(), external: true },
  { label: "Conhecer os serviços", href: "/servicos" },
];

/** Encerramento de página: lista de ações em grande escala tipográfica. */
export function CtaList({ items = defaults, title = "Vamos conversar sobre o seu próximo frete", className }: { items?: Item[]; title?: string; className?: string }) {
  return (
    <section className={cn("bg-paper pt-[var(--section-y)] pb-[clamp(4rem,2rem+5vw,8rem)]", className)} aria-labelledby="proximo-passo">
      <div className="k-container">
        <h2 id="proximo-passo" className="t-lead max-w-xl text-steel">
          {title}
        </h2>
        <ul className="group/list mt-8 border-t border-line">
          {items.map((item) => {
            const content = (
              <>
                <span className="text-[clamp(2.2rem,1.1rem+4.4vw,6rem)] leading-[1] font-[520] tracking-[-0.042em] transition-[transform,color] duration-500 ease-[var(--ease-route)] [font-variation-settings:'wdth'_92] group-hover/item:translate-x-2 md:group-hover/list:text-ink/30 md:group-hover/item:!text-ink">
                  {item.label}
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center border border-line transition-colors duration-300 group-hover/item:border-ink group-hover/item:bg-ink group-hover/item:text-white md:size-16">
                  <ArrowIcon className="size-5" direction={item.external ? "up-right" : "right"} />
                </span>
              </>
            );
            const cls = "group/item flex items-center justify-between gap-6 border-b border-line py-6 md:py-8";
            return (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} className={cls}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
