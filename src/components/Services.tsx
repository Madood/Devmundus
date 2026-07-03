'use client';

import Link from 'next/link';
import { ImageWithFallback } from '@/figma/ImageWithFallback';
import { services } from '@/data/services';

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

// Button component
interface ButtonProps {
  variant?: 'default' | 'outline';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

function Button({ variant = 'default', onClick, className = '', children }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center";

  const variantClasses = {
    default: "bg-white text-slate-900 hover:bg-slate-100",
    outline: "border border-white text-white hover:bg-white hover:text-slate-900"
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

export function Services({ onNavigate }: ServicesProps) {
  const handleButtonClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderCard = (service: (typeof services)[number]) => {
    const Icon = service.icon;
    return (
      <Link
        key={service.slug}
        href={`/services/${service.slug}`}
        className="group block overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 bg-white rounded-2xl shadow-sm"
      >
        <div className="relative aspect-video">
          <ImageWithFallback
            src={service.image}
            alt={service.imageAlt}
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-linear-to-t ${service.color} opacity-30`} />
          <div
            className={`absolute bottom-4 left-4 w-14 h-14 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white/20`}
          >
            <Icon className="text-white" size={26} />
          </div>
        </div>
        <div className="p-8">
          <h3 className="mb-3 text-slate-900 text-xl font-semibold">{service.title}</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-700">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    );
  };

  return (
    <section id="services" className="py-28 px-6 bg-linear-to-b from-white to-slate-50">
      <div className="container mx-auto">
        {/* SECTION HEADING */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full mb-6 font-medium">
            Our Services
          </div>
          <h2 className="mb-6 text-slate-900 text-3xl md:text-4xl font-semibold">
            Complete Product Development Solutions
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From initial concept through long-term support, <strong>DevMundus</strong> handles every phase of your
            product journey. Our comprehensive services ensure seamless delivery and sustainable growth.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(renderCard)}
        </div>

        {/* CTA SECTION */}
        <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 md:p-16 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="bg-linear-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent mb-6 text-2xl font-semibold">
              Ready to Build Your Next Digital Product?
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Schedule a consultation to discuss your project. We&apos;ll provide a detailed roadmap, accurate cost
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                onClick={() => handleButtonClick('contact')}
                className="px-8 bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-600 hover:to-teal-400"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => handleButtonClick('contact')}
                className="px-8 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
              >
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
