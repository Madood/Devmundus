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

      {/* Each section below already declares its own id — do not wrap in
          another <section id="..."> here, or the page ends up with
          duplicate ids and scrollspy/getElementById break. */}
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

      <Footer />
    </div>
  );
}