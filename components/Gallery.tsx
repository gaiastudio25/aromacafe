'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    { src: '/gallery-1.jpg', alt: 'Interior del café' },
    { src: '/gallery-2.jpg', alt: 'Barista creando arte latte' },
    { src: '/gallery-3.jpg', alt: 'Momento de café y pastelería' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 px-6 bg-[var(--cream)]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] mb-4">
                        Experiencia
                    </h2>
                    <p className="text-[var(--coffee-brown)] text-lg max-w-2xl mx-auto">
                        Adéntrate en nuestro mundo de calidez, artesanía y deleite sensorial
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative h-80 rounded-2xl overflow-hidden grain-overlay cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
