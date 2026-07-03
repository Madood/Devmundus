// components/Footer.tsx

import { Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function FooterLogo({
  variant = 'dark',
  showTagline = false
}: {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';

  return (
    <div className="flex items-center gap-3">
      {/* Logo */}
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src="/Logo-bl.png"
          alt="DevMundus Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col">
        <div className={`font-bold ${textColor} text-2xl leading-tight`}>
          <span className="bg-linear-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
            DevMundus
          </span>
        </div>

        {showTagline && (
          <div className="text-xs text-slate-400 mt-0.5">
            Innovation without borders
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
      { label: 'Custom Development', href: '/#services' },
      { label: 'Dedicated Teams', href: '/#services' },
      { label: 'Product Design', href: '/#services' },
      { label: 'Project Costing', href: '/#services' }
    ],
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Partners', href: '#' }
    ],
    resources: [],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://x.com/devmundus',
      label: 'Twitter'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/109732186/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:enterprise@devmundus.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <FooterLogo variant="light" showTagline />
            </div>

            <p className="text-slate-400 mb-6 leading-relaxed">
              US-registered company with development base in Pakistan.
              Building world-class digital products from concept to
              launch and beyond.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith('http');

                return (
                  <Link
                    key={index}
                    href={social.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <Icon size={18} className="text-slate-400" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-6 text-white font-semibold">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-white font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 text-white font-semibold">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} DevMundus Technologies Inc. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}