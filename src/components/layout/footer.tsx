import Link from "next/link";
import { nav, services, site, whatsappLink } from "@/config/site";
import { asset } from "@/lib/asset";
import { ActionLink } from "@/components/krona/ui";

export function Footer({ showStatement = false }: { showStatement?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink text-white" data-surface="dark">
      {showStatement && (
        <div className="k-container pt-[clamp(5rem,3rem+6vw,9rem)]">
          <div className="k-grid gap-y-10">
            <p className="t-h1 col-span-12 lg:col-span-9">
              Sua próxima carga começa com uma conversa.
            </p>
            <div className="col-span-12 flex flex-col gap-3 sm:flex-row lg:col-span-12">
              <ActionLink href="/cotacao" variant="light" className="sm:min-w-64">
                Solicitar cotação
              </ActionLink>
              <ActionLink href={whatsappLink()} external icon="whatsapp" variant="outline-inverse" className="sm:min-w-64">
                Falar no WhatsApp
              </ActionLink>
            </div>
          </div>
          <div className="mt-[clamp(4rem,2rem+5vw,7rem)] h-px bg-line-inverse" />
        </div>
      )}

      <div className="k-container py-14">
        <div className="k-grid gap-y-12">
          <div className="col-span-12 md:col-span-4 lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logotipo estático */}
            <img src={asset("/brand/logo/monochrome/Logo_Krona_Branco.png")} alt="Krona Express" width={84} height={56} className="h-14 w-auto" />
            <p className="t-small mt-6 max-w-sm text-steel-2">
              Transporte rodoviário de cargas com atendimento direto e cada embarque acompanhado de perto.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-2">
            <p className="t-label text-white">Serviços</p>
            <ul className="mt-4 space-y-2.5 t-small text-steel-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/servicos#${s.id}`} className="k-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-2">
            <p className="t-label text-white">Empresa</p>
            <ul className="mt-4 space-y-2.5 t-small text-steel-2">
              {nav.slice(1).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="k-link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <p className="t-label text-white">Atendimento</p>
            <ul className="mt-4 space-y-2.5 t-small text-steel-2">
              <li>
                <a href={site.contact.phoneHref} className="k-link t-num">
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="k-link break-all">
                  {site.contact.email}
                </a>
              </li>
              <li>{site.contact.hours}</li>
              <li>
                {site.contact.address[0]}
                <br />
                {site.contact.address[1]}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line-inverse">
        <div className="k-container flex flex-col gap-4 py-6 text-steel-2 md:flex-row md:items-center md:justify-between">
          <p className="t-caption">
            © {year} {site.name}. CNPJ {site.contact.cnpj}
          </p>
          <div className="flex items-center gap-3">
            <span className="t-caption">Desenvolvido por</span>
            {/* eslint-disable-next-line @next/next/no-img-element -- logotipo do desenvolvedor (existente) */}
            <img src={asset("/brand/logo/symbol/logo_Onebi.svg")} alt="Onebi Analytics" width={80} height={28} className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
