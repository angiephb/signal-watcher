export const getMockResponse = (term: string) => {
  const searchTerm = term.toLowerCase();

  if (searchTerm === 'login' || searchTerm === 'admin' || searchTerm === 'secure') {
    return {
      summary: "Se detectó intento de Phishing en una página sensible.",
      severity: "CRITICAL",
      suggestedAction: "Bloquear dominio y reportar."
    };
  }

  if (searchTerm === 'apple' || searchTerm === 'google' || searchTerm === 'microsoft') {
    return {
      summary: "Posible robo de marca corporativa.",
      severity: "HIGH",
      suggestedAction: "Alertar al equipo de seguridad."
    };
  }

  if (searchTerm === 'gratis' || searchTerm === 'oferta' || searchTerm === 'premio') {
    return {
      summary: "Palabras asociadas a mucho Spam o correos fraudulentos.",
      severity: "MED",
      suggestedAction: "Revisar comportamiento del dominio."
    };
  }

  return {
    summary: `Análisis limpio para: ${term}`,
    severity: "LOW",
    suggestedAction: "Ninguna acción especial requerida."
  };
};
