'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface Props {
  before: string;
  after: string;
  label?: string;
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [sliderPos, setSliderPos] = useState(50);
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
    updatePos(e.clientX);
    const onMove = (ev: MouseEvent) => isDragging.current && updatePos(ev.clientX);
    const onUp = () => { isDragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => updatePos(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => updatePos(e.touches[0].clientX);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-beige">
      {label && (
        <div className="bg-white px-4 py-3 border-b border-beige">
          <p className="font-playfair text-sm text-dark">{label}</p>
        </div>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[4/5] cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full) */}
        <Image src={after} alt="After makeup" fill className="object-cover pointer-events-none" />

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${sliderPos}%` }}>
          <div className="absolute inset-0" style={{ width: `${100 / (sliderPos / 100)}%` }}>
            <Image src={before} alt="Before makeup" fill className="object-cover" />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none z-10"
          style={{ left: `${sliderPos}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="flex gap-1">
            <div className="flex flex-col gap-0.5">
              <div className="w-px h-3 bg-gold/80" />
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L1 7L5 11M9 3L13 7L9 11" stroke="#C9A27E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 bg-dark/70 backdrop-blur-sm text-ivory text-[10px] tracking-wider uppercase font-dm px-2.5 py-1 rounded-full pointer-events-none">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-gold/90 text-dark text-[10px] tracking-wider uppercase font-dm px-2.5 py-1 rounded-full pointer-events-none">
          After
        </div>
      </div>
    </div>
  );
}
