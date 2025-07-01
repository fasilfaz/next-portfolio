import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fasil M - Freelance Full Stack, Mobile & AI Developer',
  description: 'Expert freelance developer Fasil M, specializing in creating high-performance web and mobile applications with MERN/MEAN stacks, Next.js, React Native, and intelligent AI agent solutions.',
  keywords: 'Fasil M, freelancer, full stack developer, MERN stack, MEAN stack, Next.js, React Native, AI agent developer, mobile app developer, web developer, portfolio, fasilm',
  authors: [{ name: 'Fasil M' }],
  creator: 'Fasil M',
  openGraph: {
    title: 'Fasil M - Freelance Full Stack, Mobile & AI Developer',
    description: 'Expert freelance developer specializing in web, mobile, and AI solutions.',
    url: 'https://your-domain.com', // ❗️ Replace with your actual domain
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}