# `public/images/` — imagens do site

Imagens de conteúdo, prontas para a web. Não coloque logotipo aqui — isso fica em
[`../brand`](../brand).

## O que vai em cada pasta

### `hero/`
Imagens grandes de topo de página (banners / seções de destaque). Uma por
contexto. Nomeie pela página + tema:
`home-operacao.webp`, `servicos-armazenagem.webp`
Recomendado: 1600–2400 px de largura, WebP/AVIF, foco definido para o
recorte responsivo.

### `illustrations/`
Ilustrações e **vetores decorativos** — spot illustrations, cenas, grafismos de
apoio, mapas estilizados, ícones grandes de seção. SVG sempre que possível.
`ilustracao-rastreamento.svg`, `ilustracao-cobertura-brasil.svg`

### `icons/`
Ícones customizados que **não existem no Lucide** (o projeto já usa
`lucide-react` para o resto). SVG monocromático, 24×24 na grade, use
`fill="currentColor"` / `stroke="currentColor"` para herdar a cor do texto.
`icon-carreta.svg`, `icon-rastreio.svg`

### `patterns/`
Texturas e padrões que se repetem (background de seção, ruído, grid, linhas).
SVG ou PNG com transparência, pensados para `background-repeat`.
`pattern-linhas.svg`, `pattern-mapa.png`

### `photos/`
Banco de fotos gerais reutilizáveis entre páginas: frota, motoristas, equipe,
armazém, pátio, carregamento. Descreva o conteúdo no nome.
`frota-carreta-rodovia.webp`, `equipe-armazem.webp`

### `pages/`
Imagens usadas em **uma página específica**. Cada subpasta espelha uma rota:

```
pages/
├── home/       imagens exclusivas da home
├── sobre/      página institucional
├── servicos/   página de serviços/soluções
└── contato/    página de contato
```

Adicione novas subpastas conforme as rotas surgirem
(`frota/`, `cobertura/`, `cotacao/`, `blog/`…). Se uma imagem é usada em mais de
uma página, mova para `photos/` ou `hero/`.

## Formatos e peso

| Uso | Formato | Largura típica | Peso alvo |
| --- | --- | --- | --- |
| Hero / banner | WebP ou AVIF | 1600–2400 px | < 400 KB |
| Foto em conteúdo | WebP ou AVIF | 800–1600 px | < 250 KB |
| Ilustração | SVG (ou WebP) | — | < 100 KB |
| Ícone | SVG | 24 px | < 10 KB |
| Pattern | SVG ou PNG | tile pequeno | < 30 KB |

Comprima **antes** de commitar (`sharp`, Squoosh, SVGO). Prefira deixar o
`next/image` gerar os tamanhos responsivos em vez de commitar várias resoluções.

## Referência no código

```tsx
import Image from "next/image";

<Image
  src="/images/pages/home/rastreamento.webp"
  alt="Painel de rastreamento de cargas"
  width={1200}
  height={800}
/>
```

## Antes de commitar (ver `SECURITY_RULES.md`, regras 26 e 33)

- Sem dados reais de clientes, notas fiscais, endereços ou placas legíveis.
- Sem pessoas identificáveis sem autorização de uso de imagem.
- Remova metadados EXIF (local/GPS, equipamento) das fotos.
- Confirme a licença de cada imagem de banco.
