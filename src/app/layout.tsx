import '../styles/globals.css';
import { ReactNode } from 'react';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amadeon.com.br'),
  title: {
    default: 'Karin Andrade Silveira – Desenvolvedora Front-end & Mobile',
    template: '%s | Karin Andrade Silveira',
  },
  description:
    'Portfólio moderno com foco em interfaces claras, fluidas e funcionais. Desenvolvedora Front-end & Mobile especializada em React, React Native, TypeScript, JavaScript e Flutter.',
  keywords: [
    'Karin Andrade Silveira',
    'Desenvolvedora Front-end',
    'Desenvolvedora Mobile',
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Flutter',
    'Frontend Developer',
    'Mobile Developer',
    'Portfolio',
    'Desenvolvedora Web',
  ],
  authors: [{ name: 'Karin Andrade Silveira' }],
  creator: 'Karin Andrade Silveira',
  publisher: 'Karin Andrade Silveira',
  applicationName: 'Portfólio de Karin Andrade Silveira',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js 14',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  category: 'technology',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A0B0D' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0B0D' },
  ],
  colorScheme: 'dark',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://amadeon.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://amadeon.com.br',
    siteName: 'Karin Andrade Silveira',
    title: 'Karin Andrade Silveira – Desenvolvedora Front-end & Mobile',
    description:
      'Portfólio moderno com foco em interfaces claras, fluidas e funcionais.',
    images: [
      {
        url: 'https://amadeon.com.br/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Karin Andrade Silveira – Desenvolvedora Front-end & Mobile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karin Andrade Silveira – Desenvolvedora Front-end & Mobile',
    description:
      'Portfólio moderno com foco em interfaces claras, fluidas e funcionais.',
    images: ['https://amadeon.com.br/opengraph.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Karin Andrade Silveira',
    jobTitle: 'Desenvolvedora Front-end & Mobile',
    url: 'https://amadeon.com.br',
    sameAs: [
      'https://github.com/AmadeonSilveira',
      'https://www.instagram.com/silveiiras',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Karin Andrade Silveira',
    url: 'https://amadeon.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://amadeon.com.br/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://amadeon.com.br/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projetos',
        item: 'https://amadeon.com.br/#projetos',
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  var theme = saved === 'light' || saved === 'dark' ? saved : system;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}