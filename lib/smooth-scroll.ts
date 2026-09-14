// Utilidades de scroll suave integradas con Lenis

export function scrollToSection(hash: string, offset = -84) {
  if (typeof window === 'undefined') return;

  const el = document.querySelector(hash);
  if (!el) return;

  const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element, o?: object) => void } })
    .lenis;
  if (lenis) {
    lenis.scrollTo(el as Element, { offset, duration: 1.25 });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToTop() {
  if (typeof window === 'undefined') return;

  const lenis = (window as unknown as { lenis?: { scrollTo: (t: number, o?: object) => void } })
    .lenis;
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.1 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}