'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, HeartHandshake, Baby } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <Star className="text-primary" fill="currentColor" size={24}/>, text: "5.0 Rated by Happy Parents" },
    { icon: <Baby className="text-secondary" size={24}/>, text: "Montessori-Based Learning" },
    { icon: <ShieldCheck className="text-accent" size={24}/>, text: "Safe & Hygienic Environment" },
    { icon: <HeartHandshake className="text-purple-400" size={24}/>, text: "Personal Attention for Every Child" },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 shadow-clay border border-white/50 backdrop-blur-md flex flex-wrap justify-center gap-6 md:gap-12"
      >
        {items.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-3 font-body font-medium text-foreground/80 whitespace-nowrap cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shadow-inner">
              {item.icon}
            </div>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
