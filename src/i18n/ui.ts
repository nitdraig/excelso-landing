export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.vault": "Vault",
    "nav.open": "Open",
    "nav.labs": "Labs",
    "nav.contact": "Contact",
    "nav.toggle": "Toggle menu",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "lang.switch": "Language",
    "stub.badge": "Migration in progress",
    "stub.body":
      "This route is scaffolded in Astro. Content will be ported from the Next.js landing without React islands.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.vault": "Vault",
    "nav.open": "Open",
    "nav.labs": "Labs",
    "nav.contact": "Contacto",
    "nav.toggle": "Abrir menú",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "lang.switch": "Idioma",
    "stub.badge": "Migración en curso",
    "stub.body":
      "Esta ruta está montada en Astro. El contenido se portará desde la landing Next.js sin islands de React.",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function t(locale: keyof typeof ui, key: UiKey): string {
  return ui[locale][key] ?? ui.en[key];
}

export const navRoutes = [
  { key: "nav.home" as const, path: "/" },
  { key: "nav.about" as const, path: "/about" },
  { key: "nav.vault" as const, path: "/vault" },
  { key: "nav.open" as const, path: "/open" },
  { key: "nav.labs" as const, path: "/labs" },
  { key: "nav.contact" as const, path: "/contact" },
];
