/**
 * Count-up for elements with data-count-to.
 */
function animateCount(el: HTMLElement) {
  const to = Number(el.dataset.countTo ?? 0);
  const duration = Number(el.dataset.countDuration ?? 2000);
  const from = 0;
  let start: number | null = null;

  const tick = (ts: number) => {
    if (start === null) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    el.textContent = String(Math.floor(from + progress * (to - from)));
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

export function initCountUps() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-count-to]");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => {
      el.textContent = el.dataset.countTo ?? "0";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateCount(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.4 },
  );

  nodes.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", initCountUps);
