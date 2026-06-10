'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Heart, Sparkles, Users, MapPin, CheckCircle } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const timeline = [
  { year: '2018', title: 'The Beginning', desc: 'Discovered my passion for makeup while doing bridal looks for friends and family in Mumbai.' },
  { year: '2019', title: 'Professional Training', desc: 'Enrolled at Creative Makeup Hair Academy, learning advanced techniques from industry experts.' },
  { year: '2020', title: 'Certification & Launch', desc: 'Completed certification and officially launched my career as a professional makeup artist.' },
  { year: '2021', title: 'Growing Portfolio', desc: 'Expanded into editorial and photoshoot makeup, collaborating with photographers across Mumbai.' },
  { year: '2022–24', title: 'Studio & Beyond', desc: 'Over 200 bridal clients, 500+ looks created, and a growing community of beauty lovers on Instagram.' },
];

const whyChooseMe = [
  'Certified professional from Creative Makeup Hair Academy',
  'Skin-friendly, premium product brands only',
  'Personalized consultation for every client',
  'Available for home visits across Mumbai',
  'Bridal trial sessions included',
  'Hygiene-first approach — sanitized tools always',
];

const values = [
  { icon: <Heart size={22} strokeWidth={1.5} />, title: 'Passion First', desc: 'Every brush stroke is a labour of love. I genuinely care about making you feel extraordinary.' },
  { icon: <Sparkles size={22} strokeWidth={1.5} />, title: 'Artistry', desc: 'Makeup is my canvas. I approach every look as a creative work of art tailored to your features.' },
  { icon: <Users size={22} strokeWidth={1.5} />, title: 'Client-Centered', desc: 'Your comfort and vision matter most. I listen, adapt, and deliver beyond expectations.' },
  { icon: <Award size={22} strokeWidth={1.5} />, title: 'Excellence', desc: 'From technique to timing — I hold myself to the highest standard so you can shine.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-beige overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3985353/pexels-photo-3985353.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Suman Mukadam"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="font-cormorant italic text-gold text-xl mb-2">My Story</p>
            <h1 className="font-playfair text-5xl lg:text-6xl text-ivory mb-3">About Suman</h1>
            <div className="flex items-center gap-2 text-ivory/60">
              <MapPin size={13} className="text-gold" />
              <span className="font-dm text-sm">Mumbai, Maharashtra</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-md shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Suman at work"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-beige"
              >
                <div className="text-center">
                  <div className="font-playfair text-3xl text-gold mb-0.5">200+</div>
                  <div className="font-dm text-xs text-mocha/60">Happy Brides</div>
                </div>
              </motion.div>
            </FadeIn>

            <div>
              <FadeIn delay={0.1}>
                <h2 className="font-playfair text-3xl lg:text-4xl text-dark mb-6">Where It All Began</h2>
                <div className="space-y-4 font-dm text-mocha/75 leading-[1.9] text-sm">
                  <p>Growing up in Mumbai, I was always drawn to the transformative power of beauty. Watching my mother get ready for special occasions, I was fascinated by how a little color and care could light someone up from within.</p>
                  <p>What started as doing makeup for friends quickly became an undeniable passion. In 2019, I took the leap and enrolled at Creative Makeup Hair Academy — one of the most respected institutions in the industry — where I trained under master artists and learned techniques spanning classical bridal to avant-garde editorial.</p>
                  <p>Since then, I&apos;ve had the privilege of working with over 200 brides on their most precious day, creating editorial looks for photographers, and building a community of beauty lovers across Instagram.</p>
                  <p>My philosophy is simple: makeup should enhance who you are, not mask it. Every look I create is deeply personal, crafted to make you feel seen, celebrated, and irresistibly yourself.</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-8 p-6 bg-beige rounded-2xl border-l-4 border-gold">
                <p className="font-cormorant italic text-xl text-mocha">
                  &ldquo;I don&apos;t just do makeup. I bring out your soul.&rdquo;
                </p>
                <p className="font-dm text-sm text-mocha/60 mt-2">— Suman Mukadam</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-xl mb-2">What I Stand For</p>
            <h2 className="font-playfair text-4xl text-dark">My Philosophy</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 hover:shadow-md transition-shadow duration-300 border border-beige/50 h-full">
                  <div className="text-gold mb-4">{v.icon}</div>
                  <h3 className="font-playfair text-lg text-dark mb-3">{v.title}</h3>
                  <p className="font-dm text-sm text-mocha/65 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="font-cormorant italic text-gold text-xl mb-2">The Journey</p>
            <h2 className="font-playfair text-4xl text-dark">My Story in Time</h2>
          </FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-beige transform md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className={`flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 pb-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-14 md:pl-0`}>
                      <div className="bg-white rounded-2xl p-6 border border-beige shadow-sm inline-block w-full">
                        <p className="font-cormorant italic text-gold text-lg mb-1">{item.year}</p>
                        <h3 className="font-playfair text-lg text-dark mb-2">{item.title}</h3>
                        <p className="font-dm text-sm text-mocha/65 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-white shadow mt-6" />
                    {/* Spacer for alternating side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-mocha text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Certification"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-mocha/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award size={48} className="text-gold mx-auto mb-3" strokeWidth={1} />
                    <p className="font-playfair text-2xl text-ivory">Certified Artist</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.1}>
                <p className="font-cormorant italic text-gold text-xl mb-2">Education & Credentials</p>
                <h2 className="font-playfair text-4xl mb-6">Certified at Creative Makeup Hair Academy</h2>
                <p className="font-dm text-ivory/70 leading-relaxed text-sm mb-8">
                  My training at Creative Makeup Hair Academy gave me a solid foundation in professional makeup artistry — from skincare prep and colour theory to advanced bridal and editorial techniques. This certification represents my commitment to excellence and continuous learning.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <ul className="space-y-3">
                  {['Advanced Bridal Makeup Techniques', 'Airbrush & HD Makeup', 'Editorial & Fantasy Looks', 'Skincare & Prep', 'Colour Theory & Face Contouring', 'Professional Hygiene Standards'].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-dm text-sm text-ivory/80">
                      <CheckCircle size={15} className="text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="font-cormorant italic text-gold text-xl mb-2">The Suman Difference</p>
              <h2 className="font-playfair text-4xl text-dark mb-8">Why Clients Choose Me</h2>
              <ul className="space-y-4">
                {whyChooseMe.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle size={12} className="text-gold" />
                    </div>
                    <span className="font-dm text-sm text-mocha/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-dark text-ivory px-6 py-3 text-xs tracking-[0.18em] uppercase font-dm rounded-full hover:bg-mocha transition-all duration-300 group">
                Book Your Session <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-sm mx-auto shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Makeup work"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
