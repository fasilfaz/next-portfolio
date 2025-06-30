'use client';

import { useState } from 'react';
import { ExternalLink, Github, Bot, Smartphone, Globe, Database, Calendar, Users, Star } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Management System',
      description: 'Intelligent task management platform with AI agent integration for automated scheduling, priority optimization, and smart notifications. Features real-time collaboration and predictive analytics.',
      longDescription: 'A comprehensive task management solution that leverages artificial intelligence to optimize workflow efficiency. The system includes automated task prioritization, intelligent scheduling suggestions, and AI-powered insights to help teams work more effectively.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AI Agents', 'MongoDB', 'OpenAI', 'Socket.io'],
      category: 'ai',
      github: '#',
      demo: '#',
      featured: true,
      status: 'Completed',
      duration: '4 months',
      team: '3 developers',
      highlights: [
        '40% increase in team productivity',
        'AI-powered task prioritization',
        'Real-time collaboration features',
        'Predictive analytics dashboard'
      ]
    },
    {
      id: 2,
      title: 'E-Commerce Mobile Application',
      description: 'Cross-platform mobile application built with React Native, featuring real-time inventory management, secure payment integration, and personalized shopping experience.',
      longDescription: 'A full-featured e-commerce mobile app with advanced features like AR product preview, voice search, and AI-powered product recommendations. Includes admin dashboard for inventory management.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Stripe', 'Redux', 'TypeScript', 'Expo'],
      category: 'mobile',
      github: '#',
      demo: '#',
      featured: true,
      status: 'Completed',
      duration: '6 months',
      team: '4 developers',
      highlights: [
        '50k+ downloads in first month',
        'AR product preview feature',
        'Voice search integration',
        '99.9% uptime reliability'
      ]
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data visualization, automated reporting, and customizable KPI tracking for business intelligence.',
      longDescription: 'Enterprise-grade analytics platform providing real-time insights through interactive dashboards, automated report generation, and advanced data visualization capabilities.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'PostgreSQL', 'Chart.js', 'WebSocket', 'Redis', 'Docker'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false,
      status: 'Completed',
      duration: '3 months',
      team: '2 developers',
      highlights: [
        'Real-time data processing',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-tenant architecture'
      ]
    },
    {
      id: 4,
      title: 'Intelligent Customer Service Chatbot',
      description: 'Advanced chatbot system using natural language processing for automated customer support with sentiment analysis and escalation protocols.',
      longDescription: 'AI-powered customer service solution with advanced NLP capabilities, sentiment analysis, and intelligent routing to human agents when needed. Includes analytics dashboard for performance monitoring.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'PostgreSQL', 'Docker'],
      category: 'ai',
      github: '#',
      demo: '#',
      featured: true,
      status: 'Completed',
      duration: '2 months',
      team: '2 developers',
      highlights: [
        '85% query resolution rate',
        'Multi-language support',
        'Sentiment analysis integration',
        '24/7 automated support'
      ]
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Full-stack social media platform with real-time messaging, content sharing, user engagement features, and advanced privacy controls.',
      longDescription: 'Modern social media platform with features like real-time chat, story sharing, live streaming, and advanced content moderation. Built with scalability and user privacy in mind.',
      image: 'https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['MERN', 'Socket.io', 'Cloudinary', 'JWT', 'Redis', 'AWS S3'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false,
      status: 'In Progress',
      duration: '8 months',
      team: '5 developers',
      highlights: [
        'Real-time messaging system',
        'Content moderation AI',
        'Live streaming capability',
        'Advanced privacy controls'
      ]
    },
    {
      id: 6,
      title: 'Enterprise Inventory Management',
      description: 'Enterprise-level inventory management system with barcode scanning, automated reordering, analytics, and multi-location support.',
      longDescription: 'Comprehensive inventory management solution for enterprise clients with features like predictive restocking, barcode/QR code scanning, and detailed analytics reporting.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Supabase', 'TypeScript', 'PWA', 'Chart.js', 'Tailwind'],
      category: 'web',
      github: '#',
      demo: '#',
      featured: false,
      status: 'Completed',
      duration: '5 months',
      team: '3 developers',
      highlights: [
        'Barcode scanning integration',
        'Predictive restocking alerts',
        'Multi-location support',
        'Comprehensive reporting'
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'web', label: 'Web Applications', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'ai', label: 'AI Projects', icon: Bot },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my work spanning web applications, mobile apps, and AI-powered solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              <filter.icon className="h-4 w-4" />
              <span className="font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium flex items-center justify-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>Featured Project</span>
                </div>
              )}
              
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    title="View Code"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.team}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative solutions. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Github className="h-5 w-5" />
              <span>View All on GitHub</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}