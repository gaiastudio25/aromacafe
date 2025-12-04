'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="py-24 md:py-32 bg-[var(--deep-brown)] text-[var(--cream)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/coffee-beans.jpg')] bg-cover bg-center" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-[var(--warm-gold)] text-sm tracking-[0.2em] uppercase font-medium block mb-4">
                            Visítanos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8">
                            Encuentra tu Espacio
                        </h2>
                        <p className="text-[var(--cream)]/70 text-lg font-light mb-12 max-w-md">
                            Ubicados en el corazón de la ciudad, ofrecemos un santuario lejos del bullicio. Ven por el café, quédate por la atmósfera.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <MapPin className="w-6 h-6 text-[var(--warm-gold)] mt-1" />
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Dirección</h4>
                                    <p className="text-[var(--cream)]/70 font-light">Calle Artesanal 123,<br />Distrito Centro, Ciudad</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <Clock className="w-6 h-6 text-[var(--warm-gold)] mt-1" />
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Horarios</h4>
                                    <p className="text-[var(--cream)]/70 font-light">Lun - Vie: 7am - 8pm</p>
                                    <p className="text-[var(--cream)]/70 font-light">Sáb - Dom: 8am - 9pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <Phone className="w-6 h-6 text-[var(--warm-gold)] mt-1" />
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Contacto</h4>
                                    <p className="text-[var(--cream)]/70 font-light">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-1/2 h-[400px] bg-[var(--cream)]/5 rounded-sm overflow-hidden relative backdrop-blur-sm border border-[var(--cream)]/10"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-[var(--cream)]/50 tracking-widest uppercase text-sm">Mapa Interactivo</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
