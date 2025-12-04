'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const menuItems = [
    {
        name: 'Espresso Signature',
        description: 'Rico, intenso y perfectamente balanceado. Nuestra mezcla de la casa tostada a la perfección.',
        price: '$4.50',
        image: '/espresso.jpg',
    },
    {
        name: 'Latte Artesanal',
        description: 'Espuma sedosa se encuentra con nuestro espresso signature, coronado con delicado arte latte.',
        price: '$5.50',
        image: '/latte.jpg',
    },
    {
        name: 'Croissant de Mantequilla',
        description: 'Capas hojaldradas y mantecosas horneadas frescas cada día. Perfecto con tu café matutino.',
        price: '$4.00',
        image: '/croissant.jpg',
    },
];

export default function Menu() {
    return (
        <section id="menu" className="py-24 px-6 bg-[var(--soft-beige)]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] mb-4">
                        Nuestro Menú
                    </h2>
                    <p className="text-[var(--coffee-brown)] text-lg max-w-2xl mx-auto">
                        Bebidas artesanales y pastelería fina, hechas con amor y precisión
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-[var(--cream)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 grain-overlay">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl text-[var(--deep-brown)]">
                                        {item.name}
                                    </h3>
                                    <span className="text-[var(--warm-gold)] font-semibold text-xl">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-[var(--coffee-brown)] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-4 bg-[var(--deep-brown)] text-[var(--cream)] rounded-full font-medium text-lg hover:bg-[var(--coffee-brown)] transition-colors">
                        Ver Menú Completo
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
