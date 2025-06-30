'use client';

import Hero from '@/components/Hero';
import About from './about/page';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}