# 🏫 Escuela de Educación Básica Otto Arosemena Gómez

Página web oficial profesional de la Escuela de Educación Básica Otto Arosemena Gómez, desarrollada con tecnologías modernas y mejores prácticas de desarrollo web.

## 🎯 Características

- ✅ Landing page profesional y elegante
- ✅ Secciones de Misión y Visión
- ✅ Información general de la escuela
- ✅ Galería de instalaciones
- ✅ Sección de testimonios con carrusel
- ✅ Ubicación interactiva con Google Maps
- ✅ Formulario de contacto funcional
- ✅ Header estático con navegación suave
- ✅ Footer completo con información de contacto
- ✅ Botón de volver arriba
- ✅ Tema oscuro/claro (Dark Mode)
- ✅ Animaciones suaves y profesionales
- ✅ Diseño completamente responsivo
- ✅ Optimización SEO
- ✅ Velocidad de carga rápida
- ✅ Accesibilidad WCAG

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15
- **Lenguaje**: TypeScript
- **UI**: React 19
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion & GSAP
- **Scroll Suave**: Lenis
- **Mapas**: React Leaflet
- **Validación de Formularios**: React Hook Form
- **Iconos**: Lucide React
- **Control de Versiones**: Git
- **Hosting**: Vercel

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Git

## 🚀 Instalación Local

1. **Clonar el repositorio**
```bash
git clone <repositorio-url>
cd escuela-web
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
# Editar .env.local con tus configuraciones
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint
```

## 🌐 Despliegue en Vercel

1. **Push a GitHub**
```bash
git add .
git commit -m "Deployment inicial"
git push origin main
```

2. **Conectar con Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Conectar tu cuenta de GitHub
   - Seleccionar este repositorio
   - Configurar variables de entorno
   - Hacer deploy

3. **Configurar dominio personalizado**
   - En Vercel, ir a Settings > Domains
   - Agregar tu dominio personalizado
   - Seguir las instrucciones de DNS

## 📝 Estructura del Proyecto

```
escuela-web/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   └── providers.tsx       # Providers de contexto
├── components/
│   ├── sections/           # Secciones principales
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MisionVision.tsx
│   │   ├── Informacion.tsx
│   │   ├── Galeria.tsx
│   │   ├── Testimonios.tsx
│   │   ├── Ubicacion.tsx
│   │   ├── Contacto.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Componentes reutilizables
│       └── ScrollToTop.tsx
├── lib/                    # Utilidades
├── public/                 # Archivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Colores de la Escuela

- **Azul Primario**: `#0369a1`
- **Verde Secundario**: `#15803d`
- **Blanco Accent**: `#ffffff`

## ⚙️ Configuración Importante

### Google Maps
1. Crear API key en [Google Cloud Console](https://console.cloud.google.com/)
2. Habilitar Maps JavaScript API
3. Agregar API key a `.env.local`

### Contacto por Email
1. Configurar credenciales de correo en `.env.local`
2. Implementar backend para procesar formularios (API Route)

### SEO
- Metadatos configurados en `layout.tsx`
- Open Graph tags incluidos
- Robots.txt y sitemap recomendados

## 📱 Responsiveness

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Grandes pantallas (1280px+)

## 🔍 SEO Optimizado

- ✅ Meta etiquetas
- ✅ Open Graph
- ✅ Sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Schema.org markup
- ✅ Heading hierarchy
- ✅ Alt text en imágenes
- ✅ Fast Core Web Vitals

## 🎯 Mejoras Futuras

- [ ] Blog de noticias
- [ ] Portal de estudiantes
- [ ] Sistema de inscripción en línea
- [ ] Agenda de eventos
- [ ] Galería de fotos dinámicas
- [ ] Chat en vivo
- [ ] Sistema de notificaciones
- [ ] Multi-idioma

## 🐛 Reportar Problemas

Si encuentras algún bug, por favor abre un issue en el repositorio.

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver el archivo LICENSE para más detalles.

## 📞 Contacto

**Escuela de Educación Básica Otto Arosemena Gómez**
- 📱 Teléfono: (02) 265-0117
- 📧 Email: 17h00988@gmail.com
- 📍 Ubicación: Guayaquil, Ecuador
- 👍 Facebook: [@oag1967](https://www.facebook.com/oag1967/?locale=es_LA)

## 👨‍💻 Desarrollado por

Creado con ❤️ para proporcionar educación de calidad.

---

**Última actualización**: Septiembre 2026
