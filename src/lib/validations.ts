import { z } from "zod";

const phoneRegex = /^[\d\s\-\+\(\)]+$/;
const numberRegex = /^\d+([.,]\d+)?$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const heroQuoteSchema = z.object({
  origem: z.string().min(3, "A origem é obrigatória."),
  destino: z.string().min(3, "O destino é obrigatório."),
  valor_nf: z.string().min(1, "O valor é obrigatório.").regex(numberRegex, "Insira apenas números."),
  qtd: z.string().min(1, "A quantidade é obrigatória.").regex(/^\d+$/, "Apenas números inteiros."),
  peso: z.string().min(1, "O peso é obrigatório.").regex(numberRegex, "Insira apenas números."),
  nome: z.string().min(3, "O nome/empresa é obrigatório."),
  email: z.string().regex(emailRegex, "Insira um e-mail válido (ex: email@dominio.com)."),
  whatsapp: z.string().regex(phoneRegex, "Insira apenas números (ex: 11999999999)").min(10, "Número muito curto."),
});

export type HeroQuoteFormValues = z.infer<typeof heroQuoteSchema>;

export const detailedQuoteSchema = z.object({
  origem: z.string().min(3, "A origem é obrigatória."),
  destino: z.string().min(3, "O destino é obrigatório."),
  tipo_operacao: z.string().min(1, "Selecione o tipo de operação."),
  peso: z.string().min(1, "O peso é obrigatório.").regex(numberRegex, "Insira apenas números."),
  valor_nf: z.string().min(1, "O valor é obrigatório.").regex(numberRegex, "Insira apenas números."),
  nome: z.string().min(3, "O nome/empresa é obrigatório."),
  contato: z.string().regex(phoneRegex, "Insira apenas números válidos de telefone.").min(10, "Número incompleto."),
  observacoes: z.string().optional(),
});

export type DetailedQuoteFormValues = z.infer<typeof detailedQuoteSchema>;

export const trackerSchema = z.object({
  cnpj: z.string().regex(/^[\d\.\-\/]+$/, "Insira apenas números e pontuações do CNPJ.").min(14, "CNPJ inválido (mínimo 14 caracteres)."),
  nota: z.string().regex(numberRegex, "A NF deve conter apenas números.").min(1, "A NF é obrigatória."),
});

export type TrackerFormValues = z.infer<typeof trackerSchema>;
