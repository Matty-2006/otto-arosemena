import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, HelpCircle, Home, MousePointerClick, Phone, Printer, Save } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { DOCUMENTS, DOCUMENT_CATEGORIES } from '@/lib/documents';
import { SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Documentos para Docentes',
  description:
    'Descarga los documentos y formatos para docentes de la Escuela de Educación Básica Otto Arosemena Gómez: planificaciones, actas, circulares y más.',
};

const pasos = [
  {
    icon: MousePointerClick,
    title: '1. Elige el documento',
    text: 'Mira la lista y toca el documento que necesitas.',
  },
  {
    icon: Download,
    title: '2. Toca "Descargar"',
    text: 'Presiona el botón verde. El archivo se guarda solo.',
  },
  {
    icon: Save,
    title: '3. Búscalo en "Descargas"',
    text: 'En tu teléfono o computadora, abre la carpeta Descargas. Ahí está el documento.',
  },
];

function CategoriaDocumentos({ categoryId }: { categoryId: string }) {
  const docs = DOCUMENTS.filter((d) => d.category === categoryId);
  if (docs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
        {DOCUMENT_CATEGORIES.find((c) => c.id === categoryId)?.label}
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <article
            key={doc.id}
            className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25">
                <Printer size={22} />
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {doc.date}
              </span>
            </div>
            <h4 className="font-display text-lg font-bold leading-snug text-slate-900 dark:text-white">
              {doc.title}
            </h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {doc.description}
            </p>
            <div className="mt-5">
              {doc.file ? (
                <a
                  href={doc.file}
                  download
                  className="btn-green w-full px-6 py-4 text-base"
                >
                  <Download size={22} />
                  Descargar
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="btn w-full cursor-not-allowed border border-slate-200 bg-slate-100 px-6 py-4 text-base text-slate-400 dark:border-slate-700 dark:bg-slate-800"
                  aria-disabled="true"
                >
                  Próximamente
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function DocumentosPage() {
  return (
    <div className="bg-slate-50 pb-24 pt-28 dark:bg-slate-900 sm:pt-32">
      <div className="container-site">
        {/* Migaja de pan */}
        <nav aria-label="Ruta de navegación" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-blue-700">
                <Home size={16} />
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="font-semibold text-blue-700 dark:text-blue-300">Documentos</li>
          </ol>
        </nav>

        <SectionHeading
          eyebrow="Para docentes"
          eyebrowTone="blue"
          title={
            <>
              Documentos <span className="gradient-text">y descargas</span>
            </>
          }
          subtitle="Aquí puede bajar los formatos y documentos de trabajo. Todo en un solo lugar y muy fácil de descargar."
        />

        {/* Guía paso a paso */}
        <div className="mt-12 rounded-[2rem] gradient-blue-green p-8 text-white shadow-xl sm:p-10">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            ¿Cómo descargar un documento?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-blue-50/95">
            Siga estos 3 pasos; es muy sencillo.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {pasos.map((paso) => {
              const Icon = paso.icon;
              return (
                <div
                  key={paso.title}
                  className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur"
                >
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-800 shadow-lg">
                    <Icon size={26} />
                  </span>
                  <h3 className="font-display text-lg font-bold">{paso.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-50/95">{paso.text}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-white/90">
            <Phone size={16} />
            ¿Tiene dudas? Llame al {SCHOOL_INFO.phone} y le ayudamos a descargarlo.
          </p>
        </div>

        {/* Lista de documentos por categoría */}
        <div className="mt-14 space-y-10">
          {DOCUMENT_CATEGORIES.map((cat) => (
            <CategoriaDocumentos key={cat.id} categoryId={cat.id} />
          ))}
        </div>

        {/* Ayuda */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:text-left">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
            <HelpCircle size={26} />
          </span>
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              No aparece un documento o no se puede abrir
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              No se preocupe, es normal. Escríbanos por correo a{' '}
              <a href={SOCIAL_LINKS.email} className="font-semibold text-blue-700 underline dark:text-blue-300">
                {SCHOOL_INFO.email}
              </a>{' '}
              o llámenos al{' '}
              <a href={SOCIAL_LINKS.phone} className="font-semibold text-green-700 underline dark:text-green-300">
                {SCHOOL_INFO.phone}
              </a>{' '}
              y se lo enviamos directamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}