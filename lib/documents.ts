// ============================================================
// DOCUMENTOS PARA DOCENTES
// ------------------------------------------------------------
// Edita esta lista para agregar o quitar documentos.
// Para cada documento:
//   - title: nombre que verá el docente
//   - description: para qué sirve (texto breve)
//   - file: el archivo que debe estar dentro de /public/documents
//           o déjalo en "" si el documento estará "Próximamente"
//   - category: una de: planificaciones | actas_y_formatos | circulares
//   - date: fecha de publicación
// ============================================================

export type DocumentItem = {
  id: string;
  title: string;
  description: string;
  file: string;
  category: string;
  date: string;
};

export const DOCUMENT_CATEGORIES = [
  { id: 'planificaciones', label: 'Planificaciones' },
  { id: 'actas_y_formatos', label: 'Actas y formatos' },
  { id: 'circulares', label: 'Circulares y memorandos' },
];

export const DOCUMENTS: DocumentItem[] = [
  {
    id: 'planificacion-microcurricular',
    title: 'Planificación microcurricular',
    description: 'Formato para elaborar la planificación semanal o por destrezas.',
    file: '/documents/01-planificacion-microcurricular.pdf',
    category: 'planificaciones',
    date: 'Septiembre 2026',
  },
  {
    id: 'planificacion-macrocurricular',
    title: 'Planificación anual (ejemplo)',
    description: 'Guía de planificación macrocurricular del año lectivo.',
    file: '',
    category: 'planificaciones',
    date: 'Próximamente',
  },
  {
    id: 'formato-actas-reunion',
    title: 'Formato de actas de reunión',
    description: 'Plantilla para registrar los acuerdos de las reuniones de grado y de área.',
    file: '/documents/02-formato-actas-reunion.pdf',
    category: 'actas_y_formatos',
    date: 'Septiembre 2026',
  },
  {
    id: 'formato-informes-academicos',
    title: 'Formato de informes académicos',
    description: 'Plantilla para los informes de avance y notas de los estudiantes.',
    file: '',
    category: 'actas_y_formatos',
    date: 'Próximamente',
  },
  {
    id: 'circular-informativa',
    title: 'Circular informativa',
    description: 'Circular tipo para comunicados a docentes y padres de familia.',
    file: '/documents/03-circular-informativa.pdf',
    category: 'circulares',
    date: 'Septiembre 2026',
  },
  {
    id: 'memorando-interno',
    title: 'Modelo de memorando',
    description: 'Formato de memorando interno para uso administrativo.',
    file: '',
    category: 'circulares',
    date: 'Próximamente',
  },
];

export type { DocumentItem as Documento };