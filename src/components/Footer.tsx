'use client';

import React from 'react';
import Link from 'next/link';
import { Rocket, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const partners = [
    { name: 'Banco de Loja', label: '15% Desc.' },
    { name: 'JEP' },
    { name: 'Specialized' },
    { name: 'Montaña Arrugada' }
];

export function Footer() {
    return (
        <footer className="bg-carbon-deep border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/5 group-hover:border-racing-red/30 transition-all">
                                <img
                                    src="/Logo.jpg"
                                    alt="Sur Bike Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-black text-white tracking-tighter">SUR BIKE</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Boutique de alto rendimiento y taller especializado en Loja, Ecuador. Elevamos tu nivel en cada pedalada.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-racing-red hover:border-racing-red transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-racing-red hover:border-racing-red transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-racing-red">Navegación</h4>
                        <ul className="space-y-4">
                            {['Garantía', 'Registro Eventos', 'Alquiler E-Bikes'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-500 text-sm hover:text-racing-red transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-racing-red">Ubicación</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors cursor-pointer group">
                                <MapPin className="w-5 h-5 text-racing-red shrink-0" />
                                <span className="text-sm">Calle Azuay entre 24 de Mayo y Pasaje Sinchona, Loja.</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
                                <Phone className="w-5 h-5 text-racing-red" />
                                <span className="text-sm font-medium">+593 99 999 9999</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
                                <Mail className="w-5 h-5 text-racing-red" />
                                <span className="text-sm font-medium">info@surbike.com.ec</span>
                            </div>
                        </div>
                    </div>

                    {/* Strategic Alliances */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-racing-red">Aliados</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {partners.map((partner) => (
                                <div key={partner.name} className="bg-white/5 border border-white/10 p-3 rounded-md flex flex-col items-center justify-center text-center group hover:border-racing-red/50 transition-all">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter group-hover:text-white">{partner.name}</span>
                                    {partner.label && (
                                        <span className="text-[9px] text-racing-red font-black mt-1 uppercase">{partner.label}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 text-center md:text-left">
                    <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
                        Diseñado por <Link href="https://cesarreyesjaramillo.com/" target="_blank" className="text-racing-red hover:underline decoration-white underline-offset-4 transition-all">Cesar Reyes</Link> | Sur Bike 2026
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-gray-600">
                        <Link href="#" className="hover:text-white">Privacidad</Link>
                        <Link href="#" className="hover:text-white">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
