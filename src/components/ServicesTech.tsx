'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, Bike, ClipboardCheck, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    badge?: string;
    delay: number;
    image: string;
}

const ServiceCard = ({ icon: Icon, title, description, badge, delay, image }: ServiceCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-racing-red/50 transition-all duration-500 overflow-hidden min-h-[320px] flex flex-col"
    >
        {/* Background Image with Overlay */}
        <div
            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-40"
            style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-racing-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />

        <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 group-hover:border-racing-red/30 group-hover:bg-racing-red/10 transition-colors duration-500">
                <Icon className="text-white group-hover:text-racing-red transition-colors duration-500" size={28} />
            </div>

            {badge && (
                <span className="absolute top-0 right-0 px-2 py-1 rounded-md bg-racing-red text-[10px] font-black uppercase tracking-widest text-white animate-pulse">
                    {badge}
                </span>
            )}

            <h4 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-racing-red transition-colors">
                {title}
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light group-hover:text-gray-200 transition-colors">
                {description}
            </p>

            <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-racing-red opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                Explorar Servicio <ArrowRight size={12} />
            </div>
        </div>
    </motion.div>
);

export function ServicesTech() {
    return (
        <section id="servicios" className="py-24 bg-black relative overflow-hidden text-white">
            {/* Carbon Fiber Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Title */}
                <div className="max-w-3xl mb-16">
                    <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-racing-red font-black uppercase tracking-[0.4em] text-xs mb-4"
                    >
                        Ingeniería de Precisión para tu Máquina
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
                    >
                        MANTÉN TU BICICLECTA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-white/40">AL NIVEL DE LA COMPETICIÓN</span>
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <ServiceCard
                        icon={Wrench}
                        title="Taller Especializado"
                        description="Mantenimiento integral de suspensiones Fox y purgado de sistemas de frenado Magura MT7 Pro."
                        image="/images/workshop-service.jpg"
                        delay={0.3}
                    />
                    <ServiceCard
                        icon={Cpu}
                        title="Optimización Digital"
                        description="Ajuste y configuración de transmisiones electrónicas y mecánicas. Diagnóstico computarizado para rendimiento elite."
                        image="/images/digital-tuning.jpg"
                        delay={0.4}
                    />
                    <ServiceCard
                        icon={ClipboardCheck}
                        title="Diagnóstico GRATIS"
                        description="Revisión y diagnóstico GRATIS. Identificamos con exactitud las necesidades de tu equipo antes de cada ruta."
                        image="/images/free-diagnostic.jpg"
                        delay={0.4}
                    />
                    <ServiceCard
                        icon={Bike}
                        title="Alquiler Premium"
                        description="Experimenta la tecnología Specialized antes de comprar. Alquiler de modelos premium para rutas hacia Vilcabamba y Malacatos."
                        image="/images/premium-rental.jpg"
                        delay={0.5}
                    />
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl p-8 md:p-12 overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-racing-red to-red-900 opacity-90 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 text-white">
                                ¿Tu bici necesita un tune-up?
                            </h3>
                            <p className="text-white/80 font-light text-sm md:text-base">
                                Agenda tu diagnóstico gratuito hoy mismo y siente la diferencia en el terreno.
                            </p>
                        </div>

                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
                            <Calendar size={18} />
                            Reservar Cita en el Taller
                        </button>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-[10px] uppercase font-bold tracking-[0.2em] text-white/20"
                >
                    Soporte Técnico Oficial en el Corazón Comercial de Loja • Sur Bike Elite Center
                </motion.p>
            </div>
        </section>
    );
}
