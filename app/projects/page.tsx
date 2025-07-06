'use client';

import { useState } from 'react';
import { ExternalLink, Github, Bot, Smartphone, Globe, Database, Calendar, Users, Star } from 'lucide-react';


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      // title: 'AI-Powered Task Management System',
      image: '/assets/works/cbsSite.png',
     category: 'web',
      github: '#',
      demo: 'https://www.continuityoman.com/',
      status: 'Completed',
   
    },
    {
      id: 2,
      // title: 'E-Commerce Mobile Application',
     image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      github: '#',
      demo: '#',
      status: 'Completed',
    
    },
    {
      id: 3,
      // title: 'Real-time Analytics Dashboard',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
     category: 'web',
      github: '#',
      demo: '#',
      status: 'Completed',
   
    },
    {
      id: 4,
      // title: 'Intelligent Customer Service Chatbot',
     image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      github: '#',
      demo: '#',
      status: 'Completed',
     
    },
    {
      id: 5,
      // title: 'Social Media Platform',
     
      image: 'https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=800',
     
      category: 'web',
      github: '#',
      demo: '#',
      status: 'In Progress',
     
    },
    {
      id: 6,
      // title: 'Enterprise Inventory Management',
   
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
   
      category: 'web',
      github: '#',
      demo: '#',
      status: 'Completed'
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  // alt={project.title}
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