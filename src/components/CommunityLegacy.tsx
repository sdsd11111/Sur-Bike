'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, ShieldCheck, Award, Zap, Camera, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const storyHighlights = [
    { id: 1, image: 'https://images.unsplash.com/photo-1511994298241-608e28f14f66?q=80&w=2070&auto=format&fit=crop', label: 'Meta 2024' },
    { id: 2, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop', label: 'Comunidad' },
    { id: 3, image: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=2070&auto=format&fit=crop', label: 'Ruta Sur' },
    { id: 4, image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77891?q=80&w=2070&auto=format&fit=crop', label: 'Vilcabamba' },
];

export function CommunityLegacy() {
    return (
        <section id="comunidad" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Industrial Grunge Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/asphalt.png')` }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mb-20">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-racing-red font-black uppercase tracking-[0.4em] text-xs mb-4"
                    >
                        Trayectoria & Comunidad
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
                    >
                        MÁS QUE UNA TIENDA, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-white italic">UNA TRADICIÓN</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-light text-lg max-w-2xl"
                    >
                        Impulsando el ecosistema ciclista de Loja por más de dos décadas. Somos el corazón de la pasión en la Montaña Arrugada.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Bento Block 1: Events */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-racing-red/40 transition-all duration-500"
                    >
                        <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Trophy size={300} className="text-white" />
                        </div>
                        <div className="relative z-10">
                            <span className="text-racing-red font-black text-6xl md:text-8xl italic block mb-4 tracking-tighter">22 AÑOS</span>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-4">Liderando la Copa Banco de Loja</h3>
                            <p className="text-gray-400 font-light text-sm max-w-lg leading-relaxed">
                                Más de dos décadas organizando el evento más prestigioso de la región. Una historia de resistencia, comunidad y superación constante en los terrenos más exigentes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Block 2: Trust/Social Stories */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center text-center group hover:border-racing-red/20 transition-all duration-500"
                    >
                        <div className="flex -space-x-4 mb-8">
                            {storyHighlights.map((story) => (
                                <div key={story.id} className="w-16 h-16 rounded-full border-4 border-racing-red p-1 bg-black relative">
                                    <img src={story.image} alt={story.label} className="w-full h-full rounded-full object-cover" />
                                    <div className="absolute inset-0 rounded-full bg-racing-red/20 animate-pulse" />
                                </div>
                            ))}
                        </div>
                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">Comunidad Sur Bike</h4>
                        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">#LaRutaDeLaLongevidad</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-racing-red animate-bounce">
                            <Camera size={14} /> Live Stories
                        </div>
                    </motion.div>

                    {/* Bento Block 3: Reach */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 p-10 rounded-3xl bg-gradient-to-br from-racing-red/20 to-transparent border border-white/5 group hover:border-racing-red/40 transition-all"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <Users className="text-racing-red" size={40} />
                            <span className="text-white/20 font-black text-4xl">02</span>
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4 italic">+5,000 Participantes</h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                            Recorriendo cada año las rutas emblemáticas desde La Tebaida hasta Vilcabamba y Malacatos.
                        </p>
                    </motion.div>

                    {/* Bento Block 4: Specialized Official */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 p-10 rounded-3xl bg-[#0d0d0d] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-racing-red/20 transition-all"
                    >
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                            <Award className="text-racing-red" size={40} />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">Distribuidor Oficial</h4>
                        <h3 className="text-xl font-black uppercase text-white">SPECIALIZED</h3>
                    </motion.div>

                    {/* Bento Block 5: Safety */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 p-10 rounded-3xl bg-[#080808] border border-white/5 relative overflow-hidden group hover:border-racing-red/40 transition-all"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck size={100} className="text-racing-red" />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-4">Protección Total</h4>
                        <h3 className="text-2xl font-black uppercase text-white mb-4">SEGURIDAD ANTE TODO</h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed">
                            Nuestros eventos incluyen pólizas de seguro de hasta <span className="text-white font-bold">$1,000</span> para cada corredor. Compromiso absoluto con tu integridad.
                        </p>
                    </motion.div>

                </div>

                {/* Authority Badges */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all hover:opacity-100 cursor-default">
                        <Zap className="text-racing-red" size={24} />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Soporte Técnico Fox</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all hover:opacity-100 cursor-default">
                        <Star className="text-racing-red" size={24} />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Certificado Magura</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all hover:opacity-100 cursor-default">
                        <Award className="text-racing-red" size={24} />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Elite Dealer 2026</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
