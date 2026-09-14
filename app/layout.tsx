import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Preloader from '@/components/ui/Preloader';
import MobileActions from '@/components/ui/MobileActions';
import { SCHOOL_INFO } from '@/lib/constants';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://escuela-otto-arosemena.vercel.app';
const NAME = 'Escuela de Educación Básica Otto Arosemena Gómez';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} | Quito · Educación Inicial y Básica`,
    template: `%s | ${NAME}`,
  },
  description:
    'Institución educativa fiscal en Quito con más de 5 décadas de trayectoria. Educación inicial y educación general básica gratuita, con formación integral, valores y excelencia académica. Desde 1967 en la parroquia La Ferroviaria.',
  keywords: [
    'escuela Otto Arosemena',
    'escuela fiscal Quito',
    'educación básica Quito',
    'La Ferroviaria escuela',
    'educación inicial Quito',
    'matrículas escuela Quito',
    'educación gratuita',
    'colegio público Ecuador',
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
    title: `${NAME} | Quito · Educación Inicial y Básica`,
    description:
      'Educación pública de calidad en Quito. Educación inicial y educación general básica con formación integral, desde 1967 en La Ferroviaria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} | Quito`,
    description:
      'Educación inicial y básica gratuita en Quito. Excelencia académica y formación en valores desde 1967.',
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
          <Preloader />
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