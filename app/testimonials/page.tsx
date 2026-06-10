'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ArrowRight, Heart } from 'lucide-react';

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

const featured = [
  {
    name: 'Priya Sharma',
    role: 'Bride — December 2024',
    text: 'I cannot put into words how magical Suman made me feel on my wedding day. From the trial session to the big day itself, she was patient, attentive, and absolutely brilliant. The look lasted all day through tears, dancing, and everything in between. She truly is an artist.',
    rating: 5,
    img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300',
    lookImg: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=500',
    service: 'Bridal Makeup',
  },
  {
    name: 'Ananya Patel',
    role: 'Editorial Shoot — October 2024',
    text: 'Working with Suman on our editorial shoot was an absolute dream. She understood the concept immediately and brought exactly the right energy to the shoot. The photos look stunning and the makeup was exactly what the stylist and I had envisioned.',
    rating: 5,
    img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
    lookImg: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=500',
    service: 'Editorial Makeup',
  },
  {
    name: 'Meera Desai',
    role: 'Bride — November 2024',
    text: 'Suman did my bridal makeup for both my Mehendi and my wedding. Each look was completely different yet equally stunning. She has this incredible ability to listen to your vision and then exceed it. My family and friends are still talking about how beautiful I looked.',
    rating: 5,
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    lookImg: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
    service: 'Bridal & Mehendi Makeup',
  },
];

const reviews = [
  { name: 'Kavya R.', role: 'Engagement', text: 'Absolutely flawless! My skin looked so dewy and natural yet glamorous. Got compliments all evening.', rating: 5, img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Shruti M.', role: 'Party Makeup', text: 'She transformed me for my best friend\'s wedding. I felt like a movie star. The lip colour she chose was perfect!', rating: 5, img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Nisha K.', role: 'Photoshoot', text: 'For my portfolio shoot, Suman\'s work was exceptional. The makeup looked incredible on camera — exactly what I needed.', rating: 5, img: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Pooja V.', role: 'Bridal', text: 'Suman listened to every single one of my requests and delivered something even more beautiful than I imagined. Thank you!', rating: 5, img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Divya S.', role: 'Reception', text: 'My reception look was breathtaking. The transition from my bridal look was seamless and so elegant.', rating: 5, img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Riya A.', role: 'Sangeet', text: 'Perfect smoky eye for my sangeet — she nailed it! So professional and friendly throughout the whole experience.', rating: 5, img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const stats = [
  { value: '200+', label: 'Brides Made Beautiful' },
  { value: '500+', label: 'Total Looks Created' },
  { value: '5.0', label: 'Average Rating' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-beige overflow-hidden flex items-center pt-24">
        <div className="absolute inset-0 opacity-30">
          <Image src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Client love" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-beige/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="font-cormorant italic text-gold text-xl mb-2">Words From the Heart</p>
            <h1 className="font-playfair text-5xl lg:text-6xl text-dark mb-4">Client Love</h1>
            <p className="font-dm text-mocha/60 text-sm max-w-md mx-auto">Nothing makes me happier than seeing my clients radiate confidence and joy. Here are their stories.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1} className="text-center">
                <div className="font-playfair text-4xl text-gold mb-1">{s.value}</div>
                <div className="font-dm text-xs text-ivory/50 uppercase tracking-wider">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="font-cormorant italic text-gold text-xl mb-2">Featured Stories</p>
            <h2 className="font-playfair text-4xl text-dark">Client Journeys</h2>
          </FadeIn>
          <div className="space-y-16">
            {featured.map((client, i) => (
              <FadeIn key={client.name} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Look Image */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 w-full shadow-xl">
                    <Image src={client.lookImg} alt={`${client.name}'s look`} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2">
                      <p className="font-dm text-xs text-gold uppercase tracking-wider">{client.service}</p>
                    </div>
                  </div>
                  {/* Review */}
                  <div>
                    <Quote size={36} className="text-gold/30 mb-4" strokeWidth={1} />
                    <div className="flex gap-1 mb-4">
                      {[...Array(client.rating)].map((_, si) => (
                        <Star key={si} size={14} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="font-cormorant italic text-dark/80 text-xl lg:text-2xl leading-relaxed mb-8">
                      &ldquo;{client.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-beige">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src={client.img} alt={client.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-playfair text-dark font-medium">{client.name}</p>
                        <p className="font-dm text-xs text-gold">{client.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {i < featured.length - 1 && <div className="border-b border-beige mt-16" />}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-cormorant italic text-gold text-xl mb-2">More Love</p>
            <h2 className="font-playfair text-4xl text-dark">What Clients Say</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 border border-beige hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(r.rating)].map((_, si) => (
                      <Star key={si} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-cormorant italic text-dark/80 text-lg leading-relaxed flex-1 mb-6">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-beige">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden">
                      <Image src={r.img} alt={r.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-playfair text-dark text-sm">{r.name}</p>
                      <p className="font-dm text-xs text-gold">{r.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mocha text-center">
        <div className="max-w-2xl mx-auto px-4">
          <FadeIn>
            <Heart size={32} className="text-gold mx-auto mb-4" strokeWidth={1} />
            <p className="font-cormorant italic text-gold text-xl mb-2">Your turn to shine</p>
            <h2 className="font-playfair text-4xl text-ivory mb-6">Ready to Create Your Story?</h2>
            <p className="font-dm text-ivory/60 text-sm mb-8 max-w-sm mx-auto">
              Join hundreds of happy clients who trusted Suman with their most special moments.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-dark px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-dm rounded-full hover:bg-gold-light transition-all duration-300 group">
              Book Your Appointment <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
