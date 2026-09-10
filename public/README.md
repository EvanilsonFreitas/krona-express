# `public/` — arquivos estáticos

Tudo nesta pasta é servido pelo Next.js a partir da raiz da URL (`/`) e é
**publicado no deploy**. Ex.: `public/brand/logo/primary/krona-logo.svg` fica
acessível em `/brand/logo/primary/krona-logo.svg`.

> Não coloque aqui arquivos-fonte pesados/editáveis (`.ai`, `.eps`, `.psd`,
> `.fig`, originais em alta) — eles vão para a pasta [`/design`](../design)
> (fora de `public/`, fora do deploy). Ver regra 27 do `SECURITY_RULES.md`.

## Estrutura

```
public/
├── brand/                  Identidade visual da Krona Transportes
│   ├── logo/
│   │   ├── primary/        Logo principal — colorido, para fundo claro
│   │   ├── inverse/        Logo para fundo escuro
│   │   ├── monochrome/     Uma cor só — preto / branco
│   │   ├── symbol/         Apenas o símbolo (isotipo), sem texto
│   │   └── wordmark/       Apenas o texto (logotipo), sem símbolo
│   ├── header/             Lockup específico do cabeçalho do site
│   ├── favicon/            Arte-fonte do favicon e app icons (ver nota abaixo)
│   └── social/             Imagem Open Graph, avatar e capa para redes
├── images/
│   ├── hero/               Imagens de topo (home e páginas internas)
│   ├── illustrations/      Ilustrações e vetores decorativos
│   ├── icons/              Ícones customizados (além do Lucide)
│   ├── patterns/           Texturas e grafismos de fundo
│   ├── photos/             Banco de fotos (frota, equipe, operação)
│   └── pages/              Imagens específicas por página (espelha as rotas)
│       ├── home/
│       ├── sobre/
│       ├── servicos/
│       └── contato/
└── (favicon.ico, robots.txt, sitemap.xml — ver nota)
```

As subpastas de `images/pages/` espelham as rotas do site. Crie, renomeie ou
remova conforme as páginas forem definidas (`frota/`, `cobertura/`, `cotacao/`…).

## Favicon, OG image, robots e sitemap

Neste Next.js (App Router) esses arquivos **não** ficam em `public/`. Eles são
convenções de arquivo dentro de `src/app/`:

| Objetivo | Arquivo | Local |
| --- | --- | --- |
| Favicon | `favicon.ico` | `src/app/favicon.ico` |
| Ícone (SVG/PNG) | `icon.svg` / `icon.png` | `src/app/icon.svg` |
| Ícone Apple | `apple-icon.png` (180×180) | `src/app/apple-icon.png` |
| OG image padrão | `opengraph-image.png` (1200×630) | `src/app/opengraph-image.png` |
| OG image de uma rota | `opengraph-image.png` | `src/app/<rota>/opengraph-image.png` |
| `robots.txt` | `robots.ts` ou `robots.txt` | `src/app/robots.ts` |
| `sitemap.xml` | `sitemap.ts` | `src/app/sitemap.ts` |

Guarde as artes-fonte em `public/brand/favicon/` e `public/brand/social/`; os
arquivos finais publicados ficam em `src/app/` quando essa etapa começar.

## Convenções de nomenclatura

- Sempre **kebab-case**, somente ASCII: sem espaços, sem acentos, sem maiúsculas.
- Prefixo `krona-` nos arquivos de marca: `krona-logo-primary.svg`.
- Sufixo de variação: `-primary`, `-inverse`, `-mono-black`, `-mono-white`,
  `-symbol`, `-wordmark`.
- Raster em várias densidades: `krona-logo@2x.png`, `@3x.png`.
- Fotos: descreva o conteúdo — `frota-carreta-rodovia.webp`, não `IMG_2043.webp`.

## Formatos recomendados

| Tipo | Formato preferido | Observações |
| --- | --- | --- |
| Logo / símbolo / vetor | **SVG** (otimizado com SVGO) | PNG só quando SVG não for possível (e-mail, etc.) |
| Ilustração | SVG; ou WebP/AVIF se for raster | — |
| Foto | **WebP** ou **AVIF**, com fallback `.jpg` | comprimir antes de commitar |
| Ícone customizado | SVG monocromático, `currentColor` | 24×24 na grade |
| OG / social | PNG ou JPG, 1200×630 | peso < 300 KB |

## Como referenciar no código

```tsx
import Image from "next/image";

// arquivo em public/images/hero/home-operacao.webp
<Image src="/images/hero/home-operacao.webp" alt="Operação da Krona" width={1600} height={900} />
```

Para SVG de logo, `next/image` funciona, mas para controlar cor/tamanho via CSS
prefira `<img src="/brand/logo/..." />` ou importar como componente.

## Antes de commitar imagens (ver `SECURITY_RULES.md`, regras 26 e 33)

- Otimize/comprima o arquivo (SVGO, `squoosh`, `sharp`).
- Sem metadados EXIF sensíveis (localização, nome de equipamento) nas fotos.
- Sem dados reais de clientes, placas legíveis, documentos ou pessoas
  identificáveis sem autorização.
- Confirme que você tem direito de uso da imagem (licença / banco / autoria).
