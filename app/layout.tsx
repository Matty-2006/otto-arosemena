import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import MobileActions from '@/components/ui/MobileActions';
import { SCHOOL_INFO } from '@/lib/constants';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://escuela-otto-arosemena.vercel.app';
const NAME = 'Escuela de Educación Básica Otto Arosemena Gómez';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
    title: {
    default: `${NAME} | Centro docente`,
    template: `%s | ${NAME}`,
  },
  description:
    'Centro docente de la Escuela Otto Arosemena Gómez: recursos, agenda, planificación y soporte para profesores.',
  keywords: [
    'escuela Otto Arosemena',
    'escuela fiscal Quito',
    'educación básica Quito',
    'La Ferroviaria escuela',
    'educación inicial Quito',
    'portal docente Quito',
    'recursos para profesores',
    'planificación docente',
  ],
  applicationName: NAME,
  creator: NAME,
  publisher: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: SITE_URL,
    siteName: NAME,
    title: `${NAME} | Centro docente`,
    description:
      'Recursos, agenda y soporte para el equipo docente de la Escuela Otto Arosemena Gómez.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} | Centro docente`,
    description:
      'Espacio interno para profesores: recursos, agenda institucional y soporte.',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0369a1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: NAME,
    alternateName: 'Escuela Otto Arosemena Gómez',
    url: SITE_URL,
    foundingDate: '1967',
    telephone: SCHOOL_INFO.phone,
    email: SCHOOL_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SCHOOL_INFO.address,
      addressLocality: 'Quito',
      addressRegion: 'Pichincha',
      addressCountry: 'EC',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SCHOOL_INFO.coords.lat,
      longitude: SCHOOL_INFO.coords.lng,
    },
    sameAs: ['https://www.facebook.com/oag1967/', 'https://www.tiktok.com/@otto_arosemena_gomez'],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-blue-700 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Providers>
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
          <MobileActions />
          <div className="h-20 md:hidden" aria-hidden="true" />
          <ScrollToTop />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Providers>
      </body>
    </html>
  );
}
