import '../styles/globals.css';
import { ReactNode } from 'react';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Karin Andrade Silveira — Desenvolvedora Front-end & Mobile',
    template: '%s | Karin Andrade Silveira',
  },
  description: 'Portfólio profissional de Karin Andrade Silveira, desenvolvedora Front-end & Mobile especializada em React, React Native, TypeScript e interfaces modernas.',
  keywords: [
    'Karin Andrade Silveira',
    'Desenvolvedora Front-end',
    'Desenvolvedora Mobile',
    'React',
    'React Native',
    'TypeScript',
    'JavaScript',
    'Frontend Developer',
    'Mobile Developer',
  ],
  openGraph: {
    type: 'website',
    url: 'https://seu-dominio.com',
    title: 'Karin Andrade Silveira — Desenvolvedora Front-end & Mobile',
    description: 'Portfólio profissional de Karin Andrade Silveira, desenvolvedora Front-end & Mobile especializada em React, React Native, TypeScript e interfaces modernas.',
    siteName: 'Karin Andrade Silveira',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Karin Andrade Silveira — Front-end e Mobile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karin Andrade Silveira — Desenvolvedora Front-end & Mobile',
    description: 'Portfólio profissional de Karin Andrade Silveira, desenvolvedora Front-end & Mobile especializada em React, React Native, TypeScript e interfaces modernas.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://seu-dominio.com',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}