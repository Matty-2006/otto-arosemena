// Información de la escuela
export const SCHOOL_INFO = {
  name: 'Escuela de Educación Básica Otto Arosemena Gómez',
  shortName: 'Escuela Otto Arosemena Gómez',
  acronym: 'OA',
  description:
    'Educación de calidad, excelencia académica y formación integral',
  phone: '(02) 265-0117',
  phoneRaw: '+59322650117',
  email: '17h00988@gmail.com',
  address: 'Virgilio Castillo E4-11 y Hoppe Norton',
  parish: 'Parroquia La Ferroviaria',
  city: 'Quito, Ecuador',
  mapLink: 'https://maps.app.goo.gl/kARX5vQVnWCg8wXf6',
  mapEmbed:
    'https://www.google.com/maps?q=-0.253707,-78.516935&hl=es&z=17&output=embed',
  coords: { lat: -0.253707, lng: -78.516935 },
  year: 1967,
  website: 'https://escuela-otto-arosemena.vercel.app',
};

// Redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/oag1967/?locale=es_LA',
  tiktok: 'https://www.tiktok.com/@otto_arosemena_gomez?_r=1&_t=ZS-99iKMuCOFHw',
  email: 'mailto:17h00988@gmail.com',
  phone: 'tel:+59322650117',
};

// Horarios
export const SCHEDULE = {
  weekdays: 'Lunes a Viernes: 7:00 AM – 4:00 PM',
  saturday: 'Sábados: Cerrado',
  sunday: 'Domingos: Cerrado',
};

// Navegación (simple, para todos los públicos)
// anchor=true: sección dentro de la página de inicio · anchor=false: subpágina
export const NAV_ITEMS = [
  { label: 'Inicio', href: '/', anchor: false },
  { label: 'La Escuela', href: '#acerca', anchor: true },
  { label: 'Documentos', href: '/documentos', anchor: false },
  { label: 'Autoridades', href: '/autoridades', anchor: false },
  { label: 'Contacto', href: '#contacto', anchor: true },
];

// Niveles educativos (Educación General Básica ecuatoriana)
export const NIVELES = [
  {
    nivel: 'Inicial',
    detalle: 'Inicial 1 y 2',
    edad: '3 – 5 años',
    descripcion:
      'Primer contacto con la vida escolar. Desarrollamos habilidades socioafectivas, motricidad y lenguaje a través del juego y la exploración.',
    icon: 'sprout',
  },
  {
    nivel: 'Preparatoria',
    detalle: '1.er grado',
    edad: '5 – 6 años',
    descripcion:
      'Inicio del proceso lecto-escritor y matemático. Fomentamos la curiosidad, la creatividad y los hábitos de autonomía.',
    icon: 'book',
  },
  {
    nivel: 'Básica Elemental',
    detalle: '2.º – 4.º grado',
    edad: '6 – 8 años',
    descripcion:
      'Consolidación de la lectura, escritura y razonamiento matemático. Formación en valores y trabajo colaborativo.',
    icon: 'pen',
  },
  {
    nivel: 'Básica Media',
    detalle: '5.º – 7.º grado',
    edad: '8 – 11 años',
    descripcion:
      'Ampliación del pensamiento crítico, la investigación y la expresión. Introducción a la tecnología y las ciencias.',
    icon: 'flask',
  },
  {
    nivel: 'Básica Superior',
    detalle: '8.º – 10.º grado',
    edad: '11 – 14 años',
    descripcion:
      'Preparación académica de excelencia para la educación secundaria. Proyectos, liderazgo y ciudadanía responsable.',
    icon: 'rocket',
  },
];