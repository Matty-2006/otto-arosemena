import Image from 'next/image';
import { scrollToSection } from '@/lib/smooth-scroll';

export default function Logo({
  className = 'h-12 w-12',
  textClassName = '',
  showText = true,
}: {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <a
      href="#inicio"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('#inicio', 0);
      }}
      className="flex items-center gap-3 group"
      aria-label="Ir al inicio"
    >
      <span
        className={`relative block shrink-0 overflow-hidden rounded-full bg-white p-1 shadow-md shadow-slate-900/10 ring-2 ring-white/60 transition-transform duration-300 group-hover:scale-105 ${className}`}
      >
        <Image
          src="/logo.png"
          alt="Logo Escuela de Educación Básica Otto Arosemena Gómez"
          fill
          sizes="96px"
          className="object-contain"
          priority
        />
      </span>
      {showText && (
        <span className={`hidden flex-col leading-tight sm:flex ${textClassName}`}>
          <span className="font-display text-sm font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-base">
            Escuela Otto Arosemena
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-700/80 dark:text-blue-300/90">
            Educación Básica
          </span>
        </span>
      )}
    </a>
  );
}