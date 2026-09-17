"use client";

import { useEffect } from "react";

export function VLibras() {
  useEffect(() => {
    // Evita duplicar o script
    if (!document.querySelector('script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]')) {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
