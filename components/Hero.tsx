'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-cafe.jpg"
          alt="Aromacafé - Artisanal Coffee Experience"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="block text-[var(--warm-gold)] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Est. 2024
          </span>
          <h1 className="mb-6 text-6xl md:text-8xl lg:text-9xl text-[var(--cream)] font-serif tracking-tight">
            Aromacafé
          </h1>
          <p className="mb-10 text-xl md:text-2xl text-[var(--soft-gold)] font-light max-w-2xl mx-auto leading-relaxed">
            Donde la artesanía se encuentra con el deleite sensorial
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-[var(--cream)] text-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--deep-brown)] transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Explorar Menú
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[var(--cream)]/60 text-[10px] uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-6 h-6 text-[var(--cream)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
