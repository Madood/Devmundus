'use client';

import React from 'react';

interface LogoProps {
        variant?: 'dark' | 'light';
        showTagline?: boolean;
        size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', showTagline = false, size = 'md' }: LogoProps) {
        const colors = variant === 'dark' ? 'text-slate-900' : 'text-white';
        const sizes = {
                sm: 'text-lg',
                md: 'text-2xl',
                lg: 'text-3xl',
        };

        return (
                <div className={`flex flex-col ${colors}`}>
                        <span className={`font-bold ${sizes[size]}`}>DevMundus</span>
                        {showTagline && (
                                <span className="text-sm text-slate-500">
                                        Bridging Tech Stars with Opportunity
                                </span>
                        )}
                </div>
        );
}
