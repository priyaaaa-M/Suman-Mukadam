// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo – left */}
      <div className={styles.logo}>
        <span className={styles.logoMs}>ms.</span>
        <span className={styles.logoBrand}>MAKEUP_SUMAN_SOUL</span>
        <span className={styles.logoName}>SUMAN MUKADAM</span>
      </div>

      {/* Navigation – centered */}
      <ul className={styles.navList}>
        {navItems.map((item, i) => (
          <li key={item} className={styles.navItem}>
            <Link
              href={i === 0 ? "/" : `/${item.toLowerCase()}`}
              className={styles.link}
            >
              {item}
              {/* Gold underline for the first (active) item */}
              {i === 0 && <span className={styles.activeUnderline} />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Book Now – right */}
      <Link href="/contact" className={styles.bookNow}>
        <BookOpen size={16} className={styles.bookIcon} />
        BOOK NOW
      </Link>
    </nav>
  );
}
