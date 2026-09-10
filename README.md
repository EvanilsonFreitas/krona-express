# Krona Express

Base técnica do website institucional e comercial da Krona Express, empresa de
transportes e logística.

Este repositório está na etapa de **inicialização**: contém apenas a fundação do
projeto (stack, configuração e estrutura). A identidade visual, as páginas
comerciais e as integrações ainda não foram desenvolvidas.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Linguagem | TypeScript (strict) |
| Estilos | Tailwind CSS v4 |
| Componentes | shadcn/ui sobre Radix |
| Ícones | Lucide React |
| Animação | Motion for React |
| Formulários | React Hook Form |
| Validação | Zod |
| Gerenciador de pacotes | pnpm |

## Requisitos

- Node.js 24 LTS
- pnpm 12

## Instalação

```bash
pnpm install
```

Copie o arquivo de exemplo de variáveis de ambiente:

```bash
cp .env.example .env.local
```

## Desenvolvimento local

```bash
pnpm dev
```

A aplicação sobe em `http://localhost:3000`.

## Scripts

| Script | Descrição |
| --- | --- |
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Serve o build de produção |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Verificação de tipos do TypeScript |

## Build

```bash
pnpm build
pnpm start
```

## Estrutura principal

```
src/
  app/          Rotas e layouts do App Router
  components/   Componentes da aplicação
    ui/         Componentes shadcn/ui
  config/       Configuração da aplicação
  hooks/        Hooks React
  lib/          Utilitários compartilhados
  types/        Tipos TypeScript compartilhados
```

O alias `@/*` aponta para `src/*`.

## Integrações futuras previstas

Os placeholders correspondentes já estão documentados em `.env.example`, porém
nenhuma destas integrações está implementada:

- **Resend** — envio dos formulários de contato e cotação
- **Supabase** — persistência de dados
- **WhatsApp** — canal de contato direto
- **Cloudflare Turnstile** — proteção anti-spam dos formulários
