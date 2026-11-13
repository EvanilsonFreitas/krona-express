import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

type PhotoProps = {
  /** Nome-base do arquivo em /public/images/photos (sem largura e extensão). */
  name: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Ponto focal para o recorte responsivo (object-position). */
  focus?: string;
  widths?: number[];
};

/**
 * Fotografia da direção de arte Krona.
 * O site é exportado como estático (output: "export"), em que next/image não gera formatos;
 * por isso servimos AVIF/WebP pré-processados via <picture> com srcset responsivo.
 */
export function Photo({
  name,
  alt,
  sizes = "100vw",
  className,
  imgClassName,
  priority = false,
  focus = "50% 50%",
  widths = [640, 1280, 1920],
}: PhotoProps) {
  const src = (w: number, ext: string) => asset(`/images/photos/${name}-${w}.${ext}`);
  const srcSet = (ext: string) => widths.map((w) => `${src(w, ext)} ${w}w`).join(", ");

  return (
    <picture className={cn("block overflow-hidden", className)}>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={src(1280, "webp")}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
        style={{ objectPosition: focus }}
      />
    </picture>
  );
}
