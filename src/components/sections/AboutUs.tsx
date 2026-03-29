'use client';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-bold text-lg mb-2 block uppercase tracking-wider">Our Story</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">A Second Home for Your Child</h2>
          <div className="space-y-4 font-body text-foreground/80 leading-relaxed text-lg">
            <p>At Little Monks Pre School, we believe that early childhood is not just about learning letters and numbers — it’s about building confidence, curiosity, and a love for learning.</p>
            <p>We have created a warm, safe, and joyful environment where children feel comfortable, valued, and excited to come every day.</p>
            <p>Our classrooms are filled with laughter, creativity, and discovery. Every child receives personal attention, ensuring they grow at their own pace with confidence and independence.</p>
            <p className="font-bold text-accent text-2xl mt-8 block">Because here, your child is not just a student… they are family.</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="relative"
        >
          {/* Vision Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-primary/10 border border-primary/20 rounded-3xl p-8 mb-6 shadow-clay cursor-default transition-colors hover:bg-primary/20"
          >
            <h3 className="font-heading text-2xl text-foreground mb-3 flex items-center gap-2">🌟 Our Vision</h3>
            <p className="font-body text-foreground/80">To create a joyful learning space where every child grows into a confident, independent, and happy individual.</p>
          </motion.div>
          {/* Mission Box */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-secondary/10 border border-secondary/20 rounded-3xl p-8 shadow-clay relative ml-0 md:ml-12 cursor-default transition-colors hover:bg-secondary/20"
          >
            <h3 className="font-heading text-2xl text-foreground mb-3 flex items-center gap-2">🎯 Our Mission</h3>
            <ul className="font-body text-foreground/80 space-y-2">
              <li>• To provide a safe and nurturing environment</li>
              <li>• To encourage curiosity through play-based learning</li>
              <li>• To build strong foundations using Montessori principles</li>
              <li>• To support emotional, social, and intellectual growth</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
