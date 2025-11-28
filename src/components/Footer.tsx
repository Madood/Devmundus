// components/Footer.tsx
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function FooterLogo({ variant = 'dark', showTagline = false }: { variant?: 'light' | 'dark', showTagline?: boolean }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';

  return (
    <div className="flex items-center gap-3">
      {/* Logo Image */}
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src="/Logo-bl.png" // Fixed: Capital L to match your file name
          alt="DevMundus Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <div className={`font-bold ${textColor} text-2xl leading-tight`}>
          <span className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
            DevMundus
          </span>
        </div>
        {showTagline && (
          <div className="text-xs text-slate-400 mt-0.5">
            Build with confidence
          </div>
        )}
      </div>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: 'Custom Development', href: '#services' },
      { label: 'Dedicated Teams', href: '#services' },
      { label: 'Product Design', href: '#services' },
      { label: 'Project Costing', href: '#services' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
      { label: 'Partners', href: '#' }
    ],
    resources: [
      { label: 'Developer Hub', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <FooterLogo variant="light" showTagline={true} />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              US-registered company with development base in Pakistan. Building world-class
              digital products from concept to launch and beyond.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <Icon size={18} className="text-slate-400" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-white font-semibold">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-white font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-white font-semibold">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-white font-semibold">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} DevMundus Technologies Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <span>SOC 2 Certified</span>
            <span>•</span>
            <span>GDPR Compliant</span>
            <span>•</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}