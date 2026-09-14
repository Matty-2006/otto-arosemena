# 📘 Guía de Implementación - Escuela Otto Arosemena

Esta guía te ayudará a implementar y personalizar la página web de la escuela.

## 🚀 Pasos Iniciales

### 1. Instalación del Proyecto

```bash
# Clonar o descargar el proyecto
cd escuela-web

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
```

### 2. Configurar Variables de Entorno

Edita `.env.local` con los siguientes valores:

```env
# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# Correo electrónico
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASSWORD=tu_contraseña_app
EMAIL_FROM=17h00988@gmail.com

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://ottoaresemena.edu.ec
NEXT_PUBLIC_PHONE=(02) 265-0117
NEXT_PUBLIC_EMAIL=17h00988@gmail.com
```

### 3. Obtener Google Maps API Key

1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear un nuevo proyecto
3. Habilitar "Maps JavaScript API"
4. Crear credenciales (API Key)
5. Copiar la key a `.env.local`

## 🎨 Personalización

### Colores de la Escuela

Los colores están definidos en `tailwind.config.js`:

```js
colors: {
  primary: {
    600: '#0284c7',  // Azul
    700: '#0369a1',  // Azul oscuro
  },
  secondary: {
    600: '#16a34a',  // Verde
    700: '#15803d',  // Verde oscuro
  }
}
```

Para cambiar los colores, edita estos valores.

### Logo de la Escuela

1. Crear carpeta `public/images/`
2. Agregar `logo.png` de la escuela
3. Editar `components/sections/Header.tsx`:

```tsx
<Image
  src="/images/logo.png"
  alt="Logo Escuela"
  width={50}
  height={50}
/>
```

### Imagen del Hero

1. Reemplazar la imagen de fondo en `components/sections/Hero.tsx`
2. Usar imagen de la escuela con calidad alta
3. Optimizar imagen para web (recomendado: 1920x1080 JPG)

```tsx
backgroundImage: `url('/images/school-hero.jpg')`
```

### Actualizar Información de Contacto

Edita `lib/constants.ts`:

```ts
export const SCHOOL_INFO = {
  phone: '(02) 265-0117',
  email: '17h00988@gmail.com',
  address: 'Guayaquil, Ecuador',
  // ... otros datos
};
```

## 📝 Actualizar Contenido

### Misión y Visión

Edita `components/sections/MisionVision.tsx`:

```tsx
const cards = [
  {
    title: 'Misión',
    description: 'Tu misión aquí...',
  },
  // ...
];
```

### Información General

Edita `components/sections/Informacion.tsx`:

```tsx
const features = [
  {
    title: 'Tu característica',
    description: 'Descripción...',
  },
  // ...
];
```

### Testimonios

Edita `components/sections/Testimonios.tsx`:

```tsx
const testimonials = [
  {
    name: 'Juan Pérez',
    role: 'Padre de Familia',
    text: 'Mi testimonio aquí...',
    rating: 5,
  },
  // ...
];
```

## 🌐 SEO Optimization

### Meta Etiquetas

Edita `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Tu título aquí',
  description: 'Tu descripción aquí',
  keywords: 'tus, palabras, clave',
};
```

### Schema.org Markup

Agregar JSON-LD en el layout o secciones:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Escuela Otto Arosemena',
      // ... más datos
    }),
  }}
/>
```

## 💾 Formulario de Contacto

### Configurar Envío de Emails

1. Crear archivo `app/api/contact/route.ts`:

```ts
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre}`,
    text: mensaje,
    replyTo: email,
  });

  return Response.json({ success: true });
}
```

2. Actualizar `components/sections/Contacto.tsx` para llamar el API:

```ts
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## 🖼️ Galería de Imágenes

Edita `components/sections/Galeria.tsx`:

```tsx
const images = [
  {
    id: 1,
    title: 'Aula Moderna',
    image: '/images/aula1.jpg',
  },
  // ... más imágenes
];
```

## 🚀 Despliegue en Vercel

1. **Conectar GitHub**
   - Push proyecto a GitHub
   - Ir a [vercel.com](https://vercel.com)
   - Conectar cuenta GitHub

2. **Configurar Variables de Entorno**
   - En Vercel: Settings > Environment Variables
   - Agregar todas las variables de `.env.local`

3. **Dominio Personalizado**
   - Settings > Domains
   - Agregar dominio
   - Configurar DNS según instrucciones

4. **Deploy**
   - Presionar "Deploy"
   - Esperar a que compile
   - ¡Listo! Sitio en línea

## 🔐 Seguridad

- [ ] Cambiar todas las credenciales por defecto
- [ ] Usar HTTPS en producción
- [ ] Implementar rate limiting en API
- [ ] Validar y sanitizar inputs
- [ ] Usar CORS correctamente
- [ ] Mantener dependencias actualizadas

## 📊 Analytics

### Google Analytics

1. Crear cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtener Google Analytics ID
3. Agregar a `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Implementar script en `layout.tsx`

## ⚡ Optimización de Velocidad

- Optimizar imágenes (usar WebP)
- Lazy loading de componentes
- Code splitting automático de Next.js
- Comprimir CSS y JavaScript
- Usar CDN para archivos estáticos
- Implementar service workers

## 🔄 Mantenimiento

### Actualizar Dependencias

```bash
npm update
npm audit fix
```

### Revisar Logs

```bash
npm run build  # Verificar compilación
```

### Backup Regular

- Hacer backup de código en GitHub
- Guardar datos importantes
- Documentar cambios

## 🐛 Solución de Problemas

### Error en npm install

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails

```bash
npm run build --verbose
```

### Hot reload no funciona

```bash
npm run dev
# Esperar a que recompile
```

## 📚 Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Docs](https://vercel.com/docs)

## 💬 Soporte

Para preguntas o problemas:

- Email: 17h00988@gmail.com
- Teléfono: (02) 265-0117

---

**Última actualización**: Septiembre 2026
