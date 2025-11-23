// 'use client';

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

// export function Contact() {
//         const [formData, setFormData] = useState({
//                 name: '',
//                 email: '',
//                 company: '',
//                 role: '',
//                 inquiry: '',
//                 budget: '',
//                 message: ''
//         });

//         const [showToast, setShowToast] = useState(false);

//         const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault();
//                 setShowToast(true);
//                 setTimeout(() => setShowToast(false), 3000);

//                 setFormData({
//                         name: '',
//                         email: '',
//                         company: '',
//                         role: '',
//                         inquiry: '',
//                         budget: '',
//                         message: ''
//                 });
//         };

//         const contactInfo = [
//                 {
//                         icon: Mail,
//                         title: 'Email Us',
//                         value: 'enterprise@devmundus.com',
//                         subValue: 'Response within 24 hours',
//                         link: 'mailto:enterprise@devmundus.com'
//                 },
//                 {
//                         icon: Phone,
//                         title: 'Call Us',
//                         value: '+48 729 624 828',
//                         subValue: 'Mon-Fri, 9AM-6PM EST',
//                         link: 'tel:+48729624828'
//                 },
//                 {
//                         icon: MapPin,
//                         title: 'Warsaw Office',
//                         value: 'Warsaw , Poland',
//                         subValue: 'Global offices available',
//                         link: null
//                 },
//                 {
//                         icon: Clock,
//                         title: 'Support Hours',
//                         value: '24/7 Enterprise Support',
//                         subValue: 'Premium clients only',
//                         link: null
//                 }
//         ];

//         return (
//                 <section id="contact" className="py-28 px-6 bg-slate-50">
//                         {/* Toast Notification */}
//                         {showToast && (
//                                 <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-top-5">
//                                         Thank you for reaching out. Our team will contact you within 24 hours.
//                                 </div>
//                         )}

//                         <div className="container mx-auto">
//                                 {/* Section Header */}
//                                 <div className="max-w-3xl mx-auto text-center mb-20">
//                                         <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full mb-6">
//                                                 Get in Touch
//                                         </div>
//                                         <h2 className="mb-6 text-slate-900 text-3xl md:text-4xl font-semibold">Let&apos;s Discuss Your Needs</h2>
//                                         <p className="text-slate-600 text-lg leading-relaxed">
//                                                 Whether you&apos;re looking to hire top talent, seeking opportunities as a developer, or need project cost estimation, our team is here to help.
//                                         </p>
//                                 </div>

//                                 {/* Contact Info Cards */}
//                                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//                                         {contactInfo.map((info, index) => {
//                                                 const Icon = info.icon;
//                                                 return (
//                                                         <div key={index} className="p-6 text-center bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-lg transition-all">
//                                                                 <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
//                                                                         <Icon className="text-white" size={24} />
//                                                                 </div>
//                                                                 <h4 className="mb-2 text-slate-900 font-medium">{info.title}</h4>
//                                                                 {info.link ? (
//                                                                         <a
//                                                                                 href={info.link}
//                                                                                 className="text-slate-700 hover:text-slate-900 transition-colors block mb-1"
//                                                                                 target={info.link.startsWith('http') ? '_blank' : undefined}
//                                                                                 rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
//                                                                         >
//                                                                                 {info.value}
//                                                                         </a>
//                                                                 ) : (
//                                                                         <p className="text-slate-700 mb-1">{info.value}</p>
//                                                                 )}
//                                                                 <p className="text-xs text-slate-500">{info.subValue}</p>
//                                                         </div>
//                                                 );
//                                         })}
//                                 </div>

//                                 {/* Contact Form */}
//                                 <div className="max-w-3xl mx-auto p-10 bg-white border border-slate-100 rounded-lg shadow-xl">
//                                         <div className="mb-8 text-center">
//                                                 <h3 className="mb-2 text-slate-900 text-2xl font-semibold">Send Us a Message</h3>
//                                                 <p className="text-slate-600">Fill out the form below and we&apos;ll get back to you promptly.</p>
//                                         </div>

