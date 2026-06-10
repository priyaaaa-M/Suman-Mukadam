'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

type Category = 'All' | 'Bridal' | 'Engagement' | 'Party' | 'Editorial' | 'Transformations';

interface GalleryItem {
  id: number;
  src: string;
  category: Category;
  title: string;
  span?: 'tall' | 'wide' | 'normal';
  isVideo?: boolean;
}

const items: GalleryItem[] = [
  { id: 1, src: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Bridal', title: 'Elegant Bridal Look', span: 'tall' },
  { id: 2, src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Editorial', title: 'Editorial Glam', span: 'normal' },
  { id: 3, src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Party', title: 'Party Glam', span: 'normal' },
  { id: 4, src: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Engagement', title: 'Engagement Radiance', span: 'tall' },
  { id: 5, src: 'https://images.pexels.com/photos/2132543/pexels-photo-2132543.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Editorial', title: 'High Fashion Editorial', span: 'normal' },
  { id: 6, src: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Bridal', title: 'Classic Bridal', span: 'normal' },
  { id: 7, src: 'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Transformations', title: 'Full Transformation', span: 'tall' },
  { id: 8, src: 'https://images.pexels.com/photos/3985353/pexels-photo-3985353.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Party', title: 'Festive Party Look', span: 'normal' },
  { id: 9, src: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Bridal', title: 'Timeless Bride', span: 'normal' },
  { id: 10, src: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Engagement', title: 'Modern Engagement', span: 'tall' },
  { id: 11, src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Transformations', title: 'Stunning Transformation', span: 'normal' },
  { id: 12, src: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Editorial', title: 'Avant-Garde Look', span: 'normal' },
  { id: 13, src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Party', title: 'Cocktail Glam', span: 'normal' },
  { id: 14, src: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Bridal', title: 'Soft Bridal', span: 'normal' },
  { id: 15, src: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Engagement', title: 'Dewy Engagement', span: 'normal' },
  { id: 16, src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Transformations', title: 'Night Out Transform', span: 'tall' },
];

const categories: Category[] = ['All', 'Bridal', 'Engagement', 'Party', 'Editorial', 'Transformations'];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const currentIndex = filtered.findIndex((i) => i.id === lightbox);
  const prev = () => setLightbox(filtered[(currentIndex - 1 + filtered.length) % filtered.length].id);
  const next = () => setLightbox(filtered[(currentIndex + 1) % filtered.length].id);

  const currentItem = filtered.find((i) => i.id === lightbox);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/2132543/pexels-photo-2132543.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Gallery" fill className="object-cover opacity-30" priority />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="font-cormorant italic text-gold text-xl mb-2">The Art Gallery</p>
            <h1 className="font-playfair text-5xl lg:text-6xl text-ivory mb-4">My Work</h1>
            <p className="font-dm text-ivory/60 text-sm max-w-md">A curated collection of transformations, bridal moments, editorial looks, and behind-the-scenes magic.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <FadeIn className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs font-dm tracking-wider uppercase transition-all duration-300 ${
                  active === cat
                    ? 'bg-dark text-ivory shadow-md'
                    : 'bg-beige text-mocha/70 hover:bg-beige/70 hover:text-mocha border border-transparent hover:border-beige'
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Masonry Grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="break-inside-avoid mb-3 group relative cursor-pointer rounded-xl overflow-hidden"
                  style={{ aspectRatio: item.span === 'tall' ? '3/4' : item.span === 'wide' ? '4/3' : '1' }}
                  onClick={() => openLightbox(item.id)}
                >
                  <div className={`relative w-full ${item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-playfair text-ivory text-sm">{item.title}</p>
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <ZoomIn size={13} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-dark/50 backdrop-blur-sm text-ivory text-[9px] tracking-widest uppercase font-dm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-cormorant italic text-gold text-2xl">No items found</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <X size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <ChevronLeft size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
              <ChevronRight size={18} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image src={currentItem.src} alt={currentItem.title} fill className="object-cover" />
              </div>
              <div className="mt-3 text-center">
                <p className="font-playfair text-ivory text-lg">{currentItem.title}</p>
                <p className="font-dm text-ivory/50 text-xs uppercase tracking-wider mt-1">{currentItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
