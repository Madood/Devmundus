'use client';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
        src: string;
        alt: string;
        className?: string;
}

export function ImageWithFallback({ src, alt, className }: Props) {
        const [error, setError] = useState(false);
        return (
                <Image
                        src={error ? '/fallback.jpg' : src}
                        alt={alt}
                        fill
                        className={className}
                        onError={() => setError(true)}
                />
        );
}
