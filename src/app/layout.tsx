import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { asset } from "@/lib/asset";
import { VLibras } from "@/components/vlibras";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: "Krona Express — Transporte rodoviário de cargas",
    template: "%s — Krona Express",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "Krona Express — Transporte rodoviário de cargas",
    description: site.description,
    images: [{ url: "media/hero/hero-poster.jpg", width: 1280, height: 720, alt: "Rodovia com caminhões ao entardecer" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: asset("/brand/logo/primary/Logo_Krona_Original.png") },
};

export const viewport: Viewport = {
  themeColor: "#06122a",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo/primary/Logo_Krona_Original.png`,
  description: site.description,
  areaServed: "BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(archivo.variable, plexMono.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a
          href="#conteudo"
          className="t-label sr-only z-[70] bg-ink px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        {children}
        <VLibras />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          // Conteúdo estático gerado a partir de constantes do projeto (sem dados de usuário).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
