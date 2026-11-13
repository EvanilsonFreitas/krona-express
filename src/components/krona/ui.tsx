import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Icons — traço fino, desenhados para a linguagem Krona (sem ícones decorativos) */
/* -------------------------------------------------------------------------- */

export function ArrowIcon({ className, direction = "right" }: { className?: string; direction?: "right" | "down" | "up-right" }) {
  const rotate = direction === "down" ? "rotate-90" : direction === "up-right" ? "-rotate-45" : "";
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("size-4 shrink-0", rotate, className)}>
      <path d="M3 12h17M14 5.5 20.5 12 14 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-5 shrink-0", className)} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.02c0-5.2 4.24-9.43 9.45-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.62l6.02-1.58a11.33 11.33 0 0 0 5.44 1.38h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Actions — botões e links. Superfícies retas, varredura no hover, seta em    */
/* deslocamento. Altura mínima de 52px (alvo de toque confortável).            */
/* -------------------------------------------------------------------------- */

type Variant = "solid" | "light" | "outline" | "outline-inverse" | "whatsapp";

const variants: Record<Variant, string> = {
  solid: "bg-krona text-white before:bg-ink",
  light: "bg-white text-ink before:bg-paper-2",
  outline: "border border-ink/25 text-ink before:bg-ink hover:text-white focus-visible:text-white",
  "outline-inverse": "border border-white/35 text-white before:bg-white hover:text-ink focus-visible:text-ink",
  whatsapp: "bg-ink text-white before:bg-krona",
};

const base =
  "group/action relative isolate inline-flex min-h-13 items-center justify-between gap-6 overflow-hidden whitespace-nowrap px-5 text-[0.9375rem] font-medium tracking-[-0.005em] transition-colors duration-300 " +
  "before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-[var(--ease-route)] " +
  "hover:before:scale-x-100 focus-visible:before:scale-x-100 cursor-pointer";

type ActionProps = {
  variant?: Variant;
  icon?: "arrow" | "whatsapp" | "none";
  className?: string;
  children: ReactNode;
};

function ActionInner({ icon, children }: { icon: ActionProps["icon"]; children: ReactNode }) {
  return (
    <>
      <span className="flex items-center gap-3">
        {icon === "whatsapp" && <WhatsAppIcon className="size-[18px]" />}
        {children}
      </span>
      {icon !== "none" && (
        <span className="relative block size-4 overflow-hidden" aria-hidden="true">
          <ArrowIcon className="absolute inset-0 transition-transform duration-500 ease-[var(--ease-route)] group-hover/action:translate-x-[140%]" />
          <ArrowIcon className="absolute inset-0 -translate-x-[140%] transition-transform duration-500 ease-[var(--ease-route)] group-hover/action:translate-x-0" />
        </span>
      )}
    </>
  );
}

export function ActionLink({
  variant = "solid",
  icon = "arrow",
  className,
  children,
  href,
  external,
  ...rest
}: ActionProps & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const cls = cn(base, variants[variant], className);
  // Esquemas de protocolo (mailto:, tel:) abrem o aplicativo do sistema: âncora simples, sem nova aba.
  if (/^(mailto|tel):/.test(href)) {
    return (
      <a href={href} className={cls} {...rest}>
        <ActionInner icon={icon}>{children}</ActionInner>
      </a>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        <ActionInner icon={icon}>{children}</ActionInner>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <ActionInner icon={icon}>{children}</ActionInner>
    </Link>
  );
}

export function ActionButton({
  variant = "solid",
  icon = "arrow",
  className,
  children,
  ...rest
}: ActionProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(base, variants[variant], "disabled:cursor-not-allowed disabled:opacity-60", className)} {...rest}>
      <ActionInner icon={icon}>{children}</ActionInner>
    </button>
  );
}

/** Link textual com seta — uso terciário. */
export function TextLink({ href, children, className, inverse = false, external = false }: { href: string; children: ReactNode; className?: string; inverse?: boolean; external?: boolean }) {
  const cls = cn(
    "group/tl inline-flex items-center gap-2.5 py-2 text-[0.9375rem] font-medium",
    inverse ? "text-white" : "text-ink",
    className,
  );
  const inner = (
    <>
      <span className="k-link">{children}</span>
      <ArrowIcon className="transition-transform duration-300 ease-[var(--ease-route)] group-hover/tl:translate-x-1" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
