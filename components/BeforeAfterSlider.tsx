'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  before: string;
  after: string;
  label?: string;
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsDraggingState(true);
    updatePos(e.clientX);
    const onMove = (ev: MouseEvent) => isDragging.current && updatePos(ev.clientX);
    const onUp = () => {
      isDragging.current = false;
      setIsDraggingState(false);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDraggingState(true);
    updatePos(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => updatePos(e.touches[0].clientX);
  const handleTouchEnd = () => setIsDraggingState(false);

  return (
    <div className="rounded-3xl overflow-hidden shadow-xl border border-[#EFE5DC] group">
      {label && (
        <div className="bg-white px-5 py-3.5 border-b border-[#EFE5DC] flex items-center justify-between">
          <p className="font-playfair text-sm text-[#2D1F1A]">{label}</p>
          <p className="font-dm text-[10px] text-[#C9A27E] uppercase tracking-widest">Slide to reveal</p>
        </div>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[4/5] select-none"
        style={{ cursor: isDraggingState ? 'ew-resize' : 'col-resize' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* After image (base) */}
        <Image src={after} alt="After makeup" fill className="object-cover pointer-events-none" />

        {/* Before image (clipped left side) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0" style={{ width: `${100 / (sliderPos / 100)}%` }}>
            <Image src={before} alt="Before makeup" fill className="object-cover" />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 pointer-events-none z-10"
          style={{
            left: `${sliderPos}%`,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.9) 85%, transparent)',
            boxShadow: '0 0 12px rgba(255,255,255,0.4)',
          }}
        />

        {/* Handle */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
          animate={{ scale: isDraggingState ? 1.1 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center ring-2 ring-[#C9A27E]/30">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 4L2 9L6 14M12 4L16 9L12 14" stroke="#C9A27E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-3.5 left-3.5 bg-[#2D1F1A]/75 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] uppercase font-dm px-3 py-1.5 rounded-full pointer-events-none z-10">
          Before
        </div>
        <div className="absolute bottom-3.5 right-3.5 bg-[#C9A27E]/90 backdrop-blur-sm text-[#2D1F1A] text-[9px] tracking-[0.2em] uppercase font-dm px-3 py-1.5 rounded-full pointer-events-none z-10 font-medium">
          After
        </div>
      </div>
    </div>
  );
}
