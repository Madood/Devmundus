// app/page.tsx
import { Header } from '@/components/Header';
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/testimonial"; // Fixed import path
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header activeSection="home" />

      {/* Hero Section with ID */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section with ID (already in your About component) */}
      <About />

      {/* Services Section with ID */}
      <section id="services">
        <Services />
      </section>

      {/* Testimonials Section with ID */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact Section with ID */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}