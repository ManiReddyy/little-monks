'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, useCursor } from '@react-three/drei';
import * as THREE from 'three';

// A simple interactive 3D balloon
function Balloon({ position, color, delay }: { position: [number, number, number], color: string, delay: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [popped, setPopped] = useState(false);
  useCursor(hovered);

  useFrame((state) => {
    if (mesh.current && !popped) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.5;
    }
  });

  if (popped) return null;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setPopped(true)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
        {/* Balloon string placeholder */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      </mesh>
    </Float>
  );
}

// Wrap 3D elements
function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        <Balloon position={[-4, -2, -2]} color="#FF6B6B" delay={0} />
        <Balloon position={[4, 1, -5]} color="#6BCBFF" delay={1} />
        <Balloon position={[5, -3, 0]} color="#FFD93D" delay={2} />
        <Balloon position={[-5, 2, -4]} color="#98D8AA" delay={3} />
        
        <ContactShadows position={[0, -4, 0]} opacity={0.5} scale={20} blur={2} far={4} />
      </Canvas>
    </div>
  );
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-background to-background">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-clay text-accent font-bold tracking-wide"
        >
          Welcome to Little Monks 🎈
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.1]"
        >
          Where Little Minds <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary block mt-2">
            Grow with Joy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10"
        >
          A nurturing Montessori preschool in Bolarum where every child is loved, guided, and inspired to explore the world with curiosity and confidence.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <motion.a
            href="#visit-us"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-primary text-foreground px-8 py-4 rounded-full font-bold text-lg shadow-[0_8px_0_#e5c337] hover:shadow-[0_4px_0_#e5c337] hover:translate-y-1 transition-all flex justify-center items-center"
          >
            Schedule a Visit
          </motion.a>
          <motion.a
            href="tel:+9109676957687"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg shadow-sm border-2 border-transparent hover:border-primary transition-all flex justify-center items-center"
          >
            Call Now
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
