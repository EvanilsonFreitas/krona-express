"use client";

import { useEffect } from "react";

type VLibrasWindow = Window & { VLibras?: { Widget: new (url: string) => unknown } };

const SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";

// Atributos customizados exigidos pelo plugin oficial VLibras (gov.br).
const vw = { vw: "true" } as Record<string, string>;
const vwButton = { "vw-access-button": "true" } as Record<string, string>;
const vwWrapper = { "vw-plugin-wrapper": "true" } as Record<string, string>;

export function VLibras() {
  useEffect(() => {
    // Evita duplicar o script
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      script.onload = () => {
        const w = window as VLibrasWindow;
        if (w.VLibras) new w.VLibras.Widget("https://vlibras.gov.br/app");
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div {...vw} className="enabled">
      <div {...vwButton} className="active"></div>
      <div {...vwWrapper}>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
