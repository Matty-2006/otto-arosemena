'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { FacebookIcon, TiktokIcon } from '@/components/ui/SocialIcons';

type Status = 'idle' | 'loading' | 'success' | 'error';

const initialForm = {
  nombre: '',
  email: '',
  telefono: '',
  asunto: '',
  mensaje: '',
  empresa: '', // honeypot
};

const asuntos = [
  'Inscripción y matrículas',
  'Información general',
  'Becas y ayudas',
  'Actividades y eventos',
  'Otro',
];

export default function Contacto() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const setField = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 3)
      next.nombre = 'Ingresa tu nombre completo.';
    if (!form.email.trim()) next.email = 'El correo es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Ingresa un correo válido.';
    if (form.telefono && !/^[+\d\s()-]{7,20}$/.test(form.telefono.trim()))
      next.telefono = 'Ingresa un teléfono válido.';
    if (!form.asunto) next.asunto = 'Selecciona un asunto.';
    if (form.mensaje.trim().length < 10)
      next.mensaje = 'Tu mensaje debe tener al menos 10 caracteres.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      setMessage('Revisa los campos marcados e inténtalo de nuevo.');
      return;
    }

    setStatus('loading');
    setMessage('Enviando tu mensaje...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus('error');
        setMessage(data.error || 'No fue posible enviar el mensaje.');
        return;
      }

      if (data.useMailto && data.mailto) {
        // Si no hay servidor SMTP configurado, abrimos el cliente de correo
        // con el mensaje ya redactado para que termine el envío.
        window.location.href = data.mailto;
        setStatus('success');
        setMessage(
          'Se abrió tu correo con el mensaje listo. ¡Solo envíalo y te contactaremos!'
        );
      } else {
        setStatus('success');
        setMessage(
          '¡Mensaje enviado con éxito! Pronto nos pondremos en contacto contigo.'
        );
      }
      setForm(initialForm);
    } catch {
      setStatus('error');
      setMessage('No fue posible enviar el mensaje. Intenta de nuevo.');
    }
  };

  const inputClass = (hasError: boolean) =>
    `${hasError ? 'border-red-400 focus:ring-red-400/40 focus:border-red-400' : ''}`;

  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Contacto"
          eyebrowTone="blue"
          title={
            <>
              Hablemos, <span className="gradient-text">estamos para ti</span>
            </>
          }
          subtitle="Preguntas sobre matrículas, horarios o simplemente quieres conocernos mejor — escríbenos."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="relative overflow-hidden rounded-3xl gradient-blue-green p-8 text-white shadow-xl">
                <div className="absolute inset-0 bg-grid-fade opacity-50" />
                <div className="relative">
                  <span className="font-calligraphy block text-3xl text-emerald-200">
                    tus hijos, nuestra misión
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">
                    Respuesta rápida y cercana
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-50/95">
                    Escríbenos por el medio que prefieras. Tu familia y la nuestra son una comunidad.
                  </p>
                  <div className="mt-6 space-y-3">
                    <a
                      href={SOCIAL_LINKS.phone}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 p-3.5 backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                        <Phone size={18} />
                      </span>
                      <span className="text-sm font-semibold">{SCHOOL_INFO.phone}</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.email}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 p-3.5 backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                        <Mail size={18} />
                      </span>
                      <span className="text-sm font-semibold">{SCHOOL_INFO.email}</span>
                    </a>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3.5 backdrop-blur">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                        <MapPin size={18} />
                      </span>
                      <span className="text-sm font-semibold">{SCHOOL_INFO.city}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-8 dark:border-slate-800 dark:bg-slate-900/60">
                <h3 className="font-display text-lg font-extrabold text-slate-900 dark:text-white">
                  Síguenos
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                  Conoce nuestra vida escolar en redes sociales.
                </p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    aria-label="Facebook de la escuela"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    aria-label="TikTok de la escuela"
                  >
                    <TiktokIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EA4335] text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    aria-label="Correo electrónico"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-10"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={(e) => setField('empresa', e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Ej. María Fernanda"
                    value={form.nombre}
                    onChange={(e) => setField('nombre', e.target.value)}
                    aria-invalid={!!errors.nombre}
                    className={`input-field ${inputClass(!!errors.nombre)}`}
                  />
                  {errors.nombre && (
                    <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    className={`input-field ${inputClass(!!errors.email)}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="02 265-0117"
                    value={form.telefono}
                    onChange={(e) => setField('telefono', e.target.value)}
                    aria-invalid={!!errors.telefono}
                    className={`input-field ${inputClass(!!errors.telefono)}`}
                  />
                  {errors.telefono && (
                    <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">{errors.telefono}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="asunto" className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    value={form.asunto}
                    onChange={(e) => setField('asunto', e.target.value)}
                    aria-invalid={!!errors.asunto}
                    className={`input-field ${inputClass(!!errors.asunto)}`}
                  >
                    <option value="">Selecciona...</option>
                    {asuntos.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                  {errors.asunto && (
                    <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">{errors.asunto}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  value={form.mensaje}
                  onChange={(e) => setField('mensaje', e.target.value)}
                  aria-invalid={!!errors.mensaje}
                  className={`input-field resize-none ${inputClass(!!errors.mensaje)}`}
                />
                {errors.mensaje && (
                  <p className="mt-1.5 text-xs font-medium text-red-500" role="alert">{errors.mensaje}</p>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full px-8 py-4 text-base disabled:opacity-70 disabled:hover:-translate-y-0"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    role="status"
                    className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 text-sm font-medium ${
                      status === 'success'
                        ? 'border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300'
                        : 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={19} className="mt-0.5 shrink-0" />
                    )}
                    <span>{message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                Tus datos solo se usan para responder tu consulta. Nunca los compartimos.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}