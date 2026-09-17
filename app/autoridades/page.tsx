import type { Metadata } from 'next';
import { Mail, Phone, UserRound } from 'lucide-react';
import TeacherPageShell from '@/components/TeacherPageShell';
import { SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = { title: 'Autoridades', description: 'Información de contacto de las autoridades de la institución para el equipo docente.' };
const areas = [
  ['Rectorado', 'Coordinación institucional', 'Para asuntos generales y decisiones institucionales.'],
  ['Coordinación académica', 'Planificación y seguimiento', 'Para planificaciones, reuniones y acompañamiento pedagógico.'],
  ['Secretaría', 'Documentos y comunicación', 'Para formatos, certificados y comunicaciones internas.'],
];
export default function AutoridadesPage() { return <TeacherPageShell eyebrow="Comunidad institucional" title="Autoridades" description="Elige el área correcta para recibir ayuda. Si no sabes a quién escribir, puedes llamar a la institución.">
  <div className="subcards-grid">{areas.map(([name, role, text]) => <article className="directory-card" key={name}><div className="directory-avatar"><UserRound size={24} /></div><span>{role}</span><h2>{name}</h2><p>{text}</p><a href={SOCIAL_LINKS.email}><Mail size={15} /> Escribir por correo</a></article>)}</div>
  <div className="help-panel"><Phone size={25} /><div><h2>Contacto institucional</h2><p>{SCHOOL_INFO.phone} · {SCHOOL_INFO.email}</p></div><a href={SOCIAL_LINKS.phone}>Llamar ahora</a></div>
</TeacherPageShell>; }
