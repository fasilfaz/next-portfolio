'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Bot, Smartphone, Globe, Star } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Management',
      description: 'Intelligent task management system with AI agent integration for automated scheduling and priority optimization.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AI Agents', 'MongoDB'],
      category: 'ai',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'Cross-platform mobile application built with React Native, featuring real-time inventory and payment integration.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      category: 'mobile',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data visualization and automated reporting features.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'PostgreSQL', 'Chart.js', 'WebSocket'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Customer Service Chatbot',
      description: 'Intelligent chatbot system using natural language processing for automated customer support.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
      category: 'ai',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Full-stack social media platform with real-time messaging, content sharing, and user engagement features.',
      image: 'https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['MERN', 'Socket.io', 'Cloudinary', 'JWT'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Inventory Management System',
      description: 'Enterprise-level inventory management with barcode scanning, automated reordering, and analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Supabase', 'TypeScript', 'PWA'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'ai', label: 'AI Projects', icon: Bot },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web applications, mobile apps, and AI-powered solutions
          </p>
        </div>

        {/* Animated Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <filter.icon className="h-4 w-4" />
              <span className="font-medium text-sm sm:text-base">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                height: 'fit-content',
                minHeight: '520px'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="relative">
                  <div className="absolute -top-1 -right-1 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-2xl text-xs font-bold flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    <a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Animation */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 mb-6 text-lg">
            Want to see more of my work?
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            onClick={(e) => e.preventDefault()}
          >
            <Github className="h-5 w-5" />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 769px) and (max-width: 1279px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}