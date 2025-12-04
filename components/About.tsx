'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-[var(--cream)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] mb-6">
                            Nuestra Historia
                        </h2>
                        <div className="space-y-4 text-[var(--coffee-brown)] text-lg leading-relaxed">
                            <p>
                                En Aromacafé, creemos que el café es más que una bebida—es una experiencia,
                                un ritual, un momento de conexión.
                            </p>
                            <p>
                                Cada taza que servimos está elaborada con precisión y pasión, proveniente de
                                los mejores granos y tostada a la perfección. Nuestros baristas son artesanos,
                                dedicados a resaltar el carácter único de cada origen.
                            </p>
                            <p>
                                Hemos creado un espacio donde la calidez se encuentra con la elegancia, donde cada detalle—desde
                                el aroma en el aire hasta la textura de nuestras pastas artesanales—está diseñado
                                para deleitar tus sentidos.
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="mt-8 inline-block"
                        >
                            <a
                                href="#menu"
                                className="text-[var(--warm-gold)] font-medium text-lg hover:underline"
                            >
                                Descubre nuestra filosofía →
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden grain-overlay"
                    >
                        <Image
                            src="/coffee-beans.jpg"
                            alt="Granos de café premium"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
