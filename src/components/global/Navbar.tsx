'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative h-12 w-12 md:h-16 md:w-16 shrink-0"
          >
            <Image 
              src="/logo.png" 
              alt="Little Monks Logo" 
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className="object-contain"
              priority 
            />
          </motion.div>
          <span className="font-heading text-2xl md:text-3xl text-foreground font-bold whitespace-nowrap">
            <span className="text-accent">Little</span>Monks
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-body font-medium">
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#programs" className="hover:text-accent transition-colors">Programs</Link>
          <Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link>
          <motion.a
            href="#visit-us"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-7 py-3 rounded-full font-bold shadow-clay hover:shadow-lg transition-shadow"
          >
            Schedule a Visit
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
