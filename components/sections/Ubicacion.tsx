'use client';

import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { SCHOOL_INFO, SCHEDULE, SOCIAL_LINKS } from '@/lib/constants';

const infoCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: [SCHOOL_INFO.address, `${SCHOOL_INFO.parish}, ${SCHOOL_INFO.city}`],
    action: { label: 'Cómo llegar', href: SCHOOL_INFO.mapLink },
    tone: 'blue',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: [SCHOOL_INFO.phone],
    action: { label: 'Llamar ahora', href: SOCIAL_LINKS.phone },
    tone: 'green',
  },
  {
    icon: Mail,
    title: 'Correo',
    lines: [SCHOOL_INFO.email],
    action: { label: 'Escribirnos', href: SOCIAL_LINKS.email },
    tone: 'blue',
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: [SCHEDULE.weekdays, SCHEDULE.saturday],
    action: { label: 'Jornadas', href: '#contacto' },
    tone: 'green',
  },
];

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900 sm:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="Ubicación"
          eyebrowTone="blue"
          title={
            <>
              Visítanos en <span className="gradient-text">La Ferroviaria</span>
            </>
          }
          subtitle="Nos encontramos en una zona céntrica y accesible de Quito, cerca de tu comunidad."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            const isBlue = card.tone === 'blue';
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      isBlue
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-blue-600/25'
                        : 'bg-gradient-to-br from-green-600 to-green-700 shadow-green-600/25'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <div className="mt-2 space-y-0.5">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-slate-600 dark:text-slate-400">
                        {line}
                      </p>
                    ))}
                  </div>
                  <a
                    href={card.action.href}
                    target={card.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={
                      card.action.href.startsWith('#')
                        ? (e) => {
                            e.preventDefault();
                            const el = document.querySelector(card.action.href);
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }
                        : undefined
                    }
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isBlue
                        ? 'text-blue-700 hover:text-blue-500 dark:text-blue-300'
                        : 'text-green-700 hover:text-green-500 dark:text-green-300'
                    }`}
                  >
                    {card.action.label}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mapa */}
        <Reveal delay={0.15} className="mt-10">
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-100 shadow-xl dark:border-slate-800">
            <iframe
              src={SCHOOL_INFO.mapEmbed}
              title="Mapa de ubicación de la Escuela Otto Arosemena Gómez"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
            />
            <a
              href={SCHOOL_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-sm font-bold text-blue-800 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white"
            >
              <MapPin size={16} />
              Abrir en Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}