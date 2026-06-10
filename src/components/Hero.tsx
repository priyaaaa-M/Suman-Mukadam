// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Play } from "lucide-react";
import styles from "./Hero.module.css";

/* ------------------------------------------------------------------
   Replace the placeholder with your own high‑resolution portrait.
   Store the image in `public/hero.jpg` or any name you prefer.
   ------------------------------------------------------------------ */
const heroImg = "/hero_img.png";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Hero">
      {/* ── LEFT PANEL ── */}
      <div className={styles.leftPanel}>
        <h1 className={styles.heading}>
          <span className={styles.line}>Where beauty</span>
          <span className={styles.line}>meets</span>
        </h1>

        {/* Script word + pink heart */}
        <div className={styles.scriptWrapper}>
          <span className={styles.script}>artistry</span>
          <div className={styles.pinkHeart} />
        </div>

        {/* Subtitle with vertical line & gold highlights */}
        <p className={styles.subTitle}>
          I don’t just do{" "}
          <span className={styles.gold}>makeup</span>,
          <br />
          I bring out your{" "}
          <span className={styles.gold}>soul</span>.
        </p>

        {/* CTA buttons */}
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.ctaPrimary}>
            BOOK YOUR LOOK
          </Link>

          <Link href="#gallery" className={styles.ctaSecondary}>
            <Play className={styles.playIcon} />
            WATCH MY WORK
          </Link>
        </div>

        {/* Location badge */}
        <div className={styles.location}>
          <MapPin size={18} className={styles.locationIcon} />
          <span>Based in Mumbai</span>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className={styles.rightPanel}>
        <Image
          src={heroImg}
          alt="Luxury bridal makeup studio portrait"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "75% center" }}
        />

        {/* Handwritten overlay (Dream / Plan / Do) */}
        <div className={styles.handwritten}>
          <span>Dream</span>
          <span className={styles.plan}>Plan</span>
          <span className={styles.do}>Do</span>
          <span className={styles.heart}>♡</span>
        </div>
      </div>

      {/* ── FLOATING SERVICE CARD ── */}
      <div className={styles.serviceCard}>
        <div className={styles.serviceItem}>
          <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a5 5 0 015 5v2h-2V7a3 3 0 10-6 0v2H7V7a5 5 0 015-5zM5 20v-2a5 5 0 0110 0v2H5z" />
          </svg>
          <div className={styles.serviceText}>
            <h4>Bridal Makeup</h4>
            <p>Timeless looks for your most precious moments.</p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.5 4.5h4.6l-3.7 2.7 1.4 4.5L12 11l-3.8 2.7 1.4-4.5-3.7-2.7h4.6z" />
          </svg>
          <div className={styles.serviceText}>
            <h4>Party &amp; Occasion</h4>
            <p>Glam, chic or subtle – you, elevated.</p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 5h-3.2l-1.4-2H7.6L6.2 5H3a2 2 0 00-2 2v11a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2zM12 17a4 4 0 110-8 4 4 0 010 8z" />
          </svg>
          <div className={styles.serviceText}>
            <h4>Editorial &amp; Shoots</h4>
            <p>Creative makeup for camera‑ready magic.</p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <svg className={styles.serviceIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2v20h2V2H7zm8 0v20h2V2h-2z" />
          </svg>
          <div className={styles.serviceText}>
            <h4>Classes &amp; Workshops</h4>
            <p>Learn, create and grow your makeup skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}