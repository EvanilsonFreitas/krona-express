# Proveniência dos assets de imagem e vídeo

Registro interno de origem e uso das mídias do redesign (PR #10). Este arquivo fica em `design/`,
que não é publicado no site.

- **Origem:** todas as mídias abaixo vêm do [Pexels](https://www.pexels.com/license/). A licença permite uso
  comercial gratuito e não exige crédito na interface, por isso não há créditos visíveis no site.
- **Tratamento:** as fotos receberam uma gradação de cor uniforme (leve dessaturação e sombras frias) e foram
  exportadas em AVIF e WebP nas larguras 640, 1280 e 1920 px. Ficam em `public/images/photos/` com o padrão
  `<nome>-<largura>.<avif|webp>`.
- **Imagens únicas:** cada foto aparece em um único lugar do site, conforme a regra de UI do projeto.

## Vídeo do hero

| Arquivo | Origem | Autor | Uso |
| --- | --- | --- | --- |
| `public/media/hero/hero-1080.mp4` (H.264), `hero-1080.webm` (VP9) | https://www.pexels.com/video/32570949/ | Vinay Chauhan | Home: hero (desktop e tablet) |
| `public/media/hero/hero-mobile.mp4` | mesmo vídeo, recorte vertical 540x960 | Vinay Chauhan | Home: hero (até 767 px) |
| `public/media/hero/hero-poster.webp`, `hero-poster.jpg`, `hero-poster-mobile.webp` | primeiro quadro do loop | Vinay Chauhan | Imagem de capa do hero e Open Graph |

O loop tem 18 s, com crossfade de 1,2 s entre o fim e o início do trecho, codificado no próprio arquivo.

## Fotografias

| Nome base | Origem | Autor | Uso no site |
| --- | --- | --- | --- |
| `caminhao-movimento-noite` | https://www.pexels.com/photo/26443249/ | Elina Volkova | Serviços: abertura da página |
| `caminhoes-neblina` | https://www.pexels.com/photo/20333185/ | Halil Fatih Çetin | Serviços: painel Lotação |
| `bau-aberto-palete` | https://www.pexels.com/photo/34585121/ | Caleb Oquendo | Serviços: Fracionada |
| `carrinho-caixas-van` | https://www.pexels.com/photo/6169178/ | Tima Miroshnichenko | Serviços: Logística reversa |
| `operador-carreta-doca` | https://www.pexels.com/photo/11114134/ | Tony Mrst | Serviços: Operações dedicadas |
| `cabine-reflexo` | https://www.pexels.com/photo/16100085/ | cnrdmroglu | Contato: Acompanhar uma carga |
| `prancheta-documentos` | https://www.pexels.com/photo/6169133/ | Tima Miroshnichenko | Cotação: coluna lateral (desktop) |
| `estrada-chuva-lanternas` | https://www.pexels.com/photo/35332904/ | Michael Solo | Home: painel Lotação |
| `paletes-empilhadeira` | https://www.pexels.com/photo/17229385/ | Léster Lau | Home: painel Fracionada |
| `coleta-caixas-reversa` | https://www.pexels.com/photo/6169059/ | Tima Miroshnichenko | Home: painel Logística reversa |
| `carregamento-plataforma` | https://www.pexels.com/photo/38214049/ | TwoSix ZeroFive | Home: painel Operações dedicadas |
| `motorista-silhueta` | https://www.pexels.com/photo/21711145/ | Mark Stebnicki | Sobre: Nosso propósito |
| `cabine-estrada` | https://www.pexels.com/photo/7756838/ | Edward F. | Sobre: abertura da página |
| `conferencia-checklist` | https://www.pexels.com/photo/12234106/ | Daniel Andraski | Sobre: Como trabalhamos |
| `motorista-janela` | https://www.pexels.com/photo/11911883/ | Mathias Reding | Sobre: Relações de longo prazo |
| `pneu-detalhe` | https://www.pexels.com/photo/7019611/ | cottonbro studio | Sobre: Nossos princípios |
| `caminhao-rodovia-movimento` | https://www.pexels.com/photo/16706765/ | MUHAMMED TARIK  KAHRAMAN | Home: apresentação |
| `carreta-sider-patio` | https://www.pexels.com/photo/12418935/ | Dextar Studio ™ | Sobre: Quem somos |
| `paletes-madeira` | https://www.pexels.com/photo/32817237/ | levan simonshvili | Home: apresentação (imagem sobreposta) |
| `rodovia-caminhao-dia` | https://www.pexels.com/photo/39000646/ | Onur | Home: Por que trabalhar com a Krona |
| `rodovia-serra-aerea` | https://www.pexels.com/photo/29181448/ | Sergei Starostin | Home: faixa fotográfica final |
| `doca-saida-caminhao` | https://www.pexels.com/photo/29786116/ | Juan R. Real | Home: painel Coleta e entrega |
| `doca-carreta-plataforma` | https://www.pexels.com/photo/37389217/ | hitesh Sarain | Home: Como sua carga avança |
| `serra-caminhoes-mata` | https://www.pexels.com/video/17615358/ | Luan Gonçalves | Menu mobile/tablet (quadro extraído de vídeo) |

## Itens legados não utilizados pela versão final

Registrados para uma limpeza futura. Nada foi removido nesta etapa e o lockfile não foi alterado.

**Assets em `public/`** (vão para o build, mas não são referenciados):

- `public/images/pages/home/Fundo_Header.png` (antigo fundo do hero)
- `public/images/pages/sobre/Entregador_Caixa.jpg` (antiga foto da seção Sobre)
- `public/images/icons/whatsapp.png` (substituído por ícone SVG inline)

**Componentes:** `src/components/ui/*` (shadcn: accordion, badge, button, card, form, input, label, select,
separator, sheet, tabs, textarea) não são importados por nenhuma página.

**Dependências** sem uso no código da aplicação:

- `react-countup` (substituído por contagem com Motion)
- `lucide-react`, `@hugeicons/react`
- `hugeicons-react`, `class-variance-authority`, `@radix-ui/react-label`, `@radix-ui/react-slot` (usados apenas
  pelos componentes de `src/components/ui`, que não são importados)

`shadcn` e `tw-animate-css` continuam em uso pelos imports de CSS em `src/app/globals.css`.
