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
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.93 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
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
    img: '/images/avatar-1.jpg',
    lookImg: '/images/bridal-1.jpg',
    service: 'Bridal Makeup',
  },
  {
    name: 'Ananya Patel',
    role: 'Editorial Shoot — October 2024',
    text: 'Working with Suman on our editorial shoot was an absolute dream. She understood the concept immediately and brought exactly the right energy to the shoot. The photos look stunning and the makeup was exactly what the stylist and I had envisioned.',
    rating: 5,
    img: '/images/avatar-2.jpg',
    lookImg: '/images/editorial-1.jpg',
    service: 'Editorial Makeup',
  },
  {
    name: 'Meera Desai',
    role: 'Bride — November 2024',
    text: 'Suman did my bridal makeup for both my Mehendi and my wedding. Each look was completely different yet equally stunning. She has this incredible ability to listen to your vision and then exceed it. My family and friends are still talking about how beautiful I looked.',
    rating: 5,
    img: '/images/avatar-3.jpg',
    lookImg: '/images/reception-1.jpg',
    service: 'Bridal & Mehendi Makeup',
  },
];

const reviews = [
  { name: 'Kavya R.', role: 'Engagement', text: 'Absolutely flawless! My skin looked so dewy and natural yet glamorous. Got compliments all evening.', rating: 5, img: '/images/avatar-4.jpg' },
  { name: 'Shruti M.', role: 'Party Makeup', text: "She transformed me for my best friend's wedding. I felt like a movie star. The lip colour she chose was perfect!", rating: 5, img: '/images/avatar-5.jpg' },
  { name: 'Nisha K.', role: 'Photoshoot', text: "For my portfolio shoot, Suman's work was exceptional. The makeup looked incredible on camera — exactly what I needed.", rating: 5, img: '/images/avatar-6.jpg' },
  { name: 'Pooja V.', role: 'Bridal', text: 'Suman listened to every single one of my requests and delivered something even more beautiful than I imagined. Thank you!', rating: 5, img: '/images/avatar-1.jpg' },
  { name: 'Divya S.', role: 'Reception', text: 'My reception look was breathtaking. The transition from my bridal look was seamless and so elegant.', rating: 5, img: '/images/avatar-2.jpg' },
  { name: 'Riya A.', role: 'Sangeet', text: 'Perfect smoky eye for my sangeet — she nailed it! So professional and friendly throughout the whole experience.', rating: 5, img: '/images/avatar-3.jpg' },
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
      <section className="relative py-36 bg-[#EFE5DC] overflow-hidden flex items-center pt-24">
        <div className="absolute inset-0">
          <Image src="/images/testimonials-hero.jpg" alt="Client love" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#EFE5DC]/40 via-[#EFE5DC]/60 to-[#EFE5DC]/80" />
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#C9A27E]/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#D9B8A7]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">Words From the Heart</p>
            <h1 className="font-playfair text-5xl lg:text-7xl text-[#2D1F1A] mb-4 leading-tight">Client Love</h1>
            <p className="font-dm text-[#5C4335]/60 text-sm max-w-md mx-auto leading-relaxed">
              Nothing makes me happier than seeing my clients radiate confidence and joy. Here are their stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#2D1F1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 lg:divide-x divide-white/10">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="text-center py-4 lg:py-0 lg:px-8">
                <div className="font-playfair text-4xl lg:text-5xl text-[#C9A27E] mb-1.5">{s.value}</div>
                <div className="font-dm text-[10px] text-white/45 uppercase tracking-widest">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 bg-[#F8F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">Featured Stories</p>
            <h2 className="font-playfair text-4xl text-[#2D1F1A]">Client Journeys</h2>
          </FadeIn>
          <div className="space-y-20">
            {featured.map((client, i) => (
              <FadeIn key={client.name} delay={0.08}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Look Image */}
                  <ScaleIn delay={0.1} className="relative aspect-[4/5] rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0 w-full shadow-2xl group">
                    <Image src={client.lookImg} alt={`${client.name}'s look`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2">
                      <p className="font-dm text-[10px] text-[#C9A27E] uppercase tracking-widest font-medium">{client.service}</p>
                    </div>
                  </ScaleIn>

                  {/* Review */}
                  <div>
                    <Quote size={40} className="text-[#C9A27E]/20 mb-5" strokeWidth={1} />
                    <div className="flex gap-1 mb-5">
                      {[...Array(client.rating)].map((_, si) => (
                        <Star key={si} size={14} className="text-[#C9A27E] fill-[#C9A27E]" />
                      ))}
                    </div>
                    <p className="font-cormorant italic text-[#2D1F1A]/80 text-xl lg:text-2xl leading-relaxed mb-8">
                      &ldquo;{client.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-[#EFE5DC]">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#C9A27E]/20">
                        <Image src={client.img} alt={client.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-playfair text-[#2D1F1A] font-medium text-base">{client.name}</p>
                        <p className="font-dm text-xs text-[#C9A27E] mt-0.5">{client.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {i < featured.length - 1 && (
                  <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#EFE5DC] to-transparent" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-20 bg-[#EFE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">More Love</p>
            <h2 className="font-playfair text-4xl text-[#2D1F1A]">What Clients Say</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-7 border border-[#EFE5DC] hover:shadow-xl hover:shadow-[#C9A27E]/10 hover:-translate-y-2 transition-all duration-400 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(r.rating)].map((_, si) => (
                      <Star key={si} size={12} className="text-[#C9A27E] fill-[#C9A27E]" />
                    ))}
                  </div>
                  <p className="font-cormorant italic text-[#2D1F1A]/80 text-lg leading-relaxed flex-1 mb-6">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#EFE5DC]">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#C9A27E]/15">
                      <Image src={r.img} alt={r.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-playfair text-[#2D1F1A] text-sm font-medium">{r.name}</p>
                      <p className="font-dm text-xs text-[#C9A27E]">{r.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#5C4335] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C9A27E 0%, transparent 60%), radial-gradient(circle at 70% 50%, #D9B8A7 0%, transparent 60%)' }} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <FadeIn>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart size={36} className="text-[#C9A27E] mx-auto mb-5" strokeWidth={1} />
            </motion.div>
            <p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">Your turn to shine</p>
            <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Ready to Create<br />Your Story?
            </h2>
            <p className="font-dm text-white/60 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
              Join hundreds of happy clients who trusted Suman with their most special moments.
            </p>
            <Link href="/contact"
              className="group inline-flex items-center gap-2 bg-[#C9A27E] text-[#2D1F1A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-dm font-medium rounded-full hover:bg-[#DCC4A8] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A27E]/30">
              Book Your Appointment <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
