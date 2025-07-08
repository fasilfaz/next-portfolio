import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fasil M - Freelance Full Stack, Mobile & AI Developer',
  description: 'Expert freelance developer Fasil M, specializing in creating high-performance web and mobile applications with MERN/MEAN stacks, Next.js, React Native, and intelligent AI agent solutions. fasil m',
  keywords: 'Fasil M, freelancer, full stack developer, MERN stack, MEAN stack, Next.js, React Native, AI agent developer, mobile app developer, web developer, portfolio, fasilm',
  authors: [{ name: 'Fasil M' }],
  creator: 'Fasil M',
  verification: {
    google: 'xAHZ48IoH60DlZ2O6HroMtJtzWpEeoAP4YE4bn8MddY',
  },
  openGraph: {
    title: 'Fasil M - Freelance Full Stack, Mobile & AI Developer',
    description: 'Expert freelance developer specializing in web, mobile, and AI solutions.',
    url: 'https://fasilm.vercel.app/', // ❗️ Replace with your actual domain
    siteName: 'Fasil M Portfolio',
    // image: '/og-image.png', // ❗️ Add a social sharing image to your `public` folder
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fasil M',
    url: 'https://fasilm.vercel.app/', // ❗️ Replace with your actual domain
    jobTitle: 'Freelance Full Stack, Mobile & AI Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
    sameAs: [
      'https://www.linkedin.com/in/fasil-m/', 
      'https://github.com/fasilfaz'
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
         <link rel="icon" href="/assets/fasil/fasil.jpg"  />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Footer />
      </body>
    </html>
  );
}