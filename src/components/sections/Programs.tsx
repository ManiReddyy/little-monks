'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
  { id: 'nursery', title: 'Nursery', emoji: '🌱', desc: 'A gentle introduction to learning where toddlers explore, play, and develop foundational social and cognitive skills in a warm, nurturing environment.', color: 'bg-primary/20 text-orange-600', border: 'border-primary' },
  { id: 'lkg', title: 'LKG', emoji: '🖍️', desc: 'Building on early curiosity, our LKG program focuses on language development, basic math concepts, and creative expression through engaging activities.', color: 'bg-secondary/20 text-blue-600', border: 'border-secondary' },
  { id: 'ukg', title: 'UKG', emoji: '🎓', desc: 'Preparing children for primary school with advanced literacy, numeracy, and independent thinking, ensuring a confident transition to formal education.', color: 'bg-accent/20 text-pink-600', border: 'border-accent' },
  { id: 'daycare', title: 'Day Care', emoji: '🧸', desc: 'A safe, caring, and comfortable space where your child feels at home even when you are away. We ensure their daily routine is maintained with love and attention.', color: 'bg-green-500/20 text-green-700', border: 'border-green-500' },
];

export default function Programs() {
  const [active, setActive] = useState(programs[0].id);

  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-foreground"
          >
            Programs Designed for Growing Minds
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Tabs */}
          <div className="flex w-full md:w-1/3 flex-row md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0 px-2 md:px-0 scrollbar-hide">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`relative px-6 py-5 rounded-3xl font-heading text-xl md:text-2xl text-left transition-all whitespace-nowrap md:whitespace-normal flex-shrink-0 ${active === p.id ? 'text-foreground shadow-sm' : 'text-foreground/50 hover:bg-gray-50'}`}
              >
                {active === p.id && (
                  <motion.div 
                    layoutId="activeTabBg"
                    className={`absolute inset-0 rounded-3xl border-2 ${p.border} ${p.color} -z-10`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="mr-3">{p.emoji}</span> {p.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 bg-gray-50 rounded-[3rem] p-8 md:p-14 min-h-[350px] flex items-center shadow-inner relative overflow-hidden">
            <AnimatePresence mode="wait">
              {programs.map((p) => (
                active === p.id && (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <div className={`w-20 h-20 rounded-full ${p.color} flex items-center justify-center text-4xl mb-6 shadow-sm`}>
                      {p.emoji}
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-foreground mb-4">{p.title}</h3>
                    <p className="font-body text-xl text-foreground/80 leading-relaxed max-w-lg">
                      {p.desc}
                    </p>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Decorative background blob */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
