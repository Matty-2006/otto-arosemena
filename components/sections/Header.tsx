'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Moon, Phone, Sun, X } from 'lucide-react';
import Image from 'next/image';
import { NAV_ITEMS, SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { scrollToSection } from '@/lib/smooth-scroll';
import { FacebookIcon, TiktokIcon } from '@/components/ui/SocialIcons';

function HeaderLogo({ light }: { light: boolean }) {
  return (
    <a
      href="#inicio"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('#inicio', 0);
      }}
      className="group flex items-center gap-3"
      aria-label="Ir al inicio"
    >
      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white p-1 shadow-md ring-2 ring-white/70 sm:h-14 sm:w-14">
        <Image
          src="/logo.png"
          alt="Logo de la escuela"
          fill
          sizes="56px"
          className="object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-base font-extrabold leading-tight tracking-tight md:text-lg ${
            light ? 'text-white' : 'text-slate-900 dark:text-white'
          }`}
        >
          Otto Arosemena Gómez
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
          Escuela de Educación Básica
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = useCallback(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', !root.classList.contains('dark'));
    try {
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    } catch {
      /* noop */
    }
    setIsDark(root.classList.contains('dark'));
  }, []);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    anchor: boolean
  ) => {
    setMenuOpen(false);
    if (!anchor) return; // navegación normal de next/link
    e.preventDefault();
    if (isHome) {
      scrollToSection(href);
    } else {
      router.push(`/${href}`);
    }
  };

  const renderLink = (item: (typeof NAV_ITEMS)[number]) =>
    item.anchor ? (
      <a
        href={item.href}
        onClick={(e) => handleNav(e, item.href, true)}
        className="navbar-link !px-5 !py-2.5 !text-base !font-semibold"
      >
        {item.label}
      </a>
    ) : (
      <Link
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="navbar-link !px-5 !py-2.5 !text-base !font-semibold"
      >
        {item.label}
      </Link>
    );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-950/90'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-site grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3 lg:py-4">
          <HeaderLogo light={!solid} />

          <ul className="hidden justify-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>{renderLink(item)}</li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2.5">
            <button
              onClick={toggleDark}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 transition-all duration-300 hover:scale-105 dark:border-slate-700 dark:bg-slate-900/80 dark:text-yellow-300"
              aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 60, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href={SOCIAL_LINKS.phone}
              className="hidden h-12 items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-[1.03] hover:bg-green-700 lg:flex"
            >
              <Phone size={19} />
              Llamar
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-800 transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white xl:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-white/98 backdrop-blur-2xl dark:bg-slate-950/98 xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <div className="container-site flex justify-end pt-20">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-colors hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 dark:text-white"
                aria-label="Cerrar menú"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="container-site mt-4 flex-1 overflow-y-auto pb-10">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    {item.anchor ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleNav(e, item.href, true)}
                        className="flex items-center justify-between rounded-2xl px-4 py-5 text-2xl font-bold text-slate-900 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-white dark:hover:bg-slate-800/70"
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-2xl text-blue-600">
                          ›
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between rounded-2xl px-4 py-5 text-2xl font-bold text-slate-900 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-white dark:hover:bg-slate-800/70"
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-2xl text-blue-600">
                          ›
                        </span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3">
                <a href={SOCIAL_LINKS.phone} className="btn-green px-6 py-4 text-lg">
                  <Phone size={22} />
                  Llamar · {SCHOOL_INFO.phone}
                </a>
                <Link href="/recursos" onClick={() => setMenuOpen(false)} className="btn-primary px-6 py-4 text-lg">
                  Ver recursos
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110 dark:bg-slate-700"
                  aria-label="TikTok"
                >
                  <TiktokIcon className="h-6 w-6" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
