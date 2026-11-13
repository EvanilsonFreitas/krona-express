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
    "Transporte rodoviário de cargas para empresas: lotação, carga fracionada, logística reversa e operações dedicadas, com atendimento direto e acompanhamento durante todo o transporte.",
  contact: {
    phoneDisplay: "(11) 4000-0000",
    phoneHref: "tel:+551140000000",
    whatsappNumber: "551140000000",
    email: "comercial@kronaexpress.com.br",
    hours: "Segunda a sexta, das 8h às 18h",
    address: ["Rua da Logística, 1000", "São Paulo, SP"],
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
    code: "Carga completa (FTL)",
    summary:
      "Um veículo exclusivo para a sua carga, que sai da origem e segue direto para o destino, sem dividir espaço com outras remessas.",
    quoteValue: "lotacao",
  },
  {
    id: "fracionada",
    index: "02",
    title: "Fracionada",
    short: "Fracionada",
    code: "Carga compartilhada (LTL)",
    summary:
      "Sua carga divide o veículo com outras remessas e você paga pelo espaço que ocupa. Costuma ser a melhor opção para volumes menores.",
    quoteValue: "fracionada",
  },
  {
    id: "reversa",
    index: "03",
    title: "Logística reversa",
    short: "Reversa",
    code: "Devoluções e retornos",
    summary:
      "Coletamos devoluções, trocas, embalagens e paletes retornáveis e levamos de volta ao ponto que você indicar.",
    quoteValue: "reversa",
  },
  {
    id: "especiais",
    index: "04",
    title: "Operações dedicadas",
    short: "Dedicadas",
    code: "Operação sob medida",
    summary:
      "Para empresas com uma rotina de transporte específica. Definimos com você rotas, horários de coleta e o tipo de veículo.",
    quoteValue: "dedicada",
  },
];

export type Indicator = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Só indicadores com base real e confirmada são publicados. */
  confirmed: boolean;
  /** Origem do dado, para auditoria. */
  source: string;
};

/**
 * Faixa de indicadores da Home (recupera a antiga StatsSection).
 *
 * Os quatro números da versão anterior (98% de cumprimento de prazo, monitoramento 24/7,
 * 100% de carga assegurada e "rastreabilidade total") não têm fonte no projeto e permanecem
 * desativados até a Krona confirmar os valores reais. Para publicar, preencher o valor e
 * marcar `confirmed: true`.
 */
export const indicators: Indicator[] = [
  {
    value: services.length,
    label: "modalidades de transporte rodoviário",
    confirmed: true,
    source: "Serviços confirmados no projeto",
  },
  {
    value: 7,
    label: "etapas acompanhadas pela nossa equipe em cada embarque",
    confirmed: true,
    source: "Processo descrito em 'Como sua carga avança'",
  },
  {
    value: 10,
    suffix: " h",
    label: "de atendimento comercial em cada dia útil",
    confirmed: true,
    source: "Horário de atendimento (8h às 18h) já publicado no site; confirmar junto com os contatos",
  },
  { value: 98, suffix: "%", label: "das entregas dentro do prazo", confirmed: false, source: "Valor da versão anterior, sem fonte" },
  { value: 100, suffix: "%", label: "das cargas com seguro", confirmed: false, source: "Valor da versão anterior, sem fonte" },
];
