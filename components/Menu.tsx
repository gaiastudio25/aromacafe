'use client';

import { motion } from 'framer-motion';

const menuCategories = [
    {
        title: "Café de Especialidad",
        items: [
            { name: 'Espresso Signature', price: '$4.50', description: 'Rico, intenso y perfectamente balanceado.' },
            { name: 'Latte Artesanal', price: '$5.50', description: 'Espuma sedosa y arte latte delicado.' },
            { name: 'Cold Brew', price: '$5.00', description: 'Infusión en frío por 24 horas.' },
            { name: 'Flat White', price: '$4.75', description: 'Doble shot con leche texturizada fina.' }
        ]
    },
    {
        title: "Pastelería Fina",
        items: [
            { name: 'Croissant de Mantequilla', price: '$4.00', description: 'Capas hojaldradas horneadas diariamente.' },
            { name: 'Pain au Chocolat', price: '$4.50', description: 'Relleno de chocolate belga oscuro.' },
            { name: 'Tarta de Almendras', price: '$5.50', description: 'Dulce y crujiente, perfecta para acompañar.' }
        ]
    }
];

export default function Menu() {
    return (
        <section id="menu" className="py-24 md:py-32 px-6 bg-[var(--sand)]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-[var(--warm-gold)] text-sm tracking-[0.2em] uppercase font-medium block mb-4">
                        Selección Curada
                    </span>
                    <h2 className="text-5xl md:text-6xl text-[var(--deep-brown)] font-serif mb-4">
                        Nuestro Menú
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                    {menuCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <h3 className="text-2xl font-serif text-[var(--deep-brown)] mb-8 border-b border-[var(--deep-brown)]/10 pb-4">
                                {category.title}
                            </h3>
                            <div className="space-y-8">
                                {category.items.map((item) => (
                                    <div key={item.name} className="group cursor-pointer">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="text-lg font-medium text-[var(--deep-brown)] group-hover:text-[var(--warm-gold)] transition-colors">
                                                {item.name}
                                            </h4>
                                            <span className="text-[var(--deep-brown)]/60 font-serif text-lg">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-[var(--deep-brown)]/50 font-light italic">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/*<motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <button className="px-8 py-3 border border-[var(--deep-brown)] text-[var(--deep-brown)] hover:bg-[var(--deep-brown)] hover:text-[var(--cream)] transition-all duration-300 tracking-widest uppercase text-sm">
                        Ver Menú Completo
                    </button>
                </motion.div>*/}
            </div>
        </section>
    );
}
