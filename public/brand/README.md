# `public/brand/` — identidade visual da Krona Transportes

Logotipo, símbolo e imagens de marca **prontas para a web**. Arquivos-fonte
editáveis (`.ai`, `.eps`, `.pdf`, master `.svg`) ficam em [`/design/logo`](../../design/logo).

## O que vai em cada pasta

### `logo/primary/`
Assinatura principal da marca — versão **colorida, para fundo claro**.
Normalmente o lockup horizontal (símbolo + texto).
`krona-logo-primary.svg`

### `logo/inverse/`
Mesma assinatura para **fundo escuro / foto** (texto claro).
`krona-logo-inverse.svg`

### `logo/monochrome/`
Uma cor só, para casos de impressão, marca d'água, carimbo, parceiros.
`krona-logo-mono-black.svg`, `krona-logo-mono-white.svg`

### `logo/symbol/`
Apenas o **símbolo / isotipo** (sem texto) — para favicon, avatar, app icon,
selo, espaços quadrados.
`krona-symbol.svg`, `krona-symbol-mono-white.svg`

### `logo/wordmark/`
Apenas o **texto / logotipo** (sem símbolo) — para rodapé, faixas estreitas.
`krona-wordmark.svg`

### `header/`
Versão exata usada no **cabeçalho do site**: dimensão, área de proteção e peso
visual já ajustados para a navbar. Se o header muda entre claro/escuro ou
desktop/mobile, mantenha as duas/três variantes aqui.
`krona-header.svg`, `krona-header-inverse.svg`, `krona-header-compact.svg`

### `favicon/`
**Arte-fonte** do favicon e dos app icons (quadrado, área segura, teste em
16 px). Os arquivos finais publicados (`favicon.ico`, `icon.svg`,
`apple-icon.png`) vão para `src/app/` — ver `public/README.md`.

### `social/`
Imagem **Open Graph** padrão (1200×630), avatar e capa para LinkedIn /
Instagram / WhatsApp. A OG final publicada vira `src/app/opengraph-image.png`.

## Variações — checklist para uma marca completa

- [ ] `logo/primary` — horizontal, colorido, fundo claro (SVG)
- [ ] `logo/inverse` — horizontal, fundo escuro (SVG)
- [ ] `logo/monochrome` — preto (SVG)
- [ ] `logo/monochrome` — branco (SVG)
- [ ] `logo/symbol` — só símbolo, colorido (SVG)
- [ ] `logo/symbol` — só símbolo, branco (SVG)
- [ ] `logo/wordmark` — só texto (SVG)
- [ ] versão vertical / empilhada (se existir) — em `logo/primary`
- [ ] `header/` — ajustado para a navbar
- [ ] `social/` — OG image 1200×630
- [ ] exports PNG @2x/@3x das versões que forem usadas fora do site

## Regras

- Vetor sempre em **SVG otimizado** (rode SVGO; remova `id`s, metadados do editor,
  camadas ocultas).
- Não distorça, não recomponha, não troque as cores do logo — se precisar de uma
  variação nova, gere a partir do arquivo-fonte em `/design/logo`.
- Cores, área de proteção e usos incorretos: ver [`/design/guidelines`](../../design/guidelines).
- Nenhum arquivo de marca pode conter assinatura, marca d'água ou crédito de
  terceiros (ver `SECURITY_RULES.md`).
