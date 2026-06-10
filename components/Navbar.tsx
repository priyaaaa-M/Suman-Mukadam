'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-beige'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-playfair text-xl font-600 tracking-tight text-dark group-hover:text-gold transition-colors duration-300">
                Suman Mukadam
              </span>
              <span className="font-cormorant italic text-xs tracking-[0.2em] text-gold uppercase">
                Makeup Artist
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-dm text-sm tracking-wider uppercase transition-colors duration-300 group ${
                    pathname === link.href ? 'text-gold' : 'text-dark hover:text-gold'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Icons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://www.instagram.com/makeup_suman_soul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-gold transition-colors duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <Link
                href="/contact"
                className="bg-dark text-ivory px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-dm font-500 rounded-full hover:bg-mocha transition-all duration-300 hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-dark p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8 -mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`font-playfair text-3xl font-500 transition-colors ${
                      pathname === link.href ? 'text-gold' : 'text-dark hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="/contact"
                  className="mt-4 bg-dark text-ivory px-8 py-3 text-sm tracking-[0.15em] uppercase font-dm rounded-full inline-block"
                >
                  Book Now
                </Link>
              </motion.div>
              <div className="flex items-center gap-2 text-gold font-cormorant italic text-lg">
                @makeup_suman_soul
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
