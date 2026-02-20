'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, MessageCircle, X, ChevronRight, Info, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'Todas' | 'Ruta' | 'MTB' | 'E-Bike' | 'Componentes';

interface Product {
    id: number;
    name: string;
    category: Category;
    image: string;
    specs: string[];
    description: string;
    featured?: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: "Specialized Tarmac SL8",
        category: "Ruta",
        image: "/images/tarmac-sl8.jpg",
        specs: ["Cuadro de Carbono Fact 12r", "Transmisión Sram Red AXS", "Tecnología Made in Racing"],
        description: "La bicicleta de ruta más rápida del mundo. Edición Oro, diseñada para la pura competición.",
        featured: true
    },
    {
        id: 2,
        name: "Specialized Turbo Levo",
        category: "E-Bike",
        image: "/images/turbo-levo.jpg",
        specs: ["Motor Turbo Full Power 2.2", "Batería de 700Wh", "Geometría S-Sizing"],
        description: "Potencia inigualable para conquistar la geografía de Loja. Una experiencia de trail definitiva."
    },
    {
        id: 3,
        name: "Horquillas Fox 38 Factory",
        category: "Componentes",
        image: "/images/fox-38-factory.jpg",
        specs: ["Recubrimiento Kashima", "Eje Flotante QR de 15mm", "Cartucho GRIP2"],
        description: "Sistemas de suspensión de alta gama para dominar cualquier terreno técnico."
    },
    {
        id: 4,
        name: "Frenos Magura MT7 Pro",
        category: "Componentes",
        image: "/images/magura-mt7.jpg",
        specs: ["Pinza de 4 pistones", "Tecnología Carbotecture SL", "Ajuste de alcance sin herramientas"],
        description: "Rendimiento hidráulico profesional. La potencia de frenado definitiva en tus manos."
    },
    {
        id: 5,
        name: "Specialized Enduro S-Works",
        category: "MTB",
        image: "/images/specialized-enduro.jpg",
        specs: ["170mm de recorrido", "Cuadro de carbono S-Works", "Sistema de suspensión progresivo"],
        description: "Diseñada para terrenos técnicos y desniveles extremos. Agresiva y precisa."
    },
    {
        id: 6,
        name: "Componentes Race-Face",
        category: "Componentes",
        image: "/images/race-face-controls",
        specs: ["Bielas de Carbono Next R", "Manillares SixC", "Potencia Turbine R"],
        description: "Bielas y manillares de competición. Durabilidad y ligereza extrema para los retos más duros."
    },
    {
        id: 7,
        name: "Specialized Epic World Cup",
        category: "MTB",
        image: "/images/specialized-epic.jpg",
        specs: ["Tecnología Brain", "Cuadro ultraligero", "Máxima transferencia de potencia"],
        description: "Ideal para los chaquiñanes de MTB de Loja. Velocidad pura en cross-country."
    },
    {
        id: 8,
        name: "Diverge Specialized Gravel",
        category: "Ruta",
        image: "/images/specialized-diverge.jpg",
        specs: ["Future Shock 2.0", "Almacenamiento SWAT integrado", "Capacidad para neumáticos anchos"],
        description: "Para las rutas mixtas de la provincia. Versatilidad sin límites en asfalto y tierra."
    },
    {
        id: 9,
        name: "Fox Transfer Post",
        category: "Componentes",
        image: "/images/fox-transfer.jpg",
        specs: ["Opción de recubrimiento Kashima", "Fácil mantenimiento", "Accionamiento suave"],
        description: "Tija telescópica clave de alta resistencia. Control total en descensos técnicos."
    },
    {
        id: 10,
        name: "Modelos Benelli Recreational",
        category: "Ruta",
        image: "/images/benelli-rec.jpg",
        specs: ["Confort ergonómico", "Componentes duraderos", "Ideal para premios de eventos"],
        description: "Ciclismo recreativo y premios de eventos. Calidad y estilo para el día a día."
    }
];

