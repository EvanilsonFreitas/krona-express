"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { ArrowIcon, WhatsAppIcon } from "@/components/krona/ui";

export function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.contact.email}`;
    }
  };

  return (
    <div>
      <a
        href={whatsappLink("Olá! Gostaria de falar com a equipe comercial da Krona Express.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative isolate flex flex-col gap-10 overflow-hidden bg-ink p-7 text-white before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-krona before:transition-transform before:duration-700 before:ease-[var(--ease-route)] hover:before:scale-x-100 focus-visible:before:scale-x-100 md:p-10"
      >
        <span className="flex items-center justify-between">
          <span className="flex items-center gap-3 text-[0.9375rem] text-white/75">
            <WhatsAppIcon className="size-5 text-white" />
            Canal mais rápido para cotações e dúvidas
          </span>
          <ArrowIcon direction="up-right" className="size-6 transition-transform duration-500 ease-[var(--ease-route)] group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
        <span>
          <span className="block text-[clamp(2.4rem,1.4rem+4vw,5rem)] leading-none font-[540] tracking-[-0.04em]">WhatsApp</span>
          <span className="t-num mt-3 block text-[1.0625rem] text-white/75">{site.contact.phoneDisplay}</span>
        </span>
      </a>

      <dl className="mt-2 divide-y divide-line border-b border-line">
        <div className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
          <dt className="t-small text-steel">Telefone</dt>
          <dd className="sm:col-span-2">
            <a href={site.contact.phoneHref} className="k-link t-num text-[1.375rem] font-[520] tracking-[-0.02em]">
              {site.contact.phoneDisplay}
            </a>
          </dd>
        </div>
        <div className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
          <dt className="t-small text-steel">E-mail</dt>
          <dd className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:col-span-2">
            <a href={`mailto:${site.contact.email}`} className="k-link text-[1.375rem] font-[520] tracking-[-0.02em] break-all">
              {site.contact.email}
            </a>
            <button type="button" onClick={copyEmail} className="t-small cursor-pointer text-krona underline-offset-4 hover:underline">
              {copied ? "E-mail copiado" : "Copiar e-mail"}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Endereço de e-mail copiado para a área de transferência" : ""}
            </span>
          </dd>
        </div>
        <div className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
          <dt className="t-small text-steel">Horário de atendimento</dt>
          <dd className="t-body sm:col-span-2">{site.contact.hours}</dd>
        </div>
        <div className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
          <dt className="t-small text-steel">Endereço</dt>
          <dd className="t-body sm:col-span-2">
            {site.contact.address[0]}
            <br />
            {site.contact.address[1]}
          </dd>
        </div>
      </dl>
    </div>
  );
}
