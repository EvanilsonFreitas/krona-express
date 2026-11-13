"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, type FieldError, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { modalidades, quoteSchema, type QuoteFormValues } from "@/lib/validations";
import { maskPhone } from "@/lib/masks";
import { site, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { ActionButton, ActionLink } from "@/components/krona/ui";
import { routeEase, usePrefersReducedMotion } from "@/components/krona/motion";

const serviceParam: Record<string, QuoteFormValues["modalidade"]> = {
  lotacao: "lotacao",
  fracionada: "fracionada",
  reversa: "reversa",
  especiais: "dedicada",
  dedicada: "dedicada",
};

const inputBase =
  "block w-full min-h-13 border border-ink/25 bg-white px-4 text-[1rem] text-ink placeholder:text-steel/70 transition-[border-color,box-shadow] duration-200 " +
  "hover:border-ink/45 focus:border-krona focus:shadow-[inset_0_0_0_1px_var(--k-krona)] focus:outline-none " +
  "aria-invalid:border-[#b42318] aria-invalid:shadow-[inset_0_0_0_1px_#b42318]";

function Field({
  label,
  hint,
  error,
  optional,
  children,
  id,
  className,
}: {
  label: string;
  hint?: string;
  error?: FieldError;
  optional?: boolean;
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-[0.9375rem] font-medium">
        <span>{label}</span>
        {optional && <span className="text-[0.8125rem] font-normal text-steel">Opcional</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[0.875rem] text-[#b42318]">
          {error.message}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[0.8125rem] text-steel">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function Input({
  id,
  reg,
  error,
  hint,
  ...props
}: { id: string; reg: UseFormRegisterReturn; error?: FieldError; hint?: string } & Omit<React.ComponentProps<"input">, "id">) {
  return (
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
      className={inputBase}
      {...reg}
      {...props}
    />
  );
}

function Group({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-8 pb-10 first:border-t-0 first:pt-0">
      <legend className="sr-only">{title}</legend>
      <div className="mb-7">
        <p className="text-[1.375rem] leading-tight font-[540] tracking-[-0.02em]" aria-hidden="true">
          {title}
        </p>
        {description && <p className="t-small mt-1.5 text-steel">{description}</p>}
      </div>
      <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function buildSummary(v: QuoteFormValues) {
  const mod = modalidades.find((m) => m.value === v.modalidade)?.label ?? v.modalidade;
  return [
    "Olá! Gostaria de uma cotação de frete.",
    "",
    `Nome/Empresa: ${v.nome}`,
    `E-mail: ${v.email}`,
    `Telefone: ${v.telefone}`,
    `Origem: ${v.origem}`,
    `Destino: ${v.destino}`,
    `Modalidade: ${mod}`,
    v.mercadoria ? `Mercadoria: ${v.mercadoria}` : null,
    `Peso aproximado: ${v.peso} kg`,
    v.volumes ? `Volumes: ${v.volumes}` : null,
    `Valor da NF: R$ ${v.valor_nf}`,
    v.observacoes ? `Observações: ${v.observacoes}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

export function QuoteForm() {
  const params = useSearchParams();
  const reduce = usePrefersReducedMotion();
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [sent, setSent] = useState<QuoteFormValues | null>(null);
  const [channel, setChannel] = useState<"whatsapp" | "email" | null>(null);
  const [copy, setCopy] = useState<"idle" | "ok" | "error">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  const preset = serviceParam[params.get("servico") ?? ""];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      origem: "",
      destino: "",
      modalidade: (preset ?? "") as QuoteFormValues["modalidade"],
      mercadoria: "",
      peso: "",
      volumes: "",
      valor_nf: "",
      observacoes: "",
    },
  });

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const onSubmit = (values: QuoteFormValues) => {
    // Não há backend de envio (integração com Resend prevista no README).
    // Nada é transmitido aqui: os dados apenas são validados e preparados para o cliente
    // concluir o envio pelo WhatsApp ou pelo e-mail.
    setSent(values);
  };

  const phone = register("telefone");
  const digits = (name: "peso" | "valor_nf" | "volumes", allowDecimal = true) => {
    const r = register(name);
    return {
      ...r,
      onChange: ((e) => {
        const t = e.target as HTMLInputElement;
        t.value = t.value.replace(allowDecimal ? /[^\d.,]/g : /[^\d]/g, "");
        return r.onChange(e);
      }) as typeof r.onChange,
    };
  };

  return (
    <div className="bg-white p-6 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="review"
            ref={successRef}
            tabIndex={-1}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: routeEase }}
            className="focus:outline-none"
          >
            <h2 className="t-h2">Revise e escolha como enviar</h2>
            <p className="t-lead mt-4 max-w-lg text-steel">
              Seus dados ainda não foram enviados. Escolha um canal: a mensagem abre já preenchida e o envio é concluído
              por você no WhatsApp ou no seu e-mail.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink
                href={whatsappLink(buildSummary(sent))}
                external
                icon="whatsapp"
                variant="solid"
                className="sm:min-w-64"
                onClick={() => setChannel("whatsapp")}
              >
                Abrir no WhatsApp
              </ActionLink>
              <ActionLink
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Solicitação de cotação")}&body=${encodeURIComponent(buildSummary(sent))}`}
                variant="outline"
                className="sm:min-w-64"
                onClick={() => setChannel("email")}
              >
                Abrir no e-mail
              </ActionLink>
            </div>

            <p aria-live="polite" className="t-body mt-6 max-w-lg min-h-[3.2em]">
              {channel === "whatsapp" &&
                "Abrimos o WhatsApp com a mensagem preenchida. A solicitação só chega à nossa equipe depois que você enviar a mensagem na conversa."}
              {channel === "email" &&
                "Abrimos o seu aplicativo de e-mail com a mensagem preenchida. Confira os dados e envie por lá para que a solicitação chegue à nossa equipe."}
            </p>

            <details className="mt-4 border-t border-line pt-5">
              <summary className="cursor-pointer text-[0.9375rem] font-medium">Ver ou copiar o resumo</summary>
              <pre className="mt-4 overflow-x-auto bg-paper p-4 font-sans text-[0.875rem] leading-relaxed whitespace-pre-wrap text-ink">
                {buildSummary(sent)}
              </pre>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="t-small cursor-pointer text-krona underline-offset-4 hover:underline"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(buildSummary(sent));
                      setCopy("ok");
                    } catch {
                      setCopy("error");
                    }
                  }}
                >
                  Copiar resumo
                </button>
                <span aria-live="polite" className="t-small text-steel">
                  {copy === "ok" && "Resumo copiado. Cole na conversa ou no e-mail."}
                  {copy === "error" && "Não foi possível copiar automaticamente. Selecione o texto acima e copie manualmente."}
                </span>
              </div>
            </details>

            <button
              type="button"
              className="t-small mt-8 cursor-pointer text-krona underline-offset-4 hover:underline"
              onClick={() => {
                reset(sent);
                setSent(null);
                setChannel(null);
                setCopy("idle");
              }}
            >
              Corrigir alguma informação
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Solicitação de cotação"
          >
            <Group title="Seus dados" description="Para retornarmos com a proposta.">
              <Field id={id("nome")} label="Nome ou empresa" error={errors.nome} className="sm:col-span-2">
                <Input id={id("nome")} reg={register("nome")} error={errors.nome} autoComplete="organization" />
              </Field>
              <Field id={id("email")} label="E-mail" error={errors.email}>
                <Input id={id("email")} reg={register("email")} error={errors.email} type="email" autoComplete="email" inputMode="email" />
              </Field>
              <Field id={id("telefone")} label="Telefone ou WhatsApp" error={errors.telefone}>
                <Input
                  id={id("telefone")}
                  reg={{
                    ...phone,
                    onChange: (e) => {
                      e.target.value = maskPhone(e.target.value);
                      return phone.onChange(e);
                    },
                  }}
                  error={errors.telefone}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(00) 00000-0000"
                />
              </Field>
            </Group>

            <Group title="Origem e destino" description="Cidade e estado, ou o CEP.">
              <Field id={id("origem")} label="Origem" error={errors.origem}>
                <Input id={id("origem")} reg={register("origem")} error={errors.origem} placeholder="Ex.: Campinas, SP" />
              </Field>
              <Field id={id("destino")} label="Destino" error={errors.destino}>
                <Input id={id("destino")} reg={register("destino")} error={errors.destino} placeholder="Ex.: Curitiba, PR" />
              </Field>
            </Group>

            <Group title="Carga" description="Valores aproximados já ajudam.">
              <Field id={id("modalidade")} label="Modalidade" error={errors.modalidade} className="sm:col-span-2">
                <div className="relative">
                  <select
                    id={id("modalidade")}
                    aria-invalid={errors.modalidade ? true : undefined}
                    aria-describedby={errors.modalidade ? `${id("modalidade")}-error` : undefined}
                    className={cn(inputBase, "cursor-pointer appearance-none pr-12")}
                    {...register("modalidade")}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {modalidades.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <svg viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" fill="none" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </Field>
              <Field id={id("mercadoria")} label="Tipo de mercadoria" error={errors.mercadoria} optional className="sm:col-span-2">
                <Input id={id("mercadoria")} reg={register("mercadoria")} error={errors.mercadoria} placeholder="Ex.: peças automotivas em caixas" />
              </Field>
              <Field id={id("peso")} label="Peso total (kg)" error={errors.peso}>
                <Input id={id("peso")} reg={digits("peso")} error={errors.peso} inputMode="decimal" placeholder="Ex.: 1500" />
              </Field>
              <Field id={id("volumes")} label="Quantidade de volumes" error={errors.volumes} optional>
                <Input id={id("volumes")} reg={digits("volumes", false)} error={errors.volumes} inputMode="numeric" placeholder="Ex.: 12" />
              </Field>
              <Field id={id("valor_nf")} label="Valor da nota fiscal (R$)" error={errors.valor_nf} className="sm:col-span-2">
                <Input id={id("valor_nf")} reg={digits("valor_nf")} error={errors.valor_nf} inputMode="decimal" placeholder="Ex.: 25000,00" />
              </Field>
            </Group>

            <Group title="Observações">
              <Field
                id={id("observacoes")}
                label="Algo que devemos saber?"
                hint="Dimensões, necessidade de agendamento, restrições de horário ou de acesso."
                error={errors.observacoes}
                optional
                className="sm:col-span-2"
              >
                <textarea
                  id={id("observacoes")}
                  rows={4}
                  aria-invalid={errors.observacoes ? true : undefined}
                  aria-describedby={errors.observacoes ? `${id("observacoes")}-error` : `${id("observacoes")}-hint`}
                  className={cn(inputBase, "min-h-32 resize-y py-3.5")}
                  {...register("observacoes")}
                />
              </Field>
            </Group>

            <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="t-small max-w-xs text-steel">
                Nada é enviado nesta etapa. Você revisa os dados e escolhe se prefere enviar pelo WhatsApp ou por e-mail.
              </p>
              <ActionButton type="submit" variant="solid" disabled={isSubmitting} className="sm:min-w-64" aria-live="polite">
                {isSubmitting ? "Conferindo dados..." : "Revisar solicitação"}
              </ActionButton>
            </div>
            {Object.keys(errors).length > 0 && (
              <p role="alert" className="mt-4 text-[0.875rem] text-[#b42318]">
                Alguns campos precisam de atenção. Confira as mensagens acima.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
