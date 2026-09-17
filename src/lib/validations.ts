import { z } from "zod";

export const heroQuoteSchema = z.object({
  origem: z.string().min(3, "A origem é obrigatória."),
  destino: z.string().min(3, "O destino é obrigatório."),
  valor_nf: z.string().min(1, "O valor é obrigatório."),
  qtd: z.string().min(1, "A quantidade é obrigatória."),
  peso: z.string().min(1, "O peso é obrigatório."),
  nome: z.string().min(3, "O nome/empresa é obrigatório."),
  email: z.string().email("Insira um e-mail válido."),
  whatsapp: z.string().min(10, "Insira um número válido."),
});

export type HeroQuoteFormValues = z.infer<typeof heroQuoteSchema>;

export const detailedQuoteSchema = z.object({
  origem: z.string().min(3, "A origem é obrigatória."),
  destino: z.string().min(3, "O destino é obrigatório."),
  tipo_operacao: z.string().min(1, "Selecione o tipo de operação."),
  peso: z.string().min(1, "O peso é obrigatório."),
  valor_nf: z.string().min(1, "O valor é obrigatório."),
  nome: z.string().min(3, "O nome/empresa é obrigatório."),
  contato: z.string().min(10, "Insira um número válido."),
  observacoes: z.string().optional(),
});

export type DetailedQuoteFormValues = z.infer<typeof detailedQuoteSchema>;

export const trackerSchema = z.object({
  cnpj: z.string().min(14, "CNPJ inválido."),
  nota: z.string().min(1, "A NF é obrigatória."),
});

export type TrackerFormValues = z.infer<typeof trackerSchema>;
