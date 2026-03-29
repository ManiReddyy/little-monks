'use client';
import { motion } from 'framer-motion';

const facilities = [
  "Clean & Hygienic Classrooms", "Child-Safe Infrastructure", "Activity-Based Learning Materials",
  "Outdoor Play Area", "Interactive Learning Tools", "Safe Drinking Water & Environment"
];

const activities = [
  { title: "Art & Craft", icon: "🎨" },
  { title: "Puzzle Solving", icon: "🧩" },
  { title: "Role Play", icon: "🎭" },
  { title: "Music", icon: "🎵" },
  { title: "Storytelling", icon: "📖" },
  { title: "Nature", icon: "🌱" },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Facilities Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Designed for Comfort, Safety & Growth</h2>
            <p className="font-body text-foreground/70 max-w-2xl mx-auto text-lg">Every space is thoughtfully designed to ensure your child feels safe, happy, and engaged.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-[2rem] p-6 text-center shadow-clay border border-white/60 flex flex-col items-center justify-center min-h-[160px] cursor-default"
              >
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-500 shadow-inner">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-body font-semibold text-foreground/90">{fac}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div>
           <div className="text-center mb-16 flex flex-col items-center">
            <span className="bg-accent/10 text-accent font-bold px-4 py-1 rounded-full text-sm mb-4 uppercase tracking-wider">Daily Activities</span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Learning Made Fun Every Day</h2>
            <p className="font-body text-foreground/70 max-w-2xl mx-auto text-lg">We believe children learn best when they enjoy the process.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {activities.map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1, transition: { type: "tween", duration: 0.4 } }}
                className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-clay transition-shadow border-b-4 border-primary/20 aspect-square flex flex-col items-center justify-center cursor-default group"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform origin-bottom block">{act.icon}</span>
                <h4 className="font-heading text-lg text-foreground/90 leading-tight">{act.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
