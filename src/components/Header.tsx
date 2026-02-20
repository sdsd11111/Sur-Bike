'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Bicicletas', href: '#bicicletas' },
    { name: 'Taller', href: '#taller' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Alquiler', href: '#alquiler' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-black/80 backdrop-blur-md border-white/10 py-3'
                    : 'bg-transparent border-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-racing-red/50 transition-all duration-300">
                        <img
                            src="/Logo.jpg"
                            alt="Sur Bike Logo"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tighter text-white">SUR BIKE</span>
                        <span className="text-[10px] tracking-widest text-racing-red leading-none font-bold uppercase">High Performance</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-racing-red transition-colors duration-200 uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Action */}
                <div className="hidden md:block">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-racing-red text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-racing-red-hover transition-colors shadow-[0_0_15px_rgba(227,6,19,0.3)]"
                    >
                        Agendar Cita Taller
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-carbon-deep border-b border-white/10 absolute top-full left-0 right-0 p-6 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-white hover:text-racing-red transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full mt-4 py-3 bg-racing-red text-white font-bold uppercase tracking-widest rounded-md">
                        Agendar Cita Taller
                    </button>
                </motion.div>
            )}
        </header>
    );
}
