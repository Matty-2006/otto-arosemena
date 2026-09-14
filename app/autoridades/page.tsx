import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { FacebookIcon, TiktokIcon } from '@/components/ui/SocialIcons';
import { SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Autoridades',
  description:
    'Directivos y autoridades de la Escuela de Educación Básica Otto Arosemena Gómez. Esta sección estará disponible próximamente.',
};

export default function AutoridadesPage() {
  return (
    <div className="relative flex min-h-[calc(100svh-84px)] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 gradient-blue-green opacity-95" />
      <div className="absolute inset-0 bg-grid-fade opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-site relative py-16 text-center text-white">
        <span className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
          <Clock size={40} />
        </span>

        <p className="font-calligraphy text-3xl text-emerald-200 sm:text-4xl">
          Estamos trabajando en esto
        </p>
        <h1 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
          Autoridades
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-blue-50/95">
          Aquí encontrará la información de las autoridades de la institución. Esta sección
          estará disponible <strong className="font-bold text-white">próximamente</strong>.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link href="/" className="btn-white px-8 py-4 text-base">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
          <a href={SOCIAL_LINKS.phone} className="btn-green px-8 py-4 text-base">
            Consultar por teléfono
          </a>
        </div>

        <p className="mt-8 text-sm text-blue-50/85">{SCHOOL_INFO.phone} · {SCHOOL_INFO.email}</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform hover:scale-110"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform hover:scale-110"
            aria-label="TikTok"
          >
            <TiktokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}