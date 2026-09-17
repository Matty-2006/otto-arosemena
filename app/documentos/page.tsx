import type { Metadata } from 'next';
import { Download, FileText, HelpCircle } from 'lucide-react';
import TeacherPageShell from '@/components/TeacherPageShell';
import { DOCUMENTS, DOCUMENT_CATEGORIES } from '@/lib/documents';
import { SCHOOL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = { title: 'Documentos para docentes', description: 'Formatos, circulares y documentos de trabajo para profesores.' };

export default function DocumentosPage() {
  return <TeacherPageShell eyebrow="Formatos listos para usar" title="Documentos para docentes" description="Descarga formatos y documentos de trabajo desde un solo lugar. Si un archivo no está disponible, soporte puede ayudarte.">
    <div className="document-help"><FileText size={23} /><div><b>Cómo descargar:</b><span>Elige un documento y toca el botón azul “Descargar”.</span></div></div>
    <div className="document-groups">{DOCUMENT_CATEGORIES.map((category) => { const docs = DOCUMENTS.filter((doc) => doc.category === category.id); if (!docs.length) return null; return <section key={category.id}><div className="document-group-title"><span className="section-eyebrow">Categoría</span><h2>{category.label}</h2></div><div className="document-grid">{docs.map((doc) => <article className="document-card" key={doc.id}><div className="document-card-top"><span className="document-icon"><FileText size={21} /></span><span>{doc.date}</span></div><h3>{doc.title}</h3><p>{doc.description}</p>{doc.file ? <a className="document-download" href={doc.file} download><Download size={17} /> Descargar</a> : <span className="document-disabled">Próximamente</span>}</article>)}</div></section>; })}</div>
    <div className="help-panel"><HelpCircle size={25} /><div><h2>¿No aparece un documento?</h2><p>Escríbenos a {SCHOOL_INFO.email} o llama al {SCHOOL_INFO.phone}.</p></div><a href={SOCIAL_LINKS.email}>Pedir ayuda</a></div>
  </TeacherPageShell>;
}
