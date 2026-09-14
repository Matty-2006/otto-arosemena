'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Award, BadgeCheck, HeartHandshake, Leaf, Send } from 'lucide-react';
import { SCHOOL_INFO } from '@/lib/constants';
import { scrollToSection } from '@/lib/smooth-scroll';
import Reveal from '@/components/ui/Reveal';

const stats = [
  { value: 59, suffix: '+', label: 'Años formando generaciones' },
  { value: 12, suffix: '', label: 'Niveles educativos' },
  { value: 2, suffix: '', label: 'Jornadas: matutina y vespertina' },
  { value: 100, suffix: '%', label: 'Educación fiscal gratuita' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span className="flex items-baseline gap-0.5">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

const highlights = [
  {
    icon: BadgeCheck,
    title: 'Excelencia académica',
    text: 'Un currículo sólido que prepara para la secundaria y la vida.',
  },
  {
    icon: HeartHandshake,
    title: 'Formación en valores',
    text: 'Respeto, responsabilidad, honestidad y solidaridad en el día a día.',
  },
  {
    icon: Leaf,
    title: 'Entorno seguro y acogedor',
    text: 'Espacios pensados para el cuidado y el sano desarrollo infantil.',
  },
  {
    icon: Award,
    title: 'Docentes comprometidos',
    text: 'Un equipo humano que enseña con vocación y dedicación.',
  },
];

export default function Acerca() {
  return (
    <section id="acerca" className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-28">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Imagen */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/15">
              <Image
                src="/images/escuela-hero.jpg"
                alt="Instalaciones de la Escuela Otto Arosemena Gómez"
                width={1490}
                height={1196}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />
            </div>

            {/* Tarjeta logo */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="absolute -bottom-8 left-6 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-2xl shadow-slate-900/15 dark:bg-slate-800 sm:left-10"
            >
              <span className="relative h-16 w-16 overflow-hidden rounded-full bg-white p-1 ring-2 ring-green-500/30">
                <Image
                  src="/logo.png"
                  alt="Escudo institucional"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </span>
              <div>
                <p className="font-display text-sm font-extrabold text-slate-900 dark:text-white">
                  Comunidad educativa
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {SCHOOL_INFO.parish} · {SCHOOL_INFO.city}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-green-600 dark:text-green-400">
                  Desde {SCHOOL_INFO.year}
                </p>
              </div>
            </motion.div>

            {/* Sello flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-4 -top-4 hidden h-24 w-24 items-center justify-center rounded-full gradient-blue-green text-center font-display text-[11px] font-bold uppercase leading-tight tracking-wide text-white shadow-glow-blue sm:flex"
            >
              <span className="px-2">
                Educa
                <br />
                desde
                <br />
                1967
              </span>
            </motion.div>
          </Reveal>

          {/* Texto */}
          <div>
            <Reveal>
              <span className="eyebrow eyebrow-blue">Nuestra Escuela</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.75rem]">
                Un hogar de aprendizaje
                <span className="gradient-text"> con historia y futuro</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Desde <strong className="font-semibold text-slate-800 dark:text-slate-200">1967</strong>.
                Somos una escuela pública de Quito, en la parroquia La Ferroviaria. Ofrecemos
                educación inicial y básica, gratuita y con calidad, para que cada niño crezca
                seguro, feliz y bien preparado.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Reveal key={h.title} delay={i * 0.1}>
                    <div className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-md shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={21} />
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                          {h.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                          {h.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
                className="btn-primary mt-9 px-7 py-3.5"
              >
                <Send size={18} />
                Quiero matricular a mi hijo
              </a>
            </Reveal>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="gradient-text font-display text-4xl font-black sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}