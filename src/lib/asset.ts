/** Prefixa caminhos de /public com o basePath do GitHub Pages em produção. */
export const basePath = process.env.NODE_ENV === "production" ? "/krona-express" : "";

export function asset(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
