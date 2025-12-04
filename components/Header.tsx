'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Menú', href: '#menu' },
        { name: 'Galería', href: '#gallery' },
        { name: 'Ubicación', href: '#location' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--coffee-brown)]/10"
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-3">
                        <Image
                            src="/logo-2.png"
                            alt="Aromacafé"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="text-2xl font-semibold text-[var(--deep-brown)]">
                            Aromacafé
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-[var(--coffee-brown)] hover:text-[var(--warm-gold)] transition-colors font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-[var(--deep-brown)]"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 space-y-4 pb-4"
                    >
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-[var(--coffee-brown)] hover:text-[var(--warm-gold)] transition-colors font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </nav>
        </motion.header>
    );
}
