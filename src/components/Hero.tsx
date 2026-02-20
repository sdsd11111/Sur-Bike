'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Carbon Texture & Cinematic Image */}
            <div className="absolute inset-0 bg-carbon z-0" />

            {/* High-Quality Cycling Background (cinematic shot) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-70"
                style={{
                    backgroundImage: `url('/images/workshop-service.jpg')`,
                }}
            />

            {/* Aggressive Dark Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl">
                    {/* Official Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-racing-red/10 border border-racing-red/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
                    >
                        <Trophy className="w-4 h-4 text-racing-red" />
                        <span className="text-[10px] sm:text-xs font-bold text-racing-red tracking-[0.2em] uppercase">
                            Sede Oficial XXII Edición Copa Banco de Loja
                        </span>
                    </motion.div>

                    {/* Main Realistic Copy */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 uppercase"
                    >
                        RENDIMIENTO <br />
                        <span className="text-racing-red">SIN CONCESIONES</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg text-gray-300 max-w-xl mb-10 leading-relaxed font-light"
                    >
                        Boutique de alto rendimiento en Loja. Distribuidor oficial de <span className="text-white font-bold underline decoration-racing-red underline-offset-4">Specialized, Fox y Magura</span>. Servicio técnico certificado para ciclistas que buscan la máxima precisión en cada kilómetro.
                    </motion.p>

                    {/* Realistic CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="group relative px-8 py-4 bg-racing-red text-white font-black uppercase tracking-widest text-sm rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,6,19,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Explorar Inventario <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-black uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                            Inscribirme en la Copa
                        </button>
                    </motion.div>

                    {/* Subtle Key Benefits */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12 flex flex-wrap gap-8 opacity-60"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-racing-red" />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-white">Garantía Oficial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-racing-red" />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-white">Taller Certificado</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-racing-red" />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-white">Envíos a todo el país</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Side Visual Element (Carbon Pattern Gradient) */}
            <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-racing-red/5 to-transparent skew-x-[-15deg] translate-x-1/2 pointer-events-none" />

            {/* Animated Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-30"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
