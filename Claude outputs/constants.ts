// Información de la escuela
export const SCHOOL_INFO = {
  name: 'Escuela de Educación Básica Otto Arosemena Gómez',
  shortName: 'Escuela OA',
  acronym: 'OA',
  description: 'Educación de calidad, excelencia académica y formación integral',
  phone: '(02) 265-0117',
  email: '17h00988@gmail.com',
  address: 'Guayaquil, Ecuador',
  mapLink: 'https://maps.app.goo.gl/kARX5vQVnWCg8wXf6',
  year: 1967,
  website: 'https://ottoaresemena.edu.ec',
};

// Redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/oag1967/?locale=es_LA',
  tiktok: 'https://www.tiktok.com/@otto_arosemena_gomez?_r=1&_t=ZS-99iKMuCOFHw',
  instagram: '#',
  twitter: '#',
  youtube: '#',
  linkedIn: '#',
};

// Colores
export const COLORS = {
  primary: '#0369a1',
  secondary: '#15803d',
  accent: '#ffffff',
  dark: '#0f172a',
  light: '#f8f9fa',
};

// Horarios
export const SCHEDULE = {
  monday_friday: '7:00 AM - 4:00 PM',
  saturday: 'Cerrado',
  sunday: 'Cerrado',
};

// Navegación
export const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Misión y Visión', href: '#mision' },
  { label: 'Información', href: '#informacion' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

// Métodos de contacto
export const CONTACT_METHODS = [
  {
    type: 'phone',
    value: '(02) 265-0117',
    icon: '📞',
    action: 'tel:0226501170',
  },
  {
    type: 'email',
    value: '17h00988@gmail.com',
    icon: '✉️',
    action: 'mailto:17h00988@gmail.com',
  },
  {
    type: 'location',
    value: 'Guayaquil, Ecuador',
    icon: '📍',
    action: 'https://maps.app.goo.gl/kARX5vQVnWCg8wXf6',
  },
];

// Opciones de asunto para el formulario
export const CONTACT_SUBJECTS = [
  { value: 'inscripcion', label: 'Inscripción' },
  { value: 'informacion', label: 'Información General' },
  { value: 'becas', label: 'Becas y Ayudas' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'otro', label: 'Otro' },
];
