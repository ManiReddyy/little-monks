'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';

const images = [
  { id: 1, src: "/gallery-1.jpg", title: "Creative Art" },
  { id: 2, src: "/gallery-2.jpg", title: "Outdoor Play" },
  { id: 3, src: "/gallery-3.jpg", title: "Reading Time" },
  { id: 4, src: "/gallery-4.jpg", title: "Music Class" },
  { id: 5, src: "/gallery-2.jpg", title: "Lunch Together" },
  { id: 6, src: "/gallery-3.jpg", title: "Montessori Activity" },
  { id: 7, src: "/gallery-4.jpg", title: "Puzzle Solving" },
  { id: 8, src: "/gallery-1.jpg", title: "Group Play" },
];

const GalleryCard = ({ image, heightClass }: { image: any, heightClass: string }) => (
  <div className={`${heightClass} bg-gray-100 rounded-[2rem] shadow-clay flex items-center justify-center p-6 text-center group overflow-hidden relative`}>
    <Image src={image.src} alt={image.title} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover group-hover:scale-110 transition-transform origin-center duration-500" />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    <h3 className="font-heading text-2xl text-white relative z-10 bg-black/40 px-6 py-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">{image.title}</h3>
  </div>
);

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Moments of Joy & Learning</h2>
        <p className="font-body text-foreground/70 text-lg">A glimpse into the happy world of Little Monks.</p>
        <p className="text-sm font-bold text-accent mt-4 animate-bounce">Drag to explore! ↔️</p>
      </div>

      <motion.div 
        drag="x" 
        dragConstraints={{ left: -800, right: 0 }}
        dragElastic={0.2}
        className="flex gap-6 px-6 pb-10 cursor-grab active:cursor-grabbing max-w-[200vw] w-fit"
      >
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-6 w-72 md:w-80">
          <GalleryCard image={images[0]} heightClass="h-96" />
          <GalleryCard image={images[1]} heightClass="h-64" />
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-6 w-72 md:w-80 md:-mt-20">
          <GalleryCard image={images[2]} heightClass="h-72" />
          <GalleryCard image={images[3]} heightClass="h-[28rem]" />
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-6 w-72 md:w-80 md:mt-10">
          <GalleryCard image={images[4]} heightClass="h-[30rem]" />
          <GalleryCard image={images[5]} heightClass="h-64" />
        </motion.div>
        
        {/* Column 4 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-6 w-72 md:w-80 md:-mt-10">
          <GalleryCard image={images[6]} heightClass="h-64" />
          <GalleryCard image={images[7]} heightClass="h-[26rem]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
