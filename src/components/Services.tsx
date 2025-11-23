'use client';

import { Code, Building2, Calculator, Users, Rocket, Shield } from 'lucide-react';

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
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description:
        'Build tailored digital products from scratch. Full-stack development with modern technologies to bring your vision to life.',
      features: [
        'Web & mobile app development',
        'Cloud-native architecture',
        'API design & integration',
        'Modern tech stack (React, Node.js, etc.)',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Users,
      title: 'Dedicated Development Teams',
      description:
        'Extend your in-house capabilities with our skilled engineers. Scale your team up or down based on project needs.',
      features: [
        'Pre-vetted senior developers',
        'Seamless team integration',
        'Flexible engagement models',
        'Direct communication & collaboration',
      ],
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Rocket,
      title: 'Product Design & Strategy',
      description:
        'Transform ideas into market-ready products. UX/UI design, technical architecture, and go-to-market planning.',
      features: [
        'User research & validation',
        'Wireframing & prototyping',
        'UI/UX design system',
        'Technical roadmap planning',
      ],
      color: 'from-emerald-600 to-emerald-700',
    },
    {
      icon: Calculator,
      title: 'Project Costing & Estimation',
      description:
        'Get transparent, detailed cost breakdowns before you commit. Understand scope, timeline, and resource requirements.',
      features: [
        'Itemized project estimates',
        'Timeline & milestone planning',
        'Risk assessment & mitigation',
        'Flexible payment structures',
      ],
      color: 'from-orange-600 to-orange-700',
    },
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description:
        'Large-scale systems for complex business needs. Scalable architecture, security, and compliance-first development.',
      features: [
        'Enterprise architecture design',
        'Legacy system modernization',
        'SOC 2 & GDPR compliance',
        'Performance & scalability optimization',
      ],
      color: 'from-pink-600 to-pink-700',
    },
    {
      icon: Shield,
      title: 'Ongoing Support & Maintenance',
      description:
        'Long-term partnership beyond launch. Continuous improvement, monitoring, updates, and technical support.',
      features: [
        '24/7 monitoring & support',
        'Regular updates & improvements',
        'Performance optimization',
        'Security patches & compliance',
      ],
      color: 'from-indigo-600 to-indigo-700',
    },
  ];

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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100 bg-white rounded-2xl shadow-sm"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </div>
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
                <Button
                  variant="outline"
                  className="w-full border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  onClick={() => handleButtonClick('contact')}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
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
