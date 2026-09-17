import type { Metadata } from 'next';
import { BookOpen, ClipboardCheck, FileText, FolderOpen, Lightbulb, Search } from 'lucide-react';
import TeacherPageShell, { SimpleCard } from '@/components/TeacherPageShell';

export const metadata: Metadata = { title: 'Recursos para docentes', description: 'Materiales, formatos y herramientas organizadas para el trabajo docente.' };

const resources = [
  ['Planificación', 'Formatos de planificación, cronogramas y seguimiento.', ClipboardCheck],
  ['Material pedagógico', 'Guías, lecturas y actividades para preparar tus clases.', BookOpen],
  ['Formatos institucionales', 'Actas, solicitudes y documentos de uso frecuente.', FileText],
  ['Ideas para el aula', 'Propuestas simples para enriquecer la experiencia educativa.', Lightbulb],
];

export default function RecursosPage() {
  return <TeacherPageShell eyebrow="Tu caja de herramientas" title="Recursos para docentes" description="Todo lo que necesitas para tu trabajo, organizado por temas y explicado de forma sencilla.">
    <div className="subpage-toolbar"><div><span className="section-eyebrow">Elige una categoría</span><h2>¿Qué estás buscando?</h2></div><div className="search-wrap"><Search size={17} /><input placeholder="Buscar recurso..." aria-label="Buscar recurso" /></div></div>
    <div className="subcards-grid">{resources.map(([title, text, Icon]) => <SimpleCard key={title as string} icon={Icon as typeof ClipboardCheck} title={title as string} text={text as string} href="/documentos" />)}</div>
    <div className="help-panel"><FolderOpen size={25} /><div><h2>¿No encuentras lo que necesitas?</h2><p>Escríbenos a coordinación y te ayudamos a ubicar el documento correcto.</p></div><a href="/soporte">Pedir ayuda</a></div>
  </TeacherPageShell>;
}
