'use client';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Playful background blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(255,217,61,0.3)] border border-primary/20 relative"
        >
          {/* Decorative floating elements */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-5xl md:text-6xl drop-shadow-lg select-none">✨</motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-5xl md:text-6xl drop-shadow-lg select-none">🎈</motion.div>
          
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Give Your Child the <br className="hidden md:block"/>
            <span className="text-secondary">Best Start</span> in Life
          </h2>
          <p className="font-body text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join a preschool where your child is cared for, guided, and inspired every single day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#visit-us"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex justify-center items-center bg-accent text-white px-10 py-4 rounded-full font-bold text-xl shadow-[0_8px_0_#d84b4b] hover:shadow-[0_4px_0_#d84b4b] hover:-translate-y-1 active:translate-y-2 active:shadow-none transition-all"
            >
              Schedule a Visit
            </motion.a>
            <motion.a
              href="tel:+9109676957687"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex justify-center items-center bg-secondary text-white px-10 py-4 rounded-full font-bold text-xl shadow-[0_8px_0_#4eaad9] hover:shadow-[0_4px_0_#4eaad9] hover:-translate-y-1 active:translate-y-2 active:shadow-none transition-all"
            >
              Call Now
            </motion.a>
            <motion.a
              href="#visit-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex justify-center items-center bg-green-500 text-white px-10 py-4 md:py-[18px] rounded-full font-bold text-[1.3rem] shadow-lg hover:shadow-xl transition-all border-b-4 border-green-700 hover:border-green-600 active:border-b-0 active:translate-y-1"
            >
              Enroll Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
