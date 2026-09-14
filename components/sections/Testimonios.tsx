'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    name: 'María Fernanda C.',
    role: 'Madre de familia',
    initials: 'MC',
    text: 'Mis hijos aprenden en un ambiente seguro y lleno de cariño. Los docentes conocen a cada niño por su nombre.',
  },
  {
    name: 'Carlos Andrés V.',
    role: 'Padre de familia',
    initials: 'CV',
    text: 'Lo que más valoro es la formación en valores. Mi hijo ama venir a clases y se nota en cómo se expresa.',
  },
  {
    name: 'Daniela R.',
    role: 'Madre de familia',
    initials: 'DR',
    text: 'La comunicación con las maestras es constante y siempre están abiertas a escuchar a las familias.',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="relative overflow-hidden py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 bg-grid-fade opacity-40" />

      <div className="container-site relative">
        <SectionHeading
          dark
          eyebrow="Testimonios"
          eyebrowTone="light"
          title={
            <>
              Lo que dice <span className="gradient-text">nuestra comunidad</span>
            </>
          }
          subtitle="Familias y vecinos que confían en nosotros."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-7 w-7 text-green-300" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-100">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 font-display text-base font-extrabold">
                  {t.initials}
                </span>
                <div>
                  <p className="font-display font-bold">{t.name}</p>
                  <p className="text-sm text-green-300">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}