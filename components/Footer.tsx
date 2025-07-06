'use client';

import { Heart, Code2, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Agent Development',
    'Database Design',
    'Cloud Solutions',
    'Technical Consulting'
  ];

  const contactInfo = [
    { icon: Mail, text: 'fasilm5171@gmail.com', href: "mailto:fasilm5171@gmail.com" },
    { icon: Phone, text: '+91 7306165171', href: 'tel:+917306165171' },
    { icon: MapPin, text: 'Kerla, India', href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer specializing in modern web technologies, mobile apps, and AI solutions. 
              Passionate about creating innovative digital experiences.
            </p>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <info.icon className="h-4 w-4" />
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <p key={index} className="text-slate-400 text-sm">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let's Work Together</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ready to start your next project? I'm available for freelance work and full-time opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 flex items-center space-x-1 text-sm">
              <span>Built with</span>
              {/* <Heart className="h-4 w-4 text-red-400" /> */}
              <span>using Next.js & Tailwind CSS</span>
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 Fasil M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}