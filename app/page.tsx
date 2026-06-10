'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MapPin, Play, Star, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const stats = [
  { value: '200+', label: 'Happy Brides' },
  { value: '500+', label: 'Looks Created' },
  { value: '5+', label: 'Years Experience' },
];

const testimonials = [
  {
    name: 'Priya Sharma', role: 'Bride',
    text: 'Suman transformed me into the most beautiful version of myself on my wedding day. Every detail was perfection.',
    rating: 5, img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ananya Patel', role: 'Editorial Client',
    text: 'The best makeup artist in Mumbai. Her attention to detail and understanding of my vision was absolutely unmatched.',
    rating: 5, img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Shreya Nair', role: 'Engagement Makeup',
    text: 'Absolutely flawless! I received so many compliments. Suman is truly an artist who deeply loves her craft.',
    rating: 5, img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const galleryImages = [
  'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/2132543/pexels-photo-2132543.jpeg?auto=compress&cs=tinysrgb&w=500',
  'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500',
];

/* ── Thin face icon SVG (like reference) ── */
function FaceIcon() {
  return (
    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="text-[#C9A27E]">
      <ellipse cx="16" cy="18" rx="10" ry="13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 28 C10 35 22 35 22 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 16 C12 14 14 13 16 13 C18 13 20 14 20 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
function DiamondIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#C9A27E]">
      <path d="M16 4 L28 14 L16 28 L4 14 Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 14 L28 14" stroke="currentColor" strokeWidth="1" />
      <path d="M10 14 L16 4 M22 14 L16 4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="text-[#C9A27E]">
      <rect x="2" y="7" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="17" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 7 L14 2 L22 2 L24 7" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
function BrushIcon() {
  return (
    <svg width="28" height="40" viewBox="0 0 28 40" fill="none" className="text-[#C9A27E]">
      <path d="M14 4 L14 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 22 C8 22 10 20 14 20 C18 20 20 22 20 22 L18 30 C18 33 16 35 14 35 C12 35 10 33 10 30 Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

const serviceCards = [
  {
    icon: <FaceIcon />,
    title: 'Bridal Makeup',
    desc: 'Timeless looks for your most precious moments.',
    href: '/services',
  },
  {
    icon: <DiamondIcon />,
    title: 'Party & Occasion',
    desc: 'Glam, chic or subtle – you, but elevated.',
    href: '/services',
  },
  {
    icon: <CameraIcon />,
    title: 'Editorial & Shoots',
    desc: 'Creative makeup for camera-ready magic.',
    href: '/services',
  },
  {
    icon: <BrushIcon />,
    title: 'Classes & Workshops',
    desc: 'Learn, create and grow your makeup skills.',
    href: '/about',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Spacer to push content below the overlapping strip */}
      <div className="h-24 bg-[#F8F3EE]" />


      {/* TRANSFORMATIONS */}
      <section className="py-24 lg:py-32 bg-[#EFE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">The Results Speak</p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#2D1F1A] mb-4">Featured Transformations</h2>
            <p className="font-dm text-[#5C4335]/60 text-sm max-w-sm mx-auto">
              Slide to reveal the magic. Every look crafted with precision and love.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FadeIn delay={0.1}><BeforeAfterSlider
              before="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600"
              after="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600"
              label="Bridal Transformation" /></FadeIn>
            <FadeIn delay={0.2}><BeforeAfterSlider
              before="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600"
              after="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600"
              label="Editorial Look" /></FadeIn>
            <FadeIn delay={0.3}><BeforeAfterSlider
              before="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
              after="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600"
              label="Party Glam" /></FadeIn>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 lg:py-32 bg-[#F8F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-cormorant italic text-[#C9A27E] text-xl mb-1">My Portfolio</p>
              <h2 className="font-playfair text-4xl lg:text-5xl text-[#2D1F1A]">Gallery</h2>
            </div>
            <Link href="/gallery"
              className="inline-flex items-center gap-2 text-[11px] font-dm tracking-[0.18em] uppercase text-[#5C4335] hover:text-[#C9A27E] transition-colors border-b border-current pb-0.5">
              View All <ArrowRight size={13} />
            </Link>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={img} delay={i * 0.07}>
                <Link href="/gallery" className="group relative block overflow-hidden rounded-xl aspect-square">
                  <Image src={img} alt={`Gallery ${i + 1}`} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#2D1F1A]/0 group-hover:bg-[#2D1F1A]/15 transition-all duration-300" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-[#EFE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">What They Say</p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#2D1F1A]">Client Love</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-[#EFE5DC] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} size={13} className="text-[#C9A27E] fill-[#C9A27E]" />
                    ))}
                  </div>
                  <p className="font-cormorant italic text-[#2D1F1A]/80 text-lg leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#EFE5DC]">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image src={t.img} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-playfair text-[#2D1F1A] text-sm">{t.name}</p>
                      <p className="font-dm text-xs text-[#C9A27E]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="text-center mt-10">
            <Link href="/testimonials"
              className="inline-flex items-center gap-2 text-[11px] font-dm tracking-[0.18em] uppercase text-[#5C4335] hover:text-[#C9A27E] transition-colors border-b border-current pb-0.5">
              Read More Stories <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="font-cormorant italic text-[#C9A27E] text-xl mb-1">Follow Along</p>
              <h2 className="font-playfair text-3xl lg:text-4xl text-[#2D1F1A]">@makeup_suman_soul</h2>
            </div>
            <a href="https://www.instagram.com/makeup_suman_soul" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-dm tracking-[0.18em] uppercase text-[#5C4335] hover:text-[#C9A27E] transition-colors border-b border-current pb-0.5">
              Follow on Instagram <ArrowRight size={13} />
            </a>
          </FadeIn>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
            {[...galleryImages,
              'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=400',
            ].map((img, i) => (
              <motion.a key={`ig-${i}`}
                href="https://www.instagram.com/makeup_suman_soul" target="_blank" rel="noopener noreferrer"
                className="relative flex-shrink-0 w-40 h-52 rounded-xl overflow-hidden group"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.02 }}>
                <Image src={img} alt="Instagram" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#2D1F1A]/0 group-hover:bg-[#2D1F1A]/25 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-white/25 backdrop-blur flex items-center justify-center">
                    <Play size={12} fill="white" className="text-white ml-0.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
