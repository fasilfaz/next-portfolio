'use client';

import Hero from '@/components/Hero';
import About from './about/page';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ServicesPage from '@/components/Services';
import TechCarouselPage from '@/components/TechCarouselPage';

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="bg-gradient-to-br from-slate-50 to-blue-50 py-10">
        <About />
      </section>
      <section id="services" className="bg-gradient-to-br from-slate-50 to-blue-50 py-10">
        <ServicesPage />
      </section>
      <section id="projects" className="bg-gradient-to-br from-slate-50 to-blue-50 py-10">
        <Projects />
      </section>
      <section id="skills" className="bg-gradient-to-br from-slate-50 to-blue-50 py-10">
        <Skills />
      </section>
      <section id="tech" className="bg-gradient-to-br from-slate-50 to-blue-50 py-10">
        <TechCarouselPage />
      </section>
      <section id="contact" className="bg-gradient-to-br from-slate-50 to-blue-50 py-10">
        <Contact />
      </section>
    </>
  );
}