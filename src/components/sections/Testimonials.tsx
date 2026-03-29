'use client';
import { motion } from 'framer-motion';

const reviews = [
  { text: "We saw a huge improvement in our child’s confidence and communication.", author: "Priya S." },
  { text: "Teachers are very caring and give personal attention to every child.", author: "Rahul M." },
  { text: "The environment is safe, clean, and very nurturing.", author: "Anjali K." },
  { text: "Our child loves going to school every day!", author: "Sriram V." },
  { text: "Best decision we made for our little one's early years.", author: "Neha D." },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFD93D] relative overflow-hidden text-foreground">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 border-white">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">What Parents Are Saying</h2>
          <p className="font-body font-bold text-xl opacity-80">Trusted by parents. Loved by children.</p>
        </div>

        {/* Marquee */}
        <div className="flex overflow-hidden relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] select-none mb-16">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-6 px-6 pb-8 pt-4"
          >
            {[...reviews, ...reviews, ...reviews].map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -10 }}
                className="w-80 md:w-96 flex-shrink-0 bg-white rounded-3xl p-8 shadow-[8px_8px_0_rgba(255,255,255,0.4)] relative cursor-grab active:cursor-grabbing border-2 border-white/50"
              >
                <div className="text-6xl text-accent/20 mb-2 absolute -top-4 left-4 -rotate-12 select-none">❝</div>
                <p className="font-body text-foreground/80 leading-relaxed italic mb-6 relative z-10 text-lg md:text-xl">"{r.text}"</p>
                <div className="font-heading text-xl font-bold border-t border-gray-100 pt-4 text-accent flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm">{r.author.charAt(0)}</div>
                  {r.author}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center relative z-10 mb-8">
          <motion.a 
            href="https://share.google/caHewuOImEJFEmtzD"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg shadow-[0_6px_0_rgba(255,255,255,0.5)] hover:shadow-[0_4px_0_rgba(255,255,255,0.5)] hover:translate-y-1 transition-all border-2 border-transparent hover:border-blue-500"
          >
            <span className="text-blue-500 text-2xl font-bold font-serif leading-none mt-1">G</span> 
            Read more on Google Reviews &rarr;
          </motion.a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 drop-shadow-sm">
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
