'use client';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const scenes = [
  { time: "9:00 AM", title: "Warm Welcome", emoji: "🌅", desc: "Every morning starts with smiles, hugs, and a welcoming environment.", color: "bg-[#FFFCF5] border-primary text-primary" },
  { time: "10:00 AM", title: "Activity Time", emoji: "🎨", desc: "Engaging in creative activities that improve imagination, focus, and coordination.", color: "bg-[#FFF0F0] border-accent text-accent" },
  { time: "11:30 AM", title: "Learning Through Play", emoji: "📚", desc: "Using Montessori methods, children learn concepts naturally through hands-on experiences.", color: "bg-[#F0F9FF] border-secondary text-secondary" },
  { time: "12:30 PM", title: "Lunch & Social Time", emoji: "🍎", desc: "Healthy habits and social skills are developed while eating and interacting together.", color: "bg-[#F0FFF4] border-green-400 text-green-600" },
  { time: "2:00 PM", title: "Play & Exploration", emoji: "🌳", desc: "Outdoor and indoor play helps build confidence, teamwork, and physical strength.", color: "bg-[#FDF0FF] border-purple-400 text-purple-600" },
  { time: "3:30 PM", title: "Reflection & Goodbye", emoji: "🌈", desc: "We end the day with stories, laughter, and happy memories to take home.", color: "bg-[#FFFCF5] border-primary text-primary" },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 relative overflow-hidden -mt-16 pt-32 rounded-t-[3rem] z-10">
      {/* Decorative Path */}
      <div className="absolute top-48 bottom-12 left-1/2 -translate-x-1/2 w-4 bg-gray-200 rounded-full overflow-hidden hidden md:block">
        <motion.div 
          className="w-full bg-gradient-to-b from-primary via-accent to-secondary origin-top h-full"
          style={{ scaleY: scrollYProgress }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">A Day at Little Monks</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">A Beautiful Day Begins Here</h2>
        </div>

        <div className="space-y-8 md:space-y-0 md:h-[1200px] relative">
          {scenes.map((scene, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative md:absolute md:w-full`}
                style={{ top: `${i * 18}%` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-gray-100 rounded-full md:flex items-center justify-center text-3xl z-10 shadow-sm">
                  {scene.emoji}
                </div>

                <div className="w-full md:w-[45%] mb-4 md:mb-0">
                  <div className={`p-6 md:p-8 rounded-[2.5rem] bg-white border-2 border-dashed ${scene.color.split(' ')[1]} shadow-sm hover:shadow-clay hover:scale-105 transition-all cursor-default relative overflow-hidden group`}>
                    <div className={`absolute inset-0 ${scene.color.split(' ')[0]} opacity-30 -z-10 group-hover:opacity-100 transition-opacity`} />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm md:hidden shrink-0">
                        {scene.emoji}
                      </div>
                      <div>
                        <span className={`font-body font-bold text-sm ${scene.color.split(' ')[2]}`}>{scene.time}</span>
                        <h3 className="font-heading text-2xl md:text-3xl text-foreground">{scene.title}</h3>
                      </div>
                    </div>
                    <p className="font-body text-foreground/70 text-lg leading-relaxed">{scene.desc}</p>
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
