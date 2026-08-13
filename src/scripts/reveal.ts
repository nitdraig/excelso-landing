/**
 * IntersectionObserver reveal helper. Mark elements with class "reveal".
 */
export function initReveals() {
  const nodes = document.querySelectorAll<HTMLElement>(".reveal");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  nodes.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", initReveals);
