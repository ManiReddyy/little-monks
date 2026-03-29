'use client';
import { motion } from 'framer-motion';

export default function InstagramStory() {
  return (
    <section className="py-24 bg-[#FFFCF5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative elements */}
        <div className="text-6xl mb-6">📸</div>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
          See the Magic unfold <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">Every Single Day</span>
        </h2>
        <p className="font-body text-current/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Every child's journey is filled with tiny steps of huge importance. From messy art projects and first confident words to heartwarming friendships—we capture real moments of joy, growth, and discovery. Follow our stories and become a part of our extended family.
        </p>
        <motion.a 
          href="https://www.instagram.com/the_little_monks_preschool/" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-[0_8px_0_rgba(219,39,119,0.3)] hover:shadow-[0_4px_0_rgba(219,39,119,0.3)] hover:translate-y-1 active:translate-y-2 active:shadow-none transition-all"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Experience our world on Instagram
        </motion.a>
      </div>
    </section>
  );
}
