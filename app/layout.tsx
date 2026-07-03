import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Great_Vibes, DM_Sans } from 'next/font/google';
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

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suman Mukadam — Makeup Artist Mumbai',
  description: 'Professional makeup artist in Mumbai. Bridal, engagement, party and editorial makeup. Where Beauty Meets Artistry.',
  openGraph: {
    title: 'Suman Mukadam — Makeup Artist Mumbai',
    description: 'Professional makeup artist in Mumbai specializing in bridal, engagement, party and editorial makeup.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${greatVibes.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#F8F3EE] text-[#2D1F1A] antialiased" style={{ fontFamily: 'var(--font-dm), DM Sans, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
