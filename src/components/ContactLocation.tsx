'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Send, ChevronDown, Shield, Clock, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

const interestOptions = [
    'Consulta sobre Bicicletas Specialized',
    'Agendar Revisión Técnica GRATIS',
    'Inscripción Copa Banco de Loja 2025',
    'Alquiler de E-Bikes / Alta Gama',
];

export function ContactLocation() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
    };

    return (
        <section id="contacto" className="py-24 bg-[#030303] text-white relative overflow-hidden">
            {/* Subtle grid texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-racing-red font-black uppercase tracking-[0.4em] text-xs mb-4"
                    >
                        Ubicación & Contacto
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]"
                    >
                        BENEFICIOS EXCLUSIVOS EN EL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-red to-white italic">CORAZÓN DE LOJA</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Column 1: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[500px] group"
                    >
                        {/* Google Maps Embed - Dark Styled */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.097770915587!2d-79.20186609999999!3d-4.0003196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37007350355f%3A0x4895620f17729a4a!2sSur%20bike%20Zpecialaiced!5e0!3m2!1ses-419!2sec!4v1771623280627!5m2!1ses-419!2sec"
                            className="absolute inset-0 w-full h-full transition-all duration-700"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* Floating Info Card */}
                        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm z-20">
                            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-racing-red flex items-center justify-center shrink-0">
                                        <MapPin className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-sm uppercase tracking-wider">Sur Bike - Tienda Principal</h4>
                                        <p className="text-gray-400 text-xs mt-1">Calle Azuay entre 24 de Mayo y Pasaje Sinchona, Loja</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                                    Maximiza tu inversión con hasta el 15% de descuento directo y diferidos sin intereses con tarjetas Banco de Loja y JEP.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-racing-red">
                                        <Clock size={12} /> Lun - Sáb: 9:00 - 18:00
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Racing Red Pin Marker */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-20 pointer-events-none">
                            <div className="relative">
                                <div className="w-8 h-8 bg-racing-red rounded-full border-4 border-white shadow-lg shadow-racing-red/50" />
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-transparent border-t-racing-red" />
                                <div className="absolute inset-0 rounded-full bg-racing-red animate-ping opacity-30" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nombre Completo"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-racing-red focus:bg-white/[0.03] transition-all duration-300"
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-racing-red focus:bg-white/[0.03] transition-all duration-300"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Teléfono / WhatsApp"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-racing-red focus:bg-white/[0.03] transition-all duration-300"
                                />
                            </div>

                            {/* Custom Select: Interest */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                                    className={cn(
                                        "w-full bg-white/5 border rounded-xl px-6 py-4 text-sm font-medium text-left flex items-center justify-between transition-all duration-300",
                                        formData.interest ? "text-white border-racing-red/50" : "text-gray-600 border-white/10",
                                        isSelectOpen && "border-racing-red"
                                    )}
                                >
                                    <span>{formData.interest || '¿En qué estás interesado?'}</span>
                                    <ChevronDown size={16} className={cn("text-gray-500 transition-transform duration-300", isSelectOpen && "rotate-180 text-racing-red")} />
                                </button>

                                {isSelectOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute z-50 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
                                    >
                                        {interestOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => {
                                                    setFormData({ ...formData, interest: option });
                                                    setIsSelectOpen(false);
                                                }}
                                                className="w-full px-6 py-3 text-sm text-left text-gray-400 hover:text-white hover:bg-racing-red/10 transition-all duration-200 border-b border-white/5 last:border-b-0"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="¿Listo para subir de nivel? Cuéntanos qué buscas: Asesoría en compra, cita técnica o inscripción a eventos."
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm font-medium placeholder:text-gray-600 focus:outline-none focus:border-racing-red focus:bg-white/[0.03] transition-all duration-300 resize-none"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="group relative w-full py-5 bg-racing-red text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl overflow-hidden shadow-2xl shadow-racing-red/20 hover:shadow-racing-red/40 transition-shadow duration-500"
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isSent ? (
                                        '¡Mensaje Enviado! ✅'
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Enviar a los Expertos
                                        </>
                                    )}
                                </span>
                            </button>

                            {/* Trust Signals */}
                            <div className="pt-6 space-y-4">
                                <div className="flex flex-wrap items-center justify-center gap-6">
                                    <a
                                        href="https://wa.me/593900000000"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:border-racing-red/50 transition-all"
                                    >
                                        <MessageCircle size={14} className="text-green-500" /> WhatsApp Directo
                                    </a>
                                    <a
                                        href="tel:+593999999999"
                                        className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:border-racing-red/50 transition-all"
                                    >
                                        <Phone size={14} className="text-racing-red" /> Llamar Ahora
                                    </a>
                                </div>

                                <div className="flex items-center justify-center gap-6 pt-2 opacity-40">
                                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                                        <CreditCard size={12} /> Crédito Inmediato
                                    </div>
                                    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                                        <Shield size={12} /> Datos Protegidos
                                    </div>
                                </div>

                                <p className="text-center text-[9px] text-white/20 uppercase tracking-widest font-bold">
                                    Tus datos están protegidos. Sur Bike garantiza privacidad total.
                                </p>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
