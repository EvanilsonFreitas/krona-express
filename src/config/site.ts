/**
 * Fonte única de dados institucionais e de navegação.
 *
 * ATENÇÃO: telefone, WhatsApp, endereço e CNPJ abaixo são os mesmos placeholders
 * que já existiam no projeto. Substituir pelos dados reais antes da publicação.
 */

export const site = {
  name: "Krona Express",
  url: "https://evanilsonfreitas.github.io/krona-express",
  description:
    "Transporte rodoviário de cargas lotação, fracionada, logística reversa e operações dedicadas — planejado para cada embarque e acompanhado de perto, da coleta à entrega.",
  contact: {
    phoneDisplay: "(11) 4000-0000",
    phoneHref: "tel:+551140000000",
    whatsappNumber: "551140000000",
    email: "comercial@kronaexpress.com.br",
    hours: "Segunda a sexta, das 8h às 18h",
    address: ["Rua da Logística, 1000", "São Paulo — SP"],
    cnpj: "00.000.000/0001-00",
    instagram: "https://instagram.com/kronaexpress",
  },
} as const;

export function whatsappLink(message = "Olá! Gostaria de falar com a Krona Express.") {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
  { label: "Cotação", href: "/cotacao" },
] as const;

export type ServiceId = "lotacao" | "fracionada" | "reversa" | "especiais";

export type Service = {
  id: ServiceId;
  index: string;
  title: string;
  short: string;
  code: string;
  summary: string;
  quoteValue: string;
};

/** Serviços reais da Krona Express (confirmados no projeto). Não adicionar serviços sem validação. */
export const services: Service[] = [
  {
    id: "lotacao",
    index: "01",
    title: "Lotação",
    short: "Lotação",
    code: "FTL",
    summary:
      "Um veículo dedicado à sua carga, da origem ao destino, sem paradas para consolidação com outras remessas.",
    quoteValue: "lotacao",
  },
  {
    id: "fracionada",
    index: "02",
    title: "Fracionada",
    short: "Fracionada",
    code: "LTL",
    summary:
      "Sua carga divide o veículo com outras remessas. Você paga pelo espaço que ocupa — ideal para volumes menores.",
    quoteValue: "fracionada",
  },
  {
    id: "reversa",
    index: "03",
    title: "Logística reversa",
    short: "Reversa",
    code: "Retorno",
    summary:
      "Coleta de devoluções, trocas, embalagens e paletes retornáveis, com o mesmo cuidado do fluxo de ida.",
    quoteValue: "reversa",
  },
  {
    id: "especiais",
    index: "04",
    title: "Operações dedicadas",
    short: "Dedicadas",
    code: "Sob medida",
    summary:
      "Operações desenhadas com você: rotas, janelas de coleta e veículos definidos para uma necessidade específica.",
    quoteValue: "dedicada",
  },
];
