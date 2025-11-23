'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
        activeSection?: string;
}

// Logo component with actual Logo.png image
function Logo({ variant = 'dark', showTagline = false }: { variant?: 'light' | 'dark', showTagline?: boolean }) {
        const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';

        return (
                <div className="flex items-center gap-4">
                        {/* Logo Image */}
                        <div className="relative w-14 h-14 shrink-0">
                                <Image
                                        src="/Logo.png"
                                        alt="DevMundus Logo"
                                        width={56}
                                        height={56}
                                        className="object-contain"
                                        priority
                                />
                        </div>

                        {/* Logo Text */}
                        <div className="flex flex-col">
                                <div className={`font-bold ${textColor} text-3xl leading-tight`}>
                                        DevMundus
                                </div>
                                {showTagline && (
                                        <div className="text-sm font-medium mt-0.5">
                                                <span className="text-teal-700">Build</span>{' '}
                                                <span className="text-teal-500">with confidence</span>
                                        </div>
                                )}
                        </div>
                </div>
        );
}

// Button component
interface ButtonProps {
        variant?: 'default' | 'ghost' | 'outline';
        onClick?: () => void;
        className?: string;
        children: React.ReactNode;
}

function Button({ variant = 'default', onClick, className = '', children }: ButtonProps) {
        const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";

        const variantClasses = {
                default: "bg-slate-900 text-white hover:bg-slate-800",
                ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                outline: "border border-slate-300 text-slate-700 hover:bg-slate-50"
        };

        return (
                <button
                        onClick={onClick}
                        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
                >
                        {children}
                </button>
        );
}

export function Header({ activeSection = '' }: HeaderProps) {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

        const navItems = [
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' },
        ];

        const handleNavigate = (sectionId: string) => {
                const element = document.getElementById(sectionId);
                if (element) {
                        // Add offset for fixed header
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                                top: elementPosition - offset,
                                behavior: 'smooth'
                        });
                }
                setMobileMenuOpen(false);
        };

        const handleContactClick = () => {
                handleNavigate('contact');
        };

        return (
                <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
                        <div className="container mx-auto px-6 py-4">
                                <div className="flex items-center justify-between">
                                        {/* Logo with image */}
                                        <Logo variant="dark" showTagline={true} />

                                        {/* Desktop Navigation */}
                                        <nav className="hidden lg:flex items-center gap-10">
                                                {navItems.map((item) => (
                                                        <button
                                                                key={item.id}
                                                                onClick={() => handleNavigate(item.id)}
                                                                className={`transition-all duration-200 relative ${activeSection === item.id
                                                                        ? 'text-slate-900'
                                                                        : 'text-slate-600 hover:text-slate-900'
                                                                        }`}
                                                        >
                                                                {item.label}
                                                                {activeSection === item.id && (
                                                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900" />
                                                                )}
                                                        </button>
                                                ))}
                                        </nav>

                                        {/* Desktop Buttons */}
                                        <div className="hidden lg:flex items-center gap-3">
                                                <Button variant="ghost" onClick={handleContactClick}>
                                                        Schedule Demo
                                                </Button>
                                                <Button
                                                        onClick={handleContactClick}
                                                        className="bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-600 hover:to-teal-400"
                                                >
                                                        Get Started
                                                </Button>
                                        </div>

                                        {/* Mobile Menu Button */}
                                        <button
                                                className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                        >
                                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                        </button>
                                </div>

                                {/* Mobile Navigation */}
                                {mobileMenuOpen && (
                                        <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
                                                {navItems.map((item) => (
                                                        <button
                                                                key={item.id}
                                                                onClick={() => handleNavigate(item.id)}
                                                                className={`text-left py-3 px-4 transition-colors rounded-lg ${activeSection === item.id
                                                                        ? 'text-slate-900 bg-slate-100'
                                                                        : 'text-slate-600 hover:bg-slate-50'
                                                                        }`}
                                                        >
                                                                {item.label}
                                                        </button>
                                                ))}
                                                <div className="flex flex-col gap-2 mt-2 px-4">
                                                        <Button
                                                                variant="outline"
                                                                onClick={handleContactClick}
                                                                className="w-full justify-center"
                                                        >
                                                                Schedule Demo
                                                        </Button>
                                                        <Button
                                                                onClick={handleContactClick}
                                                                className="bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-600 hover:to-teal-400 w-full justify-center"
                                                        >
                                                                Get Started
                                                        </Button>
                                                </div>
                                        </nav>
                                )}
                        </div>
                </header>
        );
}