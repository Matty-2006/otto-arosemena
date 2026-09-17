import type { Metadata } from 'next';
import { Mail, ShieldCheck, UserRound } from 'lucide-react';
import TeacherPageShell from '@/components/TeacherPageShell';

export const metadata: Metadata = { title: 'Directorio institucional', description: 'Directorio de coordinación y autoridades para el equipo docente.' };
const people = [['Rectorado', 'Autoridad institucional', 'Coordinación general'], ['Coordinación académica', 'Planificación y seguimiento', 'Área académica'], ['Secretaría', 'Documentos y trámites internos', 'Atención institucional']];
export default function DirectorioPage() { return <TeacherPageShell eyebrow="A quién acudir" title="Directorio institucional" description="Encuentra rápidamente el área correcta para cada consulta. Si tienes dudas, soporte puede orientarte."><div className="subcards-grid">{people.map(([area, role, detail]) => <article className="directory-card" key={area}><div className="directory-avatar"><UserRound size={24} /></div><span>{detail}</span><h2>{area}</h2><p>{role}</p><a href="mailto:17h00988@gmail.com"><Mail size={15} /> Escribir a esta área</a></article>)}</div><div className="help-panel"><ShieldCheck size={25} /><div><h2>Información para el equipo docente</h2><p>Este espacio es interno y está pensado para facilitar tu jornada.</p></div></div></TeacherPageShell>; }
