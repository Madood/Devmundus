// app/services/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Search, FileText, Lock, Clock, Rocket } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ImageWithFallback } from '@/figma/ImageWithFallback';
import { services } from '@/data/services';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

const process = [
  { icon: Search, title: 'Project Discovery', description: 'A deep-dive into requirements, goals and tech stack.' },
  { icon: FileText, title: 'Project Proposal', description: 'A detailed proposal with timeline, team and pricing.' },
  { icon: Lock, title: 'NDA Signing', description: 'We protect your ideas with a mutual non-disclosure agreement.' },
  { icon: Clock, title: '40-Hour Free Trial', description: 'Evaluate quality and fit before any long-term commitment.' },
  { icon: Rocket, title: 'Contract & Kickoff', description: 'Formalise the engagement and start building.' },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: 'Service Not Found - DevMundus' };
  }

  return {
    title: `${service.title} - DevMundus`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <div className="min-h-screen">
      <Header activeSection="services" />

      <section className="pt-32 sm:pt-40 pb-20 px-6 bg-linear-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-10"
          >
            <ArrowLeft size={18} />
            <span>All Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div
                className={`w-20 h-20 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
              >
                <Icon className="text-white" size={40} />
              </div>

              <h1 className="mb-6 text-slate-900 text-3xl md:text-5xl font-semibold">{service.title}</h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">{service.longDescription}</p>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium bg-linear-to-r from-teal-700 to-teal-500 text-white hover:from-teal-600 hover:to-teal-400 transition-colors duration-200"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                <ImageWithFallback src={service.image} alt={service.imageAlt} className="object-cover" />
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-25 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-5 rounded-xl shadow-xl ring-1 ring-slate-900/5">
                <div
                  className={`text-xl sm:text-2xl mb-1 font-bold bg-linear-to-br ${service.color} bg-clip-text text-transparent`}
                >
                  {service.stats[0].value}
                </div>
                <div className="text-slate-600 text-xs sm:text-sm">{service.stats[0].label}</div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {service.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 bg-white border border-slate-100 rounded-xl shadow-sm"
              >
                <div
                  className={`text-2xl md:text-3xl font-bold mb-1 bg-linear-to-br ${service.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                <CheckCircle2 className="text-teal-600 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-slate-900 text-2xl md:text-3xl font-semibold text-center">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="relative p-6 border border-slate-100 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 bg-linear-to-br ${service.color} rounded-lg flex items-center justify-center shadow-md shrink-0`}
                    >
                      <StepIcon className="text-white" size={20} />
                    </div>
                    <span className="text-slate-300 text-3xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-2 text-slate-900 font-semibold">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-slate-900 text-2xl md:text-3xl font-semibold text-center">
            Explore Other Services
          </h2>
        </div>

        <div
          className="overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
        >
          <div className="flex gap-6 w-max animate-marquee">
            {[...otherServices, ...otherServices].map((other, index) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={`${other.slug}-${index}`}
                  href={`/services/${other.slug}`}
                  className="group w-64 shrink-0 p-5 border border-slate-100 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-linear-to-br ${other.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <OtherIcon className="text-white" size={22} />
                  </div>
                  <h3 className="mb-2 text-slate-900 font-semibold flex items-center gap-2">
                    {other.title}
                    <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{other.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
