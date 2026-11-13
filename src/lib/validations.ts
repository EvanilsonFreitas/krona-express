import { z } from "zod";

const numberRegex = /^\d+([.,]\d+)?$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const modalidades = [
  { value: "lotacao", label: "Lotação (carga completa)" },
  { value: "fracionada", label: "Fracionada (carga compartilhada)" },
  { value: "reversa", label: "Logística reversa" },
  { value: "dedicada", label: "Operação dedicada" },
  { value: "indefinida", label: "Ainda não sei, quero uma indicação" },
] as const;

/** Validação de interface. Quando houver backend, a mesma validação deve ser repetida no servidor. */
export const quoteSchema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome ou o nome da empresa.").max(120, "Use no máximo 120 caracteres."),
  email: z.string().trim().max(160, "E-mail muito longo.").regex(emailRegex, "Informe um e-mail válido, por exemplo nome@empresa.com.br."),
  telefone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um telefone com DDD."),
  origem: z.string().trim().min(3, "Informe a cidade e o estado, ou o CEP de origem.").max(120, "Use no máximo 120 caracteres."),
  destino: z.string().trim().min(3, "Informe a cidade e o estado, ou o CEP de destino.").max(120, "Use no máximo 120 caracteres."),
  modalidade: z.enum(["lotacao", "fracionada", "reversa", "dedicada", "indefinida"], { message: "Escolha uma opção." }),
  mercadoria: z.string().trim().max(120, "Use no máximo 120 caracteres.").optional(),
  peso: z.string().trim().min(1, "Informe o peso aproximado.").regex(numberRegex, "Use apenas números, por exemplo 1500."),
  volumes: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^\d+$/.test(v), "Use apenas números inteiros."),
  valor_nf: z.string().trim().min(1, "Informe o valor da nota fiscal.").regex(numberRegex, "Use apenas números, por exemplo 25000,00."),
  observacoes: z.string().trim().max(1200, "Use no máximo 1.200 caracteres.").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
