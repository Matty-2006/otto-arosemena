'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  FolderOpen,
  Headphones,
  Lightbulb,
  Mail,
  MessageSquareText,
  MapPin,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import { SCHOOL_INFO } from '@/lib/constants';
import Reveal from '@/components/ui/Reveal';

const quickLinks = [
  { label: 'Planificación', detail: 'Formatos y cronogramas', icon: ClipboardCheck, tone: 'blue' },
  { label: 'Repositorio', detail: 'Recursos compartidos', icon: FolderOpen, tone: 'violet' },
  { label: 'Calendario', detail: 'Agenda institucional', icon: CalendarDays, tone: 'amber' },
  { label: 'Soporte', detail: 'Estamos para ayudarte', icon: Headphones, tone: 'green' },
];

const updates = [
  { type: 'Reunión', title: 'Consejo académico · Septiembre', date: '18 SEP', tag: 'Mañana', tone: 'blue' },
  { type: 'Recurso nuevo', title: 'Guía de evaluación formativa', date: '16 SEP', tag: 'Reciente', tone: 'violet' },
  { type: 'Recordatorio', title: 'Entrega de planificaciones', date: '20 SEP', tag: 'Pendiente', tone: 'amber' },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  }

  const filteredUpdates = updates.filter((item) =>
    `${item.type} ${item.title}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="teacher-portal">
      <section id="inicio" className="portal-hero">
        <div className="portal-hero-photo" aria-hidden="true" />
        <div className="portal-hero-photo-overlay" aria-hidden="true" />
        <div className="portal-orb portal-orb-one" />
        <div className="portal-orb portal-orb-two" />
        <div className="container-site relative z-10 pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="portal-kicker">
                <Sparkles size={15} /> Espacio privado para docentes
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7 }} className="portal-title">
                Tu trabajo mueve<br /><span>toda la escuela.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .6 }} className="portal-lede">
                Un centro claro y tranquilo para organizar tu jornada, encontrar recursos y mantenerte al día con la comunidad docente Otto Arosemena Gómez.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .6 }} className="flex flex-wrap gap-3">
                <a href="#recursos" className="portal-button portal-button-primary">Explorar recursos <ArrowUpRight size={18} /></a>
                <a href="#agenda" className="portal-button portal-button-soft">Ver agenda <CalendarDays size={18} /></a>
              </motion.div>
              <div className="portal-trust-row"><span className="status-dot" /> Portal docente activo <span className="portal-divider" /> Actualizado hoy · 08:40</div>
            </div>
            <motion.div initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .2, duration: .7 }} className="hero-dashboard-card">
              <div className="dashboard-card-top"><div><span className="mini-label">Buenos días, equipo</span><h2>Tu panel de hoy</h2></div><div className="live-chip"><span /> En línea</div></div>
              <div className="focus-card"><div className="focus-icon"><Lightbulb size={21} /></div><div><span className="mini-label">Enfoque recomendado</span><p>Preparar la reunión de área</p><small>12 min estimados · 3 documentos</small></div><ChevronRight size={19} className="ml-auto text-slate-400" /></div>
              <div className="dashboard-metrics"><div><strong>06</strong><span>Tareas activas</span></div><div><strong>03</strong><span>Reuniones</span></div><div><strong>12</strong><span>Recursos nuevos</span></div></div>
              <div className="progress-line"><span style={{ width: '68%' }} /></div><p className="progress-copy"><b>68%</b> de tu semana organizada</p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container-site portal-main">
        <Reveal><section id="recursos" className="portal-section quick-section">
          <div className="section-heading"><div><span className="section-eyebrow">Todo en un solo lugar</span><h2>Accesos rápidos</h2></div><p>Menos tiempo buscando.<br />Más tiempo enseñando.</p></div>
          <div className="quick-grid">{quickLinks.map(({ label, detail, icon: Icon, tone }, index) => <motion.a whileHover={{ y: -5 }} transition={{ duration: .2 }} href="#agenda" key={label} className={`quick-card quick-${tone}`}><div className="quick-icon"><Icon size={22} /></div><div><h3>{label}</h3><p>{detail}</p></div><span className="quick-index">0{index + 1}</span><ArrowUpRight size={18} className="quick-arrow" /></motion.a>)}</div>
        </section></Reveal>

        <Reveal delay={0.05}><section id="agenda" className="portal-section agenda-section">
          <div className="section-heading"><div><span className="section-eyebrow">Tu semana, en contexto</span><h2>Actividad reciente</h2></div><div className="search-wrap"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar actividad..." aria-label="Buscar actividad" /></div></div>
          <div className="activity-layout"><div className="activity-list">{filteredUpdates.length ? filteredUpdates.map((item) => <a href="#contacto" className="activity-row" key={item.title}><div className={`activity-icon activity-${item.tone}`}><Bell size={19} /></div><div className="activity-copy"><span>{item.type}</span><h3>{item.title}</h3></div><div className="activity-date"><strong>{item.date}</strong><small>{item.tag}</small></div><ChevronRight size={18} className="text-slate-300" /></a>) : <div className="empty-state"><Search size={25} /><p>No encontramos actividades con ese término.</p></div>}</div><aside className="quote-card"><MessageSquareText size={24} /><p>“La colaboración entre docentes transforma las posibilidades de cada estudiante.”</p><span>— Comunidad docente OAG</span></aside></div>
        </section></Reveal>

        <section className="portal-section resources-strip"><div className="resource-copy"><span className="section-eyebrow">Caja de herramientas</span><h2>Recursos que te acompañan.</h2><p>Plantillas, protocolos y materiales institucionales listos para usar, compartir y mejorar.</p><a href="#contacto" className="text-link">Ir al repositorio <ArrowUpRight size={16} /></a></div><div className="resource-stack"><div className="stack-card stack-back"><FileText size={18} /> Protocolo institucional</div><div className="stack-card stack-mid"><BookOpen size={18} /> Material pedagógico</div><div className="stack-card stack-front"><FolderOpen size={20} /><span><b>Repositorio OAG</b><small>24 recursos disponibles</small></span><ArrowUpRight size={17} className="ml-auto" /></div></div></section>

        <section id="contacto" className="portal-section contact-section"><div className="contact-copy"><span className="section-eyebrow">Estamos contigo</span><h2>¿Necesitas una mano?</h2><p>Escribe a coordinación o déjanos tu correo para recibir los avisos importantes del centro docente.</p><div className="contact-meta"><span><Mail size={16} /> 17h00988@gmail.com</span><span><Clock3 size={16} /> Lun–Vie · 07:00–16:00</span></div></div><form onSubmit={handleSubmit} className="contact-form"><label htmlFor="teacher-email">Tu correo institucional</label><div className="form-row"><input id="teacher-email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }} placeholder="nombre@escuela.edu.ec" required /><button type="submit">Enviar <ArrowUpRight size={17} /></button></div>{status === 'error' && <p className="form-message error">Revisa el formato de tu correo.</p>}{status === 'success' && <p className="form-message success"><CheckCircle2 size={16} /> ¡Listo! Te contactaremos pronto.</p>}</form></section>

        <section className="portal-section location-section"><div><span className="section-eyebrow">Estamos aquí</span><h2>Ubicación de la institución</h2><p>Encuentra fácilmente la escuela en La Ferroviaria. Si vas a visitarnos, puedes abrir la ruta desde tu teléfono.</p><a className="text-link" href={SCHOOL_INFO.mapLink} target="_blank" rel="noreferrer">Abrir en Google Maps <ArrowUpRight size={16} /></a></div><div className="map-card"><iframe title="Ubicación de la Escuela Otto Arosemena Gómez" src={SCHOOL_INFO.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

        <div className="portal-footer-note"><Users size={16} /> Comunidad docente Otto Arosemena Gómez <span>·</span> Quito, Ecuador</div>
      </main>
    </div>
  );
}
