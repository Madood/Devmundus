// components/testimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  project: string;
}

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Field",
      role: "CEO",
      company: "AnonymouslyUrs",
      image: "/avatars/john-field.jpg",
      rating: 5,
      text: "These guys helped us alot with our Azure setup and the AI chatbot system. Token system, Node backend, React frontend — all working smooth now. Payments running fine too which was a big headache before. I like how they fix stuff quick without making things too techy. Good team to work with.",
      project: "Azure + Node + React AI Chatbot"
    },
    {
      id: 2,
      name: "Redex Team",
      role: "Development Team",
      company: "Redex",
      image: "/avatars/redex-team.jpg",
      rating: 4.2,
      text: "We needed a simple job app for iOS and they built it just the way we wanted. The React Native app is fast and easy. App Store approved it in the first go, no issue. Over all good experiance working with them.",
      project: "React Native Job App (iOS App Store)"
    },
    {
      id: 3,
      name: "AbuBakar Ghayyur",
      role: "Business Owner",
      company: "Brick Market App",
      image: "/avatars/abubakar-ghayyur.jpg",
      rating: 5,
      text: "The app they made for our brick selling/buying is realy helpful. Prices update automaticly and we can check rates quick. People here use it daily without confussion. Simple, easy and perfect for our local market work.",
      project: "Local Business Brick Trading App"
    },
    {
      id: 4,
      name: "Smrithi Kapoor",
      role: "Project Manager",
      company: "Mitroo App",
      image: "/avatars/smrithi-kapoor.jpg",
      rating: 5,
      text: "Mitroo app came out beter then I thought. Video and audio calls work fine even on normal Indian netwroks. App is clean and easy to use. They listened properly and fixed any issue fast. Very happy with the final result.",
      project: "Video & Audio Calling App - India"
    },
    {
      id: 5,
      name: "Muhammad",
      role: "Client",
      company: "Family Heritage Project",
      image: "/avatars/muhammad.jpg",
      rating: 4.7,
      text: "I wanted a clean website to show my family lineage and they made it exactly how I imagened. The React site is fast and family can use it easily. They also understood our cultural requirments. Very satisfied with the work.",
      project: "Ancestry Lineage Website (Saudi)"
    },
    {
      id: 6,
      name: "Alexander kalucki",
      role: "CTO",
      company: "TechScale Inc.",
      image: "/avatars/Alexander-Wojdela.jpg",
      rating: 4,
      text: "DevMundus delivered exceptional quality on our mobile app project. Their team's expertise in React Native and backend development helped us launch 3 weeks ahead of schedule. The communication was seamless across time zones.",
      project: "Mobile Banking Application"
    },
    {
      id: 7,
      name: "Michael Kaminski",
      role: "Product Director",
      company: "Finova Solutions",
      image: "/avatars/michael-Kaminski.jpg",
      rating: 4.5,
      text: "Working with DevMundus has been transformative. Their developers integrated perfectly with our team, and the cost savings allowed us to invest more in marketing. The quality matches what we'd expect from Silicon Valley talent.",
      project: "Financial Analytics Platform"
    },
    {
      id: 8,
      name: "David Thomas",
      role: "VP Engineering",
      company: "CloudSafe",
      image: "/avatars/david-kim.jpg",
      rating: 4,
      text: "Enterprise-grade security and robust architecture were crucial for our SaaS platform. DevMundus not only delivered on security but also implemented scalable solutions that handle our growing user base efficiently.",
      project: "Enterprise Security SaaS"
    },
    {
      id: 9,
      name: "Zara Jahan",
      role: "Founder",
      company: "CSS-edu Labs",
      image: "/avatars/lisa-thompson.jpg",
      rating: 4,
      text: "As a startup, budget was critical. DevMundus provided top-tier talent at 40% less than local agencies. Their agile development process and weekly demos kept us aligned throughout the project.",
      project: "EdTech Learning Platform"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-28 px-6 bg-slate-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full mb-6 font-medium">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            Trusted by Industry Leaders & Startups
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Discover why startups, agencies, and enterprises choose DevMundus as their technology partner for digital excellence.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card 
            className="p-8 md:p-12 relative overflow-hidden border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-teal-100" aria-hidden="true">
              <Quote size={48} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="mb-6">
                <StarRating rating={testimonials[currentTestimonial].rating} />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl leading-relaxed text-slate-700 mb-8 font-light">
                {testimonials[currentTestimonial].text}
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 bg-linear-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md"
                  aria-hidden="true"
                >
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-slate-600">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Project */}
              <div className="text-sm text-teal-600 font-medium">
                Project: {testimonials[currentTestimonial].project}
              </div>
            </div>
          </Card>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                    index === currentTestimonial 
                      ? 'bg-teal-600 scale-110' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentTestimonial ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm text-slate-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">24h</div>
              <div className="text-sm text-slate-600">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}