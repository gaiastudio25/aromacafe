'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-[var(--cream)]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-[var(--coffee-brown)] text-lg">
                        Nos encantaría saber de ti
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-[var(--deep-brown)] font-medium mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--soft-beige)] border border-[var(--coffee-brown)]/20 focus:border-[var(--warm-gold)] focus:outline-none transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[var(--deep-brown)] font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--soft-beige)] border border-[var(--coffee-brown)]/20 focus:border-[var(--warm-gold)] focus:outline-none transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-[var(--deep-brown)] font-medium mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--soft-beige)] border border-[var(--coffee-brown)]/20 focus:border-[var(--warm-gold)] focus:outline-none transition-colors resize-none"
                                    placeholder="Tu mensaje..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-8 py-4 bg-[var(--deep-brown)] text-[var(--cream)] rounded-full font-medium text-lg hover:bg-[var(--coffee-brown)] transition-colors"
                            >
                                Enviar Mensaje
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl text-[var(--deep-brown)] mb-6">Información de Contacto</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-[var(--warm-gold)]" />
                                    <span className="text-[var(--coffee-brown)]">hello@aromacafe.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-[var(--warm-gold)]" />
                                    <span className="text-[var(--coffee-brown)]">(555) 123-4567</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl text-[var(--deep-brown)] mb-6">Síguenos</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-[var(--soft-beige)] flex items-center justify-center hover:bg-[var(--warm-gold)] transition-colors"
                                >
                                    <Instagram className="w-5 h-5 text-[var(--deep-brown)]" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-[var(--soft-beige)] flex items-center justify-center hover:bg-[var(--warm-gold)] transition-colors"
                                >
                                    <Facebook className="w-5 h-5 text-[var(--deep-brown)]" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-24 pt-12 border-t border-[var(--coffee-brown)]/20"
            >
                <p className="text-[var(--coffee-brown)]">
                    © 2025 Aromacafé. Elaborado con pasión.
                </p>
            </motion.div>
        </section>
    );
}
