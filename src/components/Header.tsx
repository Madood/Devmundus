// components/Header.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  activeSection?: string;
}

// Logo component
function Logo({ variant = 'dark', showTagline = false }: { variant?: 'light' | 'dark', showTagline?: boolean }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-11 h-11 shrink-0 -translate-y-1">
        <Image
          src="/Devmundus_nobg.png"
          alt="DevMundus Logo"
          width={44}
          height={44}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <div className={`font-bold ${textColor} text-3xl leading-tight`}>
          DevMundus
        </div>
        {showTagline && (
          <div className="text-sm font-medium mt-0.5">
            <span className="text-teal-700">Innovation</span>{' '}
            <span className="text-teal-500">without borders</span>
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

  // Tracks the section currently in view via scrollspy. Stays null on pages
  // that don't have any of NAV_ITEMS' ids in the DOM (e.g. /services), so
  // `currentActive` below falls back to the static `activeSection` prop.
  const [scrollActiveSection, setScrollActiveSection] = useState<string | null>(null);

  // While true, IntersectionObserver updates are ignored — set for the
  // duration of a click-triggered smooth scroll so the target link doesn't
  // flicker back to whatever section is still on screen mid-scroll.
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const elements = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollActiveSection(entry.target.id);
          }
        });
      },
      {
        // A thin band just below the fixed header — whichever section
        // occupies it counts as "active".
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Resume scrollspy tracking once the user's scroll settles after a click.
  useEffect(() => {
    let scrollEndTimer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        isClickScrolling.current = false;
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollEndTimer);
    };
  }, []);

  const currentActive = scrollActiveSection ?? activeSection;

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    isClickScrolling.current = true;
    setScrollActiveSection(sectionId);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.replaceState(null, '', `#${sectionId}`);
      } else {
        console.warn(`Section with id '${sectionId}' not found`);
        isClickScrolling.current = false;
        // Fallback: check if we're on home page, if not, navigate to home
        if (window.location.pathname !== '/') {
          window.location.href = `/#${sectionId}`;
        }
      }
    }, 100);
  };

  const handleSolutionsClick = () => {
    scrollToSection('services');
  };

  const handleConsultationClick = () => {
    scrollToSection('contact');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Logo variant="dark" showTagline={true} />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-0 py-1 transition-all duration-200 relative ${currentActive === item.id
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                {item.label}
                {currentActive === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <Button variant="ghost" onClick={handleSolutionsClick}>
              Explore Solutions
            </Button>
            <Button
              onClick={handleConsultationClick}
              className="bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-600 hover:to-teal-400"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        <nav
          className={`xl:hidden absolute left-4 right-4 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-gray-100 bg-white shadow-xl p-3 origin-top transition-all duration-200 ease-out ${mobileMenuOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-3 px-4 transition-colors rounded-lg ${currentActive === item.id
                ? 'text-slate-900 bg-slate-100'
                : 'text-slate-600 hover:bg-slate-50'
                }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 mt-2 px-4 pb-1">
            <Button
              variant="outline"
              onClick={handleSolutionsClick}
              className="w-full justify-center"
            >
              Explore Solutions
            </Button>
            <Button
              onClick={handleConsultationClick}
              className="bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-600 hover:to-teal-400 w-full justify-center"
            >
              Request Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}