import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Home } from 'lucide-react';

export default function TeacherPageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="teacher-subpage">
      <div className="subpage-hero">
        <div className="container-site relative z-10 pt-32 pb-14 sm:pt-40 sm:pb-20">
          <nav aria-label="Ruta de navegación" className="mb-8 flex items-center gap-2 text-sm text-white/65">
            <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-white"><Home size={15} /> Inicio</Link>
            <span aria-hidden="true">/</span><span className="text-white">{title}</span>
          </nav>
          <span className="section-eyebrow !text-emerald-200">{eyebrow}</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/85">{description}</p>
        </div>
      </div>
      <div className="container-site subpage-content">{children}</div>
      <div className="container-site pb-20 pt-10"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3"><ArrowLeft size={17} /> Volver al inicio</Link></div>
    </div>
  );
}

export function SimpleCard({ icon: Icon, title, text, href }: { icon: React.ElementType; title: string; text: string; href?: string }) {
  const content = <><div className="subcard-icon"><Icon size={22} /></div><h2>{title}</h2><p>{text}</p>{href && <span className="subcard-link">Abrir sección <ArrowUpRight size={16} /></span>}</>;
  return href ? <Link href={href} className="subcard">{content}</Link> : <article className="subcard">{content}</article>;
}
