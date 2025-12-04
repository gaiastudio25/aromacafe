'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-6 bg-[var(--cream)] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <span className="text-[var(--warm-gold)] text-sm tracking-[0.2em] uppercase font-medium block mb-4">
                            Nuestra Historia
                        </span>
                        <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] font-serif mb-8 leading-tight">
                            Crafting Moments, <br />
                            <span className="italic text-[var(--coffee-brown)]">One Cup at a Time</span>
                        </h2>
                        <div className="space-y-6 text-[var(--coffee-brown)] text-lg leading-relaxed font-light">
                            <p>
                                En Aromacafé, creemos que el café es más que una bebida—es una experiencia,
                                un ritual, un momento de conexión.
                            </p>
                            <p>
                                Cada taza que servimos está elaborada con precisión y pasión, proveniente de
                                los mejores granos y tostada a la perfección. Nuestros baristas son artesanos,
                                dedicados a resaltar el carácter único de cada origen.
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="mt-10 inline-block"
                        >
                            <a
                                href="#menu"
                                className="text-[var(--deep-brown)] border-b border-[var(--deep-brown)]/30 pb-1 hover:border-[var(--deep-brown)] transition-colors uppercase tracking-widest text-sm"
                            >
                                Descubre nuestra filosofía
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mr-auto rounded-sm overflow-hidden grain-overlay">
                            <Image
                                src="/coffee-beans.jpg"
                                alt="Granos de café premium"
                                fill
                                className="object-cover"
                            />
                            {/* Decorative Frame */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[var(--deep-brown)]/10 -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
