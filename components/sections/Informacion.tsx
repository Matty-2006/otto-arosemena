'use client';

import { motion } from 'framer-motion';
import {
  BookHeart,
  Dumbbell,
  HeartPulse,
  Laptop,
  Palette,
  UsersRound,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const features = [
  {
    icon: UsersRound,
    title: 'Acompañamiento cercano',
    text: 'Docentes que conocen a cada estudiante y se involucran en su desarrollo personal y académico.',
  },
  {
    icon: BookHeart,
    title: 'Lectura y cultura',
    text: 'Fomento diario de la lectura, la escritura y la expresión artística desde los primeros años.',
  },
  {
    icon: Palette,
    title: 'Arte y creatividad',
    text: 'Música, manualidades y actividades que despiertan la imaginación y la confianza.',
  },
  {
    icon: Dumbbell,
    title: 'Deporte y salud',
    text: 'Educación física, juego al aire libre y hábitos de vida saludable para un cuerpo sano.',
  },
  {
    icon: Laptop,
    title: 'Tecnología educativa',
    text: 'Recursos digitales que acercan el mundo del futuro al aula de hoy.',
  },
  {
    icon: HeartPulse,
    title: 'Bienestar y cuidado',
    text: 'Un ambiente seguro, respetuoso e inclusivo donde cada niño se siente en familia.',
  },
];

export default function Informacion() {
  return (
    <section
      id="informacion"
      className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Vida escolar"
          eyebrowTone="blue"
          title={
            <>
              Una experiencia <span className="gradient-text">educativa completa</span>
            </>
          }
          subtitle="No solo enseñamos materias: acompañamos el crecimiento de personas íntegras, curiosas y seguras."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-800"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-green-600 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/10 to-green-600/10 text-blue-700 transition-all duration-500 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-green-600 group-hover:text-white dark:from-blue-400/10 dark:to-green-400/10 dark:text-blue-300">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}