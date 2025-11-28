'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiry: '',
    budget: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co service - no backend required
      const response = await fetch('https://formsubmit.co/ajax/enterprise@devmundus.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          inquiry: formData.inquiry,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          inquiry: '',
          budget: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or email us directly at enterprise@devmundus.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'enterprise@devmundus.com',
      subValue: 'Response within 24 hours',
      link: 'mailto:enterprise@devmundus.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+48 729 624 828',
      subValue: 'Mon-Fri, 9AM-6PM CET',
      link: 'tel:+48729624828'
    },
    {
      icon: MapPin,
      title: 'Warsaw Office',
      value: 'Warsaw, Poland',
      subValue: 'Global offices available',
      link: null
    },
    {
      icon: Clock,
      title: 'Support Hours',
      value: '24/7 Enterprise Support',
      subValue: 'Premium clients only',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 bg-slate-50">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-right-5 duration-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Thank you for reaching out! Our team will contact you within 24 hours.
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
            Get in Touch
          </div>
          <h2 className="mb-4 text-slate-900 text-3xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s Discuss Your Needs
          </h2>
          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re looking to hire top talent, seeking opportunities as a developer, 
            or need project cost estimation, our team is here to help.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const Content = info.link ? (
              <a
                href={info.link}
                className="text-slate-700 hover:text-slate-900 transition-colors block mb-1 font-medium"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {info.value}
              </a>
            ) : (
              <p className="text-slate-700 mb-1 font-medium">{info.value}</p>
            );

            return (
              <div 
                key={index} 
                className="group p-6 text-center bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-linear-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="mb-3 text-slate-900 font-semibold text-lg">{info.title}</h4>
                {Content}
                <p className="text-sm text-slate-500 mt-2">{info.subValue}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto p-6 lg:p-10 bg-white border border-slate-200 rounded-2xl shadow-xl">
          <div className="mb-8 text-center">
            <h3 className="mb-3 text-slate-900 text-2xl lg:text-3xl font-bold">
              Send Us a Message
            </h3>
            <p className="text-slate-600 text-lg">
              Fill out the form below and we&apos;ll get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                  Company Name *
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Corporation"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-semibold text-slate-700">
                  Your Role *
                </label>
                <input
                  id="role"
                  type="text"
                  placeholder="CTO, VP Engineering, etc."
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="inquiry" className="block text-sm font-semibold text-slate-700">
                  Inquiry Type *
                </label>
                <select
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  <option value="">Select inquiry type</option>
                  <option value="hiring">Hire Developers</option>
                  <option value="costing">Project Cost Estimation</option>
                  <option value="managed">Managed Services</option>
                  <option value="developer">I&apos;m a Developer</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-semibold text-slate-700">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="<50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                Project Details *
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your project requirements, timeline, team size needed, or any specific questions..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg--to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 disabled:from-slate-400 disabled:to-slate-300 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  Submit Request
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center pt-4 border-t border-slate-200">
              By submitting this form, you agree to our privacy policy and terms of service.
              We respect your data and will never share it with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}