//                                         <form onSubmit={handleSubmit}>
//                                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                                         <div>
//                                                                 <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                         Full Name *
//                                                                 </label>
//                                                                 <input
//                                                                         id="name"
//                                                                         type="text"
//                                                                         placeholder="John Smith"
//                                                                         value={formData.name}
//                                                                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                                                         required
//                                                                         className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                         Work Email *
//                                                                 </label>
//                                                                 <input
//                                                                         id="email"
//                                                                         type="email"
//                                                                         placeholder="john@company.com"
//                                                                         value={formData.email}
//                                                                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                                                         required
//                                                                         className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                                 />
//                                                         </div>
//                                                 </div>

//                                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                                         <div>
//                                                                 <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                         Company Name *
//                                                                 </label>
//                                                                 <input
//                                                                         id="company"
//                                                                         type="text"
//                                                                         placeholder="Acme Corporation"
//                                                                         value={formData.company}
//                                                                         onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                                                                         required
//                                                                         className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                                 />
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                         Your Role *
//                                                                 </label>
//                                                                 <input
//                                                                         id="role"
//                                                                         type="text"
//                                                                         placeholder="CTO, VP Engineering, etc."
//                                                                         value={formData.role}
//                                                                         onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//                                                                         required
//                                                                         className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                                 />
//                                                         </div>
//                                                 </div>

//                                                 <div className="grid md:grid-cols-2 gap-6 mb-6">
//                                                         <div>
//                                                                 <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                         Inquiry Type *
//                                                                 </label>
//                                                                 <select
//                                                                         id="inquiry"
//                                                                         value={formData.inquiry}
//                                                                         onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
//                                                                         required
//                                                                         className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                                 >
//                                                                         <option value="">Select inquiry type</option>
//                                                                         <option value="hiring">Hire Developers</option>
//                                                                         <option value="costing">Project Cost Estimation</option>
//                                                                         <option value="managed">Managed Services</option>
//                                                                         <option value="developer">I&apos;m a Developer</option>
//                                                                         <option value="partnership">Partnership Opportunity</option>
//                                                                         <option value="other">Other</option>
//                                                                 </select>
//                                                         </div>
//                                                         <div>
//                                                                 <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                         Estimated Budget
//                                                                 </label>
//                                                                 <select
//                                                                         id="budget"
//                                                                         value={formData.budget}
//                                                                         onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
//                                                                         className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                                 >
//                                                                         <option value="">Select budget range</option>
//                                                                         <option value="<50k">Under $50,000</option>
//                                                                         <option value="50k-100k">$50,000 - $100,000</option>
//                                                                         <option value="100k-250k">$100,000 - $250,000</option>
//                                                                         <option value="250k-500k">$250,000 - $500,000</option>
//                                                                         <option value="500k+">$500,000+</option>
//                                                                 </select>
//                                                         </div>
//                                                 </div>

//                                                 <div className="mb-8">
//                                                         <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
//                                                                 Project Details *
//                                                         </label>
//                                                         <textarea
//                                                                 id="message"
//                                                                 placeholder="Tell us about your project requirements, timeline, team size needed, or any specific questions..."
//                                                                 rows={6}
//                                                                 value={formData.message}
//                                                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                                                                 required
//                                                                 className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
//                                                         />
//                                                 </div>

//                                                 <button
//                                                         type="submit"
//                                                         className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
//                                                 >
//                                                         <Send size={20} />
//                                                         Submit Request
//                                                 </button>

//                                                 <p className="text-xs text-slate-500 mt-4 text-center">
//                                                         By submitting this form, you agree to our privacy policy and terms of service.
//                                                 </p>
//                                         </form>
//                                 </div>
//                         </div>
//                 </section>
//         );
// }

