'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    { src: '/gallery-1.jpg', alt: 'Interior del café', span: 'md:col-span-1 md:row-span-2' },
    { src: '/gallery-2.jpg', alt: 'Barista creando arte latte', span: 'md:col-span-1 md:row-span-1' },
    { src: '/gallery-3.jpg', alt: 'Momento de café y pastelería', span: 'md:col-span-1 md:row-span-1' },
    { src: '/croissant.jpg', alt: 'Pastelería fresca', span: 'md:col-span-2 md:row-span-1' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 md:py-32 px-6 bg-[var(--cream)]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-[var(--warm-gold)] text-sm tracking-[0.2em] uppercase font-medium block mb-4">
                        Experiencia Visual
                    </span>
                    <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] font-serif mb-4">
                        Momentos en Aroma
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative overflow-hidden group cursor-pointer ${image.span}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
