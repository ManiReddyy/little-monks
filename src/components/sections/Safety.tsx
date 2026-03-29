'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Eye, Home } from 'lucide-react';

const safetyItems = [
  { text: "Clean classrooms daily", icon: <Sparkles size={32} className="text-primary"/>, bg: "bg-primary/10" },
  { text: "Safe and secure environment", icon: <ShieldCheck size={32} className="text-accent"/>, bg: "bg-accent/10" },
  { text: "Constant supervision", icon: <Eye size={32} className="text-secondary"/>, bg: "bg-secondary/10" },
  { text: "Child-friendly infrastructure", icon: <Home size={32} className="text-purple-400"/>, bg: "bg-purple-100" }
];

export default function Safety() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E0F7FA] to-[#E8F5E9] relative overflow-hidden">
      {/* Decorative */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 border-4 border-dashed border-primary/20 rounded-full opacity-50" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] border-[40px] border-secondary/10 rounded-full opacity-50" 
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-clay mb-6 text-accent"
          >
            <ShieldCheck size={40} />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Your Child’s Safety is Our Priority</h2>
          <p className="font-body text-foreground/70 text-lg max-w-2xl mx-auto">We maintain the highest standards of hygiene and safety to ensure complete peace of mind for parents.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {safetyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 flex items-center gap-6 shadow-sm border border-white hover:shadow-clay transition-all cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} shadow-inner flex items-center justify-center flex-shrink-0`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl text-foreground/90">{item.text}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-heading text-2xl text-primary drop-shadow-sm font-bold tracking-wide">Because your child deserves nothing but the best.</p>
        </div>
      </div>
    </section>
  );
}
