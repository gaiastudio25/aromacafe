'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <footer id="contact" className="bg-[var(--deep-brown)] text-[var(--cream)] pt-24 pb-12 border-t border-[var(--cream)]/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-20">

                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl text-[var(--warm-gold)]">Aromacafé</h3>
                        <p className="text-[var(--cream)]/60 font-light leading-relaxed max-w-xs">
                            Elevando la experiencia del café a través de la pasión, precisión y los mejores granos.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm tracking-widest uppercase font-medium">Enlaces Rápidos</h4>
                        <ul className="space-y-4 text-[var(--cream)]/60 font-light">
                            <li><a href="#about" className="hover:text-[var(--warm-gold)] transition-colors">Nosotros</a></li>
                            <li><a href="#menu" className="hover:text-[var(--warm-gold)] transition-colors">Menú</a></li>
                            <li><a href="#gallery" className="hover:text-[var(--warm-gold)] transition-colors">Galería</a></li>
                            <li><a href="#location" className="hover:text-[var(--warm-gold)] transition-colors">Ubicación</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm tracking-widest uppercase font-medium">Newsletter</h4>
                        <p className="text-[var(--cream)]/60 font-light mb-4">Suscríbete para novedades y ofertas especiales.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="bg-transparent border-b border-[var(--cream)]/30 py-2 px-0 w-full focus:outline-none focus:border-[var(--warm-gold)] transition-colors text-[var(--cream)] placeholder:text-[var(--cream)]/30 font-light"
                            />
                            <button className="text-[var(--warm-gold)] uppercase text-xs tracking-widest hover:text-[var(--cream)] transition-colors">
                                Enviar
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-[var(--cream)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--cream)]/40 font-light uppercase tracking-wider">
                    <p>&copy; 2025 Aromacafé. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[var(--warm-gold)] transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-[var(--warm-gold)] transition-colors">Términos</a>
                        <a href="#" className="hover:text-[var(--warm-gold)] transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
