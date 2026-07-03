// app/services/page.tsx
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services - DevMundus',
  description:
    'Explore DevMundus services: custom software development, dedicated teams, product design & strategy, project costing, enterprise solutions, and ongoing support.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header activeSection="services" />
      <Services />
      <Footer />
    </div>
  );
}
