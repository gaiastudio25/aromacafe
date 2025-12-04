'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="py-24 px-6 bg-[var(--soft-beige)]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] mb-4">
                        Visítanos
                    </h2>
                    <p className="text-[var(--coffee-brown)] text-lg">
                        Estamos aquí para darte la bienvenida
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[var(--cream)] p-8 rounded-2xl"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <MapPin className="w-6 h-6 text-[var(--warm-gold)] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl text-[var(--deep-brown)] mb-2">Ubicación</h3>
                                <p className="text-[var(--coffee-brown)] leading-relaxed">
                                    Calle Artesanal 123<br />
                                    Distrito Centro<br />
                                    Ciudad, Estado 12345
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[var(--cream)] p-8 rounded-2xl"
                    >
                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-[var(--warm-gold)] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl text-[var(--deep-brown)] mb-2">Horarios</h3>
                                <div className="text-[var(--coffee-brown)] space-y-1">
                                    <p>Lunes - Viernes: 7:00 AM - 7:00 PM</p>
                                    <p>Sábado: 8:00 AM - 8:00 PM</p>
                                    <p>Domingo: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
