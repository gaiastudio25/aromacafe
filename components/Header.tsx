'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--cream)]/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-6'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 relative z-50">
                        <span className={`text-2xl font-serif font-bold tracking-wider transition-colors ${isScrolled || isMenuOpen ? 'text-[var(--deep-brown)]' : 'text-[var(--cream)]'
                            }`}>
                            AROMA<span className="text-[var(--warm-gold)]">CAFÉ</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-[var(--warm-gold)] ${isScrolled ? 'text-[var(--deep-brown)]' : 'text-[var(--cream)]'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden relative z-50 transition-colors ${isScrolled || isMenuOpen ? 'text-[var(--deep-brown)]' : 'text-[var(--cream)]'
                            }`}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full bg-[var(--cream)] shadow-lg md:hidden pt-24 pb-8 px-6"
                        >
                            <ul className="space-y-6">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-xl font-serif text-[var(--deep-brown)] hover:text-[var(--warm-gold)] transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
