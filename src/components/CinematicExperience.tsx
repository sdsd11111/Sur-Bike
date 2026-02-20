'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CinematicExperience() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Video source - Placeholder for actual "Copa Banco de Loja" content
    const videoSrc = "https://player.vimeo.com/external/494252666.sd.mp4?s=727e3354bb0ce188778818d271361545d645520a&profile_id=164&oauth2_token_id=57447761";

    return (
        <section
            ref={containerRef}
            className="relative w-full overflow-hidden bg-zinc-100 py-16 md:py-32"
        >
            {/* Background light texture/image to break darkness */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}
            />

            <div className="container mx-auto px-6">
                {/* Header for the section (Light Theme) */}
                <div className="mb-12 text-center">
                    <h4 className="text-racing-red font-black uppercase tracking-[0.3em] text-xs mb-2">Exclusive Content</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
                        EPISODIOS <span className="text-racing-red">WORLD TOUR</span>
                    </h2>
                </div>

                <div className="relative aspect-video md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-black/5 bg-zinc-200">

                    {/* Light Placeholder Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
                        style={{ backgroundImage: `url('/images/cinematic-placeholder.jpg')` }}
                    />

                    {/* Parallax Video Background */}
                    <motion.div style={{ y, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover scale-110"
                        >
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </motion.div>

                    {/* Overlay: Vignette & Color Grade */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)] z-10 opacity-60" />

                    {/* Content Over the Video */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <h4 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter italic drop-shadow-2xl">
                                    Siente el <span className="text-racing-red">Terreno Técnico</span>
                                </h4>
                                <p className="text-white/90 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed drop-shadow-md">
                                    Desde los senderos ancestrales hacia Vilcabamba hasta la gloria máxima de la Copa Banco de Loja.
                                </p>
                            </div>

                            {/* Play Button - Pulse Effect */}
                            <div className="pt-4 flex flex-col items-center gap-4">
                                <motion.button
                                    onClick={() => setIsOpen(true)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative flex items-center justify-center group"
                                >
                                    <span className="absolute inset-0 rounded-full bg-racing-red opacity-30 animate-pulse group-hover:scale-110" />
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-racing-red rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(227,6,19,0.5)] transition-transform group-hover:rotate-12">
                                        <Play className="text-white fill-current translate-x-1" size={32} />
                                    </div>
                                </motion.button>

                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="text-white font-black uppercase tracking-[0.3em] text-[11px] md:text-xs hover:text-racing-red transition-colors duration-300 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10"
                                >
                                    Ver Episodio Completo
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Corner Branding */}
                    <div className="absolute top-8 right-8 z-20 opacity-40">
                        <span className="text-xl font-black text-white tracking-tighter opacity-10">SUR BIKE</span>
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <iframe
                                src={`https://player.vimeo.com/video/494252666?autoplay=1&title=0&byline=0&portrait=0`}
                                className="w-full h-full"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
