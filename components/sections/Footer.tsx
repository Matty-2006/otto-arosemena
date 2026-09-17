'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Mail, MapPin, Phone } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { scrollToSection } from '@/lib/smooth-scroll';
import { FacebookIcon, TiktokIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, anchor: boolean) => {
    if (!anchor) return;
    e.preventDefault();
    if (pathname === '/') {
      scrollToSection(href);
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-1 gradient-blue-green" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-700/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-green-700/10 blur-3xl" />

      <div className="container-site relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          {/* Marca */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white p-1.5 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Logo Escuela Otto Arosemena Gómez"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </span>
              <div>
                <p className="font-display text-base font-extrabold text-white">
                  Otto Arosemena Gómez
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                  Educación Básica
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Centro de recursos y comunicación para el equipo docente de{' '}
              {SCHOOL_INFO.parish}, {SCHOOL_INFO.city}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-cyan-300"
                aria-label="TikTok"
              >
                <TiktokIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EA4335] hover:text-white"
                aria-label="Correo electrónico"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
              Navegación
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  {item.anchor ? (
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href, true)}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-green-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-green-500/60 transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-green-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-green-500/60 transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-blue-400" />
                <span className="text-slate-400">
                  {SCHOOL_INFO.address}
                  <br />
                  {SCHOOL_INFO.parish}, {SCHOOL_INFO.city}
                </span>
              </li>
              <li>
                <a href={SOCIAL_LINKS.phone} className="flex gap-3 text-slate-400 transition-colors hover:text-green-400">
                  <Phone size={17} className="mt-0.5 shrink-0 text-blue-400" />
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.email} className="flex gap-3 text-slate-400 transition-colors hover:text-green-400">
                  <Mail size={17} className="mt-0.5 shrink-0 text-blue-400" />
                  {SCHOOL_INFO.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-white">Centro docente:</span> recursos,
                agenda institucional y soporte para profesores
              </p>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} {SCHOOL_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Hecho con{' '}
            <span className="text-green-400" aria-hidden="true">
              ♥
            </span>{' '}
            para nuestra comunidad educativa · AMIE {SCHOOL_INFO.email.split('@')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}
