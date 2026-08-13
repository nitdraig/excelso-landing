import type { Locale } from "./seo";

/** Strip locale prefix and normalize path for cross-locale linking. */
export function getPathWithoutLocale(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/es" || clean.startsWith("/es/")) {
    const rest = clean.slice(3) || "/";
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return clean;
}

export function localizePath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized === "" ? "/" : normalized;
  if (normalized === "/") return "/es/";
  return `/es${normalized}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function detectLocaleFromUrl(url: URL): Locale {
  return url.pathname === "/es" || url.pathname.startsWith("/es/") ? "es" : "en";
}
