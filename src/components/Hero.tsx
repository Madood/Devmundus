'use client';

import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroProps {
        onNavigate?: (section: string) => void; // optional prop
}

export function Hero({ onNavigate }: HeroProps) {
        const trustedBy = ['Fortune 500', 'Startups', 'Enterprise', 'SMBs'];

        return (
                <section className="pt-40 pb-24 px-6 bg-linear-to-b from-slate-50 to-white">
                        <div className="container mx-auto">
                                <div className="grid lg:grid-cols-2 gap-16 items-center">
                                        {/* LEFT */}
                                        <div className="max-w-2xl">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full mb-8 border border-slate-200">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                        <span className="text-sm">Trusted by 200+ Enterprise Clients</span>
                                                </div>

                                                <h1 className="mb-6 text-slate-900 text-4xl lg:text-5xl font-bold leading-tight">
                                                        Build. Launch. Scale. <br /> Globally. Effortlessly.
                                                </h1>

                                                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                                        <strong>DevMundus</strong> is your global technology partner for building world-class digital products. From concept to deployment and beyond, we handle the entire product journey — combining U.S.-based reliability with exceptional engineering expertise from our Pakistan development base.
                                                </p>

                                                <div className="space-y-3 mb-10">
                                                        {['Dedicated development teams', 'End-to-end product development', 'Cost-efficient global delivery'].map((feature, idx) => (
                                                                <div key={idx} className="flex items-center gap-3">
                                                                        <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                                                                        <span className="text-slate-700">{feature}</span>
                                                                </div>
                                                        ))}
                                                </div>

                                                <div className="flex flex-wrap gap-4 mb-12">
                                                        <Button
                                                                className="bg-linear-to-r from-teal-700 to-teal-500 hover:from-teal-600 hover:to-teal-400 px-8 py-3 text-white text-base font-medium rounded-lg flex items-center transition-all duration-200"
                                                                onClick={() => onNavigate?.('services')} // call prop if provided
                                                        >
                                                                Explore Solutions
                                                                <ArrowRight className="ml-2" size={20} />
                                                        </Button>

                                                        <Button
                                                                variant="outline"
                                                                className="border-slate-300 px-8 py-3 text-slate-800 text-base font-medium rounded-lg hover:bg-slate-50"
                                                                onClick={() => onNavigate?.('contact')}
                                                        >
                                                                Request Consultation
                                                        </Button>
                                                </div>

                                                <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
                                                        <p className="text-sm text-slate-500">Serving:</p>
                                                        <div className="flex flex-wrap gap-4">
                                                                {trustedBy.map((name, idx) => (
                                                                        <span key={idx} className="text-sm text-slate-600">{name}</span>
                                                                ))}
                                                        </div>
                                                </div>
                                        </div>

                                        {/* RIGHT */}
                                        <div className="relative lg:ml-8">
                                                <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                                                        <ImageWithFallback
                                                                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                                                                alt="Professional development workspace"
                                                                className="w-full h-full object-cover"
                                                        />
                                                </div>

                                                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl ring-1 ring-slate-900/5">
                                                        <div className="text-3xl text-slate-900 mb-1 font-bold">2,500+</div>
                                                        <div className="text-slate-600 text-sm">Expert Developers</div>
                                                </div>

                                                <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-xl ring-1 ring-slate-900/5">
                                                        <div className="text-3xl text-slate-900 mb-1 font-bold">250+</div>
                                                        <div className="text-slate-600 text-sm">Enterprise Partners</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}