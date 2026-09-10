# `design/` — arquivos-fonte (não vai para o deploy)

Esta pasta guarda os **originais editáveis** da identidade e das imagens: os
mestres a partir dos quais os arquivos web em [`/public`](../public) são gerados.

Fica **fora de `public/`** de propósito — nada aqui é servido pelo site nem
incluído no build de produção (`SECURITY_RULES.md`, regra 27).

## Estrutura

```
design/
├── logo/          Fontes do logo: .ai, .eps, .pdf, master .svg, Figma export
├── guidelines/    Manual da marca: paleta, tipografia, área de proteção,
│                  usos corretos e incorretos (PDF/PNG)
└── originals/     Fotos e renders em alta resolução, sem otimização
```

## Fluxo

1. Recebe-se / cria-se o arquivo-fonte → salva em `design/logo/` ou
   `design/originals/`.
2. Exporta-se a versão web (SVG otimizado, WebP, PNG) → vai para a pasta
   correspondente em `public/brand/` ou `public/images/`.
3. Commita-se as duas coisas juntas.

## Arquivos binários grandes

`.ai`, `.psd`, `.pdf` e fotos RAW/alta ficam grandes e não fazem *diff* no Git.
Se esta pasta passar de algumas dezenas de MB, considere **Git LFS**:

```bash
git lfs install
git lfs track "design/**/*.ai" "design/**/*.psd" "design/**/*.pdf" "design/originals/**"
git add .gitattributes
```

Enquanto o volume for pequeno, pode versionar normalmente.

## Regras

- Nada de credenciais, contratos, dados de cliente ou material sob NDA aqui —
  é um repositório de código, não um drive de arquivos.
- Sem fontes tipográficas proprietárias sem licença que permita redistribuição.
- Convenção de nome igual à de `public/`: kebab-case, ASCII, prefixo `krona-`.
