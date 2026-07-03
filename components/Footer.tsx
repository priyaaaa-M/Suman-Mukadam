'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone, Heart, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Bridal Makeup',
  'Engagement Makeup',
  'Reception Makeup',
  'Party Makeup',
  'Editorial Makeup',
  'Photoshoot Makeup',
];

export default function Footer() {
  return (
    <footer className="bg-[#2D1F1A]">
      {/* CTA Banner */}
      <div className="relative overflow-hidden py-20 px-4 bg-[#5C4335]">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#C9A27E]/8 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#D9B8A7]/8 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-cormorant italic text-[#C9A27E] text-xl mb-3">Ready to look stunning?</p>
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-5 leading-tight">
            Let&apos;s Create Your<br />Dream Look
          </h2>
          <p className="font-dm text-white/60 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Whether it&apos;s your wedding day, a special event, or an editorial shoot — I&apos;m here to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#C9A27E] text-[#2D1F1A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-dm font-medium rounded-full hover:bg-[#DCC4A8] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A27E]/30"
          >
            Book Appointment
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-5 group">
              <span className="font-playfair text-2xl text-white group-hover:text-[#C9A27E] transition-colors duration-300">
                Suman Mukadam
              </span>
              <span className="font-cormorant italic text-[#C9A27E] text-sm tracking-widest uppercase mt-0.5">
                Makeup Artist
              </span>
            </Link>
            <p className="font-dm text-white/50 text-sm leading-[1.9] mb-6">
              Where Beauty Meets Artistry. Professional makeup artist based in Mumbai, creating timeless looks for life&apos;s most precious moments.
            </p>
            <div className="flex gap-2.5">
              {[
                {
                  href: 'https://www.instagram.com/makeup_suman_soul',
                  label: 'Instagram',
                  icon: <Instagram size={15} />,
                },
                {
                  href: 'https://wa.me/919999999999',
                  label: 'WhatsApp',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
                {
                  href: 'mailto:suman@makeupsumansouls.com',
                  label: 'Email',
                  icon: <Mail size={14} />,
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#C9A27E] hover:text-[#C9A27E] transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-white text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-dm text-white/50 text-sm hover:text-[#C9A27E] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-[#C9A27E] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-white text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="font-dm text-white/50 text-sm hover:text-[#C9A27E] transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-[#C9A27E] group-hover:w-3 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-white text-lg mb-5">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A27E] mt-0.5 shrink-0" />
                <span className="font-dm text-white/50 text-sm leading-relaxed">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={14} className="text-[#C9A27E] mt-0.5 shrink-0" />
                <a href="https://wa.me/919999999999" className="font-dm text-white/50 text-sm hover:text-[#C9A27E] transition-colors">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-[#C9A27E] mt-0.5 shrink-0" />
                <a href="mailto:suman@makeupsumansouls.com" className="font-dm text-white/50 text-sm hover:text-[#C9A27E] transition-colors">
                  suman@makeupsumansouls.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Instagram size={14} className="text-[#C9A27E] mt-0.5 shrink-0" />
                <a
                  href="https://www.instagram.com/makeup_suman_soul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm text-white/50 text-sm hover:text-[#C9A27E] transition-colors"
                >
                  @makeup_suman_soul
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-white/30 text-xs">
            © {new Date().getFullYear()} Suman Mukadam. All rights reserved.
          </p>
          <p className="font-dm text-white/30 text-xs flex items-center gap-1.5">
            Crafted with <Heart size={10} className="text-[#C9A27E] fill-[#C9A27E]" /> for beauty artistry
          </p>
          <p className="font-dm text-white/30 text-xs">
            Certified — Creative Makeup Hair Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
