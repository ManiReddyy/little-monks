'use client';
import { motion } from 'framer-motion';

const reasons = [
  { title: "Caring Teachers", icon: "❤️", desc: "Our teachers are patient, loving, and dedicated to every child’s growth." },
  { title: "Personal Attention", icon: "👩‍🏫", desc: "Every child receives individual care and guidance." },
  { title: "Proven Method", icon: "🧠", desc: "Our Montessori approach builds independence and confidence." },
  { title: "Hygiene & Safety", icon: "🧼", desc: "Cleanliness and safety are our top priorities." },
  { title: "Real Growth", icon: "📈", desc: "Parents notice improvements in confidence, communication, and behavior." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Why Parents Trust Little Monks</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 perspective-[1000px]">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative w-64 h-80 group cursor-pointer"
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 shadow-clay hover:shadow-lg rounded-3xl"
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/60">
                  <div className="w-24 h-24 mb-4 bg-primary/10 rounded-full flex items-center justify-center text-6xl shadow-inner">{r.icon}</div>
                  <h3 className="font-heading text-2xl text-foreground">{r.title}</h3>
                  <div className="absolute bottom-6 text-accent text-sm font-bold flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    hover to flip <span className="animate-bounce block ml-1">&uarr;</span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary text-foreground rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-primary/20 shadow-inner">
                  <h3 className="font-heading text-2xl mb-4 bg-white/50 px-4 py-1 rounded-full">{r.title}</h3>
                  <p className="font-body text-foreground/90 leading-relaxed font-medium text-lg">{r.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
