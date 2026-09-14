'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Clock, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '@/lib/constants';
import { scrollToSection } from '@/lib/smooth-scroll';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] gradient-blue-green px-7 py-14 text-center shadow-2xl shadow-blue-900/20 sm:px-14"
        >
          <div className="absolute inset-0 bg-grid-fade opacity-50" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <span className="font-calligraphy block text-3xl text-emerald-200 sm:text-4xl">
              te esperamos en la escuela
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Tu hijo merece una educación con raíces y alas
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-blue-50/90 sm:text-base">
              Matrículas abiertas para el año lectivo. Ven a conocer nuestras instalaciones y
              nuestra propuesta educativa: la inscripción es totalmente gratuita.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
                className="btn-white w-full px-8 py-4 text-base sm:w-auto"
              >
                <CalendarCheck size={20} />
                Agendar una visita
              </a>
              <a href={SCHOOL_INFO.phone} className="btn-green w-full px-8 py-4 text-base sm:w-auto">
                <Phone size={20} />
                {SCHOOL_INFO.phone}
              </a>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-white/85">
              <Clock className="h-4 w-4" />
              Jornadas matutina y vespertina · De lunes a viernes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}