'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden grain-overlay">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-cafe.jpg"
          alt="Aromacafé - Artisanal Coffee Experience"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-brown)]/40 via-transparent to-[var(--deep-brown)]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="mb-6 text-6xl md:text-8xl lg:text-9xl text-[var(--cream)] tracking-tight">
            Aromacafé
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-[var(--soft-beige)] font-light max-w-2xl mx-auto">
            Donde la artesanía se encuentra con el deleite sensorial
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[var(--warm-gold)] text-[var(--deep-brown)] rounded-full font-medium text-lg hover:bg-[var(--warm-gold)]/90 transition-colors"
          >
            Explorar Nuestro Menú
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 text-[var(--cream)]/90 font-light tracking-wide"
          >
            <p className="text-lg uppercase tracking-widest mb-2">Horarios</p>
            <div className="flex flex-col items-center justify-center md:flex-row gap-4 md:gap-8 p-4 text-sm md:text-base">
              <span>Lun - Vie: 7:00 AM - 7:00 PM</span>
              <span className="hidden md:inline">|</span>
              <span>Sáb - Dom: 8:00 AM - 8:00 PM</span>
            </div>
          </motion.div>
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
          >
            <ChevronDown className="w-8 h-8 text-[var(--cream)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
