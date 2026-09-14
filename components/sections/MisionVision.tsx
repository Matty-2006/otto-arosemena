'use client';

import { motion } from 'framer-motion';
import { Eye, Gem, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const cards = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Brindar una educación fiscal de calidad que desarrolle integralmente a nuestros estudiantes, potenciando sus habilidades académicas, afectivas y sociales para formar ciudadanos responsables, críticos y comprometidos con su comunidad.',
    accent: 'from-blue-600 to-blue-700',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser una institución educativa pública reconocida por su excelencia, innovación pedagógica y calidez humana; referente en la formación de estudiantes con valores sólidos y capacidades para el siglo XXI.',
    accent: 'from-green-600 to-green-700',
  },
];

const valores = [
  'Respeto',
  'Responsabilidad',
  'Honestidad',
  'Solidaridad',
  'Inclusión',
  'Excelencia',
];

export default function MisionVision() {
  return (
    <section
      id="mision"
      className="relative overflow-hidden py-20 text-white sm:py-28"
    >
      {/* Fondo */}
      <div className="absolute inset-0 gradient-blue-green" />
      <div className="absolute inset-0 bg-grid-fade opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="container-site relative">
        <SectionHeading
          dark
          eyebrow="Nuestra Identidad"
          eyebrowTone="light"
          title={
            <>
              Misión, visión <span className="text-emerald-300">&</span> valores
            </>
          }
          subtitle="Los principios que guían cada aula, cada recreo y cada aprendizaje en nuestra escuela."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 sm:p-10"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />
                <div
                  className={`relative mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} shadow-xl`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="relative font-display text-2xl font-extrabold">{card.title}</h3>
                <p className="relative mt-4 text-[15px] leading-relaxed text-blue-50/95">
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Valores */}
        <Reveal delay={0.15} className="mt-7">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 shadow-lg">
                <Gem className="h-6 w-6" />
              </span>
              <h3 className="font-display text-2xl font-extrabold">Nuestros valores</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {valores.map((valor, i) => (
                <motion.span
                  key={valor}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 font-display text-sm font-bold tracking-wide backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-800"
                >
                  {valor}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cita */}
        <Reveal delay={0.1}>
          <blockquote className="mx-auto mt-14 max-w-3xl text-center">
            <p className="font-calligraphy text-3xl leading-snug text-emerald-200 sm:text-4xl lg:text-5xl">
              &ldquo;Educar la mente sin educar el corazón no es educar en absoluto.&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Filosofía educativa
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}