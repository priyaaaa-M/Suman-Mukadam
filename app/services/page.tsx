'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle, ChevronDown } from 'lucide-react';

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

const services = [
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    tagline: 'Your most radiant day',
    desc: 'Your wedding day is the most photographed moment of your life. I create a timeless, camera-perfect bridal look that honours your cultural traditions while bringing out your unique beauty. Every detail is considered — from the first trial to the final touch-up.',
    duration: '3–4 hours',
    price: 'Starting ₹8,000',
    img: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: [
      'Pre-bridal consultation & skin prep advice',
      'Bridal trial session included',
      'Premium HD & airbrush options',
      'Dupatta & jewellery pinning',
      'Touch-up kit provided',
      'Stays flawless 12+ hours',
    ],
  },
  {
    id: 'engagement',
    title: 'Engagement Makeup',
    tagline: 'Say yes, beautifully',
    desc: 'The engagement ceremony marks a new chapter. Whether you want a soft, ethereal glow or a bold statement look, I craft a style that captures your excitement and beauty as you step into this beautiful moment.',
    duration: '2–3 hours',
    price: 'Starting ₹5,000',
    img: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: [
      'Skin preparation & primer',
      'Custom look consultation',
      'Long-lasting formula',
      'Complements your outfit & jewellery',
      'Photography-ready finish',
      'Touch-up included',
    ],
  },
  {
    id: 'reception',
    title: 'Reception Makeup',
    tagline: 'Glamour meets elegance',
    desc: 'The reception is your time to shine and celebrate. I create a reception look that is glamorous, fresh, and distinctly you — whether you want to transform completely from your bridal look or subtly elevate it.',
    duration: '2–3 hours',
    price: 'Starting ₹6,000',
    img: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: [
      'Bridal-to-reception transition guidance',
      'Complementary gown look design',
      'Evening glam techniques',
      'Intense pigment eye work available',
      'Long-wear products throughout',
      'Coordination with hairstylist',
    ],
  },
  {
    id: 'party',
    title: 'Party Makeup',
    tagline: 'Be the most gorgeous in the room',
    desc: 'Whether it is Diwali, a cocktail night, a sangeet, or a friend\'s wedding — every celebration deserves a stunning look. I create party-ready makeup that is vibrant, long-lasting, and effortlessly beautiful.',
    duration: '1–2 hours',
    price: 'Starting ₹3,000',
    img: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: [
      'Quick, efficient application',
      'Festive & contemporary styles',
      'Skin-tone enhancement',
      'Eye makeup specialisation',
      'Lip colour curation',
      'Sweat & transfer resistant',
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial Makeup',
    tagline: 'Art on your face',
    desc: 'For fashion shoots, magazine editorials, and creative projects, I bring an artistic vision that pushes boundaries while remaining wearable. I collaborate closely with photographers and stylists to deliver visually striking, concept-driven looks.',
    duration: '2–4 hours',
    price: 'Starting ₹7,000',
    img: 'https://images.pexels.com/photos/2132543/pexels-photo-2132543.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: [
      'Pre-shoot concept consultation',
      'Avant-garde techniques available',
      'Body art & special effects',
      'Multiple looks per session',
      'On-set touch-ups',
      'High-definition finish',
    ],
  },
  {
    id: 'photoshoot',
    title: 'Photoshoot Makeup',
    tagline: 'Camera-ready perfection',
    desc: 'Professional photoshoots demand makeup that looks flawless under every lighting condition. I understand how makeup reads on camera and create looks that photograph beautifully — whether for portraits, portfolios, or product campaigns.',
    duration: '1.5–3 hours',
    price: 'Starting ₹4,000',
    img: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=700',
    features: [
      'HD & 4K camera-optimised finish',
      'No flashback guarantee',
      'Contouring for facial structure',
      'Studio & natural light adapted',
      'On-location availability',
      'Multiple outfit changes supported',
    ],
  },
];

const faqs = [
  { q: 'Do you offer home visits?', a: 'Yes! I offer home visits across Mumbai. Travel charges may apply based on location. Just mention your area when booking.' },
  { q: 'What products do you use?', a: 'I exclusively use premium, skin-safe brands including MAC, Huda Beauty, Charlotte Tilbury, NARS, and more. All products are dermatologically tested.' },
  { q: 'How far in advance should I book?', a: 'For bridal bookings, I recommend 3–6 months in advance. For party and photoshoot makeup, 1–2 weeks notice is usually sufficient.' },
  { q: 'Is a trial session included?', a: 'Yes — bridal packages include a complimentary trial session. For other services, trial sessions can be booked separately.' },
  { q: 'Do you do group bookings?', a: 'Absolutely! I offer group packages for bridal parties, sangeet groups, and event teams. Contact me for custom quotes.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-beige">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-playfair text-dark text-base">{q}</span>
        <ChevronDown size={18} className={`text-gold transition-transform duration-300 shrink-0 ml-4 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-5 font-dm text-sm text-mocha/70 leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-mocha overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Services"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="font-cormorant italic text-gold text-xl mb-2">What I Offer</p>
            <h1 className="font-playfair text-5xl lg:text-6xl text-ivory mb-3">My Services</h1>
            <p className="font-dm text-ivory/60 text-sm max-w-md">Every service is a deeply personal experience crafted around your unique vision and beauty.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <FadeIn key={svc.id} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Image */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group max-w-md mx-auto lg:mx-0 w-full">
                    <Image src={svc.img} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2">
                      <p className="font-dm text-xs text-mocha/60 uppercase tracking-wider">Duration</p>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-gold" />
                        <span className="font-playfair text-dark text-sm">{svc.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="font-cormorant italic text-gold text-lg mb-1">{svc.tagline}</p>
                    <h2 className="font-playfair text-3xl lg:text-4xl text-dark mb-4">{svc.title}</h2>
                    <p className="font-dm text-mocha/70 leading-relaxed text-sm mb-6">{svc.desc}</p>
                    <div className="bg-beige rounded-xl p-5 mb-6">
                      <p className="font-cormorant italic text-gold text-xl">{svc.price}</p>
                    </div>
                    <h4 className="font-playfair text-base text-dark mb-4">What&apos;s Included</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 font-dm text-xs text-mocha/70">
                          <CheckCircle size={13} className="text-gold shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-dark text-ivory px-6 py-3 text-xs tracking-[0.18em] uppercase font-dm rounded-full hover:bg-mocha transition-all duration-300 group">
                      Book This Service <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
                {i < services.length - 1 && <div className="border-b border-beige mt-20" />}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-beige">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <p className="font-cormorant italic text-gold text-xl mb-2">Got Questions?</p>
            <h2 className="font-playfair text-4xl text-dark">Frequently Asked</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="bg-white rounded-2xl p-8 border border-beige">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </FadeIn>
          <FadeIn delay={0.2} className="text-center mt-10">
            <p className="font-dm text-sm text-mocha/60 mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-dark text-ivory px-6 py-3 text-xs tracking-[0.18em] uppercase font-dm rounded-full hover:bg-mocha transition-all duration-300">
              Get In Touch <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
