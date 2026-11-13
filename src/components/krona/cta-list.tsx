import Link from "next/link";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowIcon, Eyebrow } from "@/components/krona/ui";

type Item = { label: string; href: string; external?: boolean; hint: string };

const defaults: Item[] = [
  { label: "Solicitar cotação", href: "/cotacao", hint: "Formulário · resposta da equipe comercial" },
  { label: "Falar no WhatsApp", href: whatsappLink(), external: true, hint: "Conversa direta" },
  { label: "Conhecer os serviços", href: "/servicos", hint: "Lotação · Fracionada · Reversa · Dedicadas" },
];

/** Encerramento de página: lista tipográfica de ações em grande escala. */
export function CtaList({ items = defaults, index, title = "Próximo passo", className }: { items?: Item[]; index?: string; title?: string; className?: string }) {
  return (
    <section className={cn("bg-paper pt-[var(--section-y)] pb-[clamp(4rem,2rem+5vw,8rem)]", className)} aria-label={title}>
      <div className="k-container">
        <Eyebrow index={index}>{title}</Eyebrow>
        <ul className="group/list mt-8 border-t border-line">
          {items.map((item) => {
            const content = (
              <>
                <span className="text-[clamp(2.2rem,1.1rem+4.4vw,6rem)] leading-[1] font-[520] tracking-[-0.042em] transition-[transform,color] duration-500 ease-[var(--ease-route)] [font-variation-settings:'wdth'_92] group-hover/item:translate-x-2 md:group-hover/list:text-ink/30 md:group-hover/item:!text-ink">
                  {item.label}
                </span>
                <span className="flex items-center gap-6">
                  <span className="t-label hidden text-steel lg:block">{item.hint}</span>
                  <span className="flex size-12 items-center justify-center border border-line transition-colors duration-300 group-hover/item:border-ink group-hover/item:bg-ink group-hover/item:text-white md:size-16">
                    <ArrowIcon className="size-5" direction={item.external ? "up-right" : "right"} />
                  </span>
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
