"use client";

import { Shield, Users, Target, Award, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export function About() {
        const values = [
                {
                        icon: Globe,
                        title: "Global Reliability",
                        description:
                                "US-registered company ensuring accountability and trust with international standards and business practices.",
                },
                {
                        icon: Award,
                        title: "Exceptional Expertise",
                        description:
                                "Strong development base in Pakistan delivering world-class engineering talent at competitive rates.",
                },
                {
                        icon: Target,
                        title: "End-to-End Delivery",
                        description:
                                "Complete product journey management from initial concept through deployment and ongoing support.",
                },
                {
                        icon: TrendingUp,
                        title: "Cost-Efficient Solutions",
                        description:
                                "High-quality development at 40-60% cost savings compared to traditional US-only development teams.",
                },
                {
                        icon: Users,
                        title: "Seamless Integration",
                        description:
                                "Our team works as an extension of your business with dedicated account management and collaboration.",
                },
                {
                        icon: Shield,
                        title: "Enterprise-Grade Security",
                        description:
                                "SOC 2, GDPR compliance with robust IP protection and secure development practices.",
                },
        ];

        const stats = [
                { value: "500+", label: "Projects Delivered" },
                { value: "200+", label: "Active Clients" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "Countries Served" },
        ];

        return (
                <section id="about" className="py-28 px-6 bg-white">
                        <div className="container mx-auto">
                                {/* Heading */}
                                <div className="max-w-3xl mx-auto text-center mb-20">
                                        <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full mb-6 font-medium">
                                                About DevMundus
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
                                                Your Global Technology Partner for Digital Excellence
                                        </h2>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                                As a US-registered company with a robust development base in
                                                Pakistan, DevMundus combines global reliability with exceptional
                                                engineering expertise. We handle the entire product journey — from
                                                concept and design to development, deployment, and long-term
                                                support — delivering high-quality, cost-efficient solutions to
                                                startups, agencies, and enterprises worldwide.
                                        </p>
                                </div>

                                {/* Core Values */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                                        {values.map((value, index) => {
                                                const Icon = value.icon;
                                                return (
                                                        <Card
                                                                key={index}
                                                                className="p-8 hover:shadow-lg transition-all duration-300 border-slate-100"
                                                        >
                                                                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                                                                        <Icon className="text-white" size={28} />
                                                                </div>
                                                                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                                                        {value.title}
                                                                </h3>
                                                                <p className="text-slate-600 leading-relaxed">
                                                                        {value.description}
                                                                </p>
                                                        </Card>
                                                );
                                        })}
                                </div>

                                {/* Stats Section */}
                                <div className="grid md:grid-cols-4 gap-8 p-12 bg-slate-900 rounded-2xl">
                                        {stats.map((stat, index) => (
                                                <div key={index} className="text-center">
                                                        <div className="text-4xl font-bold mb-2 bg-linear-to-br from-teal-700 to-teal-500 bg-clip-text text-transparent">
                                                                {stat.value}
                                                        </div>
                                                        <p className="text-teal-100">{stat.label}</p>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
}