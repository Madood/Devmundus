'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // we'll define this next

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        variant?: 'default' | 'ghost' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
        children,
        className,
        variant = 'default',
        ...props
}) => {
        const base =
                'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

        const variants = {
                default: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
                ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
                outline:
                        'border border-slate-300 text-slate-900 hover:bg-slate-50 focus:ring-slate-300',
        };

        return (
                <button
                        className={cn(base, variants[variant], className)}
                        {...props}
                >
                        {children}
                </button>
        );
};
