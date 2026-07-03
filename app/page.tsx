'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

function FadeIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
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
  { value: '5.0', label: 'Avg. Rating' },
];

const testimonials = [
  {
    name: 'Priya Sharma', role: 'Bride',
    text: 'Suman transformed me into the most beautiful version of myself on my wedding day. Every detail was perfection.',
    rating: 5, img: '/images/avatar-1.jpg',
  },
  {
    name: 'Ananya Patel', role: 'Editorial Client',
    text: 'The best makeup artist in Mumbai. Her attention to detail and understanding of my vision was absolutely unmatched.',
    rating: 5, img: '/images/avatar-2.jpg',
  },
  {
    name: 'Shreya Nair', role: 'Engagement Makeup',
    text: 'Absolutely flawless! I received so many compliments. Suman is truly an artist who deeply loves her craft.',
    rating: 5, img: '/images/avatar-3.jpg',
  },
];

const galleryImages = [
  { src: '/images/suman-2.jpg', label: 'Suman — Portrait' },
  { src: '/images/suman-7.jpg', label: 'Bridal Client Look' },
  { src: '/images/suman-4.jpg', label: 'Smoky Eye Detail' },
  { src: '/images/suman-3.jpg', label: 'Dramatic Red Lip' },
  { src: '/images/suman-9.jpg', label: 'Before & After' },
  { src: '/images/bridal-1.jpg', label: 'Bridal Elegance' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Service bar padding — bar is 56px tall and sits at bottom of hero */}
      <div className="h-14 bg-[#F8F3EE] hidden lg:block" />

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-[#2D1F1A] py-3.5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex items-center gap-8 pr-8">
              {['Bridal Makeup', 'Engagement Looks', 'Editorial & Shoots', 'Party Glam', 'Photoshoot Ready', 'Classes & Workshops', 'Home Visits · Mumbai', 'Certified Artist'].map((item) => (
                <span key={item} className="flex items-center gap-4 whitespace-nowrap font-cormorant italic text-[#C9A27E] text-lg">
                  {item}
                  <span className="text-[#C9A27E]/40 not-italic font-dm text-xs">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="py-16 bg-[#F8F3EE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#EFE5DC]">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="text-center py-6 lg:py-0 lg:px-8 first:pt-0 last:pb-0 lg:first:pt-0">
                <div className="font-playfair text-4xl lg:text-5xl text-[#C9A27E] mb-1">{s.value}</div>
                <div className="font-dm text-xs text-[#5C4335]/55 uppercase tracking-widest">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TRANSFORMATIONS ── */}
      <section className="py-24 lg:py-32 bg-[#EFE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-3">The Results Speak</p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#2D1F1A] mb-5">Featured Transformations</h2>
            <p className="font-dm text-[#5C4335]/60 text-sm max-w-sm mx-auto leading-relaxed">
              Slide to reveal the magic. Every look crafted with precision and love.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ScaleIn delay={0.1}>
              <BeforeAfterSlider
                before="/images/before-1.jpg"
                after="/images/bridal-1.jpg"
                label="Bridal Transformation"
              />
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <BeforeAfterSlider
                before="/images/before-2.jpg"
                after="/images/editorial-1.jpg"
                label="Editorial Look"
              />
            </ScaleIn>
            <ScaleIn delay={0.3}>
              <BeforeAfterSlider
                before="/images/before-3.jpg"
                after="/images/reception-1.jpg"
                label="Reception Glam"
              />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
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
              <FadeIn key={img.src} delay={i * 0.07}>
                <Link href="/gallery" className="group relative block overflow-hidden rounded-xl aspect-square card-hover">
                  <Image src={img.src} alt={img.label} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108" />
                  <div className="absolute inset-0 bg-[#2D1F1A]/0 group-hover:bg-[#2D1F1A]/25 transition-all duration-400" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-playfair text-white text-sm">{img.label}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24 lg:py-32 bg-[#2D1F1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/suman-3.jpg" alt="" fill className="object-cover object-top" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="font-cormorant italic text-[#C9A27E] text-xl mb-3">My Story</p>
              <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-6">
                Where It All Began
              </h2>
              <p className="font-dm text-white/60 leading-relaxed text-sm mb-8 max-w-md">
                Growing up in Mumbai, I was always drawn to the transformative power of beauty. What started as doing makeup for friends quickly became an undeniable passion. Certified from Creative Makeup Hair Academy, I now create timeless looks for brides, editorials, and celebrations.
              </p>
              <Link href="/about"
                className="group inline-flex items-center gap-2 bg-[#C9A27E] text-[#2D1F1A] px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-dm font-medium rounded-full hover:bg-[#DCC4A8] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A27E]/30">
                Meet Suman <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto shadow-2xl">
                <Image src="/images/suman-1.jpg" alt="Suman at work" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-playfair text-white text-lg">Suman Mukadam</p>
                  <p className="font-cormorant italic text-[#C9A27E]">Certified Makeup Artist</p>
                </div>
              </div>
              {/* Floating quote */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-[#EFE5DC] max-w-[200px]"
              >
                <Quote size={18} className="text-[#C9A27E] mb-2" strokeWidth={1.5} />
                <p className="font-cormorant italic text-[#2D1F1A] text-sm leading-relaxed">
                  &ldquo;I bring out your soul.&rdquo;
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 lg:py-32 bg-[#EFE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">What They Say</p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#2D1F1A]">Client Love</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-[#EFE5DC] hover:shadow-2xl hover:shadow-[#C9A27E]/10 hover:-translate-y-1.5 transition-all duration-400 h-full flex flex-col">
                  <Quote size={28} className="text-[#C9A27E]/25 mb-4" strokeWidth={1} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} size={12} className="text-[#C9A27E] fill-[#C9A27E]" />
                    ))}
                  </div>
                  <p className="font-cormorant italic text-[#2D1F1A]/80 text-lg leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#EFE5DC]">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#C9A27E]/20">
                      <Image src={t.img} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-playfair text-[#2D1F1A] text-sm font-medium">{t.name}</p>
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

      {/* ── INSTAGRAM STRIP ── */}
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
            {[...galleryImages, { src: '/images/suman-10.jpg', label: 'Transformation' }, { src: '/images/suman-5.jpg', label: 'On Set' }].map((img, i) => (
              <motion.a key={`ig-${i}`}
                href="https://www.instagram.com/makeup_suman_soul" target="_blank" rel="noopener noreferrer"
                className="relative flex-shrink-0 w-40 h-52 rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-110 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Instagram icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
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
