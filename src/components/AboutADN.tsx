'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Settings, ShieldCheck, Mountain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatProps {
    label: string;
    value: string;
    delay: number;
}

const Stat = ({ label, value, delay }: StatProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex flex-col gap-1"
    >
        <span className="text-3xl md:text-4xl font-black text-racing-red tracking-tighter">
            {value}
        </span>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 leading-tight">
            {label}
        </span>
    </motion.div>
);

export function AboutADN() {
    return (
        <section id="adn" className="py-24 bg-[#0a0a0a] overflow-hidden text-white">
            <div className="container mx-auto px-6">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-racing-red mb-2">
                        Identidad Corporativa
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        NUESTRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ADN</span>
                    </h3>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[240px]">

                    {/* Block 1: Main Story (L-Shape/Large) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 md:row-span-2 bg-gradient-to-br from-carbon-light to-black border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col justify-end relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                            <Mountain size={300} strokeWidth={1} />
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-none italic">
                                Forjados en la <br />
                                <span className="text-racing-red">Geografía de Loja</span>
                            </h4>
                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl font-light">
                                No somos una tienda convencional; somos una boutique de alto rendimiento diseñada para el terreno técnico y los grandes desniveles de nuestra provincia. Aprovechamos la topografía accidentada que da vida a la "Montaña Arrugada" para ofrecerte equipos que transforman cada desafío en una ventaja competitiva. Nuestra alianza con Specialized nos permite traer a Loja piezas de colección global y tecnología de punta.
                            </p>
                        </div>
                    </motion.div>

                    {/* Block 2: Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 md:row-span-2 bg-carbon-light border border-white/5 rounded-2xl overflow-hidden relative group"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            style={{ backgroundImage: `url('/images/boutique-concept.jpg')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <span className="text-[10px] font-black uppercase tracking-widest text-racing-red">Boutique Concept</span>
                            <p className="text-white font-bold text-lg uppercase tracking-tight">Experiencia World Tour en el Sur</p>
                        </div>
                    </motion.div>

                    {/* Block 3: Stats/Iconos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 md:row-span-1 bg-gradient-to-r from-racing-red/10 to-transparent border border-racing-red/20 p-8 rounded-2xl flex items-center justify-between gap-4"
                    >
                        <Stat label="Ediciones Copa B. Loja" value="+22" delay={0.6} />
                        <div className="w-px h-12 bg-white/10 hidden sm:block" />
                        <Stat label="Specialized Elite" value="Distr." delay={0.8} />
                        <div className="w-px h-12 bg-white/10 hidden sm:block" />
                        <Stat label="Certificación Fox" value="S.T." delay={1.0} />
                    </motion.div>

                    {/* Block 4: Simbiótica */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 md:row-span-1 bg-black border border-white/5 p-8 rounded-2xl flex flex-col justify-center gap-2 group hover:border-racing-red/30 transition-colors duration-500"
                    >
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-racing-red w-6 h-6" />
                            <h4 className="text-lg font-black uppercase tracking-widest">Simbiótica con el Entorno</h4>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                            Sur Bike y el proyecto <span className="text-white font-medium">Montaña Arrugada</span> operan en conjunto para liderar el ecosistema de ciclismo en Ecuador, impulsando el turismo deportivo y eventos de gran escala en la Ruta de la Longevidad.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
