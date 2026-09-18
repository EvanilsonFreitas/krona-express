<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Regras de UI / UX Design
- **Interatividade:** QUALQUER elemento que possua interação visual com o mouse (como efeitos de `hover:`, sombras, deslocamentos ou `group-hover:`) DEVE OBRIGATORIAMENTE possuir a classe `cursor-pointer` (se não for um `<button>` ou `<a>` nativo). Isso garante a affordance de clique para o usuário e é uma regra de ouro para toda a aplicação.
- **Imagens Únicas:** Todas as imagens utilizadas na aplicação devem ser únicas. Não duplique ou reutilize as mesmas fotos do Unsplash (ou de outras fontes) em seções diferentes da mesma página ou em páginas diferentes. Cada bloco deve ter sua própria identidade visual exclusiva.