'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';

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
                        // Initialize EmailJS with environment variable
                        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

                        await emailjs.send(
                                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                                {
                                        to_email: 'enterprise@devmundus.com',
                                        from_name: formData.name,
                                        from_email: formData.email,
                                        company: formData.company,
                                        role: formData.role,
                                        inquiry: formData.inquiry,
                                        budget: formData.budget,
                                        message: formData.message,
                                        subject: `New Contact Form Submission from ${formData.name}`,
                                        reply_to: formData.email
                                }
                        );

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
                        subValue: 'Mon-Fri, 9AM-6PM EST',
                        link: 'tel:+48729624828'
                },
                {
                        icon: MapPin,
                        title: 'Warsaw Office',
                        value: 'Warsaw , Poland',
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
                <section id="contact" className="py-28 px-6 bg-slate-50">
                        {/* Toast Notification */}
                        {showToast && (
                                <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-top-5">
                                        Thank you for reaching out! Our team will contact you within 24 hours.
                                </div>
                        )}

                        <div className="container mx-auto">
                                {/* Section Header */}
                                <div className="max-w-3xl mx-auto text-center mb-20">
                                        <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full mb-6">
                                                Get in Touch
                                        </div>
                                        <h2 className="mb-6 text-slate-900 text-3xl md:text-4xl font-semibold">Let&apos;s Discuss Your Needs</h2>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                                Whether you&apos;re looking to hire top talent, seeking opportunities as a developer, or need project cost estimation, our team is here to help.
                                        </p>
                                </div>

                                {/* Contact Info Cards */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                        {contactInfo.map((info, index) => {
                                                const Icon = info.icon;
                                                return (
                                                        <div key={index} className="p-6 text-center bg-white border border-slate-100 rounded-lg shadow-sm hover:shadow-lg transition-all">
                                                                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                                                                        <Icon className="text-white" size={24} />
                                                                </div>
                                                                <h4 className="mb-2 text-slate-900 font-medium">{info.title}</h4>
                                                                {info.link ? (
                                                                        <a
                                                                                href={info.link}
                                                                                className="text-slate-700 hover:text-slate-900 transition-colors block mb-1"
                                                                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                                                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                                        >
                                                                                {info.value}
                                                                        </a>
                                                                ) : (
                                                                        <p className="text-slate-700 mb-1">{info.value}</p>
                                                                )}
                                                                <p className="text-xs text-slate-500">{info.subValue}</p>
                                                        </div>
                                                );
                                        })}
                                </div>

                                {/* Contact Form */}
                                <div className="max-w-3xl mx-auto p-10 bg-white border border-slate-100 rounded-lg shadow-xl">
                                        <div className="mb-8 text-center">
                                                <h3 className="mb-2 text-slate-900 text-2xl font-semibold">Send Us a Message</h3>
                                                <p className="text-slate-600">Fill out the form below and we&apos;ll get back to you promptly.</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                                                        Full Name *
                                                                </label>
                                                                <input
                                                                        id="name"
                                                                        type="text"
                                                                        placeholder="John Smith"
                                                                        value={formData.name}
                                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                        required
                                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                                                                />
                                                        </div>
                                                        <div>
                                                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                                        Work Email *
                                                                </label>
                                                                <input
                                                                        id="email"
                                                                        type="email"
                                                                        placeholder="john@company.com"
                                                                        value={formData.email}
                                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                        required
                                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                                                                />
                                                        </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                                                                        Company Name *
                                                                </label>
                                                                <input
                                                                        id="company"
                                                                        type="text"
                                                                        placeholder="Acme Corporation"
                                                                        value={formData.company}
                                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                                        required
                                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                                                                />
                                                        </div>
                                                        <div>
                                                                <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                                                                        Your Role *
                                                                </label>
                                                                <input
                                                                        id="role"
                                                                        type="text"
                                                                        placeholder="CTO, VP Engineering, etc."
                                                                        value={formData.role}
                                                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                                        required
                                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                                                                />
                                                        </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                                <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700 mb-2">
                                                                        Inquiry Type *
                                                                </label>
                                                                <select
                                                                        id="inquiry"
                                                                        value={formData.inquiry}
                                                                        onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                                                                        required
                                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
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
                                                        <div>
                                                                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                                                                        Estimated Budget
                                                                </label>
                                                                <select
                                                                        id="budget"
                                                                        value={formData.budget}
                                                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
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

                                                <div className="mb-8">
                                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                                                Project Details *
                                                        </label>
                                                        <textarea
                                                                id="message"
                                                                placeholder="Tell us about your project requirements, timeline, team size needed, or any specific questions..."
                                                                rows={6}
                                                                value={formData.message}
                                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                                required
                                                                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                                                        />
                                                </div>

                                                <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                >
                                                        <Send size={20} />
                                                        {isSubmitting ? 'Sending...' : 'Submit Request'}
                                                </button>

                                                <p className="text-xs text-slate-500 mt-4 text-center">
                                                        By submitting this form, you agree to our privacy policy and terms of service.
                                                </p>
                                        </form>
                                </div>
                        </div>
                </section>
        );
}