export function ProductGallery() {
    const [filter, setFilter] = useState<Category>('Todas');
    const [showAll, setShowAll] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filtered = products.filter(p => filter === 'Todas' || p.category === filter);
    const filteredProducts = showAll ? filtered.slice(6, 12) : filtered.slice(0, 6);

    const whatsappLink = (productName: string) => {
        const message = encodeURIComponent(`Hola Sur Bike, me interesa el producto ${productName}`);
        return `https://wa.me/593900000000?text=${message}`; // Placeholder phone
    };

    return (
        <section id="tienda" className="py-24 bg-[#050505] text-white overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h4 className="text-racing-red font-black uppercase tracking-[0.4em] text-xs mb-4">Official Dealer</h4>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                            EXCLUSIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">BOUTIQUE</span> GALLERY
                        </h2>
                        <p className="mt-6 text-gray-400 font-light max-w-xl">
                            Equipamiento de alto nivel seleccionado para dominar la Montaña Arrugada. Distribuidores oficiales de <span className="text-white font-bold underline decoration-racing-red underline-offset-4">Specialized, Fox y Magura</span>.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/40">
                        <Award className="text-racing-red" size={20} />
                        Garantía de Fábrica & Soporte Oficial
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {['Todas', 'Ruta', 'MTB', 'E-Bike', 'Componentes'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilter(cat as Category);
                                setShowAll(false);
                            }}
                            className={cn(
                                "px-6 py-2 rounded-full border text-[10px] uppercase font-black tracking-widest transition-all duration-300",
                                filter === cat
                                    ? "bg-racing-red border-racing-red text-white"
                                    : "bg-white/5 border-white/10 text-gray-500 hover:border-racing-red/50 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-carbon-light border border-white/5 group-hover:border-racing-red/30 transition-all duration-500">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        style={{ backgroundImage: `url('${product.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                    {/* Financing Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-md text-[8px] font-black tracking-widest uppercase text-white/80">
                                            15% Desc. Banco Loja
                                        </span>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-racing-red mb-2 block">{product.category}</span>
                                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white group-hover:text-racing-red transition-colors">
                                            {product.name}
                                        </h4>
                                        <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            Especificaciones Técnicas <ChevronRight size={12} className="text-racing-red" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Ver Más / Menos */}
                {products.filter(p => filter === 'Todas' || p.category === filter).length > 6 && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group relative px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:text-white"
                        >
                            <div className="absolute inset-0 w-0 bg-racing-red transition-all duration-300 group-hover:w-full" />
                            <span className="relative z-10">{showAll ? 'Volver a Destacados' : 'Ver Colección Completa'}</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Modal / Lightbox */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#0a0a0a] w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 md:grid-cols-2 relative"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 z-30 text-white/50 hover:text-white transition-colors bg-black/20 backdrop-blur-md rounded-full p-2"
                            >
                                <X size={24} />
                            </button>

                            {/* Product Image */}
                            <div className="relative aspect-square md:aspect-auto overflow-hidden bg-black/50">
                                <div
                                    className="absolute inset-0 bg-cover bg-center hover:scale-125 transition-transform duration-1000 cursor-zoom-in"
                                    style={{ backgroundImage: `url('${selectedProduct.image}')` }}
                                />
                            </div>

                            {/* Product Content */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="w-8 h-px bg-racing-red" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-racing-red">
                                        {selectedProduct.category}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white italic leading-none">
                                    {selectedProduct.name}
                                </h3>

                                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                                    {selectedProduct.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Especificaciones</h5>
                                    <div className="grid grid-cols-1 gap-3">
                                        {selectedProduct.specs.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-3 text-xs text-white/80 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-racing-red group-hover:scale-150 transition-transform" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={whatsappLink(selectedProduct.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-racing-red text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                                    >
                                        <MessageCircle size={18} />
                                        Consultar Disponibilidad
                                    </a>
                                    <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-black transition-all duration-300">
                                        <Info size={16} />
                                        Comparar
                                    </button>
                                </div>

                                <p className="mt-8 text-[9px] uppercase font-bold tracking-[0.2em] text-white/20">
                                    * Diferidos sin intereses con Banco de Loja y JEP. Aplican condiciones.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
