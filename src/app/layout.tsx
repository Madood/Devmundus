// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevMundus - Premium Software Development & IT Solutions',
  description: 'Expert software development, mobile apps, web applications, and IT solutions. Trusted by startups and enterprises worldwide with 50+ projects delivered.',
  keywords: 'software development, mobile apps, web development, React Native, Node.js, React, IT solutions, custom software',
  authors: [{ name: 'DevMundus' }],
  creator: 'DevMundus',
  publisher: 'DevMundus',
  robots: 'index, follow',
  openGraph: {
    title: 'DevMundus - Premium Software Development',
    description: 'Expert software development, mobile apps, web applications, and IT solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DevMundus',
    url: 'https://devmundus.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevMundus - Premium Software Development',
    description: 'Expert software development solutions for startups and enterprises.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Comprehensive Favicon Setup */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* PNG icons for different sizes */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f766e" />
        <meta name="msapplication-TileColor" content="#0f766e" />
        
        {/* Cache control for development */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}