import type { Metadata } from 'next';
import { CalendarDays, Clock3, MapPin, Users } from 'lucide-react';
import TeacherPageShell from '@/components/TeacherPageShell';

export const metadata: Metadata = { title: 'Agenda docente', description: 'Reuniones, actividades y fechas importantes de la comunidad docente.' };
const events = [
  ['18 SEP', 'Consejo académico', '08:00 – 09:30', 'Sala de reuniones', 'Reunión'],
  ['20 SEP', 'Entrega de planificaciones', 'Hasta las 16:00', 'Coordinación académica', 'Importante'],
  ['24 SEP', 'Reunión de área', '10:00 – 11:00', 'Aula de profesores', 'Equipo'],
  ['30 SEP', 'Cierre de mes', 'Jornada completa', 'Institución', 'Institucional'],
];
export default function AgendaPage() { return <TeacherPageShell eyebrow="Organiza tu semana" title="Agenda docente" description="Una vista clara de las reuniones y fechas que no debes olvidar. La información importante, sin complicaciones.">
  <div className="agenda-page-list">{events.map(([date, title, time, place, tag]) => <article className="agenda-page-row" key={title}><div className="agenda-date"><strong>{date.split(' ')[0]}</strong><span>{date.split(' ')[1]}</span></div><div className="agenda-page-copy"><span>{tag}</span><h2>{title}</h2><div><span><Clock3 size={15} /> {time}</span><span><MapPin size={15} /> {place}</span></div></div><Users size={21} className="agenda-muted" /></article>)}</div>
  <div className="simple-cta"><CalendarDays size={24} /><div><h2>¿Tienes una fecha para compartir?</h2><p>Comunícala a coordinación para agregarla a la agenda institucional.</p></div><a href="/soporte">Contactar</a></div>
</TeacherPageShell>; }
