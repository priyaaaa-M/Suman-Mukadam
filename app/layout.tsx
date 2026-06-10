'use client';

import './globals.css';
import { Playfair_Display, Great_Vibes, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-greatvibes',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${greatVibes.variable} ${inter.variable}`}>
      <head>
        <title>Suman Mukadam — Makeup Artist Mumbai</title>
        <meta name="description" content="Professional makeup artist in Mumbai. Bridal, engagement, party and editorial makeup. Where Beauty Meets Artistry." />
        <meta property="og:title" content="Suman Mukadam — Makeup Artist Mumbai" />
        <meta property="og:description" content="Professional makeup artist in Mumbai specializing in bridal, engagement, party and editorial makeup." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-ivory text-dark antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
