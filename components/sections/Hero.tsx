'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Info, MapPin, Phone } from 'lucide-react';
import { SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { scrollToSection } from '@/lib/smooth-scroll';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const wrapRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !bgRef.current || !wrapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { yPercent: -8, scale: 1.12 },
        {
          yPercent: 10,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      gsap.to(contentRef.current, {
        yPercent: -14,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="inicio"
      ref={wrapRef}
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-slate-950"
    >
      <div
        ref={bgRef}
        className="absolute inset-[-5%] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url(/images/escuela-hero.jpg)' }}
        role="img"
        aria-label="Edificio de la Escuela Otto Arosemena Gómez"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/50 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-transparent to-green-950/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      <div ref={contentRef} className="container-site relative z-10 pb-24 pt-28 text-center sm:pt-32">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-green-300">
            Una escuela pública y gratuita
          </p>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-title-shadow mx-auto mt-4 max-w-4xl text-balance font-display text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Escuela de Educación Básica
          <span className="mt-2 block gradient-text bg-clip-text text-transparent">
            Otto Arosemena Gómez
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-200"
        >
          Educación inicial y básica para sus hijos, con aprendizaje en valores, docentes
          dedicados y un ambiente seguro. Desde 1967 en La Ferroviaria, Quito.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-stretch"
        >
          <a
            href={SOCIAL_LINKS.phone}
            className="btn-green flex-1 px-8 py-5 text-lg shadow-xl shadow-green-600/30"
          >
            <Phone size={24} />
            Llamar ahora
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contacto');
            }}
            className="btn-white flex-1 px-8 py-5 text-lg"
          >
            <Info size={24} />
            Pedir información
          </a>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300"
        >
          <Phone size={15} className="text-green-300" />
          {SCHOOL_INFO.phone}
          <span className="mx-1 hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
          <MapPin size={15} className="hidden text-green-300 sm:block" />
          <span className="hidden sm:inline">{SCHOOL_INFO.parish}, {SCHOOL_INFO.city}</span>
        </motion.p>
      </div>

      <motion.a
        href="#acerca"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#acerca');
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        aria-label="Bajar a la información de la escuela"
      >
        <span className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.span
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2.5 w-1 rounded-full bg-white"
          />
        </span>
        <span className="sr-only">Información de la escuela</span>
      </motion.a>
    </section>
  );
}